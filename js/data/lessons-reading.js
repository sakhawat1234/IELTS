// Reading lessons, in teaching order: one lesson per official question type.

export default [
  // ------------------------------------------------------------ Know the test
  {
    id: 'r-format',
    skill: 'reading',
    module: 'Know the test',
    level: 1,
    title: 'How Academic Reading works',
    minutes: 15,
    body: `
<p>You have <strong>60 minutes for 3 passages and 40 questions</strong>. There is <strong>no extra time</strong> to transfer answers: on paper, write them on the answer sheet as you go; on computer, you type them directly.</p>
<h3>The texts</h3>
<p>Academic passages come from books, journals, magazines, newspapers and online sources. They are written for a non-specialist reader, on topics of general interest to university students: science, history, the environment, psychology, technology, education. Together they total roughly 2,150–2,750 words, and they become harder from Passage 1 to Passage 3. A passage may describe, narrate or argue; at least one usually contains a detailed argument.</p>
<p>You do not need specialist knowledge. Any technical term that matters is explained in the text or in a short glossary.</p>
<h3>The 11 question types</h3>
<table>
<tr><th>Question type</th><th>Lesson</th></tr>
<tr><td>True / False / Not Given (identifying information)</td><td><a href="#/lesson/r-tfng">TFNG</a></td></tr>
<tr><td>Yes / No / Not Given (identifying the writer's views)</td><td><a href="#/lesson/r-ynng">YNNG</a></td></tr>
<tr><td>Matching headings</td><td><a href="#/lesson/r-headings">Headings</a></td></tr>
<tr><td>Matching information (which paragraph contains…)</td><td><a href="#/lesson/r-match-info">Matching information</a></td></tr>
<tr><td>Matching features (people, dates, places)</td><td><a href="#/lesson/r-match-features">Matching features</a></td></tr>
<tr><td>Matching sentence endings</td><td><a href="#/lesson/r-endings">Sentence endings</a></td></tr>
<tr><td>Multiple choice</td><td><a href="#/lesson/r-mcq">Multiple choice</a></td></tr>
<tr><td>Sentence, summary, note, table and flow-chart completion; diagram labels; short answers</td><td><a href="#/lesson/r-completion">Completion tasks</a></td></tr>
</table>
<h3>Scoring (Academic)</h3>
<table>
<tr><th>Correct answers (approx.)</th><th>Band</th></tr>
<tr><td>39–40</td><td>9.0</td></tr>
<tr><td>35–36</td><td>8.0</td></tr>
<tr><td>30–32</td><td>7.0</td></tr>
<tr><td>23–26</td><td>6.0</td></tr>
<tr><td>15–18</td><td>5.0</td></tr>
</table>
<p class="small muted">General Training Reading uses different texts (everyday and workplace material) and needs more correct answers for the same band — about 34 for band 7.</p>
<div class="note note--warn"><ul>
<li>Most question sets follow the order of the passage. <strong>Matching headings, matching information and matching features do not.</strong></li>
<li>For True/False/Not Given, write exactly the words the instructions ask for. Do not write YES for TRUE.</li>
<li>Completion answers must be copied from the passage, spelled correctly, within the word limit (see <a href="#/lesson/l-rules">Answer rules</a>).</li>
</ul></div>`,
    bn: 'অ্যাকাডেমিক রিডিংয়ে ৬০ মিনিটে ৩টি প্যাসেজ ও ৪০টি প্রশ্নের উত্তর দিতে হয়, উত্তর তোলার জন্য আলাদা সময় নেই। প্রশ্নের ১১ ধরনের ফরম্যাট আছে। ব্যান্ড ৭ পেতে মোটামুটি ৩০টি সঠিক উত্তর লাগে। বেশিরভাগ প্রশ্ন প্যাসেজের ক্রম অনুসারে থাকে, কিন্তু matching headings, matching information ও matching features থাকে না।',
    glossary: [
      ['passage', 'অনুচ্ছেদ / পাঠ্যাংশ'],
      ['non-specialist', 'বিশেষজ্ঞ নয় এমন সাধারণ পাঠক'],
      ['argument', 'যুক্তি / মতামতভিত্তিক আলোচনা'],
      ['identify', 'চিহ্নিত করা'],
      ['the writer\'s views', 'লেখকের মতামত'],
      ['in order', 'ক্রমানুসারে'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the correct answer.',
        items: [
          { q: 'How much time do you get to transfer Reading answers on paper?', options: ['10 minutes', '2 minutes', 'none'], answer: 'C', explain: 'There is no transfer time in Reading.' },
          { q: 'Which question type tests the writer\'s opinions?', options: ['True/False/Not Given', 'Yes/No/Not Given', 'Matching features'], answer: 'B', explain: 'YNNG = the writer\'s views or claims.' },
          { q: 'Which questions do NOT follow the order of the passage?', options: ['sentence completion', 'matching headings', 'multiple choice'], answer: 'B', explain: 'Headings (and matching information/features) do not follow passage order.' },
        ],
      },
    ],
  },

  // -------------------------------------------------------------- Core skills
  {
    id: 'r-skim-scan',
    skill: 'reading',
    module: 'Core skills',
    level: 1,
    title: 'Skimming and scanning',
    minutes: 15,
    body: `
<p>You cannot read 2,700 words slowly and answer 40 questions in an hour. Strong readers switch between three speeds.</p>
<h3>1. Skimming: the map of the passage (2–3 minutes)</h3>
<p>Read the title, any subtitle, the <strong>first sentence of each paragraph</strong> and the whole of the last paragraph. Write a three-word note beside each paragraph:</p>
<div class="example">A — history of bees in farming<br>B — why colonies collapse<br>C — robot pollinators: cost</div>
<p>These notes are your map. When a question mentions cost, you already know to look at C.</p>
<h3>2. Scanning: finding the place</h3>
<p>Move your eyes quickly down the text looking for something that stands out: <strong>names, dates, numbers, capital letters, words in italics or quotation marks</strong>, or a technical word from the question. Do not read the words in between.</p>
<h3>3. Close reading: getting the answer</h3>
<p>Once you have found the place, slow down and read <strong>two or three sentences</strong> carefully — the sentence before, the sentence itself and the sentence after. Most wrong answers come from reading only one sentence.</p>
<h3>Why the order matters</h3>
<p>Skim first, then read the questions, then scan, then close-read. Reading every word of the passage first wastes 10–15 minutes; reading the questions first without skimming makes scanning slow, because you have no map.</p>
<div class="note note--tip"><p><strong>Daily drill:</strong> take any article from <em>The Daily Star</em>, BBC News or <em>The Guardian</em>. Give yourself 90 seconds to skim it, then write one sentence saying what it argues. Read it fully to check. One a day for a month makes skimming automatic.</p></div>`,
    bn: 'স্কিমিং মানে দ্রুত চোখ বুলিয়ে মূল ভাব বোঝা — প্রতিটি অনুচ্ছেদের প্রথম বাক্য পড়ে ছোট নোট লিখুন। স্ক্যানিং মানে নাম, তারিখ, সংখ্যার মতো নির্দিষ্ট তথ্য খুঁজে বের করা। জায়গাটি পেলে আগের ও পরের বাক্যসহ দুই-তিনটি বাক্য মনোযোগ দিয়ে পড়ুন।',
    glossary: [
      ['skim', 'দ্রুত চোখ বুলিয়ে মূল ভাব বোঝা'],
      ['scan', 'নির্দিষ্ট তথ্য খুঁজে বের করা'],
      ['gist', 'মূল ভাব'],
      ['close reading', 'মনোযোগ দিয়ে খুঁটিয়ে পড়া'],
      ['italics', 'বাঁকা হরফ'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best reading strategy.',
        items: [
          { q: 'The question asks what happened in 1987.', options: ['skim the whole passage again', 'scan for "1987"', 'read every paragraph closely'], answer: 'B', explain: 'Dates stand out: scan for them.' },
          { q: 'You need to know what paragraph D is mainly about.', options: ['skim its first and last sentences', 'scan for numbers', 'read only the last paragraph of the passage'], answer: 'A', explain: 'The main idea is usually in the first or last sentence.' },
          { q: 'You have found the sentence that mentions the key word. Now you should:', options: ['answer from that sentence only', 'read the sentences before and after too', 'move on to the next question'], answer: 'B', explain: 'Answers often depend on the neighbouring sentences.' },
        ],
      },
    ],
  },

  // ---------------------------------------------------------- Question types
  {
    id: 'r-tfng',
    skill: 'reading',
    module: 'Question types',
    level: 2,
    title: 'True / False / Not Given',
    minutes: 20,
    body: `
<p>You decide whether statements agree with the <strong>information</strong> in the passage. This is the question type candidates fear most because the difference between FALSE and NOT GIVEN seems subtle. One clear test removes the guessing.</p>
<table>
<tr><th>Answer</th><th>The test</th></tr>
<tr><td><strong>TRUE</strong></td><td>The passage says the same thing, in different words.</td></tr>
<tr><td><strong>FALSE</strong></td><td>The passage says something that <em>contradicts</em> the statement — both cannot be true at once.</td></tr>
<tr><td><strong>NOT GIVEN</strong></td><td>The passage does not say. After reading it, you still cannot know whether the statement is true.</td></tr>
</table>
<h3>Step by step</h3>
<ol>
<li>Underline the <strong>key words</strong> in the statement, especially names, numbers and <strong>qualifiers</strong> (all, some, only, always, mainly, the first).</li>
<li>Scan for the place in the passage. Questions follow the passage order.</li>
<li>Read the relevant sentences closely and compare <strong>every part</strong> of the statement.</li>
<li>Ask: <em>Does the passage confirm it? Contradict it? Or not mention one part of it?</em></li>
</ol>
<h3>Worked example</h3>
<div class="example">Passage: "The bridge, completed in 1932, was at that time the longest of its kind in the southern hemisphere."</div>
<ul>
<li>"The bridge was finished in the 1930s." → <strong>TRUE</strong> (1932 is in the 1930s).</li>
<li>"Work on the bridge ended in 1928." → <strong>FALSE</strong> (it was completed in 1932).</li>
<li>"When it opened, the bridge was the longest in the world." → <strong>NOT GIVEN</strong> (only the southern hemisphere is mentioned; it may or may not have been the world's longest).</li>
<li>"The bridge was expensive to build." → <strong>NOT GIVEN</strong> (cost is not mentioned).</li>
</ul>
<h3>Qualifiers decide the answer</h3>
<div class="compare">
<div><h4>Passage</h4><p>Most residents opposed the plan.</p></div>
<div><h4>Statement</h4><p>All residents opposed the plan. → <strong>FALSE</strong> (most ≠ all; some did not oppose it)</p></div>
</div>
<div class="note note--warn"><ul>
<li>Do not use your own knowledge. If a statement is a well-known fact but the passage does not say it, the answer is NOT GIVEN.</li>
<li>If <em>one part</em> of the statement is not mentioned, the whole answer is NOT GIVEN — unless another part is contradicted, which makes it FALSE.</li>
<li>Spend no more than about a minute on one statement. If unsure between FALSE and NOT GIVEN, ask: "Did the writer actually say the opposite?" If not, choose NOT GIVEN.</li>
</ul></div>`,
    bn: 'TRUE মানে প্যাসেজে একই কথা অন্যভাবে বলা আছে; FALSE মানে প্যাসেজ বিপরীত কথা বলছে; NOT GIVEN মানে প্যাসেজে এ বিষয়ে কিছুই বলা নেই, তাই সত্য না মিথ্যা বোঝার উপায় নেই। all, some, only, mainly-এর মতো শব্দ (qualifier) খেয়াল করুন। নিজের সাধারণ জ্ঞান ব্যবহার করবেন না।',
    glossary: [
      ['statement', 'বিবৃতি / বক্তব্য'],
      ['contradict', 'বিরোধিতা করা / বিপরীত কথা বলা'],
      ['qualifier', 'অর্থ সীমিত করে এমন শব্দ (all, some, only)'],
      ['confirm', 'নিশ্চিত করা / সমর্থন করা'],
      ['southern hemisphere', 'দক্ষিণ গোলার্ধ'],
      ['oppose', 'বিরোধিতা করা'],
    ],
    practice: [
      {
        type: 'tfng',
        instructions: 'Passage: "Tea was first brought to Britain in the 1650s, when it was sold mainly in coffee houses. Its high price meant that, for the first century, it was drunk largely by the wealthy." Do the statements agree with the information? Choose TRUE, FALSE or NOT GIVEN.',
        items: [
          { q: 'Tea arrived in Britain in the seventeenth century.', answer: 'TRUE', explain: 'The 1650s are in the seventeenth century.' },
          { q: 'At first, tea was sold only in coffee houses.', answer: 'FALSE', explain: '"mainly in coffee houses" — not only. "Only" contradicts "mainly".' },
          { q: 'Tea was originally cheaper than coffee.', answer: 'NOT GIVEN', explain: 'The price of coffee is never mentioned.' },
          { q: 'For many years, most tea drinkers were rich.', answer: 'TRUE', explain: '"drunk largely by the wealthy" for "the first century".' },
        ],
      },
    ],
  },
  {
    id: 'r-ynng',
    skill: 'reading',
    module: 'Question types',
    level: 2,
    title: 'Yes / No / Not Given (the writer\'s views)',
    minutes: 15,
    body: `
<p>This works like True/False/Not Given, but tests the <strong>writer's opinions or claims</strong>, not facts. It appears with argumentative passages, often Passage 3.</p>
<table>
<tr><th>Answer</th><th>Means</th></tr>
<tr><td><strong>YES</strong></td><td>The statement agrees with the writer's view.</td></tr>
<tr><td><strong>NO</strong></td><td>The statement contradicts the writer's view.</td></tr>
<tr><td><strong>NOT GIVEN</strong></td><td>It is impossible to say what the writer thinks about this.</td></tr>
</table>
<h3>Find the writer's voice</h3>
<p>Argumentative passages mix other people's views with the writer's own. Separate them:</p>
<table>
<tr><th>Other people's views</th><th>The writer's view</th></tr>
<tr><td>Critics argue that… · Some economists claim… · It is often said that… · According to supporters…</td><td>I believe… · In my view… · It seems clear that… · This is a mistake. · Rightly, … · Sadly, … · Surprisingly, …</td></tr>
</table>
<p>A sentence like "Some argue that cities should ban cars" tells you nothing about the writer — unless the writer then responds ("This would be a mistake").</p>
<h3>Attitude words</h3>
<p>Adjectives and adverbs carry opinion: <em>unfortunately, fortunately, rightly, wrongly, regrettably, encouragingly, absurd, convincing, unjustified, inevitable</em>.</p>
<div class="example">"The decision to close the rural clinics was, <strong>predictably</strong>, presented as a saving. <strong>In practice</strong>, it simply moved the cost to emergency departments."<br>
Statement: The writer believes closing the clinics did not really save money. → <strong>YES</strong></div>`,
    bn: 'Yes/No/Not Given প্রশ্নে তথ্য নয়, লেখকের নিজস্ব মতামত যাচাই করা হয়। "Critics argue…" বা "Some claim…" অন্যদের মত; "I believe", "In my view", "rightly", "sadly" লেখকের নিজের মত প্রকাশ করে। লেখকের মত খুঁজে না পেলে উত্তর NOT GIVEN।',
    glossary: [
      ['claim', 'দাবি'],
      ['view / opinion', 'মত / অভিমত'],
      ['critic', 'সমালোচক'],
      ['attitude', 'মনোভাব'],
      ['regrettably', 'দুঃখজনকভাবে'],
      ['inevitable', 'অনিবার্য'],
      ['unjustified', 'অযৌক্তিক / অন্যায্য'],
    ],
    practice: [
      {
        type: 'ynng',
        instructions: 'Passage: "Many parents believe that homework improves results at primary school. The evidence for this is surprisingly weak. What homework clearly does do, however, is widen the gap between children whose parents can help them and those whose parents cannot — a consequence schools rarely acknowledge." Do the statements agree with the views of the writer?',
        items: [
          { q: 'There is strong evidence that homework improves primary school results.', answer: 'NO', explain: 'The writer says the evidence is "surprisingly weak".' },
          { q: 'Homework can increase inequality between children.', answer: 'YES', explain: 'It "widen[s] the gap" between children with and without parental help.' },
          { q: 'Schools should stop setting homework altogether.', answer: 'NOT GIVEN', explain: 'The writer criticises homework but never recommends abolishing it.' },
          { q: 'Schools often ignore one effect of homework.', answer: 'YES', explain: '"a consequence schools rarely acknowledge".' },
        ],
      },
    ],
  },
  {
    id: 'r-headings',
    skill: 'reading',
    module: 'Question types',
    level: 2,
    title: 'Matching headings',
    minutes: 20,
    body: `
<p>You choose a heading for each paragraph from a list with more headings than paragraphs. The heading must summarise the <strong>whole paragraph</strong>, not one detail in it.</p>
<h3>Step by step</h3>
<ol>
<li><strong>Read all the headings</strong> first and notice how they differ. Several will share a topic but differ in focus: causes vs effects, past vs future, problem vs solution.</li>
<li>Read a paragraph and ask: <em>what is this paragraph mainly doing?</em> Describing a problem? Comparing two things? Giving a history? Making a prediction?</li>
<li>Write your own 3–5-word summary before looking at the list.</li>
<li>Match your summary to a heading. Start with the paragraphs you are most sure about and cross off headings as you use them.</li>
<li>Check the leftover headings at the end: a heading that seems close but covers only part of a paragraph is usually a distractor.</li>
</ol>
<h3>The classic trap: the detail heading</h3>
<div class="example">"Several cities have tried congestion charges. In London, traffic fell by 15% in the first year. Stockholm saw similar results. <strong>Yet</strong> in both cities traffic gradually crept back as people adapted."</div>
<p>"London's success with congestion charging" matches words in the paragraph but not its point. Better: <strong>"Early gains that did not last"</strong>. The paragraph's message is in its final turn ("Yet…").</p>
<h3>Where is the main idea?</h3>
<p>Often in the first sentence — but watch for paragraphs where the first sentence is background and the main idea arrives after <em>however, but, yet, in fact</em>. Always read to the end of the paragraph.</p>
<div class="note note--tip"><p>If the passage has other questions too, it is often efficient to do the headings task <em>after</em> the others: by then you understand the paragraphs well.</p></div>`,
    bn: 'Matching headings-এ প্রতিটি অনুচ্ছেদের জন্য এমন শিরোনাম বাছতে হয় যা পুরো অনুচ্ছেদের মূল ভাব প্রকাশ করে, কোনো একটি খুঁটিনাটি তথ্য নয়। প্রথমে নিজের ভাষায় ৩–৫ শব্দে অনুচ্ছেদের সারকথা লিখুন, তারপর তালিকার সঙ্গে মেলান। "Yet", "However"-এর পরে প্রায়ই আসল বক্তব্য থাকে।',
    glossary: [
      ['heading', 'শিরোনাম'],
      ['main idea', 'মূল ভাব'],
      ['detail', 'খুঁটিনাটি তথ্য'],
      ['summarise', 'সংক্ষেপে বলা'],
      ['congestion', 'যানজট'],
      ['crept back', 'ধীরে ধীরে আবার ফিরে এল'],
    ],
    practice: [
      {
        type: 'match',
        instructions: 'Choose the best heading for each paragraph.',
        optionsTitle: 'List of headings',
        options: [
          { value: 'i', label: 'A cheaper alternative that proved popular' },
          { value: 'ii', label: 'Why early attempts failed' },
          { value: 'iii', label: 'The cost of the first machines' },
          { value: 'iv', label: 'A problem that remains unsolved' },
        ],
        items: [
          { q: 'Paragraph 1: "The first solar cookers were heavy, fragile and slow. Families found that meals took twice as long, and the mirrors cracked within months. By the 1990s, most aid programmes had abandoned them."', answer: 'ii', explain: 'The paragraph explains why early cookers were abandoned: early attempts failed. Cost is not discussed.' },
          { q: 'Paragraph 2: "A simple box design, made from cardboard and foil for a few dollars, changed this. Within a decade it was being used in thousands of villages."', answer: 'i', explain: 'Cheap (a few dollars) and widely used = a cheaper alternative that proved popular.' },
          { q: 'Paragraph 3: "Yet one difficulty has never been overcome: none of these designs can cook after dark, when many families prepare their main meal."', answer: 'iv', explain: '"has never been overcome" = a problem that remains unsolved.' },
        ],
      },
    ],
  },
  {
    id: 'r-match-info',
    skill: 'reading',
    module: 'Question types',
    level: 2,
    title: 'Matching information (which paragraph contains…)',
    minutes: 15,
    body: `
<p>You are given pieces of information and must find the paragraph that contains each one. Instructions usually say <strong>"You may use any letter more than once"</strong> — so some paragraphs may be used twice and others not at all.</p>
<h3>Why it is hard</h3>
<ul>
<li>The questions are <strong>not in passage order</strong>.</li>
<li>The information is often a small detail in the middle of a paragraph, not its main idea.</li>
<li>The question describes the <strong>type</strong> of information: "an example of…", "a reference to…", "a comparison between…", "a reason for…".</li>
</ul>
<h3>Strategy</h3>
<ol>
<li>Do this task <strong>after</strong> the other questions on the passage, when you know the text well.</li>
<li>For each item, underline the key word and the <strong>type</strong> (example, reason, comparison, description, prediction).</li>
<li>Start with items that contain easy-to-scan words: names, numbers, dates.</li>
<li>For the rest, use your skimming notes to choose two or three likely paragraphs, then read them closely.</li>
</ol>
<div class="example">Item: "a mention of a method that failed"<br>Look for words like <em>tried, attempted, unsuccessful, did not work, abandoned</em>.</div>`,
    bn: 'এই প্রশ্নে কোন অনুচ্ছেদে নির্দিষ্ট তথ্যটি আছে তা খুঁজতে হয়। প্রশ্নগুলো প্যাসেজের ক্রমে থাকে না, আর একই অনুচ্ছেদ একাধিকবার উত্তর হতে পারে। তথ্যের ধরন (উদাহরণ, কারণ, তুলনা) খেয়াল করুন এবং এই প্রশ্নটি অন্য প্রশ্নগুলোর পরে করুন।',
    glossary: [
      ['reference to', 'উল্লেখ'],
      ['comparison', 'তুলনা'],
      ['reason', 'কারণ'],
      ['method', 'পদ্ধতি'],
      ['abandon', 'পরিত্যাগ করা'],
    ],
    practice: [
      {
        type: 'match',
        instructions: 'Paragraph A: "Coffee reached Europe through Venice in the early 1600s." Paragraph B: "Early attempts to grow coffee in Europe failed because the plants could not survive frost." Paragraph C: "Today Brazil produces around a third of the world\'s coffee, far more than any other country." Which paragraph contains the following? You may use any letter more than once.',
        showOptions: false,
        options: ['A', 'B', 'C'].map((v) => ({ value: v, label: '' })),
        items: [
          { q: 'a reason why something did not succeed', answer: 'B', explain: 'Plants could not survive frost.' },
          { q: 'a comparison between producers', answer: 'C', explain: '"far more than any other country".' },
          { q: 'how coffee first arrived in a continent', answer: 'A', explain: 'Through Venice in the early 1600s.' },
        ],
      },
    ],
  },
  {
    id: 'r-match-features',
    skill: 'reading',
    module: 'Question types',
    level: 2,
    title: 'Matching features (people, places, dates)',
    minutes: 15,
    body: `
<p>You match statements to a list of options — usually researchers, organisations, places or time periods. For example: "Which researcher made each of the following claims?" The statements are not in passage order; an option may be used more than once.</p>
<h3>Strategy</h3>
<ol>
<li><strong>Scan for each option</strong> (names are easy to find) and circle every place it appears in the passage. A researcher may be mentioned in two or three places.</li>
<li>Read what the passage says next to each name, and summarise it in a few words.</li>
<li>Match the statements to your summaries — by <strong>meaning</strong>, not shared words.</li>
</ol>
<h3>Traps</h3>
<ul>
<li><strong>Pronouns and surnames</strong>: "Professor Amina Rahman" may later be "Rahman", "she" or "the Dhaka team". Follow the references.</li>
<li><strong>Reported and rejected views</strong>: "Lee disagreed with Patel's conclusion" — the conclusion belongs to Patel, not Lee.</li>
</ul>`,
    bn: 'এখানে বিবৃতিগুলোকে কোনো গবেষক, প্রতিষ্ঠান বা স্থানের সঙ্গে মেলাতে হয়। প্রথমে প্যাসেজে প্রতিটি নাম কোথায় কোথায় এসেছে তা চিহ্নিত করুন। পরে একই ব্যক্তিকে শুধু পদবি বা "she/he" দিয়েও বোঝানো হতে পারে — খেয়াল রাখুন।',
    glossary: [
      ['feature', 'বৈশিষ্ট্য'],
      ['researcher', 'গবেষক'],
      ['claim', 'দাবি'],
      ['pronoun', 'সর্বনাম'],
      ['conclusion', 'উপসংহার / সিদ্ধান্ত'],
    ],
    practice: [
      {
        type: 'match',
        instructions: 'Passage: "Dr Okafor found that children learned new words faster through songs. Professor Lindqvist disagreed, arguing that Okafor\'s groups were too small to be reliable. Lindqvist\'s own study, involving 2,000 pupils, showed that repetition mattered more than the method used." Who made each claim?',
        optionsTitle: 'Researchers',
        options: [
          { value: 'A', label: 'Dr Okafor' },
          { value: 'B', label: 'Professor Lindqvist' },
        ],
        items: [
          { q: 'Repeating words is more important than the teaching method.', answer: 'B', explain: 'Lindqvist\'s study showed repetition mattered more.' },
          { q: 'Music can help children learn vocabulary more quickly.', answer: 'A', explain: 'Okafor: children learned faster through songs.' },
          { q: 'Another study did not include enough participants.', answer: 'B', explain: 'Lindqvist said Okafor\'s groups were too small.' },
        ],
      },
    ],
  },
  {
    id: 'r-endings',
    skill: 'reading',
    module: 'Question types',
    level: 2,
    title: 'Matching sentence endings',
    minutes: 15,
    body: `
<p>You get the first halves of several sentences and a longer list of endings. Each completed sentence must match the passage. The beginnings follow passage order.</p>
<h3>Strategy</h3>
<ol>
<li>Read the sentence beginning and find its place in the passage (scan for its key words).</li>
<li>Read that part of the passage and predict how the sentence should end.</li>
<li>Choose the ending that matches the passage's <strong>meaning</strong>.</li>
<li>Check <strong>grammar</strong>: many wrong endings simply do not fit the beginning grammatically, which helps you eliminate them quickly.</li>
</ol>
<div class="example">Beginning: "The new irrigation system failed because…"<br>
A … farmers could not afford to maintain it. &nbsp; B … the river had been diverted. &nbsp; C … increased crop yields.<br>
C is grammatically impossible after "because" without a subject. Between A and B, check the passage.</div>
<div class="note note--warn"><p>Several endings will be true according to the passage but belong to a different beginning. An ending must be true <em>and</em> complete <em>this</em> sentence.</p></div>`,
    bn: 'বাক্যের প্রথম অর্ধেক দেওয়া থাকে, সঠিক শেষাংশ বেছে নিতে হয়। শুরুর অংশ প্যাসেজের ক্রমে থাকে। অর্থের সঙ্গে ব্যাকরণও মিলিয়ে দেখুন — অনেক ভুল শেষাংশ ব্যাকরণগতভাবেই খাপ খায় না।',
    glossary: [
      ['ending', 'বাক্যের শেষাংশ'],
      ['eliminate', 'বাদ দেওয়া'],
      ['irrigation', 'সেচ'],
      ['maintain', 'রক্ষণাবেক্ষণ করা'],
      ['crop yield', 'ফসলের ফলন'],
    ],
    practice: [
      {
        type: 'match',
        instructions: 'Passage: "Mangrove forests protect coastlines by reducing the force of waves. In Bangladesh, villages behind mangroves suffered far less damage during storms. However, shrimp farming has cleared large areas of mangrove, because it offers farmers quicker profits." Complete each sentence with the correct ending.',
        optionsTitle: 'Endings',
        options: [
          { value: 'A', label: 'because it is more profitable in the short term.' },
          { value: 'B', label: 'by weakening waves before they reach land.' },
          { value: 'C', label: 'were damaged less in storms.' },
          { value: 'D', label: 'has been banned in coastal areas.' },
        ],
        items: [
          { q: 'Mangroves protect the coast', answer: 'B', explain: '"by reducing the force of waves".' },
          { q: 'Villages sheltered by mangroves', answer: 'C', explain: '"suffered far less damage during storms".' },
          { q: 'Mangroves have been cut down for shrimp farms', answer: 'A', explain: '"it offers farmers quicker profits". D is never stated.' },
        ],
      },
    ],
  },
  {
    id: 'r-mcq',
    skill: 'reading',
    module: 'Question types',
    level: 2,
    title: 'Multiple choice',
    minutes: 15,
    body: `
<p>Multiple-choice questions may ask about a detail, the main idea of a paragraph, the writer's purpose, or the meaning of a phrase. They follow passage order — except a final question on the <strong>whole passage</strong> ("What is the best title?").</p>
<h3>Strategy</h3>
<ol>
<li>Read the <strong>question stem only</strong> first and find the place in the passage.</li>
<li>Read that part closely and answer in your own words <em>before</em> looking at the options.</li>
<li>Then read the options and choose the one that matches your answer.</li>
<li>Eliminate each wrong option with a reason: <em>not mentioned · contradicts the text · true but does not answer the question · too general / too specific</em>.</li>
</ol>
<h3>The three classic wrong options</h3>
<ul>
<li><strong>The word-match</strong>: repeats words from the passage but changes the meaning.</li>
<li><strong>The true-but-irrelevant</strong>: correct according to the passage, but not the answer to this question.</li>
<li><strong>The extreme</strong>: uses <em>always, never, all, only</em> where the passage is more careful.</li>
</ul>
<h3>Questions about purpose</h3>
<p>"Why does the writer mention X?" asks what the example <em>does</em>: to support an argument, to give a contrast, to illustrate a problem, to show an exception. Read the sentence before the example: it usually states the point the example supports.</p>`,
    bn: 'মাল্টিপল চয়েসে প্রথমে শুধু প্রশ্নটি পড়ে প্যাসেজে জায়গাটি খুঁজুন, অপশন দেখার আগে নিজের ভাষায় উত্তরটি ভাবুন। প্রতিটি ভুল অপশন বাদ দেওয়ার কারণ বের করুন: উল্লেখ নেই, বিপরীত কথা, সত্য কিন্তু প্রশ্নের উত্তর নয়, অথবা অতিরিক্ত চরম (always, never)।',
    glossary: [
      ['purpose', 'উদ্দেশ্য'],
      ['illustrate', 'উদাহরণ দিয়ে ব্যাখ্যা করা'],
      ['irrelevant', 'অপ্রাসঙ্গিক'],
      ['exception', 'ব্যতিক্রম'],
      ['extreme', 'চরম'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Passage: "Electric scooters were expected to replace short car journeys. In most cities, however, studies found that riders would otherwise have walked or taken a bus. Their benefit for traffic has therefore been far smaller than predicted." Choose the correct answer.',
        items: [
          {
            q: 'What did studies show about scooter riders?',
            options: ['They had all stopped driving cars.', 'Many would have walked or used public transport instead.', 'They mostly used scooters for long journeys.', 'They preferred scooters to buses.'],
            answer: 'B',
            explain: '"riders would otherwise have walked or taken a bus". A is extreme; C and D are not stated.',
          },
          {
            q: 'What is the writer\'s main point?',
            options: ['Scooters have greatly reduced traffic.', 'Scooters should be banned in cities.', 'Scooters have reduced car use less than expected.', 'Buses are better than scooters.'],
            answer: 'C',
            explain: '"far smaller than predicted".',
          },
        ],
      },
    ],
  },
  {
    id: 'r-completion',
    skill: 'reading',
    module: 'Question types',
    level: 2,
    title: 'Completion tasks and short answers',
    minutes: 20,
    body: `
<p>This family covers sentence, summary, note, table and flow-chart completion, diagram labels and short-answer questions. They test whether you can find specific information and copy it accurately.</p>
<h3>Two versions of summary completion</h3>
<ul>
<li><strong>Words from the passage</strong>: copy the exact words, within the limit.</li>
<li><strong>Words from a box</strong>: choose from a list of options (A–H). The box contains synonyms, so you match meaning; the words may not appear in the passage at all.</li>
</ul>
<h3>Step by step</h3>
<ol>
<li>Circle the word limit.</li>
<li>Read the summary or notes and predict each gap (word type, singular/plural).</li>
<li>Find where the summary starts in the passage; summaries often cover one or two paragraphs only.</li>
<li>Locate each answer by paraphrase, then copy the word(s) exactly — check spelling letter by letter.</li>
<li>Re-read the completed sentence: is it grammatical and true to the passage?</li>
</ol>
<h3>Flow-charts and diagrams</h3>
<p>Flow-charts follow the stages of a process; the passage usually describes them in order. Diagrams label parts of an object; the answers are often nouns describing materials or parts.</p>
<h3>Short-answer questions</h3>
<p>Answer the question with words from the passage, within the limit. Do not write a sentence. "What did farmers use to protect the seeds?" → <em>ash</em>, not "They used ash".</p>
<div class="note note--warn"><p>Changing the word form is wrong. If the passage says <em>"economic growth"</em> and you write <em>"economy growth"</em>, the answer is marked wrong.</p></div>`,
    bn: 'বাক্য, সারাংশ, নোট, টেবিল, ফ্লো-চার্ট পূরণ ও সংক্ষিপ্ত উত্তরে প্যাসেজ থেকে হুবহু শব্দ তুলে লিখতে হয়, শব্দসীমার মধ্যে এবং সঠিক বানানে। বক্স থেকে উত্তর বাছাইয়ের ক্ষেত্রে অর্থ মিলিয়ে বেছে নিন। শব্দের রূপ (word form) বদলালে উত্তর ভুল হয়।',
    glossary: [
      ['label', 'লেবেল / নাম দেওয়া'],
      ['copy exactly', 'হুবহু তুলে লেখা'],
      ['word form', 'শব্দের রূপ (যেমন economy, economic)'],
      ['ash', 'ছাই'],
      ['process', 'প্রক্রিয়া'],
    ],
    practice: [
      {
        type: 'gap',
        instructions: 'Passage: "Before modern refrigeration, ice was cut from frozen lakes in winter and stored in thick-walled ice houses. Packed in sawdust, which acted as insulation, the ice could last until late summer. It was then delivered to homes by horse-drawn carts." Complete the notes.',
        limit: 'ONE WORD ONLY from the passage',
        maxWords: 1,
        items: [
          { q: 'Ice collected from frozen ___ in winter', answer: 'lakes', explain: '"cut from frozen lakes".' },
          { q: 'Stored in ice houses, packed in ___', answer: 'sawdust', explain: '"Packed in sawdust".' },
          { q: 'Sawdust provided ___', answer: 'insulation', explain: '"acted as insulation".' },
          { q: 'Delivered to homes by ___ carts', answer: 'horse-drawn', explain: '"horse-drawn carts". A hyphenated word counts as one word, so it fits the limit.' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------ Band 7 skills
  {
    id: 'r-paraphrase',
    skill: 'reading',
    module: 'Band 7 skills',
    level: 3,
    title: 'Paraphrase at band 7: tracking meaning, not words',
    minutes: 20,
    body: `
<p>At band 7 and above, the questions rarely share words with the passage. You must recognise the same idea in a different form. There are six common types of paraphrase:</p>
<table>
<tr><th>Technique</th><th>Passage</th><th>Question</th></tr>
<tr><td>Synonym</td><td>a <em>substantial</em> rise</td><td>a <em>significant</em> increase</td></tr>
<tr><td>Word form</td><td>the <em>expansion</em> of the port</td><td>the port <em>expanded</em></td></tr>
<tr><td>Active ↔ passive</td><td>farmers abandoned the land</td><td>the land was left by farmers</td></tr>
<tr><td>Opposite + negative</td><td>it is <em>rarely</em> seen</td><td>it is <em>not common</em></td></tr>
<tr><td>General ↔ specific</td><td>apples, pears and plums</td><td>fruit</td></tr>
<tr><td>Cause ↔ effect reversed</td><td>Rain caused the delay.</td><td>The delay was the result of rain.</td></tr>
</table>
<h3>Paraphrases that hide a change</h3>
<p>Be suspicious when a question looks almost identical to the passage. Often one small word has been changed to make it FALSE: <em>increase → decrease, before → after, some → all, may → will, partly → entirely</em>.</p>
<h3>Reference words</h3>
<p>Many answers sit across two sentences linked by <strong>this, these, such, the former, the latter, it, they, which</strong>. Always check what the reference word points back to.</p>
<div class="example">"The second method relied on satellite images. <strong>This</strong> proved far cheaper than the aerial surveys used previously."<br>
→ Satellite imaging was less expensive than aerial surveys. <strong>TRUE</strong></div>
<h3>Build the skill</h3>
<p>Each time you check practice answers, copy the passage sentence and the question side by side and label the paraphrase type. Ten minutes a day for two weeks makes a visible difference.</p>`,
    bn: 'ব্যান্ড ৭-এর জন্য প্রশ্ন ও প্যাসেজে একই শব্দ খুব কম থাকে; একই ভাব ভিন্নভাবে প্রকাশ করা হয়। সমার্থক শব্দ, শব্দের রূপ পরিবর্তন, active থেকে passive, বিপরীত শব্দ + না-বাচক — এভাবে প্যারাফ্রেজ করা হয়। this, these, the former-এর মতো শব্দ আগের কোন বিষয়কে নির্দেশ করছে তা খেয়াল করুন।',
    glossary: [
      ['substantial', 'উল্লেখযোগ্য / বড় মাপের'],
      ['expansion', 'সম্প্রসারণ'],
      ['abandon', 'ছেড়ে যাওয়া / পরিত্যাগ করা'],
      ['reference word', 'নির্দেশক শব্দ (this, it, they)'],
      ['the former / the latter', 'প্রথমটি / দ্বিতীয়টি'],
      ['aerial survey', 'আকাশ থেকে জরিপ'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Which sentence means the same as the passage sentence?',
        items: [
          { q: 'Passage: "Few visitors leave without buying a souvenir."', options: ['Most visitors buy a souvenir.', 'Few visitors buy a souvenir.', 'No visitors buy a souvenir.'], answer: 'A', explain: '"Few leave without buying" = most buy.' },
          { q: 'Passage: "The decline in fish stocks was partly due to warmer seas."', options: ['Warmer seas were the only cause of the decline.', 'Warmer seas were one cause of the decline.', 'Warmer seas increased fish stocks.'], answer: 'B', explain: '"partly" = one of the causes.' },
          { q: 'Passage: "Unlike the earlier model, the new engine rarely overheats."', options: ['The earlier model seldom overheated.', 'The new engine overheats less often than the old one.', 'Both engines often overheat.'], answer: 'B', explain: '"Unlike the earlier model… rarely overheats" implies the old one overheated more.' },
        ],
      },
    ],
  },
  {
    id: 'r-timing',
    skill: 'reading',
    module: 'Band 7 skills',
    level: 3,
    title: 'Timing: 40 questions in 60 minutes',
    minutes: 15,
    body: `
<p>Most candidates who can read at band 7 lose that band to time, not difficulty. Plan your hour before you sit down.</p>
<table>
<tr><th>Passage</th><th>Target time</th><th>Why</th></tr>
<tr><td>1</td><td>17 minutes</td><td>The easiest. Bank time here.</td></tr>
<tr><td>2</td><td>20 minutes</td><td>Medium difficulty.</td></tr>
<tr><td>3</td><td>23 minutes</td><td>The hardest and most abstract, often with Yes/No/Not Given.</td></tr>
</table>
<h3>Rules for staying on schedule</h3>
<ul>
<li><strong>The 90-second rule</strong>: if one question has taken 90 seconds, choose your best guess, mark it, and move on. Come back if time allows.</li>
<li><strong>Never leave a blank</strong>: there is no penalty for wrong answers.</li>
<li><strong>Do the task types you are fastest at first</strong> within a passage, but keep track of numbering on the answer sheet.</li>
<li><strong>Write answers on the answer sheet as you go</strong> (paper test) — there is no transfer time.</li>
<li><strong>Check the clock at the end of each passage</strong>, not after every question.</li>
</ul>
<h3>The timed-practice gap</h3>
<p>Under timed conditions, accuracy drops by around 10% for most people. If you score 33/40 untimed, expect about 30 timed. From week 6 of the plan, practise only with the timer.</p>`,
    bn: 'রিডিংয়ে ৬০ মিনিট সময় ভাগ করে নিন: প্যাসেজ ১-এ ১৭ মিনিট, প্যাসেজ ২-এ ২০ মিনিট, প্যাসেজ ৩-এ ২৩ মিনিট। কোনো একটি প্রশ্নে ৯০ সেকেন্ডের বেশি লাগলে অনুমান করে এগিয়ে যান। কোনো উত্তর ফাঁকা রাখবেন না এবং উত্তরপত্রে সঙ্গে সঙ্গে লিখুন।',
    glossary: [
      ['schedule', 'সময়সূচি'],
      ['abstract', 'বিমূর্ত'],
      ['bank time', 'সময় বাঁচিয়ে রাখা'],
      ['guess', 'অনুমান করা'],
      ['accuracy', 'নির্ভুলতা'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best decision.',
        items: [
          { q: 'You have spent two minutes on one TFNG question and are still unsure.', options: ['Keep reading until you are sure.', 'Choose your best guess, mark it, and move on.', 'Leave it blank.'], answer: 'B', explain: 'The 90-second rule; never leave blanks.' },
          { q: 'It is minute 40 and you are starting Passage 3.', options: ['You are on schedule.', 'You are about 3 minutes behind.', 'You are well ahead.'], answer: 'B', explain: '17 + 20 = 37 minutes: you should start Passage 3 at about 37.' },
        ],
      },
    ],
  },
  {
    id: 'r-level',
    skill: 'reading',
    module: 'Band 7 skills',
    level: 3,
    title: 'Raising your reading level',
    minutes: 15,
    body: `
<p>Strategies get you from band 5.5 to 6.5. The last step to 7 and beyond comes from <strong>reading more, and more difficult, English</strong> — so that vocabulary and sentence structures in Passage 3 no longer slow you down.</p>
<h3>What to read</h3>
<table>
<tr><th>Source</th><th>Why it helps</th></tr>
<tr><td>BBC Future, BBC Science · <em>The Guardian</em> (science, environment)</td><td>Same style and topics as IELTS passages</td></tr>
<tr><td><em>The Conversation</em> (academics writing for the public)</td><td>Argumentative texts — ideal for Yes/No/Not Given</td></tr>
<tr><td><em>National Geographic</em>, <em>New Scientist</em>, <em>Scientific American</em></td><td>Science and nature topics that appear often</td></tr>
<tr><td><em>The Daily Star</em> (Bangladesh), opinion pages</td><td>Familiar topics, good for building speed</td></tr>
</table>
<h3>How to read for the test</h3>
<ol>
<li>Read one long article (800+ words) a day — about 15 minutes.</li>
<li>Before reading, skim it in 90 seconds and predict the main point.</li>
<li>After reading, write two sentences: the main idea, and the writer's opinion if there is one.</li>
<li>Note 5 useful words or phrases with their sentence (see the vocabulary pages for how).</li>
</ol>
<h3>Academic words that appear in almost every test</h3>
<p>approximately · assumption · consequently · contrary · decline · derive · distinct · emerge · evidence · framework · hypothesis · indicate · inevitable · notion · obtain · phenomenon · predominantly · subsequently · sufficient · undergo</p>
<p>Look these up and learn them with their Bengali meaning and an example — they are in the <a href="#/vocabulary">vocabulary</a> section.</p>`,
    bn: 'কৌশল শিখে ৬.৫ পর্যন্ত যাওয়া যায়, কিন্তু ৭ ও তার বেশি পেতে নিয়মিত কঠিন ইংরেজি পড়তে হয়। প্রতিদিন একটি দীর্ঘ প্রবন্ধ (৮০০+ শব্দ) পড়ুন, মূল ভাব ও লেখকের মত দুই বাক্যে লিখুন, আর পাঁচটি নতুন শব্দ উদাহরণসহ নোট করুন।',
    glossary: [
      ['assumption', 'অনুমান / ধারণা'],
      ['hypothesis', 'প্রকল্প / অনুমিত সিদ্ধান্ত'],
      ['predominantly', 'প্রধানত'],
      ['subsequently', 'পরবর্তীতে'],
      ['sufficient', 'যথেষ্ট'],
      ['undergo', 'অভিজ্ঞতার মধ্য দিয়ে যাওয়া / সম্মুখীন হওয়া'],
      ['derive', 'উদ্ভূত হওয়া / প্রাপ্ত করা'],
      ['notion', 'ধারণা'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the closest meaning.',
        items: [
          { q: 'predominantly', options: ['mainly', 'rarely', 'recently'], answer: 'A', explain: 'predominantly = mainly (প্রধানত).' },
          { q: 'subsequently', options: ['before that', 'after that', 'because of that'], answer: 'B', explain: 'subsequently = afterwards (পরবর্তীতে).' },
          { q: 'sufficient', options: ['too much', 'enough', 'not enough'], answer: 'B', explain: 'sufficient = enough (যথেষ্ট).' },
        ],
      },
    ],
  },
];
