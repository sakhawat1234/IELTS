import { store } from '../store.js?v=20261005b';
import { crumbs, levelPill, esc, LEVELS } from '../util.js?v=20261005b';
import { renderQuiz, gradeQuiz } from '../quiz.js?v=20261005b';
import { units, unitById } from '../data/grammar.js?v=20261005b';

export default function grammar(root, { id }) {
  if (!id) return index(root);

  const u = unitById(id);
  if (!u) {
    root.innerHTML = '<h1>Unit not found</h1><p><a href="#/grammar">All grammar units</a></p>';
    return;
  }

  const i = units.indexOf(u);
  const next = units[i + 1];

  root.innerHTML = `
${crumbs([['#/', 'Home'], ['#/grammar', 'Grammar'], [null, u.title]])}
<h1>${esc(u.title)}</h1>
<p>${levelPill(u.level)}</p>
<article class="card prose">${u.body}</article>
<h2>Practice</h2>
<form class="card" id="quiz">${renderQuiz(u.groups, { name: 'gr' })}<button class="btn" type="submit">Check answers</button></form>
<div id="result"></div>`;

  const form = root.querySelector('#quiz');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { score, total } = gradeQuiz(form, u.groups, { name: 'gr' });
    store.addResult({ kind: 'grammar', id: u.id, title: u.title, score, total, band: null });
    if (score / total >= 0.8) store.completeLesson(`g-${u.id}`);
    form.querySelector('button[type="submit"]').remove();
    root.querySelector('#result').innerHTML = `<div class="card result"><div class="stat">${score} / ${total}</div><p>${score / total >= 0.8 ? 'Well done — this unit is marked as complete.' : 'Read the explanations above, review the unit, and try again tomorrow. Aim for 4 out of 5 or better.'}</p><div class="row"><a class="btn btn--ghost" href="#/grammar/${u.id}">Try again</a>${next ? `<a class="btn" href="#/grammar/${next.id}">Next: ${esc(next.title)}</a>` : '<a class="btn" href="#/grammar">All units</a>'}</div></div>`;
  });
}

function index(root) {
  const s = store.get();
  root.innerHTML = `
${crumbs([['#/', 'Home'], [null, 'Grammar']])}
<h1>Grammar for band 7</h1>
<p class="lead">Grammatical Range and Accuracy is a quarter of your Writing and Speaking scores. Band 7 needs a variety of complex structures, with most sentences free of errors. These units cover the structures that make the most difference.</p>
${[1, 2, 3].map((lvl) => `
  <h2>${LEVELS[lvl].name} <span class="muted small">${LEVELS[lvl].bands}</span></h2>
  <div class="grid">${units.filter((u) => u.level === lvl).map((u) => `<a class="card card--link" href="#/grammar/${u.id}"><h3>${esc(u.title)}</h3>${s.lessons[`g-${u.id}`] ? '<span class="pill pill--done">Completed</span>' : '<span class="small muted">Lesson and exercise</span>'}</a>`).join('')}</div>`).join('')}`;
}
