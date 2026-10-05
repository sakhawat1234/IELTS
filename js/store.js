// Progress lives in the learner's own browser. Nothing is sent anywhere.

const KEY = 'band7-progress-v1';

const empty = () => ({
  results: [],      // { kind, id, title, score, total, band, at }
  lessons: {},      // lessonId -> completedAt
  essays: {},       // taskId -> { text, words, at, selfBand }
  speaking: {},     // setId -> { at, selfBand }
  cards: {},        // wordKey -> { box, due }
  placement: null,  // { score, total, level, at }
  plan: {},         // "w3d2" -> true
  target: 7,
});

let cache = null;

function load() {
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(KEY);
    cache = raw ? { ...empty(), ...JSON.parse(raw) } : empty();
  } catch {
    cache = empty();
  }
  return cache;
}

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(cache));
  } catch {
    // Private window or storage full: the session still works, it just
    // will not be remembered.
  }
}

export const store = {
  get: () => load(),

  update(fn) {
    fn(load());
    save();
  },

  addResult(result) {
    this.update((s) => {
      s.results.push({ ...result, at: Date.now() });
      s.results = s.results.slice(-300);
    });
  },

  completeLesson(id) {
    this.update((s) => { s.lessons[id] = Date.now(); });
  },

  isDone: (id) => Boolean(load().lessons[id]),

  bestFor(kind, id) {
    const rows = load().results.filter((r) => r.kind === kind && r.id === id);
    return rows.reduce((best, r) => (!best || r.score / r.total > best.score / best.total ? r : best), null);
  },

  export() {
    return JSON.stringify(load(), null, 2);
  },

  import(json) {
    const data = JSON.parse(json);
    if (typeof data !== 'object' || !data || !Array.isArray(data.results)) throw new Error('Not a Band Seven progress file.');
    cache = { ...empty(), ...data };
    save();
  },

  reset() {
    cache = empty();
    save();
  },
};
