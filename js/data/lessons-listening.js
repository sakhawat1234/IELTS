// Listening lessons, in teaching order. Facts about the test follow the
// official descriptions published by the IELTS partners.

export default [
  // ------------------------------------------------------------ Know the test
  {
    id: 'l-format',
    skill: 'listening',
    module: 'Know the test',
    level: 1,
    title: 'How the Listening test works',
    minutes: 15,
    body: `
<p>Listening is the <strong>same test for Academic and General Training</strong>. You hear four recordings and answer 40 questions — 10 per part. Each recording is played <strong>once only</strong>. The questions follow the order of the recording.</p>
<h3>The four parts</h3>
<table>
<tr><th>Part</th><th>Who is speaking</th><th>Setting</th><th>Typical example</th></tr>
<tr><td>1</td><td>Two people in conversation</td><td>Everyday social situation</td><td>Booking a holiday, renting a flat, reporting a lost bag</td></tr>
<tr><td>2</td><td>One person (monologue)</td><td>Everyday social situation</td><td>A guide on a tour, a radio talk about a local event, a talk about joining a gym</td></tr>
<tr><td>3</td><td>Two to four people in conversation</td><td>Education or training</td><td>Students planning an assignment with their tutor</td></tr>
<tr><td>4</td><td>One person (monologue)</td><td>Academic subject</td><td>A university lecture</td></tr>
</table>
<p>The parts get harder. Part 1 tests careful listening for details such as names and numbers. Part 4 tests whether you can follow an academic talk with no break in the middle.</p>
<h3>Timing: paper and computer are different</h3>
<ul>
<li><strong>Paper test:</strong> about 30 minutes of listening. You write on the question paper while you listen, then get <strong>10 extra minutes</strong> to copy your answers onto the answer sheet.</li>
<li><strong>Computer test:</strong> you type answers directly while you listen, so there is no transfer time — just <strong>2 minutes</strong> at the end to check.</li>
</ul>
<p>Before each part you get time to read the questions. Use every second of it (see <a href="#/lesson/l-predict">Predicting answers</a>).</p>
<h3>Accents</h3>
<p>You will hear a range of English accents, including British, Australian, New Zealand, American and Canadian. Bangladeshi learners often hear mostly American English in films and British English at school; build in Australian and New Zealand podcasts too.</p>
<h3>Scoring</h3>
<p>Each correct answer is worth one mark. Your raw score out of 40 becomes a band:</p>
<table>
<tr><th>Correct answers (approx.)</th><th>Band</th></tr>
<tr><td>39–40</td><td>9.0</td></tr>
<tr><td>35–36</td><td>8.0</td></tr>
<tr><td>30–31</td><td>7.0</td></tr>
<tr><td>23–25</td><td>6.0</td></tr>
<tr><td>16–17</td><td>5.0</td></tr>
</table>
<p class="small muted">The exact conversion moves slightly from test to test. Use the <a href="#/calculator">band calculator</a> for every score.</p>
<div class="note note--tip"><p><strong>What band 7 means here:</strong> about 30 right answers — you can afford to lose roughly two or three in each part. Most strong candidates lose them in Parts 3 and 4, so the strategy is: near-perfect Parts 1 and 2, then as many as possible in 3 and 4.</p></div>`,
    bn: 'লিসেনিং টেস্টে চারটি রেকর্ডিং, মোট ৪০টি প্রশ্ন, প্রতিটি রেকর্ডিং মাত্র একবার শোনানো হয়। পেপার টেস্টে উত্তর লেখার জন্য শেষে ১০ মিনিট বাড়তি সময় পাওয়া যায়, কম্পিউটার টেস্টে পাওয়া যায় শুধু ২ মিনিট। ব্যান্ড ৭ পেতে মোটামুটি ৩০টি সঠিক উত্তর লাগে।',
    glossary: [
      ['monologue', 'একজনের একক বক্তব্য'],
      ['conversation', 'কথোপকথন'],
      ['recording', 'রেকর্ড করা অডিও'],
      ['transfer (answers)', 'উত্তরপত্রে উত্তর তুলে লেখা'],
      ['answer sheet', 'উত্তরপত্র'],
      ['accent', 'উচ্চারণের আঞ্চলিক ধরন'],
      ['raw score', 'মোট সঠিক উত্তরের সংখ্যা (ব্যান্ডে রূপান্তরের আগে)'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the correct answer.',
        items: [
          { q: 'How many times do you hear each recording in the real test?', options: ['once', 'twice', 'as many times as you need'], answer: 'A', explain: 'Every recording is played once only.' },
          { q: 'Which part is a monologue on an academic subject?', options: ['Part 2', 'Part 3', 'Part 4'], answer: 'C', explain: 'Part 4 is usually a lecture. Part 2 is a monologue on an everyday topic.' },
          { q: 'In the computer-delivered test, how long do you get at the end?', options: ['10 minutes to transfer answers', '2 minutes to check answers', 'no extra time'], answer: 'B', explain: 'Paper: 10 minutes to transfer. Computer: 2 minutes to check.' },
          { q: 'Roughly how many correct answers give band 7?', options: ['23', '30', '35'], answer: 'B', explain: 'About 30 out of 40 gives band 7.' },
        ],
      },
    ],
  },
  {
    id: 'l-rules',
    skill: 'listening',
    module: 'Know the test',
    level: 1,
    title: 'Answer rules that cost marks',
    minutes: 15,
    body: `
<p>Many candidates hear the right answer and still lose the mark because of how they wrote it. These rules apply to every completion question in Listening and Reading.</p>
<h3>1. Obey the word limit exactly</h3>
<table>
<tr><th>Instruction</th><th>Allowed</th><th>Not allowed</th></tr>
<tr><td>ONE WORD ONLY</td><td>museum</td><td>the museum</td></tr>
<tr><td>NO MORE THAN TWO WORDS</td><td>city museum</td><td>the city museum</td></tr>
<tr><td>ONE WORD AND/OR A NUMBER</td><td>42 · Thursday · 42 Thursdays</td><td>Thursday morning</td></tr>
<tr><td>NO MORE THAN THREE WORDS AND/OR A NUMBER</td><td>3 large boxes</td><td>three very large boxes</td></tr>
</table>
<p>Leave out words that are already on the page. If the form says "<em>Address: ___ Road</em>", write only the number and name, not "Road" again.</p>
<h3>2. Spelling must be correct</h3>
<p>A misspelled word is a wrong answer. British and American spellings are both accepted (<em>colour/color, centre/center</em>), but do not mix them inside one word.</p>
<h3>3. Grammar must fit</h3>
<p>Your answer has to make the sentence grammatical. If the gap is "<em>Two ___ are needed</em>", a singular noun is wrong.</p>
<div class="compare">
<div class="weak"><h4>Wrong</h4><p>Bring two ___ to the class. → <em>photo</em></p></div>
<div class="strong"><h4>Right</h4><p>Bring two ___ to the class. → <em>photos</em></p></div>
</div>
<h3>4. Numbers and capitals</h3>
<ul>
<li>You may write numbers as figures (<em>25</em>) or words (<em>twenty-five</em>). Figures are safer: faster and no spelling risk.</li>
<li>Capital letters are not marked: <em>monday</em> and <em>Monday</em> are both accepted. Many teachers still recommend writing answers in CAPITALS on the paper answer sheet so every letter is clear.</li>
<li>A hyphenated word such as <em>well-known</em> counts as one word.</li>
</ul>
<h3>5. Never leave a blank</h3>
<p>Wrong answers are not penalised. If you missed something, write your best guess before the next part starts.</p>
<div class="note note--warn"><p><strong>Common Bangladeshi-learner errors:</strong> dropping the plural <em>-s</em> (we hear it but forget to write it), adding an extra article (<em>a</em>, <em>the</em>) that breaks the word limit, and spelling words the way they sound in Bangla (<em>"skool"</em>, <em>"wensday"</em>).</p></div>`,
    bn: 'শব্দসীমা (word limit) কঠোরভাবে মানতে হবে। বানান ভুল হলে উত্তর ভুল ধরা হয়। উত্তর বাক্যের ব্যাকরণের সঙ্গে মিলতে হবে — বিশেষ করে বহুবচনের -s। ভুল উত্তরের জন্য নম্বর কাটা যায় না, তাই কোনো ঘর ফাঁকা রাখবেন না।',
    glossary: [
      ['word limit', 'সর্বোচ্চ শব্দসংখ্যার নিয়ম'],
      ['NO MORE THAN TWO WORDS', 'দুইটি শব্দের বেশি নয়'],
      ['and/or a number', 'এবং/অথবা একটি সংখ্যা'],
      ['plural', 'বহুবচন'],
      ['singular', 'একবচন'],
      ['penalty / penalised', 'জরিমানা / নম্বর কাটা'],
      ['figures', 'অঙ্কে লেখা সংখ্যা (যেমন 25)'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'The instruction is NO MORE THAN TWO WORDS AND/OR A NUMBER. Which answer is acceptable?',
        items: [
          { q: 'The class meets in the ___', options: ['main hall', 'main sports hall', 'large main hall'], answer: 'A', explain: 'Only "main hall" is two words or fewer.' },
          { q: 'Membership costs £___ a year', options: ['£85', '85', 'eighty five pounds'], answer: 'B', explain: 'The £ sign is already on the page. "eighty five pounds" is three words.' },
          { q: 'Students must bring two ___', options: ['pencil', 'pencils', 'a pencil'], answer: 'B', explain: '"two" needs a plural noun.' },
          { q: 'The tour starts at ___', options: ['10.30 am', 'half past ten in the morning', 'ten thirty in the morning'], answer: 'A', explain: 'A number with "am" fits the limit; the others are too long.' },
        ],
      },
    ],
  },

  // -------------------------------------------------------------- Core skills
  {
    id: 'l-numbers',
    skill: 'listening',
    module: 'Core skills',
    level: 1,
    title: 'Numbers, letters and spelling',
    minutes: 20,
    body: `
<p>Part 1 nearly always tests names, numbers, dates, times, prices and addresses. These are the cheapest marks in the whole test — if you train for them.</p>
<h3>The alphabet: letters that sound alike</h3>
<p>Say these aloud until you can hear the difference instantly:</p>
<table>
<tr><th>Group</th><th>Why it is difficult</th></tr>
<tr><td><strong>A / E / I</strong></td><td>A is /eɪ/ (like "day"), E is /iː/ (like "see"), I is /aɪ/ (like "my"). Bangladeshi learners often confuse E and I.</td></tr>
<tr><td><strong>G / J</strong></td><td>G is /dʒiː/, J is /dʒeɪ/.</td></tr>
<tr><td><strong>B / P / V</strong></td><td>V is a soft sound with teeth on the lip — not "bh".</td></tr>
<tr><td><strong>M / N</strong></td><td>Both end in a nasal sound; listen for the lips closing on M.</td></tr>
<tr><td><strong>S / F / X</strong></td><td>All start with /e/: "es", "ef", "eks".</td></tr>
<tr><td><strong>W</strong></td><td>"double-u" — three syllables.</td></tr>
</table>
<p>Speakers say <strong>"double L"</strong> for LL and <strong>"double O"</strong> for OO. Write both letters.</p>
<h3>Numbers</h3>
<ul>
<li><strong>-teen vs -ty:</strong> thir<em>TEEN</em> (stress at the end, long "ee") vs <em>THIR</em>ty (stress at the start, short "y"). Same for 14/40, 15/50, 16/60, 17/70, 18/80, 19/90.</li>
<li><strong>"Oh" = zero</strong> in phone numbers. "Double three" = 33. "Triple five" = 555.</li>
<li><strong>Prices:</strong> "twelve fifty" = 12.50. "Two hundred and five" = 205, not 250.</li>
<li><strong>Years:</strong> "nineteen eighty-five" = 1985, "two thousand and nine" = 2009, "twenty twenty-four" = 2024.</li>
<li><strong>Times:</strong> "quarter to three" = 2.45. "Half past" = :30.</li>
<li><strong>Dates:</strong> "the third of May" — write <em>3 May</em> or <em>May 3</em>; both are accepted.</li>
</ul>
<h3>Words IELTS candidates most often misspell</h3>
<p>Learn these by heart. Several appear in Part 1 forms almost every year:</p>
<div class="table-scroll"><table>
<tr><td>accommodation</td><td>address</td><td>appointment</td><td>beginning</td><td>business</td></tr>
<tr><td>calendar</td><td>colleague</td><td>committee</td><td>definitely</td><td>environment</td></tr>
<tr><td>February</td><td>government</td><td>guarantee</td><td>library</td><td>licence (noun, UK)</td></tr>
<tr><td>maintenance</td><td>necessary</td><td>opportunity</td><td>parallel</td><td>questionnaire</td></tr>
<tr><td>receipt</td><td>recommend</td><td>restaurant</td><td>schedule</td><td>separate</td></tr>
<tr><td>temperature</td><td>vegetable</td><td>Wednesday</td><td>weather</td><td>whether</td></tr>
</table></div>
<h3>A 10-minute daily drill</h3>
<ol>
<li>Ask a friend (or use an online random-number reader) to say ten phone numbers, prices and postcodes. Write them; check.</li>
<li>Spell five words from the list above aloud, letter by letter, then write them without looking.</li>
<li>Once a week, test yourself on all 30 words.</li>
</ol>`,
    bn: 'পার্ট ১-এ নাম, সংখ্যা, তারিখ, সময় ও ঠিকানা খুব বেশি আসে। ইংরেজি বর্ণমালার কাছাকাছি শোনায় এমন অক্ষর (A/E/I, G/J, B/P/V) আলাদা করে চিনতে শিখুন। thirteen আর thirty-র পার্থক্য হলো শব্দের কোন অংশে জোর (stress) পড়ছে। সাধারণ ভুল বানানের তালিকাটি মুখস্থ করুন।',
    glossary: [
      ['double L', 'পরপর দুটি L (LL)'],
      ['stress (on a syllable)', 'শব্দের যে অংশে জোর দিয়ে উচ্চারণ করা হয়'],
      ['postcode', 'পোস্ট কোড / ডাক কোড'],
      ['receipt', 'রসিদ'],
      ['colleague', 'সহকর্মী'],
      ['questionnaire', 'প্রশ্নপত্র / জরিপ ফর্ম'],
      ['whether', 'কিনা (if)'],
      ['weather', 'আবহাওয়া'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the correct spelling.',
        items: [
          { q: 'A place to stay', options: ['accomodation', 'accommodation', 'acommodation'], answer: 'B', explain: 'Double c, double m: accommodation.' },
          { q: 'The day after Tuesday', options: ['Wednesday', 'Wensday', 'Wednsday'], answer: 'A', explain: 'Wednesday — the first d is silent.' },
          { q: 'Someone you work with', options: ['collegue', 'colleage', 'colleague'], answer: 'C', explain: 'colleague' },
          { q: 'You hear "oh-one-seven, double four". You write:', options: ['01744', '017244', '1744'], answer: 'A', explain: '"oh" = 0; "double four" = 44.' },
          { q: 'You hear "It costs fifteen pounds — that\'s one-five." You write:', options: ['50', '15', '1.5'], answer: 'B', explain: 'The speaker confirms one-five: 15.' },
        ],
      },
    ],
  },
  {
    id: 'l-predict',
    skill: 'listening',
    module: 'Core skills',
    level: 2,
    title: 'Predicting answers before you listen',
    minutes: 15,
    body: `
<p>Strong listeners are not faster at hearing; they know <strong>what kind of answer</strong> they are waiting for before the recording starts. You get about 30 seconds of reading time before each section. Use it like this.</p>
<h3>For every gap, ask four questions</h3>
<ol>
<li><strong>What type of word?</strong> Noun, verb, adjective, number, date, name?</li>
<li><strong>Singular or plural?</strong> Look at the words before the gap: <em>a/an</em> → singular; <em>two, several, many</em> → plural.</li>
<li><strong>What topic?</strong> Is it a place, an object, a cost, a reason?</li>
<li><strong>What might it be?</strong> Guess one possible answer. Even a wrong guess focuses your attention.</li>
</ol>
<div class="example">Cost of monthly membership: £___ → a number, probably between 10 and 100.<br>
Bring a ___ to the first class → a singular noun, an object you carry: towel? form? photo?<br>
The tour finishes at the ___ → a place: gate? car park? café?</div>
<h3>Underline the words that will be paraphrased</h3>
<p>The recording rarely uses the exact words on the page. Underline two or three key words per question and think of synonyms:</p>
<table>
<tr><th>On the page</th><th>You may hear</th></tr>
<tr><td>the most popular activity</td><td>what most people sign up for</td></tr>
<tr><td>cheaper</td><td>doesn't cost as much · more affordable · better value</td></tr>
<tr><td>before the course starts</td><td>in advance · ahead of the first session</td></tr>
<tr><td>staff</td><td>employees · the team · people who work here</td></tr>
<tr><td>not allowed</td><td>prohibited · you can't · it's against the rules</td></tr>
</table>
<h3>Keep your place</h3>
<p>Watch two questions at once: the one you are answering and the next one. If you hear the key words for the next question, you have missed the current one — leave it, stay with the recording, and guess at the end.</p>
<div class="note note--tip"><p>When the recording says "Now turn to Part 2" there is often still time before the reading time for Part 2 starts. Use it to check your Part 1 grammar and spelling quickly, then move on.</p></div>`,
    bn: 'রেকর্ডিং শুরুর আগে প্রশ্ন পড়ার সময়ে প্রতিটি ফাঁকা ঘরের জন্য ঠিক করুন: কোন ধরনের শব্দ (বিশেষ্য, সংখ্যা, নাম), একবচন না বহুবচন, আর সম্ভাব্য উত্তর কী হতে পারে। প্রশ্নের মূল শব্দগুলোর সমার্থক শব্দ ভেবে রাখুন, কারণ রেকর্ডিংয়ে হুবহু একই শব্দ খুব কম ব্যবহার হয়।',
    glossary: [
      ['predict', 'আগে থেকে অনুমান করা'],
      ['paraphrase', 'একই অর্থ ভিন্ন শব্দে প্রকাশ করা'],
      ['synonym', 'সমার্থক শব্দ'],
      ['key word', 'মূল শব্দ'],
      ['affordable', 'সাধ্যের মধ্যে / সস্তা'],
      ['in advance', 'আগেভাগে'],
      ['prohibited', 'নিষিদ্ধ'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'What kind of answer does each gap need?',
        items: [
          { q: 'The library closes at ___ on Saturdays.', options: ['a time', 'a person\'s name', 'a plural noun'], answer: 'A', explain: '"closes at ___ on Saturdays" needs a time.' },
          { q: 'Participants need to bring several ___', options: ['a singular noun', 'a plural noun', 'an adjective'], answer: 'B', explain: '"several" is followed by a plural noun.' },
          { q: 'The main problem with the old building was its ___', options: ['a noun', 'a verb', 'a number'], answer: 'A', explain: '"its ___" needs a noun, e.g. size, location, heating.' },
          { q: 'You see "cheaper". Which might you hear?', options: ['"it\'s better value"', '"it\'s more popular"', '"it\'s closer"'], answer: 'A', explain: '"better value" is a common paraphrase of cheaper.' },
        ],
      },
    ],
  },
  {
    id: 'l-distractors',
    skill: 'listening',
    module: 'Core skills',
    level: 2,
    title: 'Distractors: when speakers change their minds',
    minutes: 15,
    body: `
<p>IELTS recordings are written so that wrong answers are <em>mentioned</em>. A candidate who writes the first matching word loses the mark. Learn the patterns and you will see them coming.</p>
<h3>Pattern 1 — the correction</h3>
<div class="example">"We'll meet on Tuesday… actually, no, Tuesday's the staff meeting. Let's say Thursday."</div>
<h3>Pattern 2 — the rejected option</h3>
<div class="example">"We thought about the coach, but it takes six hours, so we're flying."</div>
<h3>Pattern 3 — the general and the specific</h3>
<div class="example">"Most groups visit in the morning, but yours is booked for two o'clock."</div>
<h3>Pattern 4 — the past and the present</h3>
<div class="example">"It used to cost forty pounds, but since January it's been forty-five."</div>
<h3>Pattern 5 — the suggestion that is refused</h3>
<div class="example">A: "How about the Italian place?" B: "I'd rather not — I went last week. What about the Thai restaurant?" A: "Fine."</div>
<h3>Signal words: the answer usually follows them</h3>
<p><strong>but · however · actually · in fact · instead · I'd rather · on second thoughts · unfortunately · the problem is · used to · not any more · apart from</strong></p>
<h3>In multiple choice</h3>
<p>All three options are often mentioned. Cross out each option when it is rejected. When the speakers move on, choose from what is left, and check <strong>who</strong> made the final decision.</p>
<div class="note note--tip"><p>Train with transcripts: after each practice test, highlight every distractor in the transcript and the word that signalled the change. After ten tests, you will start hearing the signals in real time.</p></div>`,
    bn: 'আইইএলটিএস রেকর্ডিংয়ে ভুল উত্তরগুলোও উচ্চারণ করা হয় — এগুলোকে distractor বলে। বক্তা প্রায়ই মত পরিবর্তন করেন বা কোনো প্রস্তাব বাতিল করেন। but, actually, instead, used to-এর মতো শব্দ শুনলে সতর্ক হন — আসল উত্তর সাধারণত এর পরে আসে।',
    glossary: [
      ['distractor', 'বিভ্রান্তিকর ভুল উত্তর'],
      ['change your mind', 'মত পরিবর্তন করা'],
      ['reject', 'প্রত্যাখ্যান করা / বাতিল করা'],
      ['on second thoughts', 'আবার ভেবে দেখার পর'],
      ['I\'d rather', 'আমি বরং … পছন্দ করব'],
      ['used to', 'আগে … করত (এখন আর নয়)'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Read the transcript and choose the correct answer.',
        items: [
          { q: '"The coach leaves at eight — oh, wait, they changed it. It\'s quarter past now." When does the coach leave?', options: ['8.00', '8.15', '7.45'], answer: 'B', explain: '"they changed it… quarter past" = 8.15. 8.00 is the distractor.' },
          { q: '"I was going to choose the history course, but the timetable clashes, so I\'ve gone for geography." Which course?', options: ['history', 'geography', 'both'], answer: 'B', explain: 'History is rejected because of the timetable clash.' },
          { q: '"Tickets were twenty pounds last year; this year they\'re twenty-two." The price now is:', options: ['£20', '£22', '£42'], answer: 'B', explain: '"last year" is the past (distractor); "this year" is the answer.' },
          { q: 'A: "Shall we meet at the library?" B: "It\'s closed on Sundays. Let\'s use the café opposite." Where will they meet?', options: ['the library', 'the café', 'outside the library'], answer: 'B', explain: 'The library is rejected because it is closed.' },
        ],
      },
    ],
  },
  {
    id: 'l-accents',
    skill: 'listening',
    module: 'Core skills',
    level: 2,
    title: 'Accents and connected speech',
    minutes: 15,
    body: `
<p>Many learners understand slow, careful English but get lost in natural speech. The problem is usually not vocabulary but <strong>connected speech</strong>: the way native speakers join, shorten and drop sounds.</p>
<h3>Five features of natural speech</h3>
<table>
<tr><th>Feature</th><th>Written</th><th>Sounds like</th></tr>
<tr><td>Linking</td><td>turn it off</td><td>tur-ni-toff</td></tr>
<tr><td>Weak forms</td><td>a cup of tea</td><td>a cuppa tea (of → /əv/ or /ə/)</td></tr>
<tr><td>Elision (dropped sounds)</td><td>next door · last week</td><td>nex door · las week</td></tr>
<tr><td>Contractions</td><td>I would have gone</td><td>I'd've gone</td></tr>
<tr><td>Assimilation</td><td>would you · don't you</td><td>wudju · dontcha</td></tr>
</table>
<h3>Accent differences worth knowing</h3>
<ul>
<li><strong>British (southern)</strong>: "r" after a vowel is silent (<em>car</em> = "cah"); "a" in <em>bath, can't</em> is long.</li>
<li><strong>American and Canadian</strong>: "r" is pronounced (<em>car</em>); "t" between vowels sounds like a soft "d" (<em>water</em> = "wadder").</li>
<li><strong>Australian and New Zealand</strong>: vowels shift — Australian <em>day</em> can sound close to "die"; New Zealand <em>six</em> can sound like "sux".</li>
</ul>
<h3>How to train your ear</h3>
<ol>
<li><strong>Short, repeated listening</strong>: take 30 seconds of a podcast, listen three times, write every word (dictation). Then check the transcript. Ten minutes a day is enough.</li>
<li><strong>Vary the accent each day</strong>: BBC (UK), ABC (Australia), RNZ (New Zealand), CBC (Canada), NPR (USA) all have free podcasts with transcripts.</li>
<li><strong>Shadowing</strong>: repeat a sentence immediately after the speaker, copying rhythm. Speaking it helps you hear it.</li>
</ol>`,
    bn: 'স্বাভাবিক ইংরেজিতে শব্দগুলো জুড়ে যায়, কিছু ধ্বনি বাদ পড়ে বা ছোট হয়ে যায় (connected speech)। ব্রিটিশ, আমেরিকান, অস্ট্রেলিয়ান, নিউজিল্যান্ড ও কানাডিয়ান — সব ধরনের উচ্চারণ শুনে অভ্যস্ত হন। প্রতিদিন ৩০ সেকেন্ডের অডিও শুনে হুবহু লিখে (ডিক্টেশন) ট্রান্সক্রিপ্টের সঙ্গে মিলিয়ে দেখুন।',
    glossary: [
      ['connected speech', 'স্বাভাবিক কথায় শব্দ জুড়ে বলা'],
      ['linking', 'এক শব্দের সঙ্গে পরের শব্দ জুড়ে যাওয়া'],
      ['weak form', 'দুর্বল/সংক্ষিপ্ত উচ্চারণ'],
      ['contraction', 'সংক্ষিপ্ত রূপ (যেমন I\'d, don\'t)'],
      ['dictation', 'শুনে শুনে লেখা'],
      ['shadowing', 'বক্তার সঙ্গে সঙ্গে হুবহু পুনরাবৃত্তি করা'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'What does the speaker most likely mean?',
        items: [
          { q: 'You hear "I shoulda called her."', options: ['I should call her.', 'I should have called her.', 'I shall call her.'], answer: 'B', explain: '"shoulda" = should have.' },
          { q: 'You hear "a cuppa coffee".', options: ['a cup of coffee', 'a copper coffee', 'a cupboard of coffee'], answer: 'A', explain: '"of" is reduced to /ə/.' },
          { q: 'You hear "dontcha think so?"', options: ['don\'t you think so?', 'don\'t touch it so', 'do not think so'], answer: 'A', explain: '"don\'t you" → "dontcha" (assimilation).' },
        ],
      },
    ],
  },

  // ---------------------------------------------------------- Question types
  {
    id: 'l-form',
    skill: 'listening',
    module: 'Question types',
    level: 1,
    title: 'Form, note and table completion',
    minutes: 20,
    body: `
<p>The most common Listening task. You fill gaps in a form (Part 1), notes or a table (any part). The answers are words or numbers heard in the recording.</p>
<h3>Step by step</h3>
<ol>
<li><strong>Read the instruction</strong> and circle the word limit.</li>
<li><strong>Read the headings</strong> of the form, notes or table — they tell you the topic of each section and the order of the conversation.</li>
<li><strong>Predict each gap</strong>: word type, singular/plural, possible answer.</li>
<li><strong>Listen for the heading words</strong> or their synonyms. When you hear them, the answer is close.</li>
<li><strong>Write while listening</strong>. Do not wait for the speaker to finish the sentence — but be ready to cross out and correct if they change their mind.</li>
<li><strong>Check grammar and spelling</strong> in the pause before the next section.</li>
</ol>
<h3>Tables: read in both directions</h3>
<p>In a table, each gap sits at a crossing of a row and a column. Read the row heading <em>and</em> the column heading: they tell you exactly what the gap is.</p>
<div class="example">
<table><tr><th>Course</th><th>Day</th><th>Cost</th></tr>
<tr><td>Pottery</td><td>Monday</td><td>£___</td></tr>
<tr><td>___</td><td>Wednesday</td><td>£60</td></tr></table>
Gap 1: the cost of pottery (a number). Gap 2: the name of a course that runs on Wednesday.</div>
<h3>Traps in this task</h3>
<ul>
<li>Spellings given letter by letter, then corrected ("No, that's Smyth with a Y").</li>
<li>Two numbers close together: a phone number and a reference number.</li>
<li>The answer is already partly on the page: "<em>___ Street</em>" — do not repeat "Street".</li>
</ul>`,
    bn: 'ফর্ম, নোট বা টেবিলের ফাঁকা ঘর পূরণ করা লিসেনিংয়ের সবচেয়ে সাধারণ প্রশ্ন। শিরোনাম পড়ে বুঝে নিন কথোপকথন কোন ক্রমে এগোবে। টেবিলে সারি আর কলাম — দুই দিকের শিরোনাম পড়লে বোঝা যায় ঘরে ঠিক কী লিখতে হবে।',
    glossary: [
      ['form', 'ফর্ম / নির্দিষ্ট ছক'],
      ['heading', 'শিরোনাম'],
      ['row / column', 'সারি / কলাম'],
      ['reference number', 'রেফারেন্স নম্বর / সূত্র নম্বর'],
      ['cross out', 'কেটে দেওয়া'],
    ],
    practice: [
      {
        type: 'gap',
        instructions: 'Read this transcript, then complete the form.',
        limit: 'ONE WORD AND/OR A NUMBER for each answer',
        maxWords: 2,
        items: [
          { q: '"My name\'s Anna Clarke — Clarke with an E on the end." Surname: ___', answer: 'Clarke', explain: 'C-L-A-R-K-E, with an E at the end.' },
          { q: '"I live at 17 Brook Lane — sorry, 71, I always mix those up." House number: ___ Brook Lane', answer: '71', explain: 'She corrects 17 to 71.' },
          { q: '"I\'d like the evening class, not the morning one." Class time: ___', answer: 'evening', explain: '"not the morning one" — morning is the distractor.' },
          { q: '"It\'s normally ninety pounds, but students get ten off." Student price: £___', answer: '80', explain: '£90 minus £10 = £80.' },
        ],
      },
    ],
  },
  {
    id: 'l-mcq',
    skill: 'listening',
    module: 'Question types',
    level: 2,
    title: 'Multiple choice (one answer and two answers)',
    minutes: 20,
    body: `
<p>Multiple choice is harder in Listening than in Reading, because you must read three options and listen at the same time. There are two formats:</p>
<ul>
<li><strong>Choose one answer</strong> from A, B or C.</li>
<li><strong>Choose TWO (or THREE) answers</strong> from a list of five or more. Each correct letter is one mark, in any order.</li>
</ul>
<h3>Step by step</h3>
<ol>
<li>In the reading time, <strong>underline the key idea in the question stem</strong> — this is what you listen for.</li>
<li><strong>Underline the difference</strong> between the options. Options often share a topic and differ in one detail (<em>cost vs time vs distance</em>).</li>
<li>Do not wait to hear an option word for word. Listen for <strong>meaning</strong>.</li>
<li>As the speakers reject options, <strong>cross them out</strong>.</li>
<li>Choose only when the speakers <strong>move on</strong> to the next question's topic.</li>
</ol>
<h3>Why the "obvious" option is often wrong</h3>
<p>The option that repeats words from the recording is frequently a distractor. The correct option usually <strong>paraphrases</strong> what is said.</p>
<div class="example">Recording: "What really made a difference was being able to work in smaller groups."<br>
Question: What did the students find most useful?<br>
A the larger classroom &nbsp; B the group size &nbsp; C the extra worksheets<br>
→ <strong>B</strong> (smaller groups = group size). "Classroom" was never said, but "larger" is a trap if you only heard "work in…".</div>
<h3>Choose TWO</h3>
<p>Keep a tally: mark ✓ or ✗ beside each option as it is discussed. Usually two options are clearly agreed, one is clearly rejected, and two are never mentioned or only mentioned in passing.</p>`,
    bn: 'মাল্টিপল চয়েস প্রশ্নে অপশনগুলোর পার্থক্যের জায়গাটি আগে থেকে দাগ দিয়ে রাখুন। বক্তা যে অপশন বাতিল করেন তা কেটে দিন। হুবহু একই শব্দ শুনলেই উত্তর ঠিক — এমন নয়; সঠিক উত্তর সাধারণত অন্য ভাষায় (প্যারাফ্রেজ) বলা হয়। "Choose TWO" প্রশ্নে প্রতিটি সঠিক অক্ষরের জন্য আলাদা নম্বর।',
    glossary: [
      ['question stem', 'প্রশ্নের মূল অংশ'],
      ['option', 'বিকল্প উত্তর'],
      ['in passing', 'প্রসঙ্গক্রমে, অল্প করে উল্লেখ'],
      ['tally', 'হিসাব রাখা / দাগ দিয়ে গোনা'],
      ['agree on', 'কোনো বিষয়ে একমত হওয়া'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Read the transcript and choose the correct answer.',
        items: [
          {
            q: '"We considered a survey, but response rates are so low these days. Interviews take longer, but we\'ll get much richer information." Which method will they use?',
            options: ['a survey', 'interviews', 'both a survey and interviews'],
            answer: 'B',
            explain: 'The survey is rejected (low response rates); interviews are chosen.',
          },
          {
            q: '"Honestly, the price was fine and the location\'s convenient. What put me off was how noisy the rooms were." What was the problem with the hotel?',
            options: ['the cost', 'where it was', 'the noise'],
            answer: 'C',
            explain: '"What put me off" signals the problem: noise. Price and location are both described positively.',
          },
        ],
      },
      {
        type: 'multi',
        instructions: 'Choose TWO letters.',
        items: [
          {
            q: '"The workshop will cover how to write a CV, of course, and we\'ll practise interview skills. We won\'t have time for networking this year, and salary negotiation is a separate session." Which TWO topics will the workshop cover?',
            options: ['writing a CV', 'networking', 'interview skills', 'salary negotiation', 'choosing a career'],
            answer: ['A', 'C'],
            explain: 'CV writing and interview skills are covered. Networking is dropped; salary negotiation is a separate session; careers are not mentioned.',
          },
        ],
      },
    ],
  },
  {
    id: 'l-matching',
    skill: 'listening',
    module: 'Question types',
    level: 2,
    title: 'Matching',
    minutes: 15,
    body: `
<p>You match a list of items (people, places, dates, questions) to a set of options (opinions, features, descriptions). There are usually more options than items, and some options may be used more than once — the instructions will say.</p>
<h3>Step by step</h3>
<ol>
<li>Read the <strong>options box</strong> carefully. It does not change, so learn it well: you will look at it many times.</li>
<li>The <strong>items</strong> (the numbered questions) come in the order of the recording. The options do not.</li>
<li>For each item, wait for its name, then listen for the <strong>meaning</strong> of one option.</li>
<li>Write the letter quickly and move to the next item.</li>
</ol>
<div class="example"><strong>Options:</strong> A too expensive &nbsp; B badly organised &nbsp; C very informative &nbsp; D too crowded<br>
Recording: "The museum? Well, you could hardly move — every school in the city seemed to be there."<br>
→ The museum: <strong>D</strong> (too crowded). Nothing about price or organisation.</div>
<h3>Common traps</h3>
<ul>
<li>A speaker mentions two options for the same item and rejects one: "It wasn't expensive at all, but it was a bit chaotic." → B, not A.</li>
<li>Two speakers disagree. The question will say whose opinion it wants (often "the woman's" or "the tutor's").</li>
</ul>`,
    bn: 'ম্যাচিং প্রশ্নে কয়েকটি আইটেমকে (মানুষ, স্থান ইত্যাদি) অপশন তালিকার সঙ্গে মেলাতে হয়। প্রশ্নগুলো রেকর্ডিংয়ের ক্রমে আসে, কিন্তু অপশনগুলো আসে না। অপশন বক্সটি ভালো করে পড়ে নিন এবং প্রতিটি আইটেমের নাম শোনার পর অর্থ খুঁজুন।',
    glossary: [
      ['options box', 'বিকল্পের তালিকা'],
      ['item', 'যে বিষয়টি মেলাতে হবে'],
      ['informative', 'তথ্যবহুল'],
      ['crowded', 'ভিড়পূর্ণ'],
      ['chaotic', 'বিশৃঙ্খল'],
    ],
    practice: [
      {
        type: 'match',
        instructions: 'What does the speaker say about each place? Choose from A–D.',
        optionsTitle: 'Comments',
        options: [
          { value: 'A', label: 'too expensive' },
          { value: 'B', label: 'badly organised' },
          { value: 'C', label: 'very informative' },
          { value: 'D', label: 'too crowded' },
        ],
        items: [
          { q: '"The castle tour? The guide clearly knew her history — I learned a huge amount." The castle', answer: 'C', explain: 'learned a huge amount = very informative.' },
          { q: '"The festival was fun, but nobody knew where anything was, and the buses never came." The festival', answer: 'B', explain: 'nobody knew where anything was = badly organised.' },
          { q: '"The zoo was lovely, but forty pounds for a family ticket? That\'s a lot." The zoo', answer: 'A', explain: '"forty pounds… that\'s a lot" = too expensive.' },
        ],
      },
    ],
  },
  {
    id: 'l-maps',
    skill: 'listening',
    module: 'Question types',
    level: 3,
    title: 'Maps, plans and diagrams',
    minutes: 20,
    body: `
<p>You label places on a map or plan (usually Part 2) or parts of a diagram, such as a machine or a process (usually Parts 2–4). Many candidates fear this task; with a routine it becomes one of the easiest.</p>
<h3>Before the recording</h3>
<ol>
<li>Find the <strong>starting point</strong> ("You are here", the entrance, the car park).</li>
<li>Check the <strong>orientation</strong> — is north at the top? Is there a compass?</li>
<li>Read every <strong>label already given</strong> so you recognise them instantly.</li>
<li>Note where the <strong>numbered gaps</strong> are in relation to the labelled places.</li>
</ol>
<h3>Language of position and direction</h3>
<table>
<tr><th>Expression</th><th>Meaning</th></tr>
<tr><td>opposite / facing</td><td>on the other side, looking at it</td></tr>
<tr><td>adjacent to · next to · alongside · beside</td><td>immediately at the side of</td></tr>
<tr><td>at the far end of</td><td>at the end furthest from you</td></tr>
<tr><td>just past · beyond</td><td>a little after, continuing the same way</td></tr>
<tr><td>in the corner of (a room) · on the corner of (two roads)</td><td>inside / outside at a corner</td></tr>
<tr><td>to the north-east of</td><td>up and to the right, if north is at the top</td></tr>
<tr><td>bear left · fork right</td><td>turn slightly left · take the right branch</td></tr>
<tr><td>clockwise · anticlockwise</td><td>in the direction of a clock's hands · the opposite way</td></tr>
</table>
<h3>During the recording</h3>
<p>Physically trace the route with your pencil (or cursor) as the speaker talks. When the speaker stops to describe a place, look for the nearest numbered gap.</p>
<h3>Diagrams</h3>
<p>Speakers describe machines and processes in a logical order — usually top to bottom, left to right, or first stage to last. Read the parts already labelled to see where the description will start.</p>`,
    bn: 'ম্যাপ বা প্ল্যানের প্রশ্নে আগে শুরু করার জায়গা ও উত্তর দিক (north) কোন দিকে তা খুঁজে নিন। opposite (বিপরীতে), next to (পাশে), at the far end (সবচেয়ে দূরের প্রান্তে) — এ ধরনের অবস্থান বোঝানোর শব্দ ভালোভাবে শিখুন। বক্তা যেভাবে পথ বর্ণনা করেন, পেন্সিল দিয়ে ম্যাপে সেভাবে অনুসরণ করুন।',
    glossary: [
      ['opposite', 'বিপরীত দিকে / মুখোমুখি'],
      ['adjacent to', 'সংলগ্ন / ঠিক পাশে'],
      ['at the far end', 'সবচেয়ে দূরের প্রান্তে'],
      ['beyond', 'ছাড়িয়ে / পেরিয়ে'],
      ['entrance', 'প্রবেশপথ'],
      ['clockwise', 'ঘড়ির কাঁটার দিকে'],
      ['anticlockwise', 'ঘড়ির কাঁটার উল্টো দিকে'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the correct meaning.',
        items: [
          { q: '"The café is opposite the gift shop."', options: ['next to the gift shop', 'across from the gift shop, facing it', 'inside the gift shop'], answer: 'B', explain: 'opposite = on the other side, facing.' },
          { q: '"Go through the gate and bear right."', options: ['turn sharply right', 'turn slightly right', 'go straight on'], answer: 'B', explain: 'bear right = turn slightly / keep to the right.' },
          { q: '"The toilets are at the far end of the corridor."', options: ['at the end nearest you', 'at the end furthest from you', 'in the middle'], answer: 'B', explain: 'far end = furthest end.' },
          { q: 'North is at the top of the map. "The lake is to the south-west of the house." The lake is:', options: ['below and to the left of the house', 'above and to the right of the house', 'below and to the right of the house'], answer: 'A', explain: 'South = down, west = left.' },
        ],
      },
    ],
  },
  {
    id: 'l-sentence',
    skill: 'listening',
    module: 'Question types',
    level: 2,
    title: 'Sentence, summary and flow-chart completion; short answers',
    minutes: 15,
    body: `
<p>These tasks give you sentences, a summary paragraph, a flow-chart or direct questions with a word limit. The skill is the same: <strong>predict, listen for the paraphrase, write the exact words you hear</strong>.</p>
<h3>Sentence completion</h3>
<p>The sentence on the page paraphrases the recording; the missing word is usually spoken exactly. Read the whole sentence: the words <em>after</em> the gap often tell you more than the words before it.</p>
<div class="example">The researchers chose the island because of its ___ climate. → an adjective: mild? dry? stable?</div>
<h3>Summary completion</h3>
<p>A paragraph with gaps. Sometimes you choose from a box of words; sometimes you write words from the recording. If there is a box, it will contain synonyms and distractors — match <strong>meaning</strong>, not sound.</p>
<h3>Flow-chart completion</h3>
<p>A process or sequence of steps. Follow the arrows: the speaker describes the steps in that order. Words like <em>first, then, once, after that, finally</em> mark each stage.</p>
<h3>Short-answer questions</h3>
<p>Direct questions: "What does the speaker recommend bringing?" Answer with the words from the recording, within the word limit — not a full sentence.</p>
<div class="note note--warn"><p>A frequent band-6 mistake: writing a correct idea in your own words. In completion tasks you must use the word(s) actually heard.</p></div>`,
    bn: 'বাক্য, সারাংশ বা ফ্লো-চার্ট পূরণের প্রশ্নে রেকর্ডিংয়ে যে শব্দটি শোনা যায় হুবহু সেটিই লিখতে হয় — নিজের ভাষায় নয়। ফাঁকা ঘরের পরের শব্দগুলোও পড়ুন, এগুলো প্রায়ই উত্তরের বড় ইঙ্গিত দেয়। ফ্লো-চার্টে first, then, finally-এর মতো শব্দ ধাপগুলো চিহ্নিত করে।',
    glossary: [
      ['summary', 'সারাংশ'],
      ['flow-chart', 'ধাপে ধাপে প্রক্রিয়ার চিত্র'],
      ['sequence', 'ক্রম'],
      ['stage', 'ধাপ / পর্যায়'],
      ['short answer', 'সংক্ষিপ্ত উত্তর'],
    ],
    practice: [
      {
        type: 'gap',
        instructions: 'Read the transcript extracts and complete the notes.',
        limit: 'ONE WORD ONLY',
        maxWords: 1,
        items: [
          { q: '"First, the leaves are dried in the sun for about two days." Stage 1: leaves are ___', answer: 'dried', explain: 'The step is drying.' },
          { q: '"After that, they\'re crushed by hand — machines damage them." Stage 2: leaves are crushed by ___', answer: 'hand', explain: '"by hand"; machines are rejected.' },
          { q: '"Finally, the tea is packed in tins, never plastic, to keep it fresh." Stage 3: tea is packed in ___', answer: 'tins', explain: 'tins (plural, matching the recording).' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------ Band 7 skills
  {
    id: 'l-part3',
    skill: 'listening',
    module: 'Band 7 skills',
    level: 3,
    title: 'Part 3: following a discussion',
    minutes: 15,
    body: `
<p>Part 3 is a conversation between two to four people in an education or training setting — students and a tutor discussing a project, a presentation or a piece of research. It is hard because you must track <strong>who thinks what</strong> while people agree, disagree, interrupt and change their minds.</p>
<h3>Agreement and disagreement</h3>
<table>
<tr><th>Agreeing</th><th>Disagreeing (often politely)</th></tr>
<tr><td>Exactly. · That's a good point. · I was thinking the same. · Fair enough.</td><td>I'm not so sure. · I see what you mean, but… · Maybe, although… · Do you really think so?</td></tr>
</table>
<p>A polite "I see what you mean, but…" is a disagreement. The answer is usually what comes after "but".</p>
<h3>Who decides?</h3>
<p>Questions often ask what the students <em>decide</em>, what the tutor <em>suggests</em>, or what one speaker <em>thinks</em>. Underline the person in each question. When the tutor speaks, their suggestion is usually accepted — but listen for the students' reply.</p>
<h3>Typical question focus in Part 3</h3>
<ul>
<li>Opinions about a source, method or result</li>
<li>Problems with a project and their solutions</li>
<li>What still needs to be done, and by whom</li>
</ul>
<div class="note note--tip"><p>Train with university seminar recordings and academic podcasts with two or more hosts. Pause after each turn and say aloud: "So she thinks… and he thinks…".</p></div>`,
    bn: 'পার্ট ৩-এ দুই থেকে চারজন শিক্ষার্থী ও শিক্ষক কোনো প্রজেক্ট বা গবেষণা নিয়ে আলোচনা করেন। কে কী মনে করছেন তা আলাদা করে খেয়াল রাখুন। "I see what you mean, but…" — এটি ভদ্রভাবে অসম্মতি; আসল মত সাধারণত but-এর পরে আসে। প্রশ্নে কার মত জানতে চাওয়া হয়েছে (ছাত্র না শিক্ষক) তা দাগ দিয়ে রাখুন।',
    glossary: [
      ['tutor', 'শিক্ষক / টিউটর'],
      ['seminar', 'সেমিনার / আলোচনা সভা'],
      ['disagree', 'অসম্মত হওয়া'],
      ['fair enough', 'ঠিক আছে, যুক্তিসঙ্গত'],
      ['suggest', 'পরামর্শ দেওয়া'],
      ['research', 'গবেষণা'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Read the transcript and choose the correct answer.',
        items: [
          {
            q: 'Tutor: "You could use the census data." Student A: "I see what you mean, but it\'s ten years old." Student B: "True. Let\'s run our own survey." What do the students decide?',
            options: ['to use the census data', 'to do their own survey', 'to ask the tutor again'],
            answer: 'B',
            explain: 'Both students reject the census data and choose their own survey.',
          },
          {
            q: 'A: "The interviews took far too long." B: "Did they? I thought the timing was fine. What I\'d change is the number of questions." What does B think?',
            options: ['The interviews were too long.', 'There were too many questions.', 'Nothing should change.'],
            answer: 'B',
            explain: 'B disagrees about the timing and wants to change the number of questions.',
          },
        ],
      },
    ],
  },
  {
    id: 'l-lectures',
    skill: 'listening',
    module: 'Band 7 skills',
    level: 3,
    title: 'Part 4: academic lectures',
    minutes: 20,
    body: `
<p>Part 4 is a monologue on an academic subject: ten questions, no break in the middle, usually note completion. At band 7 you need most of these, and the key is to follow the lecture's <strong>structure</strong> rather than every word.</p>
<h3>Signposts tell you where you are</h3>
<table>
<tr><th>Function</th><th>Language</th></tr>
<tr><td>Starting a new section</td><td>Let's turn to… · Moving on to… · The second point concerns…</td></tr>
<tr><td>Giving an example</td><td>Take, for instance… · A case in point is… · Consider…</td></tr>
<tr><td>Contrasting</td><td>Whereas… · By contrast… · Yet… · Despite this…</td></tr>
<tr><td>Cause and result</td><td>This led to… · As a consequence… · Which is why…</td></tr>
<tr><td>Defining</td><td>What we mean by… is… · This is known as… · In other words…</td></tr>
<tr><td>Concluding</td><td>To sum up… · What this tells us is… · The key point is…</td></tr>
</table>
<h3>Use the headings on your page</h3>
<p>The note headings are the lecturer's sections. When you hear the signpost for the next heading, move your eyes there — even if you missed a gap.</p>
<h3>Where the answers fall</h3>
<p>Gaps tend to be the key noun of a sentence: what something is made of, what it causes, what it is called, how much or how many. Before listening, label each gap: <em>material? cause? name? number?</em></p>
<h3>Academic vocabulary that appears again and again</h3>
<p>analyse · approach · assess · concept · consequence · data · establish · evidence · factor · method · phenomenon · principle · significant · source · theory · variable</p>
<h3>Train at speed</h3>
<ul>
<li>Listen to short academic talks (university open lectures, science podcasts) and write a five-line outline.</li>
<li>Listen again with the transcript and underline every signpost.</li>
<li>Once comfortable, try 1.2× speed: the real test will then feel slower.</li>
</ul>`,
    bn: 'পার্ট ৪ একটি একাডেমিক লেকচার, মাঝে কোনো বিরতি থাকে না। প্রতিটি শব্দ নয়, লেকচারের কাঠামো অনুসরণ করুন। "Moving on to…", "For instance…", "As a consequence…" এ ধরনের signpost শব্দ শুনে বুঝুন লেকচার কোন অংশে আছে। নোটের শিরোনামগুলোই লেকচারের অংশ নির্দেশ করে।',
    glossary: [
      ['lecture', 'বক্তৃতা / লেকচার'],
      ['signpost', 'পথনির্দেশক শব্দ/বাক্যাংশ'],
      ['consequence', 'পরিণাম / ফলাফল'],
      ['phenomenon', 'ঘটনা / প্রপঞ্চ'],
      ['evidence', 'প্রমাণ'],
      ['factor', 'কারণ / উপাদান'],
      ['variable', 'চলক / পরিবর্তনশীল বিষয়'],
    ],
    practice: [
      {
        type: 'match',
        instructions: 'What is the speaker doing in each extract? Choose from A–D.',
        optionsTitle: 'Functions',
        options: [
          { value: 'A', label: 'giving an example' },
          { value: 'B', label: 'introducing a contrast' },
          { value: 'C', label: 'moving to a new section' },
          { value: 'D', label: 'explaining a result' },
        ],
        items: [
          { q: '"A case in point is the city of Curitiba in Brazil…"', answer: 'A', explain: '"A case in point" introduces an example.' },
          { q: '"…which is why the population fell so sharply."', answer: 'D', explain: '"which is why" introduces a result.' },
          { q: '"Let\'s turn now to the economic effects."', answer: 'C', explain: '"Let\'s turn to" starts a new section.' },
          { q: '"By contrast, the northern region saw almost no change."', answer: 'B', explain: '"By contrast" signals a contrast.' },
        ],
      },
    ],
  },
  {
    id: 'l-review',
    skill: 'listening',
    module: 'Band 7 skills',
    level: 3,
    title: 'From 25 to 30+: reviewing practice tests',
    minutes: 15,
    body: `
<p>Doing practice test after practice test without analysis is the most common reason scores stop rising at 6–6.5. The improvement comes from <strong>what you do after marking</strong>.</p>
<h3>The error log</h3>
<p>Keep a table. For every wrong answer, record the question type and the reason:</p>
<table>
<tr><th>Reason</th><th>What it means</th><th>Fix</th></tr>
<tr><td>Spelling / grammar</td><td>You heard it but wrote it wrongly.</td><td>Spelling list; check plurals in the pause.</td></tr>
<tr><td>Word limit</td><td>Too many words.</td><td>Circle the limit before listening.</td></tr>
<tr><td>Distractor</td><td>You wrote the first thing you heard.</td><td>Distractors lesson; wait for confirmation.</td></tr>
<tr><td>Lost place</td><td>You missed this and the next answer.</td><td>Watch two questions at once.</td></tr>
<tr><td>Didn't recognise the word</td><td>Vocabulary or pronunciation gap.</td><td>Add it to your vocabulary list, say it aloud.</td></tr>
<tr><td>Paraphrase</td><td>The meaning was there; you didn't connect it.</td><td>Transcript work: underline paraphrases.</td></tr>
</table>
<h3>Transcript work (the most useful 20 minutes)</h3>
<ol>
<li>After marking, play the recording again with the transcript.</li>
<li>Find each answer in the transcript and underline it.</li>
<li>Draw a line from each question to the words that answer it. Notice the paraphrase.</li>
<li>Mark every distractor in a different colour.</li>
</ol>
<h3>Simulate the real test</h3>
<p>From week 6, do full tests in one go, with headphones, no pausing, and the transfer time (paper) or 2-minute check (computer) — whichever you will take.</p>`,
    bn: 'শুধু প্র্যাকটিস টেস্ট দিলে স্কোর বাড়ে না; ভুলগুলো বিশ্লেষণ করতে হয়। প্রতিটি ভুলের কারণ লিখে রাখুন: বানান, শব্দসীমা, distractor, জায়গা হারানো, অজানা শব্দ, নাকি প্যারাফ্রেজ বুঝতে না পারা। তারপর ট্রান্সক্রিপ্টে উত্তর ও distractor দাগ দিয়ে মিলিয়ে দেখুন।',
    glossary: [
      ['error log', 'ভুলের তালিকা / খাতা'],
      ['analysis', 'বিশ্লেষণ'],
      ['transcript', 'অডিওর লিখিত রূপ'],
      ['simulate', 'বাস্তব পরিস্থিতির মতো অনুশীলন করা'],
      ['confirmation', 'নিশ্চিতকরণ'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the most likely reason for each mistake.',
        items: [
          { q: 'Answer: "libary". Correct: "library".', options: ['distractor', 'spelling', 'word limit'], answer: 'B', explain: 'A spelling error.' },
          { q: 'You wrote "Monday"; the speaker said "Monday — no, Wednesday".', options: ['distractor', 'lost place', 'paraphrase'], answer: 'A', explain: 'Monday was the distractor.' },
          { q: 'You left questions 24 and 25 blank and then heard the answer to 26.', options: ['spelling', 'lost place', 'word limit'], answer: 'B', explain: 'You lost your place.' },
        ],
      },
    ],
  },
];
