import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageBand from '../components/PageBand'
import MathText from '../components/MathText'
import ExplainMistakeButton from '../components/ExplainMistakeButton'
import { useAuth } from '../context/AuthContext'
import { getUnitBank } from '../data/unitBank/lookup'
import { checkReviewAnswer, getReviewQuestion } from '../services/api'
import { dueEntries, type MistakeEntry } from '../utils/mistakeNotebook'
import { dropMistake, loadNotebook, reviewMistake } from '../utils/mistakeNotebookStore'

/** A notebook entry resolved to something showable. Answers are only known after grading. */
interface LoadedItem {
  entry: MistakeEntry
  stem: string
  options: string[]
  grade: (selected: number) => Promise<{ correct: boolean; correctIndex: number; explanation: string }>
}

type LoadState =
  | { status: 'loading' }
  | { status: 'ready'; item: LoadedItem }
  | { status: 'error'; message: string }

function formatDue(dueAt: number, now: number): string {
  if (dueAt <= now) return 'Due now'
  const d = new Date(dueAt)
  return `Due ${d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}`
}

/** Finds an AP question in the bundled bank, or null if it no longer exists. */
function findApQuestion(subject: string, questionId: string) {
  const bank = getUnitBank(subject)
  if (!bank) return null
  for (const u of bank.units) {
    const q = u.questions.find((x) => x.id === questionId)
    if (q) return q
  }
  return null
}

export default function MistakeNotebookPage() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const [entries, setEntries] = useState<MistakeEntry[]>(() => loadNotebook())
  const [now, setNow] = useState(() => Date.now())
  // The review run: a snapshot of the due entries taken when the run starts, so an entry that
  // graduates mid-run stays on screen until the student moves on.
  const [queue, setQueue] = useState<MistakeEntry[] | null>(null)
  const [pos, setPos] = useState(0)
  const [results, setResults] = useState({ correct: 0, total: 0 })

  const due = useMemo(() => dueEntries(entries, now), [entries, now])
  const reviewable = due.filter((e) => e.source === 'ap' || isAuthenticated)
  const satLocked = due.length - reviewable.length
  const upcoming = useMemo(() => [...entries].sort((a, b) => a.dueAt - b.dueAt), [entries])

  const startRun = () => {
    setQueue(reviewable)
    setPos(0)
    setResults({ correct: 0, total: 0 })
  }

  const endRun = () => {
    setQueue(null)
    setEntries(loadNotebook())
    setNow(Date.now())
  }

  const advance = () => setPos((p) => p + 1)

  const onGraded = (key: string, correct: boolean) => {
    setEntries(reviewMistake(key, correct))
    setResults((r) => ({ correct: r.correct + (correct ? 1 : 0), total: r.total + 1 }))
  }

  const onDropped = (key: string) => {
    setEntries(dropMistake(key))
    advance()
  }

  const currentEntry = queue && pos < queue.length ? queue[pos] : null

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <PageBand
        crumbs={[{ label: 'Home', onClick: () => navigate('/') }, { label: 'Mistake Notebook' }]}
        back={{ label: 'Home', onClick: () => navigate('/') }}
        watermark="REDO"
        title="Mistake Notebook"
        subtitle="Every question you miss in practice lands here. Re-try each one after 1, 3, 7, 14 and 30 days; get it right every time and it graduates out."
      />

      {queue ? (
        <div className="mt-8">
          {currentEntry ? (
            <ReviewItem
              key={currentEntry.key}
              entry={currentEntry}
              index={pos}
              total={queue.length}
              onGraded={onGraded}
              onDropped={onDropped}
              onNext={advance}
              onExit={endRun}
            />
          ) : (
            <div
              className="rounded-2xl border p-8 text-center"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
            >
              <h2 className="font-display text-3xl font-bold">
                {results.correct} / {results.total}
              </h2>
              <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
                Review done. Correct answers move to a longer interval; misses come back tomorrow.
              </p>
              <button
                onClick={endRun}
                className="mt-6 px-6 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                Back to notebook
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div
            className="mt-8 rounded-2xl border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <div>
              <div className="font-display text-4xl font-bold leading-none">{due.length}</div>
              <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                {due.length === 1 ? 'question' : 'questions'} due for review · {entries.length} in the notebook
              </div>
              {satLocked > 0 && (
                <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
                  {satLocked} SAT question{satLocked === 1 ? ' is' : 's are'} due.{' '}
                  <Link to="/login" className="underline font-semibold" style={{ color: 'var(--text)' }}>
                    Sign in to review
                  </Link>{' '}
                  {satLocked === 1 ? 'it' : 'them'}.
                </p>
              )}
            </div>
            <button
              onClick={startRun}
              disabled={reviewable.length === 0}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              {reviewable.length > 0 ? `Review ${reviewable.length} now` : 'Nothing due'}
            </button>
          </div>

          <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
            Saved on this device. Re-tries here are for your own review only: they don't change your SAT mastery or
            class progress.
          </p>

          {entries.length === 0 ? (
            <div
              className="mt-6 rounded-2xl border p-8 text-center"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
            >
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                No mistakes saved yet. Missed questions from AP practice, mixed review, mock exams and SAT Academy
                sessions show up here automatically.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-5">
                <Link
                  to="/ap/hub"
                  className="px-5 py-2.5 rounded-lg text-sm font-semibold border"
                  style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
                >
                  AP practice
                </Link>
                <Link
                  to="/sat/hub"
                  className="px-5 py-2.5 rounded-lg text-sm font-semibold border"
                  style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
                >
                  SAT practice
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--text-muted)' }}>
                Schedule
              </p>
              <ul className="space-y-2">
                {upcoming.map((e) => (
                  <li
                    key={e.key}
                    className="flex items-center justify-between gap-3 rounded-xl border px-4 py-3"
                    style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold truncate">{e.subject}</span>
                      <span className="block text-xs" style={{ color: 'var(--text-muted)' }}>
                        Missed {e.misses} time{e.misses === 1 ? '' : 's'} · step {e.box + 1} of 5
                      </span>
                    </span>
                    <span
                      className="text-xs font-semibold flex-shrink-0"
                      style={{ color: e.dueAt <= now ? 'var(--accent)' : 'var(--text-muted)' }}
                    >
                      {formatDue(e.dueAt, now)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function ReviewItem({
  entry,
  index,
  total,
  onGraded,
  onDropped,
  onNext,
  onExit,
}: {
  entry: MistakeEntry
  index: number
  total: number
  onGraded: (key: string, correct: boolean) => void
  onDropped: (key: string) => void
  onNext: () => void
  onExit: () => void
}) {
  const [state, setState] = useState<LoadState>({ status: 'loading' })
  const [selected, setSelected] = useState<number | null>(null)
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState<{ correct: boolean; correctIndex: number; explanation: string } | null>(null)
  const [gradeError, setGradeError] = useState<string | null>(null)
  const { key, source, subject, questionId } = entry
  // Dropping advances the run, so it must happen once even if StrictMode re-runs the effect.
  const droppedRef = useRef(false)
  const drop = () => {
    if (droppedRef.current) return
    droppedRef.current = true
    onDropped(key)
  }

  useEffect(() => {
    let cancelled = false
    if (source === 'ap') {
      const q = findApQuestion(subject, questionId)
      if (!q) {
        drop()
        return
      }
      setState({
        status: 'ready',
        item: {
          entry,
          stem: q.question,
          options: q.options,
          grade: async (i) => ({ correct: i === q.correctAnswer, correctIndex: q.correctAnswer, explanation: q.explanation }),
        },
      })
      return
    }
    // SAT: the server returns the answer-free question; the answer only comes back after grading.
    getReviewQuestion(questionId)
      .then((q) => {
        if (cancelled) return
        if (q === 'NOT_FOUND') {
          drop()
          return
        }
        setState({
          status: 'ready',
          item: { entry, stem: q.stem, options: q.options, grade: (i) => checkReviewAnswer(questionId, i) },
        })
      })
      .catch((e: Error) => {
        if (!cancelled) setState({ status: 'error', message: e.message || 'Could not load this question.' })
      })
    return () => {
      cancelled = true
    }
    // Load once per entry; the parent remounts this component for each key.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  const choose = async (i: number) => {
    if (state.status !== 'ready' || selected !== null || busy) return
    setSelected(i)
    setBusy(true)
    setGradeError(null)
    try {
      const r = await state.item.grade(i)
      setResult(r)
      onGraded(key, r.correct)
    } catch (e) {
      setSelected(null)
      setGradeError((e as Error).message || 'Could not check that answer.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <button
          onClick={onExit}
          className="text-sm font-medium cursor-pointer hover:opacity-70 transition-opacity"
          style={{ color: 'var(--text-muted)' }}
        >
          ← End review
        </button>
        <span
          className="text-sm font-bold px-3 py-1 rounded-full"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
        >
          {index + 1} / {total}
        </span>
      </div>

      <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}>
        <div className="px-6 py-3" style={{ borderBottom: '1px solid var(--hairline)' }}>
          <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>
            {subject}
          </span>
        </div>
        <div className="p-6">
          {state.status === 'loading' && (
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Loading question…
            </p>
          )}
          {state.status === 'error' && (
            <div>
              <p className="text-sm" style={{ color: 'var(--error)' }}>
                {state.message}
              </p>
              <button
                onClick={onNext}
                className="mt-4 px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                Skip
              </button>
            </div>
          )}
          {state.status === 'ready' && (
            <>
              <MathText className="text-lg font-semibold mb-6" component="div">
                {state.item.stem}
              </MathText>
              <div className="space-y-3">
                {state.item.options.map((opt, i) => {
                  let style: React.CSSProperties = { backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }
                  if (result) {
                    if (i === result.correctIndex) style = { backgroundColor: 'var(--success-bg)', borderColor: 'var(--success)' }
                    else if (i === selected) style = { backgroundColor: 'var(--error-bg)', borderColor: 'var(--error)' }
                  } else if (i === selected) {
                    style = { backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--accent)' }
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => choose(i)}
                      disabled={selected !== null}
                      className="border rounded-lg p-4 text-left w-full transition-all cursor-pointer disabled:cursor-default"
                      style={style}
                    >
                      <span className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                        <MathText className="text-sm pt-1" component="span">
                          {opt}
                        </MathText>
                      </span>
                    </button>
                  )
                })}
              </div>

              {gradeError && (
                <p className="text-sm mt-4" style={{ color: 'var(--error)' }}>
                  {gradeError}
                </p>
              )}

              {result && selected !== null && (
                <div
                  className="mt-6 p-4 rounded-lg border"
                  style={{
                    backgroundColor: result.correct ? 'var(--success-bg)' : 'var(--error-bg)',
                    borderColor: result.correct ? 'var(--success)' : 'var(--error)',
                  }}
                >
                  <p className="font-bold text-sm">
                    {result.correct
                      ? 'Correct! It moves to a longer interval.'
                      : `Not yet. The answer is ${String.fromCharCode(65 + result.correctIndex)}; it comes back tomorrow.`}
                  </p>
                  <MathText className="text-sm mt-2" component="p" style={{ color: 'var(--text)' }}>
                    {result.explanation}
                  </MathText>
                  {!result.correct && (
                    <ExplainMistakeButton
                      className="mt-3"
                      subject={subject}
                      question={state.item.stem}
                      options={state.item.options}
                      selectedIndex={selected}
                      correctIndex={result.correctIndex}
                      explanation={result.explanation}
                    />
                  )}
                </div>
              )}

              <div className="flex justify-end mt-6">
                <button
                  onClick={onNext}
                  disabled={!result}
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                >
                  {index + 1 < total ? 'Next →' : 'Finish'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
