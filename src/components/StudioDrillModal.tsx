import { useEffect, useMemo, useState } from 'react';
import { JUKNIS_SUBCOMPETENCIES } from '../data/juknisReference';
import { PRODI_CONFIGS, getProdiConfig } from '../data/prodiRegistry';
import { ALL_QUESTIONS, getBankSummary, getBankTopics } from '../data/questionBank';
import { filterDrillQuestions } from '../engine/randomizer';
import type { DrillConfig, ProdiId, QuestionBank, QuestionType } from '../types/exam';

interface StudioDrillModalProps {
  open: boolean;
  initialProdi?: ProdiId | 'ALL_ARCHIVE';
  initialSub?: string;
  onClose: () => void;
  onStartDrill: (config: DrillConfig) => void;
}

export function StudioDrillModal({
  open,
  initialProdi = 'teknik-mesin',
  initialSub = 'ALL',
  onClose,
  onStartDrill,
}: StudioDrillModalProps) {
  const [prodiFilter, setProdiFilter] = useState<ProdiId | 'ALL_ARCHIVE'>(initialProdi);
  const [bank, setBank] = useState<'ALL' | QuestionBank>('ALL');
  const [topic, setTopic] = useState<string>('ALL');
  const [subkompetensi, setSubkompetensi] = useState<string>(initialSub);
  const [qType, setQType] = useState<'ALL' | QuestionType>('ALL');
  const [count, setCount] = useState<number>(20);
  const [instantFeedback, setInstantFeedback] = useState<boolean>(true);

  useEffect(() => {
    if (open) {
      setProdiFilter(initialProdi);
      setSubkompetensi(initialSub);
      setTopic('ALL');
    }
  }, [open, initialProdi, initialSub]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const summary = useMemo(() => getBankSummary(prodiFilter), [prodiFilter]);
  const topics = useMemo(() => getBankTopics(bank, prodiFilter), [bank, prodiFilter]);

  const matchingPool = useMemo(
    () =>
      filterDrillQuestions(ALL_QUESTIONS, {
        prodiFilter,
        bank,
        topic,
        subkompetensi,
        type: qType,
      }),
    [prodiFilter, bank, topic, subkompetensi, qType]
  );

  if (!open) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="studio-drill-title"
      onClick={onClose}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="eyebrow" style={{ fontSize: '0.7rem' }}>
              MODE LATIHAN TERFOKUS
            </div>
            <h3 id="studio-drill-title">Studio Drill Topik, Prodi &amp; Bentuk Soal</h3>
          </div>
          <button type="button" className="btn btn-sm btn-ghost" onClick={onClose}>
            Tutup
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          <div>
            <label
              htmlFor="drill-prodi-select"
              style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}
            >
              Program Studi (Terisolasi ketat)
            </label>
            <select
              id="drill-prodi-select"
              className="text-input"
              value={prodiFilter}
              onChange={(e) => {
                setProdiFilter(e.target.value as ProdiId | 'ALL_ARCHIVE');
                setTopic('ALL');
                setBank('ALL');
              }}
            >
              {PRODI_CONFIGS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
              <option value="ALL_ARCHIVE">Semua Prodi &amp; Lintas Mapel ({ALL_QUESTIONS.length} soal)</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.75rem' }}>
            <div>
              <label
                htmlFor="drill-bank-select"
                style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}
              >
                Rumpun Soal
              </label>
              <select
                id="drill-bank-select"
                className="text-input"
                value={bank}
                onChange={(e) => {
                  setBank(e.target.value as 'ALL' | QuestionBank);
                  setTopic('ALL');
                }}
              >
                <option value="ALL">Semua Rumpun ({summary.total})</option>
                <option value="PCK">PCK Bidang Studi ({summary.pck})</option>
                <option value="PU">Pedagogi Umum ({summary.pu})</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="type-select"
                style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}
              >
                Bentuk Soal
              </label>
              <select
                id="type-select"
                className="text-input"
                value={qType}
                onChange={(e) => setQType(e.target.value as 'ALL' | QuestionType)}
              >
                <option value="ALL">Campuran (PG, Kategori BS, MCMA)</option>
                <option value="PG">Pilihan Ganda Tunggal (PG)</option>
                <option value="PGK_KATEGORI">PGK Kategori (Tabel Benar/Salah)</option>
                <option value="PGK_MCMA">PGK MCMA (Multi Jawaban)</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="drill-topic-select"
              style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}
            >
              Topik Spesifik
            </label>
            <select
              id="drill-topic-select"
              className="text-input"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="ALL">Semua Topik dalam Prodi Terpilih</option>
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.75rem' }}>
            <div>
              <label
                htmlFor="sub-select"
                style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}
              >
                Subkompetensi Juknis
              </label>
              <select
                id="sub-select"
                className="text-input"
                value={subkompetensi}
                onChange={(e) => setSubkompetensi(e.target.value)}
              >
                <option value="ALL">Semua Subkompetensi (P.1–PF.5)</option>
                {JUKNIS_SUBCOMPETENCIES.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.code} · {s.shortTitle}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="count-select"
                style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}
              >
                Jumlah Soal
              </label>
              <select
                id="count-select"
                className="text-input"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
              >
                {[10, 15, 20, 30, 50].map((n) => (
                  <option key={n} value={n}>
                    {n} Soal
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', fontWeight: 500 }}>
            <input
              type="checkbox"
              checked={instantFeedback}
              onChange={(e) => setInstantFeedback(e.target.checked)}
              style={{ width: 17, height: 17 }}
            />
            <span>Mode Belajar (Periksa kunci jawaban &amp; pembahasan langsung per soal)</span>
          </label>

          <div
            style={{
              padding: '0.95rem 1.1rem',
              borderRadius: '0.75rem',
              backgroundColor: 'var(--surface-alt)',
              border: '1px solid var(--ink-200)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ink-500)' }}>
                POOL SOAL COCOK
              </div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--ink-900)' }}>
                {matchingPool.length} Butir Tersedia
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--ink-600)' }}>
                Prodi: {prodiFilter === 'ALL_ARCHIVE' ? 'Semua Arsip' : getProdiConfig(prodiFilter).shortLabel}
              </div>
            </div>

            <button
              type="button"
              className="btn btn-accent"
              disabled={matchingPool.length === 0}
              onClick={() => {
                onClose();
                onStartDrill({
                  prodiFilter,
                  bank,
                  topic,
                  subkompetensi,
                  type: qType,
                  count,
                  instantFeedback,
                });
              }}
            >
              Mulai Drill Acak Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
