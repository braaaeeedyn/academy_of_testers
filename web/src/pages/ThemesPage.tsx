import { useNavigate } from 'react-router-dom'
import { themes, type Theme } from '../types/theme'
import { useTheme } from '../context/ThemeContext'

function ThemePreview({ t }: { t: Theme }) {
  const { bg, surface, text, accent, hairline } = t.preview
  const isDark = t.mode === 'dark'
  const softText = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.45)'
  const faintText = isDark ? 'rgba(255,255,255,0.28)' : 'rgba(0,0,0,0.22)'
  const radius = t.id === 'wired' ? 0 : t.id === 'mastercard' ? 18 : 10
  const btnRadius = t.id === 'wired' ? 0 : t.id === 'resend' || t.id === 'clickhouse' ? 8 : 9999

  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundColor: bg,
        border: `1px solid ${hairline}`,
        borderRadius: radius,
        fontFamily: t.fontStack,
      }}
    >
      {/* Mock top bar */}
      <div
        className="flex items-center justify-between px-3.5 py-2.5"
        style={{ borderBottom: `1px solid ${hairline}` }}
      >
        <span style={{ color: text, fontWeight: 700, fontSize: 12, letterSpacing: '-0.01em' }}>
          Academy of Testers
        </span>
        <span
          style={{
            width: 22,
            height: 6,
            borderRadius: 999,
            backgroundColor: accent,
            display: 'inline-block',
          }}
        />
      </div>

      {/* Mock hero */}
      <div className="px-3.5 pt-4 pb-4">
        <div
          style={{
            color: text,
            fontFamily: t.fontStack,
            fontSize: 22,
            lineHeight: 1.05,
            fontWeight: t.id === 'wired' || t.id === 'resend' ? 500 : 700,
            letterSpacing: '-0.02em',
            marginBottom: 8,
          }}
        >
          Ace every exam.
        </div>
        <div style={{ height: 7, width: '82%', borderRadius: 999, background: faintText, marginBottom: 6 }} />
        <div style={{ height: 7, width: '60%', borderRadius: 999, background: faintText, marginBottom: 14 }} />

        <div className="flex items-center gap-2">
          <span
            style={{
              backgroundColor: accent,
              color: t.preview.accent === '#ffd02f' || t.preview.accent === '#faff69' ? '#1c1c1e' : isDark ? '#0a0a0a' : '#ffffff',
              fontSize: 10,
              fontWeight: 700,
              padding: '5px 12px',
              borderRadius: btnRadius,
            }}
          >
            Start
          </span>
          <span
            style={{
              color: softText,
              fontSize: 10,
              fontWeight: 600,
              padding: '5px 12px',
              borderRadius: btnRadius,
              border: `1px solid ${hairline}`,
            }}
          >
            Explore
          </span>
        </div>
      </div>

      {/* Mock surface strip */}
      <div className="px-3.5 pb-3.5">
        <div
          className="flex items-center gap-2 px-2.5 py-2"
          style={{ backgroundColor: surface, borderRadius: t.id === 'wired' ? 0 : 8, border: `1px solid ${hairline}` }}
        >
          <span style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: accent }} />
          <span style={{ height: 6, width: '55%', borderRadius: 999, background: faintText }} />
        </div>
      </div>
    </div>
  )
}

function ThemeCard({ t, isActive, onSelect }: { t: Theme; isActive: boolean; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      aria-pressed={isActive}
      className="group text-left transition-transform duration-200 hover:-translate-y-1 cursor-pointer focus:outline-none"
      style={{ borderRadius: 16 }}
    >
      <div
        className="p-2.5 transition-all duration-200"
        style={{
          borderRadius: 16,
          border: `2px solid ${isActive ? 'var(--accent)' : 'var(--hairline)'}`,
          backgroundColor: 'var(--surface)',
          boxShadow: isActive ? '0 8px 30px rgba(0,0,0,0.12)' : 'none',
        }}
      >
        <ThemePreview t={t} />

        <div className="flex items-start justify-between gap-2 px-1.5 pt-3 pb-1">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-lg font-bold" style={{ color: 'var(--text)' }}>
                {t.name}
              </h3>
              <span
                className="text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded"
                style={{
                  color: 'var(--text-muted)',
                  border: '1px solid var(--hairline)',
                }}
              >
                {t.mode}
              </span>
            </div>
            <p className="text-sm mt-1 leading-snug" style={{ color: 'var(--text-muted)' }}>
              {t.tagline}
            </p>
          </div>
          {isActive && (
            <span
              className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              Active
            </span>
          )}
        </div>
      </div>
    </button>
  )
}

export default function ThemesPage() {
  const { theme: activeTheme, setTheme } = useTheme()
  const navigate = useNavigate()

  return (
    <div>
      <div className="flex items-center justify-end mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity"
          style={{ color: 'var(--accent-ink)', backgroundColor: 'var(--accent)', borderRadius: 'var(--radius-btn)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      <h1 className="font-display text-4xl font-bold mb-2" style={{ color: 'var(--text)' }}>
        Themes
      </h1>
      <p className="mb-8 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
        Six complete design systems, each inspired by a distinctive brand. Pick one to instantly
        restyle the entire site &mdash; colors, typography, and shape all change together.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {themes.map((t) => (
          <ThemeCard
            key={t.id}
            t={t}
            isActive={t.id === activeTheme.id}
            onSelect={() => setTheme(t)}
          />
        ))}
      </div>
    </div>
  )
}
