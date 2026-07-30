import { useEffect, useRef, useState } from 'react'

interface Props {
  section: string
  phase: string
  onOpenReference: () => void
  onToggleCalculator: () => void
  onPause: () => void
  calculatorOpen: boolean
  /** When true, the clock holds — used while the student reviews an explanation. */
  paused?: boolean
  /** When provided, shows an "End" button to finish the run early (practice only). */
  onEnd?: () => void
}

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

/** The on-test command bar: section identity, a running clock, calculator note, and reference. */
export default function TestToolbar({
  section,
  phase,
  onOpenReference,
  onToggleCalculator,
  onPause,
  calculatorOpen,
  paused = false,
  onEnd,
}: Props) {
  const [seconds, setSeconds] = useState(0)
  const pausedRef = useRef(paused)
  pausedRef.current = paused

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setSeconds((s) => s + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      style={{
        maxWidth: 720,
        margin: '0 auto 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        flexWrap: 'wrap',
        padding: '10px 14px',
        backgroundColor: 'var(--surface-elevated)',
        border: '1px solid var(--hairline)',
        borderRadius: 'var(--radius-card)',
      }}
    >
      {/* Section identity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 34,
            height: 34,
            borderRadius: 'var(--radius-input)',
            backgroundColor: 'var(--accent)',
            color: 'var(--accent-ink)',
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7h3m10 0h3M4 12h16M7 17h3m4 0h3M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1z" />
          </svg>
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }}>{section}</div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {phase}
          </div>
        </div>
      </div>

      {/* Tools */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            fontVariantNumeric: 'tabular-nums',
            fontSize: 14,
            fontWeight: 700,
            color: paused ? 'var(--text-muted)' : 'var(--text)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--hairline)',
            backgroundColor: 'var(--surface)',
          }}
          title={paused ? 'Timer paused while you review' : 'Time on this attempt'}
          aria-label={`Time elapsed ${formatTime(seconds)}${paused ? ', paused' : ''}`}
        >
          <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2.5 2.5M9 2h6" />
          </svg>
          {formatTime(seconds)}
        </span>

        <button
          onClick={onToggleCalculator}
          aria-pressed={calculatorOpen}
          title="A graphing calculator is allowed on every Math question."
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            fontSize: 13,
            fontWeight: 700,
            padding: '7px 13px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--accent)',
            backgroundColor: calculatorOpen ? 'var(--accent)' : 'transparent',
            color: calculatorOpen ? 'var(--accent-ink)' : 'var(--accent)',
            cursor: 'pointer',
          }}
        >
          <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h4" />
          </svg>
          Calculator
        </button>

        <button
          onClick={onOpenReference}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            fontSize: 13,
            fontWeight: 700,
            padding: '7px 13px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--accent)',
            backgroundColor: 'transparent',
            color: 'var(--accent)',
            cursor: 'pointer',
          }}
        >
          <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Reference
        </button>

        <button
          onClick={onPause}
          title="Pause and hide the question"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            fontSize: 13,
            fontWeight: 700,
            padding: '7px 13px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--hairline)',
            backgroundColor: 'var(--surface)',
            color: 'var(--text)',
            cursor: 'pointer',
          }}
        >
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
          Pause
        </button>

        {onEnd && (
          <button
            onClick={onEnd}
            title="End now and grade the questions you've completed"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              fontSize: 13,
              fontWeight: 700,
              padding: '7px 13px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--error, #e5484d)',
              backgroundColor: 'transparent',
              color: 'var(--error, #e5484d)',
              cursor: 'pointer',
            }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 9h6v6H9z" />
            </svg>
            End
          </button>
        )}
      </div>
    </div>
  )
}
