import { useEffect, useMemo, useRef, useState } from 'react'
import { getMixedQuestions, shuffle, type MixQuestion } from '../data/questionBank'

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg className={className || 'w-5 h-5'} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  )
}

function fmt(total: number): string {
  const m = Math.floor(Math.max(0, total) / 60)
  const s = Math.max(0, total) % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

/** Rough MCQ-only → AP 1–5 mapping. Real exams weight free response ~50%, so this is a floor. */
function predictedScore(pct: number): number {
  if (pct >= 75) return 5
  if (pct >= 62) return 4
  if (pct >= 48) return 3
  if (pct >= 33) return 2
  return 1
}

const SCORE_LABEL: Record<number, string> = {
  5: 'Extremely well qualified',
  4: 'Well qualified',
  3: 'Qualified',
  2: 'Possibly qualified',
  1: 'No recommendation',
}

export default function MockExam({ subjectName }: { subjectName: string }) {
  const pool = useMemo(() => getMixedQuestions(subjectName), [subjectName])
  const [exam, setExam] = useState<MixQuestion[] | null>(null)

  if (pool.length === 0) {
    return (
      <div className="text-center py-16 rounded-2xl border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}>
        <h3 className="font-display text-xl font-bold mb-2">Mock exams are coming soon</h3>
        <p className="max-w-md mx-auto text-sm" style={{ color: 'var(--text-muted)' }}>
          There isn’t a question bank for {subjectName} yet. Check back soon!
        </p>
      </div>
    )
  }

  if (!exam) {
    const count = Math.min(40, pool.length)
    const minutes = Math.round((count * 1.2) / 5) * 5 || 5
    return (
      <div>
        <h2 className="font-display text-2xl font-bold">Timed Mock Exam</h2>
        <p className="text-sm mt-1 mb-4 max-w-prose" style={{ color: 'var(--text-muted)' }}>
          A full, timed multiple-choice mock under exam-like conditions — no feedback until you submit,
          then a predicted AP score and a full review.
        </p>
        <div
          className="rounded-xl border px-4 py-3 mb-5 text-sm leading-relaxed"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text-muted)' }}
        >
          <span className="font-semibold" style={{ color: 'var(--text)' }}>Heads up:</span> this mock is
          assembled from our practice question bank, not the secure official College Board exam. The
          predicted 1–5 is estimated from multiple-choice performance only — the real exam also weights
          free response — so treat it as a directional check, not a guarantee.
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => setExam(shuffle(pool).slice(0, count))}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
          >
            <Icon path="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-4 h-4" />
            Start {count}-question mock · {minutes} min
          </button>
        </div>
      </div>
    )
  }

  return <ExamRunner key={exam[0]?.id} subjectName={subjectName} questions={exam} onExit={() => setExam(null)} />
}

function ExamRunner({
  subjectName,
  questions,
  onExit,
}: {
  subjectName: string
  questions: MixQuestion[]
  onExit: () => void
}) {
  const budget = Math.round(questions.length * 1.2 * 60)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [current, setCurrent] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(budget)
  const tick = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (submitted) return
    tick.current = setInterval(() => setTimeLeft((t) => t - 1), 1000)
    return () => {
      if (tick.current) clearInterval(tick.current)
    }
  }, [submitted])

  useEffect(() => {
    if (timeLeft <= 0 && !submitted) setSubmitted(true)
  }, [timeLeft, submitted])

  const answeredCount = Object.keys(answers).length

  if (submitted) {
    return <ExamResults subjectName={subjectName} questions={questions} answers={answers} onExit={onExit} />
  }

  const q = questions[current]

  return (
    <div>
      {/* Sticky exam bar */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <button onClick={onExit} className="flex items-center gap-1.5 text-sm font-medium cursor-pointer hover:opacity-70 transition-opacity" style={{ color: 'var(--text-muted)' }}>
          <Icon path="M15 19l-7-7 7-7" className="w-4 h-4" />
          Exit
        </button>
        <div className="flex items-center gap-3">
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{answeredCount}/{questions.length} answered</span>
          <span
            className="inline-flex items-center gap-1.5 text-sm font-bold tabular-nums px-3 py-1 rounded-full"
            style={{ backgroundColor: timeLeft <= 120 ? 'var(--error-bg)' : 'color-mix(in srgb, var(--text) 8%, transparent)', color: timeLeft <= 120 ? 'var(--error)' : 'var(--text)' }}
          >
            <Icon path="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" className="w-4 h-4" />
            {fmt(timeLeft)}
          </span>
        </div>
      </div>

      {/* Question navigator */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {questions.map((qq, i) => {
          const done = answers[qq.id] !== undefined
          const isCur = i === current
          return (
            <button
              key={qq.id}
              onClick={() => setCurrent(i)}
              className="w-8 h-8 rounded-lg text-xs font-bold cursor-pointer transition-all"
              style={{
                backgroundColor: isCur ? 'var(--accent)' : done ? 'color-mix(in srgb, var(--accent) 20%, transparent)' : 'var(--surface)',
                color: isCur ? 'var(--accent-ink)' : 'var(--text)',
                border: '1px solid var(--hairline)',
              }}
            >
              {i + 1}
            </button>
          )
        })}
      </div>

      <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}>
        <div className="px-5 py-2.5 flex items-center justify-between" style={{ borderBottom: '1px solid var(--hairline)' }}>
          <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>Question {current + 1}</span>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{q.unit}</span>
        </div>
        <div className="p-5">
          <p className="text-base font-semibold mb-5">{q.question}</p>
          <div className="space-y-3">
            {q.options.map((option, idx) => {
              const chosen = answers[q.id] === idx
              return (
                <button
                  key={idx}
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: idx }))}
                  className="border rounded-lg p-4 cursor-pointer transition-all text-left w-full hover:shadow-md"
                  style={chosen ? { backgroundColor: 'color-mix(in srgb, var(--accent) 14%, transparent)', borderColor: 'var(--accent)' } : { backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={chosen ? { backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' } : { backgroundColor: 'color-mix(in srgb, var(--text) 8%, transparent)', color: 'var(--text)' }}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm">{option}</span>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              className="px-4 py-2 rounded-lg text-sm font-medium border disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:opacity-80"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
            >
              ← Previous
            </button>
            {current < questions.length - 1 ? (
              <button
                onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
                className="px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer hover:opacity-90"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                Next →
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer hover:opacity-90"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                Submit exam
              </button>
            )}
          </div>
        </div>
      </div>

      {answeredCount < questions.length && (
        <div className="text-center mt-5">
          <button onClick={() => setSubmitted(true)} className="text-sm font-semibold underline cursor-pointer" style={{ color: 'var(--text-muted)' }}>
            Submit now ({questions.length - answeredCount} unanswered)
          </button>
        </div>
      )}
    </div>
  )
}

function ExamResults({
  subjectName,
  questions,
  answers,
  onExit,
}: {
  subjectName: string
  questions: MixQuestion[]
  answers: Record<string, number>
  onExit: () => void
}) {
  const correct = questions.filter((q) => answers[q.id] === q.correctAnswer).length
  const pct = Math.round((correct / questions.length) * 100)
  const score = predictedScore(pct)
  const qualifying = score >= 3

  return (
    <div>
      <div className="rounded-2xl border p-6 mb-4 text-center" style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] mb-2" style={{ color: 'var(--text-muted)' }}>Predicted AP score</div>
        <div
          className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center font-display text-5xl font-bold"
          style={{ backgroundColor: qualifying ? 'var(--accent)' : 'color-mix(in srgb, var(--text) 8%, transparent)', color: qualifying ? 'var(--accent-ink)' : 'var(--text-muted)' }}
        >
          {score}
        </div>
        <div className="text-sm font-semibold mt-3">{SCORE_LABEL[score]}</div>
        <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
          {correct}/{questions.length} correct · {pct}% on multiple choice
        </div>
        <p className="text-xs mt-3 max-w-md mx-auto" style={{ color: 'var(--text-muted)' }}>
          Estimated from multiple-choice only. The real {subjectName} exam also weights free response,
          so use this as a directional signal, not a guarantee.
        </p>
      </div>

      <div className="text-xs font-semibold uppercase tracking-[0.16em] mb-3" style={{ color: 'var(--text-muted)' }}>Review every question</div>
      <div className="space-y-2 mb-5">
        {questions.map((q, i) => {
          const chosen = answers[q.id]
          const right = chosen === q.correctAnswer
          return (
            <div key={q.id} className="rounded-xl border p-4" style={{ backgroundColor: 'var(--surface)', borderColor: right ? 'var(--success)' : 'var(--error)' }}>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: right ? 'var(--success-bg)' : 'var(--error-bg)', color: right ? 'var(--success-ink, var(--success))' : 'var(--error-ink, var(--error))' }}>
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{q.question}</p>
                  <p className="text-xs mt-1.5" style={{ color: 'var(--text-muted)' }}>
                    Correct: <span className="font-semibold" style={{ color: 'var(--success)' }}>{String.fromCharCode(65 + q.correctAnswer)}</span>
                    {chosen === undefined ? ' · you left this blank' : right ? '' : ` · you chose ${String.fromCharCode(65 + chosen)}`}
                  </p>
                  <p className="text-sm mt-1.5 leading-relaxed">{q.explanation}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <button onClick={onExit} className="px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-opacity hover:opacity-90" style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}>
        New mock exam
      </button>
    </div>
  )
}
