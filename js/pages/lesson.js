import { store } from '../store.js';
import { SKILLS, crumbs, levelPill } from '../util.js';
import { lessonById, lessonsFor } from '../data/lessons.js';

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
<article class="card prose">${l.body}</article>
<div class="row">
  <button class="btn" id="done" type="button">${done ? '✓ Completed' : 'Mark as completed'}</button>
  <span class="spacer"></span>
  ${prev ? `<a class="btn btn--ghost" href="#/lesson/${prev.id}">← ${prev.title}</a>` : ''}
  ${next ? `<a class="btn btn--ghost" href="#/lesson/${next.id}">${next.title} →</a>` : `<a class="btn btn--ghost" href="#/${l.skill}">Practise ${SKILLS[l.skill].name.toLowerCase()} →</a>`}
</div>`;

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
