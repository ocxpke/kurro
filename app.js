/* Kurro · mockup — datos de ejemplo y lógica de interfaz (sin backend) */

const COLORS = ['var(--c-sage)', 'var(--c-pink)', 'var(--c-warm)'];

// Ofertas que ve un profesional ("Busco trabajo")
const OFFERS = [
  { id: 'o1', emoji: '🏨', bg: 'var(--c-sage)', name: 'Hotel Puerto Banús', sub: 'Camarero/a de sala · 3 días · 14 €/h', sector: 'Hostelería y Gastronomía', urgent: true, rating: 4.6, count: 96, repeat: 91, dist: [68, 22, 6, 3, 1], cats: { 'Pago': 4.9, 'Trato': 4.6, 'Horarios': 4.3, 'Ambiente': 4.6 },
    badges: ['Empleador recomendado', 'Pago puntual'], quote: '“Buen ambiente y te pagan el mismo día.”',
    reviews: [
      { stars: 5, text: 'Trato muy correcto y horarios respetados.', who: 'Camarera · temporal' },
      { stars: 4, text: 'Mucho volumen en verano, pero el equipo ayuda.', who: 'Ayudante de cocina' },
    ] },
  { id: 'o2', emoji: '🎉', bg: 'var(--c-pink)', name: 'Eventos Costa del Sol', sub: 'Camareros para boda · sábado · 120 €', sector: 'Hostelería y Gastronomía', urgent: false, rating: 4.2, count: 54, repeat: 82, dist: [48, 32, 12, 6, 2], cats: { 'Pago': 4.5, 'Trato': 4.3, 'Horarios': 3.6, 'Ambiente': 4.4 },
    badges: ['Respuesta rápida'], quote: '“Organizados, aunque a veces se alarga el turno.”',
    reviews: [
      { stars: 4, text: 'Todo claro desde el principio.', who: 'Camarero · eventos' },
      { stars: 4, text: 'Repetiría, buen pago.', who: 'Cocinera · eventos' },
    ] },
  { id: 'o3', emoji: '🍽️', bg: 'var(--c-warm)', name: 'Restaurante La Alcazaba', sub: 'Cocinero/a apoyo · hoy · 15 €/h', sector: 'Hostelería y Gastronomía', urgent: true, rating: 3.9, count: 37, repeat: 71, dist: [38, 30, 18, 9, 5], cats: { 'Pago': 4.2, 'Trato': 3.9, 'Horarios': 3.3, 'Ambiente': 4.0 },
    badges: ['Verificado'], quote: '“Cocina exigente, jefe justo.”',
    reviews: [
      { stars: 4, text: 'Exigentes pero respetuosos.', who: 'Cocinero · temporal' },
      { stars: 3, text: 'El turno se alargó sin avisar.', who: 'Friegaplatos' },
    ] },
  { id: 'o4', emoji: '🏺', bg: 'var(--c-sage)', name: 'Hotel Boutique Casco Antiguo', sub: 'Taller de cerámica para huéspedes · 2 h · 90 €', sector: 'Artesanía', urgent: false, rating: 4.8, count: 19, repeat: 96, dist: [84, 11, 5, 0, 0], cats: { 'Pago': 5.0, 'Trato': 4.8, 'Horarios': 4.7, 'Ambiente': 4.7 },
    badges: ['Empleador recomendado', 'Pago puntual'], quote: '“Encargo claro y pagan puntual vía Kurro.”',
    reviews: [
      { stars: 5, text: 'Encargo claro y pago seguro.', who: 'Ceramista' },
    ] },
  { id: 'o5', emoji: '🧘', bg: 'var(--c-pink)', name: 'Wellness Resort Elviria', sub: 'Taller de gestión emocional para el equipo · jueves · 150 €', sector: 'Bienestar emocional', urgent: false, rating: 4.7, count: 28, repeat: 94, dist: [80, 14, 4, 2, 0], cats: { 'Pago': 4.8, 'Trato': 4.9, 'Horarios': 4.5, 'Ambiente': 4.7 },
    badges: ['Empleador recomendado'], quote: '“Cuidan mucho a quien viene de fuera.”',
    reviews: [
      { stars: 5, text: 'Sala preparada y grupo muy implicado.', who: 'Facilitadora · taller' },
      { stars: 4, text: 'Buen trato, el horario cambió una vez.', who: 'Instructor de yoga' },
    ] },
  { id: 'o6', emoji: '🏗️', bg: 'var(--c-warm)', name: 'Chiringuito La Bajadilla', sub: 'Pintar terraza y arreglar barra · hoy · 18 €/h', sector: 'Obras y reformas', urgent: true, rating: 4.1, count: 15, repeat: 80, dist: [47, 33, 13, 7, 0], cats: { 'Pago': 4.4, 'Trato': 4.2, 'Horarios': 3.8, 'Ambiente': 4.1 },
    badges: ['Verificado', 'Pago en efectivo'], quote: '“Trabajo claro y pagan al terminar.”',
    reviews: [
      { stars: 4, text: 'Material listo al llegar y pago en mano.', who: 'Pintor' },
      { stars: 4, text: 'Hubo que esperar para empezar, por lo demás bien.', who: 'Carpintero' },
    ] },
];

// Profesionales que ve una empresa ("Busco talento")
const WORKERS = [
  { id: 'w1', emoji: '👩‍🍳', bg: 'var(--c-pink)', name: 'Lucía, 29', sub: 'Cocinera · 6 años exp. · a 2 km', sector: 'Hostelería y Gastronomía', urgent: true, rating: 4.9, count: 31, repeat: 97, dist: [92, 6, 2, 0, 0], cats: { 'Puntualidad': 4.9, 'Calidad': 5.0, 'Trato': 4.8, 'Fiabilidad': 4.9 },
    badges: ['Profesional verificado', 'Respuesta rápida'], quote: '“Puntual, limpia y muy rápida en pase.”',
    portfolio: ['🥘', '🍤', '🍰'],
    reviews: [
      { stars: 5, text: 'Salvó un sábado con 200 cubiertos.', who: 'Restaurante · Marbella' },
      { stars: 5, text: 'La volveríamos a contratar sin dudar.', who: 'Hotel · Estepona' },
    ] },
  { id: 'w2', emoji: '🏺', bg: 'var(--c-sage)', name: 'Manuel, 47', sub: 'Ceramista artesano · taller propio', sector: 'Artesanía', urgent: false, rating: 4.7, count: 61, repeat: 93, dist: [78, 16, 4, 2, 0], cats: { 'Puntualidad': 4.4, 'Calidad': 4.9, 'Trato': 4.7, 'Fiabilidad': 4.7 },
    badges: ['Profesional verificado', 'Taller propio'], quote: '“Piezas preciosas y entrega en plazo.”',
    portfolio: ['🏺', '🍶', '🪴'],
    reviews: [
      { stars: 5, text: 'Vajilla personalizada para todo el hotel.', who: 'Hotel boutique' },
      { stars: 4, text: 'Gran calidad, plazo algo justo.', who: 'Tienda local' },
    ] },
  { id: 'w3', emoji: '🧑‍🎤', bg: 'var(--c-warm)', name: 'Dani, 24', sub: 'Camarero de eventos · inglés C1', sector: 'Hostelería y Gastronomía', urgent: true, rating: 4.4, count: 22, repeat: 86, dist: [59, 27, 9, 5, 0], cats: { 'Puntualidad': 4.0, 'Calidad': 4.5, 'Trato': 4.8, 'Fiabilidad': 4.3 },
    badges: ['Respuesta rápida'], quote: '“Muy buen trato con el cliente extranjero.”',
    portfolio: ['🥂', '🎶', '🍸'],
    reviews: [
      { stars: 5, text: 'Simpático y resolutivo.', who: 'Organizadora de bodas' },
      { stars: 4, text: 'Llegó 10 min tarde, el resto perfecto.', who: 'Catering' },
    ] },
  { id: 'w4', emoji: '🧵', bg: 'var(--c-sage)', name: 'Rocío, 35', sub: 'Costurera · arreglos y uniformes', sector: 'Artesanía', urgent: false, rating: 4.8, count: 45, repeat: 95, dist: [85, 11, 4, 0, 0], cats: { 'Puntualidad': 4.8, 'Calidad': 4.9, 'Trato': 4.7, 'Fiabilidad': 4.8 },
    badges: ['Profesional verificado'], quote: '“Uniformes de todo el personal en 48 h.”',
    portfolio: ['👗', '🧶', '🎽'],
    reviews: [
      { stars: 5, text: 'Rápida y con acabados impecables.', who: 'Hotel · Marbella' },
    ] },
  { id: 'w5', emoji: '🧘‍♀️', bg: 'var(--c-pink)', name: 'Marta, 38', sub: 'Facilitadora de talleres emocionales · mindfulness', sector: 'Bienestar emocional', urgent: false, rating: 4.9, count: 27, repeat: 98, dist: [93, 7, 0, 0, 0], cats: { 'Puntualidad': 4.8, 'Calidad': 5.0, 'Trato': 5.0, 'Fiabilidad': 4.9 },
    badges: ['Profesional verificado'], quote: '“El equipo salió renovado de la sesión.”',
    portfolio: ['🧘', '🕯️', '🌿'],
    reviews: [
      { stars: 5, text: 'Taller muy cuidado para todo el personal.', who: 'Hotel · Marbella' },
      { stars: 5, text: 'Cercana y muy profesional.', who: 'Organizadora de retiros' },
    ] },
  { id: 'w6', emoji: '👷', bg: 'var(--c-warm)', name: 'Antonio, 52', sub: 'Albañil y reformas · 20 años exp. · a 4 km', sector: 'Obras y reformas', urgent: true, rating: 4.5, count: 52, repeat: 90, dist: [66, 23, 8, 3, 0], cats: { 'Puntualidad': 4.3, 'Calidad': 4.7, 'Trato': 4.5, 'Fiabilidad': 4.6 },
    badges: ['Profesional verificado', 'Respuesta rápida'], quote: '“Arregló la terraza antes de abrir.”',
    portfolio: ['🧱', '🪚', '🎨'],
    reviews: [
      { stars: 5, text: 'Vino el mismo día y lo dejó perfecto.', who: 'Restaurante · Marbella' },
      { stars: 4, text: 'Buen acabado, se retrasó un día.', who: 'Hotel · Estepona' },
    ] },
];

const PROFILES = {
  worker: { emoji: '👩‍🍳', name: 'Lucía Martín', sub: 'Cocinera · Marbella', rating: 4.9, jobs: 37, response: '< 1 h', count: 31, repeat: 97, dist: [92, 6, 2, 0, 0], cats: { 'Puntualidad': 4.9, 'Calidad': 5.0, 'Trato': 4.8, 'Fiabilidad': 4.9 },
    badges: ['Profesional verificado', 'Respuesta rápida', 'Top 10% zona'], available: true, portfolio: ['🥘', '🍤', '🍰', '🥗', '🍮', '🐟'] },
  company: { emoji: '🏨', name: 'Hotel Puerto Banús', sub: 'Hostelería · Marbella', rating: 4.6, jobs: 112, response: '< 2 h', count: 96, repeat: 91, dist: [68, 22, 6, 3, 1], cats: { 'Pago': 4.9, 'Trato': 4.6, 'Horarios': 4.3, 'Ambiente': 4.6 },
    badges: ['Empleador recomendado', 'Pago puntual', 'Premium'], available: false, portfolio: ['🛏️', '🏊', '🍳'] },
};

const RECEIVED = {
  worker: [
    { stars: 5, text: 'Salvó un sábado con 200 cubiertos.', who: 'Restaurante · Marbella', dir: 'Empresa → tú' },
    { stars: 5, text: 'Muy organizada y limpia.', who: 'Catering · Ojén', dir: 'Empresa → tú' },
    { stars: 4, text: 'Gran trabajo, algo justa de tiempo al montar.', who: 'Hotel · Estepona', dir: 'Empresa → tú' },
  ],
  company: [
    { stars: 5, text: 'Trato muy correcto y horarios respetados.', who: 'Camarera · temporal', dir: 'Profesional → empresa' },
    { stars: 4, text: 'Mucho volumen en verano, pero el equipo ayuda.', who: 'Ayudante de cocina', dir: 'Profesional → empresa' },
    { stars: 3, text: 'El uniforme no estaba listo el primer día.', who: 'Recepcionista', dir: 'Profesional → empresa' },
  ],
};

const PENDING = {
  worker: [{ id: 'p1', emoji: '🍽️', bg: 'var(--c-warm)', name: 'Restaurante La Alcazaba', sub: 'Trabajo terminado ayer' }],
  company: [{ id: 'p2', emoji: '🧑‍🎤', bg: 'var(--c-warm)', name: 'Dani', sub: 'Evento del sábado' }],
};

/* ---------- Estado ---------- */
const state = {
  role: 'worker',
  urgent: false,
  sector: 'all',
  seen: new Set(),
  matches: { worker: [], company: [] },
  rtab: 'received',
  chats: {},
  liveDeck: [],      // cards loaded from Supabase
  liveMatches: [],
  chatPoll: null,
  ads: [{ title: 'Camarero/a de sala', sector: 'Hostelería y Gastronomía', meta: '3 días · 14 €/h', urgent: true, interested: 4 }],
  // Availability for the current month: weekends off, a few booked days, the rest free
  cal: Object.fromEntries(Array.from({ length: 30 }, (_, i) => {
    const d = i + 1;
    return [d, [5, 12, 13, 20].includes(d) ? 'busy' : (d + 5) % 7 >= 5 ? 'off' : 'free'];
  })),
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
// Stars filled to the exact score (4.6 fills 92 %)
const starsHTML = (n) => `<span class="stars" style="--pct:${Math.round(n / 5 * 100)}%" role="img" aria-label="${n.toFixed(1)} de 5">★★★★★</span>`;
const isCompany = (x) => !x.portfolio;
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reviewers = (company) => (company ? 'profesionales' : 'empresas');

/* ---------- Live data (Supabase) ----------
 * With a key in config.js and a signed-in user, the screens read and write the database
 * through db.js. Otherwise they use the demo data above. */
const live = () => !!(KDB.enabled && KDB.me && KDB.me.details);
// Not signed in while Supabase is configured: real open jobs in Descubrir, sign-up prompts elsewhere
const guest = () => !!(KDB.enabled && !KDB.me);

// Sign-up prompt used by the guest screens
function guestHTML(icon, title, text) {
  return `<div class="guest-cta">
    <div class="guest-icon">${icon}</div>
    <h3>${title}</h3>
    <p class="muted">${text}</p>
    <div class="job-actions">
      <button class="btn" data-signup>Crear cuenta</button>
      <button class="btn ghost" data-auth>Entrar</button>
    </div>
  </div>`;
}
function bindGuest(root) {
  $$('[data-signup]', root).forEach((b) => b.onclick = () => openAuth('signup', b.dataset.signup || undefined));
  $$('[data-auth]', root).forEach((b) => b.onclick = () => openAuth('login'));
}
const CAT_LOOK = {
  'hosteleria-gastronomia': { offer: '🍽️', worker: '🧑‍🍳', bg: 'var(--c-warm)' },
  'artesania': { offer: '🏺', worker: '🧑‍🎨', bg: 'var(--c-sage)' },
  'bienestar-emocional': { offer: '🧘', worker: '🧘‍♀️', bg: 'var(--c-pink)' },
  'obras-reformas': { offer: '🏗️', worker: '👷', bg: 'var(--c-warm)' },
};
const look = (catId) => CAT_LOOK[KDB.categorySlug(catId)] || { offer: '📌', worker: '🙂', bg: 'var(--c-sage)' };
const euros = (cents) => `${(cents / 100).toLocaleString('es-ES', { maximumFractionDigits: 2 })} €`;
const dayLabel = (iso) => {
  const d = new Date(iso + 'T00:00:00');
  return d.toDateString() === new Date().toDateString() ? 'hoy' : d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
};

// Rating fields the cards expect, from the profile_ratings / profile_criterion_ratings views
function ratingFields(r, reviews, company) {
  const count = r ? Number(r.review_count) : 0;
  const dist = [5, 4, 3, 2, 1].map((n) => (count ? Math.round(100 * Number(r['stars_' + n]) / count) : 0));
  return {
    rating: r ? Number(r.rating) : 0, count, repeat: r ? r.repeat_pct : 0, dist,
    cats: (r && r.cats) || {},
    reviews: reviews.slice(0, 5).map((v) => ({ stars: v.overall, text: esc(v.comment || 'Sin comentario.'), who: company ? 'Profesional' : 'Empresa' })),
  };
}

function offerCard({ ad, company, rating, reviews }) {
  const l = look(ad.category_id);
  const pay = [ad.accepts_cash && 'Efectivo', ad.accepts_card && 'Tarjeta', ad.accepts_bizum && 'Bizum'].filter(Boolean);
  const budget = euros(ad.budget_cents) + (ad.budget_type === 'hourly' ? '/h' : '');
  return {
    id: 'ad:' + ad.id, dbId: ad.id, partnerId: ad.company_id, emoji: l.offer, bg: l.bg,
    name: esc(company.legal_name || 'Empresa'),
    sub: esc([ad.title, dayLabel(ad.starts_on), ad.duration_hours && `${Number(ad.duration_hours)} h`, budget].filter(Boolean).join(' · ')),
    sector: KDB.categoryName(ad.category_id), urgent: ad.is_urgent,
    badges: pay.length ? pay : ['Verificado'], quote: `“${esc(ad.description.slice(0, 110))}”`,
    ...ratingFields(rating, reviews, true),
  };
}

function workerCard({ worker, profile, categoryIds, portfolio, rating, reviews }) {
  const l = look(categoryIds[0]);
  return {
    id: 'w:' + worker.profile_id, dbId: worker.profile_id, partnerId: worker.profile_id, emoji: l.worker, bg: l.bg,
    name: esc(profile.display_name || 'Profesional'),
    sub: esc([worker.headline, worker.years_experience != null && `${worker.years_experience} años exp.`,
      worker.hourly_rate_cents && `${euros(worker.hourly_rate_cents)}/h`, profile.city].filter(Boolean).join(' · ')),
    sector: KDB.categoryName(categoryIds[0]), urgent: worker.available_today,
    badges: worker.available_today ? ['Disponible hoy'] : ['Nuevo en Kurro'],
    quote: worker.bio ? `“${esc(worker.bio.slice(0, 110))}”` : '“Aún sin descripción.”',
    portfolio: portfolio.length ? portfolio.slice(0, 6).map(() => '📷') : [l.worker],
    ...ratingFields(rating, reviews, false),
  };
}

// Compact rating block for swipe cards
function ratingStripHTML(x) {
  if (!x.count) {
    return `<div class="rating-strip"><span class="rating-num">—</span>
      <span class="rating-meta">${starsHTML(0)}<small>Aún sin reseñas verificadas</small></span></div>`;
  }
  return `<div class="rating-strip">
    <span class="rating-num">${x.rating.toFixed(1)}</span>
    <span class="rating-meta">${starsHTML(x.rating)}
      <small>${x.count} reseñas verificadas · ${x.repeat} % repetiría</small></span>
    <span class="rating-go">Ver reseñas ›</span>
  </div>
  <div class="cat-chips">${Object.entries(x.cats).slice(0, 3).map(([k, v]) => `<span class="cat-chip">${k} <b>${v.toFixed(1)}</b></span>`).join('')}</div>`;
}

// Full rating summary for profiles: score, distribution and category scores
function ratingSummaryHTML(x, company) {
  if (!x.count) {
    return `<p class="trust"><span>✔</span><span>Todavía no tiene reseñas. Solo puede opinar quien haya trabajado ${company ? 'con esta empresa' : 'con este profesional'}, y las reseñas se publican cuando las dos partes han valorado.</span></p>`;
  }
  return `<div class="rating-summary">
    <div class="rs-score"><b>${x.rating.toFixed(1)}</b>${starsHTML(x.rating)}<small>${x.count} reseñas de ${reviewers(company)}</small></div>
    <div class="rs-bars">${x.dist.map((pct, i) => `<div class="rs-row"><span>${5 - i}</span><div class="bar"><i style="width:${pct}%"></i></div><span>${pct} %</span></div>`).join('')}</div>
  </div>
  <div class="cats">${Object.entries(x.cats).map(([k, v]) => `<div class="cat"><span>${k}</span><b>${v.toFixed(1)}</b><div class="bar"><i style="width:${v / 5 * 100}%"></i></div></div>`).join('')}</div>
  <p class="trust"><span>✔</span><span>Reseñas anónimas y verificadas: solo opina quien ha trabajado ${company ? 'con esta empresa' : 'con este profesional'}. <b>${x.repeat} % repetiría.</b></span></p>`;
}

const source = () => (live() || guest() ? state.liveDeck : state.role === 'worker' ? OFFERS : WORKERS);
const findItem = (id) => [...state.liveDeck, ...OFFERS, ...WORKERS].find((x) => x.id === id);

// Reload the swipe deck from the database (signed in, or guest browsing open jobs)
async function loadLiveDeck() {
  if (!live() && !guest()) return;
  state.deckLoading = true;
  renderDeck();
  try {
    if (guest()) state.liveDeck = (await KDB.discoverAds()).map(offerCard);
    else state.liveDeck = KDB.me.role === 'worker'
      ? (await KDB.discoverAds()).map(offerCard)
      : (await KDB.discoverWorkers()).map(workerCard);
  } catch (e) { dbError(e); state.liveDeck = []; }
  state.deckLoading = false;
  renderDeck();
}

function pool() {
  return source().filter((x) =>
    !state.seen.has(x.id) &&
    (!state.urgent || x.urgent) &&
    (state.sector === 'all' || x.sector === state.sector));
}

/* ---------- Deck ---------- */
function renderDeck() {
  const deck = $('#deck');
  deck.innerHTML = '';
  // Guests browse jobs; professionals' profiles are only for signed-in companies
  if (guest() && state.role === 'company') {
    deck.innerHTML = `<div class="empty">${guestHTML('🔎', 'Encuentra profesionales de la zona',
      'Crea una cuenta de empresa para ver perfiles, valoraciones y disponibilidad, y para publicar tus anuncios.')}</div>`;
    $$('[data-signup]', deck).forEach((b) => { b.dataset.signup = 'company'; });
    return bindGuest(deck);
  }
  if (state.deckLoading && !state.liveDeck.length) {
    deck.innerHTML = '<div class="empty"><p class="muted">Cargando ofertas…</p></div>';
    return;
  }
  const items = pool();
  if (!items.length) {
    const fromDb = live() || guest();
    deck.innerHTML = `<div class="empty"><div><div style="font-size:3rem">🌊</div>
      <p>${fromDb && !state.liveDeck.length
        ? `Ahora mismo no hay ${state.role === 'worker' ? 'ofertas abiertas' : 'profesionales nuevos'}. Vuelve a mirar en un rato.`
        : `No hay más ${state.role === 'worker' ? 'ofertas' : 'profesionales'} con estos filtros.`}</p>
      <button class="btn" id="resetDeck">${fromDb ? 'Buscar de nuevo' : 'Volver a empezar'}</button></div></div>`;
    $('#resetDeck').onclick = () => { state.seen.clear(); fromDb ? loadLiveDeck() : renderDeck(); };
    return;
  }
  // Render top card last so it sits on top
  items.slice(0, 3).reverse().forEach((x) => deck.appendChild(cardEl(x)));
  attachDrag(deck.lastElementChild);
}

function cardEl(x) {
  const el = document.createElement('article');
  el.className = 'card';
  el.dataset.id = x.id;
  el.innerHTML = `
    <div class="card-hero" style="background:${x.bg}">
      ${x.urgent ? '<span class="tag-urgent">⚡ Disponible hoy</span>' : ''}
      <span>${x.emoji}</span>
      <span class="stamp stamp-yes">ME INTERESA</span>
      <span class="stamp stamp-no">PASO</span>
    </div>
    <div class="card-body">
      <h3>${x.name}</h3>
      <p class="card-sub">${x.sub}</p>
      ${ratingStripHTML(x)}
      <p class="quote">${x.quote}</p>
      <div class="badges">${x.badges.map((b, i) => `<span class="badge ${i === 0 ? '' : 'warm'}">${b}</span>`).join('')}</div>
    </div>`;
  el.addEventListener('click', (e) => { if (!el.dataset.moved) openDetail(x); });
  return el;
}

function attachDrag(card) {
  if (!card) return;
  let startX = 0, startY = 0, dx = 0, dy = 0, down = false;
  const yes = $('.stamp-yes', card), no = $('.stamp-no', card);

  card.addEventListener('pointerdown', (e) => {
    down = true; startX = e.clientX; startY = e.clientY; dx = dy = 0;
    card.dataset.moved = '';
    card.classList.add('dragging');
    card.setPointerCapture(e.pointerId);
  });
  card.addEventListener('pointermove', (e) => {
    if (!down) return;
    dx = e.clientX - startX; dy = e.clientY - startY;
    if (Math.abs(dx) > 5) card.dataset.moved = '1';
    card.style.transform = `translate(${dx}px, ${dy * 0.3}px) rotate(${dx / 18}deg)`;
    yes.style.opacity = Math.max(0, Math.min(1, dx / 100));
    no.style.opacity = Math.max(0, Math.min(1, -dx / 100));
  });
  const end = () => {
    if (!down) return;
    down = false;
    card.classList.remove('dragging');
    if (dx > 110) swipe('right');
    else if (dx < -110) swipe('left');
    else { card.style.transform = ''; yes.style.opacity = 0; no.style.opacity = 0; }
    setTimeout(() => { card.dataset.moved = ''; }, 0);
  };
  card.addEventListener('pointerup', end);
  card.addEventListener('pointercancel', end);
}

function swipe(dir) {
  const card = $('#deck .card:last-child');
  if (!card) return;
  const id = card.dataset.id;
  const item = findItem(id);
  if (guest() && dir === 'right') {
    // Showing interest needs an account; the card stays so they can come back to it
    toast('Crea tu cuenta para mostrar interés');
    return openAuth('signup', 'worker');
  }
  card.style.transform = `translate(${dir === 'right' ? 600 : -600}px, 40px) rotate(${dir === 'right' ? 30 : -30}deg)`;
  card.style.opacity = '0';
  state.seen.add(id);

  if (live()) {
    // Saved as an interest; the database creates the match when both sides liked
    KDB.decide({ partnerId: item.partnerId, adId: id.startsWith('ad:') ? item.dbId : null, liked: dir === 'right' })
      .then((matched) => {
        if (dir !== 'right') return;
        toast(matched ? `🎉 ¡Match con ${item.name}!` : '👍 Interés enviado');
        if (matched) refreshMatchCount();
      })
      .catch(dbError);
  } else if (dir === 'right') {
    // En el mockup, simulamos que la otra parte también hace "match" con probabilidad alta
    if (Math.random() < 0.7) {
      state.matches[state.role].unshift(item);
      updateMatchCount();
      toast(`🎉 ¡Match con ${item.name.split(',')[0]}!`);
    } else {
      toast('👍 Interés enviado');
    }
  }
  setTimeout(renderDeck, 280);
}

/* ---------- Detalle ---------- */
function openDetail(x) {
  const company = isCompany(x);
  $('#modalBody').innerHTML = `
    <span class="kind">${company ? 'Perfil de empresa' : 'Perfil profesional'}</span>
    <div class="item" style="box-shadow:none;background:transparent;padding:0 30px 0 0">
      <div class="avatar" style="background:${x.bg}">${x.emoji}</div>
      <div class="item-main"><strong>${x.name}</strong><small>${company ? x.sector + ' · Marbella' : x.sub}</small></div>
    </div>
    <div class="badges" style="margin-top:12px">${x.badges.map((b) => `<span class="badge">${b}</span>`).join('')}</div>
    ${ratingSummaryHTML(x, company)}
    <h4>Lo que dicen ${company ? 'los profesionales' : 'las empresas'}</h4>
    ${x.reviews.map(reviewHTML).join('')}
    ${company
      ? `<h4>Oferta abierta</h4><div class="item"><div class="item-main"><strong>${x.sub.split(' · ')[0]}</strong><small>${x.sub.split(' · ').slice(1).join(' · ')}</small></div>${x.urgent ? '<span class="badge warm">⚡ Hoy</span>' : ''}</div>`
      : `<h4>Portfolio</h4><div class="portfolio">${x.portfolio.map((p, i) => `<div style="background:${COLORS[i % 3]}">${p}</div>`).join('')}</div>`}
    <div style="display:flex;gap:10px;margin-top:14px">
      <button class="btn ghost" data-close style="flex:1">Cerrar</button>
      <button class="btn" id="detailYes" style="flex:1">♥ Me interesa</button>
    </div>`;
  openModal();
  $('#detailYes').onclick = () => { closeModal(); swipe('right'); };
}

function reviewHTML(r) {
  return `<div class="review">
    <div class="review-head">${starsHTML(r.stars)}${r.dir ? `<span class="dir">${r.dir}</span>` : ''}</div>
    <p>${r.text}</p>
    <div class="review-head" style="margin:6px 0 0"><small>Anónima · ${r.who}</small><small>✔ Verificada</small></div>
  </div>`;
}

/* ---------- Matches ---------- */
// Matches from the database, shaped like the demo items so the same list and chat work
async function loadLiveMatches() {
  const worker = KDB.me.role === 'worker';
  return (await KDB.matches()).map((m) => {
    const l = look(m.details.category_id);
    return {
      id: 'm:' + m.match.id, matchId: m.match.id, dbMatch: m.match, emoji: worker ? l.offer : l.worker, bg: l.bg,
      name: esc(worker ? (m.details.legal_name || m.profile.display_name || 'Empresa') : (m.profile.display_name || 'Profesional')),
      sub: esc((m.ad && m.ad.title) || m.details.headline || 'Match'),
      portfolio: worker ? undefined : [],
      ...ratingFields(m.rating, [], worker),
    };
  });
}

async function refreshMatchCount() {
  if (!live()) return updateMatchCount();
  try { state.liveMatches = await loadLiveMatches(); } catch (e) { return dbError(e); }
  const n = state.liveMatches.length, el = $('#matchCount');
  el.textContent = n; el.hidden = n === 0;
}

async function renderMatches() {
  const list = $('#matchList');
  if (guest()) {
    list.innerHTML = `<li>${guestHTML('💬', 'Tus matches aparecerán aquí',
      'Cuando a ti y a una empresa os interese lo mismo, se abre un chat para acordar fecha, precio y forma de pago.')}</li>`;
    return bindGuest(list);
  }
  if (live()) {
    list.innerHTML = '<li class="muted">Cargando…</li>';
    await refreshMatchCount();
  }
  const m = live() ? state.liveMatches : state.matches[state.role];
  if (!m.length) {
    list.innerHTML = `<li class="muted">Aún no tienes matches. Ve a <b>Descubrir</b> y desliza a la derecha.</li>`;
    return;
  }
  list.innerHTML = m.map((x) => `
    <li class="item">
      <div class="avatar" style="background:${x.bg}">${x.emoji}</div>
      <div class="item-main"><strong>${x.name}</strong><small>${x.sub}</small>
        <small class="item-score">${starsHTML(x.rating)} <b>${x.rating.toFixed(1)}</b> · ${x.count} reseñas</small></div>
      <button class="btn" data-chat="${x.id}">Chatear</button>
    </li>`).join('');
  $$('[data-chat]', list).forEach((b) => b.onclick = () => openChat(m.find((x) => x.id === b.dataset.chat)));
}

/* ---------- Chat empresa ↔ profesional ---------- */
async function openChat(x) {
  const company = isCompany(x);
  const job = company ? x.sub.split(' · ')[0] : 'el servicio';
  clearInterval(state.chatPoll);
  if (x.matchId) {
    try {
      state.chats[x.id] = (await KDB.messages(x.matchId)).map((m) => ({ me: m.sender_id === KDB.me.id, text: m.body }));
    } catch (e) { return dbError(e); }
  } else if (!state.chats[x.id]) {
    state.chats[x.id] = [{ me: false, text: company
      ? `¡Hola! Hemos visto tu perfil. ¿Sigues disponible para "${job}"?`
      : '¡Hola! Me interesa trabajar con vosotros. ¿Qué fechas necesitáis?' }];
  }
  const msgs = state.chats[x.id];
  $('#modalBody').innerHTML = `
    <span class="kind">Chat · ${company ? 'empresa' : 'profesional'}</span>
    <div class="item" style="box-shadow:none;background:transparent;padding:0 30px 0 0">
      <div class="avatar" style="background:${x.bg}">${x.emoji}</div>
      <div class="item-main"><strong>${x.name}</strong>
        <small class="item-score">${starsHTML(x.rating)} <b>${x.rating.toFixed(1)}</b> · ${x.count} reseñas</small></div>
    </div>
    <div class="chat-log" id="chatLog" data-chat-id="${x.id}">${msgs.map((m) => `<div class="bubble ${m.me ? 'me' : ''}">${esc(m.text)}</div>`).join('')}</div>
    ${x.matchId ? '<div class="item proposal" id="jobBox"><div class="item-main"><small>Cargando propuesta…</small></div></div>' : `<div class="item proposal">
      <div class="item-main"><strong>Propuesta de contratación</strong><small>${company ? x.sub : 'Servicio acordado en el chat'} · efectivo, tarjeta o Bizum</small></div>
      <button class="btn" id="chatDeal">${company ? 'Aceptar' : 'Contratar'}</button>
    </div>`}
    <form class="chat-form" id="chatForm">
      <input name="msg" aria-label="Escribe un mensaje" placeholder="Escribe un mensaje" autocomplete="off" />
      <button class="btn" type="submit">Enviar</button>
    </form>`;
  openModal();
  const log = $('#chatLog');
  log.scrollTop = log.scrollHeight;
  if ($('#chatDeal')) $('#chatDeal').onclick = () => {
    if (company) { closeModal(); toast('✅ Propuesta aceptada. La empresa elige el pago.'); } else openPay(x);
  };
  if (x.matchId) {
    if (!msgs.length) log.innerHTML = '<p class="muted">Aún no hay mensajes. ¡Saluda!</p>';
    renderJobBox(x);
    // Check for new messages every few seconds while this chat is open
    state.chatPoll = setInterval(async () => {
      const open = $('#chatLog');
      if ($('#modal').hidden || !open || open.dataset.chatId !== x.id) return clearInterval(state.chatPoll);
      const fresh = await KDB.messages(x.matchId).catch(() => null);
      if (fresh && fresh.length !== msgs.length) return openChat(x);
      renderJobBox(x);
    }, 4000);
  }
  $('#chatForm').onsubmit = async (e) => {
    e.preventDefault();
    const text = e.target.msg.value.trim();
    if (!text) return;
    if (x.matchId) {
      try { await KDB.sendMessage(x.matchId, text); } catch (err) { return dbError(err); }
      return openChat(x);
    }
    msgs.push({ me: true, text });
    openChat(x);
    setTimeout(() => {
      msgs.push({ me: false, text: 'Perfecto, lo vemos. Te confirmo enseguida 🙂' });
      const open = $('#chatLog');
      if (!$('#modal').hidden && open && open.dataset.chatId === x.id) openChat(x);
    }, 900);
  };
}

/* ---------- Contratación y pago (Supabase) ----------
 * The company proposes price, date and payment method in the chat; the professional accepts or
 * rejects. After the job both sides confirm the payment (mock: no money moves) and the database
 * marks the job completed, which unlocks the mutual review. */
const PAY_METHODS = [
  { value: 'cash', label: '💶 Efectivo', demo: 'Efectivo', help: 'En mano al terminar el trabajo.' },
  { value: 'card', label: '💳 Tarjeta', demo: 'Tarjeta', help: 'Ejemplo: no se cobra nada en la app.' },
  { value: 'bizum', label: '📱 Bizum', demo: 'Bizum', help: 'Ejemplo: al número que os paséis por el chat.' },
];
const PAY_LABEL = Object.fromEntries(PAY_METHODS.map((m) => [m.value, m.label]));
const PAY_OPTIONS_HTML = (checked, live = false) => PAY_METHODS.map((m) => `
    <label class="pay-opt"><input type="radio" name="pay" value="${live ? m.value : m.demo}" ${(live ? m.value : m.demo) === checked ? 'checked' : ''} />
      <span><strong>${m.label}</strong><small>${m.help}</small></span></label>`).join('');
const fmtWhen = (iso) => new Date(iso).toLocaleString('es-ES', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

async function renderJobBox(x) {
  if (!$('#jobBox')) return;
  let job, pay = null;
  try {
    job = (await KDB.jobsForMatch(x.matchId))[0];
    if (job && job.status === 'accepted') pay = await KDB.paymentFor(job.id);
  } catch (e) { return dbError(e); }
  const box = $('#jobBox');
  const open = $('#chatLog');
  if (!box || !open || open.dataset.chatId !== x.id) return;
  // Only redraw when something changed (the chat refreshes it every few seconds)
  const sig = JSON.stringify([job && job.id, job && job.status, pay]);
  if (box.dataset.sig === sig) return;
  box.dataset.sig = sig;

  const company = KDB.me.role === 'company';
  if (!job || ['rejected', 'cancelled'].includes(job.status)) {
    const prev = job ? `<small>La última propuesta fue ${job.status === 'rejected' ? 'rechazada' : 'cancelada'}.</small>` : '';
    box.innerHTML = company
      ? `<div class="item-main"><strong>Propuesta de contratación</strong><small>Envía fecha, horas, precio y forma de pago.</small>${prev}</div>
         <button class="btn" data-job="propose">Proponer</button>`
      : `<div class="item-main"><strong>Propuesta de contratación</strong><small>La empresa te enviará aquí la propuesta.</small>${prev}</div>`;
  } else {
    const terms = `${euros(job.price_cents)} · ${PAY_LABEL[job.payment_method]} · ${fmtWhen(job.starts_at)}`;
    const mine = job.proposed_by === KDB.me.id;
    if (job.status === 'proposed') {
      box.innerHTML = `<div class="item-main"><strong>${mine ? 'Propuesta enviada' : 'Tienes una propuesta'}</strong><small>${terms}</small>
          ${mine ? '<small>Esperando respuesta.</small>' : ''}</div>
        ${mine ? '<button class="btn ghost" data-job="cancelled">Cancelar</button>'
          : '<div class="job-actions"><button class="btn ghost" data-job="rejected">Rechazar</button><button class="btn" data-job="accepted">Aceptar</button></div>'}`;
    } else if (job.status === 'accepted') {
      const done = pay && pay[company ? 'company_confirmed_at' : 'worker_confirmed_at'];
      box.innerHTML = `<div class="item-main"><strong>✅ Contratado</strong><small>${terms}</small>
          <small>${done ? 'Has confirmado el pago. Falta la otra parte.' : 'Al terminar, confirmad el pago los dos (simulación, no se cobra nada).'}</small></div>
        ${done ? '' : '<button class="btn" data-job="pay">Confirmar pago</button>'}`;
    } else {
      box.innerHTML = `<div class="item-main"><strong>🎉 Trabajo completado</strong><small>${terms}</small><small>Ya podéis valoraros.</small></div>
        <button class="btn warm" data-job="review">Valorar</button>`;
    }
  }
  $$('[data-job]', box).forEach((b) => b.onclick = async () => {
    const action = b.dataset.job;
    if (action === 'propose') return openPropose(x);
    if (action === 'review') return goToPendingReviews();
    b.disabled = true;
    try {
      if (action === 'pay') await KDB.confirmPayment(job);
      else await KDB.setJobStatus(job.id, action);
    } catch (e) { b.disabled = false; return dbError(e); }
    toast({ accepted: '✅ Propuesta aceptada', rejected: 'Propuesta rechazada', cancelled: 'Propuesta cancelada', pay: '✅ Pago confirmado' }[action]);
    renderJobBox(x);
  });
}

function openPropose(x) {
  clearInterval(state.chatPoll);
  const today = new Date().toISOString().slice(0, 10);
  $('#modalBody').innerHTML = `
    <span class="kind">Propuesta de contratación</span>
    <h2>${x.name}</h2>
    <form class="form" id="proposeForm">
      <div class="form-row">
        <label>Fecha<input type="date" name="date" value="${today}" min="${today}" required /></label>
        <label>Hora de inicio<input type="time" name="time" value="09:00" required /></label>
      </div>
      <div class="form-row">
        <label>Horas<input type="number" name="hours" min="0.5" max="24" step="0.5" value="6" required /></label>
        <label>Precio total (€)<input type="number" name="price" min="1" step="0.01" value="90" required /></label>
      </div>
      <fieldset><legend>Forma de pago</legend>${PAY_OPTIONS_HTML('cash', true)}</fieldset>
      <p class="muted">Simulación: Kurro no cobra nada. Al terminar, los dos confirmáis el pago en la app.</p>
      <div class="job-actions">
        <button type="button" class="btn ghost" id="proposeBack">Volver</button>
        <button class="btn" type="submit">Enviar propuesta</button>
      </div>
    </form>`;
  openModal();
  $('#proposeBack').onclick = () => openChat(x);
  $('#proposeForm').onsubmit = async (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const start = new Date(`${f.get('date')}T${f.get('time')}`);
    const hours = parseFloat(f.get('hours'));
    const priceCents = Math.round(parseFloat(f.get('price')) * 100);
    if (!(hours > 0) || !(priceCents > 0) || isNaN(start)) return toast('Revisa la fecha, las horas y el precio');
    const end = new Date(start.getTime() + hours * 3600e3);
    e.submitter && (e.submitter.disabled = true);
    try {
      await KDB.proposeJob(x.dbMatch, { priceCents, method: f.get('pay'), startsAt: start.toISOString(), endsAt: end.toISOString() });
    } catch (err) { if (e.submitter) e.submitter.disabled = false; return dbError(err); }
    toast('📨 Propuesta enviada');
    openChat(x);
  };
}

function goToPendingReviews() {
  closeModal();
  state.rtab = 'given';
  $$('.rtab').forEach((t) => t.classList.toggle('active', t.dataset.rtab === 'given'));
  showView('reviews');
}

/* ---------- Contratación y pago (empresa, modo demo) ---------- */
function openPay(x) {
  // Example figures for the mockup: 6 h at 15 €/h and a 10 % service fee
  $('#modalBody').innerHTML = `
    <span class="kind">Confirmar contratación</span>
    <div class="item" style="box-shadow:none;background:transparent;padding:0 30px 0 0">
      <div class="avatar" style="background:${x.bg}">${x.emoji}</div>
      <div class="item-main"><strong>${x.name}</strong>
        <small class="item-score">${starsHTML(x.rating)} <b>${x.rating.toFixed(1)}</b> · ${x.count} reseñas</small></div>
    </div>
    <div class="pay-rows">
      <div><span>6 h × 15 €/h</span><span>90 €</span></div>
      <div><span>Comisión de servicio Kurro (10 %)</span><span>9 €</span></div>
      <div class="total"><span>Total</span><span>99 €</span></div>
    </div>
    <h4>Método de pago</h4>
    ${PAY_OPTIONS_HTML('Efectivo')}
    <p class="muted">Simulación: Kurro no cobra nada. Al terminar, los dos confirmáis el pago en la app para poder valoraros.</p>
    <button class="btn" id="payOk" style="width:100%;margin-top:6px">Confirmar y contratar · 99 €</button>`;
  openModal();
  $('#payOk').onclick = () => {
    const method = $('input[name="pay"]:checked').value;
    if (!PENDING.company.some((p) => p.id === 'r-' + x.id)) {
      PENDING.company.push({ id: 'r-' + x.id, emoji: x.emoji, bg: x.bg, name: x.name.split(',')[0], sub: `Contratado · ${method.toLowerCase()}` });
    }
    closeModal();
    toast(`✅ Contratado · ${method}`);
  };
}

/* ---------- Publicar anuncio (empresa) ---------- */
async function renderAds() {
  const view = $('#view-publish');
  $('#adForm').hidden = guest();
  $$('h4', view).forEach((h) => { h.hidden = guest(); });
  if (guest()) {
    $('#adList').innerHTML = `<li>${guestHTML('📣', 'Publica lo que necesitas',
      'Con una cuenta de empresa publicas anuncios y los profesionales de la zona los ven al momento.')}</li>`;
    $$('[data-signup]', $('#adList')).forEach((b) => { b.dataset.signup = 'company'; });
    return bindGuest($('#adList'));
  }
  if (live()) {
    let ads;
    try { ads = await KDB.myAds(); } catch (e) { return dbError(e); }
    const status = { open: 'Abierta', filled: 'Cubierta', closed: 'Cerrada', cancelled: 'Cancelada' };
    $('#adList').innerHTML = ads.length ? ads.map((a) => `
      <li class="item">
        <div class="item-main"><strong>${esc(a.title)}</strong><small>${esc([KDB.categoryName(a.category_id), dayLabel(a.starts_on),
          a.duration_hours && `${Number(a.duration_hours)} h`, euros(a.budget_cents) + (a.budget_type === 'hourly' ? '/h' : '')].filter(Boolean).join(' · '))}</small>
          <small class="item-score">${a.matches} match${a.matches === 1 ? '' : 'es'}</small></div>
        ${a.is_urgent && a.status === 'open' ? '<span class="badge warm">⚡ Hoy</span>' : `<span class="badge">${status[a.status]}</span>`}
      </li>`).join('') : '<li class="muted">Todavía no has publicado ningún anuncio.</li>';
    return;
  }
  $('#adList').innerHTML = state.ads.map((a) => `
    <li class="item">
      <div class="item-main"><strong>${esc(a.title)}</strong><small>${esc(a.sector)}${a.meta ? ' · ' + esc(a.meta) : ''}</small>
        <small class="item-score">${a.interested} profesionales interesados</small></div>
      ${a.urgent ? '<span class="badge warm">⚡ Hoy</span>' : '<span class="badge">Abierta</span>'}
    </li>`).join('');
}

// "15 €/h" -> { cents: 1500, type: 'hourly' }; "120 €" -> fixed
function parseBudget(text) {
  const n = parseFloat(String(text).replace(',', '.').replace(/[^\d.]/g, ''));
  return { cents: Math.round(n * 100), type: /\/\s*h|hora/i.test(text) ? 'hourly' : 'fixed' };
}

async function publishLiveAd(form) {
  const f = new FormData(form);
  const title = f.get('title').trim();
  const description = f.get('desc').trim();
  const budget = parseBudget(f.get('budget'));
  const hours = parseFloat(String(f.get('duration')).replace(',', '.'));
  const day = f.get('date') || new Date().toISOString().slice(0, 10);
  if (title.length < 3) return toast('El título necesita al menos 3 letras');
  if (description.length < 10) return toast('Añade una descripción (mínimo 10 caracteres)');
  if (!(budget.cents > 0)) return toast('Indica un presupuesto, por ejemplo 15 €/h');
  if (!f.get('payCard') && !f.get('payBizum') && !f.get('payCash')) return toast('Elige al menos una forma de pago');
  try {
    await KDB.publishAd({
      title, description, category_id: KDB.categoryId(f.get('sector')),
      starts_on: day, ends_on: day, duration_hours: hours > 0 ? hours : null,
      budget_cents: budget.cents, budget_type: budget.type, is_urgent: f.get('urgent') === 'on',
      accepts_card: !!f.get('payCard'), accepts_bizum: !!f.get('payBizum'), accepts_cash: !!f.get('payCash'),
    });
  } catch (e) { return dbError(e); }
  form.reset();
  renderAds();
  toast('📣 Anuncio publicado');
}

function publishAd(form) {
  if (live()) return publishLiveAd(form);
  const f = new FormData(form);
  const title = f.get('title').trim();
  if (!title) return;
  const meta = [f.get('date'), f.get('duration').trim(), f.get('budget').trim()].filter(Boolean).join(' · ');
  const urgent = f.get('urgent') === 'on';
  state.ads.unshift({ title, sector: f.get('sector'), meta, urgent, interested: 0 });
  // The new ad also shows up as an offer for professionals in Descubrir
  const c = PROFILES.company;
  const pay = [f.get('payCash') && 'Efectivo', f.get('payCard') && 'Tarjeta', f.get('payBizum') && 'Bizum'].filter(Boolean);
  OFFERS.unshift({ id: 'ad' + Date.now(), emoji: c.emoji, bg: 'var(--c-sage)', name: c.name, sub: [title, meta].filter(Boolean).join(' · '),
    sector: f.get('sector'), urgent, rating: c.rating, count: c.count, repeat: c.repeat, dist: c.dist, cats: c.cats,
    badges: ['Empleador recomendado', ...pay], quote: '“Trato muy correcto y horarios respetados.”', reviews: RECEIVED.company });
  form.reset();
  renderAds();
  toast('📣 Anuncio publicado');
}

/* ---------- Agenda de disponibilidad (profesional) ---------- */
async function renderLiveCalendar() {
  const now = new Date(), y = now.getFullYear(), mo = now.getMonth();
  let rows;
  try { rows = await KDB.monthAvailability(y, mo); } catch (e) { return dbError(e); }
  const toUi = { free: 'free', booked: 'busy', unavailable: 'off' };
  const days = new Date(y, mo + 1, 0).getDate();
  const cal = Object.fromEntries(Array.from({ length: days }, (_, i) => [i + 1, toUi[rows[i + 1]] || 'free']));
  const offset = (new Date(y, mo, 1).getDay() + 6) % 7; // Monday first
  const month = now.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  drawCalendar({ cal, today: now.getDate(), offset, month: month[0].toUpperCase() + month.slice(1),
    available: KDB.me.details.available_today,
    onAvail: async () => { try { await KDB.setAvailableToday(!KDB.me.details.available_today); } catch (e) { return dbError(e); } renderLiveCalendar(); },
    onDay: async (d) => {
      try { await KDB.setDay(new Date(y, mo, d), cal[d] === 'free' ? 'unavailable' : null); } catch (e) { return dbError(e); }
      renderLiveCalendar();
    } });
}

function renderCalendar() {
  if (guest()) {
    $('#calendarPanel').innerHTML = guestHTML('📅', 'Tu agenda de disponibilidad',
      'Marca tus días libres, ocupados y no disponibles, y activa "Disponible hoy" para que te encuentren las empresas que necesitan a alguien ya.');
    $$('[data-signup]', $('#calendarPanel')).forEach((b) => { b.dataset.signup = 'worker'; });
    return bindGuest($('#calendarPanel'));
  }
  if (live()) return renderLiveCalendar();
  const p = PROFILES.worker;
  drawCalendar({ cal: state.cal, today: 14, offset: 6, month: 'Noviembre 2026', available: p.available,
    onAvail: () => { p.available = !p.available; renderCalendar(); },
    onDay: (d) => { state.cal[d] = state.cal[d] === 'free' ? 'off' : 'free'; renderCalendar(); } });
}

function drawCalendar({ cal, today, offset, month, available, onAvail, onDay }) {
  const label = { free: 'libre', busy: 'trabajo reservado', off: 'no disponible' };
  $('#calendarPanel').innerHTML = `
    <div class="item">
      <div class="item-main"><strong>⚡ Disponible hoy</strong><small>Las empresas te verán en el filtro de urgencia</small></div>
      <button class="btn ${available ? '' : 'ghost'}" id="calAvail">${available ? 'Activo' : 'Inactivo'}</button>
    </div>
    <div class="cal">
      <div class="cal-head">${month}</div>
      <div class="cal-grid">${['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d) => `<span>${d}</span>`).join('')}
        ${'<i></i>'.repeat(offset)}
        ${Object.entries(cal).map(([d, st]) => `<button class="day ${st} ${+d === today ? 'today' : ''}" data-day="${d}" aria-label="Día ${d}, ${label[st]}">${d}</button>`).join('')}
      </div>
      <div class="legend">
        <span><i style="background:var(--c-sage)"></i>Libre</span>
        <span><i style="background:var(--accent-soft)"></i>Trabajo reservado</span>
        <span><i style="box-shadow:inset 0 0 0 1.5px var(--sage)"></i>No disponible</span>
      </div>
    </div>`;
  $('#calAvail').onclick = onAvail;
  $$('.day', $('#calendarPanel')).forEach((b) => b.onclick = () => {
    const d = b.dataset.day;
    if (cal[d] === 'busy') return toast('Ese día ya tienes un trabajo reservado');
    onDay(d);
  });
}

function updateMatchCount() {
  if (live()) return refreshMatchCount();
  if (guest()) { $('#matchCount').hidden = true; return; }
  const n = state.matches[state.role].length;
  const el = $('#matchCount');
  el.textContent = n;
  el.hidden = n === 0;
}

/* ---------- Reseñas ---------- */
async function renderReviews() {
  const panel = $('#reviewPanel');
  $('#view-reviews .review-tabs').hidden = guest();
  if (guest()) {
    panel.innerHTML = guestHTML('⭐', 'Reseñas en los dos sentidos',
      'Al terminar cada trabajo, profesional y empresa se valoran. Son anónimas y verificadas, y se publican solo cuando los dos han valorado. Las valoraciones de cada empresa ya las ves en sus ofertas.');
    return bindGuest(panel);
  }
  if (live()) {
    if (state.rtab !== 'received') {
      panel.innerHTML = '<p class="muted">Cargando…</p>';
      let pending;
      try { pending = await KDB.pendingReviews(); } catch (e) { return dbError(e); }
      const items = pending.map((r) => {
        const company = r.partner_role === 'company', l = look(r.details.category_id);
        return { ...r, emoji: company ? l.offer : '🙂', bg: l.bg,
          name: company ? (r.details.legal_name || r.profile.display_name || 'Empresa') : (r.profile.display_name || 'Profesional') };
      });
      panel.innerHTML = items.length ? `<ul class="list">${items.map((x, i) => `
        <li class="item">
          <div class="avatar" style="background:${x.bg}">${x.emoji}</div>
          <div class="item-main"><strong>${esc(x.name)}</strong><small>Trabajo terminado · ${dayLabel(x.ended_at.slice(0, 10))}</small></div>
          <button class="btn warm" data-rate="${i}">Valorar</button>
        </li>`).join('')}</ul>`
        : '<p class="muted">No tienes valoraciones pendientes. Cuando un trabajo se complete (los dos confirmáis el pago), podréis valoraros aquí. Las reseñas se publican cuando las dos partes han valorado.</p>';
      $$('[data-rate]', panel).forEach((b) => b.onclick = () => openLiveRate(items[+b.dataset.rate]));
      return;
    }
    let rep;
    try { rep = await KDB.myReputation(); } catch (e) { return dbError(e); }
    const dir = KDB.me.role === 'worker' ? 'Empresa → tú' : 'Profesional → empresa';
    panel.innerHTML = rep.reviews.length
      ? rep.reviews.map((r) => reviewHTML({ stars: r.overall, text: esc(r.comment || 'Sin comentario.'), who: dir.split(' ')[0], dir })).join('')
      : '<p class="muted">Aún no tienes reseñas publicadas.</p>';
    return;
  }
  if (state.rtab === 'received') {
    panel.innerHTML = RECEIVED[state.role].map(reviewHTML).join('');
  } else {
    const p = PENDING[state.role];
    panel.innerHTML = p.length ? `<ul class="list">${p.map((x) => `
      <li class="item">
        <div class="avatar" style="background:${x.bg}">${x.emoji}</div>
        <div class="item-main"><strong>${x.name}</strong><small>${x.sub}</small></div>
        <button class="btn warm" data-rate="${x.id}">Valorar</button>
      </li>`).join('')}</ul>` : '<p class="muted">No tienes valoraciones pendientes. ¡Gracias por mejorar el mercado laboral!</p>';
    $$('[data-rate]', panel).forEach((b) => b.onclick = () => openRate(p.find((x) => x.id === b.dataset.rate)));
  }
}

// Review with an overall score, one score per criterion and "¿repetirías?" (Supabase)
function openLiveRate(x) {
  const crits = KDB.criteria.filter((c) => c.target_role === x.partner_role);
  const vals = {};
  let repeat = true;
  const starRow = (key, label) => `<div class="rate-stars" data-key="${key}" role="group" aria-label="${label}">${[1, 2, 3, 4, 5]
    .map((n) => `<button type="button" data-n="${n}" aria-label="${n} de 5">★</button>`).join('')}</div>`;
  $('#modalBody').innerHTML = `
    <h2>Valora a ${esc(x.name)}</h2>
    <p class="muted">Tu reseña es anónima y solo se publica cuando ambas partes han valorado.</p>
    <h4>Valoración general</h4>
    ${starRow('overall', 'Valoración general')}
    ${crits.map((c) => `<div class="crit-row"><span>${esc(c.name)}</span>${starRow('c' + c.id, c.name)}</div>`).join('')}
    <h4>¿Repetirías?</h4>
    <div class="review-tabs"><button type="button" class="rtab active" data-rep="1">Sí</button><button type="button" class="rtab" data-rep="0">No</button></div>
    <textarea maxlength="1000" placeholder="¿Cómo fue la experiencia?"></textarea>
    <button class="btn" id="sendRate" style="width:100%;margin-top:12px">Enviar reseña</button>`;
  openModal();
  $$('#modalBody .rate-stars').forEach((row) => $$('button', row).forEach((b) => b.onclick = () => {
    vals[row.dataset.key] = +b.dataset.n;
    $$('button', row).forEach((s) => s.classList.toggle('on', +s.dataset.n <= vals[row.dataset.key]));
  }));
  $$('[data-rep]').forEach((b) => b.onclick = () => {
    repeat = b.dataset.rep === '1';
    $$('[data-rep]').forEach((o) => o.classList.toggle('active', o === b));
  });
  $('#sendRate').onclick = async (e) => {
    if (!vals.overall) return toast('Elige una valoración general');
    const missing = crits.filter((c) => !vals['c' + c.id]);
    if (missing.length) return toast(`Puntúa también: ${missing.map((c) => c.name).join(', ')}`);
    e.target.disabled = true;
    try {
      await KDB.submitReview({
        jobId: x.job_id, overall: vals.overall, wouldRepeat: repeat,
        comment: $('#modalBody textarea').value.trim(),
        scores: crits.map((c) => ({ id: c.id, score: vals['c' + c.id] })),
      });
    } catch (err) { e.target.disabled = false; return dbError(err); }
    closeModal();
    renderReviews();
    toast('✅ Reseña enviada. Se publicará cuando la otra parte también valore.');
  };
}

function openRate(x) {
  let value = 0;
  $('#modalBody').innerHTML = `
    <h2>Valora a ${x.name}</h2>
    <p class="muted">Tu reseña es anónima y solo se publica cuando ambas partes han valorado.</p>
    <div class="rate-stars">${[1, 2, 3, 4, 5].map((n) => `<button data-n="${n}">★</button>`).join('')}</div>
    <textarea placeholder="¿Cómo fue la experiencia?"></textarea>
    <button class="btn" id="sendRate" style="width:100%;margin-top:12px">Enviar reseña</button>`;
  openModal();
  $$('.rate-stars button').forEach((b) => b.onclick = () => {
    value = +b.dataset.n;
    $$('.rate-stars button').forEach((s) => s.classList.toggle('on', +s.dataset.n <= value));
  });
  $('#sendRate').onclick = () => {
    if (!value) return toast('Elige una puntuación');
    PENDING[state.role] = PENDING[state.role].filter((p) => p.id !== x.id);
    closeModal(); renderReviews(); toast('✅ Reseña enviada');
  };
}

/* ---------- Cuenta (Supabase Auth) ---------- */
function accountHTML() {
  if (!KDB.enabled) return '';
  if (!KDB.me) {
    return `<div class="item account">
      <div class="item-main"><strong>Modo demo</strong><small>Estás viendo datos de ejemplo. Entra o crea tu cuenta para usar Kurro con datos reales.</small></div>
      <button class="btn" data-auth>Entrar</button></div>`;
  }
  return `<div class="item account">
    <div class="item-main"><strong>${esc(KDB.me.display_name)}</strong><small>${esc(KDB.me.email || '')} · cuenta de ${KDB.me.role === 'worker' ? 'profesional' : 'empresa'}</small></div>
    <button class="btn ghost" data-logout>Salir</button></div>`;
}

function bindAccount(root) {
  $$('[data-auth]', root).forEach((b) => b.onclick = () => openAuth('login'));
  $$('[data-logout]', root).forEach((b) => b.onclick = async () => { await KDB.signOut(); afterAuth(); toast('Sesión cerrada'); });
}

function openAuth(mode, role) {
  const signup = mode === 'signup';
  $('#modalBody').innerHTML = `
    <span class="kind">${signup ? 'Crear cuenta' : 'Entrar'}</span>
    <h2>${signup ? 'Únete a kurro.' : 'Hola de nuevo'}</h2>
    <form class="form" id="authForm">
      ${signup ? `
        <fieldset><legend>Soy…</legend>
          <label class="check"><input type="radio" name="role" value="worker" ${role !== 'company' ? 'checked' : ''} /> Profesional: busco trabajos</label>
          <label class="check"><input type="radio" name="role" value="company" ${role === 'company' ? 'checked' : ''} /> Empresa: busco profesionales</label>
        </fieldset>
        <label>Nombre que verán los demás<input name="name" required minlength="2" maxlength="80" autocomplete="name" /></label>` : ''}
      <label>Email<input type="email" name="email" required autocomplete="email" /></label>
      <label>Contraseña<input type="password" name="password" required minlength="6" autocomplete="${signup ? 'new-password' : 'current-password'}" /></label>
      <button class="btn" type="submit">${signup ? 'Crear cuenta' : 'Entrar'}</button>
    </form>
    <p class="muted" style="text-align:center">${signup ? '¿Ya tienes cuenta?' : '¿Eres nuevo?'}
      <button class="link" id="authSwitch">${signup ? 'Entrar' : 'Crear cuenta'}</button></p>`;
  openModal();
  $('#authSwitch').onclick = () => openAuth(signup ? 'login' : 'signup');
  $('#authForm').onsubmit = async (e) => {
    e.preventDefault();
    const f = new FormData(e.target), btn = $('button[type="submit"]', e.target);
    btn.disabled = true;
    try {
      if (signup) {
        const r = await KDB.signUp({ email: f.get('email'), password: f.get('password'), role: f.get('role'), displayName: f.get('name').trim() });
        if (r.needsConfirmation) { closeModal(); return toast('📧 Revisa tu correo para confirmar la cuenta'); }
        await KDB.loadMe();
      } else {
        await KDB.signIn(f.get('email'), f.get('password'));
      }
      afterAuth();
    } catch (err) { btn.disabled = false; dbError(err); }
  };
}

// After sign-up the worker or company row is still missing: ask for its required field
function openOnboarding() {
  const worker = KDB.me.role === 'worker';
  $('#modalBody').innerHTML = `
    <span class="kind">Completa tu perfil</span>
    <h2>${worker ? '¿A qué te dedicas?' : '¿Cómo se llama tu empresa?'}</h2>
    <form class="form" id="onbForm">
      <label>${worker ? 'Tu profesión en pocas palabras' : 'Nombre legal de la empresa'}
        <input name="text" required minlength="2" maxlength="${worker ? 80 : 120}" placeholder="${worker ? 'Ej.: Cocinera · 6 años de experiencia' : 'Ej.: Hotel Puerto Banús S.L.'}" /></label>
      <button class="btn" type="submit">Guardar</button>
    </form>`;
  openModal();
  $('#onbForm').onsubmit = async (e) => {
    e.preventDefault();
    try { await KDB.completeProfile(new FormData(e.target).get('text').trim()); } catch (err) { return dbError(err); }
    afterAuth();
  };
}

// Re-render everything for the current session (signed in, signed out or half-registered)
function afterAuth() {
  closeModal();
  if (KDB.me && !KDB.me.details) return openOnboarding();
  state.liveDeck = []; state.liveMatches = [];
  if (live()) toast(`👋 Hola, ${KDB.me.display_name}`);
  if (guest()) state.seen.clear();
  setRole(live() ? KDB.me.role : state.role);
  loadLiveDeck();
}

function dbError(e) {
  console.error(e);
  const msg = String((e && e.message) || e);
  const known = {
    'Invalid login credentials': 'Email o contraseña incorrectos',
    'User already registered': 'Ya existe una cuenta con ese email',
    'Email not confirmed': 'Confirma tu email antes de entrar',
  };
  toast('⚠️ ' + (known[msg] || msg));
}

/* ---------- Perfil ---------- */
async function liveProfile() {
  const me = KDB.me, d = me.details, worker = me.role === 'worker';
  const [rep, jobs] = await Promise.all([KDB.myReputation(), KDB.myJobCount()]);
  const r = ratingFields(rep.rating, rep.reviews, !worker);
  return {
    emoji: worker ? '🧑‍🔧' : '🏢', name: esc(worker ? me.display_name : d.legal_name),
    sub: esc([worker ? d.headline : 'Empresa', me.city].filter(Boolean).join(' · ')),
    jobs, response: '—', available: d.available_today,
    badges: [worker ? 'Profesional' : 'Empresa', 'Nuevo en Kurro'], portfolio: [worker ? '📷' : '🏢'], ...r,
  };
}

async function renderProfile() {
  if (guest()) {
    $('#profilePanel').innerHTML = `
      <div class="profile-hero">
        <div class="avatar"><img src="icons/icon-192.png" alt="" width="56" height="56" style="border-radius:14px" /></div>
        <div><h2>Únete a kurro.</h2><div>Si hay Curro, hay Kurro</div></div>
      </div>
      <div class="guest-roles">
        <button class="item" data-signup="worker">
          <div class="avatar" style="background:var(--c-pink)">🧑‍🍳</div>
          <div class="item-main"><strong>Soy profesional</strong><small>Encuentra trabajos cerca, muestra tu portfolio y gana reputación.</small></div>
        </button>
        <button class="item" data-signup="company">
          <div class="avatar" style="background:var(--c-sage)">🏢</div>
          <div class="item-main"><strong>Soy empresa</strong><small>Publica anuncios y encuentra profesionales de confianza, también para hoy.</small></div>
        </button>
      </div>
      <p class="muted" style="text-align:center">¿Ya tienes cuenta? <button class="link" data-auth>Entrar</button></p>`;
    return bindGuest($('#profilePanel'));
  }
  const company = state.role === 'company';
  let p = PROFILES[state.role];
  if (live()) {
    try { p = await liveProfile(); } catch (e) { return dbError(e); }
  }
  const reviews = live() ? p.reviews : RECEIVED[state.role];
  $('#profilePanel').innerHTML = accountHTML() + `
    <div class="profile-hero">
      <div class="avatar">${p.emoji}</div>
      <div><h2>${p.name}</h2><div>${p.sub}</div>
        <div class="hero-score">${starsHTML(p.rating)} <b>${p.count ? p.rating.toFixed(1) : '—'}</b> · ${p.count} reseñas</div></div>
    </div>
    <div class="badges" style="margin-top:12px">${p.badges.map((b, i) => `<span class="badge ${i % 2 ? 'warm' : ''}">${b}</span>`).join('')}</div>
    <h4>${company ? 'Así valoran los profesionales a tu empresa' : 'Así te valoran las empresas'}</h4>
    ${ratingSummaryHTML(p, company)}
    ${reviews.slice(0, 2).map(reviewHTML).join('')}
    <button class="btn warm" id="allReviews" style="width:100%">Ver las ${p.count} reseñas</button>
    <div class="stats">
      <div class="stat"><b>${p.jobs}</b><small>${company ? 'Contrataciones' : 'Trabajos'}</small></div>
      <div class="stat"><b>${p.repeat} %</b><small>Repetiría</small></div>
      <div class="stat"><b>${p.response}</b><small>Respuesta</small></div>
    </div>
    ${company ? `
      <div class="item" style="margin-top:10px">
        <div class="item-main"><strong>🔔 Alertas inteligentes</strong><small>Avísame cuando haya cocineros disponibles hoy &lt; 15 €/h</small></div>
        <button class="btn" onclick="toast('🔔 Alerta guardada')">Crear</button>
      </div>` : `
      <div class="item" style="margin-top:10px">
        <div class="item-main"><strong>⚡ Disponible hoy</strong><small>Las empresas te verán en el filtro de urgencia</small></div>
        <button class="btn ${p.available ? '' : 'ghost'}" id="toggleAvail">${p.available ? 'Activo' : 'Inactivo'}</button>
      </div>
      <div class="item" style="margin-top:10px">
        <div class="item-main"><strong>📅 Mi disponibilidad</strong><small>${live() ? 'Marca tus días libres y no disponibles' : `${Object.values(state.cal).filter((v) => v === 'free').length} días libres este mes`}</small></div>
        <button class="btn warm" id="openCal">Ver agenda</button>
      </div>`}
    <h4>${company ? 'Nuestras instalaciones' : 'Mi portfolio'}</h4>
    <div class="portfolio">${p.portfolio.map((e, i) => `<div style="background:${COLORS[i % 3]}">${e}</div>`).join('')}</div>`;
  $('#allReviews').onclick = () => showView('reviews');
  bindAccount($('#profilePanel'));
  const t = $('#toggleAvail');
  if (t) t.onclick = async () => {
    if (live()) { try { await KDB.setAvailableToday(!p.available); } catch (e) { return dbError(e); } }
    else p.available = !p.available;
    renderProfile();
  };
  const oc = $('#openCal');
  if (oc) oc.onclick = () => showView('calendar');
}

/* ---------- Navegación / UI ---------- */
function showView(name) {
  $$('.nav-item').forEach((b) => b.classList.toggle('active', b.dataset.view === name));
  $$('.view').forEach((v) => v.classList.toggle('active', v.id === `view-${name}`));
  if (name === 'matches') renderMatches();
  if (name === 'reviews') renderReviews();
  if (name === 'profile') renderProfile();
  if (name === 'publish') renderAds();
  if (name === 'calendar') renderCalendar();
}

function setRole(role) {
  // A signed-in account has one role; the toggle only switches roles in demo mode
  if (live() && role !== KDB.me.role) return toast(`Tu cuenta es de ${KDB.me.role === 'worker' ? 'profesional' : 'empresa'}`);
  state.role = role;
  state.seen.clear();
  $$('.role').forEach((b) => b.classList.toggle('active', b.dataset.role === role));
  updateMatchCount();
  renderDeck();
  // Publicar is only for companies and Agenda only for professionals
  $$('.nav-item[data-only]').forEach((b) => { b.hidden = b.dataset.only !== role; });
  const active = $('.nav-item.active');
  showView(active.hidden ? 'discover' : active.dataset.view);
}

function openModal() { $('#modal').hidden = false; }
function closeModal() { $('#modal').hidden = true; }

let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg; t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 1800);
}
window.toast = toast;

function init() {
  $$('.nav-item').forEach((b) => b.onclick = () => showView(b.dataset.view));
  $$('.role').forEach((b) => b.onclick = () => setRole(b.dataset.role));
  $$('.rtab').forEach((b) => b.onclick = () => {
    state.rtab = b.dataset.rtab;
    $$('.rtab').forEach((x) => x.classList.toggle('active', x === b));
    renderReviews();
  });

  $('#urgentChip').onclick = (e) => { state.urgent = !state.urgent; e.currentTarget.classList.toggle('active', state.urgent); renderDeck(); };
  $$('[data-sector]').forEach((b) => b.onclick = () => {
    state.sector = b.dataset.sector;
    $$('[data-sector]').forEach((x) => x.classList.toggle('active', x === b));
    renderDeck();
  });
  $('[data-sector="all"]').classList.add('active');

  $('#adForm').onsubmit = (e) => { e.preventDefault(); publishAd(e.target); };

  $('#btnNo').onclick = () => swipe('left');
  $('#btnYes').onclick = () => swipe('right');
  $('#btnInfo').onclick = () => {
    const c = $('#deck .card:last-child');
    if (c) openDetail(findItem(c.dataset.id));
  };
  $('#authBtn').onclick = () => (KDB.me ? showView('profile') : openAuth('login'));

  $('#modal').addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', (e) => {
    if (!$('#modal').hidden) { if (e.key === 'Escape') closeModal(); return; }
    if (e.key === 'ArrowLeft') swipe('left');
    if (e.key === 'ArrowRight') swipe('right');
  });

  if (KDB.enabled) state.deckLoading = true;  // avoid flashing demo cards before the real jobs load
  renderDeck();
  startLive();
}

// Connect to Supabase (if configured) and restore the session
async function startLive() {
  if (!KDB.enabled) return;
  $('#authBtn').hidden = false;
  try { await KDB.init(); } catch (e) { state.deckLoading = false; renderDeck(); return dbError(e); }
  KDB.onAuthChange(async () => { await KDB.loadMe(); updateAuthBtn(); });
  updateAuthBtn();
  afterAuth();
}

function updateAuthBtn() {
  const b = $('#authBtn');
  b.textContent = KDB.me ? '👤' : 'Entrar';
  b.setAttribute('aria-label', KDB.me ? 'Mi cuenta' : 'Entrar o crear cuenta');
}

init();
