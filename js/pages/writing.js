import { store } from '../store.js?v=20261005b';
import { crumbs, levelPill, countdown, wordCount, esc } from '../util.js?v=20261005b';
import { taskById, checklist } from '../data/writing.js?v=20261005b';
import { renderChart } from '../charts.js?v=20261005b';
import { bandLabel } from '../bands.js?v=20261005b';

const BANDS = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9];

export default function writing(root, { id, query }) {
  const t = taskById(id);

  if (!t) {
    root.innerHTML = '<h1>Task not found</h1><p><a href="#/writing">Back to Writing</a></p>';
    return;
  }

  const exam = query?.has('exam');
  const minimum = t.task === 1 ? 150 : 250;
  const minutes = t.task === 1 ? 20 : 40;
  const saved = store.get().essays[t.id];

  root.innerHTML = `
${crumbs([['#/', 'Home'], ['#/writing', 'Writing'], [null, t.title]])}
<h1>Task ${t.task}: ${esc(t.title)}</h1>
<p class="row">${levelPill(t.level)}${t.type ? `<span class="pill">${esc(t.type)}</span>` : ''}<span class="small muted">at least ${minimum} words · about ${minutes} minutes</span></p>

<div class="card">
  <p><em>You should spend about ${minutes} minutes on this task.</em></p>
  <p class="passage">${esc(t.prompt)}</p>
  ${t.task === 2 ? '<p class="passage">Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>' : ''}
  ${t.chart ? renderChart(t.chart, t.title) : ''}
</div>

<div class="card">
  <div class="row"><button class="btn" id="start" type="button">Start the ${minutes}-minute timer</button><span class="timer hidden" id="timer"></span><span class="spacer"></span><span class="small">Words: <span class="wordcount" id="wc">0</span> / ${minimum}</span></div>
  <label for="essay" class="small muted" style="display:block;margin:12px 0 6px">Write your answer here. It is saved in this browser as you type.</label>
  <textarea class="essay" id="essay" spellcheck="false" placeholder="Start writing…">${esc(saved?.text || '')}</textarea>
  <p class="small muted">Spell-check is switched off, as in the real test.</p>
  <div class="row"><button class="btn" id="finish" type="button">I've finished — assess my answer</button><button class="btn btn--ghost" id="clear" type="button">Clear</button></div>
</div>

<div id="assess" class="hidden">
  <div class="card">
    <h2 style="margin-top:0">Check your answer against band 7</h2>
    <p class="muted">Tick each statement only if it is true of what you wrote. Be strict — the examiner will be.</p>
    ${checklist[t.task].map(([criterion, items], ci) => `
      <h3>${esc(criterion)}</h3>
      <ul class="checklist">${items.map((item, ii) => `<li><input type="checkbox" id="c${ci}-${ii}"><label for="c${ci}-${ii}">${esc(item)}</label></li>`).join('')}</ul>`).join('')}
    <div class="row" style="margin-top:12px"><strong>Your estimated band:</strong> <span class="band" id="estimate" style="font-size:2rem">–</span></div>
    <p class="small muted">The estimate counts your ticks per criterion. It is a guide to what to improve, not an official score — for that, ask a teacher to mark your work against the public band descriptors.</p>
    <label class="small">Save a self-assessed band <select class="field" id="selfBand"><option value="">—</option>${BANDS.map((b) => `<option value="${b}" ${saved?.selfBand === b ? 'selected' : ''}>${bandLabel(b)}</option>`).join('')}</select></label>
  </div>
</div>

${exam ? '<p class="small muted" id="modelNote">The model answer appears here when you finish.</p>' : ''}
<details class="model${exam ? ' hidden' : ''}" id="model"><summary>Band 7+ model answer</summary>
  <div class="passage">${t.model.split('\n\n').map((para) => `<p>${esc(para)}</p>`).join('')}</div>
  <p class="small muted">${wordCount(t.model)} words.</p>
  <h3>Why this scores band 7 or above</h3>
  <ul>${t.why.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>
</details>`;

  const essay = root.querySelector('#essay');
  const wc = root.querySelector('#wc');
  const timer = root.querySelector('#timer');
  const model = root.querySelector('#model');
  let stop = null;

  const updateCount = () => {
    const n = wordCount(essay.value);
    wc.textContent = n;
    wc.classList.toggle('is-short', n > 0 && n < minimum);
    wc.classList.toggle('is-ok', n >= minimum);
  };
  updateCount();

  let saveTimer = null;
  const saveNow = () => {
    clearTimeout(saveTimer);
    saveTimer = null;
    if (!essay.value && !store.get().essays[t.id]) return;
    store.update((s) => { s.essays[t.id] = { ...(s.essays[t.id] || {}), text: essay.value, words: wordCount(essay.value), at: Date.now() }; });
  };
  essay.addEventListener('input', () => {
    updateCount();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveNow, 600);
  });


  root.querySelector('#start').addEventListener('click', (e) => {
    timer.classList.remove('hidden');
    e.currentTarget.classList.add('hidden');
    stop = countdown(timer, minutes * 60, { overrun: true });
    essay.focus();
  });

  root.querySelector('#clear').addEventListener('click', () => {
    if (essay.value && !confirm('Delete your answer?')) return;
    essay.value = '';
    updateCount();
    store.update((s) => { delete s.essays[t.id]; });
  });

  const assess = root.querySelector('#assess');
  const estimate = root.querySelector('#estimate');

  const recalc = () => {
    // Each criterion: share of statements ticked → a band from 5 to 8.
    const groups = checklist[t.task].map((_, ci) => {
      const boxes = [...assess.querySelectorAll(`input[id^="c${ci}-"]`)];
      return boxes.filter((b) => b.checked).length / boxes.length;
    });
    const per = groups.map((share) => (share >= 1 ? 8 : share >= 0.75 ? 7 : share >= 0.5 ? 6 : share > 0 ? 5 : 4));
    const mean = per.reduce((a, b) => a + b, 0) / per.length;
    estimate.textContent = bandLabel(Math.round(mean * 2) / 2);
  };
  assess.addEventListener('change', (e) => {
    if (e.target.id === 'selfBand') {
      const v = e.target.value ? Number(e.target.value) : null;
      store.update((s) => { s.essays[t.id] = { ...(s.essays[t.id] || {}), text: essay.value, words: wordCount(essay.value), at: Date.now(), selfBand: v }; });
      return;
    }
    recalc();
  });

  root.querySelector('#finish').addEventListener('click', () => {
    if (stop) stop();
    saveNow();
    assess.classList.remove('hidden');
    model.classList.remove('hidden');
    root.querySelector('#modelNote')?.remove();
    recalc();
    root.querySelector('#shortNote')?.remove();
    if (wordCount(essay.value) < minimum) {
      estimate.insertAdjacentHTML('afterend', `<p class="note note--warn small" id="shortNote" style="margin:0 0 0 12px">Under ${minimum} words: in the real test this lowers your Task ${t.task === 1 ? 'Achievement' : 'Response'} score.</p>`);
    }
    assess.scrollIntoView({ behavior: 'smooth' });
  });

  return () => {
    if (stop) stop();
    // Leaving the page mid-sentence must not lose the last few words.
    if (saveTimer) saveNow();
  };
}
