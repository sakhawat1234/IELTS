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
  svg += `<text x="${PAD.left}" y="12">${esc(chart.unitLabel || chart.unit)}</text>`;
  return svg;
}

function process(chart) {
  return `<ol class="process" style="list-style:none;padding:0;margin:0;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(160px,1fr))">${chart.steps.map((step, i) => `<li class="card card--soft" style="margin:0;padding:12px;position:relative"><span class="q__num">${i + 1}</span> ${esc(step)}</li>`).join('')}</ol><p class="small muted" style="margin-top:8px">Stages run in order from 1 to ${chart.steps.length}.</p>`;
}

// Pie charts: chart.pies = [{ title, values: [..] }], chart.labels = slice names.
function pie(chart) {
  const r = 110;
  const pw = 300;
  const width = pw * chart.pies.length;
  let svg = '';
  chart.pies.forEach((p, pi) => {
    const cx = pw * pi + pw / 2;
    const cy = 150;
    const total = p.values.reduce((a, b) => a + b, 0);
    let angle = -Math.PI / 2;
    svg += `<text class="pie-title" x="${cx}" y="22" text-anchor="middle">${esc(p.title)}</text>`;
    p.values.forEach((v, i) => {
      const a2 = angle + (v / total) * Math.PI * 2;
      const large = a2 - angle > Math.PI ? 1 : 0;
      const [x1, y1, x2, y2] = [cx + r * Math.cos(angle), cy + r * Math.sin(angle), cx + r * Math.cos(a2), cy + r * Math.sin(a2)];
      svg += `<path class="slice s${i + 1}" d="M${cx},${cy} L${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 ${large} 1 ${x2.toFixed(1)},${y2.toFixed(1)} Z"><title>${esc(p.title)}, ${esc(chart.labels[i])}: ${v}%</title></path>`;
      const mid = (angle + a2) / 2;
      if (v >= 5) svg += `<text class="pie-label" x="${(cx + r * 0.65 * Math.cos(mid)).toFixed(1)}" y="${(cy + r * 0.65 * Math.sin(mid) + 4).toFixed(1)}" text-anchor="middle">${v}%</text>`;
      angle = a2;
    });
  });
  const series = chart.labels.map((name) => ({ name }));
  const data = { x: chart.pies.map((p) => p.title), unit: '%', series: chart.labels.map((name, i) => ({ name, values: chart.pies.map((p) => p.values[i]) })) };
  return `<svg class="chart" viewBox="0 0 ${width} 280" role="img" aria-label="${esc(chart.label || 'Pie charts')}">${svg}</svg>${legend(series)}${table(data)}`;
}

// A data table drawn as the exam shows it.
function dataTable(chart) {
  return `<div class="table-scroll"><table>${chart.caption ? `<caption class="small muted" style="caption-side:top;text-align:left;padding-bottom:6px">${esc(chart.caption)}</caption>` : ''}<tr>${chart.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr>${chart.rows.map((row) => `<tr>${row.map((c, i) => (i ? `<td>${esc(c)}</td>` : `<th>${esc(c)}</th>`)).join('')}</tr>`).join('')}</table></div>`;
}

// Maps: chart.maps = [{ title, items: [{ label, kind, x, y, w, h }] }] on a 300 x 240 grid.
function map(chart) {
  const mw = 300;
  const out = chart.maps.map((m, mi) => {
    const ox = mi * (mw + 20);
    let svg = `<text class="pie-title" x="${ox + mw / 2}" y="16" text-anchor="middle">${esc(m.title)}</text><rect class="map-frame" x="${ox}" y="26" width="${mw}" height="240" rx="6"/>`;
    m.items.forEach((it) => {
      const x = ox + it.x;
      const y = 26 + it.y;
      svg += `<rect class="m-${it.kind}" x="${x}" y="${y}" width="${it.w}" height="${it.h}" rx="${it.kind === 'road' ? 0 : 4}"><title>${esc(it.alt || it.label)}</title></rect>`;
      if (it.label && it.kind !== 'road') svg += `<text class="m-label" x="${x + it.w / 2}" y="${y + it.h / 2 + 4}" text-anchor="middle">${esc(it.label)}</text>`;
      if (it.label && it.kind === 'road') svg += `<text class="m-label" x="${x + 4}" y="${y - 3}">${esc(it.label)}</text>`;
    });
    return svg;
  }).join('');
  const width = chart.maps.length * mw + (chart.maps.length - 1) * 20;
  const key = [['building', 'Buildings'], ['green', 'Green space'], ['water', 'Water'], ['road', 'Roads and paths']];
  const desc = chart.maps.map((m) => `<p><strong>${esc(m.title)}:</strong> ${m.items.map((it) => esc(it.alt || it.label)).filter(Boolean).join(', ')}</p>`).join('');
  return `<svg class="chart" viewBox="0 0 ${width} 270" role="img" aria-label="${esc(chart.label || 'Maps')}">${out}</svg><p class="row small" style="justify-content:center;margin-top:6px">${key.map(([k, n]) => `<span><svg width="14" height="14" aria-hidden="true"><rect width="14" height="14" rx="3" class="m-${k}"/></svg> ${n}</span>`).join('')}</p><details class="small"><summary>Map features as text</summary>${desc}</details>`;
}

export function renderChart(chart, label) {
  if (chart.type === 'process') return process(chart);
  if (chart.type === 'pie') return pie({ ...chart, label });
  if (chart.type === 'table') return dataTable(chart);
  if (chart.type === 'map') return map({ ...chart, label });
  if (chart.type === 'mixed') return chart.parts.map((part) => `<div class="chart-part"><h3>${esc(part.title)}</h3>${renderChart(part.chart, part.title)}</div>`).join('');
  const body = chart.type === 'line' ? line(chart) : bar(chart);
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label)}">${body}</svg>${legend(chart.series)}${table(chart)}`;
}
