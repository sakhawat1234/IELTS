// Hash router. Each page module exports default (root, params) and may
// return a cleanup function (timers, speech, microphone) for when the
// learner navigates away.

const ROUTES = [
  [/^$/, 'home'],
  [/^about$/, 'about'],
  [/^plan$/, 'plan'],
  [/^placement$/, 'placement'],
  [/^(listening|reading|writing|speaking)$/, 'skill', ['skill']],
  [/^lesson\/([\w-]+)$/, 'lesson', ['id']],
  [/^reading\/([\w-]+)$/, 'reading', ['id']],
  [/^listening\/([\w-]+)$/, 'listening', ['id']],
  [/^writing\/([\w-]+)$/, 'writing', ['id']],
  [/^speaking\/([\w-]+)$/, 'speaking', ['id']],
  [/^part1$/, 'part1', []],
  [/^vocabulary$/, 'vocab'],
  [/^vocabulary\/([\w-]+)$/, 'vocab', ['topic']],
  [/^grammar$/, 'grammar'],
  [/^grammar\/([\w-]+)$/, 'grammar', ['id']],
  [/^mock$/, 'mock'],
  [/^progress$/, 'progress'],
  [/^calculator$/, 'calculator'],
];

const root = document.getElementById('main');
let cleanup = null;

function match(path) {
  for (const [pattern, page, keys = []] of ROUTES) {
    const m = path.match(pattern);
    if (m) {
      const params = {};
      keys.forEach((k, i) => { params[k] = m[i + 1]; });
      return { page, params };
    }
  }
  return null;
}

function markNav(path) {
  const top = path.split('/')[0];
  document.querySelectorAll('.nav a').forEach((a) => {
    const target = a.getAttribute('href').replace(/^#\//, '');
    if (target === top) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

async function render() {
  const [rawPath, rawQuery = ''] = decodeURIComponent(location.hash.replace(/^#\/?/, '')).split('?');
  const path = rawPath.replace(/\/$/, '');
  const found = match(path);
  if (found) found.params.query = new URLSearchParams(rawQuery);

  if (typeof cleanup === 'function') {
    try { cleanup(); } catch { /* a page that fails to tidy up must not block the next */ }
  }
  cleanup = null;

  document.querySelector('.nav')?.classList.remove('is-open');
  document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
  markNav(path);

  if (!found) {
    root.innerHTML = '<h1>Page not found</h1><p>That page does not exist. <a href="#/">Back to the start</a>.</p>';
    document.title = 'Not found — Band Seven';
    return;
  }

  try {
    const mod = await import(`./pages/${found.page}.js`);
    root.innerHTML = '';
    cleanup = mod.default(root, found.params) || null;
  } catch (err) {
    console.error(err);
    root.innerHTML = `<h1>Something went wrong</h1><p>This page could not load. Try reloading. If it keeps happening, the details are in the browser console.</p>`;
  }

  const h1 = root.querySelector('h1');
  document.title = `${h1 ? h1.textContent.trim() : 'IELTS preparation'} — Band Seven`;
  window.scrollTo(0, 0);
  root.focus({ preventScroll: true });
}

document.querySelector('.menu-toggle')?.addEventListener('click', (e) => {
  const nav = document.querySelector('.nav');
  const open = nav.classList.toggle('is-open');
  e.currentTarget.setAttribute('aria-expanded', String(open));
});

// A link to the page you are on ("Try again") changes nothing in the URL,
// so no hashchange fires. Re-render it ourselves.
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#/"]');
  if (a && a.getAttribute('href') === location.hash && !e.metaKey && !e.ctrlKey) {
    e.preventDefault();
    render();
  }
});

const bnToggle = document.querySelector('.bn-toggle');
const paintBn = () => bnToggle?.setAttribute('aria-pressed', String(!document.documentElement.classList.contains('hide-bn')));
bnToggle?.addEventListener('click', () => {
  const hide = document.documentElement.classList.toggle('hide-bn');
  try { localStorage.setItem('band7-bn', hide ? 'off' : 'on'); } catch { /* still works for this visit */ }
  paintBn();
});
paintBn();

window.addEventListener('hashchange', render);
render();
