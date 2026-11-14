/* Kurro · Supabase data layer for the prototype.
 * Reads and writes the relational schema in supabase/migrations/. Every function returns plain
 * objects; app.js turns them into cards. When there is no key or no session, app.js keeps using
 * its demo data. */
const KDB = (() => {
  const cfg = window.KURRO_CONFIG || {};
  const enabled = !!(cfg.supabaseUrl && cfg.supabaseAnonKey && window.supabase);
  const sb = enabled ? window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey) : null;

  // Ads have a public work place; without maps, new ads are placed in Marbella centre.
  const DEFAULT_LOCATION = 'SRID=4326;POINT(-4.8826 36.5101)';

  const api = { enabled, me: null, categories: [], criteria: [] };

  const check = ({ data, error }) => { if (error) throw error; return data; };
  const uid = () => api.me && api.me.id;
  const byId = (rows, key = 'id') => Object.fromEntries((rows || []).map((r) => [r[key], r]));
  const isoDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

  api.categoryName = (id) => (api.categories.find((c) => c.id === id) || {}).name || '';
  api.categoryId = (name) => (api.categories.find((c) => c.name === name) || {}).id;
  api.categorySlug = (id) => (api.categories.find((c) => c.id === id) || {}).slug || '';

  /* ---------- Session ---------- */
  api.init = async () => {
    if (!sb) return;
    const [cats, crit] = await Promise.all([
      sb.from('categories').select('id, slug, name').order('sort_order'),
      sb.from('review_criteria').select('id, target_role, name').order('sort_order'),
    ]);
    api.categories = check(cats);
    api.criteria = check(crit);
    const { data } = await sb.auth.getSession();
    if (data.session) await api.loadMe();
  };

  api.onAuthChange = (fn) => sb && sb.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') setTimeout(fn, 0);
  });

  api.loadMe = async () => {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) { api.me = null; return null; }
    const profile = check(await sb.from('profiles').select('id, role, display_name, city').eq('id', user.id).maybeSingle());
    if (!profile) { api.me = null; return null; }
    const table = profile.role === 'worker' ? 'worker_profiles' : 'company_profiles';
    const extra = check(await sb.from(table).select('*').eq('profile_id', user.id).maybeSingle());
    api.me = { ...profile, email: user.email, details: extra };
    return api.me;
  };

  api.signUp = async ({ email, password, role, displayName }) => {
    const data = check(await sb.auth.signUp({ email, password, options: { data: { role, display_name: displayName } } }));
    return { needsConfirmation: !data.session };
  };

  api.signIn = async (email, password) => {
    check(await sb.auth.signInWithPassword({ email, password }));
    return api.loadMe();
  };

  api.signOut = async () => { await sb.auth.signOut(); api.me = null; };

  // Second step of sign-up: the worker or company row (headline / legal name are required).
  api.completeProfile = async (text) => {
    const row = api.me.role === 'worker'
      ? { profile_id: uid(), headline: text }
      : { profile_id: uid(), legal_name: text };
    check(await sb.from(api.me.role === 'worker' ? 'worker_profiles' : 'company_profiles').insert(row));
    return api.loadMe();
  };

  /* ---------- Ratings and reviews ---------- */
  api.ratings = async (ids) => {
    if (!ids.length) return {};
    const [overall, perCrit] = await Promise.all([
      sb.from('profile_ratings').select('*').in('profile_id', ids),
      sb.from('profile_criterion_ratings').select('profile_id, criterion_id, rating').in('profile_id', ids),
    ]);
    const out = byId(check(overall), 'profile_id');
    for (const r of check(perCrit)) {
      const c = api.criteria.find((x) => x.id === r.criterion_id);
      if (!c) continue;
      out[r.profile_id] = out[r.profile_id] || {};
      (out[r.profile_id].cats = out[r.profile_id].cats || {})[c.name] = Number(r.rating);
    }
    return out;
  };

  // Published reviews only. Who wrote them is never readable (no reviewer column is granted).
  api.reviewsOf = async (ids) => {
    if (!ids.length) return {};
    const rows = check(await sb.from('reviews').select('reviewee_id, reviewee_role, overall, comment, published_at')
      .in('reviewee_id', ids).not('published_at', 'is', null).order('published_at', { ascending: false }).limit(200));
    const out = {};
    for (const r of rows) (out[r.reviewee_id] = out[r.reviewee_id] || []).push(r);
    return out;
  };

  /* ---------- Discover ---------- */
  const decidedPartners = async () => {
    const col = api.me.role === 'worker' ? 'company_id' : 'worker_id';
    const rows = check(await sb.from('interests').select(col).eq('initiated_by', api.me.role));
    return new Set(rows.map((r) => r[col]));
  };

  // Professional: open ads from companies they have not decided on yet.
  api.discoverAds = async () => {
    const [ads, decided] = await Promise.all([
      sb.from('job_ads').select('id, company_id, category_id, title, description, starts_on, ends_on, duration_hours, budget_cents, budget_type, is_urgent, accepts_cash, accepts_card, accepts_bizum')
        .eq('status', 'open').order('created_at', { ascending: false }).limit(50),
      decidedPartners(),
    ]);
    const list = check(ads).filter((a) => !decided.has(a.company_id));
    const ids = [...new Set(list.map((a) => a.company_id))];
    if (!ids.length) return [];
    const [companies, ratings, reviews] = await Promise.all([
      sb.from('company_profiles').select('profile_id, legal_name, category_id, description').in('profile_id', ids),
      api.ratings(ids), api.reviewsOf(ids),
    ]);
    const cmap = byId(check(companies), 'profile_id');
    return list.map((a) => ({ ad: a, company: cmap[a.company_id] || {}, rating: ratings[a.company_id], reviews: reviews[a.company_id] || [] }));
  };

  // Company: professionals they have not decided on yet.
  api.discoverWorkers = async () => {
    const [workers, decided] = await Promise.all([
      sb.from('worker_profiles').select('profile_id, headline, bio, years_experience, hourly_rate_cents, available_today').limit(50),
      decidedPartners(),
    ]);
    const list = check(workers).filter((w) => !decided.has(w.profile_id));
    const ids = list.map((w) => w.profile_id);
    if (!ids.length) return [];
    const [profiles, cats, portfolio, ratings, reviews] = await Promise.all([
      sb.from('profiles').select('id, display_name, city').in('id', ids),
      sb.from('worker_categories').select('worker_id, category_id').in('worker_id', ids),
      sb.from('portfolio_items').select('worker_id, caption, position').in('worker_id', ids).order('position'),
      api.ratings(ids), api.reviewsOf(ids),
    ]);
    const pmap = byId(check(profiles));
    const catRows = check(cats), portRows = check(portfolio);
    return list.map((w) => ({
      worker: w,
      profile: pmap[w.profile_id] || {},
      categoryIds: catRows.filter((c) => c.worker_id === w.profile_id).map((c) => c.category_id),
      portfolio: portRows.filter((p) => p.worker_id === w.profile_id),
      rating: ratings[w.profile_id],
      reviews: reviews[w.profile_id] || [],
    }));
  };

  // Swipe. Returns true when the other side had already liked (the trigger created the match).
  api.decide = async ({ partnerId, adId, liked }) => {
    const worker = api.me.role === 'worker';
    const row = {
      worker_id: worker ? uid() : partnerId,
      company_id: worker ? partnerId : uid(),
      ad_id: adId || null,
      initiated_by: api.me.role,
      liked,
    };
    check(await sb.from('interests').upsert(row, { onConflict: 'worker_id,company_id,initiated_by' }));
    if (!liked) return false;
    const m = check(await sb.from('matches').select('id').eq('worker_id', row.worker_id).eq('company_id', row.company_id).maybeSingle());
    return !!m;
  };

  /* ---------- Matches and chat ---------- */
  api.matches = async () => {
    const rows = check(await sb.from('matches').select('id, worker_id, company_id, ad_id, created_at').order('created_at', { ascending: false }));
    const worker = api.me.role === 'worker';
    const ids = rows.map((m) => (worker ? m.company_id : m.worker_id));
    if (!ids.length) return [];
    const adIds = rows.map((m) => m.ad_id).filter(Boolean);
    const [profiles, details, ads, ratings] = await Promise.all([
      sb.from('profiles').select('id, display_name, city').in('id', ids),
      worker
        ? sb.from('company_profiles').select('profile_id, legal_name, category_id').in('profile_id', ids)
        : sb.from('worker_profiles').select('profile_id, headline').in('profile_id', ids),
      adIds.length ? sb.from('job_ads').select('id, title').in('id', adIds) : Promise.resolve({ data: [] }),
      api.ratings(ids),
    ]);
    const pmap = byId(check(profiles)), dmap = byId(check(details), 'profile_id'), amap = byId(check(ads));
    return rows.map((m) => {
      const pid = worker ? m.company_id : m.worker_id;
      return { match: m, partnerId: pid, profile: pmap[pid] || {}, details: dmap[pid] || {}, ad: amap[m.ad_id], rating: ratings[pid] };
    });
  };

  api.messages = async (matchId) => check(await sb.from('messages')
    .select('id, sender_id, body, created_at').eq('match_id', matchId).order('created_at').limit(200));

  api.sendMessage = async (matchId, body) => check(await sb.from('messages').insert({ match_id: matchId, sender_id: uid(), body }));

  /* ---------- Ads (company) ---------- */
  api.myAds = async () => {
    const ads = check(await sb.from('job_ads').select('id, title, category_id, starts_on, duration_hours, budget_cents, budget_type, is_urgent, status')
      .eq('company_id', uid()).order('created_at', { ascending: false }));
    if (!ads.length) return [];
    const likes = check(await sb.from('interests').select('ad_id').eq('company_id', uid()).eq('initiated_by', 'company'));
    void likes; // Workers' likes are private until there is a match, so the count is matches per ad.
    const matches = check(await sb.from('matches').select('ad_id').in('ad_id', ads.map((a) => a.id)));
    return ads.map((a) => ({ ...a, matches: matches.filter((m) => m.ad_id === a.id).length }));
  };

  api.publishAd = async (ad) => check(await sb.from('job_ads').insert({ ...ad, company_id: uid(), location: DEFAULT_LOCATION }));

  /* ---------- Availability (professional) ---------- */
  api.monthAvailability = async (year, month) => {
    const from = isoDay(new Date(year, month, 1)), to = isoDay(new Date(year, month + 1, 0));
    const rows = check(await sb.from('availability_days').select('day, status')
      .eq('worker_id', uid()).is('start_time', null).gte('day', from).lte('day', to));
    return Object.fromEntries(rows.map((r) => [Number(r.day.slice(8, 10)), r.status]));
  };

  // Whole-day status; null clears the day (back to free by default).
  api.setDay = async (date, status) => {
    const day = isoDay(date);
    check(await sb.from('availability_days').delete().eq('worker_id', uid()).eq('day', day).is('start_time', null));
    if (status) check(await sb.from('availability_days').insert({ worker_id: uid(), day, status }));
  };

  api.setAvailableToday = async (value) => {
    check(await sb.from('worker_profiles').update({ available_today: value }).eq('profile_id', uid()));
    api.me.details.available_today = value;
  };

  /* ---------- My reputation ---------- */
  api.myReputation = async () => {
    const [ratings, reviews] = await Promise.all([api.ratings([uid()]), api.reviewsOf([uid()])]);
    return { rating: ratings[uid()], reviews: reviews[uid()] || [] };
  };

  api.myJobCount = async () => {
    const col = api.me.role === 'worker' ? 'worker_id' : 'company_id';
    const { count, error } = await sb.from('jobs').select('id', { count: 'exact', head: true }).eq(col, uid()).eq('status', 'completed');
    if (error) throw error;
    return count || 0;
  };

  return api;
})();
