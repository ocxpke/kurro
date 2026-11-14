-- kurro · support for the live hiring flow: proposal -> accept -> (mock) payment -> reviews.

-- ---------------------------------------------------------------------------
-- Jobs: allowed status changes from the app
-- ---------------------------------------------------------------------------
-- From the API (role "authenticated"):
--   * the terms of a job (price, method, dates, people) never change: propose a new job instead;
--   * proposed -> accepted / rejected only by the side that did not propose it;
--   * proposed / accepted -> cancelled by either side;
--   * -> completed never directly: it happens when both sides confirmed the payment.
create function public.guard_job_update() returns trigger
language plpgsql security invoker set search_path = '' as $$
begin
  if current_user <> 'authenticated' then
    return new;  -- internal updates (triggers, dashboard) are not restricted
  end if;
  if (new.match_id, new.worker_id, new.company_id, new.ad_id, new.proposed_by, new.price_cents,
      new.payment_method, new.starts_at, new.ends_at, new.created_at)
     is distinct from
     (old.match_id, old.worker_id, old.company_id, old.ad_id, old.proposed_by, old.price_cents,
      old.payment_method, old.starts_at, old.ends_at, old.created_at) then
    raise exception 'The terms of a job cannot change; send a new proposal instead';
  end if;
  if new.status is distinct from old.status then
    if new.status in ('accepted', 'rejected') then
      if old.status <> 'proposed' or (select auth.uid()) = old.proposed_by then
        raise exception 'Only the other side can accept or reject a proposal';
      end if;
    elsif new.status = 'cancelled' then
      if old.status not in ('proposed', 'accepted') then
        raise exception 'This job can no longer be cancelled';
      end if;
    else
      raise exception 'A job is completed when both sides confirm the payment';
    end if;
  end if;
  return new;
end $$;
create trigger jobs_guard_update before update on public.jobs
  for each row execute function public.guard_job_update();

-- ---------------------------------------------------------------------------
-- Mock payments
-- ---------------------------------------------------------------------------
-- Method and amount always come from the job, and each side can only confirm its own part.
create function public.guard_payment() returns trigger
language plpgsql security definer set search_path = '' as $$
declare j public.jobs; me uuid := (select auth.uid());
begin
  select * into j from public.jobs where id = new.job_id;
  if tg_op = 'INSERT' then
    new.method := j.payment_method;
    new.amount_cents := j.price_cents;
  elsif new.job_id <> old.job_id or new.method <> old.method or new.amount_cents <> old.amount_cents then
    raise exception 'Payment details come from the job and cannot change';
  end if;
  if me is not null then
    if me = j.worker_id and new.company_confirmed_at is distinct from (case when tg_op = 'INSERT' then null else old.company_confirmed_at end) then
      raise exception 'Only the company can confirm its side of the payment';
    elsif me = j.company_id and new.worker_confirmed_at is distinct from (case when tg_op = 'INSERT' then null else old.worker_confirmed_at end) then
      raise exception 'Only the professional can confirm their side of the payment';
    end if;
  end if;
  return new;
end $$;
create trigger payments_guard before insert or update on public.payments
  for each row execute function public.guard_payment();

-- Both sides confirmed the payment -> the job is completed and can be reviewed.
create function public.complete_job_on_confirmed_payment() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if new.is_confirmed then
    update public.jobs set status = 'completed' where id = new.job_id and status = 'accepted';
  end if;
  return new;
end $$;
create trigger payments_complete_job after insert or update on public.payments
  for each row execute function public.complete_job_on_confirmed_payment();

revoke execute on function public.guard_job_update(), public.guard_payment(), public.complete_job_on_confirmed_payment()
from public, anon, authenticated;

-- Payments can only be recorded once the job is accepted.
drop policy "manage job payments" on public.payments;
create policy "read job payments" on public.payments for select to authenticated
  using (exists (select 1 from public.jobs j where j.id = job_id and (select auth.uid()) in (j.worker_id, j.company_id)));
create policy "record job payments" on public.payments for insert to authenticated
  with check (exists (select 1 from public.jobs j where j.id = job_id and j.status in ('accepted', 'completed')
    and (select auth.uid()) in (j.worker_id, j.company_id)));
create policy "confirm job payments" on public.payments for update to authenticated
  using (exists (select 1 from public.jobs j where j.id = job_id and (select auth.uid()) in (j.worker_id, j.company_id)))
  with check (exists (select 1 from public.jobs j where j.id = job_id and (select auth.uid()) in (j.worker_id, j.company_id)));

-- ---------------------------------------------------------------------------
-- Pending reviews
-- ---------------------------------------------------------------------------
-- reviewer_id is not readable through the API, so "have I reviewed this job?" is answered by a
-- helper in the private schema (not exposed).
create function private.job_reviewed_by_me(jid uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.reviews where job_id = jid and reviewer_id = (select auth.uid()));
$$;
revoke execute on function private.job_reviewed_by_me(uuid) from public, anon;
grant execute on function private.job_reviewed_by_me(uuid) to authenticated;

-- Completed jobs of the signed-in user that they have not reviewed yet.
create function public.my_pending_reviews()
returns table (job_id uuid, partner_id uuid, partner_role public.user_role, ended_at timestamptz)
language sql stable security invoker set search_path = '' as $$
  select j.id,
         case when j.worker_id = (select auth.uid()) then j.company_id else j.worker_id end,
         case when j.worker_id = (select auth.uid()) then 'company'::public.user_role else 'worker'::public.user_role end,
         j.ends_at
  from public.jobs j
  where j.status = 'completed'
    and (select auth.uid()) in (j.worker_id, j.company_id)
    and not private.job_reviewed_by_me(j.id)
  order by j.ends_at desc;
$$;
revoke execute on function public.my_pending_reviews() from public, anon;
grant execute on function public.my_pending_reviews() to authenticated;
