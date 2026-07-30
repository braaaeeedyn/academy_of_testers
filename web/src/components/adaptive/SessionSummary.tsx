import MasteryRadar from './MasteryRadar'
import type { SkillWeight } from '../../types/adaptive'

interface Props {
  total: number
  correct: number
  weights: SkillWeight[]
  previous?: SkillWeight[]
  onPractice: () => void
  onDone: () => void
}

export default function SessionSummary({ total, correct, weights, previous, onPractice, onDone }: Props) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--text)', marginBottom: 6 }}>
        Session complete
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
        You got <strong style={{ color: 'var(--accent)' }}>{correct}</strong> of {total} correct ({pct}%).
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <MasteryRadar weights={weights} previous={previous} />
      </div>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={onPractice}
          style={{
            padding: '12px 26px',
            borderRadius: 'var(--radius-btn)',
            border: 'none',
            backgroundColor: 'var(--accent)',
            color: 'var(--accent-ink)',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Practice again
        </button>
        <button
          onClick={onDone}
          style={{
            padding: '12px 26px',
            borderRadius: 'var(--radius-btn)',
            border: '1px solid var(--hairline)',
            backgroundColor: 'transparent',
            color: 'var(--text)',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Back to dashboard
        </button>
      </div>
    </div>
  )
}
