import { crumbs, esc, bn, glossary } from '../util.js';
import { part1Bank } from '../data/speaking.js';

export default function part1(root) {
  root.innerHTML = `
${crumbs([['#/', 'Home'], ['#/speaking', 'Speaking'], [null, 'Part 1 topic bank']])}
<h1>Part 1 topic bank</h1>
<p class="lead">Part 1 lasts 4–5 minutes and covers two or three familiar topics. The topics change regularly, but the same areas come back: you, your home, your routine and your interests. Practise the question patterns below aloud until a natural 2–3 sentence answer comes easily.</p>
<div class="note note--tip"><p><strong>The band 7 formula:</strong> answer the question directly → add a reason or detail → give an example or a contrast. Stop there. Two to three sentences is right for Part 1; a one-word answer is too short, and a one-minute speech is too long.</p></div>
<div class="note note--warn"><p><strong>Do not memorise these samples.</strong> Examiners are trained to recognise rehearsed answers. Use them to see the shape of a good answer, then answer with your own true details.</p></div>
${part1Bank.map((t, i) => `
<details class="card" ${i === 0 ? 'open' : ''}>
  <summary><strong>${esc(t.topic)}</strong> ${bn(t.bn)}</summary>
  <ul style="margin-top:12px">${t.questions.map((q) => `<li>${esc(q)}</li>`).join('')}</ul>
  <p class="small muted" style="margin-bottom:4px">Sample answer · ${esc(t.sample[0])}</p>
  <div class="passage"><p>${esc(t.sample[1])}</p></div>
  ${glossary(t.words, 'Useful words')}
</details>`).join('')}
<p><a class="btn" href="#/speaking">Back to Speaking</a></p>`;
}
