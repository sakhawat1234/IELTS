// Writing lessons. Band descriptions are plain-English summaries written
// for learners, not the official descriptor text.

export default [
  // ------------------------------------------------------------ Know the test
  {
    id: 'w-criteria',
    skill: 'writing',
    module: 'Know the test',
    level: 1,
    title: 'What examiners mark: the four criteria',
    minutes: 25,
    body: `
<p>Writing lasts <strong>60 minutes</strong> for two tasks. <strong>Task 1</strong> (Academic) asks you to describe a graph, table, chart, map or process in <strong>at least 150 words</strong>, in about 20 minutes. <strong>Task 2</strong> is an essay of <strong>at least 250 words</strong>, in about 40 minutes. <strong>Task 2 counts twice as much as Task 1</strong>, so never let Task 1 eat into its time.</p>
<p>Each task is marked on four criteria of equal weight. The table below shows, in plain English, what changes between band 6 and band 8.</p>
<div class="table-scroll"><table>
<tr><th>Criterion</th><th>Band 6</th><th>Band 7</th><th>Band 8</th></tr>
<tr><td><strong>Task Achievement</strong> (Task 1)</td><td>Covers the task; an overview is attempted; some details may be irrelevant or inaccurate.</td><td>A <strong>clear overview</strong> of the main trends or differences; key features presented and highlighted, though they could be more fully extended.</td><td>All requirements covered well; key features clearly presented and highlighted.</td></tr>
<tr><td><strong>Task Response</strong> (Task 2)</td><td>All parts addressed, some more fully than others; a relevant position, but conclusions may be unclear; some ideas not developed enough.</td><td>All parts addressed; a <strong>clear position throughout</strong>; main ideas <strong>extended and supported</strong>, though some may over-generalise.</td><td>All parts addressed sufficiently; a well-developed response with relevant, extended, supported ideas.</td></tr>
<tr><td><strong>Coherence and Cohesion</strong></td><td>Organised and coherent, but linking may be mechanical or faulty; paragraphing not always logical.</td><td>Logical organisation with <strong>clear progression</strong>; a range of linking devices used appropriately; <strong>each paragraph has a clear central topic</strong>.</td><td>Information sequenced logically; cohesion managed well; paragraphing used sufficiently and appropriately.</td></tr>
<tr><td><strong>Lexical Resource</strong></td><td>Adequate range; tries less common words, with some mistakes in choice, spelling or word form.</td><td>Enough range for <strong>flexibility and precision</strong>; some less common words with awareness of style and <strong>collocation</strong>; occasional errors.</td><td>A wide range used fluently and flexibly; skilful use of uncommon words; rare errors.</td></tr>
<tr><td><strong>Grammatical Range and Accuracy</strong></td><td>A mix of simple and complex sentences; some errors, which rarely reduce understanding.</td><td>A <strong>variety of complex structures</strong>; <strong>frequent error-free sentences</strong>; good control, a few errors.</td><td>A wide range of structures; the majority of sentences are error-free; only occasional mistakes.</td></tr>
</table></div>
<h3>Rules that lower your score</h3>
<div class="note note--warn"><ul>
<li><strong>Under the word count</strong> (under 150 or 250 words) lowers your Task Achievement / Task Response score.</li>
<li><strong>Memorised language</strong> — whole sentences or paragraphs learned by heart — is not credited. Examiners are trained to spot it.</li>
<li><strong>Off-topic writing</strong> is penalised. An excellent essay on a slightly different question can score band 5 for Task Response.</li>
<li><strong>Copying the question</strong>: words copied from the task do not count towards the word count, and do not show your vocabulary.</li>
<li><strong>Bullet points and notes</strong> are not acceptable: write in full sentences and paragraphs.</li>
</ul></div>
<h3>The single biggest difference between band 6 and 7</h3>
<p>At band 6, ideas are relevant but <em>listed</em>: a main idea is stated and the paragraph moves on. At band 7, each main idea is <em>explained, supported and taken to its consequence</em>. See <a href="#/lesson/w-develop">Developing ideas fully</a>.</p>`,
    bn: 'রাইটিংয়ে ৬০ মিনিটে দুটি টাস্ক: টাস্ক ১-এ কমপক্ষে ১৫০ শব্দ (প্রায় ২০ মিনিট), টাস্ক ২-এ কমপক্ষে ২৫০ শব্দ (প্রায় ৪০ মিনিট)। টাস্ক ২-এর গুরুত্ব টাস্ক ১-এর দ্বিগুণ। চারটি মানদণ্ডে সমান নম্বর: টাস্কের উত্তর, সুসংগতি (Coherence & Cohesion), শব্দভান্ডার ও ব্যাকরণ। কম শব্দ, মুখস্থ বাক্য বা প্রশ্নের বাইরে লেখা স্কোর কমিয়ে দেয়।',
    glossary: [
      ['criterion / criteria', 'মানদণ্ড (একবচন / বহুবচন)'],
      ['overview', 'সার্বিক চিত্র / সংক্ষিপ্ত মূল প্রবণতা'],
      ['position', 'নিজের অবস্থান / মত'],
      ['coherence', 'যুক্তিসঙ্গত ধারাবাহিকতা'],
      ['cohesion', 'বাক্য ও অনুচ্ছেদের মধ্যে সংযোগ'],
      ['lexical resource', 'শব্দভান্ডার'],
      ['collocation', 'স্বাভাবিকভাবে একসঙ্গে ব্যবহৃত শব্দজোড়'],
      ['over-generalise', 'অতিরিক্ত সাধারণীকরণ করা'],
      ['memorised', 'মুখস্থ করা'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the correct answer.',
        items: [
          { q: 'Which task is worth more?', options: ['Task 1', 'Task 2, about twice as much', 'They are equal'], answer: 'B', explain: 'Task 2 contributes twice as much as Task 1.' },
          { q: 'What does Task 1 need for band 7 in Task Achievement?', options: ['an opinion about the data', 'a clear overview of the main trends', 'every number in the chart'], answer: 'B', explain: 'A clear overview is the key band 7 feature. Opinions are not asked for.' },
          { q: 'A candidate writes a 230-word Task 2 essay. What happens?', options: ['Nothing; quality matters more.', 'The Task Response score is lowered.', 'The essay is not marked.'], answer: 'B', explain: 'Under-length answers lose marks in Task Response.' },
          { q: 'Which is most typical of band 7 Task Response?', options: ['Many ideas, each in one sentence', 'Fewer ideas, each extended and supported', 'A memorised introduction'], answer: 'B', explain: 'Band 7 extends and supports main ideas.' },
        ],
      },
    ],
  },
  {
    id: 'w-sentences',
    skill: 'writing',
    module: 'Know the test',
    level: 1,
    title: 'Sentence building: from simple to complex',
    minutes: 20,
    body: `
<p>Grammatical Range is marked partly on whether you can join ideas into complex sentences. Learn these six patterns and you have the base for band 7.</p>
<h3>1. Join two ideas with a conjunction</h3>
<div class="example">Cars are convenient. They pollute the air. → Cars are convenient, <strong>but</strong> they pollute the air.</div>
<h3>2. Show cause: because / since / as</h3>
<div class="example">Many young people move to Dhaka <strong>because</strong> jobs are concentrated there.</div>
<h3>3. Add information: relative clauses</h3>
<div class="example">Students <strong>who work part-time</strong> often manage their time well.<br>The metro rail, <strong>which opened in 2022</strong>, has shortened many journeys.</div>
<h3>4. Show a condition: if / unless / provided that</h3>
<div class="example"><strong>If</strong> governments taxed sugary drinks, consumption <strong>would</strong> probably fall.</div>
<h3>5. Show contrast: although / while / whereas</h3>
<div class="example"><strong>Although</strong> online courses are cheaper, many learners miss the discipline of a classroom.</div>
<h3>6. Show purpose and result: so that / so … that / which means that</h3>
<div class="example">Fares were reduced <strong>so that</strong> more people would use the service.<br>Traffic was <strong>so</strong> heavy <strong>that</strong> the journey took three hours.</div>
<h3>Errors to remove now</h3>
<div class="compare">
<div class="weak"><h4>Avoid</h4><p>Because the price is high. Many people cannot buy it.</p><p>Although it is expensive, but it is popular.</p><p>The people they are living in cities have more stress.</p><p>Pollution is increasing, people are getting sick. (comma splice)</p></div>
<div class="strong"><h4>Write</h4><p>Because the price is high, many people cannot buy it.</p><p>Although it is expensive, it is popular.</p><p>People who live in cities have more stress.</p><p>Pollution is increasing, and people are getting sick.</p></div>
</div>
<div class="note"><p><strong>"Although … but"</strong> is the most common error among Bangladeshi candidates, because Bangla uses <em>যদিও … তবুও</em>. In English, use only one: <em>Although</em> X, Y — or X, <em>but</em> Y.</p></div>`,
    bn: 'জটিল বাক্য গঠন ব্যাকরণের স্কোর বাড়ায়। because, which, if, although, so that দিয়ে দুটি ধারণা যুক্ত করা শিখুন। বাংলায় "যদিও… তবুও" বলা হয়, কিন্তু ইংরেজিতে Although আর but একসঙ্গে ব্যবহার করা যায় না — যেকোনো একটি ব্যবহার করুন।',
    glossary: [
      ['conjunction', 'সংযোজক অব্যয়'],
      ['relative clause', 'সম্বন্ধবাচক উপবাক্য (who, which…)'],
      ['condition', 'শর্ত'],
      ['contrast', 'বৈপরীত্য'],
      ['comma splice', 'শুধু কমা দিয়ে দুটি পূর্ণ বাক্য জোড়ার ভুল'],
      ['consumption', 'ভোগ / ব্যবহার'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the correct sentence.',
        items: [
          { q: '', options: ['Although the city is crowded, but many people want to live there.', 'Although the city is crowded, many people want to live there.', 'Although the city is crowded. Many people want to live there.'], answer: 'B', explain: 'Use although OR but, not both; a subordinate clause cannot stand alone.' },
          { q: '', options: ['Students who they study abroad gain independence.', 'Students who study abroad gain independence.', 'Students which study abroad gain independence.'], answer: 'B', explain: '"who" replaces "they"; use who for people.' },
          { q: '', options: ['Prices rose, demand fell.', 'Prices rose, so demand fell.', 'Prices rose so, demand fell.'], answer: 'B', explain: 'Two clauses need a conjunction (so), not just a comma.' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ Task 1
  {
    id: 'w-task1',
    skill: 'writing',
    module: 'Task 1',
    level: 2,
    title: 'Task 1: structure and the overview',
    minutes: 20,
    body: `
<p>Academic Task 1 asks you to <strong>summarise</strong> visual information: select the main features, report them and make comparisons. You do not give opinions, reasons or predictions that the chart does not show. The most important sentence is the <strong>overview</strong>: without a clear one, Task Achievement is very unlikely to reach band 7.</p>
<h3>A four-paragraph structure (150–190 words)</h3>
<ol>
<li><strong>Introduction</strong> (1 sentence): paraphrase what the chart shows — <em>what, where, when, unit</em>. Do not copy the question.</li>
<li><strong>Overview</strong> (1–2 sentences): the two or three things a reader should notice first. <strong>No numbers</strong> needed. Begin with <em>Overall, …</em></li>
<li><strong>Detail paragraph 1</strong>: a group of related information, with numbers and comparisons.</li>
<li><strong>Detail paragraph 2</strong>: the remaining key features, with numbers and comparisons.</li>
</ol>
<p>No conclusion is needed: the overview does that job. If you prefer to put the overview at the end, that is acceptable — but it must be there.</p>
<h3>Paraphrasing the question</h3>
<div class="compare">
<div><h4>Question</h4><p>The graph below shows the number of tourists visiting three countries between 2010 and 2020.</p></div>
<div><h4>Introduction</h4><p>The line graph compares how many tourists travelled to three countries over the decade from 2010 to 2020.</p></div>
</div>
<h3>What goes in the overview?</h3>
<ul>
<li>The overall direction of change (rising, falling, stable, fluctuating)</li>
<li>The highest and lowest categories</li>
<li>Any crossing point, reversal or striking exception</li>
<li>Processes: how many stages, where it starts and ends</li>
<li>Maps: the most significant changes (e.g. the area became more residential)</li>
</ul>
<h3>Selecting data</h3>
<p>You cannot (and should not) mention every number. Choose: starting and ending figures, highest and lowest points, turning points, and anything unusual. Group similar categories together instead of describing each one separately.</p>
<div class="note note--warn"><p>Do not explain causes ("because people became richer"). The chart does not show causes, and adding them is irrelevant information.</p></div>`,
    bn: 'টাস্ক ১-এ চিত্রের তথ্য সংক্ষেপে বর্ণনা করতে হয়, নিজের মত বা কারণ লেখা যাবে না। কাঠামো: ভূমিকা (প্রশ্নটি নিজের ভাষায়), overview (প্রধান প্রবণতা, সংখ্যা ছাড়া), এবং দুটি বিবরণ অনুচ্ছেদ (সংখ্যা ও তুলনাসহ)। স্পষ্ট overview ছাড়া ব্যান্ড ৭ পাওয়া প্রায় অসম্ভব।',
    glossary: [
      ['summarise', 'সংক্ষেপে উপস্থাপন করা'],
      ['main features', 'প্রধান বৈশিষ্ট্য'],
      ['trend', 'প্রবণতা'],
      ['reversal', 'উল্টে যাওয়া'],
      ['turning point', 'মোড় ঘোরার বিন্দু'],
      ['residential', 'আবাসিক'],
      ['irrelevant', 'অপ্রাসঙ্গিক'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best answer.',
        items: [
          { q: 'Which is the best overview sentence?', options: ['In 2010, Country A had 2 million tourists.', 'Overall, tourist numbers rose in all three countries, with Country A remaining the most popular destination throughout.', 'Tourism increased because flights became cheaper.'], answer: 'B', explain: 'An overview summarises the main trends without detail. Option C gives a cause, which the chart cannot show.' },
          { q: 'Where should numbers mainly appear?', options: ['in the overview', 'in the detail paragraphs', 'in the conclusion'], answer: 'B', explain: 'Numbers support the detail paragraphs.' },
          { q: 'How many words should you aim for?', options: ['about 100', 'about 160–190', 'about 300'], answer: 'B', explain: 'At least 150; around 170–190 is ideal without wasting Task 2 time.' },
        ],
      },
    ],
  },
  {
    id: 'w-t1-language',
    skill: 'writing',
    module: 'Task 1',
    level: 2,
    title: 'Task 1 language: change, comparison and approximation',
    minutes: 25,
    body: `
<p>Task 1 Lexical Resource and Grammatical Range depend on describing data precisely and with variety. Learn these four toolkits.</p>
<h3>1. Change over time</h3>
<table>
<tr><th>Verb (+ adverb)</th><th>Noun (+ adjective)</th></tr>
<tr><td>rose / increased / grew / climbed</td><td>a rise / an increase / growth</td></tr>
<tr><td>fell / decreased / declined / dropped</td><td>a fall / a decrease / a decline / a drop</td></tr>
<tr><td>remained stable / stayed constant / levelled off</td><td>a period of stability</td></tr>
<tr><td>fluctuated (between X and Y)</td><td>fluctuations</td></tr>
<tr><td>peaked at / reached a peak of</td><td>a peak</td></tr>
<tr><td>hit a low of / bottomed out at</td><td>a low point</td></tr>
</table>
<p><strong>Degree:</strong> dramatically · sharply · significantly · considerably · steadily · gradually · moderately · slightly · marginally</p>
<p>Two structures for variety:</p>
<div class="example">Sales <strong>rose sharply</strong> to 500 units. &nbsp;→&nbsp; There was <strong>a sharp rise</strong> in sales, to 500 units.</div>
<h3>2. Prepositions with numbers</h3>
<table>
<tr><th>Preposition</th><th>Meaning</th><th>Example</th></tr>
<tr><td>to</td><td>the new level</td><td>rose to 40%</td></tr>
<tr><td>by</td><td>the amount of change</td><td>rose by 10 percentage points</td></tr>
<tr><td>from … to</td><td>start and end</td><td>fell from 60 to 45</td></tr>
<tr><td>at</td><td>a point</td><td>peaked at 80</td></tr>
<tr><td>of</td><td>after a noun</td><td>a rise of 10% · a peak of 80</td></tr>
</table>
<h3>3. Comparison</h3>
<ul>
<li>Men spent <strong>more</strong> time on sport <strong>than</strong> women.</li>
<li>Exports were <strong>almost as high as</strong> imports.</li>
<li>Women read for <strong>twice as long as</strong> men. · <strong>three times</strong> higher than</li>
<li>Germany had <strong>by far the highest</strong> figure.</li>
<li>Sales rose in Europe, <strong>whereas / while</strong> they fell in Asia.</li>
<li><strong>Compared with</strong> 2010, the figure in 2020 was 30% higher.</li>
</ul>
<h3>4. Approximation and proportion</h3>
<table>
<tr><th>Number</th><th>Say</th></tr>
<tr><td>49%</td><td>just under half · nearly half · almost half</td></tr>
<tr><td>52%</td><td>just over half · slightly more than half</td></tr>
<tr><td>25%</td><td>a quarter · one in four</td></tr>
<tr><td>33%</td><td>a third · one in three</td></tr>
<tr><td>75%</td><td>three quarters</td></tr>
<tr><td>80–90%</td><td>the vast majority</td></tr>
<tr><td>10%</td><td>one in ten · a small minority</td></tr>
</table>
<div class="note note--warn"><p><strong>Percentage vs percentage point:</strong> a rise from 20% to 30% is a rise of <em>10 percentage points</em> — but a rise of <em>50 percent</em>. Band 7 writers use these correctly.</p></div>`,
    bn: 'টাস্ক ১-এ পরিবর্তন বোঝাতে rise, fall, fluctuate, peak; মাত্রা বোঝাতে sharply, gradually, slightly ব্যবহার করুন। to (নতুন মান), by (পরিবর্তনের পরিমাণ), from…to (শুরু ও শেষ) — এই preposition-গুলো সঠিকভাবে ব্যবহার করুন। ২৫% = a quarter, ৩৩% = a third, ৪৯% = just under half।',
    glossary: [
      ['fluctuate', 'ওঠানামা করা'],
      ['peak', 'সর্বোচ্চ বিন্দু'],
      ['level off', 'স্থির হয়ে আসা'],
      ['gradually', 'ধীরে ধীরে'],
      ['dramatically', 'নাটকীয়ভাবে / ব্যাপকভাবে'],
      ['marginally', 'খুব সামান্য'],
      ['proportion', 'অনুপাত / অংশ'],
      ['percentage point', 'শতাংশ বিন্দু (দুটি শতাংশের পার্থক্য)'],
      ['the vast majority', 'বিপুল সংখ্যাগরিষ্ঠ অংশ'],
    ],
    practice: [
      {
        type: 'gap',
        instructions: 'Complete each sentence with ONE word.',
        limit: 'ONE WORD',
        maxWords: 1,
        items: [
          { q: 'Unemployment fell ___ 8% to 5% between 2015 and 2020.', answer: 'from', explain: 'from … to shows the start and end points.' },
          { q: 'The price rose ___ £20, from £80 to £100.', answer: 'by', explain: '"by" shows the amount of change.' },
          { q: 'Visitor numbers peaked ___ 2 million in 2019.', answer: 'at', explain: 'peak at + number.' },
          { q: '24% of respondents is roughly a ___ of the total.', answer: 'quarter', explain: '25% = a quarter.' },
          { q: 'There was a slight ___ in sales in March. (noun form of "fall")', answer: ['fall', 'drop', 'decline', 'decrease'], explain: 'Any noun meaning a decrease works: fall, drop, decline, decrease.' },
        ],
      },
    ],
  },
  {
    id: 'w-t1-line',
    skill: 'writing',
    module: 'Task 1',
    level: 2,
    title: 'Line graphs',
    minutes: 20,
    body: `
<p>Line graphs show change over time. Your job is to describe the <strong>overall trends</strong> and the <strong>most important movements</strong>, comparing the lines.</p>
<h3>Plan in three minutes</h3>
<ol>
<li>What does each line show? What are the units (%, millions, tonnes)? What is the time period?</li>
<li>What is the overall direction of each line? Which line is highest and lowest?</li>
<li>Are there crossing points, peaks or sudden changes?</li>
<li>Group the lines: lines that behave similarly go in the same paragraph.</li>
</ol>
<h3>Tense</h3>
<p>Past dates → past simple (<em>rose, fell</em>). Future projections → <em>is expected to, is projected to, is predicted to</em>. A range running up to now → present perfect may be used.</p>
<h3>Model paragraph</h3>
<div class="example">In 2008, around a third of 18- to 34-year-olds (32%) banked online, compared with a fifth of those aged 35 to 54 and just 6% of people over 55. Usage among the two younger groups then climbed steadily, reaching 72% and 58% respectively by 2017. The over-55s, however, saw the most dramatic change after this point, their figure almost doubling to 41% in 2020.</div>
<p>Notice: start and end figures, a grouping (the two younger groups), "respectively", a contrast ("however"), and a calculated comparison ("almost doubling").</p>
<p>Practise with the full task: <a href="#/writing/t1-banking">Online banking line graph</a>.</p>`,
    bn: 'লাইন গ্রাফে সময়ের সঙ্গে পরিবর্তন দেখানো হয়। প্রতিটি লাইনের সার্বিক দিক, সর্বোচ্চ-সর্বনিম্ন মান ও লাইনগুলো কোথায় পরস্পরকে অতিক্রম করেছে তা লিখুন। একই রকম আচরণ করা লাইনগুলো একই অনুচ্ছেদে রাখুন। অতীতের সালের জন্য past simple, ভবিষ্যতের পূর্বাভাসের জন্য "is expected to" ব্যবহার করুন।',
    glossary: [
      ['unit', 'একক (%, টন, মিলিয়ন)'],
      ['respectively', 'যথাক্রমে'],
      ['projection', 'পূর্বাভাস / প্রক্ষেপণ'],
      ['steadily', 'স্থিরভাবে / ধারাবাহিকভাবে'],
      ['overtake', 'ছাড়িয়ে যাওয়া'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best sentence.',
        items: [
          { q: 'Line A: 20 (2000) → 60 (2020). Line B: 50 → 40.', options: ['Line A rose and Line B rose.', 'While Line A tripled to 60, Line B declined slightly to 40.', 'Line A was 20, 30, 40, 50 and 60.'], answer: 'B', explain: 'It compares the lines with a calculated change.' },
          { q: 'A projection for 2030:', options: ['The figure rose to 80% in 2030.', 'The figure is expected to reach 80% by 2030.', 'The figure has reached 80% in 2030.'], answer: 'B', explain: 'Future projections use "is expected to".' },
          { q: 'Line A was lower than Line B until 2012, then higher.', options: ['Line A overtook Line B in 2012.', 'Line A was overtaken in 2012.', 'Line A and B were the same.'], answer: 'A', explain: 'A overtook B (passed it).' },
        ],
      },
    ],
  },
  {
    id: 'w-t1-bar',
    skill: 'writing',
    module: 'Task 1',
    level: 2,
    title: 'Bar charts',
    minutes: 20,
    body: `
<p>Bar charts compare categories, sometimes over time. First decide which kind you have:</p>
<ul>
<li><strong>No time element</strong> (one year only): use the language of <strong>comparison</strong> — highest, lowest, twice as many, whereas.</li>
<li><strong>With a time element</strong> (several years): use the language of <strong>change</strong> too, as for a line graph.</li>
</ul>
<h3>Grouping is everything</h3>
<p>A bar chart with eight categories and two groups (men/women) contains 16 numbers. A band 7 answer does not list all 16. Instead:</p>
<ul>
<li>Paragraph 1: the categories where the two groups differ most.</li>
<li>Paragraph 2: the categories where they are similar, plus the largest and smallest.</li>
</ul>
<h3>Model overview and detail</h3>
<div class="example">Overall, watching television or streaming was by far the most time-consuming activity for both sexes, while reading occupied the least time. Men spent more time than women on screen viewing and exercise, whereas women devoted more hours to socialising and reading.<br><br>
The gender differences were most pronounced in reading and socialising. Women read for twice as long as men, at four hours compared with two, and spent eight hours socialising, two more than men.</div>
<p>Practise: <a href="#/writing/t1-leisure">Leisure time bar chart</a>.</p>`,
    bn: 'বার চার্টে বিভিন্ন শ্রেণির তুলনা করা হয়। সময়ের উল্লেখ না থাকলে শুধু তুলনার ভাষা (highest, twice as many, whereas), আর সময়ের উল্লেখ থাকলে পরিবর্তনের ভাষাও ব্যবহার করুন। সব সংখ্যা তালিকাভুক্ত না করে মিল ও অমিল অনুযায়ী তথ্যগুলো দলবদ্ধ করুন।',
    glossary: [
      ['category', 'শ্রেণি / বিভাগ'],
      ['pronounced', 'সুস্পষ্ট'],
      ['time-consuming', 'সময়সাপেক্ষ'],
      ['devote (time) to', '(সময়) ব্যয় করা'],
      ['gender', 'লিঙ্গ'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best sentence.',
        items: [
          { q: 'Data: Dhaka 18m, Chattogram 5m, Khulna 1.5m (population, one year).', options: ['Dhaka had the largest population, more than three times that of Chattogram.', 'The population of Dhaka rose to 18 million.', 'Dhaka was 18, Chattogram was 5 and Khulna was 1.5.'], answer: 'A', explain: 'One year only: compare, do not describe change.' },
          { q: 'Which is a good way to organise a bar chart with many categories?', options: ['one sentence per bar, left to right', 'group categories by similarity or difference', 'only describe the largest bar'], answer: 'B', explain: 'Grouping shows selection and comparison.' },
        ],
      },
    ],
  },
  {
    id: 'w-t1-pie',
    skill: 'writing',
    module: 'Task 1',
    level: 2,
    title: 'Pie charts',
    minutes: 20,
    body: `
<p>Pie charts show <strong>proportions of a whole</strong>. Often there are two or more pies (different years or different places) to compare.</p>
<h3>Key language</h3>
<ul>
<li><strong>Proportion words:</strong> accounted for · made up · comprised · represented · constituted · the largest share · the smallest segment</li>
<li><strong>Fractions:</strong> a quarter · a third · nearly half · the majority · a small minority</li>
<li><strong>Change between pies:</strong> the share of X rose from 20% to 35% · X's proportion halved · X overtook Y as the largest category</li>
</ul>
<h3>Structure for two pies</h3>
<ol>
<li>Introduction: what the pies show, where and when.</li>
<li>Overview: the largest category in each, and the biggest change.</li>
<li>Detail 1: the categories that grew.</li>
<li>Detail 2: the categories that shrank or stayed the same.</li>
</ol>
<div class="example">In 2000, coal accounted for just over half of electricity generation (52%), while renewables made up a mere 4%. By 2020, however, the share of coal had fallen to a third, and renewables had grown to almost a fifth (19%).</div>
<div class="note note--warn"><p>Avoid "the percentage of coal was 52%" — it is circular. Write "coal accounted for 52%" or "52% of electricity came from coal".</p></div>`,
    bn: 'পাই চার্ট একটি সম্পূর্ণ অংশের ভাগ (অনুপাত) দেখায়। accounted for, made up, the largest share, a quarter, nearly half — এ ধরনের শব্দ ব্যবহার করুন। একাধিক পাই চার্ট থাকলে কোন অংশ বেড়েছে আর কোনটি কমেছে তা দুটি আলাদা অনুচ্ছেদে লিখুন।',
    glossary: [
      ['proportion', 'অনুপাত'],
      ['share', 'অংশ / ভাগ'],
      ['account for', 'অংশ নেওয়া / গঠন করা (… এর ভাগ)'],
      ['segment', 'অংশ / খণ্ড'],
      ['renewables', 'নবায়নযোগ্য জ্বালানি'],
      ['halve', 'অর্ধেক হওয়া'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best sentence.',
        items: [
          { q: 'Transport: 34% of household spending.', options: ['The percentage of transport was 34%.', 'Transport accounted for about a third of household spending.', 'Transport spending increased to 34%.'], answer: 'B', explain: 'One pie, no change: use proportion language.' },
          { q: 'Pie 1 (1990): Rice 60%. Pie 2 (2020): Rice 30%.', options: ['The share of rice halved, from 60% to 30%.', 'Rice doubled from 60% to 30%.', 'Rice was 60% and 30%.'], answer: 'A', explain: '60% → 30% = halved.' },
        ],
      },
    ],
  },
  {
    id: 'w-t1-table',
    skill: 'writing',
    module: 'Task 1',
    level: 2,
    title: 'Tables',
    minutes: 20,
    body: `
<p>Tables often contain many numbers, which tempts candidates to copy them all. The task is the same as for a chart: <strong>select, group and compare</strong>.</p>
<h3>Find the story in three minutes</h3>
<ol>
<li>Read the row and column headings and the units.</li>
<li>Highlight the <strong>highest and lowest</strong> value in each column.</li>
<li>Look along each row: rising, falling or mixed?</li>
<li>Look for one row or column that behaves differently from the rest — this is often your most interesting detail.</li>
</ol>
<h3>Ways to group a table</h3>
<ul>
<li>by category (all the rising countries together, all the falling ones together)</li>
<li>by size (the three largest, then the rest)</li>
<li>by time (the first period, then the second)</li>
</ul>
<div class="example">Overall, spending on healthcare rose in every country listed, while spending on defence fell in all except Country D. Country A consistently spent the most on education.</div>
<p>Numbers should be selected to support the overview, not to show you read every cell.</p>`,
    bn: 'টেবিলে অনেক সংখ্যা থাকে, কিন্তু সব কপি করবেন না। প্রতিটি কলামের সর্বোচ্চ ও সর্বনিম্ন মান চিহ্নিত করুন, সারিগুলো বাড়ছে না কমছে দেখুন, আর ব্যতিক্রমী সারি বা কলাম খুঁজুন। তথ্য বিভাগ, আকার বা সময় অনুযায়ী দলবদ্ধ করুন।',
    glossary: [
      ['row / column', 'সারি / কলাম'],
      ['consistently', 'ধারাবাহিকভাবে'],
      ['defence', 'প্রতিরক্ষা'],
      ['expenditure', 'ব্যয়'],
      ['exception', 'ব্যতিক্রম'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best answer.',
        items: [
          { q: 'A table shows 6 countries × 4 years. What is the best plan?', options: ['describe each country, year by year', 'group countries with similar trends and mention the extremes', 'only describe the first year'], answer: 'B', explain: 'Grouping and extremes show selection.' },
          { q: 'Five rows rise; one row falls. The falling row is:', options: ['unimportant', 'a key feature worth mentioning', 'an error in the table'], answer: 'B', explain: 'Exceptions are key features.' },
        ],
      },
    ],
  },
  {
    id: 'w-t1-mixed',
    skill: 'writing',
    module: 'Task 1',
    level: 3,
    title: 'Mixed charts (two different visuals)',
    minutes: 15,
    body: `
<p>Some tasks combine two visuals — for example a line graph and a pie chart, or a table and a bar chart. They are usually connected: one gives the overall picture, the other a breakdown.</p>
<h3>How to handle them</h3>
<ol>
<li>Work out the <strong>link</strong>: does one chart explain part of the other? Do they show the same thing in different years?</li>
<li>Write <strong>one overview that covers both</strong>: one main feature from each.</li>
<li>Use <strong>one detail paragraph per chart</strong>, roughly equal in length.</li>
<li>If there is a clear connection, mention it ("The rise shown in the graph was driven mainly by…" only if the second chart shows this).</li>
</ol>
<div class="example">Overall, the total number of international students grew steadily over the period, and Asia remained by far the largest source region in 2020.</div>
<p>Keep to 170–200 words: two visuals do not mean twice the length.</p>`,
    bn: 'মিশ্র চার্টে দুটি ভিন্ন চিত্র থাকে (যেমন লাইন গ্রাফ ও পাই চার্ট)। দুটির মধ্যে সম্পর্ক খুঁজুন, এমন একটি overview লিখুন যা দুটিকেই অন্তর্ভুক্ত করে, এবং প্রতিটি চার্টের জন্য একটি করে বিবরণ অনুচ্ছেদ লিখুন।',
    glossary: [
      ['breakdown', 'বিস্তারিত বিভাজন'],
      ['source region', 'উৎস অঞ্চল'],
      ['combine', 'একত্র করা'],
      ['connection', 'সংযোগ'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best answer.',
        items: [
          { q: 'A line graph and a pie chart are given. The overview should:', options: ['describe only the line graph', 'include a main feature from each chart', 'be left out because there are two charts'], answer: 'B', explain: 'One overview covering both visuals.' },
          { q: 'How long should a mixed-chart answer be?', options: ['about 170–200 words', 'about 300 words', 'exactly 150 words'], answer: 'A', explain: 'Two charts do not double the length.' },
        ],
      },
    ],
  },
  {
    id: 'w-t1-process',
    skill: 'writing',
    module: 'Task 1',
    level: 3,
    title: 'Processes and diagrams',
    minutes: 20,
    body: `
<p>A process diagram shows how something is made or how something works — natural (the water cycle, the life cycle of an insect) or man-made (producing tea, recycling glass).</p>
<h3>Plan</h3>
<ol>
<li>Count the stages. Find where the process <strong>begins and ends</strong>, and whether it is a cycle.</li>
<li>Read every label and use the vocabulary given — you may change its form (<em>harvest → harvested</em>).</li>
<li>Split the stages into two roughly equal groups for two detail paragraphs.</li>
</ol>
<h3>Grammar: the passive voice</h3>
<p>Man-made processes are usually described in the passive: the action matters more than who does it.</p>
<div class="example">The leaves <strong>are picked</strong> by hand and then <strong>dried</strong> in the sun. After that, they <strong>are crushed</strong> and <strong>packed</strong> into tins.</div>
<p>Natural processes usually use the active: <em>The larva <strong>feeds</strong> on leaves for three weeks.</em></p>
<h3>Sequencing language</h3>
<p>First / To begin with · Next / Then / After that / Subsequently · Once / After / When + clause · At the same time · Finally / In the final stage</p>
<div class="example"><strong>Once</strong> the glass has been sorted by colour, it <strong>is crushed</strong>. <strong>At this stage</strong>, it <strong>is</strong> also <strong>cleaned</strong> to remove labels.</div>
<h3>Overview for a process</h3>
<div class="example">Overall, there are six main stages in the process, beginning with the collection of rainwater from the roof and ending with its use in the house.</div>
<p>Practise: <a href="#/writing/t1-rainwater">Rainwater harvesting process</a>.</p>`,
    bn: 'প্রক্রিয়ার চিত্রে কোনো জিনিস কীভাবে তৈরি হয় বা কাজ করে তা দেখানো হয়। ধাপ গুনে নিন, শুরু ও শেষ খুঁজে নিন। মানুষের তৈরি প্রক্রিয়ায় passive voice (is picked, are dried) এবং ধাপ বোঝাতে First, Next, After that, Finally ব্যবহার করুন। প্রাকৃতিক প্রক্রিয়ায় সাধারণত active voice।',
    glossary: [
      ['stage', 'ধাপ'],
      ['cycle', 'চক্র'],
      ['passive voice', 'কর্মবাচ্য'],
      ['harvest', 'ফসল তোলা'],
      ['crush', 'গুঁড়ো করা / পিষে ফেলা'],
      ['sort', 'বাছাই করা / শ্রেণি অনুযায়ী ভাগ করা'],
      ['larva', 'শূককীট / লার্ভা'],
    ],
    practice: [
      {
        type: 'gap',
        instructions: 'Write the verb in the passive (present simple).',
        limit: 'NO MORE THAN TWO WORDS',
        maxWords: 2,
        items: [
          { q: 'First, the cotton ___ (pick) by hand.', answer: 'is picked', explain: 'is + past participle.' },
          { q: 'The seeds ___ (remove) by a machine.', answer: 'are removed', explain: 'Plural subject: are removed.' },
          { q: 'Finally, the cloth ___ (dye) and dried.', answer: 'is dyed', explain: 'is dyed.' },
        ],
      },
    ],
  },
  {
    id: 'w-t1-map',
    skill: 'writing',
    module: 'Task 1',
    level: 3,
    title: 'Maps',
    minutes: 20,
    body: `
<p>Map tasks usually show the same place at two times (a village in 1990 and today), or a plan for future development. You describe the <strong>main changes</strong>.</p>
<h3>Plan</h3>
<ol>
<li>Compare the maps and list what was <strong>added, removed, replaced, expanded, relocated</strong> or <strong>kept</strong>.</li>
<li>Decide the big picture for the overview: Did the area become more urban? More residential? Did it lose green space?</li>
<li>Organise the details by area (north/south) or by type (housing, roads, leisure).</li>
</ol>
<h3>Language of change on maps</h3>
<table>
<tr><th>Change</th><th>Language (often passive)</th></tr>
<tr><td>added</td><td>a car park <strong>was built / constructed</strong> · a school <strong>was added</strong></td></tr>
<tr><td>removed</td><td>the trees <strong>were cut down / cleared</strong> · the factory <strong>was demolished</strong></td></tr>
<tr><td>changed</td><td>the farmland <strong>was converted into</strong> housing · the shop <strong>was replaced by</strong> a café</td></tr>
<tr><td>bigger</td><td>the hospital <strong>was extended / expanded</strong></td></tr>
<tr><td>moved</td><td>the bus station <strong>was relocated</strong> to the north</td></tr>
<tr><td>unchanged</td><td>the church <strong>remained</strong> in the same position</td></tr>
</table>
<h3>Location</h3>
<p>to the north of · in the south-east corner · alongside the river · opposite the park · adjacent to · on the outskirts of · in the centre</p>
<div class="example">Overall, the village was transformed from a farming community into a residential area, with most of the farmland replaced by housing and new roads.</div>`,
    bn: 'ম্যাপ টাস্কে একই এলাকার দুই সময়ের পরিবর্তন বর্ণনা করতে হয়: কী তৈরি হয়েছে (was built), কী ভাঙা হয়েছে (was demolished), কী রূপান্তরিত হয়েছে (was converted into), কী স্থানান্তরিত হয়েছে (was relocated)। overview-তে বড় পরিবর্তনটি বলুন, যেমন এলাকাটি কৃষিভিত্তিক থেকে আবাসিক হয়েছে।',
    glossary: [
      ['demolish', 'ভেঙে ফেলা'],
      ['convert into', 'রূপান্তরিত করা'],
      ['relocate', 'স্থানান্তর করা'],
      ['expand / extend', 'সম্প্রসারণ করা'],
      ['outskirts', 'শহরতলি / প্রান্ত এলাকা'],
      ['farmland', 'কৃষিজমি'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best verb.',
        items: [
          { q: 'The old cinema no longer exists; flats are in its place.', options: ['The cinema was relocated.', 'The cinema was replaced by flats.', 'The cinema was extended.'], answer: 'B', explain: 'replaced by = something new in the same place.' },
          { q: 'The library is in the same place but twice as big.', options: ['The library was expanded.', 'The library was demolished.', 'The library was converted.'], answer: 'A', explain: 'expanded = made bigger.' },
          { q: 'The market moved from the centre to the east.', options: ['The market was relocated to the east.', 'The market was cleared.', 'The market remained.'], answer: 'A', explain: 'relocated = moved to a new place.' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ Task 2
  {
    id: 'w-task2',
    skill: 'writing',
    module: 'Task 2',
    level: 2,
    title: 'Task 2: question types and essay structure',
    minutes: 25,
    body: `
<p>Task 2 questions come in five main types. Identify the type first: answering the wrong question is the fastest way to lose a band.</p>
<table>
<tr><th>Type</th><th>Recognise it by</th><th>You must</th><th>Lesson</th></tr>
<tr><td>Opinion</td><td>To what extent do you agree or disagree?</td><td>Give a clear position and keep it throughout.</td><td><a href="#/lesson/w-t2-opinion">Opinion</a></td></tr>
<tr><td>Discussion</td><td>Discuss both views and give your own opinion.</td><td>Explain both sides fairly and state your view.</td><td><a href="#/lesson/w-t2-discussion">Discussion</a></td></tr>
<tr><td>Problem / solution (causes / solutions)</td><td>What problems does this cause? What can be done?</td><td>Answer both questions with roughly equal weight.</td><td><a href="#/lesson/w-t2-problem">Problem/solution</a></td></tr>
<tr><td>Advantages / disadvantages</td><td>Do the advantages outweigh the disadvantages?</td><td>Weigh them and say which is greater.</td><td><a href="#/lesson/w-t2-advdis">Adv./disadv.</a></td></tr>
<tr><td>Two-part (direct) question</td><td>Why is this happening? Is this positive or negative?</td><td>Answer each question directly.</td><td><a href="#/lesson/w-t2-twopart">Two-part</a></td></tr>
</table>
<h3>The four-paragraph structure</h3>
<ol>
<li><strong>Introduction</strong> (2–3 sentences, 40–60 words): paraphrase the topic, then state your position or what the essay will do. <a href="#/lesson/w-t2-intro">Lesson</a></li>
<li><strong>Body paragraph 1</strong> (90–110 words): topic sentence → explanation → example → link back.</li>
<li><strong>Body paragraph 2</strong> (90–110 words): the same pattern for the second idea or the other side. <a href="#/lesson/w-develop">Lesson</a></li>
<li><strong>Conclusion</strong> (2 sentences, 30–40 words): restate your position in new words. No new ideas. <a href="#/lesson/w-t2-conclusion">Lesson</a></li>
</ol>
<p>Some essays (for example, a discussion where you take a third view) work better with five paragraphs. Four is the safe default.</p>
<h3>A 40-minute plan</h3>
<table>
<tr><th>Minutes</th><th>Step</th></tr>
<tr><td>0–5</td><td>Analyse the question; decide your position; plan two main ideas with an example each.</td></tr>
<tr><td>5–35</td><td>Write without stopping to rewrite.</td></tr>
<tr><td>35–40</td><td>Proofread: articles, plurals, subject–verb agreement, spelling, punctuation.</td></tr>
</table>`,
    bn: 'টাস্ক ২-এর পাঁচ ধরনের প্রশ্ন: মতামত (agree/disagree), আলোচনা (দুই পক্ষ + নিজের মত), সমস্যা-সমাধান, সুবিধা-অসুবিধা, এবং দুই অংশের প্রশ্ন। প্রথমে প্রশ্নের ধরন চিনুন। চার অনুচ্ছেদের কাঠামো: ভূমিকা, দুটি মূল অনুচ্ছেদ, উপসংহার। ৫ মিনিট পরিকল্পনা, ৩০ মিনিট লেখা, ৫ মিনিট সংশোধন।',
    glossary: [
      ['to what extent', 'কতটুকু / কোন মাত্রায়'],
      ['outweigh', 'বেশি গুরুত্বপূর্ণ হওয়া / ছাপিয়ে যাওয়া'],
      ['position', 'অবস্থান / মত'],
      ['topic sentence', 'অনুচ্ছেদের মূল বাক্য'],
      ['proofread', 'ভুল সংশোধনের জন্য আবার পড়া'],
      ['weight', 'গুরুত্ব'],
    ],
    practice: [
      {
        type: 'match',
        instructions: 'Which type is each question?',
        optionsTitle: 'Types',
        options: [
          { value: 'A', label: 'Opinion' },
          { value: 'B', label: 'Discussion' },
          { value: 'C', label: 'Problem / solution' },
          { value: 'D', label: 'Advantages / disadvantages' },
          { value: 'E', label: 'Two-part question' },
        ],
        items: [
          { q: 'Some say children should start school at four; others say seven. Discuss both views and give your opinion.', answer: 'B', explain: '"Discuss both views and give your opinion".' },
          { q: 'Many people now shop online. Do the advantages outweigh the disadvantages?', answer: 'D', explain: '"advantages outweigh the disadvantages".' },
          { q: 'Cities are becoming more crowded. What problems does this cause, and how can they be solved?', answer: 'C', explain: 'Problems + solutions.' },
          { q: 'Governments should spend more on public transport than on roads. To what extent do you agree?', answer: 'A', explain: '"To what extent do you agree".' },
          { q: 'More people are living alone. Why is this? Is it a positive or negative development?', answer: 'E', explain: 'Two direct questions.' },
        ],
      },
    ],
  },
  {
    id: 'w-t2-analyse',
    skill: 'writing',
    module: 'Task 2',
    level: 2,
    title: 'Analysing the question: staying on topic',
    minutes: 15,
    body: `
<p>Many band-5 and band-6 essays are well written but answer a <em>slightly different</em> question. Two minutes of analysis prevents this.</p>
<h3>Underline three things</h3>
<ol>
<li><strong>The topic</strong>: the broad area (e.g. education, technology).</li>
<li><strong>The focus</strong>: the specific angle (e.g. <em>university</em> education, <em>free</em> tuition, for <em>all</em> students).</li>
<li><strong>The instruction</strong>: what you must do (agree/disagree, discuss both, give solutions).</li>
</ol>
<div class="example">"Some people believe that university education should be <strong>free for all students</strong>, <strong>regardless of their family income</strong>. <strong>To what extent do you agree or disagree?</strong>"<br>
Topic: university education · Focus: free for <em>all</em>, <em>regardless of income</em> · Instruction: agree/disagree</div>
<p>An essay about why university is important, or about school education, is off-topic. A band 7 essay must deal with <em>free for everyone, including the rich</em>.</p>
<h3>Watch the small words</h3>
<p><strong>all / some · only · always · should / must · more than · in your country</strong> — each one narrows the question. If the question says "in your country", write about Bangladesh (or your country) specifically.</p>
<h3>Brainstorm quickly: the 4-perspective check</h3>
<p>When you have no ideas, think from these angles: <strong>individuals · society · economy · government</strong> (or: health, money, time, education, environment).</p>`,
    bn: 'প্রশ্নের বিষয় (topic), নির্দিষ্ট দৃষ্টিকোণ (focus) এবং নির্দেশনা (instruction) — এই তিনটি দাগ দিন। সামান্য ভিন্ন প্রশ্নের উত্তর দিলে Task Response-এ ব্যান্ড অনেক কমে যায়। all, only, should, in your country-এর মতো ছোট শব্দগুলো প্রশ্নের পরিধি নির্দিষ্ট করে দেয়।',
    glossary: [
      ['topic', 'বিষয়'],
      ['focus', 'মূল কেন্দ্র / নির্দিষ্ট দৃষ্টিকোণ'],
      ['instruction', 'নির্দেশনা'],
      ['regardless of', 'নির্বিশেষে'],
      ['off-topic', 'প্রসঙ্গের বাইরে'],
      ['brainstorm', 'ধারণা খুঁজে বের করা'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Question: "Some people think that children under 12 should not be allowed to own smartphones. To what extent do you agree?" Which body paragraph topic is ON topic?',
        items: [
          { q: 'Choose the relevant paragraph topic.', options: ['How smartphones have changed adult working life', 'Why young children with their own phones may be exposed to harmful content', 'The history of mobile phones'], answer: 'B', explain: 'It addresses children under 12 owning phones.' },
          { q: 'Which word is the focus that must not be ignored?', options: ['people', 'under 12', 'think'], answer: 'B', explain: 'The age limit is the focus.' },
        ],
      },
    ],
  },
  {
    id: 'w-t2-intro',
    skill: 'writing',
    module: 'Task 2',
    level: 2,
    title: 'Introductions and thesis statements',
    minutes: 15,
    body: `
<p>An introduction has two jobs: show the examiner you understand the question, and tell them your answer. Two or three sentences, 40–60 words.</p>
<h3>The formula</h3>
<ol>
<li><strong>Paraphrase the topic</strong> (1–2 sentences): the question's situation in your own words.</li>
<li><strong>Thesis</strong> (1 sentence): your position, or what the essay will do.</li>
</ol>
<div class="compare">
<div class="weak"><h4>Avoid</h4><p>In this modern era, technology is a controversial issue. Some people think one thing and others think another thing. I will discuss both sides in this essay.</p></div>
<div class="strong"><h4>Write</h4><p>Proposals to make community service a required part of secondary education have gained support in several countries. While such schemes can be poorly run, I largely agree that a modest amount of compulsory volunteering would benefit both students and society.</p></div>
</div>
<h3>Thesis statements by question type</h3>
<table>
<tr><th>Type</th><th>Thesis pattern</th></tr>
<tr><td>Opinion</td><td>I strongly / largely / partly agree that … because …</td></tr>
<tr><td>Discussion</td><td>While there are valid arguments for X, I believe Y is more convincing.</td></tr>
<tr><td>Problem/solution</td><td>This trend creates difficulties for …, but several measures could reduce them.</td></tr>
<tr><td>Adv./disadv.</td><td>Although X has drawbacks, I believe its benefits are greater.</td></tr>
<tr><td>Two-part</td><td>This is largely due to …, and I consider it a positive development overall.</td></tr>
</table>
<h3>Paraphrasing techniques</h3>
<ul>
<li>Synonyms: <em>children → young people; increase → rise</em></li>
<li>Word forms: <em>economic growth → the economy grows</em></li>
<li>Change the structure: <em>Many people believe that… → It is widely believed that…</em></li>
</ul>
<div class="note note--warn"><p>Memorised openings ("In this modern era…", "It is a burning question of today…") are recognised and do not help — they may even lower Lexical Resource. Start directly with the topic.</p></div>`,
    bn: 'ভূমিকায় দুটি কাজ: প্রশ্নটি নিজের ভাষায় লেখা এবং নিজের অবস্থান (thesis) স্পষ্ট করা। ২–৩ বাক্য, ৪০–৬০ শব্দ যথেষ্ট। "In this modern era…"-এর মতো মুখস্থ সূচনা বাক্য পরীক্ষকেরা চিনে ফেলেন — সরাসরি বিষয় দিয়ে শুরু করুন।',
    glossary: [
      ['thesis statement', 'মূল বক্তব্য / প্রবন্ধের অবস্থান বাক্য'],
      ['paraphrase', 'নিজের ভাষায় পুনর্লিখন'],
      ['convincing', 'বিশ্বাসযোগ্য'],
      ['drawback', 'অসুবিধা'],
      ['compulsory', 'বাধ্যতামূলক'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Question: "Some people say that the best way to improve public health is to increase the number of sports facilities. To what extent do you agree?" Choose the best thesis statement.',
        items: [
          { q: 'Best thesis:', options: ['In this essay I will talk about health and sports.', 'Although more sports facilities would help, I believe that education about diet would do more to improve public health.', 'Health is very important for everyone in the world.'], answer: 'B', explain: 'It gives a clear, precise position that answers the question.' },
        ],
      },
    ],
  },
  {
    id: 'w-develop',
    skill: 'writing',
    module: 'Task 2',
    level: 3,
    title: 'Body paragraphs: developing ideas fully',
    minutes: 25,
    body: `
<p>Compare these two body paragraphs on <em>"Should university education be free?"</em></p>
<div class="compare">
<div class="weak"><h4>Band 6</h4><p>Free university education is good for society. It helps poor students. Also, the country will have more educated people. For example, in Germany university is free. Therefore free education is a good idea.</p></div>
<div class="strong"><h4>Band 7+</h4><p>The strongest case for free tuition is that it widens access to talent. When fees are high, capable students from low-income families often choose immediate work over years of debt, so the country loses doctors and engineers it would otherwise have trained. Germany, where public universities have charged no tuition fees since 2014, is often cited as an example: a degree there is a realistic option regardless of family income, and employers benefit from a broad pool of graduates.</p></div>
</div>
<h3>What changed?</h3>
<ul>
<li>The topic sentence makes a <strong>specific claim</strong> ("widens access to talent"), not a vague one ("is good").</li>
<li>The idea is <strong>explained as a chain</strong>: high fees → poorer students avoid debt → the country loses skills.</li>
<li>The example is <strong>connected to the claim</strong>, not just named.</li>
<li><strong>Fewer, longer ideas</strong>: one well-developed idea beats three listed ones.</li>
</ul>
<h3>The PEEL paragraph</h3>
<table>
<tr><th>Step</th><th>Purpose</th><th>Useful language</th></tr>
<tr><td><strong>P</strong>oint</td><td>One clear claim</td><td>The main reason … is that … · A key advantage of … is …</td></tr>
<tr><td><strong>E</strong>xplain</td><td>Why / how is it true?</td><td>This is because … · As a result, … · This means that …</td></tr>
<tr><td><strong>E</strong>xample</td><td>Make it concrete</td><td>For instance, … · In Bangladesh, for example, … · A case in point is …</td></tr>
<tr><td><strong>L</strong>ink</td><td>So what, for this question?</td><td>Therefore, … · This shows why …</td></tr>
</table>
<h3>Good examples are specific and believable</h3>
<p>You may use general knowledge or personal experience. You do not need statistics — and invented statistics ("87% of people…") can hurt credibility. Specific situations work well: <em>"a garment worker in Gazipur who…"</em>, <em>"countries such as Finland that…"</em>.</p>
<div class="note note--tip"><p>Ask "so what?" after each sentence. If the next sentence answers it, the paragraph is developing. If it starts a new topic, you are listing.</p></div>`,
    bn: 'ব্যান্ড ৬-এ ধারণাগুলো শুধু তালিকা করা হয়; ব্যান্ড ৭-এ প্রতিটি ধারণা ব্যাখ্যা, উদাহরণ ও পরিণতিসহ বিস্তারিত করা হয়। PEEL কাঠামো ব্যবহার করুন: Point (মূল দাবি), Explain (কেন/কীভাবে), Example (নির্দিষ্ট উদাহরণ), Link (প্রশ্নের সঙ্গে সংযোগ)। বানানো পরিসংখ্যান না দিয়ে বাস্তবসম্মত উদাহরণ দিন।',
    glossary: [
      ['develop (an idea)', '(ধারণা) বিস্তারিত করা'],
      ['claim', 'দাবি'],
      ['support', 'সমর্থন / প্রমাণ দেওয়া'],
      ['consequence', 'পরিণতি'],
      ['credibility', 'বিশ্বাসযোগ্যতা'],
      ['vague', 'অস্পষ্ট'],
      ['widen access', 'সুযোগ বাড়ানো'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the sentence that best DEVELOPS the point: "Working from home can improve employees\' quality of life."',
        items: [
          { q: 'Best next sentence:', options: ['Also, it is good for companies.', 'Without a daily commute, someone who travels an hour each way gains ten hours a week for family, rest or exercise.', 'Many people work from home nowadays.'], answer: 'B', explain: 'It explains how, with a specific example. A changes topic; C adds nothing.' },
        ],
      },
    ],
  },
  {
    id: 'w-t2-conclusion',
    skill: 'writing',
    module: 'Task 2',
    level: 2,
    title: 'Conclusions',
    minutes: 10,
    body: `
<p>A conclusion is short — two sentences, 30–40 words — and does one thing: <strong>restates your answer</strong> in different words. It must match your introduction exactly in position.</p>
<h3>The formula</h3>
<ol>
<li><strong>In conclusion,</strong> + your position, paraphrased.</li>
<li>A brief summary of your main reasons, or a final qualification ("provided that…").</li>
</ol>
<div class="example">In conclusion, I believe the advantages of compulsory community service clearly outweigh the drawbacks, provided that the scheme is flexible and does not compete with core study time.</div>
<h3>Do not</h3>
<ul>
<li>introduce a new argument or example;</li>
<li>change your position ("However, both sides have merit…" after arguing strongly for one);</li>
<li>write a moral or slogan ("Education is the backbone of the nation").</li>
</ul>
<p>If you are short of time, a one-sentence conclusion is far better than none: an essay without a conclusion often loses marks in Coherence and Cohesion.</p>`,
    bn: 'উপসংহার দুই বাক্যে (৩০–৪০ শব্দ) নিজের অবস্থান অন্য ভাষায় আবার বলুন। নতুন যুক্তি বা উদাহরণ দেবেন না, আর ভূমিকার অবস্থান থেকে সরে যাবেন না। "Education is the backbone of the nation"-এর মতো স্লোগান লিখবেন না।',
    glossary: [
      ['restate', 'আবার বলা'],
      ['qualification', 'শর্তসাপেক্ষ সীমা'],
      ['provided that', 'যদি শর্ত থাকে যে'],
      ['merit', 'গুণ / যোগ্যতা'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'The essay argued that public transport is better than new roads. Choose the best conclusion.',
        items: [
          { q: 'Best conclusion:', options: ['In conclusion, roads and public transport both have advantages and disadvantages.', 'In conclusion, although new roads may help in some places, investing in public transport is the more lasting solution to congestion.', 'In conclusion, the government should also reduce pollution and plant more trees.'], answer: 'B', explain: 'It restates the same position. A changes position; C adds new ideas.' },
        ],
      },
    ],
  },
  {
    id: 'w-t2-opinion',
    skill: 'writing',
    module: 'Task 2',
    level: 2,
    title: 'Opinion essays (agree or disagree)',
    minutes: 20,
    body: `
<p>"To what extent do you agree or disagree?" asks for <strong>your</strong> position. You can agree completely, disagree completely, or partly agree — all can score band 9 if the position is clear and consistent.</p>
<h3>Three structures</h3>
<table>
<tr><th>Your position</th><th>Body 1</th><th>Body 2</th></tr>
<tr><td>Strongly agree</td><td>Reason 1 + example</td><td>Reason 2 + example</td></tr>
<tr><td>Strongly agree (with concession)</td><td>Your main reason</td><td>The opposing view, and why it is weaker</td></tr>
<tr><td>Partly agree</td><td>Where you agree, and why</td><td>Where you disagree, and why</td></tr>
</table>
<h3>Make the extent clear</h3>
<p>Use precise words: <em>I strongly agree · I largely agree · I agree only to a limited extent · I completely disagree</em>. "To some extent" alone is vague; explain which extent.</p>
<h3>Consistency</h3>
<p>Your introduction, both body paragraphs and conclusion must point the same way. A common band-6 error is to agree in the introduction, then argue both sides equally, then end "it depends".</p>
<p>Practise: <a href="#/writing/t2-community">Compulsory community service</a>.</p>`,
    bn: 'মতামতভিত্তিক প্রবন্ধে নিজের অবস্থান স্পষ্টভাবে জানাতে হয় — সম্পূর্ণ একমত, সম্পূর্ণ দ্বিমত বা আংশিক একমত, যেকোনোটিই হতে পারে। ভূমিকা থেকে উপসংহার পর্যন্ত একই অবস্থান ধরে রাখুন। "I largely agree", "I agree only to a limited extent"-এর মতো নির্দিষ্ট শব্দ ব্যবহার করুন।',
    glossary: [
      ['agree / disagree', 'একমত / দ্বিমত'],
      ['to a limited extent', 'সীমিত মাত্রায়'],
      ['concession', 'বিপক্ষের যুক্তি আংশিক স্বীকার'],
      ['consistent', 'সামঞ্জস্যপূর্ণ'],
      ['opposing view', 'বিপরীত মত'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best answer.',
        items: [
          { q: 'Which thesis shows the extent clearly?', options: ['I agree and disagree with this.', 'I agree with this statement only to a limited extent, because the benefits apply mainly to older students.', 'This is an interesting topic.'], answer: 'B', explain: 'It states the extent and gives the reason.' },
          { q: 'An essay agrees in the introduction and ends with "it depends on the situation". The problem is:', options: ['inconsistent position', 'too many examples', 'too long'], answer: 'A', explain: 'The position must be clear and maintained throughout.' },
        ],
      },
    ],
  },
  {
    id: 'w-t2-discussion',
    skill: 'writing',
    module: 'Task 2',
    level: 2,
    title: 'Discussion essays (both views + your opinion)',
    minutes: 20,
    body: `
<p>"Discuss both views and give your own opinion" has <strong>three</strong> requirements: explain view 1, explain view 2, and state your own opinion. Missing your opinion limits Task Response.</p>
<h3>Structure</h3>
<ol>
<li><strong>Introduction:</strong> paraphrase both views, then state your opinion.</li>
<li><strong>Body 1:</strong> the view you <em>disagree</em> with — explained fairly, with its best argument.</li>
<li><strong>Body 2:</strong> the view you agree with — explained, and why you find it stronger.</li>
<li><strong>Conclusion:</strong> restate both briefly and your opinion.</li>
</ol>
<p>Putting your view second means the essay builds towards it naturally.</p>
<h3>Language for presenting views</h3>
<ul>
<li>Supporters of X argue that… · Those in favour of X point out that… · It is often claimed that…</li>
<li>On the other hand, opponents believe… · Critics, however, maintain that…</li>
<li>In my view, … · I find the second argument more persuasive because… · Personally, I side with…</li>
</ul>
<div class="note"><p>You can also hold a middle position ("both have merit, but X is more important in the long term") — but it must still be a clear opinion.</p></div>
<p>Practise: <a href="#/writing/t2-traffic">More roads or better public transport?</a></p>`,
    bn: 'আলোচনাভিত্তিক প্রবন্ধে তিনটি কাজ: প্রথম মত ব্যাখ্যা, দ্বিতীয় মত ব্যাখ্যা, এবং নিজের মত জানানো। যে মতের সঙ্গে আপনি একমত নন সেটি প্রথম অনুচ্ছেদে নিরপেক্ষভাবে লিখুন, যে মত সমর্থন করেন সেটি দ্বিতীয় অনুচ্ছেদে লিখুন।',
    glossary: [
      ['supporters / opponents', 'সমর্থক / বিরোধী'],
      ['persuasive', 'প্ররোচক / বিশ্বাসযোগ্য'],
      ['maintain (that)', 'দৃঢ়ভাবে দাবি করা'],
      ['side with', 'পক্ষ নেওয়া'],
      ['in favour of', 'পক্ষে'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best answer.',
        items: [
          { q: 'A discussion essay explains both views well but never gives the writer\'s opinion. What happens?', options: ['Nothing; opinions are optional.', 'Task Response is limited because one requirement is missing.', 'The essay is too short.'], answer: 'B', explain: 'The question asks for your opinion.' },
          { q: 'Which sentence presents someone else\'s view?', options: ['I strongly believe that…', 'Those in favour of the policy point out that…', 'In my view…'], answer: 'B', explain: '"Those in favour of" reports others\' views.' },
        ],
      },
    ],
  },
  {
    id: 'w-t2-problem',
    skill: 'writing',
    module: 'Task 2',
    level: 2,
    title: 'Problem / solution and cause / solution essays',
    minutes: 20,
    body: `
<p>These questions ask two things: the <strong>problems</strong> (or causes) and the <strong>solutions</strong>. Give both roughly equal space, and link each solution to a problem.</p>
<h3>Structure</h3>
<ol>
<li><strong>Introduction:</strong> paraphrase the situation; say that it creates problems which can be addressed.</li>
<li><strong>Body 1:</strong> two problems (or causes), each explained.</li>
<li><strong>Body 2:</strong> two solutions, each linked to a problem and explained (who does what, and why it would work).</li>
<li><strong>Conclusion.</strong></li>
</ol>
<h3>Make solutions specific</h3>
<div class="compare">
<div class="weak"><h4>Vague</h4><p>The government should take steps to solve this problem.</p></div>
<div class="strong"><h4>Specific</h4><p>Local councils could offer tax incentives to businesses that open offices in smaller towns, creating skilled jobs outside the capital.</p></div>
</div>
<h3>Useful language</h3>
<ul>
<li>Problems: <em>One serious consequence is… · This places pressure on… · This in turn leads to…</em></li>
<li>Solutions: <em>One effective measure would be to… · This could be addressed by… · Governments could encourage… by…</em></li>
</ul>
<p>Practise: <a href="#/writing/t2-rural">Young people leaving rural areas</a>.</p>`,
    bn: 'এই প্রশ্নে দুটি অংশ: সমস্যা (বা কারণ) এবং সমাধান। দুটিকে প্রায় সমান গুরুত্ব দিন এবং প্রতিটি সমাধানকে নির্দিষ্ট সমস্যার সঙ্গে যুক্ত করুন। "সরকারকে পদক্ষেপ নিতে হবে"-এর মতো অস্পষ্ট সমাধান নয় — কে, কী করবে এবং কেন কাজ করবে তা লিখুন।',
    glossary: [
      ['measure', 'পদক্ষেপ / ব্যবস্থা'],
      ['address (a problem)', '(সমস্যা) মোকাবিলা করা'],
      ['incentive', 'প্রণোদনা'],
      ['pressure on', 'চাপ সৃষ্টি'],
      ['in turn', 'ফলস্বরূপ / পরিণামে'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Problem: "Many graduates cannot find jobs that match their degrees." Choose the most specific solution.',
        items: [
          { q: 'Best solution:', options: ['The government should solve unemployment.', 'Universities could work with employers to design courses and internships in fields where there are skill shortages.', 'Students should try harder.'], answer: 'B', explain: 'It says who, what and how — and links to the problem.' },
        ],
      },
    ],
  },
  {
    id: 'w-t2-advdis',
    skill: 'writing',
    module: 'Task 2',
    level: 3,
    title: 'Advantages and disadvantages essays',
    minutes: 15,
    body: `
<p>Two versions:</p>
<ul>
<li><strong>"What are the advantages and disadvantages?"</strong> — discuss both; no opinion is required (but a short evaluation in the conclusion does no harm).</li>
<li><strong>"Do the advantages outweigh the disadvantages?"</strong> — you must <strong>judge</strong>: which side is greater, and why.</li>
</ul>
<h3>Structure for "outweigh"</h3>
<ol>
<li><strong>Introduction:</strong> paraphrase + your judgement.</li>
<li><strong>Body 1:</strong> the weaker side (e.g. disadvantages), fairly explained.</li>
<li><strong>Body 2:</strong> the stronger side, and why it matters more — or how the disadvantages can be reduced.</li>
<li><strong>Conclusion:</strong> repeat the judgement.</li>
</ol>
<h3>Weighing language</h3>
<p>far outweigh · are more significant than · are relatively minor · can be easily managed · the benefits are long-term, whereas the drawbacks are temporary</p>
<p>Practise: <a href="#/writing/t2-remote">Working from home</a>.</p>`,
    bn: '"Advantages and disadvantages" প্রশ্নে দুই দিক আলোচনা করলেই চলে, কিন্তু "Do the advantages outweigh the disadvantages?" প্রশ্নে কোন দিক বেশি গুরুত্বপূর্ণ তা স্পষ্টভাবে বিচার করে জানাতে হবে।',
    glossary: [
      ['outweigh', 'বেশি গুরুত্বপূর্ণ হওয়া'],
      ['judgement', 'বিচার / মূল্যায়ন'],
      ['relatively minor', 'তুলনামূলকভাবে ছোট'],
      ['temporary', 'সাময়িক'],
      ['long-term', 'দীর্ঘমেয়াদি'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best answer.',
        items: [
          { q: '"Do the advantages outweigh the disadvantages?" Your essay must:', options: ['only list advantages', 'state which side is greater', 'avoid giving any view'], answer: 'B', explain: 'The question asks for a judgement.' },
        ],
      },
    ],
  },
  {
    id: 'w-t2-twopart',
    skill: 'writing',
    module: 'Task 2',
    level: 3,
    title: 'Two-part (direct) questions',
    minutes: 15,
    body: `
<p>These questions ask two different direct questions, for example: <em>"Why do more people choose to live alone today? Is this a positive or negative development?"</em></p>
<h3>Structure</h3>
<ol>
<li><strong>Introduction:</strong> paraphrase + a short answer to <em>both</em> questions.</li>
<li><strong>Body 1:</strong> answers question 1 (e.g. two reasons).</li>
<li><strong>Body 2:</strong> answers question 2 (e.g. your evaluation, with reasons).</li>
<li><strong>Conclusion.</strong></li>
</ol>
<h3>The trap</h3>
<p>Candidates often answer the first question fully and the second in one sentence, or turn the essay into a discussion of both sides when only one question asked for a view. Answer <strong>each question directly</strong>, with equal attention.</p>
<div class="example">"Why" question → causes. "Is this positive or negative?" → a clear judgement with reasons. "What can be done?" → solutions.</div>`,
    bn: 'দুই অংশের প্রশ্নে দুটি আলাদা প্রশ্নের সরাসরি উত্তর দিতে হয়। প্রথম অনুচ্ছেদে প্রথম প্রশ্নের, দ্বিতীয় অনুচ্ছেদে দ্বিতীয় প্রশ্নের উত্তর দিন এবং দুটিকে সমান গুরুত্ব দিন।',
    glossary: [
      ['direct question', 'সরাসরি প্রশ্ন'],
      ['development (trend)', 'পরিবর্তন / প্রবণতা'],
      ['evaluation', 'মূল্যায়ন'],
      ['equal attention', 'সমান গুরুত্ব'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best answer.',
        items: [
          { q: '"Why are fewer young people reading newspapers? What effects will this have?" Body 2 should be about:', options: ['why newspapers are useful', 'the effects of young people reading fewer newspapers', 'the history of newspapers'], answer: 'B', explain: 'Body 2 answers question 2: effects.' },
        ],
      },
    ],
  },

  // --------------------------------------------------------- Band 7 language
  {
    id: 'w-cohesion',
    skill: 'writing',
    module: 'Band 7 language',
    level: 3,
    title: 'Coherence and cohesion without mechanical linking',
    minutes: 20,
    body: `
<p><strong>Coherence</strong> is whether your ideas are logically organised. <strong>Cohesion</strong> is how the sentences are joined. Band 7 needs both — and over-using linking words is one of the most common things that keeps essays at band 6.</p>
<h3>Coherence: one paragraph, one central idea</h3>
<p>Every body paragraph needs a clear topic sentence, and every sentence in it should support that topic. If you start a new idea, start a new paragraph.</p>
<h3>Cohesion: four tools, not one</h3>
<table>
<tr><th>Tool</th><th>Example</th></tr>
<tr><td><strong>Linking words</strong></td><td>however · therefore · in addition · as a result · for instance</td></tr>
<tr><td><strong>Reference</strong></td><td><em>this trend · such policies · these measures · the former / the latter</em></td></tr>
<tr><td><strong>Substitution and ellipsis</strong></td><td><em>Older students may benefit, but younger <strong>ones</strong> may not.</em></td></tr>
<tr><td><strong>Lexical chains</strong></td><td><em>pollution → emissions → contaminated air → the problem</em></td></tr>
</table>
<div class="compare">
<div class="weak"><h4>Mechanical (band 6)</h4><p>Firstly, cars cause pollution. Moreover, they cause traffic. Furthermore, they are expensive. In addition, they cause accidents.</p></div>
<div class="strong"><h4>Natural (band 7)</h4><p>The most serious cost of car dependence is pollution. Exhaust emissions are a major source of the smog that affects Dhaka every winter, and <strong>this</strong> contaminated air is linked to rising rates of respiratory illness.</p></div>
</div>
<h3>Linking words often misused</h3>
<ul>
<li><strong>Besides</strong> (= in any case, informal) is not a formal synonym of "in addition".</li>
<li><strong>On the other hand</strong> introduces a contrasting point, not an additional one.</li>
<li><strong>Nowadays / In this modern era</strong> at the start of every essay is repetitive.</li>
<li><strong>Moreover, furthermore</strong> — use them occasionally, not to start every sentence.</li>
</ul>`,
    bn: 'Coherence মানে ধারণাগুলোর যৌক্তিক বিন্যাস; cohesion মানে বাক্যগুলোর মধ্যে সংযোগ। প্রতিটি বাক্য Moreover, Furthermore দিয়ে শুরু করলে লেখা যান্ত্রিক শোনায় এবং ব্যান্ড ৬-এ আটকে থাকে। this, such, these-এর মতো নির্দেশক শব্দ এবং সমার্থক শব্দের ধারাবাহিকতা (lexical chain) ব্যবহার করুন।',
    glossary: [
      ['coherence', 'যৌক্তিক সামঞ্জস্য'],
      ['cohesion', 'বাক্যের পারস্পরিক সংযোগ'],
      ['mechanical', 'যান্ত্রিক'],
      ['substitution', 'প্রতিস্থাপন'],
      ['respiratory illness', 'শ্বাসযন্ত্রের রোগ'],
      ['emissions', 'নির্গমন'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best linking word or reference.',
        items: [
          { q: 'Online learning is flexible. ___, it requires a great deal of self-discipline.', options: ['Moreover', 'However', 'For example'], answer: 'B', explain: 'A contrasting point → However.' },
          { q: 'Some cities have introduced congestion charges. ___ policies have reduced traffic in central areas.', options: ['These', 'This', 'That'], answer: 'A', explain: 'Plural noun (policies) → These.' },
          { q: 'Public transport is cheap. ___, it produces fewer emissions per passenger.', options: ['On the other hand', 'In addition', 'In contrast'], answer: 'B', explain: 'An additional advantage → In addition. "On the other hand" introduces a contrast.' },
        ],
      },
    ],
  },
  {
    id: 'w-language',
    skill: 'writing',
    module: 'Band 7 language',
    level: 3,
    title: 'Vocabulary for band 7: precision and collocation',
    minutes: 20,
    body: `
<p>Band 7 Lexical Resource is not about rare words. It is about the <strong>right</strong> word, used in natural combinations (collocations), at the right level of formality.</p>
<h3>Collocations examiners notice</h3>
<table>
<tr><th>Unnatural</th><th>Natural</th></tr>
<tr><td>do a crime</td><td>commit a crime</td></tr>
<tr><td>make a research</td><td>conduct research · carry out a study</td></tr>
<tr><td>a big problem</td><td>a serious / pressing / growing problem</td></tr>
<tr><td>very important</td><td>crucial · essential · vital</td></tr>
<tr><td>give an effect</td><td>have an impact on · affect</td></tr>
<tr><td>solve the needs</td><td>meet the needs</td></tr>
<tr><td>increase knowledge</td><td>broaden / deepen knowledge</td></tr>
<tr><td>take an exam (fine) / give an exam (wrong for students)</td><td>take / sit an exam</td></tr>
</table>
<h3>Formality</h3>
<p>Avoid informal words in essays: <em>a lot of → a great deal of / many; kids → children; get → obtain/receive/become; stuff → things/items; nowadays → today/currently</em>. Avoid contractions (<em>don't → do not</em>).</p>
<h3>Hedging: careful, academic claims</h3>
<p>Compare "Social media destroys relationships" with "Social media <strong>can</strong> weaken relationships, <strong>particularly</strong> when it replaces face-to-face contact." Useful tools: <em>tend to · is likely to · may · in many cases · to some extent · arguably</em>.</p>
<h3>Word formation</h3>
<p>Many band-6 errors are the wrong form of a correct word: <em>economy/economic/economical, success/succeed/successful, environment/environmental, benefit/beneficial</em>. When you learn a word, learn its family.</p>`,
    bn: 'ব্যান্ড ৭-এর শব্দভান্ডার মানে কঠিন শব্দ নয়, সঠিক শব্দ সঠিক সঙ্গী শব্দের সঙ্গে (collocation) ব্যবহার করা: commit a crime, conduct research, meet the needs। প্রবন্ধে অনানুষ্ঠানিক শব্দ (kids, a lot of, get) ও সংক্ষিপ্ত রূপ (don\'t) এড়িয়ে চলুন। একটি শব্দ শিখলে তার পুরো শব্দ-পরিবার শিখুন।',
    glossary: [
      ['precision', 'সূক্ষ্মতা / নির্ভুলতা'],
      ['collocation', 'স্বাভাবিক শব্দজোড়'],
      ['formality', 'আনুষ্ঠানিকতা'],
      ['hedging', 'সতর্কভাবে দাবি করা'],
      ['word family', 'একই মূল থেকে আসা শব্দগুচ্ছ'],
      ['pressing', 'জরুরি'],
      ['commit (a crime)', '(অপরাধ) করা'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the natural collocation.',
        items: [
          { q: 'Scientists ___ an experiment.', options: ['made', 'conducted', 'did make'], answer: 'B', explain: 'conduct / carry out an experiment.' },
          { q: 'The new hospital will ___ the needs of the community.', options: ['meet', 'solve', 'fill'], answer: 'A', explain: 'meet the needs.' },
          { q: 'Plastic waste ___ a serious threat to marine life.', options: ['gives', 'poses', 'makes'], answer: 'B', explain: 'pose a threat.' },
          { q: 'Choose the correct word form: The plan had a ___ effect on the economy.', options: ['benefit', 'beneficial', 'beneficially'], answer: 'B', explain: 'An adjective before "effect": beneficial.' },
        ],
      },
    ],
  },
  {
    id: 'w-grammar',
    skill: 'writing',
    module: 'Band 7 language',
    level: 3,
    title: 'Grammar for band 7: range and accuracy',
    minutes: 20,
    body: `
<p>Band 7 Grammatical Range and Accuracy needs <strong>a variety of complex structures</strong> and <strong>frequent error-free sentences</strong>. That means two things: use more than one type of complex sentence, and check your work for the errors you personally make.</p>
<h3>A range checklist: try to use most of these in every essay</h3>
<ul>
<li>A relative clause: <em>…, which has led to…</em></li>
<li>A conditional: <em>If governments invested…, they would…</em></li>
<li>A passive: <em>It is widely believed that… · New measures have been introduced…</em></li>
<li>A concession: <em>Although… · Despite… · While…</em></li>
<li>A noun phrase / nominalisation: <em>The rapid growth of online shopping…</em></li>
<li>A participle clause: <em>Having lived in a village, I…</em> · <em>Faced with rising costs, many families…</em></li>
<li>A modal for speculation or advice: <em>could, might, should, would</em></li>
</ul>
<h3>Punctuation that affects your grade</h3>
<ul>
<li>Comma after an introductory clause: <em>Although it is expensive, …</em></li>
<li>Commas around non-defining relative clauses: <em>Dhaka, which is…, …</em></li>
<li>No comma splices: two full sentences need a full stop, a semicolon or a conjunction.</li>
</ul>
<p>See the full <a href="#/grammar">grammar units</a> for explanations and exercises.</p>`,
    bn: 'ব্যান্ড ৭-এর জন্য বিভিন্ন ধরনের জটিল বাক্য (relative clause, conditional, passive, although/despite, participle clause) ব্যবহার করুন এবং বেশিরভাগ বাক্য নির্ভুল রাখুন। যতিচিহ্নও গুরুত্বপূর্ণ — শুধু কমা দিয়ে দুটি পূর্ণ বাক্য জোড়া (comma splice) ভুল।',
    glossary: [
      ['participle clause', 'কৃদন্ত উপবাক্য (Having…, Faced with…)'],
      ['modal verb', 'সাহায্যকারী ক্রিয়া (can, should, might)'],
      ['speculation', 'অনুমান'],
      ['punctuation', 'যতিচিহ্ন'],
      ['semicolon', 'সেমিকোলন (;)'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Which sentence is correct?',
        items: [
          { q: '', options: ['Having finished the report, the computer crashed.', 'Having finished the report, she sent it to her manager.', 'Having finish the report, she sent it.'], answer: 'B', explain: 'The subject of the main clause must be the person who finished (she).' },
          { q: '', options: ['Many people move to cities, this causes overcrowding.', 'Many people move to cities, which causes overcrowding.', 'Many people move to cities which, causes overcrowding.'], answer: 'B', explain: 'A relative clause avoids the comma splice.' },
        ],
      },
    ],
  },
  {
    id: 'w-errors',
    skill: 'writing',
    module: 'Band 7 language',
    level: 2,
    title: 'Common errors of Bangladeshi candidates',
    minutes: 20,
    body: `
<p>These errors appear again and again in essays by Bangla speakers, usually because of direct translation from Bangla. Removing them is one of the fastest ways to gain half a band in Grammatical Range and Accuracy.</p>
<div class="table-scroll"><table>
<tr><th>Error</th><th>Correct</th><th>Why</th></tr>
<tr><td>Although it is costly, <s>but</s> it is useful.</td><td>Although it is costly, it is useful.</td><td>Bangla যদিও…তবুও needs two words; English needs one.</td></tr>
<tr><td>discuss <s>about</s> the problem</td><td>discuss the problem</td><td>discuss takes a direct object.</td></tr>
<tr><td>informations · advices · equipments · furnitures</td><td>information · advice · equipment · furniture</td><td>These nouns are uncountable: no -s.</td></tr>
<tr><td>peoples (meaning persons)</td><td>people</td><td>"people" is already plural.</td></tr>
<tr><td><s>more better</s> · <s>most cheapest</s></td><td>better · cheapest</td><td>Do not double comparatives.</td></tr>
<tr><td>The government <s>are</s> / Everyone <s>have</s></td><td>The government is / Everyone has</td><td>Subject–verb agreement.</td></tr>
<tr><td><s>The</s> pollution is harmful.</td><td>Pollution is harmful.</td><td>No article for general uncountable nouns.</td></tr>
<tr><td>Students should learn <s>the</s> English.</td><td>Students should learn English.</td><td>No article with languages.</td></tr>
<tr><td>He <s>is knowing</s> the answer.</td><td>He knows the answer.</td><td>"know" is not used in continuous tenses.</td></tr>
<tr><td>I am agree.</td><td>I agree.</td><td>agree is a verb, not an adjective.</td></tr>
<tr><td>This problem <s>can be</s> solve.</td><td>This problem can be solved.</td><td>Passive needs the past participle.</td></tr>
<tr><td><s>In this modern era</s>, …</td><td>Today, … / In recent years, …</td><td>Memorised, unnatural opening.</td></tr>
</table></div>
<h3>Build your personal error list</h3>
<p>After each practice essay, write down your three most frequent errors. Before the next essay, read the list; after writing, check specifically for those three.</p>`,
    bn: 'বাংলা থেকে সরাসরি অনুবাদের কারণে কিছু ভুল বারবার দেখা যায়: although-এর সঙ্গে but, "discuss about", informations/advices-এর মতো অগণনীয় বিশেষ্যে -s, "more better", "I am agree", এবং ভাষার নামের আগে "the"। প্রতিটি প্রবন্ধের পর নিজের সবচেয়ে বেশি হওয়া তিনটি ভুল লিখে রাখুন।',
    glossary: [
      ['uncountable noun', 'অগণনীয় বিশেষ্য'],
      ['subject–verb agreement', 'কর্তা ও ক্রিয়ার মিল'],
      ['comparative', 'তুলনামূলক রূপ'],
      ['direct translation', 'আক্ষরিক অনুবাদ'],
      ['past participle', 'ক্রিয়ার তৃতীয় রূপ (past participle)'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the correct sentence.',
        items: [
          { q: '', options: ['We need more informations about this.', 'We need more information about this.', 'We need more an information about this.'], answer: 'B', explain: 'information is uncountable.' },
          { q: '', options: ['This essay will discuss about the causes.', 'This essay will discuss the causes.', 'This essay will discuss on the causes.'], answer: 'B', explain: 'discuss + object, no preposition.' },
          { q: '', options: ['I am agree with this view.', 'I agree with this view.', 'I agreeing with this view.'], answer: 'B', explain: 'agree is a verb.' },
          { q: '', options: ['Public transport is more better than cars.', 'Public transport is better than cars.', 'Public transport is most better than cars.'], answer: 'B', explain: 'better is already comparative.' },
          { q: '', options: ['Everyone have a right to education.', 'Everyone has a right to education.', 'Everyone are having a right to education.'], answer: 'B', explain: 'Everyone takes a singular verb.' },
        ],
      },
    ],
  },
];
