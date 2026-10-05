import { store } from '../store.js';
import { crumbs, levelPill, countdown, esc } from '../util.js';
import { renderQuiz, gradeQuiz, marksIn } from '../quiz.js';
import { passageById } from '../data/reading.js';
import { bandFor, bandLabel } from '../bands.js';

export default function reading(root, { id, query }) {
  const p = passageById(id);

  if (!p) {
    root.innerHTML = '<h1>Passage not found</h1><p><a href="#/reading">Back to Reading</a></p>';
    return;
  }

  const exam = query?.has('exam');
  const marks = marksIn(p.groups);

  root.innerHTML = `
${crumbs([['#/', 'Home'], ['#/reading', 'Reading'], [null, p.title]])}
<h1>${esc(p.title)}</h1>
<div class="row" style="margin-bottom:12px">${levelPill(p.level)}<span class="small muted">${marks} questions · suggested ${p.minutes} minutes</span><span class="spacer"></span><span class="timer" id="timer" aria-live="off"></span></div>
${exam ? '<div class="note note--warn"><p><strong>Test conditions:</strong> the timer counts down and your answers are marked automatically when it reaches zero.</p></div>' : '<p class="small muted">Practice mode: take as long as you need, but watch the timer — it turns red when you pass the suggested time.</p>'}
<div class="exam">
  <article class="card exam__passage passage" tabindex="0" aria-label="Reading passage">
    <h2 style="margin-top:0">${esc(p.title)}</h2>
    ${p.paragraphs.map(([label, text]) => `<p><span class="para-label">${label}</span>${esc(text)}</p>`).join('')}
  </article>
  <form class="card" id="quiz">
    ${renderQuiz(p.groups, { name: 'rd' })}
    <button class="btn" type="submit">Check answers</button>
  </form>
</div>
<div id="result"></div>`;

  const form = root.querySelector('#quiz');
  let stop = null;
  let finished = false;

  const finish = () => {
    if (finished) return;
    finished = true;
    if (stop) stop();

    const { score, total } = gradeQuiz(form, p.groups, { name: 'rd' });
    const band = bandFor('reading', score, total);
    store.addResult({ kind: 'reading', id: p.id, title: p.title, score, total, band, exam: Boolean(exam) });
    form.querySelector('button[type="submit"]').remove();

    const pct = Math.round((score / total) * 100);
    root.querySelector('#result').innerHTML = `
<div class="card result">
  <div class="row"><div><div class="stat">${score} / ${total}</div><div class="muted">${pct}% correct</div></div><span class="spacer"></span><div style="text-align:right"><div class="band">≈ ${bandLabel(band)}</div><div class="small muted">estimated band if you scored like this across 40 questions</div></div></div>
  <p style="margin-top:12px">${advice(pct)}</p>
  <div class="row"><a class="btn" href="#/reading/${p.id}">Try again</a><a class="btn btn--ghost" href="#/reading">More reading practice</a></div>
  <p class="small muted">Each question above now shows the answer and where the evidence is in the passage. Reading the explanations for the ones you got right as well is the fastest way to improve.</p>
</div>`;
  };

  stop = countdown(root.querySelector('#timer'), p.minutes * 60, { onEnd: exam ? finish : null, overrun: !exam });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    finish();
    root.querySelector('#result').scrollIntoView({ behavior: 'smooth' });
  });

  return () => { if (stop) stop(); };
}

function advice(pct) {
  if (pct >= 85) return 'Excellent — this is band 7.5+ territory. Move on to a harder passage, and practise under test conditions.';
  if (pct >= 75) return 'That is around band 7. To make it reliable, practise with the timer and check every answer you got wrong against the explanation.';
  if (pct >= 55) return 'A solid band 6 level. Look at which question type you lost most marks on and revisit that lesson.';
  return 'Keep going. Revisit the Stage 1 and 2 reading lessons, especially skimming and True/False/Not Given, then try this passage again in a few days.';
}
