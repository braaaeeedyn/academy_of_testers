import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { getMastery, getSessionSummary, type PracticeConfig } from '../services/api'
import type { SkillWeight } from '../types/adaptive'
import DiagnosticFlow from '../components/adaptive/DiagnosticFlow'
import AdaptiveSession from '../components/adaptive/AdaptiveSession'
import SessionSummary from '../components/adaptive/SessionSummary'
import SatDashboard from '../components/adaptive/SatDashboard'
import LoadingScreen from '../components/LoadingScreen'

type Phase = 'dashboard' | 'diagnostic' | 'session' | 'summary'

export default function SatAdaptivePage() {
  const { isAuthenticated, isLoading: authLoading } = useAuth()
  const [phase, setPhase] = useState<Phase>('dashboard')
  const [config, setConfig] = useState<PracticeConfig>({})
  const [weights, setWeights] = useState<SkillWeight[]>([])
  const [prevWeights, setPrevWeights] = useState<SkillWeight[] | undefined>()
  const [summary, setSummary] = useState<{ total: number; correct: number } | null>(null)

  const startPractice = async (cfg: PracticeConfig = {}) => {
    setConfig(cfg)
    // Snapshot mastery so the summary can show a before/after comparison.
    try {
      setPrevWeights(await getMastery())
    } catch {
      setPrevWeights(undefined)
    }
    setPhase('session')
  }

  if (authLoading) {
    return <Shell><LoadingScreen message="Loading" /></Shell>
  }

  if (!isAuthenticated) {
    return (
      <Shell>
        <Hero />
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: 16 }}>
            Sign in to see your dashboard, take your diagnostic, and start adaptive practice.
          </p>
          <Link to="/login" style={primaryBtn}>Sign in</Link>
        </div>
      </Shell>
    )
  }

  if (phase === 'diagnostic') {
    return (
      <Shell>
        <DiagnosticFlow onComplete={() => setPhase('dashboard')} />
      </Shell>
    )
  }

  if (phase === 'session') {
    return (
      <Shell>
        <AdaptiveSession
          config={config}
          onNeedsDiagnostic={() => setPhase('diagnostic')}
          onComplete={async (sessionId, w) => {
            setWeights(w)
            try {
              const s = await getSessionSummary(sessionId)
              setSummary({ total: s.total, correct: s.correct })
            } catch {
              setSummary({ total: 10, correct: 0 })
            }
            setPhase('summary')
          }}
        />
      </Shell>
    )
  }

  if (phase === 'summary' && summary) {
    return (
      <Shell>
        <SessionSummary
          total={summary.total}
          correct={summary.correct}
          weights={weights}
          previous={prevWeights}
          onPractice={() => startPractice(config)}
          onDone={() => setPhase('dashboard')}
        />
      </Shell>
    )
  }

  // dashboard (default landing)
  return (
    <Shell wide>
      <SatDashboard
        onStartDiagnostic={() => setPhase('diagnostic')}
        onStartPractice={startPractice}
      />
    </Shell>
  )
}

function Hero() {
  return (
    <div style={{ textAlign: 'center', marginBottom: 8 }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--text)', marginBottom: 8 }}>
        SAT Academy · Adaptive Practice
      </h1>
      <p style={{ color: 'var(--text-muted)' }}>
        Personalized to your mastery, one question at a time.
      </p>
    </div>
  )
}

function Shell({ children, wide }: { children: React.ReactNode; wide?: boolean }) {
  return <div style={{ maxWidth: wide ? 1440 : 860, margin: '0 auto', padding: '12px 0 40px' }}>{children}</div>
}

const primaryBtn: React.CSSProperties = {
  display: 'inline-block',
  padding: '13px 30px',
  borderRadius: 'var(--radius-btn)',
  border: 'none',
  backgroundColor: 'var(--accent)',
  color: 'var(--accent-ink)',
  fontWeight: 700,
  fontSize: 15,
  cursor: 'pointer',
  textDecoration: 'none',
}
