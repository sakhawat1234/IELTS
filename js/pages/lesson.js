import { store } from '../store.js?v=20261005b';
import { SKILLS, crumbs, levelPill, glossary, esc } from '../util.js?v=20261005b';
import { renderQuiz, gradeQuiz } from '../quiz.js?v=20261005b';
import { lessonById, lessonsFor } from '../data/lessons.js?v=20261005b';

export default function lesson(root, { id }) {
  const l = lessonById(id);

  if (!l) {
    root.innerHTML = '<h1>Lesson not found</h1><p><a href="#/">Back to home</a></p>';
    return;
  }

  const siblings = lessonsFor(l.skill);
  const i = siblings.findIndex((x) => x.id === l.id);
  const prev = siblings[i - 1];
  const next = siblings[i + 1];

  const paint = () => {
    const done = store.isDone(l.id);
    root.innerHTML = `
${crumbs([['#/', 'Home'], [`#/${l.skill}`, SKILLS[l.skill].name], [null, l.title]])}
<h1>${l.title}</h1>
<p class="row">${levelPill(l.level)} <span class="small muted">${l.minutes} minutes</span></p>
${l.module ? `<p class="small muted">Module: ${esc(l.module)}</p>` : ''}
<article class="card prose">${l.body}
${l.bn ? `<p class="bn-note" lang="bn">${esc(l.bn)}</p>` : ''}
</article>
${l.glossary?.length ? `<section class="card"><h2 style="margin-top:0">Key words <span class="bn" lang="bn">· মূল শব্দ</span></h2>${glossary(l.glossary)}</section>` : ''}
${l.practice?.length ? `<section class="card"><h2 style="margin-top:0">Quick practice</h2><form id="quiz">${renderQuiz(l.practice, { name: 'lp' })}<button class="btn" type="submit">Check answers</button></form><div id="result"></div></section>` : ''}
<div class="row">
  <button class="btn" id="done" type="button">${done ? '✓ Completed' : 'Mark as completed'}</button>
  <span class="spacer"></span>
  ${prev ? `<a class="btn btn--ghost" href="#/lesson/${prev.id}">← ${esc(prev.title)}</a>` : ''}
  ${next ? `<a class="btn btn--ghost" href="#/lesson/${next.id}">${esc(next.title)} →</a>` : `<a class="btn btn--ghost" href="#/${l.skill}">Practise ${SKILLS[l.skill].name.toLowerCase()} →</a>`}
</div>`;

    // Wide tables in lesson bodies scroll sideways on phones instead of the page.
    root.querySelectorAll('article table').forEach((table) => {
      if (table.closest('.table-scroll')) return;
      const wrap = document.createElement('div');
      wrap.className = 'table-scroll';
      table.replaceWith(wrap);
      wrap.append(table);
    });

    const form = root.querySelector('#quiz');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const { score, total } = gradeQuiz(form, l.practice, { name: 'lp' });
      form.querySelector('button[type="submit"]').remove();
      root.querySelector('#result').innerHTML = `<p class="stat">${score} / ${total}</p><p>${score === total ? 'Perfect. Mark the lesson as completed and move on.' : 'Read the explanation under each answer, then re-read the part of the lesson it refers to.'}</p>`;
      if (score === total && !store.isDone(l.id)) store.completeLesson(l.id);
    });

    root.querySelector('#done').addEventListener('click', () => {
      if (store.isDone(l.id)) {
        store.update((s) => { delete s.lessons[l.id]; });
      } else {
        store.completeLesson(l.id);
      }
      paint();
    });
  };

  paint();
}
