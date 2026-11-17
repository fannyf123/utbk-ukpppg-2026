import ustExtracted from './ustExtracted.json';
import arenaExtracted from './arenaExtracted.json';
import fungsionalExtracted from './fungsionalExtracted.json';
import externalHarvested2026 from './externalHarvested2026.json';
import { PU_KATEGORI_ADDITIONS } from './puKategoriAdditions';
import { PCK_MESIN_PART_1 } from './pckMesinPart1';
import { PCK_MESIN_PART_2 } from './pckMesinPart2';
import { PCK_MESIN_EXTRA } from './pckMesinExtra';
import { PCK_DKV_PART_1 } from './pckDkvPart1';
import { PCK_DKV_PART_2 } from './pckDkvPart2';
import { WEB_CURATED_EXTRAS } from './webCuratedExtras';
import { WEB_CURATED_EXTRAS_2026 } from './webCuratedExtras2026';
import { questionMatchesProdi } from './prodiRegistry';
import type {
  ExamQuestion,
  ProdiId,
  QuestionBank,
  QuestionProdiScope,
  QuestionType,
} from '../types/exam';

const PU_KAT_PRODI_MAP: Record<string, QuestionProdiScope> = {
  'pu-kat-01': ['teknik-mesin', 'dkv', 'tata-boga', 'akuntansi', 'smk-vokasi'], // guru SMK
  'pu-kat-02': [
    'teknik-mesin',
    'dkv',
    'tata-boga',
    'akuntansi',
    'smk-vokasi',
    'matematika',
    'bahasa-indonesia',
    'bahasa-inggris',
    'ipa',
    'ips',
    'pjok',
    'ppkn',
    'pai',
  ], // kelas XI
  'pu-kat-06': ['teknik-mesin', 'smk-vokasi'], // hitungan teknik / praktik
  'pu-kat-09': ['teknik-mesin', 'smk-vokasi'], // bengkel praktik
  'pu-kat-10': ['teknik-mesin', 'dkv', 'tata-boga', 'akuntansi', 'smk-vokasi'], // remaja SMK 15-18 tahun
  'pu-kat-12': ['teknik-mesin', 'dkv', 'tata-boga', 'akuntansi', 'smk-vokasi'], // kelas vokasi
  'pu-kat-13': ['teknik-mesin', 'smk-vokasi'], // DUDIKA bengkel industri
  'pu-kat-14': ['teknik-mesin'], // MGMP Teknik Mesin
  'pu-kat-17': ['teknik-mesin', 'smk-vokasi'], // bengkel atau kelas
  'pu-kat-18': ['teknik-mesin'], // membersihkan mesin setelah praktik
};

const PCK_MESIN_BANK: ExamQuestion[] = [
  ...PCK_MESIN_PART_1,
  ...PCK_MESIN_PART_2,
  ...PCK_MESIN_EXTRA,
].map((q) => ({
  ...q,
  prodiScope: ['teknik-mesin'],
}));

const PCK_DKV_BANK: ExamQuestion[] = [
  ...PCK_DKV_PART_1,
  ...PCK_DKV_PART_2,
].map((q) => ({
  ...q,
  prodiScope: ['dkv'],
}));

const PU_KAT_BANK: ExamQuestion[] = PU_KATEGORI_ADDITIONS.map((q) => ({
  ...q,
  prodiScope: PU_KAT_PRODI_MAP[q.id] ?? 'UMUM',
}));

const UST_QUESTIONS = ustExtracted as ExamQuestion[];
const ARENA_QUESTIONS = arenaExtracted as ExamQuestion[];
const FUNGSIONAL_QUESTIONS = fungsionalExtracted as ExamQuestion[];
const EXTERNAL_HARVESTED_QUESTIONS = externalHarvested2026 as ExamQuestion[];

export const ALL_QUESTIONS: ExamQuestion[] = [
  ...PCK_MESIN_BANK,
  ...PCK_DKV_BANK,
  ...WEB_CURATED_EXTRAS,
  ...WEB_CURATED_EXTRAS_2026,
  ...EXTERNAL_HARVESTED_QUESTIONS,
  ...FUNGSIONAL_QUESTIONS,
  ...UST_QUESTIONS,
  ...ARENA_QUESTIONS,
  ...PU_KAT_BANK,
];

export const PCK_BANK: ExamQuestion[] = ALL_QUESTIONS.filter((q) => q.bank === 'PCK');
export const PU_BANK: ExamQuestion[] = ALL_QUESTIONS.filter((q) => q.bank === 'PU');

export const QUESTION_BY_ID: Record<string, ExamQuestion> = Object.fromEntries(
  ALL_QUESTIONS.map((q) => [q.id, q])
);

export function getProdiQuestions(prodiId: ProdiId | 'ALL_ARCHIVE'): ExamQuestion[] {
  if (prodiId === 'ALL_ARCHIVE') return ALL_QUESTIONS;
  return ALL_QUESTIONS.filter((q) => questionMatchesProdi(q, prodiId));
}

export function getProdiPckBank(prodiId: ProdiId): ExamQuestion[] {
  return getProdiQuestions(prodiId).filter((q) => q.bank === 'PCK');
}

export function getProdiPuBank(prodiId: ProdiId): ExamQuestion[] {
  return getProdiQuestions(prodiId).filter((q) => q.bank === 'PU');
}

export function getBankTopics(
  bank?: 'ALL' | QuestionBank,
  prodiId: ProdiId | 'ALL_ARCHIVE' = 'ALL_ARCHIVE'
): string[] {
  const prodiList = getProdiQuestions(prodiId);
  const list =
    bank && bank !== 'ALL' ? prodiList.filter((q) => q.bank === bank) : prodiList;
  return Array.from(new Set(list.map((q) => q.topic))).sort((a, b) => a.localeCompare(b));
}

export function getBankSummary(prodiId: ProdiId | 'ALL_ARCHIVE' = 'ALL_ARCHIVE') {
  const list = getProdiQuestions(prodiId);
  const byType: Record<QuestionType, number> = { PG: 0, PGK_KATEGORI: 0, PGK_MCMA: 0 };
  let pck = 0;
  let pu = 0;
  for (const q of list) {
    byType[q.type]++;
    if (q.bank === 'PCK') pck++;
    else pu++;
  }
  return {
    total: list.length,
    pck,
    pu,
    byType,
    topics: getBankTopics('ALL', prodiId),
  };
}
