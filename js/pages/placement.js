import { store } from '../store.js';
import { crumbs, LEVELS } from '../util.js';
import { renderQuiz, gradeQuiz } from '../quiz.js';
import { placement, recommend } from '../data/placement.js';

export default function placementPage(root) {
  const previous = store.get().placement;

  root.innerHTML = `
${crumbs([['#/', 'Home'], [null, 'Placement check']])}
<h1>Placement check</h1>
<p class="lead">${placement.intro}</p>
${previous ? `<div class="note"><p>You last took this check with ${previous.score}/${previous.total} and started at <strong>${LEVELS[previous.level].name}</strong>. Taking it again will update your recommendation.</p></div>` : ''}
<form class="card" id="quiz">${renderQuiz(placement.groups, { name: 'pl' })}
<button class="btn" type="submit">See my result</button></form>
<div id="result"></div>`;

  const form = root.querySelector('#quiz');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { score, total } = gradeQuiz(form, placement.groups, { name: 'pl' });
    const rec = recommend(score, total);
    store.update((s) => { s.placement = { score, total, level: rec.level, at: Date.now() }; });
    form.querySelector('button').remove();

    root.querySelector('#result').innerHTML = `
<div class="card result">
  <h2>You scored ${score} out of ${total}</h2>
  <p><span class="pill ${LEVELS[rec.level].cls}">Recommended start: ${LEVELS[rec.level].name} · ${LEVELS[rec.level].bands}</span></p>
  <p>${rec.text}</p>
  <div class="row"><a class="btn" href="#/plan">Open my study plan</a><a class="btn btn--ghost" href="#/">Back to home</a></div>
  <p class="small muted">Scroll up to see the explanation for each answer.</p>
</div>`;
    root.querySelector('#result').scrollIntoView({ behavior: 'smooth' });
  });
}
