import { store } from '../store.js?v=20261005b';
import { crumbs, LEVELS, esc } from '../util.js?v=20261005b';
import { weeks, dailyHabits } from '../data/plan.js?v=20261005b';

export default function plan(root) {
  const paint = () => {
    const s = store.get();
    const start = s.placement ? { 1: 1, 2: 5, 3: 10 }[s.placement.level] : 1;
    const total = weeks.reduce((n, w) => n + w.tasks.length, 0);
    const done = Object.keys(s.plan).filter((k) => k.startsWith('v2') && s.plan[k]).length;

    root.innerHTML = `
${crumbs([['#/', 'Home'], [null, 'Study plan']])}
<h1>Your 12-week plan to band 7</h1>
<p class="lead">Every lesson and practice item on the site, in teaching order: about 1–2 hours a day, five or six days a week. Tick each task when you finish it. ${s.placement ? `Your placement suggests starting at <strong>week ${start}</strong>, but the earlier weeks are a quick, useful review.` : 'Not sure where to start? <a href="#/placement">Take the placement check</a>.'}</p>
<div class="card card--soft"><div class="row"><strong>${done} of ${total} tasks done</strong></div><div class="bar" style="margin-top:8px"><span style="width:${Math.round((done / total) * 100)}%"></span></div></div>

<div class="card"><h3>Every day, alongside the plan</h3><ul>${dailyHabits.map((h) => `<li>${esc(h)}</li>`).join('')}</ul></div>

${weeks.map((w) => `
<div class="card" id="week-${w.week}">
  <div class="row"><h3 style="margin:0">Week ${w.week}: ${esc(w.focus)}</h3><span class="spacer"></span><span class="pill ${LEVELS[w.stage].cls}">${LEVELS[w.stage].name}</span>${w.week === start && s.placement ? '<span class="pill pill--done">Start here</span>' : ''}</div>
  <ul class="checklist" style="margin-top:12px">
    ${w.tasks.map(([label, href], i) => {
      const key = `v2w${w.week}t${i}`;
      return `<li><input type="checkbox" id="${key}" data-key="${key}" ${s.plan[key] ? 'checked' : ''}><label for="${key}"><a href="${href}">${esc(label)}</a></label></li>`;
    }).join('')}
  </ul>
</div>`).join('')}`;

    root.querySelectorAll('input[data-key]').forEach((box) => {
      box.addEventListener('change', () => {
        store.update((st) => { st.plan[box.dataset.key] = box.checked; });
        const scroll = window.scrollY;
        paint();
        window.scrollTo(0, scroll);
      });
    });
  };

  paint();
}
