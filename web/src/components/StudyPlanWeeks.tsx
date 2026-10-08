import { Link } from 'react-router-dom'
import type { PlanWeek, PlanWeekKind } from '../utils/studyPlan'

const KIND_LABEL: Record<PlanWeekKind, string> = {
  learn: 'Learn',
  review: 'Review',
  mock: 'Mock exam',
  final: 'Final review',
}

function formatWeek(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

/** Renders a week-by-week plan. Week 0 is highlighted as "This week" with practice links. */
export default function StudyPlanWeeks({
  weeks,
  topicLink,
  practiceLabel,
  extraLinks,
}: {
  weeks: PlanWeek[]
  /** Where a topic in a learn week links to. */
  topicLink: (topicId: string) => string
  practiceLabel: string
  /** Extra links shown under every non-learn week (mock exam, notebook, …). */
  extraLinks?: { label: string; to: string }[]
}) {
  return (
    <ol className="space-y-3">
      {weeks.map((w) => {
        const current = w.index === 0
        return (
          <li
            key={w.index}
            className="rounded-2xl border p-5"
            style={{
              backgroundColor: current ? 'color-mix(in srgb, var(--accent) 10%, var(--surface))' : 'var(--surface)',
              borderColor: current ? 'var(--accent)' : 'var(--hairline)',
            }}
          >
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2.5">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                >
                  {current ? 'This week' : `Week ${w.index + 1}`}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>
                  {KIND_LABEL[w.kind]}
                </span>
              </div>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Week of {formatWeek(w.startIso)}
              </span>
            </div>
            <p className="text-sm font-semibold mt-3">{w.focus}</p>

            {w.kind === 'learn' && w.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {w.topics.map((t) => (
                  <Link
                    key={t.id}
                    to={topicLink(t.id)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-opacity hover:opacity-80"
                    style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
                  >
                    {current ? `${practiceLabel}: ` : ''}
                    {t.label}
                  </Link>
                ))}
              </div>
            )}

            {w.kind !== 'learn' && extraLinks && extraLinks.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {extraLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-opacity hover:opacity-80"
                    style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        )
      })}
    </ol>
  )
}
