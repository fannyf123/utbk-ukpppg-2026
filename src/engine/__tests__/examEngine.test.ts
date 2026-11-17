import { describe, expect, it } from 'vitest';
import { ALL_QUESTIONS, PCK_BANK, PU_BANK, getBankSummary } from '../../data/questionBank';
import {
  buildShuffledSlot,
  createDrillSession,
  createOfficialExamSession,
  prioritizeQuestions,
} from '../randomizer';
import { evaluateQuestion, gradeSession } from '../scoring';
import type { MasteryRecord } from '../../types/exam';

function createSeededRng(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

describe('Bank Soal UTBK UKPPPG 2026 Integrity', () => {
  it('memenuhi kapasitas di atas minimum 2 simulasi penuh dan berisi ketiga bentuk soal resmi', () => {
    const summary = getBankSummary();
    expect(summary.pck).toBeGreaterThanOrEqual(100);
    expect(summary.pu).toBeGreaterThanOrEqual(140);
    expect(summary.byType.PG).toBeGreaterThan(100);
    expect(summary.byType.PGK_KATEGORI).toBeGreaterThanOrEqual(35);
    expect(summary.byType.PGK_MCMA).toBeGreaterThanOrEqual(35);
  });

  it('tidak memiliki ID duplikat dan seluruh indeks jawaban sah sesuai bentuk soal', () => {
    const seenIds = new Set<string>();
    for (const q of ALL_QUESTIONS) {
      expect(seenIds.has(q.id)).toBe(false);
      seenIds.add(q.id);
      expect(q.prompt.trim().length).toBeGreaterThanOrEqual(25);
      expect(q.explanation.trim().length).toBeGreaterThanOrEqual(20);
      expect(q.subkompetensi.trim().length).toBeGreaterThanOrEqual(3);

      if (q.type === 'PG') {
        expect(q.options.length).toBeGreaterThanOrEqual(4);
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThan(q.options.length);
      } else if (q.type === 'PGK_MCMA') {
        expect(q.options.length).toBeGreaterThanOrEqual(4);
        expect(q.answer.length).toBeGreaterThanOrEqual(2);
        for (const a of q.answer) {
          expect(a).toBeGreaterThanOrEqual(0);
          expect(a).toBeLessThan(q.options.length);
        }
      } else {
        expect(q.categories.length).toBe(2);
        expect(q.statements.length).toBeGreaterThanOrEqual(3);
        for (const st of q.statements) {
          expect(st.text.trim().length).toBeGreaterThan(10);
          expect([0, 1]).toContain(st.answer);
        }
      }
    }
  });
});

describe('Randomizer & Smart Zero-Repeat Priority', () => {
  it('selalu menghasilkan tepat 50 PCK + 30 PU = 80 soal unik dan berdurasi 150 menit', () => {
    const session = createOfficialExamSession(PCK_BANK, PU_BANK, {}, { rng: createSeededRng(42) });
    expect(session.slots.length).toBe(80);
    expect(session.durationSeconds).toBe(150 * 60);

    const pck = session.slots.filter((s) => s.question.bank === 'PCK');
    const pu = session.slots.filter((s) => s.question.bank === 'PU');
    expect(pck.length).toBe(50);
    expect(pu.length).toBe(30);

    const ids = new Set(session.slots.map((s) => s.question.id));
    expect(ids.size).toBe(80);

    // Pastikan ketiga bentuk soal hadir dalam simulasi resmi
    const types = new Set(session.slots.map((s) => s.question.type));
    expect(types.has('PG')).toBe(true);
    expect(types.has('PGK_KATEGORI')).toBe(true);
    expect(types.has('PGK_MCMA')).toBe(true);
  });

  it('memprioritaskan soal yang belum pernah dikerjakan agar dua simulasi berturut-turut tidak mengulang soal', () => {
    const first = createOfficialExamSession(PCK_BANK, PU_BANK, {}, { rng: createSeededRng(10) });
    const mastery: Record<string, MasteryRecord> = {};
    for (const slot of first.slots) {
      mastery[slot.question.id] = {
        seenCount: 1,
        correctCount: 1,
        wrongCount: 0,
        lastAttemptAt: 1000,
        lastCorrect: true,
      };
    }

    const second = createOfficialExamSession(PCK_BANK, PU_BANK, mastery, {
      rng: createSeededRng(99),
    });
    const firstIds = new Set(first.slots.map((s) => s.question.id));
    const overlap = second.slots.filter((s) => firstIds.has(s.question.id));
    expect(overlap.length).toBe(0);
  });

  it('mengurutkan soal salah lebih dulu daripada soal yang sudah dikuasai saat melakukan prioritas', () => {
    const subset = ALL_QUESTIONS.slice(0, 6);
    const mastery: Record<string, MasteryRecord> = {
      [subset[0].id]: { seenCount: 1, correctCount: 1, wrongCount: 0, lastAttemptAt: 1, lastCorrect: true },
      [subset[1].id]: { seenCount: 1, correctCount: 0, wrongCount: 1, lastAttemptAt: 1, lastCorrect: false },
    };
    const ordered = prioritizeQuestions(subset, mastery, createSeededRng(7));
    const orderedIds = ordered.map((q) => q.id);
    // 4 soal unseen harus mendahului subset[1] (salah), dan subset[0] (dikuasai) paling akhir
    expect(orderedIds.indexOf(subset[1].id)).toBe(4);
    expect(orderedIds.indexOf(subset[0].id)).toBe(5);
  });

  it('menjaga teks jawaban benar tetap akurat setelah opsi diacak (PG, PGK_MCMA, PGK_KATEGORI)', () => {
    const pgQ = ALL_QUESTIONS.find((q) => q.type === 'PG')!;
    const mcmaQ = ALL_QUESTIONS.find((q) => q.type === 'PGK_MCMA')!;
    const katQ = ALL_QUESTIONS.find((q) => q.type === 'PGK_KATEGORI')!;

    const pgSlot = buildShuffledSlot(pgQ, createSeededRng(123), true);
    if (pgQ.type === 'PG' && pgSlot.question.type === 'PG') {
      expect(pgSlot.question.options[pgSlot.question.answer]).toBe(pgQ.options[pgQ.answer]);
    }

    const mcmaSlot = buildShuffledSlot(mcmaQ, createSeededRng(456), true);
    if (mcmaQ.type === 'PGK_MCMA' && mcmaSlot.question.type === 'PGK_MCMA') {
      const origTexts = new Set(mcmaQ.answer.map((i) => mcmaQ.options[i]));
      const shufTexts = new Set(mcmaSlot.question.answer.map((i) => mcmaSlot.question.type === 'PGK_MCMA' ? mcmaSlot.question.options[i] : ''));
      expect(shufTexts).toEqual(origTexts);
    }

    const katSlot = buildShuffledSlot(katQ, createSeededRng(789), true);
    if (katQ.type === 'PGK_KATEGORI' && katSlot.question.type === 'PGK_KATEGORI') {
      for (const st of katSlot.question.statements) {
        const orig = katQ.statements.find((o) => o.text === st.text)!;
        expect(st.answer).toBe(orig.answer);
      }
    }
  });
});

describe('Scoring Engine & Drill Builder', () => {
  it('menilai tepat untuk PG, PGK_KATEGORI, dan PGK_MCMA beserta agregasi Rumpun & Subkompetensi', () => {
    const session = createDrillSession(
      ALL_QUESTIONS,
      { bank: 'PCK', topic: 'ALL', type: 'ALL', count: 12, instantFeedback: false },
      {},
      { rng: createSeededRng(2026) }
    );
    expect(session.slots.length).toBe(12);

    // Jawab benar 6 pertama, sisanya salah/kosong
    for (let i = 0; i < session.slots.length; i++) {
      const q = session.slots[i].question;
      if (i < 6) {
        if (q.type === 'PG') {
          session.answers[q.id] = { type: 'PG', selected: q.answer };
        } else if (q.type === 'PGK_MCMA') {
          session.answers[q.id] = { type: 'PGK_MCMA', selected: [...q.answer] };
        } else {
          session.answers[q.id] = {
            type: 'PGK_KATEGORI',
            selections: q.statements.map((s) => s.answer),
          };
        }
      }
    }

    const res = gradeSession(session, session.createdAt + 600_000);
    expect(res.strictCorrectCount).toBe(6);
    expect(res.strictScore).toBe(50);
    expect(res.missedIds.length).toBe(6);
    expect(res.pckTotal).toBe(12);
    expect(res.puTotal).toBe(0);

    const mcma = ALL_QUESTIONS.find((q) => q.type === 'PGK_MCMA')!;
    if (mcma.type === 'PGK_MCMA') {
      const partialEval = evaluateQuestion(mcma, {
        type: 'PGK_MCMA',
        selected: [mcma.answer[0]],
      });
      expect(partialEval.strictCorrect).toBe(false);
      expect(partialEval.partialRatio).toBeGreaterThan(0);
    }
  });
});
