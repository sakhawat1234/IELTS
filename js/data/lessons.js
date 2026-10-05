import listening from './lessons-listening.js?v=20261005b';
import reading from './lessons-reading.js?v=20261005b';
import writing from './lessons-writing.js?v=20261005b';
import speaking from './lessons-speaking.js?v=20261005b';

// The order inside each file is the teaching order. Modules group lessons
// on the skill pages.
export const MODULES = {
  listening: ['Know the test', 'Core skills', 'Question types', 'Band 7 skills'],
  reading: ['Know the test', 'Core skills', 'Question types', 'Band 7 skills'],
  writing: ['Know the test', 'Task 1', 'Task 2', 'Band 7 language'],
  speaking: ['Know the test', 'Part by part', 'Band 7 delivery'],
};

export const lessons = [...listening, ...reading, ...writing, ...speaking];

export const lessonById = (id) => lessons.find((l) => l.id === id);

export const lessonsFor = (skill) => lessons.filter((l) => l.skill === skill);
