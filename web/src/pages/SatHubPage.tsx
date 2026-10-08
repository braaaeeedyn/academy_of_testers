import { Link, useNavigate } from 'react-router-dom'
import PageBand from '../components/PageBand'
import WatermarkCard from '../components/WatermarkCard'

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
  /** Oversized faded word in the card's corner. */
  watermark: string
}

/** Smaller tools under the two main paths. */
const TOOLS: { to: string; title: string; subtitle: string; iconPath: string }[] = [
  {
    to: '/sat/study-plan',
    title: 'Week-by-week plan',
    subtitle: 'Topics spread across the weeks until your test date',
    iconPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    to: '/notebook',
    title: 'Mistake Notebook',
    subtitle: 'Re-try missed questions on a spaced schedule',
    iconPath:
      'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    to: '/sat/logistics',
    title: 'Test-day logistics',
    subtitle: 'Bluebook, what to bring, scores & sending them',
    iconPath:
      'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
]

const OPTIONS: HubOption[] = [
  {
    to: '/sat/prep',
    eyebrow: 'Study and review',
    watermark: 'LEARN',
    title: 'SAT Prep Resources',
    description:
      'Learn each of the eight SAT Math topics with video lessons and study strategies before you drill them.',
    bullets: [
      'Video lessons for all 8 Math topics',
      'How-to-study strategies & tips',
      'Jump straight to your weak spots',
    ],
    cta: 'Browse resources',
    iconPath:
      'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    to: '/sat/adaptive',
    eyebrow: 'Personalized practice',
    watermark: 'DRILL',
    title: 'SAT Academy',
    description:
      'An adaptive engine that learns your strengths and gaps, then serves the right question at the right time.',
    bullets: [
      'Diagnostic across all Math domains',
      'Mastery tracked as you go',
      'Questions chosen for you',
    ],
    cta: 'Enter the Academy',
    note: 'Sign in required',
    iconPath:
      'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
]

export default function SatHubPage() {
  const navigate = useNavigate()

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <PageBand
        crumbs={[{ label: 'Home', onClick: () => navigate('/') }, { label: 'SAT hub' }]}
        back={{ label: 'Home', onClick: () => navigate('/') }}
        watermark="SAT"
        title="SAT Exams"
        subtitle="Choose how you want to prepare: self-guided lessons, or adaptive practice that targets your weak spots."
      />

      <section className="grid md:grid-cols-2 gap-5 mt-10">
        {OPTIONS.map((opt) => (
          <WatermarkCard
            key={opt.to}
            to={opt.to}
            watermark={opt.watermark}
            minHeight={380}
            icon={<Icon path={opt.iconPath} className="w-5 h-5" />}
            meta={opt.note ? `${opt.eyebrow}, ${opt.note.toLowerCase()}` : opt.eyebrow}
            title={opt.title}
            cta={opt.cta}
            blurb={
              <>
                {opt.description}
                <span className="block mt-4 space-y-1.5">
                  {opt.bullets.map((b) => (
                    <span
                      key={b}
                      className="flex items-center gap-2.5"
                      style={{ color: 'var(--text)' }}
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: 'var(--accent)' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2.4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </span>
                  ))}
                </span>
              </>
            }
          />
        ))}
      </section>

      <section className="grid sm:grid-cols-3 gap-3 mt-5">
        {TOOLS.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            className="group flex items-center gap-3.5 p-4 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
          >
            <span
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              <Icon path={t.iconPath} className="w-5 h-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-bold leading-tight">{t.title}</span>
              <span className="block text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {t.subtitle}
              </span>
            </span>
          </Link>
        ))}
      </section>
    </div>
  )
}
