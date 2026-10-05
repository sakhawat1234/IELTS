import { store } from '../store.js';
import { crumbs, levelPill, countdown, esc, glossary } from '../util.js';
import { setById, descriptors } from '../data/speaking.js';
import { bandLabel } from '../bands.js';

const BANDS = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9];

/** A record / stop / play-back widget. Audio never leaves the browser. */
function recorder(el) {
  const canRecord = navigator.mediaDevices?.getUserMedia && 'MediaRecorder' in window;
  el.innerHTML = canRecord
    ? '<div class="row"><button class="btn btn--ghost btn--small" type="button" data-rec>● Record myself</button><span class="small muted" data-msg></span></div><div data-out></div>'
    : '<p class="small muted">Recording is not available in this browser. Use your phone\'s voice recorder instead — listening back to yourself is one of the most useful things you can do.</p>';
  if (!canRecord) return () => {};

  const btn = el.querySelector('[data-rec]');
  const msg = el.querySelector('[data-msg]');
  const out = el.querySelector('[data-out]');
  let stream = null;
  let rec = null;
  let url = null;

  const release = () => {
    stream?.getTracks().forEach((track) => track.stop());
    stream = null;
  };

  btn.addEventListener('click', async () => {
    if (rec && rec.state === 'recording') {
      rec.stop();
      return;
    }
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      msg.textContent = 'Microphone access was refused. Allow it in the browser\'s address bar to record.';
      return;
    }
    const chunks = [];
    rec = new MediaRecorder(stream);
    rec.ondataavailable = (e) => chunks.push(e.data);
    rec.onstop = () => {
      release();
      if (url) URL.revokeObjectURL(url);
      url = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || 'audio/webm' }));
      out.innerHTML = `<audio controls src="${url}" style="width:100%;margin-top:8px"></audio><p class="small muted">Listen back: Did you pause for long? Did you extend your answers? Which words did you repeat?</p>`;
      btn.textContent = '● Record again';
      msg.textContent = '';
    };
    rec.start();
    btn.textContent = '■ Stop recording';
    msg.textContent = 'Recording…';
  });

  return () => {
    if (rec && rec.state === 'recording') rec.stop();
    release();
    if (url) URL.revokeObjectURL(url);
  };
}

export default function speaking(root, { id }) {
  const set = setById(id);

  if (!set) {
    root.innerHTML = '<h1>Speaking set not found</h1><p><a href="#/speaking">Back to Speaking</a></p>';
    return;
  }

  const saved = store.get().speaking[set.id];
  const p1 = set.part1.flatMap((t) => t.questions.map((q) => ({ topic: t.topic, q })));

  root.innerHTML = `
${crumbs([['#/', 'Home'], ['#/speaking', 'Speaking'], [null, set.title]])}
<h1>Speaking: ${esc(set.title)}</h1>
<p class="row">${levelPill(set.level)}<span class="small muted">about 12 minutes · speak out loud</span></p>
<div class="note"><p>Answer every question <strong>aloud</strong>, as if the examiner were in the room. Recording yourself and listening back is the closest you can get to feedback without a teacher.</p></div>

<section class="card">
  <h2 style="margin-top:0">Part 1 · Interview <span class="small muted">(4–5 minutes)</span></h2>
  <p class="muted small">Answer each in 2–3 sentences: answer, reason, example.</p>
  <p class="small muted" id="p1topic"></p>
  <p class="passage" style="font-size:1.25rem" id="p1q"></p>
  <div class="row"><button class="btn" type="button" id="p1next">Next question</button><span class="small muted" id="p1count"></span></div>
  <div data-recorder="1" style="margin-top:12px"></div>
</section>

<section class="card">
  <h2 style="margin-top:0">Part 2 · Long turn <span class="small muted">(3–4 minutes)</span></h2>
  <div class="cue">
    <h3>${esc(set.part2.card)}</h3>
    <p>You should say:</p>
    <ul>${set.part2.prompts.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
  </div>
  <div class="row" style="margin-top:12px"><button class="btn" type="button" id="p2start">Start 1 minute of preparation</button><span class="timer hidden" id="p2timer"></span><strong id="p2phase"></strong></div>
  <textarea class="field hidden" id="p2notes" rows="4" style="width:100%;margin-top:10px" placeholder="Notes: keywords only, not sentences"></textarea>
  <div data-recorder="2" style="margin-top:12px"></div>
  <p class="small muted" id="p2follow" hidden>Follow-up question: <em>${esc(set.part2.followup)}</em></p>
</section>

<section class="card">
  <h2 style="margin-top:0">Part 3 · Discussion <span class="small muted">(4–5 minutes)</span></h2>
  <p class="muted small">Give extended answers: your view, the reason, an example or comparison, and a conclusion.</p>
  <ol>${set.part3.map((q) => `<li class="passage">${esc(q)}</li>`).join('')}</ol>
  <div data-recorder="3"></div>
</section>

<section class="card">
  <h2 style="margin-top:0">Band 7 in each criterion</h2>
  <table>${descriptors.map(([c, d]) => `<tr><th style="width:30%">${esc(c)}</th><td>${esc(d)}</td></tr>`).join('')}</table>
  <label class="small">How did you do overall? <select class="field" id="selfBand"><option value="">—</option>${BANDS.map((b) => `<option value="${b}" ${saved?.selfBand === b ? 'selected' : ''}>${bandLabel(b)}</option>`).join('')}</select></label>
  <span class="small muted" id="saved"></span>
</section>

<details class="model"><summary>Model Part 2 answer</summary>
  <div class="passage">${set.model.split('\n\n').map((p) => `<p>${esc(p)}</p>`).join('')}</div>
  <h3>Useful language from this answer</h3>
  <p>${set.language.map((l) => `<span class="pill" style="margin:0 4px 6px 0">${esc(l)}</span>`).join('')}</p>
  ${set.glossary ? glossary(set.glossary, 'Word or phrase') : ''}
  ${set.p3model ? `<h3>Model Part 3 answer</h3><p><strong>${esc(set.p3model[0])}</strong></p><div class="passage"><p>${esc(set.p3model[1])}</p></div><p class="small muted">Notice the shape: direct answer → reason → example from real life → a second point or a balancing view.</p>` : ''}
  <p class="small muted">Do not memorise model answers: examiners recognise rehearsed speech and mark it down. Borrow the structure and the phrases instead.</p>
</details>`;

  // ---- Part 1: one question at a time.
  let qi = 0;
  const showQ = () => {
    root.querySelector('#p1topic').textContent = `Topic: ${p1[qi].topic}`;
    root.querySelector('#p1q').textContent = p1[qi].q;
    root.querySelector('#p1count').textContent = `Question ${qi + 1} of ${p1.length}`;
    root.querySelector('#p1next').textContent = qi === p1.length - 1 ? 'Start again' : 'Next question';
  };
  root.querySelector('#p1next').addEventListener('click', () => {
    qi = (qi + 1) % p1.length;
    showQ();
  });
  showQ();

  // ---- Part 2: 60 s preparation, then 2 minutes of speaking.
  const timer = root.querySelector('#p2timer');
  const phase = root.querySelector('#p2phase');
  let stopTimer = null;
  root.querySelector('#p2start').addEventListener('click', (e) => {
    e.currentTarget.classList.add('hidden');
    root.querySelector('#p2notes').classList.remove('hidden');
    timer.classList.remove('hidden');
    phase.textContent = 'Prepare — make notes';
    stopTimer = countdown(timer, 60, {
      overrun: false,
      onEnd: () => {
        if (stopTimer) stopTimer();
        phase.textContent = 'Speak now — keep going until the timer ends';
        stopTimer = countdown(timer, 120, {
          overrun: false,
          onEnd: () => {
            phase.textContent = 'Thank you. That\'s the end of Part 2.';
            root.querySelector('#p2follow').hidden = false;
          },
        });
      },
    });
  });

  // ---- Recorders and self-assessment.
  const cleanups = [...root.querySelectorAll('[data-recorder]')].map((el) => recorder(el));

  root.querySelector('#selfBand').addEventListener('change', (e) => {
    const v = e.target.value ? Number(e.target.value) : null;
    store.update((s) => { s.speaking[set.id] = { at: Date.now(), selfBand: v }; });
    root.querySelector('#saved').textContent = 'Saved.';
  });

  return () => {
    if (stopTimer) stopTimer();
    cleanups.forEach((fn) => fn());
  };
}
