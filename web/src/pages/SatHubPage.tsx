import { Link, useNavigate } from 'react-router-dom'

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      className={className || 'w-6 h-6'}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  )
}

interface HubOption {
  to: string
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  cta: string
  iconPath: string
  note?: string
}

const OPTIONS: HubOption[] = [
  {
    to: '/sat/prep',
    eyebrow: 'Study & Review',
    title: 'SAT Prep Resources',
    description:
      'Learn each of the eight SAT Math topics with video lessons and study strategies before you drill them.',
    bullets: ['Video lessons for all 8 Math topics', 'How-to-study strategies & tips', 'Jump straight to your weak spots'],
    cta: 'Browse resources',
    iconPath:
      'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    to: '/sat/adaptive',
    eyebrow: 'Personalized Practice',
    title: 'SAT Academy',
    description:
      'An adaptive engine that learns your strengths and gaps, then serves the right question at the right time.',
    bullets: ['Diagnostic across all Math domains', 'Mastery tracked as you go', 'Questions chosen for you'],
    cta: 'Enter the Academy',
    note: 'Sign in required',
    iconPath:
      'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
]

export default function SatHubPage() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Header */}
      <section className="mb-10">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--text-muted)' }}>
              Exam Hub
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-none tracking-tight">
              SAT Exams
            </h1>
          </div>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer border transition-colors flex-shrink-0"
            style={{ color: 'var(--text)', backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </button>
        </div>
        <p style={{ color: 'var(--text-muted)' }}>
          Choose how you want to prepare — self-guided resources, or personalized adaptive practice.
        </p>
      </section>

      {/* Two-button split */}
      <section className="grid md:grid-cols-2 gap-6 items-stretch">
        {OPTIONS.map((opt) => (
          <Link
            key={opt.to}
            to={opt.to}
            className="group flex flex-col p-8 rounded-2xl border transition-all hover:shadow-xl hover:-translate-y-1"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <div className="flex items-center justify-between mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                <Icon path={opt.iconPath} className="w-7 h-7" />
              </div>
              {opt.note && (
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--accent) 14%, transparent)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {opt.note}
                </span>
              )}
            </div>

            <div className="text-xs font-semibold uppercase tracking-[0.16em] mb-2" style={{ color: 'var(--text-muted)' }}>
              {opt.eyebrow}
            </div>
            <h2 className="font-display text-2xl font-bold tracking-tight group-hover:underline">
              {opt.title}
            </h2>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {opt.description}
            </p>

            <ul className="mt-5 space-y-2">
              {opt.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text)' }}>
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-7">
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold group-hover:gap-3 transition-all"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                {opt.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
