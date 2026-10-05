import { store } from '../store.js';
import { SKILLS, crumbs, levelPill, esc } from '../util.js';
import { lessonsFor, MODULES } from '../data/lessons.js';
import { passages } from '../data/reading.js';
import { sets as listeningSets } from '../data/listening.js';
import { tasks } from '../data/writing.js';
import { sets as speakingSets } from '../data/speaking.js';
import { bandLabel } from '../bands.js';

export default function skill(root, { skill: key }) {
  const s = store.get();
  const info = SKILLS[key];
  const list = lessonsFor(key);

  const practice = {
    reading: passages.map((p) => ({ href: `#/reading/${p.id}`, title: p.title, level: p.level, meta: `${p.minutes} minutes · ${p.groups.reduce((n, g) => n + g.items.length, 0)} questions`, best: store.bestFor('reading', p.id) })),
    listening: listeningSets.map((p) => ({ href: `#/listening/${p.id}`, title: p.title, level: p.level, meta: `Part ${p.part}`, best: store.bestFor('listening', p.id) })),
    writing: tasks.map((t) => ({ href: `#/writing/${t.id}`, title: t.title, level: t.level, meta: `Task ${t.task}${t.type ? ' · ' + t.type : ''}`, best: s.essays[t.id] })),
    speaking: speakingSets.map((p) => ({ href: `#/speaking/${p.id}`, title: p.title, level: p.level, meta: 'Parts 1, 2 and 3', best: s.speaking[p.id] })),
  }[key];

  root.innerHTML = `
${crumbs([['#/', 'Home'], [null, info.name]])}
<h1>${info.name}</h1>
<p class="lead">${info.blurb}</p>

<div class="grid grid--2">
  <section class="card">
    <h2 style="margin-top:0">Lessons</h2>
    <p class="small muted">${list.filter((l) => s.lessons[l.id]).length} of ${list.length} lessons done. Work through them in order; each ends with a short practice check.</p>
    ${MODULES[key].map((mod, mi) => {
      const items = list.filter((l) => l.module === mod);
      if (!items.length) return '';
      return `<h3>${mi + 1}. ${esc(mod)}</h3><ul class="lesson-list">${items.map((l) => `<li><div><a href="#/lesson/${l.id}">${esc(l.title)}</a><br><span class="small muted">${l.minutes} min</span> ${levelPill(l.level)}</div><span class="spacer"></span>${s.lessons[l.id] ? '<span class="pill pill--done">Done</span>' : ''}</li>`).join('')}</ul>`;
    }).join('')}
  </section>
  <section class="card">
    <h2 style="margin-top:0">Practice</h2>
    <ul class="lesson-list">
      ${[...practice].sort((a, b) => a.level - b.level).map((p) => `<li><div><a href="${p.href}">${esc(p.title)}</a><br><span class="small muted">${esc(p.meta)}</span> ${levelPill(p.level)}</div><span class="spacer"></span>${badge(key, p.best)}</li>`).join('')}
    </ul>
    ${key === 'speaking' ? '<p><a class="btn btn--ghost" href="#/part1">Part 1 topic bank: 16 topics with sample answers</a></p>' : ''}
    ${key === 'listening' ? '<p class="small muted">Recordings are read aloud by your browser\'s built-in voices. Use headphones and a recent version of Chrome, Edge or Safari for the best quality.</p>' : ''}
  </section>
</div>`;
}

function badge(key, best) {
  if (!best) return '';
  if (key === 'reading' || key === 'listening') return `<span class="pill pill--done">Best ${best.score}/${best.total} · ≈${bandLabel(best.band)}</span>`;
  if (best.selfBand) return `<span class="pill pill--done">Self-assessed ${bandLabel(best.selfBand)}</span>`;
  return '<span class="pill pill--done">Attempted</span>';
}
