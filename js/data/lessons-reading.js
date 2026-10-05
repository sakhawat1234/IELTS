export default [
  {
    id: 'r-format',
    skill: 'reading',
    level: 1,
    title: 'How Academic Reading works',
    minutes: 10,
    body: `
<p>You have <strong>60 minutes for 3 passages and 40 questions</strong>. There is no extra time to transfer answers on paper, so write them on the answer sheet as you go. Passages come from books, journals, magazines and newspapers, get harder as you go, and add up to roughly 2,150–2,750 words.</p>
<h3>Question types</h3>
<ul>
<li>True / False / Not Given (facts) and Yes / No / Not Given (the writer's views)</li>
<li>Matching headings to paragraphs</li>
<li>Matching information, features or sentence endings</li>
<li>Multiple choice</li>
<li>Sentence, summary, note, table, flow-chart and diagram completion</li>
<li>Short-answer questions</li>
</ul>
<h3>Rules that cost marks</h3>
<div class="note note--warn"><ul>
<li>Completion answers must be <strong>copied from the passage</strong> and spelled correctly.</li>
<li>Word limits are strict. "NO MORE THAN TWO WORDS" means one or two.</li>
<li>For True/False/Not Given, write the words or the letters T/F/NG exactly as instructed. Do not mix TRUE with YES.</li>
<li>Most question sets follow the order of the passage. Matching headings and matching information do <em>not</em>.</li>
</ul></div>
<h3>How many do you need?</h3>
<p>About <strong>30 correct out of 40 gives band 7</strong> in Academic Reading, 23 gives band 6 and 15 gives band 5.</p>`,
  },
  {
    id: 'r-skim-scan',
    skill: 'reading',
    level: 1,
    title: 'Skimming and scanning',
    minutes: 12,
    body: `
<p>You cannot read 2,700 words slowly and answer 40 questions in an hour. Two fast reading styles carry you through.</p>
<h3>Skimming: getting the gist</h3>
<p>Spend 2–3 minutes per passage reading the title, any subtitle, the first sentence of each paragraph and the last paragraph. Write a two- or three-word summary beside each paragraph:</p>
<div class="example">A — history of bees in farming<br>B — why colonies collapse<br>C — robot pollinators: cost</div>
<p>These notes act as a map. When a question asks about cost, you already know to look at C.</p>
<h3>Scanning: finding something specific</h3>
<p>Scan for things that stand out on the page: names, dates, numbers, capital letters, technical words in italics. Move your eyes down the text without reading every word until you spot the target, then read that sentence and the ones around it carefully.</p>
<h3>The rule of three readings</h3>
<ol>
<li><strong>Skim</strong> the passage once (3 minutes).</li>
<li><strong>Scan</strong> for the location of each answer.</li>
<li><strong>Read closely</strong> only the two or three sentences around it.</li>
</ol>
<div class="note note--tip"><p>Practice: take any newspaper article, give yourself 90 seconds, then write one sentence saying what it argues. Check by reading it fully. Do one a day.</p></div>`,
  },
  {
    id: 'r-tfng',
    skill: 'reading',
    level: 2,
    title: 'True / False / Not Given without guessing',
    minutes: 15,
    body: `
<p>This is the question type candidates fear most, because the difference between FALSE and NOT GIVEN feels subtle. A clear test removes the guessing.</p>
<table>
<tr><th>Answer</th><th>Means</th></tr>
<tr><td><strong>TRUE</strong></td><td>The passage says the same thing, in different words.</td></tr>
<tr><td><strong>FALSE</strong></td><td>The passage says the <em>opposite</em>, or something that cannot be true at the same time.</td></tr>
<tr><td><strong>NOT GIVEN</strong></td><td>The passage does not say whether it is true or not. You cannot tell.</td></tr>
</table>
<h3>Worked example</h3>
<div class="example">Passage: "The bridge, completed in 1932, was at that time the longest of its kind in the southern hemisphere."</div>
<ul>
<li>"The bridge was finished in the 1930s." → <strong>TRUE</strong> (1932 is in the 1930s).</li>
<li>"The bridge was the longest in the world when it opened." → <strong>NOT GIVEN</strong> (only the southern hemisphere is mentioned; it might or might not have been the world's longest).</li>
<li>"Work on the bridge ended in 1928." → <strong>FALSE</strong> (it was completed in 1932).</li>
</ul>
<h3>Watch for qualifiers</h3>
<p>Words like <strong>all, only, always, never, most, some, the first, mainly</strong> change everything. "Most residents opposed the plan" is not the same as "all residents opposed the plan".</p>
<h3>Do not use your own knowledge</h3>
<p>If the statement is a well-known fact but the passage does not mention it, the answer is NOT GIVEN.</p>
<div class="note"><p><strong>Yes / No / Not Given</strong> works the same way, but tests the <em>writer's opinion</em> rather than facts. Look for opinion language: <em>I believe, arguably, it is a mistake to, sadly, rightly</em>.</p></div>`,
  },
  {
    id: 'r-headings',
    skill: 'reading',
    level: 2,
    title: 'Matching headings',
    minutes: 12,
    body: `
<p>Here you choose a heading for each paragraph from a list with more headings than paragraphs. The heading must summarise the <strong>whole paragraph</strong>, not one detail in it.</p>
<h3>A routine that works</h3>
<ol>
<li>Read all the headings first and note how they differ. Several will share a topic but differ in focus (causes vs effects, past vs future).</li>
<li>Read the paragraph. Ask: <em>what is this paragraph mainly doing?</em> Describing a problem? Comparing? Giving a history?</li>
<li>The main idea is often, but not always, in the first or last sentence.</li>
<li>Do the paragraphs you are most sure about first. Cross off headings as you use them.</li>
</ol>
<h3>The classic trap</h3>
<div class="example">Paragraph: "Several cities tried congestion charges. In London, traffic fell by 15% in the first year. Stockholm saw similar results. Yet in both cities, traffic gradually crept back as people adapted."</div>
<p>A heading like "London's success with congestion charging" matches a word in the paragraph but not its point. Better: "Early gains that did not last". The paragraph's message is in its final turn ("Yet...").</p>
<div class="note note--tip"><p>If two headings both seem to fit, look for the one that covers <em>every sentence</em> in the paragraph. The detail heading is the distractor.</p></div>`,
  },
  {
    id: 'r-paraphrase',
    skill: 'reading',
    level: 3,
    title: 'Paraphrase at band 7: tracking meaning, not words',
    minutes: 15,
    body: `
<p>At band 7 and above the questions rarely share words with the passage. You must recognise the same idea in a different form. There are five common types of paraphrase.</p>
<table>
<tr><th>Technique</th><th>Passage</th><th>Question</th></tr>
<tr><td>Synonym</td><td>a <em>substantial</em> rise</td><td>a <em>significant</em> increase</td></tr>
<tr><td>Word form</td><td>the <em>expansion</em> of the port</td><td>the port <em>expanded</em></td></tr>
<tr><td>Active ↔ passive</td><td>farmers abandoned the land</td><td>the land was left by farmers</td></tr>
<tr><td>Opposite + negative</td><td>it is <em>rarely</em> seen</td><td>it is <em>not common</em></td></tr>
<tr><td>General ↔ specific</td><td>apples, pears and plums</td><td>fruit</td></tr>
</table>
<h3>Paraphrases that hide a change</h3>
<p>Be suspicious when the question looks almost identical to the passage. Often one small word has been changed to make it FALSE: <em>increase → decrease, before → after, some → all, may → will</em>.</p>
<h3>Reference words</h3>
<p>Many answers sit across two sentences linked by <strong>this, these, such, the former, the latter, it, they</strong>. Always check what the reference word points back to.</p>
<div class="example">"The second method relied on satellite images. <strong>This</strong> proved far cheaper than the aerial surveys used previously."<br>→ Satellite imaging was less expensive than aerial surveys. <strong>TRUE</strong></div>
<h3>Build the skill</h3>
<p>Each time you check practice answers, copy the passage sentence and the question side by side and label the paraphrase type. Ten minutes a day for two weeks makes a visible difference.</p>`,
  },
  {
    id: 'r-timing',
    skill: 'reading',
    level: 3,
    title: 'Timing: 40 questions in 60 minutes',
    minutes: 10,
    body: `
<p>Most candidates who can read at band 7 lose that band to time, not to difficulty. Plan your hour before you sit down.</p>
<table>
<tr><th>Passage</th><th>Target time</th><th>Why</th></tr>
<tr><td>1</td><td>17 minutes</td><td>The easiest. Bank time here.</td></tr>
<tr><td>2</td><td>20 minutes</td><td>Medium.</td></tr>
<tr><td>3</td><td>23 minutes</td><td>The longest and most abstract, often with Yes/No/Not Given.</td></tr>
</table>
<h3>Rules for staying on schedule</h3>
<ul>
<li><strong>The 90-second rule.</strong> If one question has taken 90 seconds, choose your best guess, mark it, and move on.</li>
<li><strong>Never leave a blank.</strong> There is no penalty for wrong answers.</li>
<li><strong>Do headings questions after the other questions for that passage</strong> when the order allows it: by then you understand the paragraphs.</li>
<li><strong>Write answers on the answer sheet as you go.</strong> There is no transfer time in Reading.</li>
</ul>
<div class="note note--tip"><p>Under timed conditions, accuracy drops by about 10% for most people. If you score 33/40 untimed, expect about 30 timed. Practise timed from week 6 of the plan.</p></div>`,
  },
];
