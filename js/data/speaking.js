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
