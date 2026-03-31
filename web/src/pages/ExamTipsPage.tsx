import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { EXAM_TIPS_DATA } from '../data/examTipsData'
import type { ExamCategoryTips } from '../data/examTipsData'

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:v=|\/embed\/|\/watch\?v=)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : null
}

export default function ExamTipsPage() {
  const { examId } = useParams<{ examId: string }>()
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setActiveCategory((prev) => (prev === id ? null : id))
  }

  const activeTips: ExamCategoryTips | undefined = EXAM_TIPS_DATA.find(
    (c) => c.id === activeCategory
  )

  return (
    <div>
      <div className="flex items-center justify-end mb-6">
        <button
          onClick={() => navigate(examId ? `/exams/${examId}/hub` : '/')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity"
          style={{ color: 'var(--color-secondary)', backgroundColor: 'var(--color-primary)' }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to Hub
        </button>
      </div>

      {/* Header */}
      <div
        className="rounded-xl p-8 mb-8 shadow-md"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: 'var(--color-secondary)' }}
        >
          Exam Tips & Strategies
        </h1>
        <p
          className="text-lg opacity-80"
          style={{ color: 'var(--color-secondary)' }}
        >
          Proven strategies for every AP exam category — select a subject area below
        </p>
      </div>

      {/* Category Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {EXAM_TIPS_DATA.map((category) => {
          const isActive = activeCategory === category.id
          return (
            <button
              key={category.id}
              onClick={() => handleToggle(category.id)}
              className="flex flex-col items-center gap-2 p-4 rounded-xl shadow-md border transition-all cursor-pointer hover:shadow-lg"
              style={{
                backgroundColor: isActive
                  ? 'var(--color-primary)'
                  : 'var(--color-secondary)',
                color: isActive
                  ? 'var(--color-secondary)'
                  : 'inherit',
                borderColor: isActive
                  ? 'var(--color-primary)'
                  : 'rgba(0,0,0,0.15)',
              }}
            >
              <span className="text-3xl">{category.icon}</span>
              <span className="text-sm font-bold text-center leading-tight">
                {category.label}
              </span>
              <span
                className="text-xs text-center leading-tight"
                style={{ opacity: 0.7 }}
              >
                {category.description}
              </span>
            </button>
          )
        })}
      </div>

      {/* Tips Display */}
      {activeTips && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{activeTips.icon}</span>
            <div>
              <h2 className="text-2xl font-bold">{activeTips.label}</h2>
              <p
                className="text-sm"
                style={{ color: 'var(--color-primary)', opacity: 0.5 }}
              >
                {activeTips.description}
              </p>
            </div>
          </div>

          {/* YouTube Video */}
          {activeTips.youtubeUrl && (() => {
            const videoId = getYouTubeId(activeTips.youtubeUrl)
            if (!videoId) return null
            return (
              <div
                className="rounded-xl shadow-md border border-black/35 overflow-hidden"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                <div
                  className="px-6 py-4 flex items-center gap-2"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <span
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    Recommended Video
                  </span>
                </div>
                <div className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={activeTips.youtubeTitle}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-sm font-medium mt-3">{activeTips.youtubeTitle}</p>
                  <a
                    href={activeTips.youtubeCreatorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold hover:underline inline-block mt-1"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {activeTips.youtubeCreator}
                  </a>
                </div>
              </div>
            )
          })()}

          {activeTips.sections.map((section, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow-md border border-black/35 overflow-hidden"
              style={{ backgroundColor: 'var(--color-secondary)' }}
            >
              <div
                className="px-6 py-4"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <h3
                  className="text-sm font-bold uppercase tracking-wide"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  {section.title}
                </h3>
              </div>
              <ul className="p-6 space-y-3">
                {section.tips.map((tip, tipIdx) => (
                  <li key={tipIdx} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'var(--color-secondary)',
                      }}
                    >
                      {tipIdx + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!activeTips && (
        <div
          className="text-center py-16 rounded-xl"
          style={{
            backgroundColor:
              'color-mix(in srgb, var(--color-primary) 8%, var(--color-secondary))',
          }}
        >
          <div className="text-5xl mb-4">💡</div>
          <h3 className="text-xl font-bold mb-2">Select a Category Above</h3>
          <p
            className="max-w-md mx-auto"
            style={{ color: 'var(--color-primary)', opacity: 0.7 }}
          >
            Choose an exam category to view targeted tips and strategies for
            those specific AP exams.
          </p>
        </div>
      )}
    </div>
  )
}
