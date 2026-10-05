// Small helpers shared by every page.

export function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export const LEVELS = {
  1: { name: 'Foundation', bands: 'Band 4–5', cls: 'pill--l1' },
  2: { name: 'Intermediate', bands: 'Band 5.5–6', cls: 'pill--l2' },
  3: { name: 'Advanced', bands: 'Band 6.5–7+', cls: 'pill--l3' },
};

export function levelPill(level) {
  const l = LEVELS[level];
  return l ? `<span class="pill ${l.cls}">${l.name} · ${l.bands}</span>` : '';
}

export const SKILLS = {
  listening: { name: 'Listening', blurb: '4 parts · 40 questions · about 30 minutes' },
  reading: { name: 'Reading', blurb: '3 passages · 40 questions · 60 minutes' },
  writing: { name: 'Writing', blurb: 'Task 1 (150 words) and Task 2 (250 words) · 60 minutes' },
  speaking: { name: 'Speaking', blurb: '3 parts · 11–14 minutes · face to face' },
};

export function wordCount(text) {
  const words = String(text).trim().match(/[A-Za-z0-9À-ɏ]+(?:['’-][A-Za-z0-9À-ɏ]+)*/g);
  return words ? words.length : 0;
}

/** Lower-case, strip punctuation and articles at the edges, collapse spaces. */
export function normalise(text) {
  return String(text)
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[.,;:!?"()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function formatTime(seconds) {
  const s = Math.max(0, Math.round(Math.abs(seconds)));
  const m = Math.floor(s / 60);
  return `${seconds < 0 ? '+' : ''}${m}:${String(s % 60).padStart(2, '0')}`;
}

export function formatDate(ts) {
  return new Date(ts).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
}

/** A countdown that ticks into an element. Returns a stop function. */
export function countdown(el, seconds, { onEnd, overrun = true } = {}) {
  let left = seconds;
  let ended = false;
  const paint = () => {
    el.textContent = formatTime(left);
    el.classList.toggle('is-low', left > 0 && left <= Math.min(300, seconds * 0.15));
    el.classList.toggle('is-over', left <= 0);
  };
  paint();
  const id = setInterval(() => {
    left -= 1;
    if (left <= 0 && !ended) {
      ended = true;
      if (!overrun) {
        // Stop and paint zero before handing over, so a timer started in
        // onEnd is not painted over by this one.
        clearInterval(id);
        left = 0;
        paint();
        if (onEnd) onEnd();
        return;
      }
      if (onEnd) onEnd();
    }
    paint();
  }, 1000);
  return () => clearInterval(id);
}

export function shuffle(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function crumbs(items) {
  return `<p class="crumbs">${items.map(([href, label]) => (href ? `<a href="${href}">${esc(label)}</a>` : esc(label))).join(' › ')}</p>`;
}
