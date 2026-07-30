import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SAT_PREP_TOPICS, type PrepVideo } from '../data/satPrepContent'

/** Renders a YouTube embed, or a labelled placeholder while `youtubeId` is unset. */
function VideoSlot({ video }: { video: PrepVideo }) {
  return (
    <div className="flex flex-col gap-2">
      {video.youtubeId ? (
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: '16 / 9', backgroundColor: 'var(--surface)' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-2 w-full rounded-xl border border-dashed text-center px-4"
          style={{ aspectRatio: '16 / 9', borderColor: 'var(--hairline)', backgroundColor: 'var(--surface)' }}
        >
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 16%, transparent)', color: 'var(--accent)' }}
          >
            <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
            Video coming soon
          </span>
        </div>
      )}
      <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{video.title}</span>
    </div>
  )
}

export default function SatPrepTopicPage() {
  const { topicId } = useParams()
  const navigate = useNavigate()

  const index = SAT_PREP_TOPICS.findIndex((t) => t.id === topicId)
  const topic = index >= 0 ? SAT_PREP_TOPICS[index] : undefined

  // Scroll to top when switching between topics (prev/next navigation).
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [topicId])

  if (!topic) {
    return (
      <div className="text-center py-16">
        <h1 className="font-display text-2xl font-bold">Topic not found</h1>
        <p className="mt-2" style={{ color: 'var(--text-muted)' }}>
          That SAT Math topic doesn't exist.
        </p>
        <Link to="/sat/prep" className="inline-block mt-5 hover:underline font-semibold" style={{ color: 'var(--accent)' }}>
          Back to all topics
        </Link>
      </div>
    )
  }

  const prev = index > 0 ? SAT_PREP_TOPICS[index - 1] : null
  const next = index < SAT_PREP_TOPICS.length - 1 ? SAT_PREP_TOPICS[index + 1] : null

  return (
    <div>
      {/* Header */}
      <section className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--text-muted)' }}>
              SAT Math Prep · Topic {index + 1} of {SAT_PREP_TOPICS.length}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-none tracking-tight">
              {topic.name}
            </h1>
          </div>
          <button
            onClick={() => navigate('/sat/prep')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer border transition-colors flex-shrink-0"
            style={{ color: 'var(--text)', backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            All topics
          </button>
        </div>
        <p style={{ color: 'var(--text-muted)' }}>{topic.summary}</p>

        {/* What it covers */}
        <div className="flex flex-wrap gap-2 mt-5">
          {topic.covers.map((c) => (
            <span
              key={c}
              className="text-xs font-medium px-2.5 py-1 rounded-full border"
              style={{ color: 'var(--text)', backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Videos */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--text-muted)' }}>
            Video lessons
          </h2>
          <div className="grid gap-4">
            {topic.videos.map((v) => (
              <VideoSlot key={v.title} video={v} />
            ))}
          </div>
        </div>

        {/* Advice */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--text-muted)' }}>
            How to study this
          </h2>
          <ul className="flex flex-col gap-3">
            {topic.advice.map((a) => (
              <li key={a} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>{a}</span>
              </li>
            ))}
          </ul>

          {/* Practice CTA */}
          <div className="mt-8 rounded-2xl border p-5" style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}>
            <h3 className="font-display text-lg font-bold tracking-tight">Practice this topic</h3>
            <p className="text-sm mt-0.5 mb-4" style={{ color: 'var(--text-muted)' }}>
              The SAT Academy adapts to your mastery and drills your weakest topics.
            </p>
            <button
              onClick={() => navigate('/sat/adaptive')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              Enter the Academy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Prev / next topic */}
      <nav className="mt-10 grid sm:grid-cols-2 gap-4">
        {prev ? (
          <Link
            to={`/sat/prep/${prev.id}`}
            className="flex items-center gap-3 rounded-xl border p-4 transition-all hover:shadow-md"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            <div>
              <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Previous</div>
              <div className="font-semibold" style={{ color: 'var(--text)' }}>{prev.name}</div>
            </div>
          </Link>
        ) : <div />}
        {next ? (
          <Link
            to={`/sat/prep/${next.id}`}
            className="flex items-center justify-end gap-3 rounded-xl border p-4 text-right transition-all hover:shadow-md"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <div>
              <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Next</div>
              <div className="font-semibold" style={{ color: 'var(--text)' }}>{next.name}</div>
            </div>
            <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : <div />}
      </nav>
    </div>
  )
}
