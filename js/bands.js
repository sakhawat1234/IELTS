// Raw-score to band conversion. These follow the tables commonly published
// for IELTS practice material; the exact cut-offs move a little from one
// real test to the next, so treat the result as an estimate.

const LISTENING = [
  [39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6],
  [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 0],
];

const READING_ACADEMIC = [
  [39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6],
  [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 0],
];

/** Band for a raw score out of 40, or scaled to 40 for shorter practice sets. */
export function bandFor(kind, score, total = 40) {
  const table = kind === 'listening' ? LISTENING : READING_ACADEMIC;
  const scaled = total === 40 ? score : Math.round((score / total) * 40);
  for (const [min, band] of table) {
    if (scaled >= min) return band;
  }
  return 0;
}

/** What raw score out of 40 a band needs. */
export function rawNeeded(kind, band) {
  const table = kind === 'listening' ? LISTENING : READING_ACADEMIC;
  const row = table.slice().reverse().find(([, b]) => b >= band);
  return row ? row[0] : 40;
}

/**
 * Overall band: the mean of the four skills, rounded to the nearest half
 * band, with .25 rounding up to .5 and .75 rounding up to the next whole band.
 */
export function overallBand(l, r, w, s) {
  const mean = (l + r + w + s) / 4;
  const whole = Math.floor(mean);
  const frac = mean - whole;
  if (frac < 0.25) return whole;
  if (frac < 0.75) return whole + 0.5;
  return whole + 1;
}

export function bandLabel(band) {
  return Number.isInteger(band) ? `${band}.0` : String(band);
}
