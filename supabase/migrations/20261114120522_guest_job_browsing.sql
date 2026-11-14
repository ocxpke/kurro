-- kurro · guests (not signed in) can browse open jobs.
-- They see open ads, the public data of the companies that publish them and those companies'
-- published reviews and ratings. Professionals' profiles stay visible only to signed-in users.

-- Open ads (no exact location: guests do not need it)
create policy "guests read open ads" on public.job_ads for select to anon using (status = 'open');
grant select (id, company_id, category_id, title, description, starts_on, ends_on, start_time, end_time,
              duration_hours, budget_cents, budget_type, address, is_urgent, accepts_cash, accepts_card,
              accepts_bizum, status, created_at)
  on public.job_ads to anon;

-- Public company data (no tax id)
create policy "guests read companies" on public.company_profiles for select to anon using (true);
grant select (profile_id, legal_name, category_id, description) on public.company_profiles to anon;

-- Companies' published reviews and scores (who wrote them is never readable)
create policy "guests read published company reviews" on public.reviews for select to anon
  using (published_at is not null and reviewee_role = 'company');
grant select (id, reviewee_id, reviewee_role, overall, would_repeat, comment, published_at) on public.reviews to anon;

create policy "guests read published company scores" on public.review_scores for select to anon
  using (reviewee_role = 'company'
    and exists (select 1 from public.reviews r where r.id = review_id and r.published_at is not null));
grant select on public.review_scores to anon;

-- Rating views (security invoker: the policies above decide what guests can aggregate)
grant select on public.profile_ratings, public.profile_criterion_ratings to anon;
