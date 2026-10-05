import listening from './lessons-listening.js';
import reading from './lessons-reading.js';
import writing from './lessons-writing.js';
import speaking from './lessons-speaking.js';

export const lessons = [...listening, ...reading, ...writing, ...speaking];

export const lessonById = (id) => lessons.find((l) => l.id === id);

export const lessonsFor = (skill) => lessons.filter((l) => l.skill === skill).sort((a, b) => a.level - b.level);
