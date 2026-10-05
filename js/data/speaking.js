// Speaking sets: Part 1 topics, a Part 2 card, Part 3 discussion, plus a
// model long turn and useful language.

export const sets = [
  {
    id: 'relax',
    level: 1,
    title: 'A place to relax',
    part1: [
      { topic: 'Your home', questions: ['Do you live in a house or a flat?', 'What do you like most about where you live?', 'Is there anything you would like to change about your home?'] },
      { topic: 'Weekends', questions: ['What do you usually do at the weekend?', 'Do you prefer busy or quiet weekends? Why?', 'How were your weekends different when you were a child?'] },
    ],
    part2: {
      card: 'Describe a place you like to visit to relax.',
      prompts: ['where it is', 'how often you go there', 'what you do there', 'and explain why you find it relaxing.'],
      followup: 'Do you usually go there alone?',
    },
    part3: [
      'Why do people find it harder to relax today than in the past?',
      'Do you think cities should have more green spaces? Why?',
      'Some people relax by doing exciting activities, such as climbing. Why might this be?',
      'Should employers be responsible for helping staff manage stress?',
    ],
    model: `I'd like to talk about a lake about forty minutes' drive from the city where I live. My grandfather built a small wooden cabin there when my mother was a child, so the family has been going for decades.

I try to go at least once a month, usually on a Sunday morning, and autumn is definitely the best time, because the trees around the water turn red and gold and there are hardly any other visitors.

To be honest, I don't do very much when I'm there, which is really the point. I'll take a book, sit on the jetty, and sometimes I try fishing, although I have to admit I'm terrible at it — I think I've caught three fish in about ten years.

As for why it's so relaxing, I'd say there are two reasons. The first is practical: there's almost no phone signal, so nobody can reach me, and I'm forced to switch off from work. The second is more personal. Because I spent so many summers there as a child, just being there brings back really happy memories. It feels a bit like stepping back in time. So whenever I've had a stressful week, it's the first place I think of.`,
    language: ['switch off', 'get away from it all', 'it brings back memories', 'hardly any', 'which is really the point', 'I have to admit'],
  },
  {
    id: 'skill',
    level: 2,
    title: 'A skill that took time to learn',
    part1: [
      { topic: 'Work or studies', questions: ['Do you work or are you a student?', 'What do you enjoy most about your work or studies?', 'Is there anything you find difficult about it?'] },
      { topic: 'Music', questions: ['What kind of music do you listen to?', 'Did you learn a musical instrument as a child?', 'Do you think music lessons should be compulsory at school?'] },
    ],
    part2: {
      card: 'Describe a skill that took you a long time to learn.',
      prompts: ['what the skill is', 'when you started learning it', 'how you learned it', 'and explain why it took a long time to learn.'],
      followup: 'Would you like to teach this skill to someone else?',
    },
    part3: [
      'What skills do you think children should learn at school that they don\'t currently learn?',
      'Is it better to learn a skill from a teacher or from the internet?',
      'Why do some people give up learning new skills as they get older?',
      'How might the skills employers want change in the future?',
    ],
    model: `The skill I'm going to talk about is swimming, which might sound surprising, because most people learn it as small children. But I grew up in a town far from the sea, and our school didn't have a pool, so I only started learning properly at the age of twenty-two.

What pushed me to start was a holiday with friends. Everyone else jumped into the sea, and I had to stay on the beach, which was quite embarrassing. When I got home, I signed up for adult lessons at the local sports centre, twice a week, early in the morning before work.

It took me nearly two years to swim confidently, and I think there were a few reasons for that. The biggest one was fear. Adults are much more aware of danger than children, so for months I couldn't put my face in the water without panicking. My instructor was very patient — she made me practise breathing exercises at the side of the pool for weeks before I even tried to swim. The other reason was simply time: with a full-time job, I sometimes missed lessons, and I'd lose some of my progress.

Looking back, though, I'm really proud of it. Last summer I swam across a small bay, which would have been unthinkable a few years ago.`,
    language: ['what pushed me to', 'signed up for', 'I couldn\'t ... without panicking', 'looking back', 'would have been unthinkable', 'made me practise'],
  },
  {
    id: 'technology',
    level: 2,
    title: 'Technology you use every day',
    part1: [
      { topic: 'Mobile phones', questions: ['How much time do you spend on your phone each day?', 'What do you mainly use it for?', 'Could you live without your phone for a week?'] },
      { topic: 'Transport', questions: ['How do you usually travel to work or college?', 'Is public transport good where you live?', 'Would you like to have a car in the future?'] },
    ],
    part2: {
      card: 'Describe a piece of technology (not a phone) that you use every day.',
      prompts: ['what it is', 'how long you have had it', 'what you use it for', 'and explain how your life would be different without it.'],
      followup: 'Do you think you will still use it in ten years?',
    },
    part3: [
      'How has technology changed the way people communicate with their families?',
      'Do older people find it harder to adapt to new technology? Why?',
      'Some people say technology makes us less creative. Do you agree?',
      'Should there be limits on how much time children spend in front of screens?',
    ],
    model: `I'm going to talk about my e-reader, which is a small device for reading digital books. I've had it for about four years now — it was a birthday present from my sister, who got tired of me complaining that my bag was always full of heavy paperbacks.

I use it every single day, mainly on the train to work, which takes about forty minutes each way. I read mostly novels, but I also download non-fiction about history and psychology. One feature I really like is that you can tap on a word you don't know and get a definition straight away, which has been very useful for reading in English.

If I didn't have it, I think I'd read a lot less, honestly. Before I had it, I'd often leave my book at home, and then I'd just scroll on my phone during the journey, which never left me feeling any better. The e-reader can't do anything except books, so there are no distractions. It's also much cheaper in the long run, because digital books are often half the price of printed ones, and I can borrow them from the library online.

So although it's a very simple piece of technology, it's probably changed my daily routine more than anything else I own.`,
    language: ['it was a present from', 'in the long run', 'straight away', 'never left me feeling', 'more than anything else I own', 'got tired of'],
  },
  {
    id: 'meal',
    level: 3,
    title: 'A memorable meal',
    part1: [
      { topic: 'Food', questions: ['What is your favourite food?', 'Do you prefer eating at home or in restaurants?', 'Has your diet changed in recent years?'] },
      { topic: 'Cooking', questions: ['Who does most of the cooking in your home?', 'Did anyone teach you to cook?', 'Do you think cooking should be taught in schools?'] },
    ],
    part2: {
      card: 'Describe a meal that you remember well.',
      prompts: ['where you had it', 'who you were with', 'what you ate', 'and explain why you remember it so well.'],
      followup: 'Have you been back to that place since?',
    },
    part3: [
      'How have people\'s eating habits changed in your country over the last generation?',
      'Why do you think fast food has become so popular worldwide?',
      'Should governments do more to encourage healthy eating? How?',
      'What role does food play in preserving a country\'s culture?',
    ],
    model: `The meal I'd like to describe took place in a tiny family-run restaurant in the mountains, during a hiking trip about three years ago. There were four of us — two old university friends, my brother and me — and we'd been walking for about seven hours in the rain, so we were exhausted and absolutely starving by the time we arrived.

There was no menu, which threw us at first. The owner simply asked whether there was anything we couldn't eat, and then started bringing out dishes: a thick bean soup, freshly baked bread, mountain cheese, and a slow-cooked lamb stew that, honestly, I still think about. Everything had been grown or produced within a few kilometres of the building.

I think I remember it so vividly for a combination of reasons. Partly, of course, it was the food itself, which was far simpler than anything you'd get in a city restaurant but somehow tasted better. But it was also the atmosphere. The owner's grandmother was sitting by the fire, and she told us stories about the village while we ate, with her grandson translating. It felt less like a restaurant and more like being invited into someone's home. And I suppose the fact that we'd earned it, after such a long day, made it even more satisfying.`,
    language: ['absolutely starving', 'which threw us at first', 'I still think about', 'remember it so vividly', 'less like... and more like...', 'the fact that we\'d earned it'],
  },
  {
    id: 'influence',
    level: 3,
    title: 'A person who influenced you',
    part1: [
      { topic: 'Friends', questions: ['Do you have a large group of friends or a few close ones?', 'How often do you see your friends?', 'Is it easy to make new friends as an adult?'] },
      { topic: 'Reading', questions: ['Do you enjoy reading?', 'What kind of things do you read?', 'Did you read more as a child than you do now?'] },
    ],
    part2: {
      card: 'Describe a person who has had an important influence on you.',
      prompts: ['who this person is', 'how you know them', 'what they did', 'and explain how they influenced you.'],
      followup: 'Do you still keep in touch with this person?',
    },
    part3: [
      'Who has more influence on young people today: parents or celebrities?',
      'What qualities make someone a good role model?',
      'Do you think teachers have as much influence as they did in the past?',
      'Is it possible for a public figure to have too much influence? In what ways?',
    ],
    model: `The person I'd like to talk about is my secondary school chemistry teacher, Mr Ortega. I was in his class for three years, from about the age of fourteen.

To be honest, I wasn't a particularly good student at the time. I wasn't badly behaved, but I'd decided that I just wasn't a science person, and I put in the minimum effort. What made Mr Ortega different was that he never accepted that. After I failed a test, rather than criticising me, he kept me behind and asked me to explain what I'd found confusing. It turned out that I'd missed one basic idea early on, and everything after that had stopped making sense.

He spent a few lunch breaks going over it with me, and within a couple of months I'd gone from nearly failing to being one of the better students in the class. More importantly, I'd started to enjoy it.

The influence he had on me goes beyond chemistry, though. He taught me that being "bad at" something is often just a gap in understanding that can be fixed, rather than a fixed part of who you are. I've applied that attitude to all sorts of things since, including learning English. And I actually went on to study engineering at university, which I'm certain wouldn't have happened without him.`,
    language: ['put in the minimum effort', 'it turned out that', 'goes beyond', 'went on to', 'which I\'m certain wouldn\'t have happened', 'I\'d decided that I just wasn\'t...'],
  },
  {
    id: 'website',
    level: 1,
    title: 'A website or app you use often',
    part1: [
      { topic: 'Your hometown', questions: ['Where is your hometown?', 'What is it known for?', 'Has it changed much since you were a child?'] },
      { topic: 'Mobile phones', questions: ['How often do you use your phone?', 'What do you mainly use it for?', 'Could you live without a smartphone for a week?'] },
    ],
    part2: {
      card: 'Describe a website or app that you use often.',
      prompts: ['what it is', 'how you found out about it', 'what you use it for', 'and explain why you find it useful.'],
      followup: 'Do your friends use it too?',
    },
    part3: [
      'How has the internet changed the way people shop?',
      'Do you think older people should be encouraged to use the internet more?',
      'What are the risks of children spending a lot of time online?',
      'Will libraries still be needed in the future?',
    ],
    p3model: ['How has the internet changed the way people shop?', 'I\'d say the biggest change is convenience. In the past, if you wanted something specific, you had to travel to a shop and hope they had it in stock, whereas now you can compare prices from dozens of sellers in a few minutes. In Bangladesh, for example, a lot of people now order groceries and even medicine online, which would have been unthinkable ten years ago. The downside, I think, is that small local shops are struggling, because they simply can\'t compete on price with large online platforms.'],
    model: `The app I'd like to talk about is a language-learning app called Duolingo, which I use pretty much every day.

I actually found out about it from my younger cousin. She was learning Spanish with it during the lockdown, and she kept showing me her "streak", which is the number of days in a row you've practised. I was a bit sceptical at first, because I assumed it was just a game, but I downloaded it out of curiosity.

These days, I mainly use it to keep my French from getting rusty. I studied French at school, but I hardly ever get the chance to speak it, so I do a short lesson every evening, usually on the bus home. Each lesson only takes about five minutes, which makes it easy to fit into a busy day.

As for why I find it useful, the main reason is that it keeps me consistent. I know it won't make me fluent on its own — for that you need real conversation — but it means I'm in contact with the language every single day. And to be honest, the streak is surprisingly motivating. I've kept mine going for over four hundred days now, and I'd be really annoyed if I broke it.`,
    language: ['pretty much every day', 'I was a bit sceptical at first', 'out of curiosity', 'keep ... from getting rusty', 'fit into a busy day', 'it keeps me consistent'],
    glossary: [['sceptical', 'সন্দিহান'], ['rusty', 'চর্চার অভাবে দুর্বল হয়ে যাওয়া'], ['consistent', 'নিয়মিত, ধারাবাহিক'], ['motivating', 'উৎসাহব্যঞ্জক'], ['unthinkable', 'অকল্পনীয়']],
  },
  {
    id: 'decision',
    level: 2,
    title: 'An important decision',
    part1: [
      { topic: 'Studying', questions: ['What subject are you studying, or did you study?', 'Why did you choose it?', 'Do you prefer to study in the morning or in the evening?'] },
      { topic: 'Shopping', questions: ['Do you enjoy shopping?', 'Do you prefer shopping online or in shops?', 'Is there anything you regret buying?'] },
    ],
    part2: {
      card: 'Describe an important decision you made.',
      prompts: ['what the decision was', 'when you made it', 'how you made it', 'and explain why it was important.'],
      followup: 'Was it a difficult decision to make?',
    },
    part3: [
      'Should parents make important decisions for their teenage children?',
      'Why do some people find it hard to make decisions?',
      'Is it better to make decisions quickly or to take your time?',
      'What decisions do governments have to make that ordinary people do not?',
    ],
    p3model: ['Should parents make important decisions for their teenage children?', 'I think it depends on the kind of decision. When it comes to safety or health, parents obviously need to have the final say, because teenagers don\'t always see the long-term consequences. But for things like choosing a subject at university, I\'d argue parents should guide rather than decide. In my country, a lot of students end up studying medicine or engineering because their parents insisted, and some of them are quite unhappy. So ideally, parents should explain the options, share their experience, and then let their children take responsibility.'],
    model: `I'd like to talk about the decision to change my university subject, which I made about two years ago, at the end of my first year.

I'd originally enrolled in accounting, mainly because my father is an accountant and everyone assumed I'd follow in his footsteps. The problem was that I found it really dull. I was passing my exams, but I wasn't enjoying a single class, and I spent most of my free time reading about urban planning instead.

The decision wasn't made overnight. I spent several weeks weighing up the pros and cons. I talked to students on the planning course, I went to a couple of their lectures, and I worked out whether I could afford an extra year. The hardest part, to be honest, was telling my father. I was expecting him to be disappointed, but he was actually far more understanding than I'd imagined.

It was important for two reasons. Firstly, it completely changed my attitude to studying — I went from doing the minimum to genuinely looking forward to my classes, and my grades went up as a result. Secondly, it taught me that it's better to change direction early than to spend years doing something you're not suited to. Looking back, it's probably the best decision I've ever made.`,
    language: ['follow in his footsteps', 'it wasn\'t made overnight', 'weighing up the pros and cons', 'far more understanding than I\'d imagined', 'change direction', 'looking back'],
    glossary: [['enrol', 'ভর্তি হওয়া'], ['follow in someone\'s footsteps', 'কারও পথ অনুসরণ করা'], ['dull', 'একঘেয়ে, নিরস'], ['weigh up the pros and cons', 'সুবিধা-অসুবিধা বিবেচনা করা'], ['have the final say', 'চূড়ান্ত সিদ্ধান্ত নেওয়ার অধিকার থাকা']],
  },
  {
    id: 'crowded',
    level: 3,
    title: 'A crowded place',
    part1: [
      { topic: 'Transport', questions: ['How do you usually travel to work or college?', 'Is public transport good where you live?', 'Would you like to have a car in the future?'] },
      { topic: 'Noise', questions: ['Is your home in a noisy area?', 'Do you mind noise when you are studying?', 'What kinds of noise do you find most annoying?'] },
    ],
    part2: {
      card: 'Describe a crowded place you have been to.',
      prompts: ['where it was', 'when you went there', 'why it was crowded', 'and explain how you felt about being there.'],
      followup: 'Would you go back there?',
    },
    part3: [
      'Why do so many people choose to live in large cities despite the crowds?',
      'What can governments do to reduce overcrowding in cities?',
      'Do you think tourism should be limited in popular places?',
      'How might cities change over the next fifty years?',
    ],
    p3model: ['Why do so many people choose to live in large cities despite the crowds?', 'Mainly, I\'d say, for economic reasons. In a country like Bangladesh, most of the well-paid jobs, the best universities and the major hospitals are concentrated in Dhaka, so people feel they have no real choice. There\'s also a social dimension: young people often see the capital as a place of opportunity and excitement compared with village life. Having said that, I think this is gradually changing. With better internet connections, some jobs can now be done remotely, so in the long run we may see more people choosing smaller cities.'],
    model: `The place I'm going to describe is the Ekushey Book Fair in Dhaka, which I went to last February with two of my university friends.

For anyone who doesn't know it, it's a book fair held every year for the whole of February to commemorate the Language Movement of 1952. Hundreds of publishers set up stalls, and it attracts huge numbers of visitors, especially at weekends and in the evenings.

It was crowded for a couple of reasons. We went on a Friday afternoon, which in hindsight was a big mistake, because that's when families and students are free. On top of that, a well-known author was signing copies of her new novel, so there was a queue that seemed to stretch halfway across the grounds. At times we could barely move, and it took us about twenty minutes just to get from one end of a row of stalls to the other.

As for how I felt, I have to say my feelings were mixed. On the one hand, it was quite exhausting, and at one point I lost my friends completely and had to phone them to find out where they were. On the other hand, there was a wonderful atmosphere. It was genuinely uplifting to see so many people, especially young people, excited about books. So although I'd definitely choose a weekday next time, I came away feeling it had been well worth the effort.`,
    language: ['to commemorate', 'in hindsight', 'on top of that', 'we could barely move', 'my feelings were mixed', 'well worth the effort'],
    glossary: [['commemorate', 'স্মরণ করা'], ['in hindsight', 'পরে ভেবে দেখলে'], ['stall', 'স্টল, দোকান'], ['uplifting', 'মন ভালো করে দেয় এমন'], ['concentrated', 'কেন্দ্রীভূত']],
  },
];

export const setById = (id) => sets.find((s) => s.id === id);

// Band 7 in plain words: a summary written for learners, not the official
// descriptor text.
export const descriptors = [
  ['Fluency and Coherence', 'Keeps talking at length without obvious strain and stays easy to follow. Pauses are mostly to think of ideas rather than words, and ideas are linked with a variety of connecting phrases.'],
  ['Lexical Resource', 'Has enough vocabulary to talk about both familiar and less familiar topics, uses some less common words and natural expressions, and can rephrase smoothly when a word is missing.'],
  ['Grammatical Range and Accuracy', 'Mixes simple and complex sentences with some flexibility. Many sentences are completely correct, although some mistakes still appear.'],
  ['Pronunciation', 'Easy to understand throughout, with good control of word stress, rhythm and intonation and only occasional lapses. The accent does not get in the way.'],
];

// Part 1 topic bank: frequent topic areas with question patterns, a band 7
// style sample answer and key words. Examiners choose from a large bank of
// topics, so practise the patterns rather than memorising answers.
export const part1Bank = [
  { topic: 'Work or studies', bn: 'কাজ বা পড়াশোনা', questions: ['Do you work or are you a student?', 'Why did you choose that job / subject?', 'What is the most difficult part of it?', 'What would you like to do in the future?'],
    sample: ['Why did you choose that subject?', 'Mainly because I\'ve always been fascinated by how things work. I was good at maths at school, so computer science seemed like a natural choice, and to be honest the job prospects were a factor too.'],
    words: [['job prospects', 'চাকরির সম্ভাবনা'], ['fascinated by', 'মুগ্ধ, আকৃষ্ট'], ['demanding', 'পরিশ্রমসাধ্য']] },
  { topic: 'Hometown', bn: 'নিজের শহর', questions: ['Where is your hometown?', 'What do you like about it?', 'How has it changed in recent years?', 'Would you like to live there in the future?'],
    sample: ['How has your hometown changed?', 'Quite dramatically, actually. When I was a child, it was a fairly quiet town surrounded by rice fields, but a lot of those fields have been built on, and the traffic has got much worse. On the plus side, there are far more shops and a new hospital.'],
    words: [['surrounded by', 'চারপাশে ঘেরা'], ['be built on', 'জমিতে দালানকোঠা তৈরি হওয়া'], ['on the plus side', 'ভালো দিক হলো']] },
  { topic: 'Home / accommodation', bn: 'বাসস্থান', questions: ['Do you live in a house or a flat?', 'Which room do you spend most time in?', 'What would you change about your home?', 'Do you plan to live there for a long time?'],
    sample: ['Which room do you spend most time in?', 'Probably my bedroom, because it doubles as my study. It\'s quite small, but it gets a lot of natural light, so it\'s a pleasant place to work.'],
    words: [['double as', 'একই সাথে অন্য কাজেও ব্যবহৃত হওয়া'], ['natural light', 'প্রাকৃতিক আলো'], ['cramped', 'ঠাসাঠাসি, সংকীর্ণ']] },
  { topic: 'Daily routine', bn: 'দৈনন্দিন রুটিন', questions: ['What is your daily routine like?', 'Do you prefer mornings or evenings?', 'Has your routine changed recently?'],
    sample: ['Do you prefer mornings or evenings?', 'I\'m definitely more of a morning person. I find I can concentrate much better before lunch, so I try to get my most important work done early and leave the easier tasks for the evening.'],
    words: [['a morning person', 'যে সকালে বেশি কর্মক্ষম'], ['concentrate', 'মনোযোগ দেওয়া'], ['get something done', 'কাজ শেষ করা']] },
  { topic: 'Food and cooking', bn: 'খাবার ও রান্না', questions: ['What is your favourite food?', 'Can you cook?', 'Do you prefer eating at home or in restaurants?', 'Has your diet changed since you were a child?'],
    sample: ['Can you cook?', 'Only the basics, I\'m afraid. I can make rice and a simple dal, but anything more complicated and I usually call my mother for instructions. I\'d really like to learn properly, though.'],
    words: [['the basics', 'মৌলিক বিষয়গুলো'], ['home-cooked', 'ঘরে রান্না করা'], ['spicy', 'ঝাল']] },
  { topic: 'Weather and seasons', bn: 'আবহাওয়া ও ঋতু', questions: ['What is the weather like in your country?', 'Which season do you like best?', 'Does the weather affect your mood?'],
    sample: ['Which season do you like best?', 'I\'d have to say winter. In Bangladesh it\'s short and mild, so it\'s cool enough to be comfortable without being cold, and it\'s also the season for festivals and outdoor events.'],
    words: [['mild', 'মৃদু, সহনীয়'], ['humid', 'আর্দ্র, ভ্যাপসা'], ['monsoon', 'বর্ষাকাল']] },
  { topic: 'Free time and hobbies', bn: 'অবসর ও শখ', questions: ['What do you do in your free time?', 'Did you have a hobby as a child?', 'Is there a new hobby you would like to try?'],
    sample: ['Is there a new hobby you would like to try?', 'I\'ve always wanted to learn photography properly. At the moment I just take pictures on my phone, but I\'d love to understand how to use a proper camera and take better landscape shots.'],
    words: [['take up (a hobby)', 'নতুন শখ শুরু করা'], ['unwind', 'মানসিক চাপ কমানো'], ['properly', 'যথাযথভাবে']] },
  { topic: 'Friends', bn: 'বন্ধু', questions: ['Do you prefer having a few close friends or many friends?', 'How often do you meet your friends?', 'What do you usually do together?'],
    sample: ['Do you prefer a few close friends or many friends?', 'A few close ones, definitely. I have a lot of acquaintances from university, but there are only three or four people I\'d really confide in, and those friendships matter much more to me.'],
    words: [['acquaintance', 'পরিচিত ব্যক্তি'], ['confide in', 'মনের কথা খুলে বলা'], ['keep in touch', 'যোগাযোগ রাখা']] },
  { topic: 'Technology and phones', bn: 'প্রযুক্তি ও মোবাইল', questions: ['How often do you use your phone?', 'What apps do you use most?', 'Do you think people use phones too much?'],
    sample: ['Do you think people use phones too much?', 'Yes, I think most of us do, myself included. I notice that when I\'m out with friends, everyone checks their phone every few minutes, which makes it harder to have a proper conversation.'],
    words: [['myself included', 'আমিও এর মধ্যে আছি'], ['addicted to', 'আসক্ত'], ['screen time', 'পর্দার সামনে কাটানো সময়']] },
  { topic: 'Reading', bn: 'পড়া', questions: ['Do you like reading?', 'What did you read as a child?', 'Do you prefer paper books or e-books?'],
    sample: ['Do you prefer paper books or e-books?', 'Paper books, for reading for pleasure. There\'s something about holding a real book that I find more relaxing. But for studying I use e-books, because I can search them and carry dozens at once.'],
    words: [['for pleasure', 'আনন্দের জন্য'], ['there\'s something about', 'এর মধ্যে বিশেষ কিছু আছে'], ['page-turner', 'যে বই পড়া থামানো কঠিন']] },
  { topic: 'Music', bn: 'সংগীত', questions: ['What kind of music do you like?', 'Do you play an instrument?', 'Do you listen to music while studying?'],
    sample: ['Do you listen to music while studying?', 'Only instrumental music. If a song has lyrics, I end up listening to the words instead of concentrating, so I usually put on something calm, like classical or lo-fi.'],
    words: [['lyrics', 'গানের কথা'], ['instrumental', 'কথাবিহীন বাদ্যযন্ত্রের সুর'], ['end up', 'শেষ পর্যন্ত হয়ে যাওয়া']] },
  { topic: 'Travel and holidays', bn: 'ভ্রমণ ও ছুটি', questions: ['Do you like travelling?', 'Where did you go on your last holiday?', 'Do you prefer travelling alone or with others?'],
    sample: ['Where did you go on your last holiday?', 'Last winter I went to Sylhet with my family. We stayed near the tea gardens for a few days, and it was a lovely change from the noise of the city.'],
    words: [['a change from', 'একঘেয়েমি থেকে মুক্তি'], ['sightseeing', 'দর্শনীয় স্থান ঘোরা'], ['off the beaten track', 'কম পরিচিত জায়গা']] },
  { topic: 'Shopping', bn: 'কেনাকাটা', questions: ['Do you enjoy shopping?', 'Do you prefer shopping online or in shops?', 'What was the last thing you bought?'],
    sample: ['Do you prefer shopping online or in shops?', 'It depends on what I\'m buying. For electronics I usually shop online because it\'s easier to compare prices, but for clothes I prefer going to a shop, because I like to try things on first.'],
    words: [['it depends on', 'এটা নির্ভর করে'], ['try on', 'পরে দেখা'], ['bargain', 'দরদাম করা; সস্তায় ভালো জিনিস']] },
  { topic: 'Sport and exercise', bn: 'খেলাধুলা ও ব্যায়াম', questions: ['Do you do any sport?', 'Which sports are popular in your country?', 'Did you do much sport at school?'],
    sample: ['Which sports are popular in your country?', 'Cricket, without a doubt. When the national team plays, the whole country seems to stop. Football is also very popular, especially during the World Cup.'],
    words: [['without a doubt', 'নিঃসন্দেহে'], ['keep fit', 'সুস্থ ও সবল থাকা'], ['work out', 'ব্যায়াম করা']] },
  { topic: 'Transport', bn: 'যাতায়াত', questions: ['How do you usually get around?', 'Is public transport good where you live?', 'How could transport in your city be improved?'],
    sample: ['How could transport in your city be improved?', 'Honestly, I think the metro rail is a good start, because it\'s much quicker than sitting in traffic. But we also need more pedestrian crossings and proper footpaths, because walking can be quite dangerous at the moment.'],
    words: [['get around', 'এখানে-ওখানে যাতায়াত করা'], ['traffic jam', 'যানজট'], ['pedestrian', 'পথচারী']] },
  { topic: 'Celebrations and festivals', bn: 'উৎসব ও উদযাপন', questions: ['What is the most important festival in your country?', 'How do you usually celebrate it?', 'Have celebrations changed since you were young?'],
    sample: ['How do you usually celebrate Eid?', 'We usually go back to my grandparents\' village, so the whole extended family is together. In the morning we go to prayers, and then the rest of the day is spent visiting relatives and, of course, eating far too much.'],
    words: [['extended family', 'যৌথ বা বৃহত্তর পরিবার'], ['get together', 'একত্র হওয়া'], ['tradition', 'ঐতিহ্য']] },
];
