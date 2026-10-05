import { store } from '../store.js';
import { SKILLS, LEVELS } from '../util.js';
import { lessons, lessonsFor } from '../data/lessons.js';
import { weeks } from '../data/plan.js';

export default function home(root) {
  const s = store.get();
  const done = lessons.filter((l) => s.lessons[l.id]).length;
  const next = nextTask(s);
  const placed = s.placement;

  root.innerHTML = `
<section class="hero">
  <h1>From zero to band 7</h1>
  <p class="lead">A complete, free course for IELTS Academic: a placement check, a 12-week plan, ${lessons.length} lessons across all four skills, auto-marked practice, timed writing and speaking, vocabulary flashcards and a mock test. Your progress is saved in this browser.</p>
  <div class="row">
    ${placed
      ? `<a class="btn" href="${next ? next[1] : '#/plan'}">${next ? 'Continue: ' + next[0] : 'Open your study plan'}</a><a class="btn btn--ghost" href="#/progress">Your progress</a>`
      : '<a class="btn" href="#/placement">Take the 15-minute placement check</a><a class="btn btn--ghost" href="#/plan">See the 12-week plan</a>'}
  </div>
</section>

${placed ? `<div class="card card--soft"><div class="row"><div><strong>Your starting point:</strong> ${LEVELS[placed.level].name} (${LEVELS[placed.level].bands})</div><span class="spacer"></span><div class="small muted">${done} of ${lessons.length} lessons done</div></div><div class="bar" style="margin-top:10px"><span style="width:${Math.round((done / lessons.length) * 100)}%"></span></div></div>` : ''}

<h2>Three stages to band 7</h2>
<div class="path">
  <div class="card"><h3>${LEVELS[1].name}</h3><p class="muted small">${LEVELS[1].bands} · weeks 1–4</p><p>How each paper works, accuracy with numbers and spelling, core grammar, and your first complete answers in every skill.</p></div>
  <div class="card"><h3>${LEVELS[2].name}</h3><p class="muted small">${LEVELS[2].bands} · weeks 5–8</p><p>Strategies for each question type, the structure of Task 1 and Task 2, and speaking at length with confidence.</p></div>
  <div class="card"><h3>${LEVELS[3].name}</h3><p class="muted small">${LEVELS[3].bands} · weeks 9–12</p><p>What separates band 6 from 7: developed ideas, precise language, paraphrase, timing, and practice under test conditions.</p></div>
</div>

<h2>The four skills</h2>
<div class="grid">
  ${Object.entries(SKILLS).map(([key, skill]) => {
    const list = lessonsFor(key);
    const n = list.filter((l) => s.lessons[l.id]).length;
    return `<a class="card card--link" href="#/${key}"><h3>${skill.name}</h3><p class="muted small">${skill.blurb}</p><p class="small">${n} of ${list.length} lessons done</p><div class="bar"><span style="width:${Math.round((n / list.length) * 100)}%"></span></div></a>`;
  }).join('')}
</div>

<div class="grid grid--2">
  <a class="card card--link" href="#/vocabulary"><h3>Vocabulary</h3><p class="muted">Eight essential IELTS topics with flashcards that bring back the words you find hard more often.</p></a>
  <a class="card card--link" href="#/grammar"><h3>Grammar</h3><p class="muted">The structures that lift Grammatical Range and Accuracy from band 5 to band 7, each with an exercise.</p></a>
</div>

<div class="note"><p><strong>What band 7 means:</strong> roughly 30 out of 40 in Listening and Reading, and Writing and Speaking that develop ideas fully with a range of accurate, flexible language. Most people need consistent daily study: a commonly quoted guideline is around 200 hours of guided study to improve by one band. The plan here assumes 1–2 hours a day.</p></div>`;
}

function nextTask(s) {
  for (const w of weeks) {
    for (let i = 0; i < w.tasks.length; i++) {
      if (!s.plan[`w${w.week}t${i}`]) return w.tasks[i];
    }
  }
  return null;
}
