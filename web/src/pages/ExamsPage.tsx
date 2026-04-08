import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExams } from '../services/api'
import type { Exam } from '../types/api'
import CircularText from '../components/CircularText'

const LOGO_PATH = '/aotpfp.png'

export default function ExamsPage() {
  const [exams, setExams] = useState<Exam[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    async function loadExams() {
      try {
        setLoading(true)
        const data = await getExams()
        setExams(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load exams')
      } finally {
        setLoading(false)
      }
    }

    loadExams()
  }, [])

  return (
    <div>
      {/* Hero */}
      <div className="flex flex-col items-center text-center py-10 mb-6">
        <div className="mb-4 relative flex items-center justify-center" style={{ width: 180, height: 180 }}>
          <div className="absolute inset-0">
            <CircularText
              text="ACADEMY*OF*TESTERS*"
              onHover="speedUp"
              spinDuration={20}
              className="circular-text-hero"
            />
          </div>
          {logoError ? (
            <div
              className="w-[88px] h-[88px] rounded-full flex items-center justify-center text-2xl font-bold z-10 shadow-md"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              AoT
            </div>
          ) : (
            <img
              src={LOGO_PATH}
              alt="Academy of Testers"
              className="w-[88px] h-[88px] rounded-full object-cover shadow-md z-10"
              onError={() => setLogoError(true)}
            />
          )}
        </div>
        <h1 className="text-3xl font-bold leading-tight">Academy of Testers</h1>
        <p className="text-sm mt-2 max-w-md" style={{ color: 'var(--color-primary)', opacity: 0.6 }}>
          Free AP &amp; SAT prep with study guides, practice exams, unit reviews, and AI-powered help. Pick an exam to start.
        </p>
      </div>

      <section>

        {loading && (
          <div className="text-center py-12">
            <div className="text-xl" style={{ color: 'var(--color-primary)', opacity: 0.6 }}>Loading...</div>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="text-xl text-red-500">Error: {error}</div>
          </div>
        )}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 gap-4">
            {exams.map((exam) => {
              const isAP = exam.name.toUpperCase() === 'AP'
              const isSAT = exam.name.toUpperCase() === 'SAT'
              const subtitle = isAP
                ? '25+ subjects with unit reviews & practice'
                : isSAT
                  ? 'Full-length practice tests & strategies'
                  : exam.description
              const iconPath = isAP
                ? 'M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zM12 14v7'
                : 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              return (
                <Link
                  key={exam.id}
                  to={`/exams/${exam.id}/hub`}
                  className="group flex items-center gap-4 p-5 rounded-xl border border-black/10 hover:shadow-lg transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      <path d={iconPath} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold group-hover:underline">{exam.name}</h3>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: 'var(--color-primary)', opacity: 0.55 }}
                    >
                      {subtitle}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 flex-shrink-0 opacity-20 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )
            })}
          </div>
        )}
      </section>

      {/* What's included */}
      <section className="mt-10 mb-10">
        <h2 className="text-lg font-bold mb-4">What You Get</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Unit Overviews', desc: 'Concise summaries per unit', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
            { label: 'Practice Problems', desc: 'Targeted questions by topic', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
            { label: 'AI Tutor', desc: 'Ask questions, get answers', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
            { label: 'Scoring Rubrics', desc: 'Official exam breakdowns', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
          ].map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center text-center p-4 rounded-xl"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-primary) 6%, var(--color-secondary))',
              }}
            >
              <svg
                className="w-6 h-6 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: 'var(--color-primary)', opacity: 0.5 }}
              >
                <path d={f.icon} />
              </svg>
              <h3 className="text-xs font-semibold">{f.label}</h3>
              <p className="text-[11px] mt-0.5" style={{ color: 'var(--color-primary)', opacity: 0.4 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About & Mission cards */}
      <section className="mb-10">
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            to="/about"
            className="group flex items-center gap-4 p-5 rounded-xl border border-black/10 hover:shadow-lg transition-all cursor-pointer"
            style={{ backgroundColor: 'var(--color-secondary)' }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold group-hover:underline">Meet the Developer</h3>
              <p className="text-xs mt-0.5" style={{ color: 'var(--color-primary)', opacity: 0.55 }}>
                UC Berkeley CS student building tools for students
              </p>
            </div>
            <svg className="w-4 h-4 flex-shrink-0 opacity-20 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            to="/mission"
            className="group flex items-center gap-4 p-5 rounded-xl border border-black/10 hover:shadow-lg transition-all cursor-pointer"
            style={{ backgroundColor: 'var(--color-secondary)' }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold group-hover:underline">Our Mission</h3>
              <p className="text-xs mt-0.5" style={{ color: 'var(--color-primary)', opacity: 0.55 }}>
                Why free education resources matter
              </p>
            </div>
            <svg className="w-4 h-4 flex-shrink-0 opacity-20 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Social / follow */}
      <section className="mb-6">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl"
          style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 8%, var(--color-secondary))' }}
        >
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold">Follow Academy of Testers</h3>
            <p className="text-xs mt-0.5" style={{ color: 'var(--color-primary)', opacity: 0.5 }}>
              Stay updated with new resources and study tips
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.tiktok.com/@academyoftesters"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium hover:opacity-80 transition-opacity"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" />
              </svg>
              TikTok
            </a>
            <a
              href="https://www.linkedin.com/in/braedyn-thompson-67a396284/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium hover:opacity-80 transition-opacity"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/braaaeeedyn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium hover:opacity-80 transition-opacity"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
