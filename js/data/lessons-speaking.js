export default [
  // ------------------------------------------------------------ Know the test
  {
    id: 's-format',
    skill: 'speaking',
    module: 'Know the test',
    level: 1,
    title: 'How the Speaking test works',
    minutes: 15,
    body: `
<p>Speaking is a face-to-face conversation with a certified examiner (in some test types, by video call). It lasts <strong>11–14 minutes</strong>, is <strong>recorded</strong>, and is the same for Academic and General Training. It may be on the same day as the other papers or up to about a week before or after.</p>
<table>
<tr><th>Part</th><th>Length</th><th>What happens</th></tr>
<tr><td>1 — Introduction and interview</td><td>4–5 minutes</td><td>The examiner checks your identity, then asks questions on familiar topics: your home, work or studies, and two or three everyday topics.</td></tr>
<tr><td>2 — Long turn</td><td>3–4 minutes</td><td>You get a task card, paper and pencil and <strong>one minute to prepare</strong>. Then you speak for <strong>1–2 minutes</strong>. The examiner stops you at two minutes and may ask one or two short follow-up questions.</td></tr>
<tr><td>3 — Discussion</td><td>4–5 minutes</td><td>A deeper discussion of more abstract issues linked to the Part 2 topic.</td></tr>
</table>
<h3>The four criteria (each 25%)</h3>
<table>
<tr><th>Criterion</th><th>What band 7 sounds like (plain English)</th></tr>
<tr><td><strong>Fluency and Coherence</strong></td><td>Speaks at length without obvious effort; pauses are mostly for ideas, not words; uses a range of linking phrases.</td></tr>
<tr><td><strong>Lexical Resource</strong></td><td>Flexible vocabulary on familiar and unfamiliar topics; some less common and idiomatic expressions; paraphrases smoothly.</td></tr>
<tr><td><strong>Grammatical Range and Accuracy</strong></td><td>A range of complex structures; many sentences without errors; some mistakes remain.</td></tr>
<tr><td><strong>Pronunciation</strong></td><td>Easy to understand throughout; good control of stress, rhythm and intonation; accent does not reduce clarity.</td></tr>
</table>
<h3>What is NOT tested</h3>
<ul>
<li><strong>Your opinions or knowledge.</strong> A simple, honest idea expressed well scores as high as a clever one.</li>
<li><strong>Your accent.</strong> A Bangladeshi accent is fine; what matters is being easy to understand.</li>
<li><strong>Whether your story is true.</strong> In Part 2 you may invent details if you cannot think of a real example.</li>
</ul>
<h3>Rules worth knowing</h3>
<ul>
<li>You may ask the examiner to <strong>repeat</strong> a question. In Part 1 they can only repeat it; in Part 3 they can also rephrase it.</li>
<li>Being interrupted in Part 1 or at two minutes in Part 2 is normal and not a penalty — the examiner must keep to time.</li>
<li>Bring the same ID you used when you registered.</li>
</ul>`,
    bn: 'স্পিকিং টেস্ট ১১–১৪ মিনিটের মুখোমুখি কথোপকথন, তিনটি অংশে বিভক্ত এবং রেকর্ড করা হয়। পার্ট ২-এ এক মিনিট প্রস্তুতি নিয়ে ১–২ মিনিট কথা বলতে হয়। আপনার মতামত, জ্ঞান বা উচ্চারণের আঞ্চলিক টান মূল্যায়ন করা হয় না — মূল্যায়ন হয় সাবলীলতা, শব্দভান্ডার, ব্যাকরণ ও স্পষ্ট উচ্চারণের ওপর।',
    glossary: [
      ['examiner', 'পরীক্ষক'],
      ['task card / cue card', 'বিষয় ও নির্দেশনাসহ কার্ড'],
      ['follow-up question', 'পরবর্তী সংক্ষিপ্ত প্রশ্ন'],
      ['fluency', 'সাবলীলতা'],
      ['intonation', 'স্বরের ওঠানামা'],
      ['rephrase', 'ভিন্নভাবে প্রশ্নটি বলা'],
      ['abstract', 'বিমূর্ত'],
    ],
    practice: [
      {
        type: 'tfng',
        instructions: 'Based on the lesson, are these TRUE, FALSE or NOT GIVEN?',
        items: [
          { q: 'You get one minute to prepare in Part 2.', answer: 'TRUE', explain: 'One minute with paper and pencil.' },
          { q: 'A strong Bangladeshi accent automatically lowers your Pronunciation score.', answer: 'FALSE', explain: 'Accent is not penalised; clarity is what matters.' },
          { q: 'In Part 1 the examiner can explain a question in different words.', answer: 'FALSE', explain: 'In Part 1 the examiner can only repeat the question.' },
          { q: 'Being stopped at two minutes in Part 2 lowers your score.', answer: 'FALSE', explain: 'It is normal timing, not a penalty.' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------- Part by part
  {
    id: 's-part1',
    skill: 'speaking',
    module: 'Part by part',
    level: 1,
    title: 'Part 1: answers that are long enough',
    minutes: 20,
    body: `
<p>One-word or one-sentence answers give the examiner nothing to assess. Aim for <strong>2–3 sentences, about 15–20 seconds</strong>, for each Part 1 question.</p>
<h3>The A-R-E pattern</h3>
<ul>
<li><strong>A</strong>nswer directly</li>
<li><strong>R</strong>eason: why?</li>
<li><strong>E</strong>xample or extra detail: when, who, what happened</li>
</ul>
<div class="compare">
<div class="weak"><h4>Too short</h4><p><em>Do you like cooking?</em><br>Yes, I do.</p></div>
<div class="strong"><h4>Better</h4><p><em>Do you like cooking?</em><br>Yes, quite a lot, actually. It helps me switch off after work, and I like experimenting. Last weekend, for instance, I tried making shorshe ilish the way my grandmother does — it wasn't perfect, but my family ate all of it.</p></div>
</div>
<h3>Answering "work or study"</h3>
<div class="example"><em>Do you work or are you a student?</em><br>I'm in my final year at university, studying business administration in Dhaka. I chose it mainly because I'd like to start my own company one day, and so far the marketing courses have been the most useful.</div>
<h3>Common Part 1 topics</h3>
<p>Home and accommodation · Hometown · Work · Studies · Daily routine · Food and cooking · Weather and seasons · Music · Reading · Films · Sport · Technology and phones · Transport · Holidays · Friends · Shopping · Clothes · Weekends · Animals · Colours · Sleep · Gifts · Neighbours · Festivals</p>
<h3>Mistakes to avoid</h3>
<ul>
<li>Memorised answers: examiners notice the change in rhythm and may ask an unexpected follow-up.</li>
<li>Repeating the question's exact words: <em>"Do you like reading?" — "Yes, I like reading."</em> Vary it: <em>"Yes, I'm a big reader…"</em></li>
<li>Talking for a minute: Part 1 is short; the examiner will interrupt.</li>
</ul>`,
    bn: 'পার্ট ১-এ প্রতিটি প্রশ্নের উত্তর ২–৩ বাক্যে দিন: সরাসরি উত্তর (Answer), কারণ (Reason), উদাহরণ বা বাড়তি তথ্য (Example)। প্রশ্নের শব্দ হুবহু পুনরাবৃত্তি না করে অন্যভাবে বলুন। মুখস্থ উত্তর পরীক্ষকেরা বুঝে ফেলেন।',
    glossary: [
      ['extend (an answer)', '(উত্তর) বিস্তারিত করা'],
      ['switch off', 'মাথা থেকে কাজের চিন্তা সরিয়ে বিশ্রাম নেওয়া'],
      ['business administration', 'ব্যবসায় প্রশাসন'],
      ['experiment', 'পরীক্ষা-নিরীক্ষা করা'],
      ['accommodation', 'থাকার জায়গা / বাসস্থান'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Which is the best Part 1 answer?',
        items: [
          { q: 'Do you enjoy rainy days?', options: ['Yes.', 'Yes, I do enjoy rainy days.', 'Honestly, I love them, as long as I don\'t have to travel. There\'s nothing better than khichuri at home while it pours outside.'], answer: 'C', explain: 'Answer + reason/condition + vivid detail.' },
          { q: 'Do you like reading?', options: ['Yes, I like reading.', 'Yes, I\'m a big reader, mostly of crime novels — I usually read for half an hour before bed.', 'Reading is very important for everyone in the world because it gives knowledge.'], answer: 'B', explain: 'Personal, extended, and avoids repeating the question. C is generic and sounds memorised.' },
        ],
      },
    ],
  },
  {
    id: 's-part2',
    skill: 'speaking',
    module: 'Part by part',
    level: 2,
    title: 'Part 2: one minute to plan two minutes of talk',
    minutes: 25,
    body: `
<p>The task card gives a topic and three or four prompts. You speak for up to two minutes; the examiner stops you. Speaking for the full two minutes is a strong fluency signal.</p>
<h3>Cue cards fall into five families</h3>
<table>
<tr><th>Family</th><th>Examples</th><th>Easy structure</th></tr>
<tr><td>A person</td><td>someone who influenced you · a helpful neighbour</td><td>who → how you know them → what they're like → story → why important</td></tr>
<tr><td>A place</td><td>a place to relax · a city you'd like to visit</td><td>where → what it's like → what you do there → why special</td></tr>
<tr><td>An object</td><td>a gift you received · technology you use</td><td>what → where it came from → how you use it → why it matters</td></tr>
<tr><td>An event or experience</td><td>a celebration · a time you helped someone</td><td>when/where → who → what happened (past tenses) → how you felt</td></tr>
<tr><td>An activity or plan</td><td>a skill you'd like to learn · a trip you plan</td><td>what → why → how (future forms) → what it would change</td></tr>
</table>
<p>Prepare one versatile story for each family — a person, a place, an object and an event you can describe well can be adapted to dozens of cards.</p>
<h3>Use the minute to write keywords, not sentences</h3>
<div class="example">Describe a place you like to visit to relax.<br>
• where: Sajek Valley? no — grandfather's village, Sylhet, tea gardens<br>
• when: Eid holidays, winter best<br>
• what you do: walk in tea gardens, no phone signal, fish in pond<br>
• why relaxing: quiet, green, childhood memories</div>
<h3>A shape for the talk</h3>
<ol>
<li>Open with one sentence: <em>I'd like to talk about…</em></li>
<li>Cover each prompt in order, about 20–30 seconds each.</li>
<li>Spend the most time on the last prompt ("explain why…"): it shows reasoning and feelings.</li>
<li>If you finish early: add a comparison (<em>It's quite different from…</em>), a feeling (<em>What I remember most is…</em>), or a future plan (<em>I'm hoping to go back…</em>).</li>
</ol>
<div class="note note--tip"><p>Practise with the timer every day: one minute to prepare, two minutes to talk, recorded. The <a href="#/speaking">speaking practice pages</a> time both for you.</p></div>`,
    bn: 'পার্ট ২-এ কিউ কার্ডের বিষয়ে ১ মিনিট প্রস্তুতি নিয়ে ২ মিনিট কথা বলতে হয়। কার্ডগুলো সাধারণত পাঁচ ধরনের: ব্যক্তি, স্থান, বস্তু, ঘটনা/অভিজ্ঞতা ও পরিকল্পনা। প্রস্তুতির সময়ে বাক্য নয়, শুধু মূল শব্দ লিখুন। শেষ প্রশ্ন ("explain why") নিয়ে সবচেয়ে বেশি সময় কথা বলুন।',
    glossary: [
      ['prompt', 'নির্দেশক পয়েন্ট'],
      ['versatile', 'বহুমুখী / নানা কাজে লাগে এমন'],
      ['keyword', 'মূল শব্দ'],
      ['childhood memories', 'শৈশবের স্মৃতি'],
      ['vivid', 'জীবন্ত / স্পষ্ট'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best answer.',
        items: [
          { q: 'What should you write during the preparation minute?', options: ['full sentences to read aloud', 'keywords for each prompt', 'nothing'], answer: 'B', explain: 'Keywords keep you organised without reading aloud.' },
          { q: 'You finish talking after 70 seconds. Best action?', options: ['Stop and wait.', 'Add a comparison, a feeling or a future plan.', 'Ask the examiner for another card.'], answer: 'B', explain: 'Keep going until the examiner stops you.' },
          { q: 'Which prompt deserves the most time?', options: ['the first one', 'the last one, usually "explain why"', 'none of them'], answer: 'B', explain: 'It lets you show reasoning and feelings.' },
        ],
      },
    ],
  },
  {
    id: 's-part3',
    skill: 'speaking',
    module: 'Part by part',
    level: 3,
    title: 'Part 3: discussing abstract ideas',
    minutes: 25,
    body: `
<p>Part 3 moves from your life to society: <em>Why do people…? How has… changed? Should governments…? What will happen in future?</em> This is where band 7 is won or lost: the examiner wants <strong>extended, reasoned answers</strong> with complex language.</p>
<h3>Answer – Explain – Example – (Alternative) – Conclude</h3>
<div class="example"><em>Why do some people prefer to live in the countryside?</em><br>
I think the main reason is a different relationship with time. In cities like Dhaka, life tends to be organised around traffic and long working hours, whereas in the countryside people often feel they have more control over their day. That said, it isn't always a realistic option, because many jobs, particularly in specialised fields, are concentrated in cities. So I'd say it's increasingly people who can work remotely who make that choice.</div>
<h3>Six Part 3 question types and how to answer them</h3>
<table>
<tr><th>Question type</th><th>Example</th><th>Useful language</th></tr>
<tr><td>Opinion</td><td>Should cooking be taught in schools?</td><td>I'd argue that… · I'm inclined to think…</td></tr>
<tr><td>Comparison</td><td>How is shopping different now?</td><td>Whereas a generation ago…, these days…</td></tr>
<tr><td>Cause</td><td>Why do people move abroad?</td><td>It's largely down to… · One factor is…</td></tr>
<tr><td>Future</td><td>How will work change?</td><td>I'd imagine that… · It's likely that… · In the long run…</td></tr>
<tr><td>Evaluation</td><td>Is tourism good for local people?</td><td>On balance… · It depends on… · The upside is…, but…</td></tr>
<tr><td>Hypothetical</td><td>What would happen if cars were banned?</td><td>If that happened, I suspect… · It would probably…</td></tr>
</table>
<h3>Speak about people in general, not only yourself</h3>
<p>Part 3 is about society. Use <em>people tend to · many families · young people in Bangladesh · governments</em>. A personal example is fine as support, but not as the whole answer.</p>
<div class="note note--tip"><p>When the question is hard, it is fine to say "That's a difficult one — I haven't thought about it much, but I'd guess…" and reason aloud. The examiner marks your language, not whether your idea is right.</p></div>`,
    bn: 'পার্ট ৩-এ ব্যক্তিগত জীবন থেকে সমাজের বিষয়ে আলোচনা হয়। উত্তর দিন, ব্যাখ্যা করুন, উদাহরণ দিন, প্রয়োজনে অন্য দিকটিও বলুন, তারপর উপসংহার টানুন। শুধু নিজের কথা না বলে সাধারণ মানুষ ও সমাজ নিয়ে কথা বলুন (people tend to, many families)। কঠিন প্রশ্নে সময় নিয়ে যুক্তি দিয়ে চিন্তা প্রকাশ করুন।',
    glossary: [
      ['abstract', 'বিমূর্ত'],
      ['realistic', 'বাস্তবসম্মত'],
      ['specialised', 'বিশেষায়িত'],
      ['remotely', 'দূর থেকে (অনলাইনে)'],
      ['on balance', 'সব দিক বিবেচনা করে'],
      ['hypothetical', 'কাল্পনিক'],
      ['in the long run', 'দীর্ঘমেয়াদে'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Which is the best Part 3 answer?',
        items: [
          {
            q: 'Do you think people read less than in the past?',
            options: [
              'Yes. I don\'t read much.',
              'I\'d say people read just as much, but differently. Whereas my parents read newspapers and novels, young people today read constantly on their phones — news, messages, articles. What has probably declined is long, focused reading, which arguably matters more.',
              'Reading is very important for knowledge and everyone should read books.',
            ],
            answer: 'B',
            explain: 'Clear view, comparison, explanation and a nuanced conclusion. A is personal and short; C is generic.',
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------- Band 7 delivery
  {
    id: 's-fluency',
    skill: 'speaking',
    module: 'Band 7 delivery',
    level: 2,
    title: 'Fluency: buying time naturally',
    minutes: 15,
    body: `
<p>Everyone pauses to think, including native speakers. What lowers a fluency score is long silence, repeating yourself, and restarting sentences. Fill thinking time with natural language.</p>
<h3>Phrases that give you time</h3>
<table>
<tr><th>Situation</th><th>Say</th></tr>
<tr><td>A question you've never thought about</td><td>That's an interesting question — I haven't really thought about it before, but I suppose…</td></tr>
<tr><td>You need a second</td><td>Let me think… · How can I put this…</td></tr>
<tr><td>You've forgotten a word</td><td>It's a kind of… · I can't remember the exact word, but it's what you use to…</td></tr>
<tr><td>Two sides</td><td>Well, it depends. On the one hand… but on the other…</td></tr>
<tr><td>You didn't understand</td><td>Sorry, could you repeat the question?</td></tr>
</table>
<h3>Paraphrase around missing words</h3>
<p>Forgot "dishwasher"? Say "the machine that cleans plates after a meal". Paraphrasing smoothly is itself evidence of lexical skill.</p>
<h3>Discourse markers</h3>
<p><em>Well · actually · to be honest · I mean · the thing is · as far as I know · mind you</em> — used naturally, they connect speech. Over-used, they sound learned. Vary them.</p>
<h3>Fluency drill: the 2-minute rule</h3>
<p>Pick any topic (your phone, the rain, your street). Speak for two minutes without stopping, recording yourself. Do not correct mistakes — keep going. Do one a day for 30 days.</p>
<div class="note"><p>Do not speak too fast to sound fluent. A steady, clear pace with natural pauses is better than rushing; speed is not one of the criteria.</p></div>`,
    bn: 'সাবলীলতার জন্য দীর্ঘ নীরবতা, একই কথা বারবার বলা ও বাক্য বারবার নতুন করে শুরু করা এড়িয়ে চলুন। ভাবার সময় "Let me think…", "That\'s an interesting question…"-এর মতো স্বাভাবিক বাক্যাংশ ব্যবহার করুন। কোনো শব্দ ভুলে গেলে সেটি ব্যাখ্যা করে বলুন। খুব দ্রুত বলার দরকার নেই — স্পষ্ট ও স্থির গতিই ভালো।',
    glossary: [
      ['hesitation', 'দ্বিধা / থেমে থেমে বলা'],
      ['discourse marker', 'কথোপকথনের সংযোগসূচক শব্দ'],
      ['paraphrase', 'অন্যভাবে বুঝিয়ে বলা'],
      ['pace', 'গতি'],
      ['restart', 'নতুন করে শুরু করা'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the best response.',
        items: [
          { q: 'You forget the word "umbrella".', options: ['Stay silent until you remember.', 'Say "the thing you hold over your head when it rains".', 'Say the Bangla word.'], answer: 'B', explain: 'Paraphrase keeps you fluent and shows lexical skill.' },
          { q: 'You did not hear the question clearly.', options: ['Guess and answer something.', 'Ask: "Sorry, could you repeat the question?"', 'Wait silently.'], answer: 'B', explain: 'Asking for repetition is allowed and not penalised.' },
        ],
      },
    ],
  },
  {
    id: 's-vocab',
    skill: 'speaking',
    module: 'Band 7 delivery',
    level: 3,
    title: 'Vocabulary for band 7 speaking',
    minutes: 20,
    body: `
<p>Band 7 Lexical Resource in Speaking means <strong>flexibility</strong> (talking about any topic), <strong>precision</strong> (the exact word), some <strong>less common and idiomatic</strong> vocabulary, and <strong>paraphrase</strong>.</p>
<h3>Replace "very + adjective"</h3>
<table>
<tr><th>Instead of</th><th>Try</th></tr>
<tr><td>very good</td><td>excellent · superb · fantastic</td></tr>
<tr><td>very bad</td><td>awful · dreadful · terrible</td></tr>
<tr><td>very big</td><td>huge · enormous · massive</td></tr>
<tr><td>very tired</td><td>exhausted · worn out</td></tr>
<tr><td>very interesting</td><td>fascinating · absorbing</td></tr>
<tr><td>very crowded</td><td>packed · jam-packed</td></tr>
</table>
<h3>Natural, idiomatic expressions — used in the right place</h3>
<table>
<tr><th>Expression</th><th>Meaning</th><th>Example</th></tr>
<tr><td>a breath of fresh air</td><td>pleasantly different</td><td>The new teacher was a breath of fresh air.</td></tr>
<tr><td>once in a blue moon</td><td>very rarely</td><td>I eat fast food once in a blue moon.</td></tr>
<tr><td>hit the books</td><td>study hard</td><td>Before exams I really hit the books.</td></tr>
<tr><td>on the go</td><td>busy, active</td><td>I'm on the go from morning till night.</td></tr>
<tr><td>get the hang of</td><td>learn how to do</td><td>It took weeks to get the hang of driving.</td></tr>
<tr><td>a far cry from</td><td>very different from</td><td>Village life is a far cry from Dhaka.</td></tr>
</table>
<div class="note note--warn"><p>Idioms must fit naturally. Forcing "it's raining cats and dogs" into every answer sounds memorised and can lower your score. One or two well-chosen expressions per part is plenty.</p></div>
<h3>Topic vocabulary</h3>
<p>Learn words in topic groups with collocations — the <a href="#/vocabulary">vocabulary section</a> has 16 topics with Bengali meanings.</p>`,
    bn: 'স্পিকিংয়ে ব্যান্ড ৭-এর জন্য very good, very big-এর বদলে excellent, enormous-এর মতো সুনির্দিষ্ট শব্দ ব্যবহার করুন। কিছু স্বাভাবিক ইডিয়ম (once in a blue moon, get the hang of) প্রসঙ্গমতো ব্যবহার করুন, কিন্তু জোর করে নয় — জোর করে ঢোকানো ইডিয়ম মুখস্থ শোনায়।',
    glossary: [
      ['idiom / idiomatic', 'বাগধারা / বাগধারাপূর্ণ'],
      ['exhausted', 'অত্যন্ত ক্লান্ত'],
      ['fascinating', 'মুগ্ধকর'],
      ['once in a blue moon', 'কালেভদ্রে'],
      ['get the hang of', 'রপ্ত করা'],
      ['a far cry from', 'অনেক আলাদা'],
      ['packed', 'ঠাসাঠাসি ভিড়'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the most natural option.',
        items: [
          { q: 'After the 12-hour bus journey I was ___.', options: ['very much tired', 'exhausted', 'tiredful'], answer: 'B', explain: 'exhausted = very tired.' },
          { q: 'I only go to the cinema ___ — maybe once a year.', options: ['once in a blue moon', 'on the go', 'a breath of fresh air'], answer: 'A', explain: 'once in a blue moon = very rarely.' },
          { q: 'It took me a month to ___ the new software.', options: ['hit the books', 'get the hang of', 'go viral'], answer: 'B', explain: 'get the hang of = learn how to use.' },
        ],
      },
    ],
  },
  {
    id: 's-grammar',
    skill: 'speaking',
    module: 'Band 7 delivery',
    level: 3,
    title: 'Grammar for speaking: tenses and complex sentences',
    minutes: 20,
    body: `
<p>Speaking examiners listen for a <strong>range of structures</strong> and how accurate they are. The questions themselves invite different grammar — use it.</p>
<table>
<tr><th>The question asks about</th><th>Use</th><th>Example</th></tr>
<tr><td>the past (Part 2 events)</td><td>past simple, past continuous, past perfect</td><td>We <em>had been</em> walking for hours when it <em>started</em> to rain.</td></tr>
<tr><td>changes up to now</td><td>present perfect</td><td>Dhaka <em>has changed</em> enormously since I was a child.</td></tr>
<tr><td>habits in the past</td><td>used to / would</td><td>We <em>used to</em> play cricket in the lane every evening.</td></tr>
<tr><td>the future</td><td>will, going to, might, I'd imagine</td><td>I <em>think</em> more people <em>will</em> work from home.</td></tr>
<tr><td>imaginary situations</td><td>second and third conditionals</td><td>If I <em>had</em> more time, I'd learn to play the tabla.</td></tr>
<tr><td>preferences</td><td>would rather, prefer … to …</td><td>I'd rather read than watch TV.</td></tr>
</table>
<h3>Complex sentences come naturally in speech</h3>
<ul>
<li>Relative clauses: <em>My uncle, who lives in Chattogram, …</em></li>
<li>Reasons and results: <em>…, which is why I…</em></li>
<li>Contrast: <em>Although it's tiring, I enjoy it.</em></li>
<li>Cleft sentences for emphasis: <em>What I love most about it is…</em></li>
</ul>
<h3>Errors to watch in your recordings</h3>
<p>Missing -s (<em>he go</em>), missing past tense in stories (<em>yesterday I go</em>), "he/she" mixed up — very common for Bangla speakers because Bangla uses one pronoun (সে / তিনি) for both.</p>`,
    bn: 'প্রশ্নের ধরন অনুযায়ী বিভিন্ন কাল (tense) ব্যবহার করুন: অতীতের ঘটনায় past tense, এখন পর্যন্ত পরিবর্তনে present perfect, আগের অভ্যাসে used to, কাল্পনিক অবস্থায় conditional। বাংলায় "সে" দিয়ে ছেলে-মেয়ে দুজনকেই বোঝায়, তাই অনেকে he/she গুলিয়ে ফেলেন — রেকর্ডিং শুনে এটি খেয়াল করুন।',
    glossary: [
      ['tense', 'কাল'],
      ['habit', 'অভ্যাস'],
      ['conditional', 'শর্তসাপেক্ষ বাক্য'],
      ['emphasis', 'জোর দেওয়া'],
      ['cleft sentence', 'জোর দেওয়ার জন্য ভাগ করা বাক্য (What I love is…)'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the correct form.',
        items: [
          { q: 'When I was a child, we ___ fly kites every winter.', options: ['used to', 'are used to', 'use to be'], answer: 'A', explain: 'used to + verb for past habits.' },
          { q: 'My city ___ a lot in the last ten years.', options: ['changed', 'has changed', 'is changing since'], answer: 'B', explain: '"in the last ten years" up to now → present perfect.' },
          { q: 'My sister is a doctor. ___ works in Sylhet.', options: ['He', 'She', 'They'], answer: 'B', explain: 'sister → she.' },
        ],
      },
    ],
  },
  {
    id: 's-pron',
    skill: 'speaking',
    module: 'Band 7 delivery',
    level: 3,
    title: 'Pronunciation: features that lift your score',
    minutes: 25,
    body: `
<p>Pronunciation is a quarter of your Speaking score. Band 7 does not require a native accent; it requires a range of features used with control, so that you are easy to understand throughout.</p>
<h3>1. Sounds that are difficult for Bangla speakers</h3>
<p>Several English sounds do not exist in Bangla, so speakers replace them with the nearest Bangla sound. Research on Bengali-speaking learners identifies these as the most common:</p>
<div class="table-scroll"><table>
<tr><th>English sound</th><th>Common substitution</th><th>Practise with</th></tr>
<tr><td>/v/ (very, village)</td><td>/bh/ — "bhery"</td><td>Top teeth touch the lower lip: <em>very, vote, invest, over</em></td></tr>
<tr><td>/f/ (fan, office)</td><td>/ph/ — "phan"</td><td>Teeth on lip, air flows without a pop: <em>fan, coffee, laugh</em></td></tr>
<tr><td>/z/ (zoo, busy)</td><td>/j/ — "joo"</td><td>A buzzing "s": <em>zoo, easy, reason, was</em></td></tr>
<tr><td>/θ/ (think) · /ð/ (this)</td><td>/th/ · /d/ — "tink", "dis"</td><td>Tongue between the teeth: <em>think, three, this, mother</em></td></tr>
<tr><td>/w/ (water) vs /v/ (vote)</td><td>both pronounced the same</td><td>Rounded lips for /w/: <em>west – vest, wine – vine</em></td></tr>
<tr><td>Clusters at the start: sp, st, sk, sm</td><td>an extra vowel — "ischool", "estation"</td><td><em>school, station, sport, small, street</em>: start directly on the s</td></tr>
<tr><td>Long vs short vowels</td><td>no difference — "ship" = "sheep"</td><td><em>ship/sheep, full/fool, live/leave</em></td></tr>
</table></div>
<h3>2. Word stress</h3>
<p>Stressing the wrong syllable makes words hard to recognise: <em>deVElopment · phoTOgraphy · ecoNOmic · enVIronment · COMfortable · VEgetable</em>. Check stress in a dictionary whenever you learn a long word.</p>
<h3>3. Sentence stress and rhythm</h3>
<p>English stresses the information words and shortens the rest: "I <strong>WENT</strong> to the <strong>MAR</strong>ket on <strong>SAT</strong>urday." Bangla rhythm gives every syllable similar weight; English does not.</p>
<h3>4. Chunking</h3>
<p>Speak in meaningful groups with small pauses between them: <em>When I was a child | we used to spend our holidays | at my grandmother's house.</em></p>
<h3>5. Intonation</h3>
<p>Falling at the end of statements; rising for yes/no questions and for unfinished lists: "We bought mangoes ↗, lychees ↗, and some jackfruit ↘."</p>
<div class="note note--tip"><p><strong>Shadowing drill:</strong> play 20 seconds of a BBC Learning English video, pause, and repeat it copying the rhythm and stress exactly. Ten minutes a day for a month noticeably improves rhythm.</p></div>`,
    bn: 'বাংলায় কিছু ইংরেজি ধ্বনি নেই, তাই অনেকে /v/-কে "ভ", /f/-কে "ফ (ph)", /z/-কে "জ", /θ/-কে "ট/থ" উচ্চারণ করেন, আর school-কে "ইস্কুল" বলেন। দীর্ঘ ও হ্রস্ব স্বরের পার্থক্যও (ship/sheep) খেয়াল করুন। শব্দের সঠিক অংশে জোর (stress), বাক্যের ছন্দ ও স্বরের ওঠানামা অনুশীলন করুন।',
    glossary: [
      ['pronunciation', 'উচ্চারণ'],
      ['syllable', 'শব্দাংশ / অক্ষর'],
      ['word stress', 'শব্দের যে অংশে জোর পড়ে'],
      ['rhythm', 'ছন্দ'],
      ['intonation', 'স্বরের ওঠানামা'],
      ['chunking', 'অর্থপূর্ণ ছোট ছোট অংশে ভাগ করে বলা'],
      ['consonant cluster', 'পাশাপাশি একাধিক ব্যঞ্জনধ্বনি (st, sp)'],
    ],
    practice: [
      {
        type: 'mcq',
        instructions: 'Choose the correct stress (capital letters = stressed syllable).',
        items: [
          { q: 'environment', options: ['EN-vi-ron-ment', 'en-VI-ron-ment', 'en-vi-ron-MENT'], answer: 'B', explain: 'en-VI-ron-ment.' },
          { q: 'photography', options: ['PHO-to-gra-phy', 'pho-TO-gra-phy', 'pho-to-GRA-phy'], answer: 'B', explain: 'pho-TO-gra-phy (but PHO-to-graph).' },
          { q: 'comfortable', options: ['COM-for-ta-ble', 'com-FOR-ta-ble', 'com-for-TA-ble'], answer: 'A', explain: 'COM-for-ta-ble, often said in three syllables: COMF-ta-ble.' },
          { q: 'Which word starts with a cluster that Bangla speakers often break with an extra vowel?', options: ['apple', 'school', 'orange'], answer: 'B', explain: '"school" → "ischool" is a common error.' },
        ],
      },
    ],
  },
  {
    id: 's-testday',
    skill: 'speaking',
    module: 'Band 7 delivery',
    level: 2,
    title: 'Test day: what to expect and common myths',
    minutes: 10,
    body: `
<h3>On the day</h3>
<ul>
<li>Arrive early with the same ID you registered with. Your photo may be taken and checked.</li>
<li>The examiner will introduce themselves, check your ID and start recording. The opening is the same for everyone — relax into it.</li>
<li>Speak to the examiner as you would to a polite stranger: friendly, natural, not formal.</li>
<li>Take water in if allowed; a dry mouth makes fluency harder.</li>
</ul>
<h3>Myths</h3>
<table>
<tr><th>Myth</th><th>Fact</th></tr>
<tr><td>You need a British or American accent.</td><td>No. Clarity is assessed, not accent.</td></tr>
<tr><td>The examiner's face shows your score.</td><td>Examiners are trained to stay neutral. A serious face means nothing.</td></tr>
<tr><td>Using big words guarantees a high score.</td><td>Only if they are used correctly and naturally. Misused words lower your score.</td></tr>
<tr><td>If the examiner interrupts, you said something wrong.</td><td>They must keep strictly to time.</td></tr>
<tr><td>Giving a "wrong" opinion lowers your band.</td><td>Ideas are not marked; language is.</td></tr>
</table>
<h3>The week before</h3>
<ul>
<li>Speak English every day — with a partner, a teacher or a recording.</li>
<li>Do two full mock tests (all three parts, timed).</li>
<li>Do not learn new answers by heart: practise speaking freely.</li>
</ul>`,
    bn: 'পরীক্ষার দিন নিবন্ধনের সময় ব্যবহৃত একই পরিচয়পত্র নিয়ে আগেভাগে উপস্থিত হন। পরীক্ষকের মুখের অভিব্যক্তি দেখে স্কোর বোঝা যায় না, আর সময় শেষ হলে তাঁরা থামিয়ে দেন — এটি স্বাভাবিক। কঠিন শব্দ ভুলভাবে ব্যবহার করলে স্কোর কমে; আপনার মতামত নয়, ভাষা মূল্যায়ন করা হয়।',
    glossary: [
      ['ID (identification)', 'পরিচয়পত্র'],
      ['neutral', 'নিরপেক্ষ'],
      ['myth', 'ভ্রান্ত ধারণা'],
      ['mock test', 'অনুশীলনমূলক পূর্ণ পরীক্ষা'],
      ['register', 'নিবন্ধন করা'],
    ],
    practice: [
      {
        type: 'tfng',
        instructions: 'Based on the lesson:',
        items: [
          { q: 'If the examiner looks serious, your score is low.', answer: 'FALSE', explain: 'Examiners stay neutral.' },
          { q: 'You must bring the ID you used to register.', answer: 'TRUE', explain: 'The same ID document.' },
          { q: 'Difficult words always increase your score.', answer: 'FALSE', explain: 'Only correct, natural use helps.' },
        ],
      },
    ],
  },
];
