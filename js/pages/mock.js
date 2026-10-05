import { store } from '../store.js?v=20261005b';
import { crumbs } from '../util.js?v=20261005b';
import { overallBand, bandLabel, bandFor } from '../bands.js?v=20261005b';

// The mock strings together the hardest practice items in test order,
// under test conditions, then combines them into an estimated overall band.
const STEPS = [
  { skill: 'Listening', time: '15 minutes', items: [['Part 2: A museum introduction', '#/listening/harbour-museum?exam', 'listening', 'harbour-museum'], ['Part 4: Urban heat islands', '#/listening/heat-islands?exam', 'listening', 'heat-islands']], note: 'Each recording plays once. Read the questions before pressing Play.' },
  { skill: 'Reading', time: '23 minutes', items: [['The case for repairing things', '#/reading/repair?exam', 'reading', 'repair']], note: 'The timer counts down and marks your answers at zero.' },
  { skill: 'Writing', time: '60 minutes', items: [['Task 1: Online banking line graph (20 min)', '#/writing/t1-banking?exam', 'writing', 't1-banking'], ['Task 2: Working from home (40 min)', '#/writing/t2-remote?exam', 'writing', 't2-remote']], note: 'Start the timer, write without stopping, then use the checklist and save a self-assessed band for each task.' },
  { skill: 'Speaking', time: '12 minutes', items: [['A person who influenced you', '#/speaking/influence', 'speaking', 'influence']], note: 'Record all three parts, listen back, and save a self-assessed band.' },
];

function latest(kind, id) {
  const rows = store.get().results.filter((r) => r.kind === kind && r.id === id);
  return rows[rows.length - 1] || null;
}

export default function mock(root) {
  const s = store.get();

  // Listening and Reading: pool the raw scores of the mock items.
  const pooled = (kind, ids) => {
    const rows = ids.map((id) => latest(kind, id));
    if (rows.some((r) => !r)) return null;
    const score = rows.reduce((n, r) => n + r.score, 0);
    const total = rows.reduce((n, r) => n + r.total, 0);
    return { score, total, band: rows.length === 1 ? rows[0].band : null };
  };

  const listening = pooled('listening', ['harbour-museum', 'heat-islands']);
  const reading = pooled('reading', ['repair']);
  const w1 = s.essays['t1-banking']?.selfBand;
  const w2 = s.essays['t2-remote']?.selfBand;
  const speaking = s.speaking.influence?.selfBand;

  // Task 2 counts double in Writing.
  const writing = w1 && w2 ? Math.round(((w1 + 2 * w2) / 3) * 2) / 2 : null;

  {
    const lBand = listening ? bandFor('listening', listening.score, listening.total) : null;
    const rBand = reading ? bandFor('reading', reading.score, reading.total) : null;
    const all = [lBand, rBand, writing, speaking];
    const done = all.every((b) => b !== null && b !== undefined);

    root.innerHTML = `
${crumbs([['#/', 'Home'], [null, 'Mock test']])}
<h1>Mock test</h1>
<p class="lead">A shortened IELTS under test conditions, in the real order: Listening, Reading, Writing, Speaking. It takes about two hours. Do it in one sitting, in a quiet room, without a dictionary or breaks between the first three papers.</p>
<div class="note note--warn"><p>Use this in week 12, and again whenever you want a check-up. Practise the items here only as part of the mock — if you have already done them, your result will be optimistic.</p></div>

${STEPS.map((step, i) => `
<div class="card">
  <div class="row"><h2 style="margin:0">${i + 1}. ${step.skill}</h2><span class="spacer"></span><span class="pill">${step.time}</span></div>
  <p class="muted small" style="margin-top:8px">${step.note}</p>
  <ul class="lesson-list">${step.items.map(([label, href, kind, id]) => `<li><a href="${href}">${label}</a><span class="spacer"></span>${status(kind, id, s)}</li>`).join('')}</ul>
</div>`).join('')}

<div class="card result">
  <h2 style="margin-top:0">Your estimated result</h2>
  <div class="table-scroll"><table>
    <tr><th>Listening</th><th>Reading</th><th>Writing</th><th>Speaking</th><th>Overall</th></tr>
    <tr>
      <td>${lBand !== null ? `${bandLabel(lBand)} <span class="small muted">(${listening.score}/${listening.total})</span>` : '—'}</td>
      <td>${rBand !== null ? `${bandLabel(rBand)} <span class="small muted">(${reading.score}/${reading.total})</span>` : '—'}</td>
      <td>${writing ? bandLabel(writing) : '—'}</td>
      <td>${speaking ? bandLabel(speaking) : '—'}</td>
      <td><strong>${done ? bandLabel(overallBand(lBand, rBand, writing, speaking)) : '—'}</strong></td>
    </tr>
  </table></div>
  <p class="small muted">${done
    ? 'Listening and Reading are scaled from shorter sections, and Writing and Speaking are self-assessed, so treat this as a guide. Writing counts Task 2 twice as much as Task 1, as in the real test.'
    : 'Complete all four steps to see an overall band. Writing and Speaking need a self-assessed band saved on their pages.'}</p>
  ${done ? advice(lBand, rBand, writing, speaking) : ''}
</div>`;
  }
}

function status(kind, id, s) {
  if (kind === 'writing') {
    const e = s.essays[id];
    return e?.selfBand ? `<span class="pill pill--done">${bandLabel(e.selfBand)}</span>` : e?.text ? '<span class="pill">Started</span>' : '';
  }
  if (kind === 'speaking') {
    const sp = s.speaking[id];
    return sp?.selfBand ? `<span class="pill pill--done">${bandLabel(sp.selfBand)}</span>` : '';
  }
  const r = latest(kind, id);
  return r ? `<span class="pill pill--done">${r.score}/${r.total}</span>` : '';
}

function advice(l, r, w, sp) {
  const scores = { Listening: l, Reading: r, Writing: w, Speaking: sp };
  const weakest = Object.entries(scores).sort((a, b) => a[1] - b[1])[0];
  const gap = 7 - weakest[1];
  return `<div class="note"><p><strong>Focus next on ${weakest[0]}.</strong> ${gap > 0 ? `It is ${gap} band${gap === 1 ? '' : 's'} below 7, and raising your weakest skill is the fastest way to raise the overall score.` : 'Every skill is at band 7 or above — keep practising under timed conditions to make it consistent.'} <a href="#/${weakest[0].toLowerCase()}">Go to ${weakest[0]}</a>.</p></div>`;
}
