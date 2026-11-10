/* =========================================================
   SETTINGS — the only part you need to edit
   ========================================================= */
const CONFIG = {
  // Paste the CSV link from Google Sheets (File → Share → Publish to web → "Cats" tab → CSV).
  // Leave empty to show the sample cats below while you test.
  sheetCsvUrl: '',
  lumiEmail: 'lumi@example.com',
  instagramHandle: 'your_colony_handle'
};

/* Sample cats, shown only while sheetCsvUrl is empty. */
const SAMPLE_CATS = [
  { name: 'Mochi', status: 'Available', est_age: 'Adult, ~3–5 yrs', est_age_es: 'Adulta, ~3–5 años', sex: 'Girl', blurb: 'Shy for the first few minutes, then a lap cat.', blurb_es: 'Tímida los primeros minutos, luego gata de regazo.', photo_1: '', video: 'https://instagram.com/' },
  { name: 'Bigotes', status: 'Available', est_age: 'Young, ~1 yr', est_age_es: 'Joven, ~1 año', sex: 'Boy', blurb: 'Playful. Gets along with the other cats at feeding time.', blurb_es: 'Juguetón. Se lleva bien con los demás gatos.', photo_1: '', video: '' },
  { name: 'Canela', status: 'Reserved', est_age: 'Adult, ~2–4 yrs', est_age_es: 'Adulta, ~2–4 años', sex: 'Girl', blurb: 'Calm. Likes to sit near people without being held.', blurb_es: 'Tranquila. Le gusta estar cerca sin que la cojan.', photo_1: '', video: '' },
  { name: 'Nube', status: 'Available', est_age: 'Senior, 8+ yrs', est_age_es: 'Senior, 8+ años', sex: 'Boy', blurb: 'Slow and gentle. Wants a quiet spot in the sun.', blurb_es: 'Lento y dulce. Busca un rincón tranquilo al sol.', photo_1: '', video: '' },
  { name: 'Pimienta', status: 'Available', est_age: 'Kitten, ~4–6 months', est_age_es: 'Cachorra, ~4–6 meses', sex: 'Girl', blurb: 'Curious and loud. Will follow you around.', blurb_es: 'Curiosa y habladora. Te seguirá a todas partes.', photo_1: '', video: '' },
  { name: 'Luna', status: 'Adopted', est_age: 'Adult, ~2 yrs', est_age_es: 'Adulta, ~2 años', sex: 'Girl', blurb: 'Went home last month.', blurb_es: 'Se fue a su nuevo hogar el mes pasado.', photo_1: '', video: '' }
];

/* =========================================================
   SITE TEXT (English / Spanish)
   ========================================================= */
const TEXT = {
  en: {
    'nav.cats': 'Meet the cats', 'nav.adopt': 'Adopting', 'nav.volunteer': 'Volunteer', 'nav.about': 'About Lumi',
    'hero.tag': 'Registered street colony in Valencia',
    'hero.title': 'Little faces from our colony, looking for a forever home.',
    'hero.text': 'Photos, videos and personality notes from the volunteers who feed them every week. Fall for one? Lumi can answer your questions.',
    'hero.cta': 'Meet the cats', 'hero.secondary': 'How adopting works',
    'cats.title': 'Meet the cats',
    'cats.loading': 'Loading the cats…',
    'cats.empty': 'No cats with this status right now.',
    'cats.none': 'No cats are listed right now. Check back soon or follow us on Instagram.',
    'cats.error': 'The cat list didn’t load. Refresh the page, or see the cats on Instagram.',
    'filter.All': 'All', 'filter.Available': 'Available', 'filter.Reserved': 'Reserved', 'filter.Adopted': 'Adopted',
    'badge.Available': 'Available', 'badge.Reserved': 'Reserved', 'badge.Adopted': 'Found a home',
    'sex.girl': 'Girl', 'sex.boy': 'Boy',
    'card.photo': 'Photo coming soon',
    'card.video': 'Watch the video',
    'card.note': 'Age estimated by volunteers. Health info via Lumi.',
    'card.ask': 'Ask Lumi about {name}',
    'mail.cat': 'Adoption question: {name}', 'mail.volunteer': 'Volunteering with the colony', 'mail.general': 'Question about the colony',
    'adopt.title': 'How adopting works',
    'adopt.text': 'Adoptions are arranged with Lumi and the registered colony. This page is just where you start.',
    'adopt.s1.title': 'Browse the cats', 'adopt.s1.text': 'Photos, videos and personality notes from volunteers.',
    'adopt.s2.title': 'Email Lumi', 'adopt.s2.text': 'Say which cat, and ask for medical records and history.',
    'adopt.s3.title': 'Meet the cat', 'adopt.s3.text': 'Arranged directly with Lumi.',
    'adopt.s4.title': 'Adoption agreement', 'adopt.s4.text': 'Signed with the colony, on its terms.',
    'adopt.req.title': 'General requirements',
    'adopt.req.1': '[Requirement confirmed by Lumi / the colony — e.g. signed adoption contract]',
    'adopt.req.2': '[Requirement — e.g. home visit or follow-up]',
    'adopt.req.3': '[Requirement — e.g. microchip registered to the adopter]',
    'adopt.req.note': 'Final terms are set by the registered colony and may change. Lumi confirms them for each adoption.',
    'vol.title': 'Lend a paw',
    'vol.text': 'The colony runs on volunteers. Can’t adopt right now? There are other ways to help.',
    'vol.feed.title': 'Feeding shifts', 'vol.feed.text': 'Join the weekly rota to feed the cats and clean bowls.',
    'vol.foster.title': 'Fostering', 'vol.foster.text': '[Confirm with Lumi whether the colony uses foster homes.]',
    'vol.supplies.title': 'Supplies', 'vol.supplies.text': '[What the colony needs most — e.g. dry food, wet food, bowls.]',
    'vol.share.title': 'Share the cats', 'vol.share.text': 'Repost them on Instagram. More eyes, more adoptions.',
    'vol.cta': 'Ask Lumi about volunteering', 'vol.note': 'Volunteer shifts and rules are coordinated by Lumi.',
    'about.photo': 'Photo of Lumi (optional)',
    'about.title': 'Hola, I’m Lumi!',
    'about.text': '[Lumi’s intro in her own words: how the colony started, how many cats, what the volunteers do. Written with her and approved by her before going live.]',
    'about.cta': 'Say hi to Lumi',
    'contact.title': 'Questions about a cat?',
    'contact.text': 'For medical records or anything about a specific cat, contact Lumi at',
    'contact.email': 'Email Lumi'
  },
  es: {
    'nav.cats': 'Conoce a los gatos', 'nav.adopt': 'Adoptar', 'nav.volunteer': 'Voluntariado', 'nav.about': 'Sobre Lumi',
    'hero.tag': 'Colonia felina registrada en Valencia',
    'hero.title': 'Caritas de nuestra colonia que buscan un hogar para siempre.',
    'hero.text': 'Fotos, vídeos y notas sobre su carácter de las voluntarias que les dan de comer cada semana. ¿Te has enamorado de alguno? Lumi puede responder a tus preguntas.',
    'hero.cta': 'Conoce a los gatos', 'hero.secondary': 'Cómo adoptar',
    'cats.title': 'Conoce a los gatos',
    'cats.loading': 'Cargando los gatos…',
    'cats.empty': 'Ahora mismo no hay gatos con este estado.',
    'cats.none': 'Ahora mismo no hay gatos en la lista. Vuelve pronto o síguenos en Instagram.',
    'cats.error': 'No se ha podido cargar la lista. Recarga la página o mira los gatos en Instagram.',
    'filter.All': 'Todos', 'filter.Available': 'Disponibles', 'filter.Reserved': 'Reservados', 'filter.Adopted': 'Adoptados',
    'badge.Available': 'Disponible', 'badge.Reserved': 'Reservado', 'badge.Adopted': 'Ya tiene hogar',
    'sex.girl': 'Hembra', 'sex.boy': 'Macho',
    'card.photo': 'Foto próximamente',
    'card.video': 'Ver el vídeo',
    'card.note': 'Edad estimada por voluntarias. Información de salud a través de Lumi.',
    'card.ask': 'Pregunta a Lumi por {name}',
    'mail.cat': 'Consulta de adopción: {name}', 'mail.volunteer': 'Voluntariado en la colonia', 'mail.general': 'Consulta sobre la colonia',
    'adopt.title': 'Cómo adoptar',
    'adopt.text': 'Las adopciones se gestionan con Lumi y la colonia registrada. Esta página es solo el punto de partida.',
    'adopt.s1.title': 'Mira los gatos', 'adopt.s1.text': 'Fotos, vídeos y notas sobre su carácter de las voluntarias.',
    'adopt.s2.title': 'Escribe a Lumi', 'adopt.s2.text': 'Dinos qué gato te interesa y pide su historial médico.',
    'adopt.s3.title': 'Conoce al gato', 'adopt.s3.text': 'Se organiza directamente con Lumi.',
    'adopt.s4.title': 'Contrato de adopción', 'adopt.s4.text': 'Se firma con la colonia, según sus condiciones.',
    'adopt.req.title': 'Requisitos generales',
    'adopt.req.1': '[Requisito confirmado por Lumi / la colonia — p. ej. contrato de adopción firmado]',
    'adopt.req.2': '[Requisito — p. ej. visita o seguimiento]',
    'adopt.req.3': '[Requisito — p. ej. microchip registrado a nombre del adoptante]',
    'adopt.req.note': 'Las condiciones finales las fija la colonia registrada y pueden cambiar. Lumi las confirma en cada adopción.',
    'vol.title': 'Echa una pata',
    'vol.text': 'La colonia funciona gracias a las voluntarias. ¿No puedes adoptar ahora? Hay otras formas de ayudar.',
    'vol.feed.title': 'Turnos de comida', 'vol.feed.text': 'Únete al turno semanal para dar de comer y limpiar los cuencos.',
    'vol.foster.title': 'Casa de acogida', 'vol.foster.text': '[Confirmar con Lumi si la colonia trabaja con casas de acogida.]',
    'vol.supplies.title': 'Donaciones', 'vol.supplies.text': '[Lo que más necesita la colonia — p. ej. pienso, comida húmeda, cuencos.]',
    'vol.share.title': 'Comparte los gatos', 'vol.share.text': 'Compártelos en Instagram. Más ojos, más adopciones.',
    'vol.cta': 'Pregunta a Lumi por el voluntariado', 'vol.note': 'Los turnos y las normas los coordina Lumi.',
    'about.photo': 'Foto de Lumi (opcional)',
    'about.title': '¡Hola, soy Lumi!',
    'about.text': '[Presentación de Lumi con sus palabras: cómo empezó la colonia, cuántos gatos hay, qué hacen las voluntarias. Escrita con ella y aprobada por ella antes de publicarla.]',
    'about.cta': 'Escribe a Lumi',
    'contact.title': '¿Preguntas sobre algún gato?',
    'contact.text': 'Para historiales médicos o cualquier consulta sobre un gato, escribe a Lumi a',
    'contact.email': 'Escribe a Lumi'
  }
};

/* =========================================================
   APP — no need to edit below this line
   ========================================================= */
const STATUSES = ['Available', 'Reserved', 'Adopted'];
const STATUS_ALIASES = {
  available: 'Available', disponible: 'Available',
  reserved: 'Reserved', reservado: 'Reserved', reservada: 'Reserved',
  adopted: 'Adopted', adoptado: 'Adopted', adoptada: 'Adopted'
};
const SEX_ALIASES = {
  girl: 'girl', f: 'girl', female: 'girl', hembra: 'girl', chica: 'girl',
  boy: 'boy', m: 'boy', male: 'boy', macho: 'boy', chico: 'boy'
};
const ICONS = {
  girl: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="6" r="4"/><path d="M8 10v5M5.5 12.5h5"/></svg>',
  boy: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6.5" cy="9.5" r="4"/><path d="M9.5 6.5l4-4M10 2.5h3.5V6"/></svg>',
  video: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="1.5" y="3" width="13" height="10" rx="3"/><path d="M6.5 6v4l3.5-2z"/></svg>'
};

const state = { lang: initialLang(), filter: 'All', cats: [], load: 'loading' };

function initialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'es') return saved;
  } catch (e) { /* storage unavailable */ }
  return (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en';
}

function t(key, vars = {}) {
  const s = TEXT[state.lang][key] ?? TEXT.en[key] ?? key;
  return s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
}

function mailto(subject) {
  return `mailto:${CONFIG.lumiEmail}?subject=${encodeURIComponent(subject)}`;
}

/* Read a column, preferring the "_es" version when the site is in Spanish. */
function field(row, key) {
  const es = (row[key + '_es'] || '').trim();
  if (state.lang === 'es' && es) return es;
  return (row[key] || '').trim();
}

function photoSrc(value) {
  const v = (value || '').trim();
  if (!v) return '';
  if (/^https?:\/\//i.test(v)) return v;
  return 'images/' + v.replace(/^\/+/, '').replace(/^images\//, '');
}

function cleanRows(rows) {
  return rows
    .map((r) => {
      const row = {};
      Object.keys(r).forEach((k) => { row[k.trim().toLowerCase()] = typeof r[k] === 'string' ? r[k] : ''; });
      row.status = STATUS_ALIASES[(row.status || '').trim().toLowerCase()];
      row.sexKey = SEX_ALIASES[(row.sex || '').trim().toLowerCase()] || '';
      return row;
    })
    .filter((r) => (r.name || '').trim() && r.status);
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else node.setAttribute(k, v);
  });
  children.filter(Boolean).forEach((c) => node.appendChild(c));
  return node;
}

function iconSpan(className, svg) {
  const span = el('span', { class: className });
  span.innerHTML = svg; // constant icon markup only, never sheet data
  return span;
}

function buildCard(cat) {
  const name = cat.name.trim();
  const src = photoSrc(cat.photo_1);

  const photo = el('div', { class: 'card-photo' }, [
    src
      ? el('img', { src, alt: name, loading: 'lazy' })
      : el('span', { class: 'photo-label', text: t('card.photo') }),
    el('span', { class: `badge badge--${cat.status.toLowerCase()}`, text: t('badge.' + cat.status) })
  ]);

  let sex = null;
  if (cat.sexKey) {
    sex = el('span', { class: `sex sex--${cat.sexKey}` }, [iconSpan('sex-icon', ICONS[cat.sexKey])]);
    sex.appendChild(document.createTextNode(t('sex.' + cat.sexKey)));
  }

  const age = field(cat, 'est_age');
  const blurb = field(cat, 'blurb');
  const videoUrl = (cat.video || '').trim();

  let video = null;
  if (/^https?:\/\//i.test(videoUrl)) {
    video = el('a', { class: 'video-link', href: videoUrl, target: '_blank', rel: 'noopener' });
    video.innerHTML = ICONS.video;
    video.appendChild(document.createTextNode(t('card.video')));
  }

  const body = el('div', { class: 'card-body' }, [
    el('div', { class: 'card-head' }, [el('h3', { text: name }), sex]),
    age ? el('span', { class: 'age', text: age }) : null,
    blurb ? el('p', { class: 'blurb', text: blurb }) : null,
    video,
    el('p', { class: 'card-note', text: t('card.note') }),
    cat.status === 'Adopted'
      ? null
      : el('a', { class: 'btn btn--dark', href: mailto(t('mail.cat', { name })), text: t('card.ask', { name }) })
  ]);

  return el('article', { class: 'card' }, [photo, body]);
}

function renderFilters() {
  const box = document.getElementById('filters');
  box.innerHTML = '';
  ['All', ...STATUSES].forEach((s) => {
    const count = s === 'All' ? state.cats.length : state.cats.filter((c) => c.status === s).length;
    const btn = el('button', { type: 'button', 'aria-pressed': String(state.filter === s), text: `${t('filter.' + s)} · ${count}` });
    btn.addEventListener('click', () => { state.filter = s; renderCats(); });
    box.appendChild(btn);
  });
}

function setMessage(text, withInstagram) {
  const msg = document.getElementById('cats-message');
  msg.textContent = text;
  msg.hidden = !text;
  if (withInstagram) {
    msg.appendChild(document.createTextNode(' '));
    msg.appendChild(el('a', { href: `https://instagram.com/${CONFIG.instagramHandle}`, text: '@' + CONFIG.instagramHandle }));
  }
}

function renderCats() {
  const grid = document.getElementById('cat-grid');
  grid.innerHTML = '';
  renderFilters();

  if (state.load === 'loading') return setMessage(t('cats.loading'));
  if (state.load === 'error') return setMessage(t('cats.error'), true);
  if (!state.cats.length) return setMessage(t('cats.none'), true);

  const shown = state.filter === 'All' ? state.cats : state.cats.filter((c) => c.status === state.filter);
  setMessage(shown.length ? '' : t('cats.empty'));
  shown.forEach((cat) => grid.appendChild(buildCard(cat)));
}

function renderHero() {
  const picks = state.cats.filter((c) => c.status === 'Available' && photoSrc(c.photo_1)).slice(0, 2);
  document.querySelectorAll('[data-hero-slot]').forEach((fig) => {
    const cat = picks[Number(fig.dataset.heroSlot)];
    const photo = fig.querySelector('.polaroid-photo');
    photo.innerHTML = '';
    fig.querySelector('figcaption').textContent = cat ? cat.name.trim() : '';
    if (cat) photo.appendChild(el('img', { src: photoSrc(cat.photo_1), alt: '' }));
  });
}

function renderStatic() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang)));
  document.querySelectorAll('[data-email-link]').forEach((a) => { a.href = mailto(t('mail.' + a.dataset.emailLink)); });
  document.querySelectorAll('[data-email-text]').forEach((n) => { n.textContent = CONFIG.lumiEmail; });
  document.querySelectorAll('[data-instagram]').forEach((a) => {
    a.href = `https://instagram.com/${CONFIG.instagramHandle}`;
    a.textContent = '@' + CONFIG.instagramHandle;
  });
}

function renderAll() {
  renderStatic();
  renderCats();
  renderHero();
}

function setLang(lang) {
  state.lang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
  renderAll();
}

async function loadCats() {
  if (!CONFIG.sheetCsvUrl) {
    state.cats = cleanRows(SAMPLE_CATS);
    state.load = 'ready';
    return;
  }
  try {
    const url = CONFIG.sheetCsvUrl + (CONFIG.sheetCsvUrl.includes('?') ? '&' : '?') + 't=' + Date.now();
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const csv = await res.text();
    const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });
    state.cats = cleanRows(parsed.data);
    state.load = 'ready';
  } catch (err) {
    console.error('Could not load the sheet:', err);
    state.load = 'error';
  }
}

document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
renderAll();
loadCats().then(renderAll);
