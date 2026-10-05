import { store } from '../store.js?v=20261005b';
import { crumbs, esc, shuffle, LEVELS, bn } from '../util.js?v=20261005b';
import { topics, academic, linking, topicById, wordKey } from '../data/vocab.js?v=20261005b';

// Leitner boxes: how many days until a card in each box comes back.
const INTERVAL_DAYS = [0, 1, 3, 7, 16, 35];
const DAY = 24 * 60 * 60 * 1000;

function isDue(card, now) {
  return !card || card.due <= now;
}

export default function vocab(root, { topic }) {
  if (!topic) return index(root);

  const t = topicById(topic);
  if (!t) {
    root.innerHTML = '<h1>Topic not found</h1><p><a href="#/vocabulary">All topics</a></p>';
    return;
  }

  let deck = [];
  let current = 0;
  let flipped = false;

  const keyHandler = (e) => {
    if (!deck.length || e.target.closest('input, textarea, select')) return;
    if (e.key === ' ') { e.preventDefault(); flip(); }
    if (flipped && e.key === '1') answer(false);
    if (flipped && e.key === '2') answer(true);
  };

  const buildDeck = (all) => {
    const now = Date.now();
    const cards = store.get().cards;
    deck = shuffle(t.words.filter((w) => all || isDue(cards[wordKey(t.id, w.w)], now)));
    current = 0;
    flipped = false;
  };

  const flip = () => {
    flipped = !flipped;
    root.querySelector('.flash')?.classList.toggle('is-flipped', flipped);
    root.querySelector('#answers')?.classList.toggle('hidden', !flipped);
  };

  const answer = (knew) => {
    const w = deck[current];
    store.update((s) => {
      const key = wordKey(t.id, w.w);
      const box = knew ? Math.min(5, (s.cards[key]?.box || 0) + 1) : 1;
      s.cards[key] = { box, due: Date.now() + INTERVAL_DAYS[knew ? box : 0] * DAY };
    });
    current += 1;
    flipped = false;
    paint();
  };

  const paint = () => {
    const cards = store.get().cards;
    const learned = t.words.filter((w) => (cards[wordKey(t.id, w.w)]?.box || 0) >= 3).length;
    const card = deck[current];

    root.innerHTML = `
${crumbs([['#/', 'Home'], ['#/vocabulary', 'Vocabulary'], [null, t.name]])}
<h1>${esc(t.name)} ${bn(t.bnName)}</h1>
<p class="lead">${learned} of ${t.words.length} words learned. Cards you know come back after longer gaps; cards you miss come back today.</p>

${card ? `
<p class="small muted" style="text-align:center">Card ${current + 1} of ${deck.length} · press <kbd>Space</kbd> to flip, <kbd>1</kbd> didn't know, <kbd>2</kbd> knew it</p>
<div class="flash" role="button" tabindex="0" aria-label="Flashcard. Activate to flip.">
  <div class="flash__inner">
    <div class="flash__face"><div class="flash__word">${esc(card.w)}</div><div class="muted">${esc(card.pos)}</div><p class="small muted" style="margin-top:16px">What does it mean? Use it in a sentence, then flip.</p></div>
    <div class="flash__face flash__back"><div style="font-weight:700;font-size:1.2rem">${esc(card.w)}</div><p>${esc(card.def)}</p><p class="bn" lang="bn" style="font-size:1.1rem">${esc(card.bn)}</p><p class="passage"><em>${esc(card.ex)}</em></p></div>
  </div>
</div>
<div class="row hidden" id="answers" style="justify-content:center"><button class="btn btn--ghost" type="button" data-a="0">✗ Didn't know</button><button class="btn" type="button" data-a="1">✓ Knew it</button></div>`
  : `<div class="card" style="text-align:center"><h2 style="margin-top:0">${deck.length ? 'Session complete' : 'Nothing due right now'}</h2><p class="muted">${deck.length ? 'Nice work. Come back tomorrow for the cards that are due.' : 'Every card in this topic is scheduled for a later day.'}</p><div class="row" style="justify-content:center"><button class="btn" type="button" id="all">Study all ${t.words.length} cards anyway</button><a class="btn btn--ghost" href="#/vocabulary">Other topics</a></div></div>`}

<h2>Word list</h2>
<div class="table-scroll"><table>
<tr><th>Word</th><th>Meaning</th><th class="bn" lang="bn">বাংলা</th><th>Example</th><th>Level</th></tr>
${t.words.map((w) => `<tr><td><strong>${esc(w.w)}</strong><br><span class="small muted">${esc(w.pos)}</span></td><td>${esc(w.def)}</td><td class="bn" lang="bn">${esc(w.bn)}</td><td><em>${esc(w.ex)}</em></td><td><span class="pill ${LEVELS[w.level].cls}">${LEVELS[w.level].name}</span></td></tr>`).join('')}
</table></div>`;

    root.querySelector('.flash')?.addEventListener('click', flip);
    root.querySelector('.flash')?.addEventListener('keydown', (e) => { if (e.key === 'Enter') flip(); });
    root.querySelectorAll('[data-a]').forEach((b) => b.addEventListener('click', () => answer(b.dataset.a === '1')));
    root.querySelector('#all')?.addEventListener('click', () => { buildDeck(true); paint(); });
  };

  buildDeck(false);
  paint();
  document.addEventListener('keydown', keyHandler);
  return () => document.removeEventListener('keydown', keyHandler);
}

function index(root) {
  const cards = store.get().cards;
  const now = Date.now();
  const tile = (t) => {
    const learned = t.words.filter((w) => (cards[wordKey(t.id, w.w)]?.box || 0) >= 3).length;
    const due = t.words.filter((w) => isDue(cards[wordKey(t.id, w.w)], now)).length;
    return `<a class="card card--link" href="#/vocabulary/${t.id}"><h3>${esc(t.name)} ${bn(t.bnName)}</h3><p class="small muted">${t.words.length} words · ${due} due today</p><div class="bar"><span style="width:${Math.round((learned / t.words.length) * 100)}%"></span></div><p class="small" style="margin-top:6px">${learned} learned</p></a>`;
  };

  root.innerHTML = `
${crumbs([['#/', 'Home'], [null, 'Vocabulary']])}
<h1>Vocabulary</h1>
<p class="lead">Lexical Resource is a quarter of your Writing and Speaking scores. These topics come up again and again in Task 2 and Speaking Part 3. Learn words in phrases, and say each example aloud.</p>
<h2>Topic vocabulary</h2>
<div class="grid">
${topics.map(tile).join('')}
</div>
<h2>Essential lists for Writing and Speaking</h2>
<div class="grid">
${[academic, linking].map(tile).join('')}
</div>
<p class="small muted">Bengali meanings are a bridge, not a replacement. Read the English definition first, then check the Bengali to confirm. Use the বাংলা button in the header to hide them once you are confident.</p>
<div class="note note--tip"><p><strong>How to learn a word properly:</strong> know its meaning, its word family (economy, economic, economical), the words it goes with (pose a threat, not make a threat), and whether it is formal. Then use it — in a sentence you write today and in something you say tomorrow.</p></div>`;
}
