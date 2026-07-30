import { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AP_EXAM_DATA } from '../data/apExamData'
import type { APExamInfo } from '../data/apExamData'

export default function ExamInfoPage() {
  const { examSlug } = useParams<{ examSlug: string }>()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedSlug, setSelectedSlug] = useState('')

  const activeExam = useMemo(
    () => AP_EXAM_DATA.find((e) => e.slug === selectedSlug) ?? null,
    [selectedSlug]
  )

  const currentIndex = activeExam
    ? AP_EXAM_DATA.findIndex((e) => e.slug === activeExam.slug)
    : -1

  const goToExam = (index: number) => {
    const exam = AP_EXAM_DATA[index]
    if (exam) setSelectedSlug(exam.slug)
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--text-muted)' }}>
            Scoring &amp; Structure
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-none tracking-tight">
            AP Exam Info
          </h1>
          <p className="mt-3 max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Scoring guidelines, section breakdowns, and exam structure for every AP exam.
          </p>
        </div>
        <button
          onClick={() => navigate(examSlug ? `/${examSlug}/hub` : '/')}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer border transition-colors flex-shrink-0"
          style={{ color: 'var(--text)', backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Hub
        </button>
      </div>

      {/* Exam selector card */}
      <div className="rounded-2xl shadow-sm border mb-8" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}>
        <div className="rounded-t-2xl px-6 py-5 flex items-center justify-between gap-4 flex-wrap" style={{ backgroundColor: 'var(--accent)' }}>
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] mb-1" style={{ color: 'var(--accent-ink)', opacity: 0.7 }}>
              Select exam
            </div>
            <h2 className="font-display text-xl font-bold leading-tight truncate" style={{ color: 'var(--accent-ink)' }}>
              {activeExam?.label ?? 'Choose an AP exam'}
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => goToExam(currentIndex - 1)}
              disabled={currentIndex <= 0}
              aria-label="Previous exam"
              className="w-9 h-9 rounded-lg flex items-center justify-center border disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity hover:opacity-80"
              style={{ borderColor: 'color-mix(in srgb, var(--accent-ink) 30%, transparent)', color: 'var(--accent-ink)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="relative">
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="flex items-center gap-2 px-3 h-9 rounded-lg text-sm font-semibold border cursor-pointer transition-opacity hover:opacity-80 max-w-[200px] sm:max-w-[280px]"
                style={{ borderColor: 'color-mix(in srgb, var(--accent-ink) 30%, transparent)', color: 'var(--accent-ink)' }}
              >
                <span className="truncate">{activeExam?.label ?? 'Browse exams'}</span>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {menuOpen && (
                <>
                  <button
                    aria-label="Close menu"
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 z-10 cursor-default"
                  />
                  <div
                    className="absolute right-0 mt-2 w-80 max-w-[85vw] max-h-80 overflow-y-auto rounded-xl border shadow-lg z-20 py-1"
                    style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
                  >
                    {AP_EXAM_DATA.map((exam, idx) => {
                      const isActive = activeExam?.slug === exam.slug
                      return (
                        <button
                          key={exam.slug}
                          onClick={() => { setSelectedSlug(exam.slug); setMenuOpen(false) }}
                          className="w-full text-left px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center gap-2.5"
                          style={{
                            color: 'var(--text)',
                            fontWeight: isActive ? 700 : 400,
                            borderLeft: isActive ? '3px solid var(--accent)' : '3px solid transparent',
                          }}
                        >
                          <span className="text-xs font-semibold flex-shrink-0 w-5" style={{ color: 'var(--text-muted)' }}>{idx + 1}</span>
                          <span className="flex-1">{exam.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => goToExam(currentIndex + 1)}
              disabled={currentIndex >= AP_EXAM_DATA.length - 1 || currentIndex < 0}
              aria-label="Next exam"
              className="w-9 h-9 rounded-lg flex items-center justify-center border disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity hover:opacity-80"
              style={{ borderColor: 'color-mix(in srgb, var(--accent-ink) 30%, transparent)', color: 'var(--accent-ink)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {!activeExam && (
          <div className="p-8 text-center">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto"
              style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 16%, transparent)', color: 'var(--accent)' }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p style={{ color: 'var(--text-muted)' }}>
              Pick an exam from the menu above to view scoring and structure details.
            </p>
          </div>
        )}
      </div>

      {/* Exam rubric */}
      {activeExam && (
        <ExamRubric exam={activeExam} />
      )}
    </div>
  )
}

function ExamRubric({ exam }: { exam: APExamInfo }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {exam.sections.length} section{exam.sections.length !== 1 ? 's' : ''} · sourced from College Board
        </p>
        <a
          href={exam.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold underline cursor-pointer"
          style={{ color: 'var(--accent)' }}
        >
          View on College Board ↗
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {exam.sections.map((section, idx) => (
          <div
            key={idx}
            className="rounded-2xl shadow-sm overflow-hidden border flex flex-col"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <div className="px-6 py-4" style={{ backgroundColor: 'var(--accent)' }}>
              <h3 className="font-display text-lg font-bold" style={{ color: 'var(--accent-ink)' }}>
                {section.title}
              </h3>
            </div>

            <div className="grid grid-cols-3" style={{ borderBottom: '1px solid var(--hairline)' }}>
              <StatCell label="Questions" value={section.questionCount} />
              {section.time ? (
                <StatCell label="Time" value={section.time} bordered />
              ) : (
                <StatCell label="Time" value="—" bordered muted />
              )}
              <StatCell label="Weight" value={section.scoreWeight} bordered />
            </div>

            <div className="px-6 pt-4 pb-2">
              <div
                className="w-full rounded-full h-2"
                style={{ backgroundColor: 'color-mix(in srgb, var(--text) 12%, transparent)' }}
              >
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{ width: section.scoreWeight, backgroundColor: 'var(--accent)' }}
                />
              </div>
            </div>

            <div className="px-6 py-5 flex-1">
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--text-muted)' }}>
                Details
              </h4>
              <ul className="space-y-2.5">
                {section.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text)' }}>
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: 'var(--accent)' }}
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StatCell({
  label,
  value,
  bordered,
  muted,
}: {
  label: string
  value: string
  bordered?: boolean
  muted?: boolean
}) {
  return (
    <div
      className="px-3 py-3 text-center"
      style={bordered ? { borderLeft: '1px solid var(--hairline)' } : undefined}
    >
      <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
        {label}
      </div>
      <div
        className="text-sm font-bold mt-1 leading-snug"
        style={{ color: muted ? 'var(--text-muted)' : 'var(--text)' }}
      >
        {value}
      </div>
    </div>
  )
}
