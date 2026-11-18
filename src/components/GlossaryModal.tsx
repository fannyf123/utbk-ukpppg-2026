import { useEffect, useMemo, useState } from 'react';
import { BookMarked, Search, SlidersHorizontal } from 'lucide-react';
import {
  GLOSSARY_CATEGORIES,
  GLOSSARY_ITEMS,
  type GlossaryCategoryId,
} from '../data/glossaryTerms';

interface GlossaryModalProps {
  open: boolean;
  onClose: () => void;
  onPractice?: () => void;
}

export function GlossaryModal({ open, onClose, onPractice }: GlossaryModalProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<GlossaryCategoryId>('ALL');

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GLOSSARY_ITEMS.filter((item) => {
      if (category !== 'ALL' && item.category !== category) return false;
      if (!q) return true;
      return (
        item.term.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.examCue.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  if (!open) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="glossary-modal-title"
      onClick={onClose}
    >
      <div className="modal-box glossary-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
            <BookMarked size={20} style={{ color: 'var(--fox-600)', flexShrink: 0 }} aria-hidden="true" />
            <h3 id="glossary-modal-title">Kamus Istilah &amp; Pegangan Cepat UTBK PPG</h3>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-ghost"
            aria-label="Tutup kamus istilah"
            onClick={onClose}
          >
            Tutup
          </button>
        </div>

        <p style={{ marginTop: 0, fontSize: '0.88rem', color: 'var(--ink-600)' }}>
          Ringkasan cepat tokoh, model belajar, asesmen, KSE/SEL, filosofi Ki Hadjar Dewantara,
          serta kata kunci memilih jawaban bergaya LMS PPG.
        </p>

        <div className="glossary-controls">
          <div className="glossary-search-wrap">
            <Search size={16} className="glossary-search-icon" aria-hidden="true" />
            <input
              type="search"
              className="glossary-search-input"
              aria-label="Cari istilah atau tokoh PPG"
              placeholder="Cari istilah, tokoh, atau kata kunci (misal: ZPD, TaRL, UbD, AfL, KHD)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div
            className="glossary-cat-row"
            role="tablist"
            aria-label="Saring kategori kamus istilah"
          >
            {GLOSSARY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={category === cat.id}
                className={`prodi-tab-pill ${category === cat.id ? 'is-active' : ''}`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="glossary-count-bar">
          <span>
            Menampilkan <strong>{filtered.length}</strong> dari {GLOSSARY_ITEMS.length} istilah inti
          </span>
          {onPractice && (
            <button type="button" className="btn btn-sm btn-primary" onClick={onPractice}>
              <SlidersHorizontal size={14} aria-hidden="true" />
              Latih di Studio Drill
            </button>
          )}
        </div>

        <div className="glossary-list">
          {filtered.length === 0 ? (
            <div className="glossary-empty">
              Tidak ditemukan istilah untuk kata kunci <strong>"{query}"</strong>. Coba kata seperti{' '}
              <code>TaRL</code>, <code>ZPD</code>, <code>UbD</code>, <code>AfL</code>, atau{' '}
              <code>Among</code>.
            </div>
          ) : (
            filtered.map((item) => (
              <article key={item.id} className="glossary-card">
                <div className="glossary-card-head">
                  <h4>{item.term}</h4>
                  <span className="kisi-tag">{item.tag}</span>
                </div>
                <p className="glossary-card-summary">{item.summary}</p>
                <div className="glossary-cue">
                  <strong>Kata kunci soal:</strong> {item.examCue}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
