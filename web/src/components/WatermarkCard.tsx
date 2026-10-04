import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/**
 * A tall link card with oversized faded letters in its corner (the home page's exam panels).
 * Pair with PageBand: the band carries the page, these carry its main choices.
 */
export default function WatermarkCard({
  to,
  watermark,
  meta,
  title,
  blurb,
  cta = 'Start practicing',
  icon,
  minHeight = 260,
}: {
  to: string
  watermark: string
  meta?: ReactNode
  title: ReactNode
  blurb?: ReactNode
  cta?: string
  icon?: ReactNode
  minHeight?: number
}) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden flex flex-col justify-end p-7 transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2"
      style={
        {
          minHeight,
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--hairline)',
          borderRadius: 'var(--radius-card)',
          ['--tw-ring-color' as string]: 'var(--accent)',
        } as React.CSSProperties
      }
    >
      <span
        aria-hidden="true"
        className="absolute -top-6 right-4 font-display font-bold leading-none select-none pointer-events-none"
        style={{
          fontSize: watermark.length > 3 ? '7.5rem' : '11rem',
          color: 'color-mix(in srgb, var(--accent) 22%, transparent)',
        }}
      >
        {watermark}
      </span>
      {icon && (
        <span
          className="absolute top-7 left-7 w-11 h-11 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
        >
          {icon}
        </span>
      )}
      {meta && (
        <span className="relative text-sm" style={{ color: 'var(--text-muted)' }}>
          {meta}
        </span>
      )}
      <span className="relative font-display text-3xl font-bold mt-1 leading-tight">{title}</span>
      {blurb && (
        <span
          className="relative text-sm mt-2 max-w-sm leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          {blurb}
        </span>
      )}
      <span className="relative inline-flex items-center gap-2 font-semibold mt-5">
        {cta}
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14m-6-6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  )
}
