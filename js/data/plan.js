// A 12-week plan from foundation to band 7, about 1–2 hours a day,
// five days a week. Learners placed at Stage 2 can start at week 5,
// and at Stage 3 at week 9.

export const weeks = [
  { week: 1, stage: 1, focus: 'Know the test', tasks: [
    ['Read how the test works for all four skills', '#/about'],
    ['Lesson: How the Listening test works', '#/lesson/l-format'],
    ['Lesson: How Academic Reading works', '#/lesson/r-format'],
    ['Lesson: What examiners mark in Writing', '#/lesson/w-criteria'],
    ['Lesson: How the Speaking test works', '#/lesson/s-format'],
  ] },
  { week: 2, stage: 1, focus: 'Accuracy basics', tasks: [
    ['Lesson: Numbers, spelling and the alphabet', '#/lesson/l-numbers'],
    ['Grammar: tenses for Task 1', '#/grammar/tenses'],
    ['Grammar: articles', '#/grammar/articles'],
    ['Listening practice: Joining a sports centre', '#/listening/sports-centre'],
    ['Vocabulary: Environment flashcards', '#/vocabulary/environment'],
  ] },
  { week: 3, stage: 1, focus: 'Reading speed', tasks: [
    ['Lesson: Skimming and scanning', '#/lesson/r-skim-scan'],
    ['Reading practice: The rise of the urban beekeeper', '#/reading/urban-bees'],
    ['Grammar: comparing data', '#/grammar/comparison'],
    ['Vocabulary: Education flashcards', '#/vocabulary/education'],
    ['Lesson: Sentence building', '#/lesson/w-sentences'],
  ] },
  { week: 4, stage: 1, focus: 'First full answers', tasks: [
    ['Lesson: Part 1 answers that are long enough', '#/lesson/s-part1'],
    ['Speaking practice: A place to relax', '#/speaking/relax'],
    ['Writing Task 1: Bar chart (leisure time)', '#/writing/t1-leisure'],
    ['Writing Task 2: Community service (opinion)', '#/writing/t2-community'],
    ['Review: redo any practice where you scored under 60%', '#/progress'],
  ] },
  { week: 5, stage: 2, focus: 'Listening strategy', tasks: [
    ['Lesson: Predicting answers', '#/lesson/l-predict'],
    ['Lesson: Distractors', '#/lesson/l-distractors'],
    ['Listening practice: A museum introduction', '#/listening/harbour-museum'],
    ['Grammar: relative clauses', '#/grammar/relative'],
    ['Vocabulary: Technology flashcards', '#/vocabulary/technology'],
  ] },
  { week: 6, stage: 2, focus: 'Reading question types', tasks: [
    ['Lesson: True / False / Not Given', '#/lesson/r-tfng'],
    ['Lesson: Matching headings', '#/lesson/r-headings'],
    ['Reading practice: Are we really sleeping less? (timed)', '#/reading/sleep'],
    ['Vocabulary: Health flashcards', '#/vocabulary/health'],
    ['Grammar: conditionals', '#/grammar/conditionals'],
  ] },
  { week: 7, stage: 2, focus: 'Writing structure', tasks: [
    ['Lesson: Task 1 overview first', '#/lesson/w-task1'],
    ['Lesson: The four-paragraph essay', '#/lesson/w-task2'],
    ['Writing Task 1: Online banking line graph', '#/writing/t1-banking'],
    ['Writing Task 2: Roads or public transport (discussion)', '#/writing/t2-traffic'],
    ['Grammar: the passive', '#/grammar/passive'],
  ] },
  { week: 8, stage: 2, focus: 'Speaking fluency', tasks: [
    ['Lesson: Part 2 — planning in one minute', '#/lesson/s-part2'],
    ['Lesson: Fluency — buying time naturally', '#/lesson/s-fluency'],
    ['Speaking practice: A skill that took time to learn', '#/speaking/skill'],
    ['Listening practice: A student research project', '#/listening/food-waste'],
    ['Vocabulary: Work and the economy flashcards', '#/vocabulary/work'],
  ] },
  { week: 9, stage: 3, focus: 'Band 7 reading', tasks: [
    ['Lesson: Paraphrase at band 7', '#/lesson/r-paraphrase'],
    ['Lesson: Timing 40 questions in 60 minutes', '#/lesson/r-timing'],
    ['Reading practice: The case for repairing things (timed)', '#/reading/repair'],
    ['Grammar: nominalisation', '#/grammar/nominalisation'],
    ['Vocabulary: Cities and society flashcards', '#/vocabulary/cities'],
  ] },
  { week: 10, stage: 3, focus: 'Band 7 writing', tasks: [
    ['Lesson: Developing ideas fully', '#/lesson/w-develop'],
    ['Lesson: Precision over decoration', '#/lesson/w-language'],
    ['Writing Task 2: Young people leaving rural areas', '#/writing/t2-rural'],
    ['Writing Task 1: Rainwater harvesting process', '#/writing/t1-rainwater'],
    ['Grammar: concession and contrast', '#/grammar/contrast'],
  ] },
  { week: 11, stage: 3, focus: 'Band 7 listening and speaking', tasks: [
    ['Lesson: Part 4 lectures', '#/lesson/l-lectures'],
    ['Lesson: Maps, plans and diagrams', '#/lesson/l-maps'],
    ['Listening practice: Urban heat islands lecture', '#/listening/heat-islands'],
    ['Lesson: Part 3 — abstract discussion', '#/lesson/s-part3'],
    ['Lesson: Pronunciation features', '#/lesson/s-pron'],
  ] },
  { week: 12, stage: 3, focus: 'Test conditions', tasks: [
    ['Speaking practice: A memorable meal', '#/speaking/meal'],
    ['Speaking practice: A person who influenced you', '#/speaking/influence'],
    ['Writing Task 2: Working from home (timed)', '#/writing/t2-remote'],
    ['Full mock test', '#/mock'],
    ['Vocabulary: Crime and Media flashcards', '#/vocabulary/media'],
  ] },
];

export const dailyHabits = [
  'Listen to 15 minutes of English podcasts or radio — news, science or interviews.',
  'Read one long article from a quality newspaper or magazine and summarise it in two sentences.',
  'Review your vocabulary flashcards (5–10 minutes).',
  'Speak for 2 minutes on a random topic and record yourself.',
];
