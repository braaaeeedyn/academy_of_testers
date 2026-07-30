import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getFrqSetBySubjectName } from '../data/frq'
import type { FrqPrompt } from '../data/frq'
import { gradeFrq, type FrqGrade } from '../services/api'
import { useAuth } from '../context/AuthContext'

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
    >
      <path d={path} />
    </svg>
  )
}

function fmtTime(total: number): string {
  const m = Math.floor(Math.abs(total) / 60)
  const s = Math.abs(total) % 60
  return `${total < 0 ? '-' : ''}${m}:${s.toString().padStart(2, '0')}`
}

const ESSAY_TYPE_ICON: Record<string, string> = {
  'Rhetorical Analysis': 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
  Argument: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
  Synthesis: 'M4 5a1 1 0 011-1h5l2 2h7a1 1 0 011 1v3M3 8h18M3 8v10a1 1 0 001 1h16a1 1 0 001-1V8',
  'Long Essay (LEQ)': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
}

export default function FrqPractice({ subjectName }: { subjectName: string }) {
  const set = useMemo(() => getFrqSetBySubjectName(subjectName), [subjectName])
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedId = searchParams.get('p')

  const setSelectedId = (id: string | null) => {
    const next = new URLSearchParams(searchParams)
    if (id) next.set('p', id)
    else next.delete('p')
    setSearchParams(next)
  }

  const selected = useMemo(
    () => set?.prompts.find((p) => p.id === selectedId) ?? null,
    [set, selectedId]
  )

  if (!set || set.prompts.length === 0) {
    return (
      <div
        className="text-center py-16 rounded-2xl border"
        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
      >
        <h3 className="font-display text-xl font-bold mb-2">FRQ practice is coming soon</h3>
        <p className="max-w-md mx-auto text-sm" style={{ color: 'var(--text-muted)' }}>
          AI-graded free-response practice for {subjectName} is being prepared. Check back soon!
        </p>
      </div>
    )
  }

  if (selected) {
    return (
      <FrqWorkspace
        key={selected.id}
        subjectName={subjectName}
        prompt={selected}
        onBack={() => setSelectedId(null)}
      />
    )
  }

  return (
    <div>
      <div className="mb-5">
        <h2 className="font-display text-2xl font-bold">FRQ & Essay Practice</h2>
        <p className="text-sm mt-1 max-w-prose" style={{ color: 'var(--text-muted)' }}>
          Write a full response, then get it graded row-by-row against the official rubric — strictly,
          so you’re over-prepared for exam day.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {set.prompts.map((p) => {
          const total = p.rubric.reduce((n, r) => n + r.maxPoints, 0)
          return (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className="group flex flex-col p-5 rounded-2xl border text-left cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2"
              style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)', ['--tw-ring-color' as string]: 'var(--accent)' } as React.CSSProperties}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                >
                  <Icon path={ESSAY_TYPE_ICON[p.essayType] ?? ESSAY_TYPE_ICON['Long Essay (LEQ)']} className="w-5 h-5" />
                </div>
                <span
                  className="text-[11px] font-semibold px-2 py-1 rounded-full whitespace-nowrap"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--text) 8%, transparent)', color: 'var(--text-muted)' }}
                >
                  {total} pts · {p.suggestedMinutes} min
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold group-hover:underline">{p.essayType}</h3>
                <Icon path="M9 5l7 7-7 7" className="w-3.5 h-3.5 opacity-30 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {p.title}
              </p>
            </button>
          )
        })}
      </div>

      <p className="text-xs mt-5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        {set.note}
      </p>
    </div>
  )
}

function FrqWorkspace({
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

  const wordCount = response.trim() ? response.trim().split(/\s+/).length : 0

  // Countdown timer — auto-starts, pausable, keeps counting past 0 (never blocks submit).
  const [secondsLeft, setSecondsLeft] = useState(prompt.suggestedMinutes * 60)
  const [running, setRunning] = useState(true)
  const tick = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (running) {
      tick.current = setInterval(() => setSecondsLeft((s) => s - 1), 1000)
      return () => {
        if (tick.current) clearInterval(tick.current)
      }
    }
  }, [running])

  const submit = async () => {
    if (!response.trim()) return
    setError(null)
    setGrading(true)
    setRunning(false)
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
      // Bring the result into view on smaller screens.
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Grading failed. Please try again.')
    } finally {
      setGrading(false)
    }
  }

  const timerLow = secondsLeft <= 300 && secondsLeft > 0
  const timerOver = secondsLeft <= 0

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm font-medium mb-5 cursor-pointer hover:opacity-70 transition-opacity"
        style={{ color: 'var(--text-muted)' }}
      >
        <Icon path="M15 19l-7-7 7-7" className="w-4 h-4" />
        All FRQ prompts
      </button>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
        >
          {prompt.essayType}
        </span>
        {prompt.year && (
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {prompt.year}
          </span>
        )}
      </div>
      <h2 className="font-display text-2xl font-bold mb-4">{prompt.title}</h2>

      {/* Prompt directions */}
      <div
        className="rounded-2xl border p-5 mb-4"
        style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
      >
        <div className="text-xs font-semibold uppercase tracking-[0.16em] mb-2" style={{ color: 'var(--text-muted)' }}>
          Directions
        </div>
        <p className="text-sm leading-relaxed whitespace-pre-line">{prompt.directions}</p>
      </div>

      {/* Source / passage */}
      {prompt.sourceText && (
        <details
          className="rounded-2xl border mb-4 overflow-hidden"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          open
        >
          <summary className="cursor-pointer select-none px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--text-muted)' }}>
            Source / Passage
          </summary>
          <div className="px-5 pb-5">
            <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text)' }}>
              {prompt.sourceText}
            </p>
          </div>
        </details>
      )}

      {/* Rubric preview */}
      <div className="flex flex-wrap gap-2 mb-4">
        {prompt.rubric.map((r) => (
          <span
            key={r.name}
            className="text-[11px] font-medium px-2.5 py-1 rounded-full border"
            style={{ borderColor: 'var(--hairline)', color: 'var(--text-muted)' }}
          >
            {r.name.replace(/^Row [A-Z] — /, '')} · {r.maxPoints} pt{r.maxPoints === 1 ? '' : 's'}
          </span>
        ))}
      </div>

      {/* Result */}
      {grade && <GradeResult grade={grade} />}

      {/* Editor */}
      <div
        className="rounded-2xl border overflow-hidden"
        style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-2.5" style={{ borderBottom: '1px solid var(--hairline)' }}>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setRunning((r) => !r)}
              className="flex items-center gap-1.5 text-sm font-semibold tabular-nums cursor-pointer rounded-md px-2 py-1 transition-colors"
              style={{ color: timerOver ? 'var(--error)' : timerLow ? 'var(--warning)' : 'var(--text)' }}
              title={running ? 'Pause timer' : 'Resume timer'}
            >
              <Icon path={running ? 'M10 9v6m4-6v6' : 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'} className="w-4 h-4" />
              {timerOver ? `Time’s up (+${fmtTime(-secondsLeft)})` : fmtTime(secondsLeft)}
            </button>
          </div>
          <span className="text-xs tabular-nums" style={{ color: 'var(--text-muted)' }}>
            {wordCount} words
          </span>
        </div>
        <textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          maxLength={14000}
          placeholder="Write your full response here. Address every part of the prompt with specific evidence and reasoning."
          className="w-full px-4 py-3.5 text-sm leading-relaxed resize-y focus:outline-none"
          style={{ minHeight: '20rem', backgroundColor: 'transparent', color: 'var(--text)' }}
        />
      </div>

      {error && (
        <div
          className="mt-4 rounded-xl border px-4 py-3 text-sm"
          style={{ backgroundColor: 'var(--error-bg)', borderColor: 'var(--error)', color: 'var(--error-ink, var(--text))' }}
        >
          {error}
        </div>
      )}

      {!isAuthenticated && (
        <div
          className="mt-4 rounded-xl border px-4 py-3 text-sm flex items-center justify-between gap-3 flex-wrap"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text-muted)' }}
        >
          <span>Sign in to get your essay graded — AI feedback is a free account feature.</span>
          <Link
            to="/login"
            className="font-semibold underline whitespace-nowrap"
            style={{ color: 'var(--accent)' }}
          >
            Sign in
          </Link>
        </div>
      )}

      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={submit}
          disabled={grading || !response.trim() || !isAuthenticated}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-opacity disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
        >
          {grading ? (
            <>
              <span className="testy-dots">Grading strictly</span>
            </>
          ) : grade ? (
            'Re-grade my revision'
          ) : (
            'Grade my essay'
          )}
        </button>
        {grade && (
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Revise above and re-grade to see your score improve.
          </span>
        )}
      </div>
    </div>
  )
}

function scoreColor(earned: number, max: number): { bg: string; fg: string } {
  if (max === 0) return { bg: 'color-mix(in srgb, var(--text) 8%, transparent)', fg: 'var(--text-muted)' }
  if (earned >= max) return { bg: 'var(--success-bg)', fg: 'var(--success-ink, var(--success))' }
  if (earned === 0) return { bg: 'var(--error-bg)', fg: 'var(--error-ink, var(--error))' }
  return { bg: 'var(--warning-bg)', fg: 'var(--warning)' }
}

function GradeResult({ grade }: { grade: FrqGrade }) {
  const pct = grade.possible > 0 ? Math.round((grade.earned / grade.possible) * 100) : 0

  return (
    <div className="mb-6">
      {/* Score header */}
      <div
        className="rounded-2xl border p-5 mb-3"
        style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-4xl font-bold leading-none">{grade.earned}</span>
            <span className="text-lg" style={{ color: 'var(--text-muted)' }}>/ {grade.possible}</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold">Rubric score · {pct}%</div>
            <div
              className="w-full rounded-full h-2 mt-1.5"
              style={{ backgroundColor: 'color-mix(in srgb, var(--text) 12%, transparent)' }}
            >
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, backgroundColor: 'var(--accent)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Strictness disclaimer — prominent, as requested */}
      <div
        className="rounded-2xl border p-4 mb-3 flex gap-3"
        style={{ backgroundColor: 'var(--warning-bg)', borderColor: 'var(--warning)' }}
      >
        <Icon path="M12 9v2m0 4h.01M12 3l9 16H3L12 3z" className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
          {grade.strictnessNote}
        </p>
      </div>

      {/* Per-row breakdown */}
      <div className="space-y-2 mb-3">
        {grade.rows.map((row) => {
          const c = scoreColor(row.earned, row.max)
          return (
            <div
              key={row.name}
              className="rounded-xl border p-4"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
            >
              <div className="flex items-center justify-between gap-3 mb-1.5">
                <h4 className="text-sm font-bold">{row.name}</h4>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                  style={{ backgroundColor: c.bg, color: c.fg }}
                >
                  {row.earned} / {row.max}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {row.justification}
              </p>
            </div>
          )
        })}
      </div>

      {/* Strengths + improvements */}
      <div className="grid sm:grid-cols-2 gap-3 mb-3">
        <FeedbackList
          title="What worked"
          items={grade.strengths}
          iconPath="M5 13l4 4L19 7"
          accent="var(--success)"
        />
        <FeedbackList
          title="Fix these first"
          items={grade.improvements}
          iconPath="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          accent="var(--accent)"
        />
      </div>

      {grade.overallFeedback && (
        <div
          className="rounded-2xl border p-5"
          style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.16em] mb-2" style={{ color: 'var(--text-muted)' }}>
            Reader’s overall note
          </div>
          <p className="text-sm leading-relaxed">{grade.overallFeedback}</p>
        </div>
      )}
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
    <div
      className="rounded-2xl border p-5"
      style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
    >
      <div className="text-xs font-semibold uppercase tracking-[0.16em] mb-3" style={{ color: 'var(--text-muted)' }}>
        {title}
      </div>
      <ul className="space-y-2.5">
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
