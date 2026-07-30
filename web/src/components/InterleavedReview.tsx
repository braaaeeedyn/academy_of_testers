import { useMemo, useState } from 'react'
import { getMixedQuestions, shuffle, type MixQuestion } from '../data/questionBank'

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg className={className || 'w-5 h-5'} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  )
}

const LENGTHS = [10, 20, 40]

export default function InterleavedReview({ subjectName }: { subjectName: string }) {
  const pool = useMemo(() => getMixedQuestions(subjectName), [subjectName])
  const unitCount = useMemo(() => new Set(pool.map((q) => q.unit)).size, [pool])

  const [quiz, setQuiz] = useState<MixQuestion[] | null>(null)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<Record<string, boolean>>({})

  const start = (n: number) => {
    setQuiz(shuffle(pool).slice(0, Math.min(n, pool.length)))
    setCurrent(0)
    setSelected(null)
    setAnswers({})
  }

  if (pool.length === 0) {
    return (
      <div className="text-center py-16 rounded-2xl border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}>
        <h3 className="font-display text-xl font-bold mb-2">Mixed review is coming soon</h3>
        <p className="max-w-md mx-auto text-sm" style={{ color: 'var(--text-muted)' }}>
          There isn’t a question bank for {subjectName} yet. Check back soon!
        </p>
      </div>
    )
  }

  // Config screen
  if (!quiz) {
    return (
      <div>
        <h2 className="font-display text-2xl font-bold">Mixed Review</h2>
        <p className="text-sm mt-1 mb-6 max-w-prose" style={{ color: 'var(--text-muted)' }}>
          A cumulative quiz that <span className="font-semibold" style={{ color: 'var(--text)' }}>interleaves</span> questions
          from all {unitCount} units. Mixing topics like this is proven to build stronger long-term recall than drilling one
          unit at a time.
        </p>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] mb-3" style={{ color: 'var(--text-muted)' }}>
          How many questions?
        </div>
        <div className="flex flex-wrap gap-3">
          {LENGTHS.filter((n) => n <= pool.length || n === LENGTHS[0]).map((n) => (
            <button
              key={n}
              onClick={() => start(n)}
              className="flex-1 min-w-[7rem] p-5 rounded-2xl border text-left cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
            >
              <div className="font-display text-2xl font-bold">{Math.min(n, pool.length)}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>questions</div>
            </button>
          ))}
        </div>
        <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
          {pool.length} questions available across {unitCount} units.
        </p>
      </div>
    )
  }

  const q = quiz[current]
  const isLast = current === quiz.length - 1
  const answeredCount = Object.keys(answers).length
  const score = Object.values(answers).filter(Boolean).length

  // Results screen
  if (current >= quiz.length) {
    return <ReviewResults quiz={quiz} answers={answers} onRestart={() => setQuiz(null)} />
  }

  const choose = (idx: number) => {
    if (selected !== null) return
    setSelected(idx)
    setAnswers((a) => ({ ...a, [q.id]: idx === q.correctAnswer }))
  }

  const next = () => {
    setSelected(null)
    setCurrent((c) => c + 1)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => setQuiz(null)} className="flex items-center gap-1.5 text-sm font-medium cursor-pointer hover:opacity-70 transition-opacity" style={{ color: 'var(--text-muted)' }}>
          <Icon path="M15 19l-7-7 7-7" className="w-4 h-4" />
          End review
        </button>
        <div className="flex items-center gap-3">
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Score: {score}/{answeredCount}</span>
          <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}>
            {current + 1} / {quiz.length}
          </span>
        </div>
      </div>

      <div className="w-full rounded-full h-2 mb-6" style={{ backgroundColor: 'color-mix(in srgb, var(--text) 12%, transparent)' }}>
        <div className="h-2 rounded-full transition-all duration-300" style={{ width: `${((current + (selected !== null ? 1 : 0)) / quiz.length) * 100}%`, backgroundColor: 'var(--accent)' }} />
      </div>

      <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}>
        <div className="px-5 py-2.5" style={{ borderBottom: '1px solid var(--hairline)' }}>
          <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>{q.unit}</span>
        </div>
        <div className="p-5">
          <p className="text-base font-semibold mb-5">{q.question}</p>
          <div className="space-y-3">
            {q.options.map((option, idx) => {
              let cls = 'border rounded-lg p-4 cursor-pointer transition-all text-left w-full'
              let st: React.CSSProperties = { backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }
              if (selected !== null) {
                if (idx === q.correctAnswer) {
                  cls += ' ring-2'
                  st = { backgroundColor: 'var(--success-bg)', borderColor: 'var(--success)', ['--tw-ring-color' as string]: 'var(--success)' } as React.CSSProperties
                } else if (idx === selected) {
                  cls += ' ring-2'
                  st = { backgroundColor: 'var(--error-bg)', borderColor: 'var(--error)', ['--tw-ring-color' as string]: 'var(--error)' } as React.CSSProperties
                }
              } else {
                cls += ' hover:shadow-md'
              }
              return (
                <button key={idx} onClick={() => choose(idx)} className={cls} style={st} disabled={selected !== null}>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm">{option}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {selected !== null && (
            <div className="mt-5 p-4 rounded-lg border" style={{ backgroundColor: selected === q.correctAnswer ? 'var(--success-bg)' : 'var(--error-bg)', borderColor: selected === q.correctAnswer ? 'var(--success)' : 'var(--error)' }}>
              <span className="font-bold text-sm">
                {selected === q.correctAnswer ? 'Correct!' : `Incorrect — Answer: ${String.fromCharCode(65 + q.correctAnswer)}`}
              </span>
              <p className="text-sm mt-1" style={{ color: 'var(--text)' }}>{q.explanation}</p>
            </div>
          )}

          <div className="flex justify-end mt-6">
            <button
              onClick={next}
              disabled={selected === null}
              className="px-5 py-2 rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              {isLast ? 'See results' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReviewResults({
  quiz,
  answers,
  onRestart,
}: {
  quiz: MixQuestion[]
  answers: Record<string, boolean>
  onRestart: () => void
}) {
  const score = Object.values(answers).filter(Boolean).length
  const pct = Math.round((score / quiz.length) * 100)

  // Accuracy per unit — surfaces which units are weakest.
  const byUnit = useMemo(() => {
    const map = new Map<string, { correct: number; total: number }>()
    quiz.forEach((q) => {
      const rec = map.get(q.unit) ?? { correct: 0, total: 0 }
      rec.total += 1
      if (answers[q.id]) rec.correct += 1
      map.set(q.unit, rec)
    })
    return Array.from(map.entries())
      .map(([unit, r]) => ({ unit, ...r, pct: Math.round((r.correct / r.total) * 100) }))
      .sort((a, b) => a.pct - b.pct)
  }, [quiz, answers])

  return (
    <div>
      <div className="rounded-2xl border p-6 mb-4 text-center" style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] mb-2" style={{ color: 'var(--text-muted)' }}>Mixed review complete</div>
        <div className="font-display text-5xl font-bold leading-none">{score}<span className="text-2xl" style={{ color: 'var(--text-muted)' }}>/{quiz.length}</span></div>
        <div className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>{pct}% correct</div>
      </div>

      <div className="text-xs font-semibold uppercase tracking-[0.16em] mb-3" style={{ color: 'var(--text-muted)' }}>Accuracy by unit — start with the reds</div>
      <div className="space-y-2 mb-5">
        {byUnit.map((u) => {
          const color = u.pct >= 80 ? 'var(--success)' : u.pct >= 50 ? 'var(--warning)' : 'var(--error)'
          return (
            <div key={u.unit} className="rounded-xl border p-3.5" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}>
              <div className="flex items-center justify-between gap-3 mb-1.5">
                <span className="text-sm font-semibold truncate">{u.unit}</span>
                <span className="text-xs font-bold tabular-nums whitespace-nowrap" style={{ color }}>{u.correct}/{u.total} · {u.pct}%</span>
              </div>
              <div className="w-full rounded-full h-1.5" style={{ backgroundColor: 'color-mix(in srgb, var(--text) 10%, transparent)' }}>
                <div className="h-1.5 rounded-full" style={{ width: `${u.pct}%`, backgroundColor: color }} />
              </div>
            </div>
          )
        })}
      </div>

      <button onClick={onRestart} className="px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-opacity hover:opacity-90" style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}>
        New mixed review
      </button>
    </div>
  )
}
