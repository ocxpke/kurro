-- kurro · initial schema
-- Relational model: one table per entity, typed columns, foreign keys and constraints.
-- No table stores an entity's fields inside a JSON column.
-- Decisions (2026-11-14): payments are a mock (no real processing), one ad = one position,
-- a review is published once both sides reviewed, no maps.
-- Privacy: workers' home locations are never stored. Only ads have a location (the public
-- work place); distances are computed from the position the worker's device sends at search
-- time, which is not saved.

create extension if not exists postgis with schema extensions;

-- ---------------------------------------------------------------------------
-- Enums
-- ---------------------------------------------------------------------------
create type public.user_role      as enum ('worker', 'company');
create type public.day_status     as enum ('free', 'booked', 'unavailable');
create type public.budget_type    as enum ('hourly', 'fixed');
create type public.ad_status      as enum ('open', 'filled', 'closed', 'cancelled');
create type public.job_status     as enum ('proposed', 'accepted', 'rejected', 'completed', 'cancelled');
create type public.payment_method as enum ('cash', 'card', 'bizum');

-- ---------------------------------------------------------------------------
-- Catalogs
-- ---------------------------------------------------------------------------
create table public.categories (
  id         smallint generated always as identity primary key,
  slug       text not null unique check (slug ~ '^[a-z0-9-]+$'),
  name       text not null unique,
  sort_order smallint not null default 0
);

insert into public.categories (slug, name, sort_order) values
  ('hosteleria-gastronomia', 'Hostelería y Gastronomía', 1),
  ('artesania',              'Artesanía',                2),
  ('bienestar-emocional',    'Bienestar emocional',      3),
  ('obras-reformas',         'Obras y reformas',         4);

-- Review criteria depend on who is being reviewed.
create table public.review_criteria (
  id          smallint generated always as identity primary key,
  target_role public.user_role not null,
  name        text not null,
  sort_order  smallint not null default 0,
  unique (target_role, name),
  unique (id, target_role)
);

insert into public.review_criteria (target_role, name, sort_order) values
  ('worker',  'Puntualidad', 1), ('worker',  'Calidad',  2), ('worker',  'Trato',    3), ('worker',  'Fiabilidad', 4),
  ('company', 'Pago',        1), ('company', 'Trato',    2), ('company', 'Horarios', 3), ('company', 'Ambiente',   4);

-- ---------------------------------------------------------------------------
-- Users
-- ---------------------------------------------------------------------------
create table public.profiles (
  id           uuid primary key references auth.users (id) on delete cascade,
  role         public.user_role not null,
  display_name text not null check (char_length(display_name) between 2 and 80),
  avatar_path  text,
  city         text,  -- Municipality only (e.g. Marbella); never a home address
  created_at   timestamptz not null default now(),
  unique (id, role)
);

create table public.worker_profiles (
  profile_id        uuid primary key,
  role              public.user_role not null default 'worker' check (role = 'worker'),
  headline          text not null check (char_length(headline) between 2 and 80),
  bio               text check (char_length(bio) <= 1000),
  years_experience  smallint check (years_experience between 0 and 70),
  hourly_rate_cents integer check (hourly_rate_cents > 0),
  service_radius_km smallint not null default 15 check (service_radius_km between 1 and 100),
  available_today   boolean not null default false,
  foreign key (profile_id, role) references public.profiles (id, role) on delete cascade
);

create table public.company_profiles (
  profile_id  uuid primary key,
  role        public.user_role not null default 'company' check (role = 'company'),
  legal_name  text not null check (char_length(legal_name) between 2 and 120),
  tax_id      text unique,
  category_id smallint references public.categories (id),
  description text check (char_length(description) <= 1000),
  address     text,
  website     text,
  foreign key (profile_id, role) references public.profiles (id, role) on delete cascade
);

create table public.worker_categories (
  worker_id   uuid not null references public.worker_profiles (profile_id) on delete cascade,
  category_id smallint not null references public.categories (id),
  primary key (worker_id, category_id)
);
create index on public.worker_categories (category_id);

create table public.portfolio_items (
  id         uuid primary key default gen_random_uuid(),
  worker_id  uuid not null references public.worker_profiles (profile_id) on delete cascade,
  image_path text not null,
  caption    text check (char_length(caption) <= 200),
  position   smallint not null default 0,
  created_at timestamptz not null default now()
);
create index on public.portfolio_items (worker_id, position);

-- ---------------------------------------------------------------------------
-- Availability calendar
-- ---------------------------------------------------------------------------
-- Weekly repeating slots (ISO weekday: 1 = Monday ... 7 = Sunday).
create table public.weekly_availability (
  id         uuid primary key default gen_random_uuid(),
  worker_id  uuid not null references public.worker_profiles (profile_id) on delete cascade,
  weekday    smallint not null check (weekday between 1 and 7),
  start_time time not null,
  end_time   time not null,
  check (end_time > start_time)
);
create index on public.weekly_availability (worker_id, weekday);

-- Specific days: free, booked or unavailable (whole day when times are null).
create table public.availability_days (
  id         uuid primary key default gen_random_uuid(),
  worker_id  uuid not null references public.worker_profiles (profile_id) on delete cascade,
  day        date not null,
  status     public.day_status not null,
  start_time time,
  end_time   time,
  check ((start_time is null and end_time is null) or (start_time is not null and end_time is not null and end_time > start_time)),
  unique nulls not distinct (worker_id, day, start_time)
);

-- ---------------------------------------------------------------------------
-- Ads (service requests) and saved searches
-- ---------------------------------------------------------------------------
create table public.job_ads (
  id             uuid primary key default gen_random_uuid(),
  company_id     uuid not null references public.company_profiles (profile_id) on delete cascade,
  category_id    smallint not null references public.categories (id),
  title          text not null check (char_length(title) between 3 and 120),
  description    text not null check (char_length(description) between 10 and 2000),
  starts_on      date not null,
  ends_on        date not null,
  start_time     time,
  end_time       time,
  duration_hours numeric(5, 2) check (duration_hours > 0),
  budget_cents   integer not null check (budget_cents > 0),
  budget_type    public.budget_type not null,
  address        text,
  location       extensions.geography(point, 4326) not null,
  is_urgent      boolean not null default false,
  accepts_cash   boolean not null default true,
  accepts_card   boolean not null default false,
  accepts_bizum  boolean not null default false,
  status         public.ad_status not null default 'open',
  created_at     timestamptz not null default now(),
  check (ends_on >= starts_on),
  check ((start_time is null and end_time is null) or (start_time is not null and end_time is not null)),
  check (accepts_cash or accepts_card or accepts_bizum)
);
create index on public.job_ads (company_id);
create index on public.job_ads (category_id) where status = 'open';
create index on public.job_ads using gist (location);

create table public.saved_searches (
  id                   uuid primary key default gen_random_uuid(),
  company_id           uuid not null references public.company_profiles (profile_id) on delete cascade,
  name                 text not null check (char_length(name) between 2 and 80),
  category_id          smallint references public.categories (id),
  max_hourly_cents     integer check (max_hourly_cents > 0),
  max_distance_km      smallint check (max_distance_km between 1 and 100),
  only_available_today boolean not null default false,
  notify               boolean not null default true,
  created_at           timestamptz not null default now()
);
create index on public.saved_searches (company_id);

-- ---------------------------------------------------------------------------
-- Interest (swipes), matches and chat
-- ---------------------------------------------------------------------------
-- One decision per side per worker/company pair. A match is created when both sides liked.
create table public.interests (
  id           uuid primary key default gen_random_uuid(),
  worker_id    uuid not null references public.worker_profiles (profile_id) on delete cascade,
  company_id   uuid not null references public.company_profiles (profile_id) on delete cascade,
  ad_id        uuid references public.job_ads (id) on delete set null,
  initiated_by public.user_role not null,
  liked        boolean not null,
  created_at   timestamptz not null default now(),
  unique (worker_id, company_id, initiated_by)
);
create index on public.interests (company_id);

create table public.matches (
  id         uuid primary key default gen_random_uuid(),
  worker_id  uuid not null references public.worker_profiles (profile_id) on delete cascade,
  company_id uuid not null references public.company_profiles (profile_id) on delete cascade,
  ad_id      uuid references public.job_ads (id) on delete set null,
  created_at timestamptz not null default now(),
  unique (worker_id, company_id),
  unique (id, worker_id, company_id)
);
create index on public.matches (company_id);

create table public.messages (
  id         uuid primary key default gen_random_uuid(),
  match_id   uuid not null references public.matches (id) on delete cascade,
  sender_id  uuid not null references public.profiles (id) on delete cascade,
  body       text not null check (char_length(body) between 1 and 4000),
  created_at timestamptz not null default now()
);
create index on public.messages (match_id, created_at);

-- ---------------------------------------------------------------------------
-- Hiring and (mock) payments
-- ---------------------------------------------------------------------------
create table public.jobs (
  id             uuid primary key default gen_random_uuid(),
  match_id       uuid not null,
  worker_id      uuid not null,
  company_id     uuid not null,
  ad_id          uuid references public.job_ads (id) on delete set null,
  proposed_by    uuid not null references public.profiles (id),
  price_cents    integer not null check (price_cents > 0),
  payment_method public.payment_method not null,
  starts_at      timestamptz not null,
  ends_at        timestamptz not null,
  status         public.job_status not null default 'proposed',
  created_at     timestamptz not null default now(),
  check (ends_at > starts_at),
  check (proposed_by in (worker_id, company_id)),
  foreign key (match_id, worker_id, company_id) references public.matches (id, worker_id, company_id) on delete cascade
);
create index on public.jobs (match_id);
create index on public.jobs (worker_id);
create index on public.jobs (company_id);
-- One ad = one position: only one accepted or completed job per ad.
create unique index jobs_one_hire_per_ad on public.jobs (ad_id) where status in ('accepted', 'completed');

-- MOCK: no money moves. Records the chosen method (cash, card, Bizum) and that both sides
-- confirmed the payment in the app, so they can review each other.
create table public.payments (
  id                   uuid primary key default gen_random_uuid(),
  job_id               uuid not null unique references public.jobs (id) on delete cascade,
  method               public.payment_method not null,
  amount_cents         integer not null check (amount_cents > 0),
  worker_confirmed_at  timestamptz,
  company_confirmed_at timestamptz,
  is_confirmed         boolean generated always as (worker_confirmed_at is not null and company_confirmed_at is not null) stored,
  created_at           timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Reviews (two-way, anonymous, published when both sides reviewed)
-- ---------------------------------------------------------------------------
create table public.reviews (
  id            uuid primary key default gen_random_uuid(),
  job_id        uuid not null references public.jobs (id) on delete cascade,
  reviewer_id   uuid not null references public.profiles (id) on delete cascade,
  reviewee_id   uuid not null references public.profiles (id) on delete cascade,
  reviewee_role public.user_role not null,
  overall       smallint not null check (overall between 1 and 5),
  would_repeat  boolean not null,
  comment       text check (char_length(comment) <= 1000),
  created_at    timestamptz not null default now(),
  published_at  timestamptz,
  unique (job_id, reviewer_id),
  unique (id, reviewee_role),
  check (reviewer_id <> reviewee_id)
);
create index on public.reviews (reviewee_id) where published_at is not null;

create table public.review_scores (
  review_id     uuid not null,
  criterion_id  smallint not null,
  reviewee_role public.user_role not null,
  score         smallint not null check (score between 1 and 5),
  primary key (review_id, criterion_id),
  foreign key (review_id, reviewee_role) references public.reviews (id, reviewee_role) on delete cascade,
  foreign key (criterion_id, reviewee_role) references public.review_criteria (id, target_role)
);

-- ---------------------------------------------------------------------------
-- Triggers (security definer: they write rows the caller cannot write directly)
-- ---------------------------------------------------------------------------

-- New auth user -> profile. The app sends role and display_name as sign-up metadata.
create function public.handle_new_user() returns trigger
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
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Both sides liked -> match.
create function public.create_match_on_mutual_interest() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if new.liked and exists (
    select 1 from public.interests i
    where i.worker_id = new.worker_id and i.company_id = new.company_id
      and i.initiated_by <> new.initiated_by and i.liked
  ) then
    insert into public.matches (worker_id, company_id, ad_id)
    values (new.worker_id, new.company_id, new.ad_id)
    on conflict (worker_id, company_id) do nothing;
  end if;
  return new;
end $$;
create trigger interests_match after insert or update of liked on public.interests
  for each row execute function public.create_match_on_mutual_interest();

-- Accepted job -> its ad is filled.
create function public.fill_ad_on_accepted_job() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if new.status = 'accepted' and new.ad_id is not null then
    update public.job_ads set status = 'filled' where id = new.ad_id and status = 'open';
  end if;
  return new;
end $$;
create trigger jobs_fill_ad after insert or update of status on public.jobs
  for each row execute function public.fill_ad_on_accepted_job();

-- Review: the reviewer must be one side of a completed job; the reviewee is the other side.
create function public.prepare_review() returns trigger
language plpgsql security definer set search_path = '' as $$
declare j public.jobs;
begin
  select * into j from public.jobs where id = new.job_id;
  if j.status <> 'completed' then
    raise exception 'Only completed jobs can be reviewed';
  end if;
  if new.reviewer_id = j.worker_id then
    new.reviewee_id := j.company_id; new.reviewee_role := 'company';
  elsif new.reviewer_id = j.company_id then
    new.reviewee_id := j.worker_id;  new.reviewee_role := 'worker';
  else
    raise exception 'Only the worker or the company of this job can review it';
  end if;
  new.published_at := null;
  return new;
end $$;
create trigger reviews_prepare before insert on public.reviews
  for each row execute function public.prepare_review();

-- Second review of a job -> both are published at the same time.
create function public.publish_reviews_when_both_done() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if (select count(*) from public.reviews where job_id = new.job_id) = 2 then
    update public.reviews set published_at = now() where job_id = new.job_id and published_at is null;
  end if;
  return new;
end $$;
create trigger reviews_publish after insert on public.reviews
  for each row execute function public.publish_reviews_when_both_done();

revoke execute on function
  public.handle_new_user(), public.create_match_on_mutual_interest(), public.fill_ad_on_accepted_job(),
  public.prepare_review(), public.publish_reviews_when_both_done()
from public, anon, authenticated;

-- ---------------------------------------------------------------------------
-- Search by distance (ads only)
-- ---------------------------------------------------------------------------
-- Open ads near the worker's current position (sent by the device, never stored).
-- Ad locations are public work places.
create function public.nearby_ads(
  lat double precision, lng double precision, radius_km integer default 15,
  category smallint default null, only_urgent boolean default false
) returns table (ad_id uuid, distance_km numeric)
language sql stable security invoker set search_path = '' as $$
  select a.id,
         round((extensions.st_distance(a.location, extensions.st_point(lng, lat, 4326)::extensions.geography) / 1000)::numeric, 1)
  from public.job_ads a
  where a.status = 'open'
    and radius_km between 1 and 100
    and extensions.st_dwithin(a.location, extensions.st_point(lng, lat, 4326)::extensions.geography, radius_km * 1000)
    and (category is null or a.category_id = category)
    and (not only_urgent or a.is_urgent)
  order by 2;
$$;

revoke execute on function public.nearby_ads(double precision, double precision, integer, smallint, boolean) from public, anon;
grant execute on function public.nearby_ads(double precision, double precision, integer, smallint, boolean) to authenticated;

-- ---------------------------------------------------------------------------
-- Ratings (only published reviews)
-- ---------------------------------------------------------------------------
create view public.profile_ratings with (security_invoker = on) as
select reviewee_id as profile_id,
       count(*)                                             as review_count,
       round(avg(overall), 1)                               as rating,
       round(100.0 * avg(would_repeat::int))::int           as repeat_pct,
       count(*) filter (where overall = 5)                  as stars_5,
       count(*) filter (where overall = 4)                  as stars_4,
       count(*) filter (where overall = 3)                  as stars_3,
       count(*) filter (where overall = 2)                  as stars_2,
       count(*) filter (where overall = 1)                  as stars_1
from public.reviews
where published_at is not null
group by reviewee_id;

create view public.profile_criterion_ratings with (security_invoker = on) as
select r.reviewee_id as profile_id, s.criterion_id, round(avg(s.score), 1) as rating, count(*) as review_count
from public.review_scores s
join public.reviews r on r.id = s.review_id
where r.published_at is not null
group by r.reviewee_id, s.criterion_id;

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.categories          enable row level security;
alter table public.review_criteria     enable row level security;
alter table public.profiles            enable row level security;
alter table public.worker_profiles     enable row level security;
alter table public.company_profiles    enable row level security;
alter table public.worker_categories   enable row level security;
alter table public.portfolio_items     enable row level security;
alter table public.weekly_availability enable row level security;
alter table public.availability_days   enable row level security;
alter table public.job_ads             enable row level security;
alter table public.saved_searches      enable row level security;
alter table public.interests           enable row level security;
alter table public.matches             enable row level security;
alter table public.messages            enable row level security;
alter table public.jobs                enable row level security;
alter table public.payments            enable row level security;
alter table public.reviews             enable row level security;
alter table public.review_scores       enable row level security;

-- Catalogs: readable by everyone.
create policy "read categories" on public.categories for select to anon, authenticated using (true);
create policy "read criteria"   on public.review_criteria for select to anon, authenticated using (true);

-- Profiles: signed-in users see profiles; each user edits their own.
create policy "read profiles"   on public.profiles for select to authenticated using (true);
create policy "update own profile" on public.profiles for update to authenticated
  using (id = (select auth.uid())) with check (id = (select auth.uid()));

create policy "read workers"    on public.worker_profiles for select to authenticated using (true);
create policy "insert own worker" on public.worker_profiles for insert to authenticated with check (profile_id = (select auth.uid()));
create policy "update own worker" on public.worker_profiles for update to authenticated
  using (profile_id = (select auth.uid())) with check (profile_id = (select auth.uid()));

create policy "read companies"  on public.company_profiles for select to authenticated using (true);
create policy "insert own company" on public.company_profiles for insert to authenticated with check (profile_id = (select auth.uid()));
create policy "update own company" on public.company_profiles for update to authenticated
  using (profile_id = (select auth.uid())) with check (profile_id = (select auth.uid()));

-- Worker-owned data: public to signed-in users, written by its owner.
create policy "read worker categories" on public.worker_categories for select to authenticated using (true);
create policy "manage own categories"  on public.worker_categories for all to authenticated
  using (worker_id = (select auth.uid())) with check (worker_id = (select auth.uid()));

create policy "read portfolio"         on public.portfolio_items for select to authenticated using (true);
create policy "manage own portfolio"   on public.portfolio_items for all to authenticated
  using (worker_id = (select auth.uid())) with check (worker_id = (select auth.uid()));

create policy "read weekly availability" on public.weekly_availability for select to authenticated using (true);
create policy "manage own weekly availability" on public.weekly_availability for all to authenticated
  using (worker_id = (select auth.uid())) with check (worker_id = (select auth.uid()));

create policy "read availability days" on public.availability_days for select to authenticated using (true);
create policy "manage own availability days" on public.availability_days for all to authenticated
  using (worker_id = (select auth.uid())) with check (worker_id = (select auth.uid()));

-- Ads: open ads are visible to everyone signed in; the company manages its own.
create policy "read open or own ads" on public.job_ads for select to authenticated
  using (status = 'open' or company_id = (select auth.uid()));
create policy "manage own ads" on public.job_ads for all to authenticated
  using (company_id = (select auth.uid())) with check (company_id = (select auth.uid()));

create policy "manage own saved searches" on public.saved_searches for all to authenticated
  using (company_id = (select auth.uid())) with check (company_id = (select auth.uid()));

-- Interests: each side only sees its own decisions (likes stay hidden until there is a match).
create policy "manage own interests" on public.interests for all to authenticated
  using ((initiated_by = 'worker' and worker_id = (select auth.uid())) or (initiated_by = 'company' and company_id = (select auth.uid())))
  with check ((initiated_by = 'worker' and worker_id = (select auth.uid())) or (initiated_by = 'company' and company_id = (select auth.uid())));

-- Matches and chat: only the two participants. Matches are created by the trigger.
create policy "read own matches" on public.matches for select to authenticated
  using ((select auth.uid()) in (worker_id, company_id));

create policy "read match messages" on public.messages for select to authenticated
  using (exists (select 1 from public.matches m where m.id = match_id and (select auth.uid()) in (m.worker_id, m.company_id)));
create policy "send match messages" on public.messages for insert to authenticated
  with check (sender_id = (select auth.uid())
    and exists (select 1 from public.matches m where m.id = match_id and (select auth.uid()) in (m.worker_id, m.company_id)));

-- Jobs and mock payments: only the two participants.
create policy "read own jobs"   on public.jobs for select to authenticated using ((select auth.uid()) in (worker_id, company_id));
create policy "propose jobs"    on public.jobs for insert to authenticated
  with check (proposed_by = (select auth.uid()) and status = 'proposed' and (select auth.uid()) in (worker_id, company_id));
create policy "update own jobs" on public.jobs for update to authenticated
  using ((select auth.uid()) in (worker_id, company_id)) with check ((select auth.uid()) in (worker_id, company_id));

create policy "manage job payments" on public.payments for all to authenticated
  using (exists (select 1 from public.jobs j where j.id = job_id and (select auth.uid()) in (j.worker_id, j.company_id)))
  with check (exists (select 1 from public.jobs j where j.id = job_id and (select auth.uid()) in (j.worker_id, j.company_id)));

-- Reviews: you see your own and every published one. Who wrote a review is never readable
-- by others: reviewer_id, job_id and created_at are not granted (see column grants below).
create policy "read published or own reviews" on public.reviews for select to authenticated
  using (published_at is not null or reviewer_id = (select auth.uid()));
create policy "write own review" on public.reviews for insert to authenticated
  with check (reviewer_id = (select auth.uid()));

-- reviewer_id is not granted to API roles, so score policies check it through helpers
-- in a private schema (not exposed by the API).
create schema if not exists private;
grant usage on schema private to authenticated;

create function private.review_is_mine(rid uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.reviews where id = rid and reviewer_id = (select auth.uid()));
$$;
create function private.review_is_visible(rid uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.reviews where id = rid
    and (published_at is not null or reviewer_id = (select auth.uid())));
$$;
revoke execute on function private.review_is_mine(uuid), private.review_is_visible(uuid) from public, anon;
grant execute on function private.review_is_mine(uuid), private.review_is_visible(uuid) to authenticated;

create policy "read published or own scores" on public.review_scores for select to authenticated
  using ((select private.review_is_visible(review_id)));
create policy "write own scores" on public.review_scores for insert to authenticated
  with check ((select private.review_is_mine(review_id)));

-- ---------------------------------------------------------------------------
-- Grants ("Automatically expose new tables" is off, so access is explicit)
-- ---------------------------------------------------------------------------
grant usage on schema public to anon, authenticated;
grant select on public.categories, public.review_criteria to anon, authenticated;

grant select (id, role, display_name, avatar_path, city, created_at) on public.profiles to authenticated;
grant update (display_name, avatar_path, city) on public.profiles to authenticated;

grant select, insert, update on public.worker_profiles, public.company_profiles to authenticated;
grant select, insert, update, delete on
  public.worker_categories, public.portfolio_items, public.weekly_availability, public.availability_days,
  public.job_ads, public.saved_searches, public.interests to authenticated;
grant select on public.matches to authenticated;
grant select, insert on public.messages to authenticated;
grant select, insert, update on public.jobs, public.payments to authenticated;

grant select (id, reviewee_id, reviewee_role, overall, would_repeat, comment, published_at) on public.reviews to authenticated;
grant insert (job_id, reviewer_id, overall, would_repeat, comment) on public.reviews to authenticated;
grant select, insert on public.review_scores to authenticated;

grant select on public.profile_ratings, public.profile_criterion_ratings to authenticated;
