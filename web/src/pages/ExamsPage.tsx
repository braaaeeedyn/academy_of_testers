import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExams } from '../services/api'
import type { Exam } from '../types/api'
import { examSlug } from '../utils/slug'
import CircularText from '../components/CircularText'

const LOGO_PATH = '/aotpfp.png'

/** Matches Flyway seed V2 (AP id 1, SAT id 2) when the API is down or unreachable. */
const FALLBACK_EXAMS: Exam[] = [
  {
    id: 1,
    name: 'AP',
    description: 'Advanced Placement exams for college credit',
    createdAt: '',
  },
  {
    id: 2,
    name: 'SAT',
    description: 'Full-length practice tests and strategies',
    createdAt: '',
  },
]

const SOCIALS = [
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@academyoftesters',
    path: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/braedyn-thompson-67a396284/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/braaaeeedyn',
    path: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
  },
]

export default function ExamsPage() {
  const [exams, setExams] = useState<Exam[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [usingFallbackExams, setUsingFallbackExams] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [highlightCards, setHighlightCards] = useState(false)

  const handleStartPracticing = () => {
    // Replay the card light-up animation in place, without scrolling the page.
    // Toggling off then back on across frames restarts the CSS animation.
    setHighlightCards(false)
    requestAnimationFrame(() => requestAnimationFrame(() => setHighlightCards(true)))
  }

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        setError(null)
        setUsingFallbackExams(false)
        const examData = await getExams()
        const list = Array.isArray(examData) && examData.length > 0 ? examData : FALLBACK_EXAMS
        if (list === FALLBACK_EXAMS && (!Array.isArray(examData) || examData.length === 0)) {
          setUsingFallbackExams(true)
        }
        setExams(list)
      } catch (err) {
        console.error('getExams failed:', err)
        setExams(FALLBACK_EXAMS)
        setUsingFallbackExams(true)
        setError(null)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  return (
    <div>
      {/* Hero — centered, minimal */}
      <section className="flex flex-col items-center text-center pt-12 pb-10">
        <div className="relative flex items-center justify-center" style={{ width: 220, height: 220 }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <CircularText
              text="ACADEMY*OF*TESTERS*"
              onHover="speedUp"
              spinDuration={20}
              className="circular-text-hero"
            />
          </div>
          {logoError ? (
            <div
              className="w-[130px] h-[130px] rounded-full flex items-center justify-center text-2xl font-bold z-10 shadow-md"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              AoT
            </div>
          ) : (
            <img
              src={LOGO_PATH}
              alt="Academy of Testers"
              className="w-[140px] h-[140px] rounded-full object-cover shadow-md z-10"
              onError={() => setLogoError(true)}
            />
          )}
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-none tracking-tight mt-8">
          Academy of Testers
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-lg tracking-tight" style={{ color: 'var(--text-muted)' }}>
          Where every tester has the opportunity to excel.
        </p>
        <button
          onClick={handleStartPracticing}
          className="start-practicing-btn mt-7 tracking-tight"
        >
          Start Practicing
          <svg fill="currentColor" viewBox="0 0 24 24" className="sp-icon">
            <path
              clipRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </section>

      {/* Exams */}
      <section id="exam-cards" className="mb-6 scroll-mt-20">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: 'var(--text-muted)' }}>
          Choose your exam
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="text-xl" style={{ color: 'var(--text-muted)' }}>Loading...</div>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="text-xl" style={{ color: 'var(--error)' }}>Error: {error}</div>
          </div>
        )}

        {!loading && !error && usingFallbackExams && (
          <div
            className="mb-5 px-4 py-3 rounded-lg text-sm border"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--hairline)',
              color: 'var(--text-muted)',
            }}
          >
            Using built-in exam list (API unreachable or empty). Run the Spring API (e.g. Docker on port 8080) and reload for
            live subjects and resources.
          </div>
        )}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 gap-5 items-stretch">
            {exams.map((exam) => {
              const key = exam.name.trim().toUpperCase()
              const isAP = key === 'AP'
              const isSAT = key === 'SAT'
              const subtitle = isAP
                ? 'Unit reviews & practice across 25+ subjects'
                : isSAT
                  ? 'Full-length practice tests & strategies'
                  : exam.description
              const iconPath = isAP
                ? 'M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zM12 14v7'
                : 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              const meta = isAP ? '25+ subjects' : isSAT ? '5 sections' : ''
              return (
                <div
                  key={exam.id}
                  className={`h-full rounded-2xl ${highlightCards ? 'exam-card-guide-wrap' : ''}`}
                >
                  <Link
                    to={`/${examSlug(exam.name)}/hub`}
                    onClick={() => setHighlightCards(false)}
                    className="group flex flex-col p-7 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-0.5 h-full"
                    style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
                  >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                      <path d={iconPath} />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">{exam.name} Exams</h3>
                  <p className="text-sm mt-1.5" style={{ color: 'var(--text-muted)' }}>
                    {subtitle}
                  </p>
                  <div className="mt-6 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--hairline)' }}>
                    {meta && (
                      <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
                        {meta}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: 'var(--text)' }}>
                      Explore
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
                </div>
              )
            })}
          </div>
        )}
      </section>

      {/* Meet the developer & mission */}
      <section className="mb-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <Link
            to="/about"
            className="group flex items-center gap-4 p-5 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold group-hover:underline">Meet the Developer</h3>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                UC Berkeley CS student building tools for students
              </p>
            </div>
            <svg className="w-4 h-4 flex-shrink-0 opacity-30 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            to="/mission"
            className="group flex items-center gap-4 p-5 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold group-hover:underline">Our Mission</h3>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                Why free education resources matter
              </p>
            </div>
            <svg className="w-4 h-4 flex-shrink-0 opacity-30 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Social / follow */}
      <section className="mb-8">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl border"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
        >
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold">Follow Academy of Testers</h3>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
              Stay updated with new resources and study tips
            </p>
          </div>
          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-opacity hover:opacity-80"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
