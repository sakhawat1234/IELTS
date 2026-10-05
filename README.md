# Band Seven — IELTS from zero to band 7

A free, self-contained IELTS Academic preparation site. It takes a learner from
foundation level to band 7 through a placement check, a 12-week plan, lessons
for all four skills, auto-marked practice and a mock test.

It is plain HTML, CSS and JavaScript modules: no build step, no server, no
database, no tracking. Progress is saved in the learner's own browser
(`localStorage`) and can be exported and restored from the Progress page.

## What's inside

| Area | Contents |
|---|---|
| Placement check | 24 questions (grammar, vocabulary, reading) that recommend a starting stage |
| Study plan | 12 weeks, 104 tasks covering every lesson and practice item in teaching order, plus daily habits |
| Lessons | 61 detailed lessons in modules (Listening 14, Reading 13, Writing 25, Speaking 9): every question type and every Task 1/Task 2 type, each with worked examples, a Bengali summary, a key-words glossary and a marked practice check |
| Reading | 4 original passages (12–14 questions each): TFNG, YNNG, headings, matching information, sentence endings, MCQ, summary completion; timer, band estimate, an explanation for every answer, difficult words with Bengali meanings |
| Listening | 6 sets covering Parts 1–4, read aloud by the browser's built-in voices (a different voice per speaker), with the transcript after marking |
| Writing | 7 Task 1 visuals (line, bar, pie, table, map, process, mixed) drawn as SVG and 6 Task 2 essays covering every question type; timer, word count, autosave, band-7 checklist, model answers with notes |
| Speaking | 8 full sets (Parts 1–3), a 16-topic Part 1 bank with sample answers, with a 1-minute + 2-minute Part 2 timer, an in-browser recorder (audio never leaves the device), model Part 2 and Part 3 answers |
| Vocabulary | 16 topics × 20 words plus 25 academic words and 25 linking words, each with a definition, a Bengali meaning and an example; spaced-repetition flashcards |
| Grammar | 8 units with marked exercises |
| Mock test | Listening, Reading, Writing and Speaking under test conditions, combined into an estimated overall band |
| Tools | Band calculator, progress dashboard with trend chart |
| Bengali help | Bengali summaries, glossaries and word meanings for Bangladeshi learners; one button (বাংলা) hides them all |

All passages, scripts, questions and model answers are original. Band
estimates use commonly published conversion tables and are approximate.

## Run it locally

ES modules need a web server (opening `index.html` from the file system will
not work):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publish it free on GitHub Pages

1. In the repository on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
3. After a minute the site is live at `https://<your-username>.github.io/<repository>/`.

Any other static host (Netlify, Cloudflare Pages, Kinsta Static Site Hosting,
an `/ielts` folder on an existing site) works the same way: upload the files.

## Adding content

Content lives in `js/data/` as plain JavaScript objects:

- `lessons-*.js` — lessons per skill (`module`, `level` 1–3, HTML `body`, Bengali `bn` summary, `glossary`, `practice` question groups)
- `reading.js` — passages and question groups
- `listening.js` — scripts (speaker, line) and question groups
- `writing.js` — tasks, chart data, model answers
- `speaking.js` — Part 1/2/3 sets and model answers
- `vocab.js`, `grammar.js`, `placement.js`, `plan.js`

Question groups use one format everywhere (see the comment at the top of
`js/quiz.js`): `mcq`, `multi` (choose TWO), `tfng`, `ynng`, `gap` (with an
optional `maxWords` limit) and `match`.

## Notes

- Listening needs a browser with English speech voices — current Chrome, Edge
  and Safari on Windows, macOS, Android and iOS all have them. Without voices,
  the page offers the transcript instead.
- IELTS is a registered trademark of the British Council, IDP: IELTS Australia
  and Cambridge University Press & Assessment. This project is independent and
  not endorsed by them.
