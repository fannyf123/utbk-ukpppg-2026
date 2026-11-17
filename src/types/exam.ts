export type QuestionType = 'PG' | 'PGK_MCMA' | 'PGK_KATEGORI';
export type QuestionBank = 'PCK' | 'PU';
export type Competency = 'Pedagogik' | 'Kepribadian' | 'Sosial' | 'Profesional';

export type ProdiId =
  | 'teknik-mesin'
  | 'pgsd'
  | 'matematika'
  | 'bahasa-indonesia'
  | 'ipa'
  | 'smk-vokasi'
  | 'umum';

export type QuestionProdiTag = ProdiId | 'lintas-mapel';
export type QuestionProdiScope = 'UMUM' | QuestionProdiTag[];

export type PCKFocus =
  | 'Tujuan Pembelajaran'
  | 'Metode Pengajaran'
  | 'Miskonsepsi Siswa'
  | 'Media/ICT & Simulator'
  | 'Asesmen Otentik'
  | 'K3LH & Teaching Factory';

export interface BaseQuestion {
  id: string;
  bank: QuestionBank;
  topic: string;
  prodiScope?: QuestionProdiScope;
  pckFocus?: PCKFocus;
  source: string;
  kompetensi: Competency;
  subkompetensi: string;
  prompt: string;
  table?: string[][];
  explanation: string;
}

export interface PGQuestion extends BaseQuestion {
  type: 'PG';
  options: string[];
  answer: number;
}

export interface MCMAQuestion extends BaseQuestion {
  type: 'PGK_MCMA';
  options: string[];
  answer: number[];
}

export interface KategoriStatement {
  text: string;
  answer: 0 | 1;
  reason?: string;
}

export interface KategoriQuestion extends BaseQuestion {
  type: 'PGK_KATEGORI';
  categories: [string, string];
  statements: KategoriStatement[];
}

export type ExamQuestion = PGQuestion | MCMAQuestion | KategoriQuestion;

/** Per-question runtime answer stored cleanly by question ID */
export type UserAnswer =
  | { type: 'PG'; selected: number | null }
  | { type: 'PGK_MCMA'; selected: number[] }
  | { type: 'PGK_KATEGORI'; selections: (0 | 1 | null)[] };

export type SessionMode = 'official' | 'drill';

export interface ShuffledSlot {
  question: ExamQuestion;
  /** Displayed position -> original option/statement index */
  orderMap: number[];
}

export interface ExamSession {
  id: string;
  mode: SessionMode;
  prodiId?: ProdiId;
  prodiLabel?: string;
  title: string;
  instantFeedback: boolean;
  createdAt: number;
  durationSeconds: number;
  endsAt: number;
  currentIndex: number;
  flaggedIds: string[];
  /** Checked in instantFeedback mode before final submit */
  revealedIds: string[];
  slots: ShuffledSlot[];
  answers: Record<string, UserAnswer>;
}

export interface SubcompetencyScore {
  code: string;
  kompetensi: Competency;
  correct: number;
  total: number;
  earnedPoints: number;
}

export interface ExamResultSummary {
  id: string;
  mode: SessionMode;
  prodiId?: ProdiId;
  prodiLabel?: string;
  title: string;
  completedAt: number;
  elapsedSeconds: number;
  totalQuestions: number;
  strictCorrectCount: number;
  strictScore: number; // 0-100
  weightedScore: number; // 0-100 accounting for partial PGK credit for diagnostics
  pckCorrect: number;
  pckTotal: number;
  puCorrect: number;
  puTotal: number;
  byType: Record<QuestionType, { correct: number; total: number }>;
  bySubcompetency: SubcompetencyScore[];
  byTopic: { topic: string; bank: QuestionBank; correct: number; total: number }[];
  missedIds: string[];
  flaggedIds: string[];
  slots: ShuffledSlot[];
  answers: Record<string, UserAnswer>;
}

export interface MasteryRecord {
  seenCount: number;
  correctCount: number;
  wrongCount: number;
  lastAttemptAt: number;
  lastCorrect: boolean;
}

export interface DrillConfig {
  prodiFilter?: ProdiId | 'ALL_ARCHIVE';
  bank: 'ALL' | QuestionBank;
  topic: string; // 'ALL' or specific topic string
  subkompetensi?: string; // 'ALL' or 'P.1'..'PF.5'
  type: 'ALL' | QuestionType;
  count: number;
  instantFeedback: boolean;
  onlyMissedIds?: string[];
  customTitle?: string;
}
