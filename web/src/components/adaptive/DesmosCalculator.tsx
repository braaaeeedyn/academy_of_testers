import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

interface Props {
  open: boolean
  onClose: () => void
}

type Status = 'idle' | 'loading' | 'ready' | 'error'

// Desmos ships a free public demo key for embedding; swap in your own from
// desmos.com/api for production via VITE_DESMOS_API_KEY.
const API_KEY =
  (import.meta.env.VITE_DESMOS_API_KEY as string | undefined) ||
  'dcb31709b452b1cf9dc26972add0fda6'
const SCRIPT_SRC = `https://www.desmos.com/api/v1.11/calculator.js?apiKey=${API_KEY}`

declare global {
  interface Window {
    Desmos?: {
      GraphingCalculator: (el: HTMLElement, opts?: Record<string, unknown>) => {
        resize: () => void
        destroy: () => void
      }
    }
  }
}

let loaderPromise: Promise<NonNullable<Window['Desmos']>> | null = null

/** Loads the Desmos calculator script once and resolves the global API object. */
function loadDesmos(): Promise<NonNullable<Window['Desmos']>> {
  if (window.Desmos) return Promise.resolve(window.Desmos)
  if (loaderPromise) return loaderPromise
  loaderPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.onload = () => {
      if (window.Desmos) resolve(window.Desmos)
      else reject(new Error('Desmos failed to initialize'))
    }
    script.onerror = () => {
      loaderPromise = null
      reject(new Error('Could not load the Desmos calculator'))
    }
    document.head.appendChild(script)
  })
  return loaderPromise
}

/** Floating, left-anchored panel that embeds the Desmos graphing calculator on demand. */
export default function DesmosCalculator({ open, onClose }: Props) {
  const reduce = usePrefersReducedMotion()
  const mountRef = useRef<HTMLDivElement>(null)
  const calcRef = useRef<{ resize: () => void; destroy: () => void } | null>(null)
  const initStarted = useRef(false)
  const [status, setStatus] = useState<Status>('idle')

  // Initialize once, the first time the panel is opened.
  useEffect(() => {
    if (!open || initStarted.current) return
    initStarted.current = true
    setStatus('loading')
    loadDesmos()
      .then((Desmos) => {
        if (!mountRef.current) return
        calcRef.current = Desmos.GraphingCalculator(mountRef.current, {
          expressionsCollapsed: false,
          border: false,
        })
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [open])

  // Desmos measures its container on layout; nudge it once visible.
  useEffect(() => {
    if (open && status === 'ready') calcRef.current?.resize()
  }, [open, status])

  useEffect(() => () => calcRef.current?.destroy(), [])

  const transition = reduce ? 'none' : 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)'

  return (
    <aside
      role="dialog"
      aria-label="Graphing calculator"
      aria-hidden={!open}
      style={{
        position: 'fixed',
        left: 16,
        top: 88,
        width: 'min(400px, calc(100vw - 32px))',
        height: 'min(600px, 78vh)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--surface-elevated)',
        border: '1px solid var(--hairline)',
        borderRadius: 'var(--radius-card)',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.28)',
        transform: open ? 'translateX(0)' : 'translateX(calc(-100% - 24px))',
        transition,
        zIndex: 62,
        overflow: 'hidden',
        pointerEvents: open ? 'auto' : 'none',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 14px',
          borderBottom: '1px solid var(--hairline)',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="16" height="16" fill="none" stroke="var(--accent)" viewBox="0 0 24 24" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h4" />
          </svg>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Calculator</span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close calculator"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 30,
            height: 30,
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--hairline)',
            backgroundColor: 'var(--surface)',
            color: 'var(--text-muted)',
            cursor: 'pointer',
          }}
        >
          <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Calculator surface (Desmos mounts here) */}
      <div style={{ position: 'relative', flex: 1, minHeight: 0 }}>
        <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />

        {status === 'loading' && (
          <Overlay>
            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>Loading calculator…</span>
          </Overlay>
        )}

        {status === 'error' && (
          <Overlay>
            <div style={{ textAlign: 'center', padding: 20 }}>
              <p style={{ color: 'var(--text)', fontWeight: 600, marginBottom: 6 }}>
                Calculator unavailable
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>
                We couldn't reach Desmos. Check your connection, or open it in a new tab.
              </p>
              <a
                href="https://www.desmos.com/calculator"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-btn)',
                  backgroundColor: 'var(--accent)',
                  color: 'var(--accent-ink)',
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: 'none',
                }}
              >
                Open Desmos
              </a>
            </div>
          </Overlay>
        )}
      </div>
    </aside>
  )
}

function Overlay({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--surface-elevated)',
      }}
    >
      {children}
    </div>
  )
}
