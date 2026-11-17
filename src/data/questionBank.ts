import ustExtracted from './ustExtracted.json';
import arenaPuExtracted from './arenaPuExtracted.json';
import { PU_KATEGORI_ADDITIONS } from './puKategoriAdditions';
import { PCK_MESIN_PART_1 } from './pckMesinPart1';
import { PCK_MESIN_PART_2 } from './pckMesinPart2';
import { PCK_MESIN_EXTRA } from './pckMesinExtra';
import type { ExamQuestion, QuestionBank, QuestionType } from '../types/exam';

const UST_PU_QUESTIONS = ustExtracted as ExamQuestion[];
const ARENA_PU_QUESTIONS = arenaPuExtracted as ExamQuestion[];

export const PCK_BANK: ExamQuestion[] = [
  ...PCK_MESIN_PART_1,
  ...PCK_MESIN_PART_2,
  ...PCK_MESIN_EXTRA,
];

export const PU_BANK: ExamQuestion[] = [
  ...UST_PU_QUESTIONS,
  ...ARENA_PU_QUESTIONS,
  ...PU_KATEGORI_ADDITIONS,
];

export const ALL_QUESTIONS: ExamQuestion[] = [...PCK_BANK, ...PU_BANK];

export const QUESTION_BY_ID: Record<string, ExamQuestion> = Object.fromEntries(
  ALL_QUESTIONS.map((q) => [q.id, q])
);

export function getBankTopics(bank?: 'ALL' | QuestionBank): string[] {
  const list =
    bank && bank !== 'ALL'
      ? ALL_QUESTIONS.filter((q) => q.bank === bank)
      : ALL_QUESTIONS;
  return Array.from(new Set(list.map((q) => q.topic)));
}

export function getBankSummary() {
  const byType: Record<QuestionType, number> = { PG: 0, PGK_KATEGORI: 0, PGK_MCMA: 0 };
  for (const q of ALL_QUESTIONS) byType[q.type]++;
  return {
    total: ALL_QUESTIONS.length,
    pck: PCK_BANK.length,
    pu: PU_BANK.length,
    byType,
    topics: getBankTopics('ALL'),
  };
}
