import { useEffect, useRef, useState } from 'react'
import QuestionCard, { type Feedback } from './QuestionCard'
import TestToolbar from './TestToolbar'
import ReferenceSheet from './ReferenceSheet'
import DesmosCalculator from './DesmosCalculator'
import LoadingScreen from '../LoadingScreen'
import { startSession, answerSession, endSession, type PracticeConfig } from '../../services/api'
import type { AdaptiveQuestion, SkillWeight } from '../../types/adaptive'

interface Props {
  onComplete: (sessionId: number, weights: SkillWeight[]) => void
  onNeedsDiagnostic: () => void
  /** How to build the run: adaptive by default, or focused/custom via config. */
  config?: PracticeConfig
}

/** A run of adaptively-selected (or custom) questions. */
export default function AdaptiveSession({ onComplete, onNeedsDiagnostic, config }: Props) {
  const [sessionId, setSessionId] = useState<number | null>(null)
  const [question, setQuestion] = useState<AdaptiveQuestion | null>(null)
  const [number, setNumber] = useState(1)
  const [target, setTarget] = useState(10)
  const [selected, setSelected] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [referenceOpen, setReferenceOpen] = useState(false)
  const [calculatorOpen, setCalculatorOpen] = useState(false)
  const [paused, setPaused] = useState(false)
  const [endConfirm, setEndConfirm] = useState(false)
  const [ending, setEnding] = useState(false)
  const startedAt = useRef(Date.now())

  const nextQ = useRef<AdaptiveQuestion | null>(null)
  const nextNum = useRef(2)
  const finalWeights = useRef<SkillWeight[]>([])
  const done = useRef(false)
  const started = useRef(false)

  useEffect(() => {
    // Guard against React StrictMode's double-invoked effect racing two session
    // inserts against the one-open-session constraint.
    if (started.current) return
    started.current = true
    startSession(config ?? {})
      .then((step) => {
        if (step === 'DIAGNOSTIC_REQUIRED') {
          onNeedsDiagnostic()
          return
        }
        setSessionId(step.sessionId)
        setQuestion(step.question)
        setNumber(step.questionNumber)
        setTarget(step.targetLength)
        startedAt.current = Date.now()
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const submit = async (index: number) => {
    if (!question || sessionId === null || busy) return
    setSelected(index)
    setBusy(true)
    try {
      const res = await answerSession(sessionId, question.id, index, Date.now() - startedAt.current)
      setFeedback({ correct: res.correct, correctIndex: res.correctIndex, explanation: res.explanation })
      finalWeights.current = res.updatedWeights
      done.current = res.complete
      nextQ.current = res.nextQuestion
      nextNum.current = res.questionNumber
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setBusy(false)
    }
  }

  const next = () => {
    if (done.current || nextQ.current === null) {
      onComplete(sessionId!, finalWeights.current)
      return
    }
    setQuestion(nextQ.current)
    setNumber(nextNum.current)
    setSelected(null)
    setFeedback(null)
    startedAt.current = Date.now()
  }

  const endEarly = async () => {
    if (sessionId === null || ending) return
    setEnding(true)
    try {
      const weights = await endSession(sessionId)
      onComplete(sessionId, weights)
    } catch (e) {
      setError((e as Error).message)
      setEnding(false)
      setEndConfirm(false)
    }
  }

  if (loading) return <LoadingScreen message="Starting session" />
  if (error) return <Centered>Something went wrong: {error}</Centered>
  if (!question) return <Centered>Session ready.</Centered>

  const pct = Math.round(((number - 1) / target) * 100)
  const lastQuestion = done.current || nextQ.current === null
  // Questions graded so far: the current one counts only once its feedback is showing.
  const answered = feedback !== null ? number : number - 1

  return (
    <div>
      <TestToolbar
        section="SAT Math"
        phase="Practice"
        paused={feedback !== null || paused || endConfirm}
        onOpenReference={() => setReferenceOpen(true)}
        calculatorOpen={calculatorOpen}
        onToggleCalculator={() => setCalculatorOpen((o) => !o)}
        onPause={() => setPaused(true)}
        onEnd={() => setEndConfirm(true)}
      />

      <div style={{ maxWidth: 720, margin: '0 auto 20px' }}>
        <div style={{ height: 6, backgroundColor: 'var(--surface)', borderRadius: 999, overflow: 'hidden' }}>
          <div style={{ width: `${pct}%`, height: '100%', backgroundColor: 'var(--accent)', transition: 'width 0.4s ease' }} />
        </div>
      </div>

      <QuestionCard
        question={question}
        selectedIndex={selected}
        feedback={feedback}
        onSelect={submit}
        onNext={next}
        progressLabel={`Practice · Question ${number} of ${target}`}
        nextLabel={feedback && lastQuestion ? 'See my results' : 'Next question'}
        inputLocked={paused}
      />

      <ReferenceSheet open={referenceOpen} onClose={() => setReferenceOpen(false)} />
      <DesmosCalculator open={calculatorOpen} onClose={() => setCalculatorOpen(false)} />

      {paused && (
        <Overlay label="Practice paused">
          <IconCircle>
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          </IconCircle>
          <h2 style={overlayTitle}>Practice is paused</h2>
          <p style={overlayText}>
            The question is hidden and your timer is stopped. Resume when you're ready to keep going.
          </p>
          <button onClick={() => setPaused(false)} style={overlayPrimaryBtn}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Resume practice
          </button>
        </Overlay>
      )}

      {endConfirm && (
        <Overlay label="End practice session">
          <IconCircle>
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 9h6v6H9z" />
            </svg>
          </IconCircle>
          <h2 style={overlayTitle}>End this session?</h2>
          <p style={overlayText}>
            {answered > 0
              ? `You'll be graded on the ${answered} question${answered === 1 ? '' : 's'} you've completed so far.`
              : "You haven't completed any questions yet — you can keep practicing instead."}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button onClick={endEarly} disabled={ending} style={{ ...overlayPrimaryBtn, opacity: ending ? 0.6 : 1, cursor: ending ? 'default' : 'pointer' }}>
              {ending ? 'Ending…' : answered > 0 ? 'End & see results' : 'End session'}
            </button>
            <button onClick={() => setEndConfirm(false)} disabled={ending} style={overlayGhostBtn}>
              Keep practicing
            </button>
          </div>
        </Overlay>
      )}
    </div>
  )
}

function Centered({ children }: { children: React.ReactNode }) {
  return <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>{children}</div>
}

function Overlay({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      role="dialog"
      aria-label={label}
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
      {children}
    </div>
  )
}

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </div>
  )
}

const overlayTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 30,
  fontWeight: 700,
  color: 'var(--text)',
  marginBottom: 10,
}

const overlayText: React.CSSProperties = {
  color: 'var(--text-muted)',
  fontSize: 15,
  lineHeight: 1.6,
  maxWidth: 380,
  marginBottom: 24,
}

const overlayPrimaryBtn: React.CSSProperties = {
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
}

const overlayGhostBtn: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '13px 30px',
  borderRadius: 'var(--radius-btn)',
  border: '1px solid var(--hairline)',
  backgroundColor: 'transparent',
  color: 'var(--text)',
  fontWeight: 700,
  fontSize: 15,
  cursor: 'pointer',
}
