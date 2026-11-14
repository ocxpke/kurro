-- kurro · sign-in with Google (or any OAuth provider).
-- Google does not send our "role", so the profile can no longer be created at sign-up time for
-- those users. The trigger now creates it only when the sign-up sends a valid role (email form);
-- otherwise the app asks "profesional o empresa" on first sign-in and the user creates it.

create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
declare r text := new.raw_user_meta_data ->> 'role';
begin
  if r in ('worker', 'company') then
    insert into public.profiles (id, role, display_name)
    values (
      new.id,
      r::public.user_role,
      coalesce(nullif(new.raw_user_meta_data ->> 'display_name', ''), split_part(new.email, '@', 1))
    );
  end if;
  return new;
end $$;
revoke execute on function public.handle_new_user() from public, anon, authenticated;

-- A signed-in user without a profile can create their own (once: id is the primary key).
create policy "insert own profile" on public.profiles for insert to authenticated
  with check (id = (select auth.uid()));
grant insert (id, role, display_name, city) on public.profiles to authenticated;
