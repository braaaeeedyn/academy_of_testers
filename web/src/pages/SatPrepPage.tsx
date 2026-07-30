import { Link, useNavigate } from 'react-router-dom'
import { SAT_PREP_TOPICS } from '../data/satPrepContent'

export default function SatPrepPage() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Header */}
      <section className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--text-muted)' }}>
              SAT Prep Resources
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-none tracking-tight">
              SAT Math, topic by topic
            </h1>
          </div>
          <button
            onClick={() => navigate('/sat/hub')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer border transition-colors flex-shrink-0"
            style={{ color: 'var(--text)', backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            SAT Hub
          </button>
        </div>
        <p style={{ color: 'var(--text-muted)' }}>
          The eight Math domains the SAT tests. Open a topic for its video lessons and study strategies, then head to
          the Academy for adaptive practice.
        </p>
      </section>

      {/* Topic cards — each links to its own page */}
      <div className="grid sm:grid-cols-2 gap-5">
        {SAT_PREP_TOPICS.map((topic, i) => (
          <Link
            key={topic.id}
            to={`/sat/prep/${topic.id}`}
            className="group flex flex-col p-6 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <div className="flex items-start gap-3.5 mb-3">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-display text-lg font-bold"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                {i + 1}
              </div>
              <h2 className="font-display text-xl font-bold tracking-tight leading-tight mt-1">{topic.name}</h2>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{topic.summary}</p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {topic.covers.map((c) => (
                <span
                  key={c}
                  className="text-xs font-medium px-2 py-0.5 rounded-full border"
                  style={{ color: 'var(--text-muted)', backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--hairline)' }}>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {topic.videos.length} video{topic.videos.length === 1 ? '' : 's'} · {topic.advice.length} tips
              </span>
              <span className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: 'var(--text)' }}>
                Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer: route to adaptive practice */}
      <div
        className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border p-6"
        style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
      >
        <div>
          <h3 className="font-display text-lg font-bold tracking-tight">Ready to practice?</h3>
          <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
            The SAT Academy adapts to your mastery and serves questions from your weakest topics.
          </p>
        </div>
        <button
          onClick={() => navigate('/sat/adaptive')}
          className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
        >
          Enter the Academy
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
