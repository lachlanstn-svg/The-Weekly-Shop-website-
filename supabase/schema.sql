-- Run these statements in the Supabase SQL Editor, in order, on a fresh project.

-- 1. Table
create table waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  joined_at timestamptz not null default now(),
  early_bird_claimed boolean not null default true
);

-- 2. Enable Row Level Security
alter table waitlist_signups enable row level security;

-- 3. Allow anyone (anon key) to insert a signup. No SELECT policy is created
--    on the table itself, so the anon key can never read emails/names back.
create policy "Anyone can join the waitlist"
  on waitlist_signups
  for insert
  to anon, authenticated
  with check (true);

-- 4. Count-only exposure via a SECURITY DEFINER function. This returns just
--    an integer -- it physically cannot leak email/name columns, unlike a
--    public view that could later be loosened to `select *`.
create or replace function get_waitlist_count()
returns integer
language sql
security definer
set search_path = public
as $$
  select count(*)::integer from waitlist_signups;
$$;

-- 5. Let the anon role call the function above.
grant execute on function get_waitlist_count() to anon, authenticated;
