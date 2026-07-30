import { useMemo } from 'react'
import { AP_EXAM_YEAR, AP_EXAM_START, AP_EXAM_WEEKS } from '../data/apCategories'

/** Days-until-AP-exams card shown in the hub and planner study rails. */
export default function ApExamCountdown() {
  const daysLeft = useMemo(() => {
    const ms = AP_EXAM_START.getTime() - Date.now()
    return Math.max(0, Math.ceil(ms / 86_400_000))
  }, [])

  return (
    <div
      className="rounded-2xl border p-5"
      style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
    >
      <div
        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]"
        style={{ color: 'var(--text-muted)' }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        AP Exams {AP_EXAM_YEAR}
      </div>
      <div className="flex items-baseline gap-2 mt-3">
        <span className="font-display text-4xl font-bold leading-none">{daysLeft}</span>
        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
          days to go
        </span>
      </div>
      <p className="text-xs mt-1.5" style={{ color: 'var(--text-muted)' }}>
        Testing begins Monday, May 3
      </p>
      <div className="mt-4 pt-4 space-y-2" style={{ borderTop: '1px solid var(--hairline)' }}>
        {AP_EXAM_WEEKS.map((w) => (
          <div key={w.label} className="flex items-center justify-between text-xs">
            <span className="font-semibold">{w.label}</span>
            <span style={{ color: 'var(--text-muted)' }}>{w.range}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
