-- kurro · Google sign-in dropped: restore the sign-up behaviour from the initial schema.
-- Every profile is created by the sign-up trigger from the role sent by the email form,
-- and users cannot insert profiles themselves.

drop policy "insert own profile" on public.profiles;
revoke insert (id, role, display_name, city) on public.profiles from authenticated;

create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, role, display_name)
  values (
    new.id,
    (new.raw_user_meta_data ->> 'role')::public.user_role,
    coalesce(nullif(new.raw_user_meta_data ->> 'display_name', ''), split_part(new.email, '@', 1))
  );
  return new;
end $$;
revoke execute on function public.handle_new_user() from public, anon, authenticated;
