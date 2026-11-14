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
    badges: ['Empleador recomendado', 'Pago seguro'], quote: '“Encargo claro y pagan puntual vía Kurro.”',
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

// Compact rating block for swipe cards
function ratingStripHTML(x) {
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
  return `<div class="rating-summary">
    <div class="rs-score"><b>${x.rating.toFixed(1)}</b>${starsHTML(x.rating)}<small>${x.count} reseñas de ${reviewers(company)}</small></div>
    <div class="rs-bars">${x.dist.map((pct, i) => `<div class="rs-row"><span>${5 - i}</span><div class="bar"><i style="width:${pct}%"></i></div><span>${pct} %</span></div>`).join('')}</div>
  </div>
  <div class="cats">${Object.entries(x.cats).map(([k, v]) => `<div class="cat"><span>${k}</span><b>${v.toFixed(1)}</b><div class="bar"><i style="width:${v / 5 * 100}%"></i></div></div>`).join('')}</div>
  <p class="trust"><span>✔</span><span>Reseñas anónimas y verificadas: solo opina quien ha trabajado ${company ? 'con esta empresa' : 'con este profesional'}. <b>${x.repeat} % repetiría.</b></span></p>`;
}

function pool() {
  const src = state.role === 'worker' ? OFFERS : WORKERS;
  return src.filter((x) =>
    !state.seen.has(x.id) &&
    (!state.urgent || x.urgent) &&
    (state.sector === 'all' || x.sector === state.sector));
}

/* ---------- Deck ---------- */
function renderDeck() {
  const deck = $('#deck');
  const items = pool();
  deck.innerHTML = '';
  if (!items.length) {
    deck.innerHTML = `<div class="empty"><div><div style="font-size:3rem">🌊</div>
      <p>No hay más ${state.role === 'worker' ? 'ofertas' : 'profesionales'} con estos filtros.</p>
      <button class="btn" id="resetDeck">Volver a empezar</button></div></div>`;
    $('#resetDeck').onclick = () => { state.seen.clear(); renderDeck(); };
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
  const item = [...OFFERS, ...WORKERS].find((x) => x.id === id);
  card.style.transform = `translate(${dir === 'right' ? 600 : -600}px, 40px) rotate(${dir === 'right' ? 30 : -30}deg)`;
  card.style.opacity = '0';
  state.seen.add(id);

  if (dir === 'right') {
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
function renderMatches() {
  const list = $('#matchList');
  const m = state.matches[state.role];
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
function openChat(x) {
  const company = isCompany(x);
  const job = company ? x.sub.split(' · ')[0] : 'el servicio';
  if (!state.chats[x.id]) {
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
    <div class="item proposal">
      <div class="item-main"><strong>Propuesta de contratación</strong><small>${company ? x.sub : 'Servicio acordado en el chat'} · pago seguro o efectivo</small></div>
      <button class="btn" id="chatDeal">${company ? 'Aceptar' : 'Contratar'}</button>
    </div>
    <form class="chat-form" id="chatForm">
      <input name="msg" aria-label="Escribe un mensaje" placeholder="Escribe un mensaje" autocomplete="off" />
      <button class="btn" type="submit">Enviar</button>
    </form>`;
  openModal();
  const log = $('#chatLog');
  log.scrollTop = log.scrollHeight;
  $('#chatDeal').onclick = () => {
    if (company) { closeModal(); toast('✅ Propuesta aceptada. La empresa elige el pago.'); } else openPay(x);
  };
  $('#chatForm').onsubmit = (e) => {
    e.preventDefault();
    const text = e.target.msg.value.trim();
    if (!text) return;
    msgs.push({ me: true, text });
    openChat(x);
    setTimeout(() => {
      msgs.push({ me: false, text: 'Perfecto, lo vemos. Te confirmo enseguida 🙂' });
      const open = $('#chatLog');
      if (!$('#modal').hidden && open && open.dataset.chatId === x.id) openChat(x);
    }, 900);
  };
}

/* ---------- Contratación y pago (empresa) ---------- */
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
    <label class="pay-opt"><input type="radio" name="pay" value="Pago seguro" checked />
      <span><strong>🔒 Pago seguro en la app</strong><small>Kurro retiene el importe y lo libera al profesional cuando confirmes el trabajo.</small></span></label>
    <label class="pay-opt"><input type="radio" name="pay" value="Efectivo" />
      <span><strong>💶 Efectivo</strong><small>Pagas en mano al terminar. Los dos confirmáis el pago en la app para poder valoraros.</small></span></label>
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
function renderAds() {
  $('#adList').innerHTML = state.ads.map((a) => `
    <li class="item">
      <div class="item-main"><strong>${esc(a.title)}</strong><small>${esc(a.sector)}${a.meta ? ' · ' + esc(a.meta) : ''}</small>
        <small class="item-score">${a.interested} profesionales interesados</small></div>
      ${a.urgent ? '<span class="badge warm">⚡ Hoy</span>' : '<span class="badge">Abierta</span>'}
    </li>`).join('');
}

function publishAd(form) {
  const f = new FormData(form);
  const title = f.get('title').trim();
  if (!title) return;
  const meta = [f.get('date'), f.get('duration').trim(), f.get('budget').trim()].filter(Boolean).join(' · ');
  const urgent = f.get('urgent') === 'on';
  state.ads.unshift({ title, sector: f.get('sector'), meta, urgent, interested: 0 });
  // The new ad also shows up as an offer for professionals in Descubrir
  const c = PROFILES.company;
  const pay = [f.get('paySecure') && 'Pago seguro', f.get('payCash') && 'Pago en efectivo'].filter(Boolean);
  OFFERS.unshift({ id: 'ad' + Date.now(), emoji: c.emoji, bg: 'var(--c-sage)', name: c.name, sub: [title, meta].filter(Boolean).join(' · '),
    sector: f.get('sector'), urgent, rating: c.rating, count: c.count, repeat: c.repeat, dist: c.dist, cats: c.cats,
    badges: ['Empleador recomendado', ...pay], quote: '“Trato muy correcto y horarios respetados.”', reviews: RECEIVED.company });
  form.reset();
  renderAds();
  toast('📣 Anuncio publicado');
}

/* ---------- Agenda de disponibilidad (profesional) ---------- */
function renderCalendar() {
  const p = PROFILES.worker;
  const today = 14;
  const label = { free: 'libre', busy: 'trabajo reservado', off: 'no disponible' };
  $('#calendarPanel').innerHTML = `
    <div class="item">
      <div class="item-main"><strong>⚡ Disponible hoy</strong><small>Las empresas te verán en el filtro de urgencia</small></div>
      <button class="btn ${p.available ? '' : 'ghost'}" id="calAvail">${p.available ? 'Activo' : 'Inactivo'}</button>
    </div>
    <div class="cal">
      <div class="cal-head">Noviembre 2026</div>
      <div class="cal-grid">${['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d) => `<span>${d}</span>`).join('')}
        ${'<i></i>'.repeat(6)}
        ${Object.entries(state.cal).map(([d, st]) => `<button class="day ${st} ${+d === today ? 'today' : ''}" data-day="${d}" aria-label="Día ${d}, ${label[st]}">${d}</button>`).join('')}
      </div>
      <div class="legend">
        <span><i style="background:var(--c-sage)"></i>Libre</span>
        <span><i style="background:var(--accent-soft)"></i>Trabajo reservado</span>
        <span><i style="box-shadow:inset 0 0 0 1.5px var(--sage)"></i>No disponible</span>
      </div>
    </div>`;
  $('#calAvail').onclick = () => { p.available = !p.available; renderCalendar(); };
  $$('.day', $('#calendarPanel')).forEach((b) => b.onclick = () => {
    const d = b.dataset.day;
    if (state.cal[d] === 'busy') return toast('Ese día ya tienes un trabajo reservado');
    state.cal[d] = state.cal[d] === 'free' ? 'off' : 'free';
    renderCalendar();
  });
}

function updateMatchCount() {
  const n = state.matches[state.role].length;
  const el = $('#matchCount');
  el.textContent = n;
  el.hidden = n === 0;
}

/* ---------- Reseñas ---------- */
function renderReviews() {
  const panel = $('#reviewPanel');
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

/* ---------- Perfil ---------- */
function renderProfile() {
  const p = PROFILES[state.role];
  const company = state.role === 'company';
  $('#profilePanel').innerHTML = `
    <div class="profile-hero">
      <div class="avatar">${p.emoji}</div>
      <div><h2>${p.name}</h2><div>${p.sub}</div>
        <div class="hero-score">${starsHTML(p.rating)} <b>${p.rating.toFixed(1)}</b> · ${p.count} reseñas</div></div>
    </div>
    <div class="badges" style="margin-top:12px">${p.badges.map((b, i) => `<span class="badge ${i % 2 ? 'warm' : ''}">${b}</span>`).join('')}</div>
    <h4>${company ? 'Así valoran los profesionales a tu empresa' : 'Así te valoran las empresas'}</h4>
    ${ratingSummaryHTML(p, company)}
    ${RECEIVED[state.role].slice(0, 2).map(reviewHTML).join('')}
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
        <div class="item-main"><strong>📅 Mi disponibilidad</strong><small>${Object.values(state.cal).filter((v) => v === 'free').length} días libres este mes</small></div>
        <button class="btn warm" id="openCal">Ver agenda</button>
      </div>`}
    <h4>${company ? 'Nuestras instalaciones' : 'Mi portfolio'}</h4>
    <div class="portfolio">${p.portfolio.map((e, i) => `<div style="background:${COLORS[i % 3]}">${e}</div>`).join('')}</div>`;
  $('#allReviews').onclick = () => showView('reviews');
  const t = $('#toggleAvail');
  if (t) t.onclick = () => { p.available = !p.available; renderProfile(); };
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
    if (c) openDetail([...OFFERS, ...WORKERS].find((x) => x.id === c.dataset.id));
  };

  $('#modal').addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', (e) => {
    if (!$('#modal').hidden) { if (e.key === 'Escape') closeModal(); return; }
    if (e.key === 'ArrowLeft') swipe('left');
    if (e.key === 'ArrowRight') swipe('right');
  });

  renderDeck();
}

init();
