// A 24-question placement check: grammar, vocabulary and a short reading.
// It recommends where to start the course; it is not an IELTS score.

export const placement = {
  intro: 'This 15-minute check tells you which stage of the course to start with. Answer without a dictionary. If you do not know an answer, choose "I don\'t know" or leave it blank instead of guessing — the recommendation is more useful that way.',
  groups: [
    {
      type: 'mcq',
      instructions: 'Grammar. Choose the correct option.',
      items: [
        { q: 'She ___ in London for three years before she moved to Paris.', options: ['has lived', 'had lived', 'lives', 'I don\'t know'], answer: 'B', explain: 'An earlier past before another past event → past perfect.' },
        { q: 'If I ___ more time, I would learn another language.', options: ['have', 'had', 'will have', 'I don\'t know'], answer: 'B', explain: 'Second conditional.' },
        { q: 'The report ___ by the committee next week.', options: ['will publish', 'will be published', 'is publishing', 'I don\'t know'], answer: 'B', explain: 'Future passive.' },
        { q: 'Not only ___ late, but he also forgot the documents.', options: ['he arrived', 'did he arrive', 'he did arrive', 'I don\'t know'], answer: 'B', explain: 'Inversion after "Not only".' },
        { q: 'There isn\'t ___ information about the course online.', options: ['many', 'much', 'a few', 'I don\'t know'], answer: 'B', explain: 'Information is uncountable.' },
        { q: '___ the bad weather, the event was a success.', options: ['Although', 'Despite', 'However', 'I don\'t know'], answer: 'B', explain: 'Despite + noun phrase.' },
        { q: 'I wish I ___ to the meeting yesterday.', options: ['went', 'had gone', 'have gone', 'I don\'t know'], answer: 'B', explain: 'Regret about the past → wish + past perfect.' },
        { q: 'The man ___ car was stolen called the police.', options: ['who', 'whose', 'which', 'I don\'t know'], answer: 'B', explain: 'Possession → whose.' },
      ],
    },
    {
      type: 'mcq',
      instructions: 'Vocabulary. Choose the word or phrase that best completes the sentence.',
      items: [
        { q: 'The government plans to ___ a new tax on sugary drinks.', options: ['introduce', 'produce', 'induce', 'I don\'t know'], answer: 'A', explain: 'introduce a tax / a law.' },
        { q: 'Researchers ___ a study on 2,000 volunteers.', options: ['made', 'did', 'conducted', 'I don\'t know'], answer: 'C', explain: 'conduct a study.' },
        { q: 'A ___ lifestyle, with little exercise, increases health risks.', options: ['sedentary', 'sentimental', 'stationary', 'I don\'t know'], answer: 'A', explain: 'sedentary = sitting a lot.' },
        { q: 'The new policy had a significant ___ on unemployment.', options: ['affect', 'impact', 'result', 'I don\'t know'], answer: 'B', explain: 'have an impact on.' },
        { q: 'Plastic waste ___ a serious threat to marine life.', options: ['poses', 'makes', 'gives', 'I don\'t know'], answer: 'A', explain: 'pose a threat.' },
        { q: 'Measures to ___ the effects of climate change are urgently needed.', options: ['mitigate', 'migrate', 'motivate', 'I don\'t know'], answer: 'A', explain: 'mitigate = reduce the severity of.' },
        { q: 'The figures ___ between 20% and 30% throughout the decade.', options: ['fluctuated', 'flourished', 'fluttered', 'I don\'t know'], answer: 'A', explain: 'fluctuate = go up and down.' },
        { q: 'Her explanation was so ___ that everyone understood immediately.', options: ['lucid', 'lurid', 'lavish', 'I don\'t know'], answer: 'A', explain: 'lucid = clear.' },
      ],
    },
    {
      type: 'tfng',
      instructions: 'Reading. Read the text, then decide whether each statement is TRUE, FALSE or NOT GIVEN. Text: "Night trains, once considered outdated, are returning to Europe. Several new routes have opened since 2020, partly because travellers want to avoid the emissions of short flights. However, operators say tickets are difficult to price profitably, since each sleeping compartment carries far fewer passengers than a seated carriage."',
      items: [
        { q: 'Night trains were previously seen as old-fashioned.', answer: 'TRUE', explain: '"once considered outdated".' },
        { q: 'All new night train routes are profitable.', answer: 'FALSE', explain: 'Operators say tickets are difficult to price profitably.' },
        { q: 'Concern about emissions is one reason for the growth of night trains.', answer: 'TRUE', explain: '"partly because travellers want to avoid the emissions of short flights".' },
        { q: 'Night train tickets are cheaper than flights.', answer: 'NOT GIVEN', explain: 'Ticket prices are not compared with flights.' },
      ],
    },
    {
      type: 'mcq',
      instructions: 'Reading. Choose the best answer.',
      items: [
        { q: 'Why is it hard to make night trains profitable, according to the text?', options: ['Few people want to travel at night.', 'Sleeping carriages hold fewer passengers.', 'Fuel is expensive.', 'I don\'t know'], answer: 'B', explain: 'Each compartment "carries far fewer passengers than a seated carriage".' },
        { q: 'Which word in the text means "companies that run a service"?', options: ['travellers', 'operators', 'routes', 'I don\'t know'], answer: 'B', explain: 'operators' },
        { q: 'What does "partly because" suggest?', options: ['There is only one reason.', 'There are other reasons too.', 'The reason is not true.', 'I don\'t know'], answer: 'B', explain: '"partly" means it is one of several reasons.' },
        { q: 'The writer\'s attitude towards night trains is mainly', options: ['enthusiastic.', 'neutral and factual.', 'critical.', 'I don\'t know'], answer: 'B', explain: 'The text reports facts and views without giving an opinion.' },
      ],
    },
  ],
};

/** Score → recommended starting stage. */
export function recommend(score, total) {
  const pct = score / total;
  if (pct >= 0.8) return { level: 3, text: 'Start with Stage 3 (Advanced). Your grammar and vocabulary are already around band 6–6.5; the advanced lessons and timed practice will close the gap to 7.' };
  if (pct >= 0.5) return { level: 2, text: 'Start with Stage 2 (Intermediate). You have a solid base; focus on question-type strategies and building complex sentences, then move to Stage 3.' };
  return { level: 1, text: 'Start with Stage 1 (Foundation). Build the core grammar, vocabulary and test knowledge first — it will make everything after it faster. Plan on the full 12 weeks or longer.' };
}
