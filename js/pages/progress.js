import { store } from '../store.js?v=20261005b';
import { crumbs, esc, formatDate } from '../util.js?v=20261005b';
import { lessons } from '../data/lessons.js?v=20261005b';
import { overallBand, bandLabel } from '../bands.js?v=20261005b';

function average(list) {
  return list.length ? Math.round((list.reduce((a, b) => a + b, 0) / list.length) * 2) / 2 : null;
}

function trendChart(rows) {
  if (rows.length < 2) return '<p class="small muted">Do at least two reading or listening practices to see your trend.</p>';
  const W = 640;
  const H = 220;
  const pad = 36;
  const x = (i) => pad + ((W - pad * 2) * i) / (rows.length - 1);
  const y = (b) => H - pad - ((H - pad * 2) * (b - 3)) / 6; // bands 3–9
  let svg = '';
  for (let b = 3; b <= 9; b++) {
    svg += `<line class="axis" x1="${pad}" x2="${W - pad}" y1="${y(b)}" y2="${y(b)}" stroke-dasharray="${b === 7 ? '' : '3 4'}"/><text x="${pad - 8}" y="${y(b) + 4}" text-anchor="end">${b}</text>`;
  }
  svg += `<text x="${W - pad}" y="${y(7) - 6}" text-anchor="end">target 7</text>`;
  ['reading', 'listening'].forEach((kind, k) => {
    const pts = rows.map((r, i) => (r.kind === kind ? [x(i), y(r.band)] : null)).filter(Boolean);
    if (pts.length > 1) svg += `<path class="l${k + 1}" d="${pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}"/>`;
    pts.forEach((p) => { svg += `<circle class="s${k + 1}" cx="${p[0]}" cy="${p[1]}" r="4"/>`; });
  });
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Estimated bands over time for reading and listening">${svg}</svg><p class="row small" style="justify-content:center"><span><svg width="14" height="14" aria-hidden="true"><rect width="14" height="14" rx="3" class="s1"/></svg> Reading</span><span><svg width="14" height="14" aria-hidden="true"><rect width="14" height="14" rx="3" class="s2"/></svg> Listening</span></p>`;
}

export default function progress(root) {
  const paint = () => {
    const s = store.get();
    const banded = s.results.filter((r) => r.band !== null && (r.kind === 'reading' || r.kind === 'listening'));
    const recent = (kind) => banded.filter((r) => r.kind === kind).slice(-3).map((r) => r.band);
    const l = average(recent('listening'));
    const r = average(recent('reading'));
    const w = average(Object.values(s.essays).map((e) => e.selfBand).filter(Boolean).slice(-3));
    const sp = average(Object.values(s.speaking).map((e) => e.selfBand).filter(Boolean).slice(-3));
    const all = [l, r, w, sp].every((b) => b !== null);
    const done = lessons.filter((x) => s.lessons[x.id]).length;

    root.innerHTML = `
${crumbs([['#/', 'Home'], [null, 'Progress']])}
<h1>Your progress</h1>
<p class="lead">Estimates use your last three results in each skill. Writing and Speaking use the bands you saved when assessing yourself.</p>

<div class="grid">
  ${[['Listening', l, '#/listening'], ['Reading', r, '#/reading'], ['Writing', w, '#/writing'], ['Speaking', sp, '#/speaking']].map(([name, band, href]) => `
  <a class="card card--link" href="${href}"><div class="muted small">${name}</div><div class="band">${band !== null ? bandLabel(band) : '–'}</div><div class="small muted">${band === null ? 'No results yet' : band >= 7 ? 'At or above target' : `${(7 - band).toFixed(1)} below target`}</div></a>`).join('')}
</div>
<div class="card result"><div class="row"><div><div class="muted small">Estimated overall</div><div class="band">${all ? bandLabel(overallBand(l, r, w, sp)) : '–'}</div></div><span class="spacer"></span><div class="small muted" style="max-width:40ch">${all ? 'The average of the four skills, rounded the way IELTS rounds.' : 'Practise all four skills to see an overall estimate.'}</div></div></div>

<div class="card"><h2 style="margin-top:0">Reading and listening over time</h2>${trendChart(banded.slice(-20))}</div>

<div class="card">
  <h2 style="margin-top:0">Activity</h2>
  <p>${done} of ${lessons.length} skill lessons completed · ${Object.keys(s.essays).length} writing tasks attempted · ${Object.keys(s.cards).length} vocabulary cards studied</p>
  ${s.results.length ? `<div class="table-scroll"><table><tr><th>Date</th><th>Practice</th><th>Score</th><th>Band</th></tr>
  ${s.results.slice(-15).reverse().map((x) => `<tr><td>${formatDate(x.at)}</td><td>${esc(x.title)} <span class="small muted">${esc(x.kind)}${x.exam ? ', test conditions' : ''}</span></td><td>${x.score}/${x.total}</td><td>${x.band !== null && x.band !== undefined ? bandLabel(x.band) : '—'}</td></tr>`).join('')}
  </table></div>` : '<p class="muted">No practice results yet. <a href="#/plan">Start with the study plan</a>.</p>'}
</div>

<div class="card">
  <h2 style="margin-top:0">Your data</h2>
  <p class="small muted">Everything is stored only in this browser. Export a backup to move your progress to another device, or to keep it safe if you clear your browsing data.</p>
  <div class="row">
    <button class="btn btn--ghost" type="button" id="export">Download backup</button>
    <label class="btn btn--ghost">Restore from backup<input type="file" id="import" accept="application/json" class="hidden"></label>
    <span class="spacer"></span>
    <button class="btn btn--ghost" type="button" id="reset">Reset all progress</button>
  </div>
  <p class="small" id="msg" role="status"></p>
</div>`;

    root.querySelector('#export').addEventListener('click', () => {
      const blob = new Blob([store.export()], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `band-seven-progress-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });

    root.querySelector('#import').addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        store.import(await file.text());
        paint();
        root.querySelector('#msg').textContent = 'Progress restored.';
      } catch (err) {
        root.querySelector('#msg').textContent = `Could not restore: ${err.message}`;
      }
    });

    root.querySelector('#reset').addEventListener('click', () => {
      if (!confirm('Delete all your progress, results, essays and flashcard history? This cannot be undone.')) return;
      store.reset();
      paint();
      root.querySelector('#msg').textContent = 'All progress deleted.';
    });
  };

  paint();
}
