// Renders and marks IELTS-style question groups.
//
// A group: { title, type, instructions, limit?, options?, items: [...] }
//   type 'mcq'    item: { q, options: [..], answer: 'B', explain }
//   type 'multi'  item: { q, options: [..], answer: ['B', 'D'], explain }  (one mark per letter)
//   type 'tfng'   item: { q, answer: 'TRUE' | 'FALSE' | 'NOT GIVEN', explain }
//   type 'ynng'   item: { q, answer: 'YES' | 'NO' | 'NOT GIVEN', explain }
//   type 'gap'    item: { q: 'text with ___ in it', answer: 'word' | ['word', 'variant'], explain }
//   type 'match'  group.options: [{ value: 'iv', label: '...' }], item: { q, answer: 'iv', explain }

import { esc, normalise, wordCount } from './util.js';

const LETTERS = 'ABCDEFGHIJ';

const CHOICES = {
  tfng: ['TRUE', 'FALSE', 'NOT GIVEN'],
  ynng: ['YES', 'NO', 'NOT GIVEN'],
};

/** How many marks a group is worth. */
export function marksIn(groups) {
  return groups.reduce((sum, g) => sum + g.items.reduce((n, it) => n + (g.type === 'multi' ? it.answer.length : 1), 0), 0);
}

export function renderQuiz(groups, { start = 1, name = 'q' } = {}) {
  let n = start;
  let out = '';

  groups.forEach((group, gi) => {
    const first = n;
    const count = group.items.reduce((c, it) => c + (group.type === 'multi' ? it.answer.length : 1), 0);
    const last = first + count - 1;

    out += `<div class="q-group">
      <div class="q-group__title">Questions ${first}${last > first ? `–${last}` : ''}</div>
      ${group.instructions ? `<div class="q-group__instr">${group.instructions}${group.limit ? ` <strong>Write ${esc(group.limit)}</strong>.` : ''}</div>` : ''}`;

    if (group.type === 'match' && group.showOptions !== false) {
      out += `<div class="card card--soft small"><strong>${esc(group.optionsTitle || 'List of options')}</strong><br>${group.options.map((o) => `<span><b>${esc(o.value)}</b> ${esc(o.label)}</span>`).join('<br>')}</div>`;
    }

    group.items.forEach((item, ii) => {
      const id = `${name}-${gi}-${ii}`;
      const label = group.type === 'multi' ? `${n}–${n + item.answer.length - 1}` : `${n}`;
      out += `<div class="q" data-qid="${id}"><div><span class="q__num">${label}</span>`;

      if (group.type === 'gap') {
        const parts = String(item.q).split('___');
        out += `${esc(parts[0])}<input type="text" name="${id}" autocomplete="off" spellcheck="false" aria-label="Answer ${n}">${esc(parts[1] ?? '')}`;
      } else {
        out += esc(item.q);
      }
      out += '</div>';

      if (group.type === 'mcq' || group.type === 'multi') {
        const type = group.type === 'mcq' ? 'radio' : 'checkbox';
        item.options.forEach((opt, oi) => {
          out += `<label><input type="${type}" name="${id}" value="${LETTERS[oi]}"><span><b>${LETTERS[oi]}</b> ${esc(opt)}</span></label>`;
        });
      } else if (CHOICES[group.type]) {
        out += `<div class="row">${CHOICES[group.type].map((c) => `<label><input type="radio" name="${id}" value="${c}">${c}</label>`).join('')}</div>`;
      } else if (group.type === 'match') {
        out += `<select name="${id}" aria-label="Answer ${n}"><option value="">Choose…</option>${group.options.map((o) => `<option value="${esc(o.value)}">${esc(o.value)}${group.showOptions === false ? ` ${esc(o.label)}` : ''}</option>`).join('')}</select>`;
      }

      out += '<div class="q__feedback" hidden></div></div>';
      n += group.type === 'multi' ? item.answer.length : 1;
    });

    out += '</div>';
  });

  return out;
}

function accepted(item) {
  return (Array.isArray(item.answer) ? item.answer : [item.answer]).map(normalise);
}

/** Mark everything under root. Paints feedback. Returns { score, total }. */
export function gradeQuiz(root, groups, { name = 'q', reveal = true } = {}) {
  let score = 0;
  let total = 0;

  groups.forEach((group, gi) => {
    group.items.forEach((item, ii) => {
      const id = `${name}-${gi}-${ii}`;
      const box = root.querySelector(`[data-qid="${id}"]`);
      if (!box) return;

      let got = 0;
      let worth = 1;
      let given = '';
      let right = '';

      if (group.type === 'multi') {
        worth = item.answer.length;
        const picked = [...box.querySelectorAll('input:checked')].map((i) => i.value);
        // One mark per correct letter; choosing more letters than asked
        // cannot earn more than the question is worth.
        got = Math.min(worth, picked.filter((v) => item.answer.includes(v)).length);
        if (picked.length > worth) got = Math.max(0, got - (picked.length - worth));
        given = picked.join(', ') || '—';
        right = item.answer.join(', ');
      } else if (group.type === 'gap') {
        const input = box.querySelector('input');
        given = input.value.trim();
        const ok = accepted(item);
        const limitWords = group.maxWords || 0;
        // A number written with spaces (a phone number) still counts as one number.
        const tooLong = limitWords && wordCount(given.replace(/(\d)\s+(?=\d)/g, '$1')) > limitWords;
        got = !tooLong && ok.includes(normalise(given)) ? 1 : 0;
        right = (Array.isArray(item.answer) ? item.answer[0] : item.answer);
        if (tooLong) given += ' (over the word limit)';
      } else if (group.type === 'match') {
        given = box.querySelector('select').value;
        right = item.answer;
        got = given === item.answer ? 1 : 0;
      } else {
        const picked = box.querySelector('input:checked');
        given = picked ? picked.value : '';
        right = item.answer;
        got = given === item.answer ? 1 : 0;
      }

      score += got;
      total += worth;

      if (!reveal) return;

      box.classList.toggle('is-right', got === worth);
      box.classList.toggle('is-wrong', got < worth);
      const fb = box.querySelector('.q__feedback');
      fb.hidden = false;
      fb.innerHTML = `${got === worth ? '<strong>Correct.</strong>' : `<strong>${got > 0 ? `${got} of ${worth}.` : 'Not quite.'}</strong> Your answer: ${esc(given || '—')} · Answer: <b>${esc(right)}</b>.`} ${item.explain ? esc(item.explain) : ''}`;
    });
  });

  root.querySelectorAll('input, select').forEach((el) => { el.disabled = true; });

  return { score, total };
}
