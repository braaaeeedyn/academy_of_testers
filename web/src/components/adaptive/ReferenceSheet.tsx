import { useEffect } from 'react'
import MathText from '../MathText'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

interface Props {
  open: boolean
  onClose: () => void
}

interface Formula {
  label: string
  latex: string
}

const AREA: Formula[] = [
  { label: 'Circle area', latex: 'A = \\pi r^2' },
  { label: 'Circle circumference', latex: 'C = 2\\pi r' },
  { label: 'Rectangle area', latex: 'A = \\ell w' },
  { label: 'Triangle area', latex: 'A = \\tfrac{1}{2}\\,b h' },
]

const TRIANGLES: Formula[] = [
  { label: 'Pythagorean theorem', latex: 'c^2 = a^2 + b^2' },
  { label: '30°–60°–90° triangle', latex: 'x,\\ x\\sqrt{3},\\ 2x' },
  { label: '45°–45°–90° triangle', latex: 's,\\ s,\\ s\\sqrt{2}' },
]

const VOLUME: Formula[] = [
  { label: 'Rectangular solid', latex: 'V = \\ell w h' },
  { label: 'Cylinder', latex: 'V = \\pi r^2 h' },
  { label: 'Sphere', latex: 'V = \\tfrac{4}{3}\\pi r^3' },
  { label: 'Cone', latex: 'V = \\tfrac{1}{3}\\pi r^2 h' },
  { label: 'Pyramid', latex: 'V = \\tfrac{1}{3}\\ell w h' },
]

const FACTS = [
  'There are 360 degrees of arc in a circle.',
  'There are \\(2\\pi\\) radians of arc in a circle.',
  'The measures of the angles in a triangle sum to 180 degrees.',
]

function FormulaGroup({ title, items }: { title: string; items: Formula[] }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        {items.map((f) => (
          <div
            key={f.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              padding: '10px 14px',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--hairline)',
              borderRadius: 'var(--radius-input)',
            }}
          >
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{f.label}</span>
            <MathText component="span" style={{ fontSize: 15, color: 'var(--text)' }}>
              {`\\(${f.latex}\\)`}
            </MathText>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Slide-in panel with the SAT Math reference formulas, mirroring the on-test reference sheet. */
export default function ReferenceSheet({ open, onClose }: Props) {
  const reduce = usePrefersReducedMotion()
  const transition = reduce ? 'none' : 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)'

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden={!open}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          opacity: open ? 1 : 0,
          transition: reduce ? 'none' : 'opacity 0.28s ease',
          pointerEvents: open ? 'auto' : 'none',
          zIndex: 60,
        }}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="SAT Math reference sheet"
        aria-hidden={!open}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(440px, 92vw)',
          backgroundColor: 'var(--surface-elevated)',
          borderLeft: '1px solid var(--hairline)',
          boxShadow: '-16px 0 40px rgba(0, 0, 0, 0.18)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition,
          zIndex: 61,
          overflowY: 'auto',
          padding: '22px 22px 40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 6,
          }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--text)' }}>
            Reference
          </h2>
          <button
            onClick={onClose}
            aria-label="Close reference sheet"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--hairline)',
              backgroundColor: 'var(--surface)',
              color: 'var(--text-muted)',
              cursor: 'pointer',
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 22 }}>
          These formulas are available throughout the Math section — the same reference you get on test day.
        </p>

        <FormulaGroup title="Area & Circumference" items={AREA} />
        <FormulaGroup title="Right Triangles" items={TRIANGLES} />
        <FormulaGroup title="Volume" items={VOLUME} />

        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: 10,
            }}
          >
            Good to know
          </div>
          <ul style={{ display: 'grid', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
            {FACTS.map((fact) => (
              <li
                key={fact}
                style={{
                  display: 'flex',
                  gap: 10,
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: 'var(--text)',
                }}
              >
                <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>·</span>
                <MathText component="span">{fact}</MathText>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}
