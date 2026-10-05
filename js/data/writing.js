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
      unitLabel: 'hours per week',
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
    id: 't1-spending',
    task: 1,
    level: 2,
    title: 'Pie charts: household spending, 1995 and 2025',
    prompt: 'The pie charts below show how the average household in one country spent its income in 1995 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    chart: {
      type: 'pie',
      labels: ['Housing', 'Food', 'Transport', 'Leisure', 'Other'],
      pies: [
        { title: '1995', values: [22, 34, 14, 10, 20] },
        { title: '2025', values: [35, 18, 17, 14, 16] },
      ],
    },
    model: `The pie charts compare the proportion of household income spent on five categories in one country in 1995 and 2025.

Overall, the most significant change was the reversal in the positions of food and housing: food was the largest expense in 1995, but by 2025 housing had taken its place by a wide margin. Spending on transport and leisure rose slightly, while the share for other items fell.

In 1995, just over a third of income (34%) went on food, compared with 22% on housing. Thirty years later, the pattern had changed dramatically. The share devoted to housing had risen by 13 percentage points to 35%, whereas the proportion spent on food had almost halved, falling to 18%.

The remaining categories saw more modest changes. Transport accounted for 14% of spending in 1995 and 17% in 2025, and leisure grew from a tenth of the budget to 14%. Meanwhile, the share allocated to other items declined from a fifth to 16%.`,
    why: [
      'The overview identifies the single biggest change (housing and food swapping places) before any detail.',
      'Proportion language is varied: "just over a third", "almost halved", "a tenth", "a fifth".',
      'Percentage points are used correctly for the difference between two percentages (22% → 35% = 13 points).',
      'Small changes are grouped in one paragraph instead of being described one by one.',
    ],
  },
  {
    id: 't1-museums',
    task: 1,
    level: 2,
    title: 'Table: visitors to five city museums',
    prompt: 'The table below shows the number of visitors to five museums in one city in 2015, 2020 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    chart: {
      type: 'table',
      caption: 'Visitors (thousands)',
      head: ['Museum', '2015', '2020', '2025'],
      rows: [
        ['History Museum', '820', '310', '940'],
        ['Science Museum', '650', '240', '710'],
        ['Art Gallery', '540', '190', '480'],
        ['Natural History Museum', '410', '160', '530'],
        ['Maritime Museum', '120', '60', '95'],
      ],
    },
    model: `The table shows how many people visited five museums in one city in 2015, 2020 and 2025.

Overall, all five museums experienced a sharp fall in visitor numbers in 2020, followed by a recovery by 2025. However, the recovery was uneven: three museums ended the period more popular than in 2015, while two did not regain their earlier levels. The History Museum was the most visited attraction in every year.

In 2015, the History Museum attracted 820,000 visitors, ahead of the Science Museum (650,000) and the Art Gallery (540,000). Five years later, attendance at every museum had dropped dramatically, with the History Museum falling to 310,000, little more than a third of its earlier figure, and the Maritime Museum halving from 120,000 to 60,000.

By 2025, the History and Science Museums had surpassed their 2015 totals, reaching 940,000 and 710,000 respectively. The most impressive growth was at the Natural History Museum, where numbers rose to 530,000, some 120,000 more than in 2015, allowing it to overtake the Art Gallery. By contrast, the Art Gallery (480,000) and the Maritime Museum (95,000) remained below their original levels.`,
    why: [
      'With a table, you must choose: the model picks the 2020 fall, the uneven recovery and one overtaking.',
      'Numbers are written accurately in thousands (820,000), matching the table heading.',
      '"Respectively", "surpassed", "overtake" and "remained below" show a range of comparison language.',
    ],
  },
  {
    id: 't1-village',
    task: 1,
    level: 3,
    title: 'Maps: changes to the village of Northfield',
    prompt: 'The maps below show the village of Northfield in 2000 and today. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    chart: {
      type: 'map',
      maps: [
        {
          title: 'Northfield, 2000',
          items: [
            { label: 'Farmland', kind: 'green', x: 10, y: 10, w: 190, h: 90 },
            { label: 'Woodland', kind: 'green', x: 210, y: 10, w: 80, h: 90 },
            { label: 'Main Road', kind: 'road', x: 0, y: 112, w: 300, h: 14 },
            { label: 'Shop', kind: 'building', x: 20, y: 140, w: 60, h: 40 },
            { label: 'Houses', kind: 'building', x: 95, y: 140, w: 80, h: 40 },
            { label: 'School', kind: 'building', x: 210, y: 140, w: 80, h: 40 },
            { label: 'River', kind: 'water', x: 0, y: 205, w: 300, h: 30 },
          ],
        },
        {
          title: 'Northfield, today',
          items: [
            { label: 'Housing estate', kind: 'building', x: 10, y: 10, w: 120, h: 90 },
            { label: 'Supermarket', kind: 'building', x: 138, y: 10, w: 82, h: 90 },
            { label: 'Woodland', kind: 'green', x: 228, y: 10, w: 62, h: 90 },
            { label: 'Main Road', kind: 'road', x: 0, y: 112, w: 300, h: 14 },
            { label: 'Café', kind: 'building', x: 20, y: 140, w: 60, h: 40 },
            { label: 'Houses', kind: 'building', x: 95, y: 140, w: 80, h: 40 },
            { label: 'School', alt: 'School (larger, extended to the west)', kind: 'building', x: 185, y: 140, w: 105, h: 40 },
            { label: 'Park', kind: 'green', x: 185, y: 186, w: 105, h: 16 },
            { label: 'River', kind: 'water', x: 0, y: 205, w: 300, h: 30 },
            { label: 'Footbridge', kind: 'road', x: 60, y: 205, w: 10, h: 30 },
          ],
        },
      ],
    },
    model: `The maps illustrate how the village of Northfield has changed between 2000 and the present day.

Overall, the village has become considerably more developed, particularly to the north of the main road, where farmland has given way to housing and retail. The area south of the road has seen only minor alterations, and the main road itself has remained unchanged.

The most dramatic transformation has taken place in the northern half of the village. In 2000, this area consisted almost entirely of farmland, with woodland in the north-east corner. The farmland has since been replaced by a housing estate and a supermarket, and the woodland has been reduced slightly in size.

South of the main road, the row of houses remains, but the shop has been converted into a café. The school has been extended to the west, and a small park has been created between the school and the river. Finally, a footbridge has been built across the river, where there was previously no crossing.`,
    why: [
      'Map reports use the present perfect passive for change: "has been replaced", "has been extended".',
      'Location language orients the reader: to the north of, in the north-east corner, between the school and the river.',
      'The overview separates the big change (north) from the small changes (south).',
      'Only features on the maps are described; there is no guessing about why the changes happened.',
    ],
  },
  {
    id: 't1-college',
    task: 1,
    level: 3,
    title: 'Bar chart and pie chart: a college\'s students',
    prompt: 'The bar chart shows the number of students enrolled in four subject areas at a college in 2015 and 2025. The pie chart shows how students travelled to the college in 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    chart: {
      type: 'mixed',
      parts: [
        {
          title: 'Students enrolled by subject area',
          chart: {
            type: 'bar',
            unit: 'students',
            max: 1600,
            x: ['Business', 'Engineering', 'Health', 'Arts'],
            series: [
              { name: '2015', values: [1200, 900, 600, 800] },
              { name: '2025', values: [1500, 1000, 1300, 500] },
            ],
          },
        },
        {
          title: 'How students travelled to college, 2025',
          chart: {
            type: 'pie',
            labels: ['Bus', 'Car', 'Bicycle', 'Walk', 'Train'],
            pies: [{ title: '2025', values: [38, 24, 16, 12, 10] }],
          },
        },
      ],
    },
    model: `The bar chart compares enrolment in four subject areas at a college in 2015 and 2025, while the pie chart shows the means of transport students used to reach the college in 2025.

Overall, total enrolment grew over the decade, with Health showing by far the largest increase and Arts the only decline. In 2025, the bus was the most common way of travelling to college, and the great majority of students did not travel by car.

Business was the most popular subject area in both years, rising from 1,200 to 1,500 students. Engineering grew only marginally, from 900 to 1,000. The most striking change was in Health, where numbers more than doubled from 600 to 1,300, moving it from the smallest to the second-largest subject area. Arts, in contrast, fell from 800 students to 500.

Regarding transport, the bus accounted for 38% of journeys in 2025, followed by the car at just under a quarter (24%). The remaining students cycled (16%), walked (12%) or took the train (10%). In other words, around three-quarters of students used a means of transport other than the car.`,
    why: [
      'With two charts, the introduction and the overview cover both; neither is ignored.',
      'Each chart gets its own body paragraph, so the report stays easy to follow.',
      'The writer does not invent a link between the charts (for example, that Health students take the bus).',
      'The final sentence adds a useful calculation (24% by car → around three-quarters not by car).',
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
  {
    id: 't2-secondhand',
    task: 2,
    level: 3,
    type: 'Two-part question',
    title: 'Buying second-hand goods',
    prompt: 'Nowadays, more and more people choose to buy second-hand goods, such as clothes and furniture, rather than new ones. Why is this happening? Is it a positive or negative development?',
    model: `In recent years, buying used clothing, furniture and electronics has become increasingly mainstream, especially among younger consumers. This trend is driven mainly by financial pressure and changing attitudes, and in my view it is a largely positive development.

The most obvious reason is cost. As rents and food prices have risen in many countries, households have less money for non-essential purchases, and a second-hand sofa or coat can cost a fraction of its original price. Technology has also made used goods far easier to find. Online marketplaces and resale apps allow people to browse thousands of items from home, which has removed much of the inconvenience once associated with charity shops and markets. Finally, growing awareness of environmental issues has made second-hand buying fashionable rather than embarrassing, particularly among people in their twenties.

I believe this shift is mostly beneficial. Above all, it reduces waste. Clothing production uses vast quantities of water and energy, and every item that is reused rather than thrown away lowers this demand. Second-hand markets also make good-quality products accessible to people on low incomes, and they create small businesses for those who repair or resell items.

Admittedly, the trend is not without drawbacks. Some used products, such as cheap electrical goods or children's car seats, may not meet current safety standards, and buyers have fewer rights if something goes wrong. Retailers of new goods may also lose sales. However, these risks can be managed through clearer safety information, and the environmental and social benefits are, in my opinion, far more significant.

In conclusion, people are turning to second-hand goods because they are cheaper, easier to find and more socially acceptable than in the past. Overall, I regard this as a positive change, provided that buyers are protected from unsafe products.`,
    why: [
      'A two-part question needs two answers. Paragraph 2 answers "Why?"; paragraphs 3–4 answer "Positive or negative?".',
      'The introduction previews both answers, so the examiner sees at once that the whole task is covered.',
      'Reasons are explained, not just listed: each has a mechanism (prices rose → less money for extras).',
      'The concession paragraph ("Admittedly...") shows balance without weakening the clear position.',
    ],
  },
  {
    id: 't2-elderly',
    task: 2,
    level: 2,
    type: 'Discussion',
    title: 'Who should look after elderly people?',
    prompt: 'In many countries, the number of elderly people is growing. Some people think that families should be responsible for caring for their older relatives, while others believe this is the responsibility of the government. Discuss both views and give your own opinion.',
    model: `As life expectancy rises, societies face difficult questions about how older people should be supported. Some argue that this duty belongs to families, while others believe the state should take the lead. In my view, families and governments should share the responsibility, with the state providing a safety net that families cannot.

Those who favour family care point out that relatives usually know an elderly person's needs and preferences better than any institution. In many cultures, including those of South Asia, caring for parents is regarded as a moral obligation and a way of repaying the care received in childhood. Older people who live with their children or grandchildren also tend to feel less lonely, and they can contribute to the household, for example by helping with childcare.

On the other hand, there are strong arguments for government responsibility. Modern families are often smaller and more scattered than in the past, as adult children move to cities or abroad for work. Many cannot give up their jobs to provide full-time care, and some elderly people need specialist medical support that only trained professionals can provide. Without public funding, older people with no relatives nearby, or whose families are poor, could be left without help.

I believe the most realistic approach combines the two. Families should remain the first source of emotional support and everyday help where this is possible, but governments must fund healthcare, pensions and professional care for those with complex needs or no family support. Some countries also give carers allowances or paid leave, which allows relatives to help without falling into poverty.

In conclusion, although families have an important role to play, the growing number of elderly people means that governments cannot leave care entirely to them. A shared system is both fairer and more sustainable.`,
    why: [
      'Despite the label "discuss both views", the writer must still give an opinion — here a balanced, shared-responsibility view stated in the introduction.',
      'A culturally relevant example (South Asia) is used naturally, which is fine as long as it supports the point.',
      'The opinion paragraph is practical and specific ("carers allowances or paid leave") rather than vague.',
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
