/* kurro · service worker: makes the app installable and lets it open without a connection.
 * - The app shell (HTML, CSS, JS, icons) is cached; pages and files are fetched from the network
 *   first and fall back to the cache when offline, so updates show up right away when online.
 * - The supabase-js library and the fonts are cached after their first load.
 * - Supabase API calls are never cached (they are personal, live data).
 * Bump CACHE when the list of shell files changes. */
const CACHE = 'kurro-v2';
const SHELL = [
  './', 'index.html', 'styles.css', 'themes.css', 'app.js', 'db.js', 'config.js', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png', 'icons/favicon-64.png',
];
const CDN_HOSTS = ['cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Own files: network first, cache as fallback (offline)
  if (url.origin === self.location.origin) {
    e.respondWith(fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true })
      .then((hit) => hit || (req.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
    return;
  }

  // Library and fonts: serve from cache, refresh in the background
  if (CDN_HOSTS.includes(url.hostname)) {
    e.respondWith(caches.open(CACHE).then((c) => c.match(req).then((hit) => {
      const fresh = fetch(req).then((res) => { if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res; })
        .catch(() => hit);
      return hit || fresh;
    })));
  }
  // Everything else (Supabase API) goes straight to the network
});
