import { useEffect, useMemo, useState, useCallback } from 'react'
import { getUnitBank } from '../data/unitBank/lookup'
import type { UnitQuestion, Difficulty } from '../data/unitBank/types'
import { shuffle } from '../data/questionBank'
import { recordAttempt, getProgress } from '../services/api'
import { useAuth } from '../context/AuthContext'
import type { CardMastery } from '../types/flashcards'
import { correctToMaster, tierOf, practiceCardKey } from '../utils/apMastery'
import MathText from './MathText'

type Scope = 'all' | 'unmastered' | number
type DifficultyFilter = 'all' | Difficulty | 'unrated'
type Phase = 'setup' | 'quiz' | 'summary'

interface QuizItem {
  question: UnitQuestion
  unitNumber: number
  unitTitle: string
}

interface AnswerRecord {
  item: QuizItem
  selected: number
}

const LENGTH_OPTIONS = [10, 20, 0] // 0 = all
const DIFF_META: Record<Difficulty | 'unrated', { label: string; color: string; bg: string }> = {
  easy: { label: 'Easy', color: 'var(--success)', bg: 'var(--success-bg)' },
  medium: { label: 'Medium', color: 'var(--warning)', bg: 'var(--warning-bg)' },
  hard: { label: 'Hard', color: 'var(--error)', bg: 'var(--error-bg)' },
  unrated: {
    label: 'Unrated',
    color: 'var(--text-muted)',
    bg: 'color-mix(in srgb, var(--text) 8%, transparent)',
  },
}
const KEY_TO_INDEX: Record<string, number> = {
  a: 0, b: 1, c: 2, d: 3,
  '1': 0, '2': 1, '3': 2, '4': 3,
}

/** Unified unit practice: one bank, unit + difficulty setup, keyboard-friendly quiz, rich summary. */
export default function UnitPractice({
  subjectName,
  subjectId,
}: {
  subjectName: string
  /** When set and the user is signed in, each answer is recorded toward the class's mastery. */
  subjectId?: number
}) {
  const bank = getUnitBank(subjectName)
  const { isAuthenticated } = useAuth()

  const [phase, setPhase] = useState<Phase>('setup')
  const [scope, setScope] = useState<Scope>('all')
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('all')
  const [length, setLength] = useState(10)
  const [quiz, setQuiz] = useState<QuizItem[]>([])
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [records, setRecords] = useState<AnswerRecord[]>([])
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  // Per-question progress (correct counts, streak, mastered), keyed by question id. Powers the
  // per-question "count to master" hint and the "Not yet mastered" scope, and stays current as
  // questions progress mid-session. Only populated when signed in with a subjectId.
  const [progressMap, setProgressMap] = useState<Map<string, CardMastery>>(new Map())
  const tracksMastery = isAuthenticated && subjectId != null
  // Subject-scoped /progress key for a question (empty when we can't track, i.e. no subjectId).
  const keyFor = (questionId: string) =>
    subjectId != null ? practiceCardKey(subjectId, questionId) : ''

  useEffect(() => {
    if (!tracksMastery || subjectId == null) return
    let cancelled = false
    getProgress(subjectId)
      .then((rows) => {
        if (!cancelled) setProgressMap(new Map(rows.map((r) => [r.cardKey, r])))
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [tracksMastery, subjectId])

  const pool = useMemo(() => {
    if (!bank) return []
    const items: QuizItem[] = []
    for (const u of bank.units) {
      if (scope !== 'all' && scope !== 'unmastered' && u.unitNumber !== scope) continue
      for (const q of u.questions) {
        if (scope === 'unmastered' && progressMap.get(keyFor(q.id))?.mastered) continue
        if (difficulty === 'unrated' ? q.difficulty !== undefined : difficulty !== 'all' && q.difficulty !== difficulty) continue
        items.push({ question: q, unitNumber: u.unitNumber, unitTitle: u.title })
      }
    }
    return items
  }, [bank, scope, difficulty, progressMap])

  // A scope switch can strand a difficulty filter with no matching questions; fall back to all.
  useEffect(() => {
    if (difficulty !== 'all' && pool.length === 0) setDifficulty('all')
  }, [difficulty, pool.length])

  const startQuiz = useCallback((items: QuizItem[]) => {
    setQuiz(items)
    setIdx(0)
    setSelected(null)
    setRecords([])
    setStreak(0)
    setBestStreak(0)
    setPhase('quiz')
  }, [])

  const start = () => {
    const shuffled = shuffle(pool)
    startQuiz(length > 0 ? shuffled.slice(0, length) : shuffled)
  }

  const current = quiz[idx]

  const answer = useCallback(
    (option: number) => {
      if (!current || selected !== null || option >= current.question.options.length) return
      setSelected(option)
      setRecords((r) => [...r, { item: current, selected: option }])
      const correct = option === current.question.correctAnswer
      // Feed the class's mastery (My AP Planner). The server grades it; when a question becomes
      // mastered we drop it from the "Not yet mastered" pool so that scope stays current.
      if (tracksMastery && subjectId != null) {
        recordAttempt(subjectId, keyFor(current.question.id), correct)
          .then((m) => {
            setProgressMap((prev) => {
              const next = new Map(prev)
              next.set(m.cardKey, m)
              return next
            })
          })
          .catch(() => {})
      }
      if (option === current.question.correctAnswer) {
        setStreak((s) => {
          const next = s + 1
          setBestStreak((b) => Math.max(b, next))
          return next
        })
      } else {
        setStreak(0)
      }
    },
    [current, selected, tracksMastery, subjectId]
  )

  const next = useCallback(() => {
    if (selected === null) return
    if (idx < quiz.length - 1) {
      setIdx((i) => i + 1)
      setSelected(null)
    } else {
      setPhase('summary')
    }
  }, [selected, idx, quiz.length])

  // Keyboard controls: A–D / 1–4 to answer, Enter or → to advance.
  useEffect(() => {
    if (phase !== 'quiz') return
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return
      const key = e.key.toLowerCase()
      if (key in KEY_TO_INDEX) {
        e.preventDefault()
        answer(KEY_TO_INDEX[key])
      } else if (key === 'enter' || key === 'arrowright') {
        e.preventDefault()
        next()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, answer, next])

  if (!bank) {
    return (
      <div
        className="text-center py-12 rounded-2xl border"
        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
      >
        <p style={{ color: 'var(--text-muted)' }}>No practice questions available for this subject yet.</p>
      </div>
    )
  }

  /* ---------------- SETUP ---------------- */
  if (phase === 'setup') {
    const diffCounts: Record<DifficultyFilter, number> = { all: 0, easy: 0, medium: 0, hard: 0, unrated: 0 }
    for (const u of bank.units) {
      if (scope !== 'all' && scope !== 'unmastered' && u.unitNumber !== scope) continue
      for (const q of u.questions) {
        if (scope === 'unmastered' && progressMap.get(keyFor(q.id))?.mastered) continue
        diffCounts.all++
        diffCounts[q.difficulty ?? 'unrated']++
      }
    }
    const ratedCount = diffCounts.easy + diffCounts.medium + diffCounts.hard

    // "Not yet mastered": questions not yet counted in the mastery map. Shown only when we can
    // track it (signed in, subject known); shrinks as questions are mastered.
    let unmasteredCount = 0
    if (tracksMastery) {
      for (const u of bank.units) for (const q of u.questions) if (!progressMap.get(keyFor(q.id))?.mastered) unmasteredCount++
    }

    return (
      <div>
        <div className="flex items-baseline justify-between gap-3 flex-wrap mb-5">
          <h2 className="font-display text-2xl font-bold">Practice Questions</h2>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {bank.units.length} units · {bank.units.reduce((n, u) => n + u.questions.length, 0)} questions
          </span>
        </div>

        {/* Scope: all units or one unit */}
        <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--text-muted)' }}>
          1 · Choose what to practice
        </p>
        <div className="grid gap-2 [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))]">
          <ScopeCard
            active={scope === 'all'}
            title="All units"
            subtitle="Mix questions from the whole course"
            badge="Mix"
            onClick={() => setScope('all')}
          />
          {tracksMastery && (
            <ScopeCard
              active={scope === 'unmastered'}
              title="Not yet mastered"
              subtitle={
                unmasteredCount === 0
                  ? 'All questions mastered 🎉'
                  : `${unmasteredCount} question${unmasteredCount === 1 ? '' : 's'} left to master`
              }
              badge="★"
              onClick={() => setScope('unmastered')}
            />
          )}
          {bank.units.map((u) => (
            <ScopeCard
              key={u.unitNumber}
              active={scope === u.unitNumber}
              title={u.title}
              subtitle={`${u.questions.length} questions`}
              badge={String(u.unitNumber)}
              onClick={() => setScope(u.unitNumber)}
            />
          ))}
        </div>

        {/* Difficulty + length + start */}
        <div className="flex flex-wrap items-end gap-x-8 gap-y-4 mt-7">
          {ratedCount > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-2.5" style={{ color: 'var(--text-muted)' }}>
                2 · Difficulty
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {(['all', 'easy', 'medium', 'hard', 'unrated'] as DifficultyFilter[]).map((d) => {
                  const meta = d === 'all' ? null : DIFF_META[d]
                  const count = diffCounts[d]
                  const active = difficulty === d
                  if (d === 'unrated' && count === 0) return null
                  return (
                    <button
                      key={d}
                      onClick={() => setDifficulty(d)}
                      disabled={count === 0}
                      className="px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all border disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{
                        backgroundColor: active ? (meta?.bg ?? 'var(--accent)') : 'var(--surface)',
                        color: active ? (meta?.color ?? 'var(--accent-ink)') : 'var(--text)',
                        borderColor: active ? (meta?.color ?? 'var(--accent)') : 'var(--hairline)',
                      }}
                    >
                      {meta?.label ?? 'All'}
                      <span className="ml-1.5 text-xs font-normal opacity-70">{count}</span>
                    </button>
                  )
                })}
              </div>
              {diffCounts.unrated > 0 && (
                <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
                  {ratedCount} of {diffCounts.all} questions have a difficulty rating; the other {diffCounts.unrated} haven't been rated yet.
                </p>
              )}
            </div>
          )}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-2.5" style={{ color: 'var(--text-muted)' }}>
              3 · Length
            </p>
            <div className="flex items-center gap-2">
              {LENGTH_OPTIONS.map((n) => (
                <button
                  key={n}
                  onClick={() => setLength(n)}
                  className="px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all border"
                  style={{
                    backgroundColor: length === n ? 'var(--accent)' : 'var(--surface)',
                    color: length === n ? 'var(--accent-ink)' : 'var(--text)',
                    borderColor: length === n ? 'var(--accent)' : 'var(--hairline)',
                  }}
                >
                  {n === 0 ? 'All' : n}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={start}
            disabled={pool.length === 0}
            className="px-7 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
          >
            Start · {length > 0 ? Math.min(length, pool.length) : pool.length} questions
          </button>
        </div>

        <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
          Tip: answer with keys <Kbd>A</Kbd>–<Kbd>D</Kbd> or <Kbd>1</Kbd>–<Kbd>4</Kbd>, advance with <Kbd>Enter</Kbd>.
        </p>
      </div>
    )
  }

  /* ---------------- SUMMARY ---------------- */
  if (phase === 'summary') {
    const correct = records.filter((r) => r.selected === r.item.question.correctAnswer)
    const missed = records.filter((r) => r.selected !== r.item.question.correctAnswer)
    const pct = records.length === 0 ? 0 : Math.round((correct.length / records.length) * 100)

    const byUnit = new Map<number, { title: string; correct: number; total: number }>()
    for (const r of records) {
      const e = byUnit.get(r.item.unitNumber) ?? { title: r.item.unitTitle, correct: 0, total: 0 }
      e.total++
      if (r.selected === r.item.question.correctAnswer) e.correct++
      byUnit.set(r.item.unitNumber, e)
    }
    const unitRows = [...byUnit.entries()].sort(([a], [b]) => a - b)

    return (
      <div>
        <div
          className="rounded-2xl border p-8 text-center"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
        >
          <div className="text-5xl mb-3">{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}</div>
          <div className="font-display text-4xl font-bold">
            {correct.length} / {records.length}
          </div>
          <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
            {pct}% correct{bestStreak >= 3 ? ` · best streak ${bestStreak} 🔥` : ''}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            {missed.length > 0 && (
              <button
                onClick={() => startQuiz(shuffle(missed.map((m) => m.item)))}
                className="px-6 py-2.5 rounded-lg font-semibold text-sm cursor-pointer transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                Retry {missed.length} missed
              </button>
            )}
            <button
              onClick={start}
              className="px-6 py-2.5 rounded-lg font-semibold text-sm cursor-pointer border transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
            >
              New set
            </button>
            <button
              onClick={() => setPhase('setup')}
              className="px-6 py-2.5 rounded-lg font-semibold text-sm cursor-pointer border transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
            >
              Change setup
            </button>
          </div>
        </div>

        {scope === 'all' && unitRows.length > 1 && (
          <div
            className="rounded-2xl border p-5 mt-4"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--text-muted)' }}>
              By unit
            </p>
            <div className="space-y-2.5">
              {unitRows.map(([n, row]) => (
                <div key={n} className="flex items-center gap-3">
                  <span className="text-xs font-semibold w-40 flex-shrink-0 truncate" title={row.title}>
                    Unit {n}: {row.title}
                  </span>
                  <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: 'color-mix(in srgb, var(--text) 10%, transparent)' }}>
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${row.total === 0 ? 0 : (row.correct / row.total) * 100}%`,
                        backgroundColor: row.correct === row.total ? 'var(--success)' : 'var(--accent)',
                      }}
                    />
                  </div>
                  <span className="text-xs w-10 text-right" style={{ color: 'var(--text-muted)' }}>
                    {row.correct}/{row.total}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {missed.length > 0 && (
          <div className="mt-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>
              Review what you missed
            </p>
            {missed.map((m, i) => (
              <div
                key={`${m.item.question.id}-${i}`}
                className="rounded-xl border p-4"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
              >
                <MathText className="text-sm font-semibold" component="p">
                  {m.item.question.question}
                </MathText>
                <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2 text-xs">
                  <span style={{ color: 'var(--error)' }}>
                    Your answer: {String.fromCharCode(65 + m.selected)} — <MathText component="span">{m.item.question.options[m.selected]}</MathText>
                  </span>
                  <span style={{ color: 'var(--success)' }}>
                    Correct: {String.fromCharCode(65 + m.item.question.correctAnswer)} — <MathText component="span">{m.item.question.options[m.item.question.correctAnswer]}</MathText>
                  </span>
                </div>
                <MathText className="text-xs mt-2" component="p" style={{ color: 'var(--text-muted)' }}>
                  {m.item.question.explanation}
                </MathText>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  /* ---------------- QUIZ ---------------- */
  if (!current) return null
  const q = current.question
  const answered = records.length
  const score = records.filter((r) => r.selected === r.item.question.correctAnswer).length
  const dMeta = DIFF_META[q.difficulty ?? 'unrated']
  // Per-question mastery progress, so students see exactly when this question will count.
  const qProgress = tracksMastery ? progressMap.get(keyFor(q.id)) : undefined
  const qTier = tierOf(qProgress)
  const qToMaster = correctToMaster(qProgress)
  const qCorrect = qProgress?.correctTotal ?? 0
  const TIER_LABEL: Record<typeof qTier, string> = {
    mastered: 'Mastered',
    proficient: 'Proficient',
    approaching: 'Approaching',
    none: 'Not started',
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
        <button
          onClick={() => setPhase('setup')}
          className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:opacity-70 transition-opacity"
          style={{ color: 'var(--text-muted)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Exit
        </button>
        <div className="flex items-center gap-3">
          {streak >= 3 && (
            <span className="text-sm font-bold" style={{ color: 'var(--warning)' }}>
              🔥 {streak}
            </span>
          )}
          <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
            Score: {score}/{answered}
          </span>
          <span
            className="text-sm font-bold px-3 py-1 rounded-full"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
          >
            {idx + 1} / {quiz.length}
          </span>
        </div>
      </div>

      <div className="w-full rounded-full h-1.5 mb-6" style={{ backgroundColor: 'color-mix(in srgb, var(--text) 10%, transparent)' }}>
        <div
          className="h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${((idx + (selected !== null ? 1 : 0)) / quiz.length) * 100}%`, backgroundColor: 'var(--accent)' }}
        />
      </div>

      <div className="rounded-2xl border overflow-hidden shadow-sm" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}>
        <div className="px-6 py-3.5 flex items-center justify-between gap-3" style={{ backgroundColor: 'var(--accent)' }}>
          <h3 className="text-xs font-bold uppercase tracking-wide truncate" style={{ color: 'var(--accent-ink)' }}>
            Unit {current.unitNumber}: {current.unitTitle}
          </h3>
          <span
            className="text-[11px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
            style={
              q.difficulty
                ? { backgroundColor: dMeta.bg, color: dMeta.color }
                : {
                    backgroundColor: 'color-mix(in srgb, var(--accent-ink) 14%, transparent)',
                    color: 'var(--accent-ink)',
                    opacity: 0.85,
                  }
            }
          >
            {dMeta.label}
          </span>
        </div>

        <div className="p-6">
          {tracksMastery && (
            <div
              className="flex items-center justify-between gap-3 mb-5 px-3 py-2 rounded-lg border"
              style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
            >
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="flex items-center gap-1" aria-hidden>
                  {[0, 1, 2].map((k) => (
                    <span
                      key={k}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: qCorrect > k ? 'var(--accent)' : 'color-mix(in srgb, var(--text) 15%, transparent)' }}
                    />
                  ))}
                </span>
                <span style={{ color: qTier === 'mastered' ? 'var(--accent)' : 'var(--text)' }}>
                  {TIER_LABEL[qTier]}
                </span>
              </div>
              <span className="text-xs text-right" style={{ color: qTier === 'mastered' ? 'var(--accent)' : 'var(--text-muted)' }}>
                {qTier === 'mastered'
                  ? '✓ Counts toward your mastery'
                  : `${qToMaster} correct in a row to master`}
              </span>
            </div>
          )}
          <MathText className="text-lg font-semibold mb-6" component="p">
            {q.question}
          </MathText>

          <div className="space-y-3">
            {q.options.map((option, i) => {
              let cls = 'border rounded-lg p-4 cursor-pointer transition-all text-left w-full'
              let style: React.CSSProperties = { backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }
              if (selected !== null) {
                if (i === q.correctAnswer) {
                  cls += ' ring-2'
                  style = { backgroundColor: 'var(--success-bg)', borderColor: 'var(--success)', ['--tw-ring-color' as string]: 'var(--success)' } as React.CSSProperties
                } else if (i === selected) {
                  cls += ' ring-2'
                  style = { backgroundColor: 'var(--error-bg)', borderColor: 'var(--error)', ['--tw-ring-color' as string]: 'var(--error)' } as React.CSSProperties
                }
              } else {
                cls += ' hover:shadow-md hover:-translate-y-px'
              }
              return (
                <button key={i} onClick={() => answer(i)} className={cls} style={style} disabled={selected !== null}>
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <MathText className="text-sm pt-1" component="span">
                      {option}
                    </MathText>
                  </div>
                </button>
              )
            })}
          </div>

          {selected !== null && (
            <div
              className="mt-6 p-4 rounded-lg border"
              style={{
                backgroundColor: selected === q.correctAnswer ? 'var(--success-bg)' : 'var(--error-bg)',
                borderColor: selected === q.correctAnswer ? 'var(--success)' : 'var(--error)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{selected === q.correctAnswer ? '✅' : '❌'}</span>
                <span className="font-bold text-sm">
                  {selected === q.correctAnswer
                    ? 'Correct!'
                    : `Incorrect — Answer: ${String.fromCharCode(65 + q.correctAnswer)}`}
                </span>
              </div>
              <MathText className="text-sm" component="p" style={{ color: 'var(--text)' }}>
                {q.explanation}
              </MathText>
            </div>
          )}

          <div className="flex items-center justify-between mt-6">
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              <Kbd>A</Kbd>–<Kbd>D</Kbd> answer · <Kbd>Enter</Kbd> next
            </span>
            <button
              onClick={next}
              disabled={selected === null}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              {idx < quiz.length - 1 ? 'Next →' : 'Finish'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScopeCard({
  active,
  title,
  subtitle,
  badge,
  onClick,
}: {
  active: boolean
  title: string
  subtitle: string
  badge: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-start gap-3 p-3.5 rounded-xl border text-left cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2"
      style={{
        backgroundColor: active ? 'color-mix(in srgb, var(--accent) 12%, var(--surface))' : 'var(--surface)',
        borderColor: active ? 'var(--accent)' : 'var(--hairline)',
        ['--tw-ring-color' as string]: 'var(--accent)',
      } as React.CSSProperties}
    >
      <span
        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
        style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
      >
        {badge}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-snug">{title}</span>
        <span className="block text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
          {subtitle}
        </span>
      </span>
    </button>
  )
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd
      className="px-1.5 py-0.5 rounded text-[11px] font-semibold border"
      style={{ backgroundColor: 'color-mix(in srgb, var(--text) 6%, transparent)', borderColor: 'var(--hairline)' }}
    >
      {children}
    </kbd>
  )
}
