import { store } from '../store.js?v=20261005b';
import { crumbs, levelPill, esc } from '../util.js?v=20261005b';
import { renderQuiz, gradeQuiz, marksIn } from '../quiz.js?v=20261005b';
import { setById } from '../data/listening.js?v=20261005b';
import { bandFor, bandLabel } from '../bands.js?v=20261005b';

const FEMALE = /female|samantha|victoria|karen|moira|tessa|serena|zira|hazel|susan|libby|sonia|natasha|kate|fiona|martha|catherine|aria|jenny|emma|amy/i;
const MALE = /\bmale|daniel|alex\b|fred|arthur|oliver|david|george|ryan|thomas|james|guy|rishi|gordon|lee|aaron|brian/i;

function englishVoices() {
  const all = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  const en = all.filter((v) => /^en[-_]/i.test(v.lang));
  // British and Australian first: they are the accents most heard in IELTS.
  const rank = (v) => (/GB|UK/i.test(v.lang) ? 0 : /AU|IE|NZ/i.test(v.lang) ? 1 : 2) + (v.localService ? 0 : -0.5);
  return en.sort((a, b) => rank(a) - rank(b));
}

/** A different voice for each speaker where the browser has enough. */
function castVoices(speakers) {
  const voices = englishVoices();
  const used = new Set();
  const cast = {};
  for (const [role, sp] of Object.entries(speakers)) {
    const wanted = sp.gender === 'f' ? FEMALE : MALE;
    const pick = voices.find((v) => wanted.test(v.name) && !used.has(v.name))
      || voices.find((v) => !used.has(v.name))
      || voices[0]
      || null;
    if (pick) used.add(pick.name);
    cast[role] = pick;
  }
  return cast;
}

export default function listening(root, { id, query }) {
  const set = setById(id);

  if (!set) {
    root.innerHTML = '<h1>Recording not found</h1><p><a href="#/listening">Back to Listening</a></p>';
    return;
  }

  const exam = query?.has('exam');
  const supported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  const marks = marksIn(set.groups);

  root.innerHTML = `
${crumbs([['#/', 'Home'], ['#/listening', 'Listening'], [null, set.title]])}
<h1>Part ${set.part}: ${esc(set.title)}</h1>
<p class="row">${levelPill(set.level)}<span class="small muted">${marks} questions</span></p>
<div class="card">
  <p><strong>${esc(set.context)}</strong></p>
  <p class="small muted">${exam
    ? 'Test conditions: you will hear the recording once. Read the questions first, then press Play.'
    : 'Read the questions first (in the real test you get about 30 seconds), then press Play. In practice mode you may replay, but try to answer on the first listening.'}</p>
  <div class="row" id="player">
    <button class="btn" id="play" type="button">▶ Play recording</button>
    ${exam ? '' : `<button class="btn btn--ghost" id="stop" type="button" disabled>■ Stop</button>
    <label class="small">Speed <select class="field" id="rate"><option value="0.85">Slower</option><option value="1" selected>Normal</option><option value="1.12">Faster</option></select></label>`}
    <span class="small muted" id="status"></span>
  </div>
  <div id="novoice" class="note note--warn hidden"><p>This browser has no English speech voices, so the recording cannot be played. You can still practise by reading the transcript, though that tests reading rather than listening. On Windows, Mac, Android and iPhone, Chrome, Edge and Safari all include voices.</p><button class="btn btn--small" type="button" id="showScript">Show transcript</button></div>
</div>
<form class="card" id="quiz">
  ${renderQuiz(set.groups, { name: 'ls' })}
  <button class="btn" type="submit">Check answers</button>
</form>
<div id="result"></div>
<details class="model hidden" id="transcript"><summary>Transcript</summary>
  <div class="passage">${set.script.map(([who, text]) => `<p><strong>${esc(set.speakers[who].name)}:</strong> ${esc(text)}</p>`).join('')}</div>
</details>`;

  const playBtn = root.querySelector('#play');
  const stopBtn = root.querySelector('#stop');
  const status = root.querySelector('#status');
  const transcript = root.querySelector('#transcript');
  let playing = false;
  let played = false;
  let cancelled = false;
  let voiceTimer = null;

  const synth = supported ? window.speechSynthesis : null;

  const checkVoices = () => {
    if (!root.contains(playBtn)) return false; // the learner has moved on
    if (!supported || englishVoices().length === 0) {
      root.querySelector('#novoice').classList.remove('hidden');
      playBtn.disabled = true;
      return false;
    }
    root.querySelector('#novoice').classList.add('hidden');
    playBtn.disabled = exam && played;
    return true;
  };

  // Voices load asynchronously in Chrome.
  if (supported) {
    synth.addEventListener?.('voiceschanged', checkVoices);
    voiceTimer = setTimeout(checkVoices, 600);
  } else {
    checkVoices();
  }

  root.querySelector('#showScript')?.addEventListener('click', () => {
    transcript.classList.remove('hidden');
    transcript.open = true;
  });

  const play = () => {
    if (!checkVoices() || playing) return;
    synth.cancel();
    cancelled = false;
    playing = true;
    played = true;
    playBtn.disabled = true;
    if (stopBtn) stopBtn.disabled = false;

    const cast = castVoices(set.speakers);
    const rate = Number(root.querySelector('#rate')?.value || 1);

    // Speak sentence by sentence: long utterances get cut off in some browsers.
    const queue = [];
    set.script.forEach(([who, text], i) => {
      const sentences = text.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g) || [text];
      sentences.forEach((sentence, j) => queue.push({ who, text: sentence.trim(), pause: j === 0 && i > 0 ? 350 : 60 }));
    });

    let i = 0;
    const next = () => {
      if (cancelled) return;
      if (i >= queue.length) {
        playing = false;
        status.textContent = 'Finished.';
        playBtn.disabled = Boolean(exam);
        playBtn.textContent = exam ? 'Played' : '↺ Play again';
        if (stopBtn) stopBtn.disabled = true;
        return;
      }
      const item = queue[i++];
      const sp = set.speakers[item.who];
      const u = new SpeechSynthesisUtterance(item.text);
      if (cast[item.who]) {
        u.voice = cast[item.who];
        u.lang = cast[item.who].lang;
      } else {
        u.lang = 'en-GB';
      }
      u.pitch = sp.pitch ?? 1;
      u.rate = (sp.rate ?? 1) * rate * 0.95;
      u.onend = () => setTimeout(next, item.pause);
      u.onerror = () => setTimeout(next, 50);
      status.textContent = `Playing… ${Math.round((i / queue.length) * 100)}%`;
      synth.speak(u);
    };
    next();
  };

  const stop = () => {
    cancelled = true;
    playing = false;
    if (synth) synth.cancel();
    status.textContent = 'Stopped.';
    playBtn.disabled = false;
    playBtn.textContent = '▶ Play from the start';
    if (stopBtn) stopBtn.disabled = true;
  };

  playBtn.addEventListener('click', play);
  stopBtn?.addEventListener('click', stop);

  const form = root.querySelector('#quiz');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (playing) stop();
    const { score, total } = gradeQuiz(form, set.groups, { name: 'ls' });
    const band = bandFor('listening', score, total);
    store.addResult({ kind: 'listening', id: set.id, title: set.title, score, total, band, exam: Boolean(exam) });
    form.querySelector('button[type="submit"]').remove();
    transcript.classList.remove('hidden');

    root.querySelector('#result').innerHTML = `
<div class="card result">
  <div class="row"><div><div class="stat">${score} / ${total}</div><div class="muted">${Math.round((score / total) * 100)}% correct</div></div><span class="spacer"></span><div style="text-align:right"><div class="band">≈ ${bandLabel(band)}</div><div class="small muted">estimated band at this accuracy over 40 questions</div></div></div>
  <p style="margin-top:12px">Now open the transcript below and find where each answer was said. For every mistake, ask: did I miss it, mishear it, or fall for a distractor?</p>
  <div class="row"><a class="btn" href="#/listening/${set.id}">Try again</a><a class="btn btn--ghost" href="#/listening">More listening practice</a></div>
</div>`;
    root.querySelector('#result').scrollIntoView({ behavior: 'smooth' });
  });

  return () => {
    cancelled = true;
    clearTimeout(voiceTimer);
    if (synth) {
      synth.cancel();
      synth.removeEventListener?.('voiceschanged', checkVoices);
    }
  };
}
