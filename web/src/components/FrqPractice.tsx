import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getFrqSetBySubjectName, loadReleasedFrqSet } from '../data/frq'
import type { FrqPrompt, FrqRubricRow, ReleasedFrqQuestion, ReleasedFrqSet } from '../data/frq'
import { gradeFrq, type FrqGrade } from '../services/api'
import { useAuth } from '../context/AuthContext'

// ── small shared pieces ────────────────────────────────────────────────────────────────────────

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      className={className || 'w-5 h-5'}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  )
}

const ICON = {
  back: 'M15 19l-7-7 7-7',
  external: 'M14 4h6v6m0-6L10 14M19 13v6a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h6',
  play: 'M8 5.5v13l11-6.5-11-6.5z',
  pause: 'M9 5v14m6-14v14',
  check: 'M5 13l4 4L19 7',
  arrowUp: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  lock: 'M7 11V8a5 5 0 0110 0v3M6 11h12v9H6z',
}

function fmtTime(total: number): string {
  const m = Math.floor(Math.abs(total) / 60)
  const s = Math.abs(total) % 60
  return `${total < 0 ? '-' : ''}${m}:${s.toString().padStart(2, '0')}`
}

/** Browser storage is a per-viewer convenience only — every access may throw or come back empty. */
const store = {
  get<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(key)
      return raw ? (JSON.parse(raw) as T) : null
    } catch {
      return null
    }
  },
  set(key: string, value: unknown) {
    try {
      if (value === null || value === '') localStorage.removeItem(key)
      else localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* storage unavailable — drafts just won't persist */
    }
  },
}

type LastScore = { earned: number; possible: number }
const draftKey = (id: string) => `frq-draft:${id}`
const scoreKey = (id: string) => `frq-score:${id}`

/**
 * The answer-sheet point column: one box per point. Before grading they're empty; after, the earned
 * points fill in. Long rubrics (Seminar's 6-point rows) collapse to a number past 12 boxes.
 */
function PointBoxes({
  max,
  earned,
  size = 'md',
}: {
  max: number
  earned?: number
  size?: 'sm' | 'md'
}) {
  if (max > 12) {
    return (
      <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--text-muted)' }}>
        {earned !== undefined ? `${earned}/${max}` : `${max} pts`}
      </span>
    )
  }
  const dim = size === 'sm' ? 'w-2 h-2' : 'w-3 h-3'
  return (
    <span
      className="inline-flex gap-[3px]"
      aria-label={earned !== undefined ? `${earned} of ${max} points` : `${max} points`}
    >
      {Array.from({ length: max }, (_, i) => {
        const filled = earned !== undefined && i < earned
        return (
          <span
            key={i}
            className={`${dim} rounded-[2px] transition-colors duration-300`}
            style={{
              transitionDelay: `${i * 40}ms`,
              backgroundColor: filled ? 'var(--accent)' : 'transparent',
              boxShadow: filled
                ? 'none'
                : 'inset 0 0 0 1.5px color-mix(in srgb, var(--text-muted) 45%, transparent)',
            }}
          />
        )
      })}
    </span>
  )
}

// ── entry point ────────────────────────────────────────────────────────────────────────────────

export default function FrqPractice({ subjectName }: { subjectName: string }) {
  const [released, setReleased] = useState<ReleasedFrqSet | null | undefined>(undefined)

  useEffect(() => {
    let live = true
    setReleased(undefined)
    loadReleasedFrqSet(subjectName)
      .then((s) => live && setReleased(s ?? null))
      .catch(() => live && setReleased(null))
    return () => {
      live = false
    }
  }, [subjectName])

  if (released === undefined) {
    return (
      <div className="py-16 text-center text-sm" style={{ color: 'var(--text-muted)' }}>
        <span className="testy-dots">Loading questions</span>
      </div>
    )
  }
  if (released) return <ReleasedFrq set={released} />
  return <LegacyFrq subjectName={subjectName} />
}

// ── released exam questions ────────────────────────────────────────────────────────────────────

function ReleasedFrq({ set }: { set: ReleasedFrqSet }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const selected = set.questions.find((q) => q.id === searchParams.get('p')) ?? null

  const update = (patch: Record<string, string | null>) => {
    const next = new URLSearchParams(searchParams)
    for (const [k, v] of Object.entries(patch)) {
      if (v) next.set(k, v)
      else next.delete(k)
    }
    setSearchParams(next)
  }

  if (selected) {
    return (
      <ReleasedWorkspace
        key={selected.id}
        subjectName={set.subjectName}
        year={set.year}
        question={selected}
        onBack={() => update({ p: null })}
      />
    )
  }
  return (
    <ReleasedBrowser
      set={set}
      activeSet={Number(searchParams.get('set')) || null}
      onSet={(n) => update({ set: String(n) })}
      onOpen={(id) => update({ p: id })}
    />
  )
}

function ReleasedBrowser({
  set,
  activeSet,
  onSet,
  onOpen,
}: {
  set: ReleasedFrqSet
  activeSet: number | null
  onSet: (n: number) => void
  onOpen: (id: string) => void
}) {
  const setNumbers = useMemo(
    () =>
      [...new Set(set.questions.map((q) => q.set).filter((n): n is number => n !== null))].sort(),
    [set]
  )
  const current = setNumbers.length
    ? activeSet && setNumbers.includes(activeSet)
      ? activeSet
      : setNumbers[0]
    : null
  const questions = set.questions.filter((q) => current === null || q.set === current)

  // Group consecutive questions by exam section, keeping booklet order.
  const groups: { section: string | null; items: ReleasedFrqQuestion[] }[] = []
  for (const q of questions) {
    const last = groups[groups.length - 1]
    if (last && last.section === q.section) last.items.push(q)
    else groups.push({ section: q.section, items: [q] })
  }

  return (
    <div>
      <header className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 mb-6">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-bold leading-tight">
            The {set.year} free-response exam
          </h2>
          <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            The actual questions from the {set.year} {set.subjectName} exam, as printed in the
            booklet. Answer one, and it’s graded against that question’s official scoring guideline
            and the scored student samples the College Board released with it.
          </p>
        </div>

        {setNumbers.length > 1 && (
          <div
            role="tablist"
            aria-label="Exam form"
            className="inline-flex p-1 gap-1"
            style={{
              backgroundColor: 'var(--surface)',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--hairline)',
            }}
          >
            {setNumbers.map((n) => {
              const on = n === current
              return (
                <button
                  key={n}
                  role="tab"
                  aria-selected={on}
                  onClick={() => onSet(n)}
                  className="px-4 py-1.5 text-sm font-semibold cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2"
                  style={
                    {
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: on ? 'var(--text)' : 'transparent',
                      color: on ? 'var(--bg)' : 'var(--text-muted)',
                      ['--tw-ring-color' as string]: 'var(--accent)',
                    } as React.CSSProperties
                  }
                >
                  Set {n}
                </button>
              )
            })}
          </div>
        )}
      </header>

      <div
        className="overflow-hidden"
        style={{
          backgroundColor: 'var(--surface-elevated)',
          border: '1px solid var(--hairline)',
          borderRadius: 'var(--radius-card)',
        }}
      >
        <div
          className="flex flex-wrap justify-between gap-2 px-5 sm:px-6 py-3 text-xs"
          style={{ borderBottom: '1px solid var(--hairline)', color: 'var(--text-muted)' }}
        >
          <span>
            {questions.length} questions{current !== null ? ` in set ${current}` : ''}
          </span>
          <span>Each one is graded on its own, so do them in any order</span>
        </div>

        {groups.map((g, gi) => (
          <div key={gi}>
            {g.section && (
              <div
                className="px-5 sm:px-6 pt-5 pb-1 text-sm font-semibold"
                style={{
                  color: 'var(--text-muted)',
                  borderTop: gi > 0 ? '1px solid var(--hairline)' : undefined,
                }}
              >
                {g.section}
              </div>
            )}
            <ul>
              {g.items.map((q, i) => (
                <QuestionRow
                  key={q.id}
                  q={q}
                  first={i === 0 && !g.section && gi === 0}
                  onOpen={() => onOpen(q.id)}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p
        className="text-xs mt-4 leading-relaxed max-w-prose"
        style={{ color: 'var(--text-muted)' }}
      >
        Questions, scoring guidelines, and student samples are from AP Central, © {set.year}{' '}
        College Board. AI grades are practice feedback, not official scores.
      </p>
    </div>
  )
}

function QuestionRow({
  q,
  first,
  onOpen,
}: {
  q: ReleasedFrqQuestion
  first: boolean
  onOpen: () => void
}) {
  const last = store.get<LastScore>(scoreKey(q.id))
  const hasDraft = !!store.get<string>(draftKey(q.id))
  return (
    <li style={{ borderTop: first ? undefined : '1px solid var(--hairline)' }}>
      <button
        onClick={onOpen}
        className="group w-full text-left grid grid-cols-[4.25rem_1fr] sm:grid-cols-[5rem_1fr_auto] gap-x-4 gap-y-2 px-5 sm:px-6 py-4 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset"
        style={{ ['--tw-ring-color' as string]: 'var(--accent)' } as React.CSSProperties}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--surface)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
      >
        <span className="font-display text-lg font-bold leading-6 tabular-nums">{q.label}</span>

        <span className="min-w-0">
          <span className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-sm font-semibold group-hover:underline underline-offset-2">
              {q.essayType}
            </span>
            {q.topic && (
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {q.topic}
              </span>
            )}
          </span>
          {q.teaser && (
            <span
              className="block text-sm mt-1 leading-relaxed line-clamp-2"
              style={{ color: 'var(--text-muted)' }}
            >
              {q.teaser}
            </span>
          )}
        </span>

        <span className="col-start-2 sm:col-start-3 sm:row-start-1 flex sm:flex-col items-center sm:items-end gap-x-4 gap-y-1.5 sm:pt-1">
          <PointBoxes
            max={q.totalPoints}
            earned={last?.possible === q.totalPoints ? last.earned : undefined}
            size="sm"
          />
          <span
            className="text-xs tabular-nums whitespace-nowrap"
            style={{ color: 'var(--text-muted)' }}
          >
            {last
              ? `Last score ${last.earned}/${last.possible}`
              : hasDraft
                ? 'Draft saved'
                : `${q.totalPoints} pts, ${q.suggestedMinutes} min`}
          </span>
        </span>
      </button>
    </li>
  )
}

type Tab = 'answer' | 'guide' | 'samples'

function ReleasedWorkspace({
  subjectName,
  year,
  question: q,
  onBack,
}: {
  subjectName: string
  year: number
  question: ReleasedFrqQuestion
  onBack: () => void
}) {
  const { isAuthenticated } = useAuth()
  const [tab, setTab] = useState<Tab>('answer')
  const [response, setResponse] = useState(() => store.get<string>(draftKey(q.id)) ?? '')
  const [grading, setGrading] = useState(false)
  const [grade, setGrade] = useState<FrqGrade | null>(null)
  const [error, setError] = useState<string | null>(null)
  // The scoring guide is an answer key — keep it closed until the student has tried the question.
  const [revealed, setRevealed] = useState(() => !!store.get<LastScore>(scoreKey(q.id)))
  const timer = useCountdown(q.suggestedMinutes)
  const isCode = subjectName === 'AP Computer Science A'
  const maxChars = 14000
  const wordCount = response.trim() ? response.trim().split(/\s+/).length : 0

  useEffect(() => {
    const t = setTimeout(() => store.set(draftKey(q.id), response), 400)
    return () => clearTimeout(t)
  }, [q.id, response])

  const submit = async () => {
    if (!response.trim()) return
    setError(null)
    setGrading(true)
    timer.pause()
    try {
      const { grade: g } = await gradeFrq({
        subjectName,
        essayType: q.essayType,
        promptId: q.id,
        promptText: q.promptText,
        sourceText: q.sourceText ?? undefined,
        scoringGuide: q.scoringGuide,
        rubric: q.rubric,
        studentResponse: response,
      })
      setGrade(g)
      setRevealed(true)
      store.set(scoreKey(q.id), { earned: g.earned, possible: g.possible })
      setTab('answer')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Grading failed. Try again in a moment.')
    } finally {
      setGrading(false)
    }
  }

  const rowScores = grade ? new Map(grade.rows.map((r) => [r.name, r.earned])) : null
  const setLabel = q.set ? `Set ${q.set}, ` : ''

  return (
    // Break out of the page's reading column: the booklet and the answer sheet need the width.
    <div className="lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:w-[min(calc(100vw-3rem),88rem)]">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm font-medium cursor-pointer hover:opacity-70 transition-opacity rounded focus-visible:outline-none focus-visible:ring-2"
          style={
            {
              color: 'var(--text-muted)',
              ['--tw-ring-color' as string]: 'var(--accent)',
            } as React.CSSProperties
          }
        >
          <Icon path={ICON.back} className="w-4 h-4" />
          All questions
        </button>
        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {year} exam, {setLabel}
          {q.section ?? 'free response'}
        </span>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] items-start">
        {/* The booklet */}
        <section
          aria-label="Question booklet"
          className="lg:sticky lg:top-20 overflow-hidden flex flex-col"
          style={{
            border: '1px solid var(--hairline)',
            borderRadius: 'var(--radius-card)',
            backgroundColor: 'var(--surface)',
          }}
        >
          <div
            className="flex items-center justify-between gap-3 px-4 py-3"
            style={{ borderBottom: '1px solid var(--hairline)' }}
          >
            <div className="min-w-0">
              <h2 className="font-display text-xl font-bold leading-tight">
                {q.label} <span style={{ color: 'var(--text-muted)' }}>{q.essayType}</span>
              </h2>
              {q.topic && (
                <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-muted)' }}>
                  {q.topic}
                </p>
              )}
            </div>
            <a
              href={q.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 whitespace-nowrap hover:opacity-80 focus-visible:outline-none focus-visible:ring-2"
              style={
                {
                  border: '1px solid var(--hairline)',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--surface-elevated)',
                  ['--tw-ring-color' as string]: 'var(--accent)',
                } as React.CSSProperties
              }
            >
              Open PDF
              <Icon path={ICON.external} className="w-3.5 h-3.5" />
            </a>
          </div>
          <iframe
            src={`${q.pdfUrl}#view=FitH`}
            title={`${subjectName} ${year} ${q.label} question booklet`}
            className="w-full border-0 h-[70vh] lg:h-[calc(100vh-10.5rem)]"
            style={{ backgroundColor: 'color-mix(in srgb, var(--text) 6%, var(--surface))' }}
          />
        </section>

        {/* The answer sheet */}
        <section aria-label="Your answer" className="min-w-0">
          <div
            role="tablist"
            aria-label="Workspace"
            className="flex gap-1 mb-4"
            style={{ borderBottom: '1px solid var(--hairline)' }}
          >
            {(
              [
                ['answer', 'Your answer'],
                ['guide', 'Scoring guide'],
                ['samples', `Scored samples (${q.examples.length})`],
              ] as [Tab, string][]
            ).map(([id, label]) => {
              const on = tab === id
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setTab(id)}
                  className="relative px-3 py-2.5 text-sm font-semibold cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 rounded-t"
                  style={
                    {
                      color: on ? 'var(--text)' : 'var(--text-muted)',
                      ['--tw-ring-color' as string]: 'var(--accent)',
                    } as React.CSSProperties
                  }
                >
                  {label}
                  <span
                    className="absolute left-2 right-2 -bottom-px h-0.5 transition-opacity"
                    style={{ backgroundColor: 'var(--accent)', opacity: on ? 1 : 0 }}
                  />
                </button>
              )
            })}
          </div>

          {tab === 'answer' && (
            <div>
              {/* Rubric strip — the answer sheet's point column */}
              <ol
                className="mb-4 divide-y"
                style={
                  {
                    border: '1px solid var(--hairline)',
                    borderRadius: 'var(--radius-card)',
                    backgroundColor: 'var(--surface-elevated)',
                    ['--tw-divide-opacity' as string]: '1',
                    borderColor: 'var(--hairline)',
                  } as React.CSSProperties
                }
              >
                {q.rubric.map((r) => (
                  <li
                    key={r.name}
                    className="flex items-center justify-between gap-4 px-4 py-2.5"
                    style={{ borderColor: 'var(--hairline)' }}
                  >
                    <span className="text-sm min-w-0 truncate" title={r.name}>
                      {r.name}
                    </span>
                    <PointBoxes max={r.maxPoints} earned={rowScores?.get(r.name)} />
                  </li>
                ))}
                <li
                  className="flex items-center justify-between gap-4 px-4 py-2.5"
                  style={{ borderColor: 'var(--hairline)' }}
                >
                  <span className="text-sm font-semibold">Total</span>
                  <span className="font-display text-lg font-bold tabular-nums">
                    {grade ? grade.earned : '–'}
                    <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                      {' '}
                      / {q.totalPoints}
                    </span>
                  </span>
                </li>
              </ol>

              <div
                className="overflow-hidden"
                style={{
                  border: '1px solid var(--hairline)',
                  borderRadius: 'var(--radius-card)',
                  backgroundColor: 'var(--surface-elevated)',
                }}
              >
                <div
                  className="flex items-center justify-between gap-3 px-4 py-2"
                  style={{ borderBottom: '1px solid var(--hairline)' }}
                >
                  <TimerButton timer={timer} />
                  <span className="text-xs tabular-nums" style={{ color: 'var(--text-muted)' }}>
                    {wordCount} words
                    {response.length > maxChars * 0.9
                      ? `, ${maxChars - response.length} characters left`
                      : ''}
                  </span>
                </div>
                <textarea
                  value={response}
                  onChange={(e) => {
                    setResponse(e.target.value)
                    if (!timer.started) timer.start()
                  }}
                  maxLength={maxChars}
                  spellCheck={!isCode}
                  aria-label="Your response"
                  placeholder={
                    isCode
                      ? 'Write your Java here. Label each part, e.g. // Part (a)'
                      : q.rubric.length > 1 && q.rubric[0].name.startsWith('Part')
                        ? 'Answer every part, labeled as the booklet labels them (A, B, C…). Show your work.'
                        : 'Write your full response here.'
                  }
                  className={`w-full px-4 py-3.5 leading-relaxed resize-y focus:outline-none ${isCode ? 'font-mono text-[13px]' : 'text-[15px]'}`}
                  style={{
                    minHeight: '22rem',
                    backgroundColor: 'transparent',
                    color: 'var(--text)',
                  }}
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="mt-3 px-4 py-3 text-sm"
                  style={{
                    backgroundColor: 'var(--error-bg)',
                    color: 'var(--error-ink, var(--error))',
                    borderRadius: 'var(--radius-input)',
                  }}
                >
                  {error}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
                {isAuthenticated ? (
                  <button
                    onClick={submit}
                    disabled={grading || !response.trim()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold cursor-pointer transition-opacity disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={
                      {
                        backgroundColor: 'var(--accent)',
                        color: 'var(--accent-ink)',
                        borderRadius: 'var(--radius-btn)',
                        ['--tw-ring-color' as string]: 'var(--accent)',
                      } as React.CSSProperties
                    }
                  >
                    {grading ? (
                      <span className="testy-dots">Grading</span>
                    ) : grade ? (
                      'Grade my revision'
                    ) : (
                      'Grade my answer'
                    )}
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-semibold hover:opacity-90"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'var(--accent-ink)',
                      borderRadius: 'var(--radius-btn)',
                    }}
                  >
                    Sign in to get graded
                  </Link>
                )}
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {grade
                    ? 'Revise above and grade again to see what moves.'
                    : isAuthenticated
                      ? 'Your draft saves on this device as you type.'
                      : 'Grading is free with an account. Your draft saves on this device.'}
                </span>
              </div>

              {grade && <GradeResult grade={grade} onShowSamples={() => setTab('samples')} />}
            </div>
          )}

          {tab === 'guide' &&
            (revealed ? (
              <ScoringGuide question={q} />
            ) : (
              <AnswerKeyGate kind="scoring guide" onReveal={() => setRevealed(true)} />
            ))}

          {tab === 'samples' &&
            (revealed ? (
              <ScoredSamples question={q} yourScore={grade?.earned} />
            ) : (
              <AnswerKeyGate kind="scored samples" onReveal={() => setRevealed(true)} />
            ))}
        </section>
      </div>
    </div>
  )
}

function AnswerKeyGate({ kind, onReveal }: { kind: string; onReveal: () => void }) {
  return (
    <div
      className="px-6 py-10 text-center"
      style={{ border: '1px dashed var(--hairline)', borderRadius: 'var(--radius-card)' }}
    >
      <Icon path={ICON.lock} className="w-6 h-6 mx-auto mb-3 opacity-60" />
      <h3 className="font-display text-lg font-bold">Try the question first</h3>
      <p
        className="text-sm mt-1.5 max-w-sm mx-auto leading-relaxed"
        style={{ color: 'var(--text-muted)' }}
      >
        The {kind} gives away the answer key. It opens on its own after your first grade.
      </p>
      <button
        onClick={onReveal}
        className="mt-4 text-sm font-semibold underline underline-offset-4 cursor-pointer hover:opacity-70"
        style={{ color: 'var(--text)' }}
      >
        Show it anyway
      </button>
    </div>
  )
}

function ScoringGuide({ question: q }: { question: ReleasedFrqQuestion }) {
  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        A summary of the official {q.totalPoints}-point scoring guideline. This is what the grader
        holds your answer to.
      </p>
      <div
        className="px-5 py-4 text-sm leading-relaxed whitespace-pre-line"
        style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-card)' }}
      >
        {q.scoringGuide}
      </div>
      <dl
        className="divide-y"
        style={{
          borderTop: '1px solid var(--hairline)',
          borderBottom: '1px solid var(--hairline)',
        }}
      >
        {q.rubric.map((r) => (
          <div
            key={r.name}
            className="grid sm:grid-cols-[12rem_1fr] gap-x-4 gap-y-1 py-3"
            style={{ borderColor: 'var(--hairline)' }}
          >
            <dt className="text-sm font-semibold">
              {r.name}
              <span className="block mt-1">
                <PointBoxes max={r.maxPoints} size="sm" />
              </span>
            </dt>
            <dd className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {r.criteria}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function ScoredSamples({
  question: q,
  yourScore,
}: {
  question: ReleasedFrqQuestion
  yourScore?: number
}) {
  return (
    <div>
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
        Real student responses to this question, and why readers gave each one its score
        {yourScore !== undefined ? `. You scored ${yourScore}/${q.totalPoints}.` : '.'}
      </p>
      <ol className="space-y-3">
        {q.examples.map((ex) => {
          const pts = Number(ex.score)
          const isNum = Number.isFinite(pts)
          return (
            <li
              key={ex.refId}
              className="px-5 py-4"
              style={{
                border: '1px solid var(--hairline)',
                borderRadius: 'var(--radius-card)',
                backgroundColor: 'var(--surface-elevated)',
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="text-sm font-bold">{ex.label}</h4>
                <span className="flex items-center gap-2.5">
                  {isNum && pts <= q.totalPoints && (
                    <PointBoxes max={q.totalPoints} earned={pts} size="sm" />
                  )}
                  <span className="text-sm font-semibold tabular-nums">
                    {ex.score}
                    {isNum ? `/${q.totalPoints}` : ''}
                  </span>
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {ex.summary}
              </p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

// ── timer ──────────────────────────────────────────────────────────────────────────────────────

function useCountdown(minutes: number) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60)
  const [running, setRunning] = useState(false)
  const [started, setStarted] = useState(false)
  const tick = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!running) return
    tick.current = setInterval(() => setSecondsLeft((s) => s - 1), 1000)
    return () => {
      if (tick.current) clearInterval(tick.current)
    }
  }, [running])

  return {
    secondsLeft,
    running,
    started,
    start: () => {
      setStarted(true)
      setRunning(true)
    },
    pause: () => setRunning(false),
    toggle: () => {
      setStarted(true)
      setRunning((r) => !r)
    },
  }
}

function TimerButton({ timer }: { timer: ReturnType<typeof useCountdown> }) {
  const low = timer.secondsLeft <= 300 && timer.secondsLeft > 0
  const over = timer.secondsLeft <= 0
  return (
    <button
      onClick={timer.toggle}
      className="inline-flex items-center gap-1.5 text-sm font-semibold tabular-nums cursor-pointer rounded px-1.5 py-1 -ml-1.5 focus-visible:outline-none focus-visible:ring-2"
      style={
        {
          color: over ? 'var(--error)' : low ? 'var(--warning)' : 'var(--text)',
          ['--tw-ring-color' as string]: 'var(--accent)',
        } as React.CSSProperties
      }
      aria-label={timer.running ? 'Pause timer' : 'Start timer'}
    >
      <Icon path={timer.running ? ICON.pause : ICON.play} className="w-3.5 h-3.5" />
      {over ? `Over by ${fmtTime(-timer.secondsLeft)}` : fmtTime(timer.secondsLeft)}
      {!timer.started && (
        <span className="font-normal" style={{ color: 'var(--text-muted)' }}>
          suggested
        </span>
      )}
    </button>
  )
}

// ── grade result ───────────────────────────────────────────────────────────────────────────────

function GradeResult({ grade, onShowSamples }: { grade: FrqGrade; onShowSamples?: () => void }) {
  return (
    <div
      className="mt-8 pt-6"
      style={{ borderTop: '1px solid var(--hairline)' }}
      aria-live="polite"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
        <h3 className="font-display text-2xl font-bold">
          {grade.earned}
          <span style={{ color: 'var(--text-muted)' }}> / {grade.possible}</span>
        </h3>
        {onShowSamples && (
          <button
            onClick={onShowSamples}
            className="text-sm font-semibold underline underline-offset-4 cursor-pointer hover:opacity-70"
          >
            Compare with the scored samples
          </button>
        )}
      </div>

      <ol className="space-y-4 mb-6">
        {grade.rows.map((row) => (
          <li key={row.name}>
            <div className="flex items-center justify-between gap-3 mb-1">
              <h4 className="text-sm font-bold">{row.name}</h4>
              <span className="flex items-center gap-2 text-sm font-semibold tabular-nums">
                <PointBoxes max={row.max} earned={row.earned} size="sm" />
                {row.earned}/{row.max}
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {row.justification}
            </p>
            {grade.groundingApplied && row.grounded === false && (
              <p className="mt-1 text-xs font-semibold" style={{ color: 'var(--error)' }}>
                Not tied to a specific rubric clause. Read this one with caution.
              </p>
            )}
          </li>
        ))}
      </ol>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <FeedbackList
          title="What earned points"
          items={grade.strengths}
          iconPath={ICON.check}
          accent="var(--success)"
        />
        <FeedbackList
          title="Fix these first"
          items={grade.improvements}
          iconPath={ICON.arrowUp}
          accent="var(--accent)"
        />
      </div>

      {grade.overallFeedback && (
        <p className="text-sm leading-relaxed mb-4">{grade.overallFeedback}</p>
      )}

      <p
        className="text-xs leading-relaxed pl-3"
        style={{ color: 'var(--text-muted)', borderLeft: '3px solid var(--warning)' }}
      >
        {grade.strictnessNote}
        {grade.groundingNote ? ` ${grade.groundingNote}` : ''}
      </p>
    </div>
  )
}

function FeedbackList({
  title,
  items,
  iconPath,
  accent,
}: {
  title: string
  items: string[]
  iconPath: string
  accent: string
}) {
  if (!items || items.length === 0) return null
  return (
    <div>
      <h4 className="text-sm font-bold mb-2.5">{title}</h4>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
            <span className="flex-shrink-0 mt-0.5" style={{ color: accent }}>
              <Icon path={iconPath} className="w-4 h-4" />
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── hand-written prompts (subjects without a released booklet) ─────────────────────────────────

function LegacyFrq({ subjectName }: { subjectName: string }) {
  const set = useMemo(() => getFrqSetBySubjectName(subjectName), [subjectName])
  const [searchParams, setSearchParams] = useSearchParams()
  const selected = set?.prompts.find((p) => p.id === searchParams.get('p')) ?? null

  const setSelectedId = (id: string | null) => {
    const next = new URLSearchParams(searchParams)
    if (id) next.set('p', id)
    else next.delete('p')
    setSearchParams(next)
  }

  if (!set || set.prompts.length === 0) {
    return (
      <div
        className="text-center py-16"
        style={{ border: '1px solid var(--hairline)', borderRadius: 'var(--radius-card)' }}
      >
        <h3 className="font-display text-xl font-bold mb-2">No free-response practice yet</h3>
        <p className="max-w-md mx-auto text-sm" style={{ color: 'var(--text-muted)' }}>
          {subjectName} doesn’t have free-response questions here yet.
        </p>
      </div>
    )
  }

  if (selected) {
    return (
      <LegacyWorkspace
        key={selected.id}
        subjectName={subjectName}
        prompt={selected}
        onBack={() => setSelectedId(null)}
      />
    )
  }

  return (
    <div>
      <h2 className="font-display text-2xl font-bold">Free-response practice</h2>
      <p
        className="text-sm mt-2 mb-6 max-w-prose leading-relaxed"
        style={{ color: 'var(--text-muted)' }}
      >
        {set.note}
      </p>
      <ul
        style={{
          border: '1px solid var(--hairline)',
          borderRadius: 'var(--radius-card)',
          backgroundColor: 'var(--surface-elevated)',
        }}
      >
        {set.prompts.map((p, i) => {
          const total = p.rubric.reduce((n, r) => n + r.maxPoints, 0)
          return (
            <li key={p.id} style={{ borderTop: i ? '1px solid var(--hairline)' : undefined }}>
              <button
                onClick={() => setSelectedId(p.id)}
                className="group w-full text-left flex items-center justify-between gap-4 px-5 sm:px-6 py-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset"
                style={{ ['--tw-ring-color' as string]: 'var(--accent)' } as React.CSSProperties}
              >
                <span>
                  <span className="block text-sm font-semibold group-hover:underline underline-offset-2">
                    {p.essayType}
                  </span>
                  <span className="block text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {p.title}
                  </span>
                </span>
                <span className="text-xs whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
                  {total} pts, {p.longForm ? 'holistic' : `${p.suggestedMinutes} min`}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function LegacyWorkspace({
  subjectName,
  prompt,
  onBack,
}: {
  subjectName: string
  prompt: FrqPrompt
  onBack: () => void
}) {
  const { isAuthenticated } = useAuth()
  const [response, setResponse] = useState('')
  const [grading, setGrading] = useState(false)
  const [grade, setGrade] = useState<FrqGrade | null>(null)
  const [error, setError] = useState<string | null>(null)
  const timer = useCountdown(prompt.suggestedMinutes)
  const longForm = !!prompt.longForm
  const maxChars = longForm ? 60000 : 14000

  const submit = async () => {
    if (!response.trim()) return
    setError(null)
    setGrading(true)
    timer.pause()
    try {
      const { grade: g } = await gradeFrq({
        subjectName,
        essayType: prompt.essayType,
        promptText: prompt.directions,
        sourceText: prompt.sourceText,
        rubric: prompt.rubric,
        studentResponse: response,
      })
      setGrade(g)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Grading failed. Try again in a moment.')
    } finally {
      setGrading(false)
    }
  }

  return (
    <div>
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm font-medium mb-5 cursor-pointer hover:opacity-70"
        style={{ color: 'var(--text-muted)' }}
      >
        <Icon path={ICON.back} className="w-4 h-4" />
        All prompts
      </button>
      <h2 className="font-display text-2xl font-bold">{prompt.title}</h2>
      <p className="text-sm mt-1 mb-4" style={{ color: 'var(--text-muted)' }}>
        {prompt.essayType}
      </p>
      <p className="text-[15px] leading-relaxed whitespace-pre-line mb-4 max-w-prose">
        {prompt.directions}
      </p>
      {prompt.sourceText && (
        <details
          className="mb-4 px-5 py-3"
          style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-card)' }}
          open
        >
          <summary className="cursor-pointer text-sm font-semibold">Source</summary>
          <p className="text-sm leading-relaxed whitespace-pre-line mt-2">{prompt.sourceText}</p>
        </details>
      )}
      <RubricList rows={prompt.rubric} />
      <div
        className="overflow-hidden mt-4"
        style={{
          border: '1px solid var(--hairline)',
          borderRadius: 'var(--radius-card)',
          backgroundColor: 'var(--surface-elevated)',
        }}
      >
        {!longForm && (
          <div className="px-4 py-2" style={{ borderBottom: '1px solid var(--hairline)' }}>
            <TimerButton timer={timer} />
          </div>
        )}
        <textarea
          value={response}
          onChange={(e) => {
            setResponse(e.target.value)
            if (!longForm && !timer.started) timer.start()
          }}
          maxLength={maxChars}
          aria-label="Your response"
          placeholder={
            longForm ? 'Paste your full academic paper here.' : 'Write your full response here.'
          }
          className="w-full px-4 py-3.5 text-[15px] leading-relaxed resize-y focus:outline-none"
          style={{ minHeight: '20rem', backgroundColor: 'transparent', color: 'var(--text)' }}
        />
      </div>
      {error && (
        <p
          role="alert"
          className="mt-3 px-4 py-3 text-sm"
          style={{
            backgroundColor: 'var(--error-bg)',
            color: 'var(--error-ink, var(--error))',
            borderRadius: 'var(--radius-input)',
          }}
        >
          {error}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-3 mt-4">
        {isAuthenticated ? (
          <button
            onClick={submit}
            disabled={grading || !response.trim()}
            className="px-5 py-2.5 text-sm font-semibold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--accent-ink)',
              borderRadius: 'var(--radius-btn)',
            }}
          >
            {grading ? (
              <span className="testy-dots">Grading</span>
            ) : longForm ? (
              'Grade my paper'
            ) : (
              'Grade my answer'
            )}
          </button>
        ) : (
          <Link
            to="/login"
            className="px-5 py-2.5 text-sm font-semibold"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--accent-ink)',
              borderRadius: 'var(--radius-btn)',
            }}
          >
            Sign in to get graded
          </Link>
        )}
      </div>
      {grade && <GradeResult grade={grade} />}
    </div>
  )
}

function RubricList({ rows }: { rows: FrqRubricRow[] }) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {rows.map((r) => (
        <li
          key={r.name}
          className="flex items-center gap-2 text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          {r.name.replace(/^Row [A-Z] — /, '')}
          <PointBoxes max={r.maxPoints} size="sm" />
        </li>
      ))}
    </ul>
  )
}
