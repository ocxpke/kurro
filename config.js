/* Supabase connection for the prototype.
 * Only the anon / publishable key may go here: it is public by design and every table is
 * protected by Row Level Security. NEVER put the service_role key or the database password here.
 * With an empty key the app runs in demo mode (fake data, nothing is saved). */
window.KURRO_CONFIG = {
  supabaseUrl: 'https://ctdynarhmqvxbvcmcbaa.supabase.co',
  supabaseAnonKey: 'sb_publishable_E3vgJ0O1qOkrZIktzgeLnA_O5kf7mYw',
};
