import { useState, useEffect, useMemo, useCallback } from 'react'
import { getProgress, recordAttempt, resetProgress } from '../services/api'
import { useAuth } from '../context/AuthContext'
import type { CardMastery, Stack, StudyCard } from '../types/flashcards'
import { applyAttempt, emptyMastery, REQUIRED_STREAK, REQUIRED_TOTAL } from '../utils/mastery'
import { resolveStack, shuffle } from '../utils/studyCards'
import FlashcardEmptyState from './FlashcardEmptyState'
import MathText from './MathText'

/** 'random' draws from every card in the subject; a number trains one stack. */
type Source = 'random' | number

/**
 * How far back a card goes after a grade. A card you just missed comes back
 * almost immediately; one you got right but haven't mastered waits longer.
 */
const REQUEUE_GAP_CORRECT = 3
const REQUEUE_GAP_MISSED = 1

const TRAIN_ICON = 'M13 10V3L4 14h7v7l9-11h-7z'

interface Props {
  subjectId: number
  pool: StudyCard[]
  stacks: Stack[]
  initialSource: Source
}

export default function TrainingMode({ subjectId, pool, stacks, initialSource }: Props) {
  const { isAuthenticated } = useAuth()

  const [source, setSource] = useState<Source>(initialSource)
  const [progress, setProgress] = useState<Map<string, CardMastery>>(new Map())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [started, setStarted] = useState(false)
  const [queue, setQueue] = useState<string[]>([])
  const [revealed, setRevealed] = useState(false)
  const [stats, setStats] = useState({ attempts: 0, correct: 0 })

  const byKey = useMemo(() => new Map(pool.map((card) => [card.key, card])), [pool])

  // Whichever cards the chosen source covers, in a stable order.
  const sourceCards = useMemo(() => {
    if (source === 'random') return pool
    const stack = stacks.find((s) => s.id === source)
    return stack ? resolveStack(stack, pool) : []
  }, [source, pool, stacks])

  // Mastery lives server-side for signed-in users; signed-out sessions are ephemeral.
  useEffect(() => {
    if (!isAuthenticated) {
      setProgress(new Map())
      return
    }
    let cancelled = false
    setLoading(true)
    getProgress(subjectId)
      .then((rows) => {
        if (!cancelled) setProgress(new Map(rows.map((r) => [r.cardKey, r])))
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load progress')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [isAuthenticated, subjectId])

  // Changing source abandons the run in progress.
  useEffect(() => {
    setStarted(false)
    setQueue([])
    setRevealed(false)
    setStats({ attempts: 0, correct: 0 })
  }, [source])

  const remainingKeys = useMemo(
    () => sourceCards.filter((c) => !progress.get(c.key)?.mastered).map((c) => c.key),
    [sourceCards, progress]
  )

  const masteredCount = sourceCards.length - remainingKeys.length

  const startSession = () => {
    setQueue(shuffle(remainingKeys))
    setStats({ attempts: 0, correct: 0 })
    setRevealed(false)
    setStarted(true)
  }

  const handleReset = async () => {
    setError(null)
    try {
      if (isAuthenticated) await resetProgress(subjectId)
      setProgress(new Map())
      setStarted(false)
      setQueue([])
      setStats({ attempts: 0, correct: 0 })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to reset progress')
    }
  }

  const grade = useCallback(
    (correct: boolean) => {
      const key = queue[0]
      if (!key) return

      const prev = progress.get(key) ?? emptyMastery(key)
      const next = applyAttempt(prev, correct)

      setProgress((map) => new Map(map).set(key, next))
      setStats((s) => ({ attempts: s.attempts + 1, correct: s.correct + (correct ? 1 : 0) }))
      setRevealed(false)

      setQueue((q) => {
        const [head, ...rest] = q
        if (next.mastered) return rest
        const gap = correct ? REQUEUE_GAP_CORRECT : REQUEUE_GAP_MISSED
        const at = Math.min(rest.length, gap)
        return [...rest.slice(0, at), head, ...rest.slice(at)]
      })

      // The server recomputes mastery authoritatively; reconcile when it answers.
      if (isAuthenticated) {
        recordAttempt(subjectId, key, correct)
          .then((saved) => setProgress((map) => new Map(map).set(key, saved)))
          .catch((err: unknown) =>
            setError(err instanceof Error ? err.message : 'Failed to save progress')
          )
      }
    },
    [queue, progress, isAuthenticated, subjectId]
  )

  const current = queue.length > 0 ? byKey.get(queue[0]) : undefined
  const finished = started && queue.length === 0

  // Space reveals; 1 misses, 2 gets it.
  useEffect(() => {
    if (!started || !current) return
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      if (target?.closest('button, a, input, textarea, select')) return
      if (e.key === ' ' && !revealed) {
        e.preventDefault()
        setRevealed(true)
      } else if (revealed && (e.key === '1' || e.key === '2')) {
        e.preventDefault()
        grade(e.key === '2')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [started, current, revealed, grade])

  if (pool.length === 0) {
    return (
      <FlashcardEmptyState
        iconPath={TRAIN_ICON}
        title="Nothing to train yet"
        body="There are no premade cards for this subject, and you haven't written any. Add a card to start training."
      />
    )
  }

  const cardMastery = current ? progress.get(current.key) ?? emptyMastery(current.key) : null
  const accuracy = stats.attempts === 0 ? 0 : Math.round((stats.correct / stats.attempts) * 100)

  return (
    <div>
      {/* Source picker */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="text-sm font-medium mr-1" style={{ color: 'var(--text)' }}>
          Train:
        </span>
        <SourceChip active={source === 'random'} onClick={() => setSource('random')}>
          Random mix ({pool.length})
        </SourceChip>
        {stacks.map((stack) => {
          const count = resolveStack(stack, pool).length
          return (
            <SourceChip
              key={stack.id}
              active={source === stack.id}
              onClick={() => setSource(stack.id)}
            >
              {stack.name} ({count})
            </SourceChip>
          )
        })}
      </div>

      {!isAuthenticated && (
        <div
          className="mb-4 p-3 rounded-lg border text-sm"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text-muted)' }}
        >
          You're not signed in — mastery is tracked for this session only and won't be saved.
        </div>
      )}

      {error && (
        <div
          className="mb-4 p-3 rounded-lg border text-sm"
          style={{ backgroundColor: 'var(--error-bg)', borderColor: 'var(--error)', color: 'var(--text)' }}
        >
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-16" style={{ color: 'var(--text-muted)' }}>
          Loading your progress...
        </div>
      ) : sourceCards.length === 0 ? (
        <FlashcardEmptyState
          iconPath={TRAIN_ICON}
          title="This stack is empty"
          body="Every card it referenced has since been deleted. Edit the stack to add cards back."
        />
      ) : (
        <>
          <MasteryBar mastered={masteredCount} total={sourceCards.length} />

          {!started ? (
            remainingKeys.length === 0 ? (
              <FlashcardEmptyState
                iconPath={TRAIN_ICON}
                title="Everything here is mastered"
                body={`All ${sourceCards.length} cards hit ${REQUIRED_TOTAL} correct answers with a streak of ${REQUIRED_STREAK}. Reset to run through them again.`}
                action={
                  <button
                    onClick={handleReset}
                    className="mt-5 px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-opacity hover:opacity-90"
                    style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                  >
                    Reset mastery
                  </button>
                }
              />
            ) : (
              <div
                className="text-center py-14 px-6 rounded-2xl border"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
              >
                <h3 className="font-display text-2xl font-bold mb-2">
                  {remainingKeys.length} card{remainingKeys.length === 1 ? '' : 's'} to go
                </h3>
                <p className="max-w-md mx-auto text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                  Answer each card from memory, then grade yourself. A card is retired once you've
                  gotten it right {REQUIRED_TOTAL} times total and {REQUIRED_STREAK} times in a row.
                </p>
                <button
                  onClick={startSession}
                  className="px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                >
                  Start training
                </button>
              </div>
            )
          ) : finished ? (
            <div
              className="text-center py-14 px-6 rounded-2xl border"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
            >
              <div className="text-6xl mb-4">{accuracy >= 80 ? '🎉' : accuracy >= 60 ? '👍' : '📚'}</div>
              <h3 className="font-display text-2xl font-bold mb-2">Session complete</h3>
              <p className="text-lg mb-1" style={{ color: 'var(--text)' }}>
                {accuracy}% accuracy
              </p>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                {stats.correct} correct out of {stats.attempts} attempts ·{' '}
                {masteredCount} / {sourceCards.length} mastered
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={startSession}
                  disabled={remainingKeys.length === 0}
                  className="px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                >
                  {remainingKeys.length === 0 ? 'All mastered' : 'Keep going'}
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer border transition-opacity hover:opacity-80"
                  style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
                >
                  Reset mastery
                </button>
              </div>
            </div>
          ) : current && cardMastery ? (
            <>
              <div className="flex items-center justify-between mb-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                <span>
                  {queue.length} in rotation · {stats.attempts > 0 ? `${accuracy}% accuracy` : 'no attempts yet'}
                </span>
                <span>
                  {cardMastery.correctTotal}/{REQUIRED_TOTAL} correct · streak {cardMastery.correctStreak}
                </span>
              </div>

              <div
                className="rounded-2xl border overflow-hidden mb-5"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
              >
                <div className="px-6 py-3 flex items-center justify-between" style={{ backgroundColor: 'var(--accent)' }}>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] truncate" style={{ color: 'var(--accent-ink)' }}>
                    {current.eyebrow}
                  </span>
                </div>

                <div className="p-8">
                  <MathText className="text-xl font-semibold leading-relaxed" component="div">
                    {current.question}
                  </MathText>

                  {revealed && (
                    <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--hairline)' }}>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--text-muted)' }}>
                        Answer
                      </div>
                      <MathText className="text-lg font-semibold leading-relaxed" component="div">
                        {current.answer}
                      </MathText>
                      {current.explanation && (
                        <MathText className="text-sm mt-3 leading-relaxed" component="div" style={{ color: 'var(--text-muted)' }}>
                          {current.explanation}
                        </MathText>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {!revealed ? (
                <button
                  onClick={() => setRevealed(true)}
                  className="w-full px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                >
                  Show answer <span className="opacity-70 font-normal">(Space)</span>
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => grade(false)}
                    className="px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer border transition-opacity hover:opacity-80"
                    style={{ backgroundColor: 'var(--error-bg)', borderColor: 'var(--error)', color: 'var(--text)' }}
                  >
                    ✗ Missed it <span className="opacity-60 font-normal">(1)</span>
                  </button>
                  <button
                    onClick={() => grade(true)}
                    className="px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer border transition-opacity hover:opacity-80"
                    style={{ backgroundColor: 'var(--success-bg)', borderColor: 'var(--success)', color: 'var(--text)' }}
                  >
                    ✓ Got it <span className="opacity-60 font-normal">(2)</span>
                  </button>
                </div>
              )}
            </>
          ) : null}
        </>
      )}
    </div>
  )
}

function SourceChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className="px-3.5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all border max-w-[240px] truncate"
      style={{
        backgroundColor: active ? 'var(--accent)' : 'var(--surface)',
        color: active ? 'var(--accent-ink)' : 'var(--text)',
        borderColor: active ? 'var(--accent)' : 'var(--hairline)',
      }}
    >
      {children}
    </button>
  )
}

function MasteryBar({ mastered, total }: { mastered: number; total: number }) {
  const pct = total === 0 ? 0 : Math.round((mastered / total) * 100)
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between text-sm mb-1.5">
        <span style={{ color: 'var(--text-muted)' }}>Mastered</span>
        <span className="font-semibold" style={{ color: 'var(--text)' }}>
          {mastered} / {total}
        </span>
      </div>
      <div
        className="w-full rounded-full h-2"
        style={{ backgroundColor: 'color-mix(in srgb, var(--text) 12%, transparent)' }}
      >
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{ width: `${pct}%`, backgroundColor: 'var(--success)' }}
        />
      </div>
    </div>
  )
}
