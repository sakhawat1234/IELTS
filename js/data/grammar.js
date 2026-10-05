// Grammar for IELTS: the structures that move Grammatical Range and
// Accuracy from band 5 to band 7. Each unit ends with a marked exercise.

export const units = [
  {
    id: 'tenses',
    level: 1,
    title: 'Past simple, present perfect and Task 1 tenses',
    body: `
<p>Use the <strong>past simple</strong> for finished times: <em>in 2010, last year, between 2000 and 2005</em>. Use the <strong>present perfect</strong> for a period up to now or a result now: <em>since 2010, recently, over the past decade</em>.</p>
<div class="example">The population <strong>rose</strong> sharply between 1990 and 2000. (finished period)<br>Prices <strong>have risen</strong> every year since 2015. (up to now)</div>
<p>In Writing Task 1, match the tense to the dates on the chart: past dates → past simple; future projections → <em>is expected to, is projected to, will</em>.</p>
<div class="example">By 2040, the figure <strong>is projected to reach</strong> 60%.</div>`,
    groups: [
      {
        type: 'mcq',
        instructions: 'Choose the correct form.',
        items: [
          { q: 'Car ownership ___ steadily between 1995 and 2005.', options: ['has increased', 'increased', 'is increasing'], answer: 'B', explain: 'A finished period with past dates → past simple.' },
          { q: 'I ___ in this city since I was twelve.', options: ['lived', 'have lived', 'am living'], answer: 'B', explain: '"since" + a period continuing now → present perfect.' },
          { q: 'By 2050, the number of electric cars ___ to overtake petrol cars.', options: ['is expected', 'expected', 'has expected'], answer: 'A', explain: 'Future projection → is expected to.' },
          { q: 'Over the past decade, online shopping ___ dramatically.', options: ['grew', 'has grown', 'grows'], answer: 'B', explain: '"Over the past decade" runs up to now → present perfect.' },
          { q: 'Sales ___ a peak of 400 units in March and then fell.', options: ['reached', 'have reached', 'reach'], answer: 'A', explain: 'A specific past point → past simple.' },
        ],
      },
    ],
  },
  {
    id: 'articles',
    level: 1,
    title: 'Articles: a, an, the and no article',
    body: `
<p>Article errors are the most common grammar mistake in IELTS writing. Four rules cover most cases.</p>
<ol>
<li><strong>a / an</strong> for one of many, mentioned for the first time: <em>a study found...</em></li>
<li><strong>the</strong> when the reader knows which one: <em>the study</em> (already mentioned), <em>the government</em> (of the country we are discussing), <em>the highest</em>, <em>the number of</em>.</li>
<li><strong>No article</strong> for general plurals and uncountable nouns: <em>Children need exercise. Pollution harms health.</em></li>
<li><strong>the</strong> with some fixed expressions: <em>the environment, the internet, the elderly, the 1990s</em>.</li>
</ol>
<div class="compare">
<div class="weak"><h4>Avoid</h4><p>The technology changes the society.<br>The number of student increased.</p></div>
<div class="strong"><h4>Write</h4><p>Technology changes society.<br>The number of students increased.</p></div>
</div>`,
    groups: [
      {
        type: 'mcq',
        instructions: 'Choose the correct option. "—" means no article.',
        items: [
          { q: '___ unemployment is a serious problem in many regions.', options: ['The', 'An', '—'], answer: 'C', explain: 'Uncountable noun used generally → no article.' },
          { q: 'The graph shows ___ number of tourists who visited the city.', options: ['a', 'the', '—'], answer: 'B', explain: '"the number of" is fixed.' },
          { q: 'Many people believe that ___ government should fund the arts.', options: ['a', 'the', '—'], answer: 'B', explain: 'The government of the country being discussed.' },
          { q: '___ recent study suggests that sleep affects memory.', options: ['A', 'The', '—'], answer: 'A', explain: 'One study, mentioned for the first time.' },
          { q: 'Young people spend a lot of time on ___ internet.', options: ['an', 'the', '—'], answer: 'B', explain: '"the internet" is fixed.' },
          { q: 'This was ___ highest figure in the table.', options: ['a', 'the', '—'], answer: 'B', explain: 'Superlatives take "the".' },
        ],
      },
    ],
  },
  {
    id: 'comparison',
    level: 1,
    title: 'Comparing data: comparatives and proportions',
    body: `
<p>Task 1 is a comparison task. Band 7 writers compare precisely.</p>
<table>
<tr><th>Structure</th><th>Example</th></tr>
<tr><td>comparative + than</td><td>Men spent <strong>more</strong> time on sport <strong>than</strong> women.</td></tr>
<tr><td>as ... as</td><td>Exports were <strong>almost as high as</strong> imports.</td></tr>
<tr><td>multiples</td><td>Women read for <strong>twice as long as</strong> men. / three times higher than</td></tr>
<tr><td>proportions</td><td><strong>a quarter of</strong>, <strong>nearly half of</strong>, <strong>the vast majority of</strong> respondents</td></tr>
<tr><td>whereas / while</td><td>Sales rose in Europe, <strong>whereas</strong> they fell in Asia.</td></tr>
<tr><td>superlative</td><td>Germany had <strong>by far the highest</strong> figure.</td></tr>
</table>
<p>Use <strong>fewer</strong> with countable nouns (fewer cars) and <strong>less</strong> with uncountable nouns (less traffic).</p>`,
    groups: [
      {
        type: 'gap',
        instructions: 'Complete each sentence with ONE word.',
        maxWords: 1,
        limit: 'ONE WORD',
        items: [
          { q: 'Twenty people chose tea and forty chose coffee, so coffee was twice as popular ___ tea.', answer: 'as', explain: 'twice as ... as' },
          { q: 'There were ___ cars on the road in 2020 than in 2010. (countable, smaller number)', answer: 'fewer', explain: 'Countable noun → fewer.' },
          { q: 'Spending rose in the north, ___ it fell in the south.', answer: ['whereas', 'while'], explain: 'Contrast between two clauses.' },
          { q: 'At 72%, this was by ___ the highest proportion.', answer: 'far', explain: '"by far the highest" emphasises a superlative.' },
          { q: '25% is the same as a ___ of the total.', answer: 'quarter', explain: '25% = a quarter.' },
        ],
      },
    ],
  },
  {
    id: 'relative',
    level: 2,
    title: 'Relative clauses',
    body: `
<p>Relative clauses add information without starting a new sentence — the simplest way to build complex sentences.</p>
<ul>
<li><strong>Defining</strong> (no commas): identifies which one. <em>Students <strong>who work part-time</strong> often manage time well.</em></li>
<li><strong>Non-defining</strong> (commas): adds extra information. <em>The scheme, <strong>which began in 2015</strong>, has been a success.</em></li>
</ul>
<p><strong>who</strong> for people, <strong>which</strong> for things, <strong>that</strong> for either but only in defining clauses, <strong>whose</strong> for possession, <strong>where</strong> for places, <strong>when</strong> for times.</p>
<div class="note note--warn"><p>Never use <em>that</em> after a comma: <s>The city, that is very old, ...</s> → The city, which is very old, ...</p></div>`,
    groups: [
      {
        type: 'mcq',
        instructions: 'Choose the correct relative word.',
        items: [
          { q: 'People ___ live in cities often suffer from noise.', options: ['which', 'who', 'whose'], answer: 'B', explain: 'People → who.' },
          { q: 'The library, ___ opened in 1990, is being renovated.', options: ['that', 'which', 'where'], answer: 'B', explain: 'Non-defining clause (commas) → which, never that.' },
          { q: 'Children ___ parents read to them develop language faster.', options: ['who', 'whose', 'which'], answer: 'B', explain: 'Possession → whose.' },
          { q: 'This is the town ___ I grew up.', options: ['which', 'where', 'when'], answer: 'B', explain: 'Place → where.' },
          { q: 'The 1990s were a decade ___ mobile phones became common.', options: ['when', 'which', 'where'], answer: 'A', explain: 'Time → when.' },
        ],
      },
    ],
  },
  {
    id: 'conditionals',
    level: 2,
    title: 'Conditionals for arguments',
    body: `
<p>Conditionals let you discuss consequences and hypothetical policies — exactly what Task 2 and Speaking Part 3 ask for.</p>
<table>
<tr><th>Type</th><th>Use</th><th>Example</th></tr>
<tr><td>Zero</td><td>general truths</td><td>If people sleep less, their concentration suffers.</td></tr>
<tr><td>First</td><td>real future possibility</td><td>If the tax is introduced, prices will rise.</td></tr>
<tr><td>Second</td><td>hypothetical present/future</td><td>If governments taxed sugar, consumption would fall.</td></tr>
<tr><td>Third</td><td>imagined past</td><td>If the city had invested earlier, the crisis would have been avoided.</td></tr>
</table>
<p>Band 7 variations: <em>Unless..., Provided that..., As long as..., Were the government to...</em></p>`,
    groups: [
      {
        type: 'mcq',
        instructions: 'Choose the correct form.',
        items: [
          { q: 'If public transport were free, more people ___ it.', options: ['will use', 'would use', 'would have used'], answer: 'B', explain: 'Second conditional: were → would + verb.' },
          { q: 'If the council ___ the park, residents would have protested.', options: ['closed', 'had closed', 'closes'], answer: 'B', explain: 'Third conditional: had + past participle.' },
          { q: '___ students practise regularly, they will not improve.', options: ['If', 'Unless', 'Provided'], answer: 'B', explain: 'Unless = if not.' },
          { q: 'Water ___ at 100°C if it is heated at sea level.', options: ['boils', 'would boil', 'will have boiled'], answer: 'A', explain: 'General truth → zero conditional.' },
          { q: 'The scheme will succeed ___ it receives enough funding.', options: ['unless', 'provided that', 'otherwise'], answer: 'B', explain: 'provided that = only if.' },
        ],
      },
    ],
  },
  {
    id: 'passive',
    level: 2,
    title: 'The passive voice',
    body: `
<p>Use the passive when the action matters more than who did it — essential for Task 1 processes and useful for an academic tone.</p>
<div class="example">The beans <strong>are roasted</strong> and then <strong>ground</strong> into powder.<br>It <strong>is widely believed</strong> that exercise improves mood.<br>New rules <strong>have been introduced</strong> to reduce waste.</div>
<p>Form: <strong>be</strong> (in the right tense) + <strong>past participle</strong>.</p>
<table>
<tr><th>Tense</th><th>Passive</th></tr>
<tr><td>present simple</td><td>is made</td></tr>
<tr><td>past simple</td><td>was built</td></tr>
<tr><td>present perfect</td><td>has been reduced</td></tr>
<tr><td>modal</td><td>should be banned / can be recycled</td></tr>
</table>`,
    groups: [
      {
        type: 'gap',
        instructions: 'Write the correct passive form of the verb in brackets.',
        limit: 'NO MORE THAN THREE WORDS',
        maxWords: 3,
        items: [
          { q: 'First, the clay ___ (shape) by hand. (present simple)', answer: 'is shaped', explain: 'is + past participle.' },
          { q: 'The bridge ___ (complete) in 1932.', answer: 'was completed', explain: 'Past simple passive.' },
          { q: 'Smoking ___ (ban) in public places since 2007.', answer: 'has been banned', explain: 'Present perfect passive with "since".' },
          { q: 'Plastic bottles ___ (can / recycle) easily.', answer: 'can be recycled', explain: 'Modal + be + past participle.' },
          { q: 'It ___ (believe) that the painting is a copy. (present simple)', answer: 'is believed', explain: '"It is believed that" — an impersonal passive.' },
        ],
      },
    ],
  },
  {
    id: 'nominalisation',
    level: 3,
    title: 'Nominalisation: the academic style',
    body: `
<p>Academic writing often turns verbs and adjectives into nouns. This packs more information into a sentence and sounds more formal — a feature of band 7+ writing.</p>
<div class="compare">
<div class="weak"><h4>Verb-based</h4><p>Prices rose quickly, so many families could not afford homes.</p></div>
<div class="strong"><h4>Nominalised</h4><p>The rapid rise in prices made housing unaffordable for many families.</p></div>
</div>
<table>
<tr><th>Verb / adjective</th><th>Noun</th></tr>
<tr><td>increase, decline, grow</td><td>an increase in, a decline in, the growth of</td></tr>
<tr><td>develop, introduce, reduce</td><td>the development of, the introduction of, a reduction in</td></tr>
<tr><td>important, available, able</td><td>the importance of, the availability of, the ability to</td></tr>
</table>
<div class="note note--warn"><p>Do not overdo it. One or two nominalised phrases per paragraph is plenty; a whole essay of them is hard to read.</p></div>`,
    groups: [
      {
        type: 'gap',
        instructions: 'Complete with the noun form of the word in brackets.',
        limit: 'ONE WORD',
        maxWords: 1,
        items: [
          { q: 'The ___ (introduce) of the new law caused controversy.', answer: 'introduction', explain: 'introduce → introduction' },
          { q: 'There has been a sharp ___ (reduce) in crime.', answer: 'reduction', explain: 'reduce → reduction' },
          { q: 'The ___ (available) of cheap flights has changed tourism.', answer: 'availability', explain: 'available → availability' },
          { q: 'Many people underestimate the ___ (important) of sleep.', answer: 'importance', explain: 'important → importance' },
          { q: 'The rapid ___ (grow) of cities creates challenges.', answer: 'growth', explain: 'grow → growth' },
        ],
      },
    ],
  },
  {
    id: 'contrast',
    level: 3,
    title: 'Concession and contrast',
    body: `
<p>Balanced arguments need ways to accept a point and then answer it. Each structure below has its own grammar — mixing them up is a common error.</p>
<table>
<tr><th>Linker</th><th>Followed by</th><th>Example</th></tr>
<tr><td>although / even though</td><td>a clause</td><td><strong>Although</strong> cars are convenient, they pollute.</td></tr>
<tr><td>despite / in spite of</td><td>a noun or -ing</td><td><strong>Despite</strong> the cost, the scheme was popular. / <strong>Despite</strong> being expensive...</td></tr>
<tr><td>however / nevertheless</td><td>a new sentence</td><td>Cars are convenient. <strong>However</strong>, they pollute.</td></tr>
<tr><td>whereas / while</td><td>a contrasting clause</td><td>Cities are noisy, <strong>whereas</strong> villages are quiet.</td></tr>
<tr><td>admittedly ... but</td><td>concession then reply</td><td><strong>Admittedly</strong>, the plan is costly, <strong>but</strong> the savings are greater.</td></tr>
</table>
<div class="note note--warn"><p>Never write <s>Although ..., but ...</s> — one linker is enough.</p></div>`,
    groups: [
      {
        type: 'mcq',
        instructions: 'Choose the correct linker.',
        items: [
          { q: '___ the heavy rain, the match went ahead.', options: ['Although', 'Despite', 'However'], answer: 'B', explain: 'Followed by a noun phrase → despite.' },
          { q: '___ it was expensive, the course was worth it.', options: ['Despite', 'Although', 'Nevertheless'], answer: 'B', explain: 'Followed by a clause → although.' },
          { q: 'Online courses are flexible. ___, they require discipline.', options: ['However', 'Although', 'Despite'], answer: 'A', explain: 'Starts a new sentence → however.' },
          { q: 'Some students thrive in groups, ___ others prefer to work alone.', options: ['despite', 'whereas', 'in spite of'], answer: 'B', explain: 'Contrasting two clauses → whereas.' },
          { q: 'In spite of ___ tired, she finished the essay.', options: ['she was', 'being', 'be'], answer: 'B', explain: 'in spite of + -ing.' },
        ],
      },
    ],
  },
];

export const unitById = (id) => units.find((u) => u.id === id);
