import { crumbs } from '../util.js?v=20261005b';
import { bandFor, overallBand, bandLabel, rawNeeded } from '../bands.js?v=20261005b';

const HALF_BANDS = [];
for (let b = 9; b >= 1; b -= 0.5) HALF_BANDS.push(b);

export default function calculator(root) {
  root.innerHTML = `
${crumbs([['#/', 'Home'], [null, 'Band calculator']])}
<h1>Band score calculator</h1>
<p class="lead">Turn Listening and Reading raw scores into bands, and see how four skill bands combine into your overall score.</p>
<form class="card" id="calc">
  <div class="grid">
    <label>Listening (correct out of 40)<br><input class="field" type="number" min="0" max="40" value="30" id="l"></label>
    <label>Academic Reading (correct out of 40)<br><input class="field" type="number" min="0" max="40" value="30" id="r"></label>
    <label>Writing band<br><select class="field" id="w">${HALF_BANDS.map((b) => `<option ${b === 6.5 ? 'selected' : ''}>${bandLabel(b)}</option>`).join('')}</select></label>
    <label>Speaking band<br><select class="field" id="s">${HALF_BANDS.map((b) => `<option ${b === 7 ? 'selected' : ''}>${bandLabel(b)}</option>`).join('')}</select></label>
  </div>
</form>
<div class="card result" id="out"></div>
<div class="card">
  <h2 style="margin-top:0">Raw scores needed</h2>
  <table><tr><th>Band</th><th>Listening</th><th>Academic Reading</th></tr>
  ${[5, 5.5, 6, 6.5, 7, 7.5, 8].map((b) => `<tr><td>${bandLabel(b)}</td><td>${rawNeeded('listening', b)}+</td><td>${rawNeeded('reading', b)}+</td></tr>`).join('')}
  </table>
  <p class="small muted">Approximate: conversion tables vary slightly from test to test.</p>
</div>`;

  const form = root.querySelector('#calc');
  const out = root.querySelector('#out');

  const update = () => {
    const clamp = (v) => Math.max(0, Math.min(40, Number(v) || 0));
    const l = bandFor('listening', clamp(form.l.value));
    const r = bandFor('reading', clamp(form.r.value));
    const w = Number(form.w.value);
    const s = Number(form.s.value);
    const mean = (l + r + w + s) / 4;
    const overall = overallBand(l, r, w, s);
    out.innerHTML = `
<div class="row"><div><div class="muted small">Overall band</div><div class="band">${bandLabel(overall)}</div></div><span class="spacer"></span>
<div class="small" style="max-width:46ch">Listening ${bandLabel(l)} + Reading ${bandLabel(r)} + Writing ${bandLabel(w)} + Speaking ${bandLabel(s)} = average ${mean.toFixed(3).replace(/0+$/, '').replace(/\.$/, '')}, rounded to <strong>${bandLabel(overall)}</strong>.</div></div>`;
  };

  form.addEventListener('input', update);
  update();
}
