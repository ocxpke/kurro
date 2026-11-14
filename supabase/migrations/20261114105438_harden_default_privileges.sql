-- Supabase grants TRUNCATE, REFERENCES and TRIGGER on new tables to the API roles by default.
-- They are not needed (TRUNCATE would even bypass RLS), so remove them now and for future tables.
revoke truncate, references, trigger on all tables in schema public from anon, authenticated;
alter default privileges for role postgres in schema public revoke truncate, references, trigger on tables from anon, authenticated;
-- Functions are not executable by the API roles unless a migration grants it explicitly.
alter default privileges for role postgres in schema public revoke execute on functions from public, anon, authenticated;
