import { crumbs } from '../util.js';

export default function about(root) {
  root.innerHTML = `
${crumbs([['#/', 'Home'], [null, 'How the test works']])}
<h1>How IELTS Academic works</h1>
<div class="prose">
<p class="lead">IELTS has four papers. Listening, Reading and Writing are taken on the same day, in that order and without breaks; Speaking may be on the same day or up to a week either side. Total time is about 2 hours 45 minutes.</p>
<div class="table-scroll"><table>
<tr><th>Paper</th><th>Time</th><th>Format</th></tr>
<tr><td><a href="#/listening">Listening</a></td><td>about 30 minutes</td><td>4 recordings heard once, 40 questions. Paper test: +10 minutes to transfer answers. Computer test: 2 minutes to check.</td></tr>
<tr><td><a href="#/reading">Reading</a></td><td>60 minutes</td><td>3 long passages, 40 questions. No extra transfer time.</td></tr>
<tr><td><a href="#/writing">Writing</a></td><td>60 minutes</td><td>Task 1: describe visual information in at least 150 words. Task 2: an essay of at least 250 words. Task 2 is worth twice as much.</td></tr>
<tr><td><a href="#/speaking">Speaking</a></td><td>11–14 minutes</td><td>Face-to-face interview in three parts, recorded.</td></tr>
</table></div>

<h2>How scores work</h2>
<p>Each paper gets a band from 0 to 9, in half bands. Your overall band is the average of the four, rounded to the nearest half band: an average ending in .25 rounds up to the next half band, and .75 rounds up to the next whole band. So 7, 7, 6.5 and 6.5 (average 6.75) gives an overall 7.0. Try the <a href="#/calculator">band calculator</a>.</p>
<p>Listening and Reading are marked out of 40 and converted to bands. Writing and Speaking are marked by trained examiners on four criteria each, with equal weight.</p>

<h2>What band 7 requires</h2>
<table>
<tr><th>Skill</th><th>Band 7 in practice</th></tr>
<tr><td>Listening</td><td>About 30/40. Accurate spelling, and following speakers who change their minds or speak quickly in Parts 3 and 4.</td></tr>
<tr><td>Reading</td><td>About 30/40 in Academic. Recognising paraphrase, separating FALSE from NOT GIVEN, and finishing in time.</td></tr>
<tr><td>Writing</td><td>Every part of the task covered; a clear overview (Task 1) or position (Task 2); ideas developed and supported; varied, mostly accurate grammar; some less common vocabulary used precisely.</td></tr>
<tr><td>Speaking</td><td>Speaking at length without strain; flexible vocabulary including some idiomatic language; complex sentences with frequent error-free ones; easy to understand throughout.</td></tr>
</table>

<h2>Academic or General Training?</h2>
<p>Listening and Speaking are the same for both. Academic Reading uses longer, more academic texts; General Training uses everyday and workplace texts. Academic Writing Task 1 describes data or a process; General Training Task 1 is a letter. This course is built for Academic, which most universities and professional bodies require. Its Listening, Speaking and Task 2 material is equally useful for General Training.</p>

<h2>Paper or computer?</h2>
<p>The questions and marking are the same. On computer you type your answers (and see a word count in Writing) and results arrive within a few days. Choose whichever you are more comfortable with — if you type faster than you write, computer usually helps in Writing.</p>
</div>`;
}
