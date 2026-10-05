// Original practice passages. Every answer has an explanation that points
// to the evidence, because checking *why* is where most learning happens.

export const passages = [
  {
    id: 'urban-bees',
    level: 1,
    title: 'The rise of the urban beekeeper',
    minutes: 17,
    paragraphs: [
      ['A', 'Twenty years ago, a beehive on a city rooftop would have been seen as an eccentric hobby. Today, hives sit on top of hotels, office blocks and even a few fire stations. In some European capitals the number of registered urban hives more than doubled in a decade. Supporters say that city bees are thriving, while some scientists worry that the trend may be doing more harm than good.'],
      ['B', 'The appeal for beekeepers is easy to understand. Cities are often warmer than the surrounding countryside, so the season in which bees can fly and collect food starts earlier and ends later. Parks, gardens, railway embankments and street trees offer a wide variety of flowers, and, unlike many farms, they are rarely sprayed with pesticides. As a result, urban colonies frequently produce more honey per hive than rural ones.'],
      ['C', 'Businesses have their own reasons. A hive on the roof is a visible sign of environmental concern, and honey labelled with the company\'s name makes an attractive gift for clients. Several hotels now serve their own rooftop honey at breakfast. Critics call this "beewashing": using bees for public relations rather than for any real benefit to nature.'],
      ['D', 'The concern among ecologists is not about honeybees themselves, which are domesticated animals and in no danger of disappearing. It is about the many species of wild bees that also live in cities. Wild bees, such as bumblebees and solitary mining bees, feed on the same flowers. When the number of honeybee hives grows faster than the supply of flowers, the wild species may be pushed out. One study of a large city found that where hives were most densely concentrated, wild bees visited flowers less often.'],
      ['E', 'There is also the question of disease. Honeybees kept close together can pass infections to one another, and some of these can spread to wild species through shared flowers. Experienced beekeepers inspect their hives regularly, but many newcomers lack the training to recognise early signs of illness.'],
      ['F', 'None of this means that cities should ban beekeeping. Instead, researchers suggest that the priority should be planting. A single hive needs the nectar of thousands of flowers every day, so anyone who wants to help bees could do more good by turning a lawn into a meadow than by buying a hive. Some city councils have begun to require new rooftop hives to be registered, and a few now link the number of permits to the amount of green space in each district.'],
    ],
    groups: [
      {
        type: 'tfng',
        instructions: 'Do the following statements agree with the information given in the passage? Choose TRUE, FALSE or NOT GIVEN.',
        items: [
          { q: 'Beehives can now be found on some fire stations.', answer: 'TRUE', explain: 'Paragraph A: hives sit on "even a few fire stations".' },
          { q: 'Hives in cities usually produce less honey than hives in the countryside.', answer: 'FALSE', explain: 'Paragraph B says urban colonies "frequently produce more honey per hive than rural ones".' },
          { q: 'Hotels that serve rooftop honey charge more for breakfast.', answer: 'NOT GIVEN', explain: 'Paragraph C mentions hotels serving their honey but says nothing about prices.' },
          { q: 'Honeybees are at risk of becoming extinct.', answer: 'FALSE', explain: 'Paragraph D: honeybees are "in no danger of disappearing".' },
          { q: 'Some people who start keeping bees cannot recognise the first signs of disease.', answer: 'TRUE', explain: 'Paragraph E: "many newcomers lack the training to recognise early signs of illness". "Early signs" is paraphrased as "the first signs".' },
        ],
      },
      {
        type: 'gap',
        instructions: 'Complete the sentences.',
        limit: 'ONE WORD ONLY from the passage for each answer',
        maxWords: 1,
        items: [
          { q: 'Bees can fly for a longer season in cities because cities are ___ than the countryside.', answer: 'warmer', explain: 'Paragraph B: "Cities are often warmer than the surrounding countryside".' },
          { q: 'Using bees mainly for publicity has been called "___".', answer: ['beewashing', 'bee-washing'], explain: 'Paragraph C: critics call this "beewashing".' },
          { q: 'Wild bees and honeybees feed on the same ___.', answer: 'flowers', explain: 'Paragraph D: wild bees "feed on the same flowers".' },
          { q: 'Researchers believe that ___ is a higher priority than adding more hives.', answer: 'planting', explain: 'Paragraph F: "the priority should be planting".' },
        ],
      },
      {
        type: 'mcq',
        instructions: 'Choose the correct letter, A, B, C or D.',
        items: [
          {
            q: 'What did one study find, according to paragraph D?',
            options: ['Wild bees moved to areas with more hives.', 'Wild bees visited flowers less often where there were many hives.', 'Honeybees attacked wild bees near their hives.', 'The number of hives in the city fell.'],
            answer: 'B',
            explain: '"where hives were most densely concentrated, wild bees visited flowers less often."',
          },
          {
            q: 'Why, according to the writer, do some businesses keep hives?',
            options: ['to earn money by selling honey to the public', 'to show that they care about the environment', 'because their employees asked for them', 'to reduce the use of pesticides nearby'],
            answer: 'B',
            explain: 'Paragraph C: "a visible sign of environmental concern". Honey is a gift for clients, not something sold.',
          },
          {
            q: 'What have some city councils started to do?',
            options: ['ban hives on rooftops', 'give away hives to residents', 'make owners register new rooftop hives', 'run training courses for beekeepers'],
            answer: 'C',
            explain: 'Paragraph F: councils "require new rooftop hives to be registered".',
          },
        ],
      },
    ],
  },

  {
    id: 'sleep',
    level: 2,
    title: 'Are we really sleeping less?',
    minutes: 20,
    paragraphs: [
      ['A', 'It has become almost a cliché that modern life is robbing us of sleep. Newspaper articles regularly claim that people today sleep one or two hours less than their grandparents did, and the blame is placed on electric light, long working hours and, more recently, smartphones. Yet when sleep researchers look closely at the evidence, the picture turns out to be considerably more complicated.'],
      ['B', 'Part of the problem is how sleep is measured. Most large historical surveys simply asked people how long they usually slept. Self-reported sleep is notoriously unreliable: people tend to count the time they spend in bed rather than the time they are actually asleep, and they remember a typical night as better than it was. Modern studies increasingly use wearable devices that record movement, but these were not available decades ago, so comparisons across generations often set one kind of measurement against another.'],
      ['C', 'When researchers have compared like with like, the decline largely disappears. Reviews that pool studies from many countries over several decades have found that average sleep duration among adults has changed relatively little, falling in some countries and rising slightly in others. Among adolescents, however, the evidence for a genuine reduction is stronger, particularly on school nights.'],
      ['D', 'Studies of societies without electricity have added a further surprise. Researchers who monitored groups of hunter-gatherers in Africa and South America, using wearable devices, found that they slept on average between six and seven and a half hours a night — no more than many people in industrial countries. They also rarely fell asleep as soon as it got dark; most went to bed some hours after sunset. What these groups had in common was not longer sleep but highly regular sleep, closely linked to the daily fall in temperature.'],
      ['E', 'None of this means that sleep is unimportant or that nobody is short of it. Shift workers, new parents and people with long commutes do sleep less, and a large body of research links long-term sleep shortage to problems ranging from weight gain to poor concentration. The point is rather that the problem may be concentrated in particular groups instead of affecting the whole population equally.'],
      ['F', 'Some scientists argue that the focus on hours is itself misleading. The timing of sleep may matter as much as its length. People whose body clocks make them naturally late sleepers are often forced by work or school timetables to wake before their bodies are ready, a mismatch sometimes called "social jet lag". They may sleep a reasonable amount on average, yet feel permanently tired because their sleep keeps shifting between weekdays and weekends.'],
      ['G', 'If this view is correct, the solutions look different too. Rather than simply telling people to sleep more, policies might aim at making schedules more flexible. Later school start times for teenagers, for instance, have been tested in several countries, with some studies reporting better attendance and alertness.'],
    ],
    groups: [
      {
        type: 'match',
        instructions: 'Paragraphs B–F each have one heading from the list below. Choose the correct heading for each paragraph. There are more headings than paragraphs.',
        optionsTitle: 'List of headings',
        options: [
          { value: 'i', label: 'The difficulty of comparing old and new evidence' },
          { value: 'ii', label: 'How smartphones disturb our sleep' },
          { value: 'iii', label: 'Little overall change in the sleep of adults' },
          { value: 'iv', label: 'Lessons from communities without artificial light' },
          { value: 'v', label: 'The people who really are short of sleep' },
          { value: 'vi', label: 'Why when we sleep may matter as much as how long' },
          { value: 'vii', label: 'The health benefits of sleeping outdoors' },
          { value: 'viii', label: 'A new method of measuring brain activity' },
        ],
        items: [
          { q: 'Paragraph B', answer: 'i', explain: 'B explains that old surveys asked people, while modern studies use devices — so generations are measured differently.' },
          { q: 'Paragraph C', answer: 'iii', explain: 'C\'s main point is that adult sleep "has changed relatively little". Teenagers are a secondary detail, which is the trap.' },
          { q: 'Paragraph D', answer: 'iv', explain: 'D is about hunter-gatherer societies "without electricity".' },
          { q: 'Paragraph E', answer: 'v', explain: 'E names shift workers, new parents and commuters as the groups who do sleep less.' },
          { q: 'Paragraph F', answer: 'vi', explain: '"The timing of sleep may matter as much as its length."' },
        ],
      },
      {
        type: 'tfng',
        instructions: 'Do the following statements agree with the information given in the passage? Choose TRUE, FALSE or NOT GIVEN.',
        items: [
          { q: 'When asked about their sleep, people often include time they spent awake in bed.', answer: 'TRUE', explain: 'Paragraph B: people "count the time they spend in bed rather than the time they are actually asleep".' },
          { q: 'Wearable devices were used in the large historical sleep surveys.', answer: 'FALSE', explain: 'Paragraph B: these devices "were not available decades ago"; old surveys "simply asked people".' },
          { q: 'The hunter-gatherers usually went to sleep as soon as it became dark.', answer: 'FALSE', explain: 'Paragraph D: they "rarely fell asleep as soon as it got dark".' },
          { q: 'Every country that tested later school start times has now introduced them.', answer: 'NOT GIVEN', explain: 'Paragraph G says they have been tested in several countries, but not what happened afterwards.' },
        ],
      },
      {
        type: 'gap',
        instructions: 'Complete the summary.',
        limit: 'NO MORE THAN TWO WORDS from the passage for each answer',
        maxWords: 2,
        items: [
          { q: 'The hunter-gatherers did not sleep longer than people in industrial countries, but their sleep was very ___.', answer: 'regular', explain: 'Paragraph D: "highly regular sleep".' },
          { q: 'Their sleep was closely connected to the daily ___ in temperature.', answer: 'fall', explain: 'Paragraph D: "the daily fall in temperature".' },
          { q: 'People who are naturally ___ are often woken by timetables before they are ready.', answer: 'late sleepers', explain: 'Paragraph F: "naturally late sleepers".' },
          { q: 'The resulting mismatch is sometimes described as social ___.', answer: 'jet lag', explain: 'Paragraph F: "social jet lag". Writing all three words would break the word limit.' },
        ],
      },
    ],
  },

  {
    id: 'repair',
    level: 3,
    title: 'The case for repairing things',
    minutes: 23,
    paragraphs: [
      ['A', 'For most of human history, repairing an object was the obvious thing to do when it broke. Clothes were darned, shoes were resoled and radios were taken to a shop where someone with a soldering iron could bring them back to life. Within a couple of generations, much of this has disappeared in wealthy countries. When a toaster or a phone stops working, the usual response is to replace it, often because a repair would cost almost as much as a new item, if it is possible at all.'],
      ['B', 'It is tempting to blame this entirely on manufacturers. The term "planned obsolescence" — designing products to fail after a certain period — has become a popular explanation for short product lives, and there have been documented cases of companies limiting how long their products last. But I think the more common problem is less sinister and harder to fix. Products are increasingly designed to be cheap to assemble, thin and light, and these goals often conflict with being easy to open. Batteries are glued rather than screwed in; components are combined into single units that must be replaced together. Nobody needs to intend a product to fail for it to be impossible to mend.'],
      ['C', 'The environmental cost is considerable. Electronic waste is one of the fastest-growing waste streams in the world, and only a minority of it is formally collected and recycled. More importantly, recycling recovers only part of the value of a device. For a phone, most of the energy is spent in mining, manufacturing and transport rather than being locked in the materials themselves, so extending a product\'s life by even a year or two typically saves more emissions than recycling it at the end.'],
      ['D', 'In response, a "right to repair" movement has grown up, arguing that owners should have access to spare parts, manuals and diagnostic tools at a fair price. Several governments have listened. The European Union has introduced rules requiring manufacturers of certain household appliances to make spare parts available for a number of years after a model is sold, and similar laws have been passed in some US states. Some manufacturers, after years of resistance, now sell repair kits directly to customers.'],
      ['E', 'Critics raise reasonable objections. Manufacturers argue that unqualified repairs can make devices unsafe, particularly where large batteries are involved, and that opening their designs to third parties may expose them to security risks or the copying of their technology. These concerns deserve to be taken seriously, but they are not, in my view, a reason to keep repair in the hands of a single company. Car maintenance has long combined a market of independent mechanics with safety regulation, and there is no obvious reason why electronics should be different.'],
      ['F', 'Laws alone, however, will not bring repair back. Repair depends on skills, and those skills have been fading along with the small workshops that used them. Volunteer-run "repair cafés", where people bring broken items and learn to fix them with experienced helpers, have spread to thousands of locations since the first opened in Amsterdam in 2009. Their value lies less in the number of objects they save than in the confidence they give people to try.'],
      ['G', 'Ultimately, the question is cultural as well as technical. For a repair economy to work, consumers must be willing to pay a little more for products that can be maintained, and to value an object partly for the years of use it will give. That is a change in habit that regulation can encourage but not impose. It is, I would argue, worth encouraging all the same.'],
    ],
    groups: [
      {
        type: 'match',
        instructions: 'Which paragraph, A–G, contains the following information? You may use any letter more than once.',
        showOptions: false,
        options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((v) => ({ value: v, label: '' })),
        items: [
          { q: 'a comparison with an industry that combines safety rules and independent repairers', answer: 'E', explain: 'Paragraph E: car maintenance has "combined a market of independent mechanics with safety regulation".' },
          { q: 'the claim that most of a device\'s environmental cost comes from producing it', answer: 'C', explain: 'Paragraph C: most energy is spent "in mining, manufacturing and transport".' },
          { q: 'examples of everyday objects that people used to mend', answer: 'A', explain: 'Paragraph A: clothes, shoes and radios.' },
          { q: 'a reference to when a particular kind of community event began', answer: 'F', explain: 'Paragraph F: the first repair café opened in Amsterdam in 2009.' },
        ],
      },
      {
        type: 'ynng',
        instructions: 'Do the following statements agree with the views of the writer? Choose YES, NO or NOT GIVEN.',
        items: [
          { q: 'Planned obsolescence is the main reason why most products cannot be repaired.', answer: 'NO', explain: 'Paragraph B: "I think the more common problem is less sinister" — design for cheapness, not deliberate failure.' },
          { q: 'A product can be impossible to repair even if nobody intended it to fail.', answer: 'YES', explain: 'Paragraph B: "Nobody needs to intend a product to fail for it to be impossible to mend."' },
          { q: 'Recycling a phone saves more emissions than keeping it in use for longer.', answer: 'NO', explain: 'Paragraph C says the opposite: extending its life "typically saves more emissions than recycling it".' },
          { q: 'Manufacturers\' safety concerns about repair should be ignored.', answer: 'NO', explain: 'Paragraph E: "These concerns deserve to be taken seriously".' },
          { q: 'Repair cafés will soon exist in every major city.', answer: 'NOT GIVEN', explain: 'The writer describes their spread so far but makes no prediction.' },
        ],
      },
      {
        type: 'mcq',
        instructions: 'Choose the correct letter, A, B, C or D.',
        items: [
          {
            q: 'What does the writer say about electronic waste in paragraph C?',
            options: ['Most of it is now recycled.', 'Only some of it is formally collected and recycled.', 'The amount produced is falling.', 'Most of its value is in the raw materials.'],
            answer: 'B',
            explain: '"only a minority of it is formally collected and recycled".',
          },
          {
            q: 'According to paragraph D, the European Union\'s rules require',
            options: ['all electronic products to be repairable.', 'makers of some appliances to supply spare parts for a period.', 'manufacturers to sell repair kits to customers.', 'free repairs during the first year.'],
            answer: 'B',
            explain: 'Manufacturers of "certain household appliances" must make spare parts available "for a number of years". Repair kits are a voluntary step by some manufacturers.',
          },
          {
            q: 'What is the writer\'s main point in paragraph G?',
            options: ['Regulation alone can create a repair economy.', 'People\'s attitudes need to change as well as the law.', 'Repairs will always cost more than replacement.', 'The technical problems of repair have been solved.'],
            answer: 'B',
            explain: 'The question is "cultural as well as technical"; regulation "can encourage but not impose" the change.',
          },
        ],
      },
      {
        type: 'gap',
        instructions: 'Complete the sentences.',
        limit: 'ONE WORD ONLY from the passage for each answer',
        maxWords: 1,
        items: [
          { q: 'In many modern devices, batteries are ___ instead of being screwed in.', answer: 'glued', explain: 'Paragraph B: "Batteries are glued rather than screwed in".' },
          { q: 'The writer believes repair cafés are valuable mainly for the ___ they give people.', answer: 'confidence', explain: 'Paragraph F: "the confidence they give people to try".' },
        ],
      },
    ],
  },
];

export const passageById = (id) => passages.find((p) => p.id === id);
