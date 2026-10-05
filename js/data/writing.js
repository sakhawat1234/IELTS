// Writing tasks with band 7+ model answers. Chart data is invented for
// practice and drawn by the page as SVG.

export const tasks = [
  {
    id: 't1-banking',
    task: 1,
    level: 2,
    title: 'Line graph: online banking by age group',
    prompt: 'The graph below shows the percentage of adults in one country who used online banking, by age group, between 2008 and 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    chart: {
      type: 'line',
      unit: '%',
      max: 100,
      x: ['2008', '2011', '2014', '2017', '2020', '2023'],
      series: [
        { name: '18–34', values: [32, 48, 61, 72, 85, 88] },
        { name: '35–54', values: [20, 31, 44, 58, 74, 81] },
        { name: '55+', values: [6, 9, 14, 22, 41, 57] },
      ],
    },
    model: `The line graph compares the proportion of adults in three age groups who used online banking in one country between 2008 and 2023.

Overall, online banking became more common in every age group over the period. Young adults were the most frequent users throughout, but the oldest group saw the fastest growth in the later years, which narrowed the gap considerably.

In 2008, around a third of 18- to 34-year-olds (32%) banked online, compared with a fifth of those aged 35 to 54 and just 6% of people over 55. Usage among the two younger groups then climbed steadily, reaching 72% and 58% respectively by 2017.

The most striking change came after 2017 among the over-55s. Having risen only gradually to 22% in 2017, their figure almost doubled to 41% in 2020 and reached 57% by 2023. Meanwhile, growth among the youngest group slowed, levelling off at 88% by the end of the period, while the middle group finished at 81%. As a result, the difference between the youngest and oldest users fell from 50 percentage points in 2017 to 31 points in 2023.`,
    why: [
      'A clear overview in paragraph 2 names the two big trends (all rising; the gap narrowing) without numbers.',
      'Data is grouped, not listed year by year: the two younger groups together, then the striking change among the over-55s.',
      'Precise comparisons: "almost doubled", "around a third", "fell from 50 percentage points to 31".',
      'Varied language of change: climbed steadily, risen only gradually, levelling off.',
    ],
  },
  {
    id: 't1-leisure',
    task: 1,
    level: 1,
    title: 'Bar chart: leisure time by gender',
    prompt: 'The chart below shows the average number of hours per week that men and women in one city spent on four leisure activities in 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    chart: {
      type: 'bar',
      unit: 'hours',
      max: 16,
      x: ['TV and streaming', 'Exercise and sport', 'Socialising', 'Reading'],
      series: [
        { name: 'Men', values: [14, 5, 6, 2] },
        { name: 'Women', values: [12, 4, 8, 4] },
      ],
    },
    model: `The bar chart illustrates how many hours per week men and women in one city spent, on average, on four leisure activities in 2024.

Overall, watching television or streaming was by far the most time-consuming activity for both sexes, while reading occupied the least time. Men spent more time than women on screen viewing and exercise, whereas women devoted more hours to socialising and reading.

Screen-based entertainment accounted for 14 hours a week among men and 12 among women. For men, this was more than the time spent on the other three activities combined (13 hours), and for women it was three-quarters of that total.

The gender differences were most pronounced in reading and socialising. Women read for twice as long as men, at four hours compared with two, and spent eight hours socialising, two more than men. By contrast, the gap in exercise and sport was small, with men exercising for five hours a week and women for four.`,
    why: [
      'The overview compares the categories and the genders in two sentences.',
      'Calculations add insight ("more than the other three combined", "three-quarters") instead of repeating every number.',
      'Each body paragraph has a focus: the biggest activity, then where men and women differ.',
    ],
  },
  {
    id: 't1-rainwater',
    task: 1,
    level: 3,
    title: 'Process: a rainwater harvesting system',
    prompt: 'The diagram below shows how a rainwater harvesting system works in a house. Summarise the information by selecting and reporting the main features.',
    chart: {
      type: 'process',
      steps: [
        'Rain falls on the roof',
        'Gutters carry water to a downpipe',
        'Filter removes leaves and debris',
        'Water is stored in an underground tank (overflow pipe to drain when full)',
        'Pump sends water into the house',
        'Used for toilets, washing machine and garden (not for drinking)',
      ],
    },
    model: `The diagram shows how a domestic rainwater harvesting system collects rain and supplies it for use in a house.

Overall, the process has six main stages, beginning with rain landing on the roof and ending with the stored water being used for household purposes that do not require drinking water.

First, rain falls on the roof and runs into gutters along its edges, which carry it to a downpipe. Before it reaches storage, the water passes through a filter, where leaves and other debris are removed. It is then held in an underground tank. If the tank becomes full, any excess water is directed through an overflow pipe into the drain.

When water is needed, a pump draws it from the tank and sends it into the house. There, it is used to flush toilets and run the washing machine, and it can also be used to water the garden. It is not, however, used for drinking.`,
    why: [
      'The overview states the number of stages and the start and end points.',
      'The passive voice is used naturally for a process: "is held", "are removed", "is directed".',
      'Sequencing language varies: First, Before it reaches, then, When water is needed.',
      'Nothing is added that is not in the diagram.',
    ],
  },
  {
    id: 't2-community',
    task: 2,
    level: 1,
    type: 'Opinion',
    title: 'Compulsory community service at school',
    prompt: 'Some people believe that unpaid community service should be a compulsory part of high school programmes (for example, working for a charity, improving the neighbourhood or teaching sports to younger children). To what extent do you agree or disagree?',
    model: `Proposals to make community service a required part of secondary education have gained support in several countries. While I accept that such schemes can be poorly run, I largely agree that a modest amount of compulsory volunteering would benefit both students and society.

The main argument in favour is that community work teaches things a classroom cannot. A teenager who spends a few hours a week helping at a food bank or reading with younger children learns to communicate with people from different backgrounds and to take responsibility for others. These are precisely the qualities employers say are lacking in school leavers, and they are difficult to develop through exams alone. Making the service compulsory also matters: the students who would never volunteer by choice are often the ones who gain the most from it.

Communities benefit as well. Many charities depend on volunteers but struggle to recruit them, particularly during working hours. A steady supply of students, even for a limited period, could allow these organisations to extend their services, and some students may continue volunteering long after they leave school.

Critics argue that forced volunteering is a contradiction, and that students already face heavy academic pressure. These concerns are valid, but they point to careful design rather than rejection. If the requirement were limited to, say, forty hours over two years, and students could choose an activity that interested them, the burden would be small and the sense of compulsion would be reduced.

In conclusion, I believe the advantages of compulsory community service clearly outweigh the drawbacks, provided that the scheme is flexible and does not compete with core study time.`,
    why: [
      'The position ("I largely agree") is clear in the introduction and kept to the end.',
      'The opposing view is answered, not ignored: paragraph 4 concedes and then responds.',
      'Each body paragraph develops one idea with an example and a consequence.',
      'Complex structures appear naturally: conditionals, relative clauses, concession.',
    ],
  },
  {
    id: 't2-traffic',
    task: 2,
    level: 2,
    type: 'Discussion',
    title: 'More roads or better public transport?',
    prompt: 'Some people think that the best way to reduce traffic congestion is to build more roads, while others believe that investment in public transport is a better solution. Discuss both views and give your own opinion.',
    model: `Traffic congestion is a growing problem in many cities, and opinion is divided on whether new roads or better public transport offer the more effective remedy. In my view, while road building can relieve specific bottlenecks, investment in public transport is the more sustainable long-term solution.

Supporters of road building point out that many cities have simply outgrown their road networks. A bypass that takes heavy lorries away from a town centre, for example, can make journeys faster for everyone and improve safety for pedestrians. For residents of rural areas, where buses are infrequent, roads may be the only realistic way of getting to work.

However, new roads in busy urban areas often fill up again within a few years, a phenomenon known as induced demand. When a road becomes faster, people who previously avoided it start to drive, and congestion returns. Building roads in cities is also extremely expensive and requires space that is rarely available without demolishing homes or green areas.

Public transport, by contrast, can move far more people in the same space. A single rail line or bus lane can carry many times more passengers per hour than a lane of private cars. Cities that have invested in reliable, affordable metro and bus networks have persuaded large numbers of commuters to leave their cars at home, reducing both congestion and pollution.

In conclusion, although additional roads may be justified in particular locations, I believe that governments seeking a lasting solution to congestion should prioritise high-quality public transport.`,
    why: [
      'Both views get a full paragraph, and the writer\'s own view is stated in the introduction and conclusion.',
      'The concession in the thesis ("while road building can relieve specific bottlenecks") makes the position precise.',
      'Topic-specific vocabulary is used accurately: bottlenecks, induced demand, commuters.',
    ],
  },
  {
    id: 't2-rural',
    task: 2,
    level: 2,
    type: 'Problem / solution',
    title: 'Young people leaving rural areas',
    prompt: 'In many countries, young people are leaving rural areas to live and work in cities. What problems does this cause, and what can be done to address them?',
    model: `In many parts of the world, young adults are moving from the countryside to cities in search of education and employment. This trend creates difficulties both for the communities they leave and for the cities they move to, but there are practical measures that could reduce its impact.

The most immediate problem is the effect on rural areas. When young people leave, villages are left with an ageing population, and local services such as schools, shops and clinics close because there are too few people to support them. This in turn makes the countryside even less attractive to young families, creating a cycle of decline. Agriculture also suffers, as farms struggle to find workers.

Cities face the opposite challenge. A rapid influx of newcomers puts pressure on housing, which drives up rents and can lead to overcrowding. Public transport and healthcare may also become overstretched if infrastructure does not expand at the same pace as the population.

Several solutions could ease these problems. Governments could encourage businesses to locate in smaller towns through tax incentives, creating skilled jobs outside the major cities. Improving rural internet access would also allow young people to work remotely for city-based employers without relocating. At the same time, cities need to plan for growth by investing in affordable housing and transport before shortages become severe.

In conclusion, rural-to-urban migration weakens villages and strains cities, but a combination of rural investment, better digital infrastructure and forward planning in urban areas could significantly reduce its negative effects.`,
    why: [
      'Both questions — problems and solutions — get substantial, balanced coverage.',
      'Problems are explained as chains of cause and effect ("This in turn... creating a cycle of decline").',
      'Solutions are linked back to the problems they solve.',
    ],
  },
  {
    id: 't2-remote',
    task: 2,
    level: 3,
    type: 'Advantages / disadvantages',
    title: 'Working from home',
    prompt: 'Many companies now allow employees to work from home for some or all of the week. Do the advantages of this outweigh the disadvantages?',
    model: `Over the past few years, working from home has shifted from an occasional privilege to a normal arrangement in many organisations. Although it has some genuine drawbacks, I believe its advantages outweigh them for most employees and employers, particularly when home and office work are combined.

For employees, the most obvious benefit is the time and money saved by not commuting. Someone who travels an hour each way gains ten hours a week, which can be spent with family, exercising or resting. This flexibility can also make it possible for parents and carers to remain in full-time work. Employers benefit too: they can reduce office costs and recruit talented staff who live too far away to travel every day.

The disadvantages, however, should not be dismissed. Working alone can be isolating, and some people find it hard to separate their job from their private life when both happen in the same room. Teams may also lose the informal conversations that help new staff learn and that often generate ideas. Junior employees, in particular, can miss out on the guidance they would receive by sitting near experienced colleagues.

Most of these problems, though, can be addressed through a hybrid model, in which staff spend part of the week in the office for collaboration and training, and the rest at home for focused work. This arrangement keeps most of the benefits of home working while limiting its costs.

In conclusion, I believe that the advantages of working from home outweigh the disadvantages, especially where companies adopt a balanced approach rather than an all-or-nothing policy.`,
    why: [
      'The question asks for a judgement ("outweigh?"), and the essay gives one clearly.',
      'Advantages are considered from two perspectives (employees and employers).',
      'Paragraph 4 resolves the tension between the two sides instead of simply listing them.',
    ],
  },
];

export const taskById = (id) => tasks.find((t) => t.id === id);

/** Self-assessment questions, one group per criterion. */
export const checklist = {
  1: [
    ['Task Achievement', ['I paraphrased the question in the introduction.', 'I wrote a clear overview of the main trends or stages.', 'I supported key features with accurate figures.', 'I made comparisons rather than listing every number.', 'I wrote at least 150 words.']],
    ['Coherence and Cohesion', ['Each paragraph has a clear focus.', 'I grouped related information together.', 'I used a range of linking words without overusing them.']],
    ['Lexical Resource', ['I varied my language of change and comparison.', 'I avoided repeating the same words from the question.']],
    ['Grammatical Range and Accuracy', ['I used the correct tenses for the time period.', 'I used some complex sentences (relative clauses, while/whereas).', 'I checked articles, plurals and subject–verb agreement.']],
  ],
  2: [
    ['Task Response', ['I answered every part of the question.', 'My position is clear in the introduction and conclusion.', 'Each main idea is explained and supported with an example.', 'I wrote at least 250 words.']],
    ['Coherence and Cohesion', ['Each body paragraph has one central idea and a topic sentence.', 'Ideas progress logically within paragraphs.', 'I used reference words (this, such, these) as well as linkers.']],
    ['Lexical Resource', ['I used topic-specific vocabulary accurately.', 'I used natural collocations (meet needs, pose a risk).', 'I avoided memorised phrases that do not fit the question.']],
    ['Grammatical Range and Accuracy', ['I used a mix of simple and complex sentences.', 'Most of my sentences have no errors.', 'I checked punctuation, especially commas in complex sentences.']],
  ],
};
