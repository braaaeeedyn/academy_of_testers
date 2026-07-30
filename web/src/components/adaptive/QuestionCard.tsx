import { useEffect, useRef, useState } from 'react'
import MathText from '../MathText'
import type { AdaptiveQuestion } from '../../types/adaptive'

export interface Feedback {
  correct: boolean
  correctIndex: number
  explanation: string
}

interface Props {
  question: AdaptiveQuestion
  selectedIndex: number | null
  feedback: Feedback | null
  onSelect: (index: number) => void
  onNext: () => void
  progressLabel: string
  nextLabel?: string
  /** Freezes selection and keyboard input (e.g. while the diagnostic is paused). */
  inputLocked?: boolean
}

/** Renders one multiple-choice question with LaTeX, answer elimination, and feedback. */
export default function QuestionCard({
  question,
  selectedIndex,
  feedback,
  onSelect,
  onNext,
  progressLabel,
  nextLabel = 'Next',
  inputLocked = false,
}: Props) {
  const answered = feedback !== null
  const [eliminated, setEliminated] = useState<Set<number>>(new Set())

  // Clear cross-outs whenever a new question loads.
  useEffect(() => {
    setEliminated(new Set())
  }, [question.id])

  const toggleEliminated = (i: number) => {
    setEliminated((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  const select = (i: number) => {
    if (answered || inputLocked) return
    // Selecting a crossed-out choice restores it first.
    if (eliminated.has(i)) toggleEliminated(i)
    onSelect(i)
  }

  // Keyboard: A–D / 1–4 to answer, Enter to advance. Refs keep the handler stable.
  const stateRef = useRef({ answered, optionCount: question.options.length, locked: inputLocked })
  stateRef.current = { answered, optionCount: question.options.length, locked: inputLocked }
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return
      const { answered: isAnswered, optionCount, locked } = stateRef.current
      if (locked) return
      if (isAnswered) {
        if (e.key === 'Enter') {
          e.preventDefault()
          onNext()
        }
        return
      }
      let idx = -1
      if (/^[a-dA-D]$/.test(e.key)) idx = e.key.toLowerCase().charCodeAt(0) - 97
      else if (/^[1-4]$/.test(e.key)) idx = Number(e.key) - 1
      if (idx >= 0 && idx < optionCount) {
        e.preventDefault()
        select(idx)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onNext])

  const optionStyle = (i: number): React.CSSProperties => {
    const base: React.CSSProperties = {
      borderColor: 'var(--hairline)',
      backgroundColor: 'var(--surface)',
      color: 'var(--text)',
    }
    if (!answered) {
      if (i === selectedIndex) {
        return { ...base, borderColor: 'var(--accent)', backgroundColor: 'var(--surface-elevated)' }
      }
      return base
    }
    if (i === feedback!.correctIndex) {
      return { ...base, borderColor: 'var(--success)', backgroundColor: 'var(--success-bg)', color: 'var(--success-ink)' }
    }
    if (i === selectedIndex) {
      return { ...base, borderColor: 'var(--error)', backgroundColor: 'var(--error-bg)', color: 'var(--error-ink)' }
    }
    return { ...base, opacity: 0.6 }
  }

  return (
    <div
      style={{
        backgroundColor: 'var(--surface-elevated)',
        border: '1px solid var(--hairline)',
        borderRadius: 'var(--radius-card)',
        padding: '28px',
        maxWidth: 720,
        margin: '0 auto',
      }}
    >
      <div className="flex items-center justify-between" style={{ marginBottom: 18 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)' }}>
          {progressLabel}
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--accent)',
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--hairline)',
            borderRadius: 'var(--radius-pill)',
            padding: '4px 12px',
          }}
        >
          {question.skillName}
        </span>
      </div>

      <MathText component="div" style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--text)', marginBottom: 22 }}>
        {question.stem}
      </MathText>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {question.options.map((opt, i) => {
          const isEliminated = !answered && eliminated.has(i)
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'stretch',
                border: '1.5px solid',
                borderRadius: 'var(--radius-input)',
                overflow: 'hidden',
                transition: 'all 0.15s',
                ...optionStyle(i),
              }}
            >
              <button
                onClick={() => select(i)}
                disabled={answered}
                aria-pressed={i === selectedIndex}
                style={{
                  flex: 1,
                  minWidth: 0,
                  textAlign: 'left',
                  padding: '14px 16px',
                  border: 'none',
                  background: 'transparent',
                  color: 'inherit',
                  cursor: answered ? 'default' : 'pointer',
                  display: 'flex',
                  gap: 12,
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    opacity: isEliminated ? 0.4 : 0.6,
                    minWidth: 18,
                    textDecoration: isEliminated ? 'line-through' : 'none',
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <MathText
                  component="span"
                  style={{
                    textDecoration: isEliminated ? 'line-through' : 'none',
                    opacity: isEliminated ? 0.5 : 1,
                  }}
                >
                  {opt}
                </MathText>
              </button>

              {!answered && (
                <button
                  onClick={() => toggleEliminated(i)}
                  aria-label={isEliminated ? `Restore choice ${String.fromCharCode(65 + i)}` : `Cross out choice ${String.fromCharCode(65 + i)}`}
                  title={isEliminated ? 'Restore choice' : 'Cross out choice'}
                  style={{
                    flexShrink: 0,
                    width: 44,
                    borderLeft: '1px solid var(--hairline)',
                    background: 'transparent',
                    color: isEliminated ? 'var(--accent)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {isEliminated ? (
                    <span style={{ fontSize: 11, fontWeight: 700 }}>undo</span>
                  ) : (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          )
        })}
      </div>

      {!answered && (
        <div style={{ marginTop: 14, fontSize: 12, color: 'var(--text-muted)' }}>
          Tip: press <Kbd>A</Kbd>–<Kbd>D</Kbd> to answer. Use the line icon to cross out a choice.
        </div>
      )}

      {answered && (
        <div style={{ marginTop: 20 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 15,
              marginBottom: 8,
              color: feedback!.correct ? 'var(--success)' : 'var(--error)',
            }}
          >
            {feedback!.correct ? 'Correct' : 'Incorrect'}
          </div>
          <MathText component="div" style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>
            {feedback!.explanation}
          </MathText>
          <button
            onClick={onNext}
            style={{
              marginTop: 18,
              padding: '11px 24px',
              borderRadius: 'var(--radius-btn)',
              border: 'none',
              backgroundColor: 'var(--accent)',
              color: 'var(--accent-ink)',
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            {nextLabel}
          </button>
        </div>
      )}
    </div>
  )
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd
      style={{
        display: 'inline-block',
        padding: '1px 6px',
        margin: '0 1px',
        fontSize: 11,
        fontWeight: 700,
        fontFamily: 'var(--font-mono, monospace)',
        color: 'var(--text)',
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--hairline)',
        borderRadius: 4,
      }}
    >
      {children}
    </kbd>
  )
}
