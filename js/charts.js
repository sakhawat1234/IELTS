// Accessible SVG charts for Writing Task 1. Colours come from CSS, so the
// charts follow light and dark mode.

import { esc } from './util.js';

const W = 640;
const H = 340;
const PAD = { top: 20, right: 20, bottom: 56, left: 48 };

function legend(series) {
  return `<p class="row small" style="justify-content:center;margin-top:6px">${series.map((s, i) => `<span><svg width="14" height="14" aria-hidden="true"><rect width="14" height="14" rx="3" class="s${i + 1}"/></svg> ${esc(s.name)}</span>`).join('')}</p>`;
}

function table(chart) {
  return `<details class="small"><summary>Data as a table</summary><div class="table-scroll"><table><tr><th></th>${chart.x.map((x) => `<th>${esc(x)}</th>`).join('')}</tr>${chart.series.map((s) => `<tr><th>${esc(s.name)}</th>${s.values.map((v) => `<td>${v}${chart.unit === '%' ? '%' : ''}</td>`).join('')}</tr>`).join('')}</table></div></details>`;
}

function axes(max, unit) {
  const steps = 5;
  let out = '';
  for (let i = 0; i <= steps; i++) {
    const v = (max / steps) * i;
    const y = H - PAD.bottom - ((H - PAD.top - PAD.bottom) * i) / steps;
    out += `<line class="axis" x1="${PAD.left}" x2="${W - PAD.right}" y1="${y}" y2="${y}" stroke-dasharray="${i ? '3 4' : ''}"/>`;
    out += `<text x="${PAD.left - 8}" y="${y + 4}" text-anchor="end">${Math.round(v)}${unit === '%' ? '%' : ''}</text>`;
  }
  return out;
}

function line(chart) {
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const xAt = (i) => PAD.left + (innerW * i) / (chart.x.length - 1);
  const yAt = (v) => H - PAD.bottom - (innerH * v) / chart.max;

  let svg = axes(chart.max, chart.unit);
  chart.x.forEach((label, i) => { svg += `<text x="${xAt(i)}" y="${H - PAD.bottom + 20}" text-anchor="middle">${esc(label)}</text>`; });
  chart.series.forEach((s, si) => {
    const d = s.values.map((v, i) => `${i ? 'L' : 'M'}${xAt(i).toFixed(1)},${yAt(v).toFixed(1)}`).join(' ');
    svg += `<path class="l${si + 1}" d="${d}"/>`;
    s.values.forEach((v, i) => { svg += `<circle class="s${si + 1}" cx="${xAt(i)}" cy="${yAt(v)}" r="3.5"><title>${esc(s.name)}, ${esc(chart.x[i])}: ${v}${chart.unit === '%' ? '%' : ''}</title></circle>`; });
  });
  if (chart.unit !== '%') svg += `<text x="${PAD.left}" y="12">${esc(chart.unit)}</text>`;
  return svg;
}

function bar(chart) {
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const group = innerW / chart.x.length;
  const bw = Math.min(36, (group * 0.7) / chart.series.length);

  let svg = axes(chart.max, chart.unit);
  chart.x.forEach((label, i) => {
    const gx = PAD.left + group * i + group / 2;
    svg += `<text x="${gx}" y="${H - PAD.bottom + 20}" text-anchor="middle">${esc(label)}</text>`;
    chart.series.forEach((s, si) => {
      const v = s.values[i];
      const h = (innerH * v) / chart.max;
      const x = gx - (bw * chart.series.length) / 2 + si * bw;
      svg += `<rect class="s${si + 1}" x="${x}" y="${H - PAD.bottom - h}" width="${bw - 3}" height="${h}" rx="3"><title>${esc(s.name)}, ${esc(label)}: ${v} ${esc(chart.unit)}</title></rect>`;
    });
  });
  svg += `<text x="${PAD.left}" y="12">${esc(chart.unit)} per week</text>`;
  return svg;
}

function process(chart) {
  return `<ol class="process" style="list-style:none;padding:0;margin:0;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(160px,1fr))">${chart.steps.map((step, i) => `<li class="card card--soft" style="margin:0;padding:12px;position:relative"><span class="q__num">${i + 1}</span> ${esc(step)}</li>`).join('')}</ol><p class="small muted" style="margin-top:8px">Stages run in order from 1 to ${chart.steps.length}.</p>`;
}

export function renderChart(chart, label) {
  if (chart.type === 'process') return process(chart);
  const body = chart.type === 'line' ? line(chart) : bar(chart);
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label)}">${body}</svg>${legend(chart.series)}${table(chart)}`;
}
