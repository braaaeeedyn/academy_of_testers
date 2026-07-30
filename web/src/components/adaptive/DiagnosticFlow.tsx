import { useEffect, useRef, useState } from 'react'
import QuestionCard, { type Feedback } from './QuestionCard'
import TestToolbar from './TestToolbar'
import ReferenceSheet from './ReferenceSheet'
import DesmosCalculator from './DesmosCalculator'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'
import { startDiagnostic, answerDiagnostic } from '../../services/api'
import type { AdaptiveQuestion } from '../../types/adaptive'

interface Props {
  onComplete: () => void
}

/** The one-time 24-question diagnostic. */
export default function DiagnosticFlow({ onComplete }: Props) {
  const [question, setQuestion] = useState<AdaptiveQuestion | null>(null)
  const [number, setNumber] = useState(1)
  const [total, setTotal] = useState(24)
  const [selected, setSelected] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [referenceOpen, setReferenceOpen] = useState(false)
  const [calculatorOpen, setCalculatorOpen] = useState(false)
  const [paused, setPaused] = useState(false)
  const pendingNext = useRef<AdaptiveQuestion | null>(null)
  const pendingNumber = useRef(2)
  const started = useRef(false)
  const reduce = usePrefersReducedMotion()

  useEffect(() => {
    // Guard against React StrictMode's double-invoked mount effect, which would
    // otherwise fire two concurrent start() calls and race on the attempt insert.
    if (started.current) return
    started.current = true
    startDiagnostic()
      .then((step) => {
        setQuestion(step.question)
        setNumber(step.questionNumber)
        setTotal(step.total)
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const submit = async (index: number) => {
    if (!question || busy) return
    setSelected(index)
    setBusy(true)
    try {
      const res = await answerDiagnostic(question.id, index)
      setFeedback({ correct: res.correct, correctIndex: res.correctIndex, explanation: res.explanation })
      // stash next for the Next click
      pendingNext.current = res.complete ? null : res.nextQuestion
      pendingNumber.current = res.questionNumber
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setBusy(false)
    }
  }

  const next = () => {
    if (pendingNext.current === null) {
      onComplete()
      return
    }
    setQuestion(pendingNext.current)
    setNumber(pendingNumber.current)
    setSelected(null)
    setFeedback(null)
  }

  if (loading) return <Centered>Loading diagnostic…</Centered>
  if (error) return <Centered>Something went wrong: {error}</Centered>
  if (!question) return <Centered>Diagnostic complete.</Centered>

  const pct = Math.round(((number - 1) / total) * 100)

  return (
    <div>
      {!reduce && (
        <style>{`@keyframes aotQIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
      )}

      <TestToolbar
        section="SAT Math"
        phase="Diagnostic"
        paused={feedback !== null || paused}
        onOpenReference={() => setReferenceOpen(true)}
        calculatorOpen={calculatorOpen}
        onToggleCalculator={() => setCalculatorOpen((o) => !o)}
        onPause={() => setPaused(true)}
      />

      <div style={{ maxWidth: 720, margin: '0 auto 16px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--text-muted)',
          }}
        >
          <span>Question {number} of {total}</span>
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>{pct}% complete</span>
        </div>
        <div style={{ height: 6, backgroundColor: 'var(--surface)', borderRadius: 999, overflow: 'hidden' }}>
          <div
            style={{
              width: `${pct}%`,
              height: '100%',
              backgroundColor: 'var(--accent)',
              transition: reduce ? 'none' : 'width 0.4s ease',
            }}
          />
        </div>
      </div>

      <div
        key={question.id}
        style={reduce ? undefined : { animation: 'aotQIn 0.28s ease both' }}
      >
        <QuestionCard
          question={question}
          selectedIndex={selected}
          feedback={feedback}
          onSelect={submit}
          onNext={next}
          progressLabel="Choose 1 answer"
          nextLabel={feedback && pendingNext.current === null ? 'See my results' : 'Next question'}
          inputLocked={paused}
        />
      </div>

      <ReferenceSheet open={referenceOpen} onClose={() => setReferenceOpen(false)} />
      <DesmosCalculator open={calculatorOpen} onClose={() => setCalculatorOpen(false)} />

      {paused && (
        <div
          role="dialog"
          aria-label="Diagnostic paused"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 24,
            backgroundColor: 'color-mix(in srgb, var(--bg) 55%, transparent)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: 'var(--accent)',
              color: 'var(--accent-ink)',
              marginBottom: 20,
            }}
          >
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>
            Diagnostic is paused
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, maxWidth: 380, marginBottom: 24 }}>
            The question is hidden and your timer is stopped. Resume when you're ready to keep going.
          </p>
          <button
            onClick={() => setPaused(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '13px 30px',
              borderRadius: 'var(--radius-btn)',
              border: 'none',
              backgroundColor: 'var(--accent)',
              color: 'var(--accent-ink)',
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer',
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Resume diagnostic
          </button>
        </div>
      )}
    </div>
  )
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>{children}</div>
  )
}
