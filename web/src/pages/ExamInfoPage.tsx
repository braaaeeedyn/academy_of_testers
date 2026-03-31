import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AP_EXAM_DATA } from '../data/apExamData'
import type { APExamInfo } from '../data/apExamData'

export default function ExamInfoPage() {
  const { examId } = useParams<{ examId: string }>()
  const navigate = useNavigate()
  const [selectedSlug, setSelectedSlug] = useState('')
  const [activeExam, setActiveExam] = useState<APExamInfo | null>(null)

  const handleSearch = () => {
    if (!selectedSlug) return
    const found = AP_EXAM_DATA.find((e) => e.slug === selectedSlug)
    setActiveExam(found || null)
  }

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

      {/* Exam Selector */}
      <div className="rounded-xl shadow-md p-6 mb-8 border border-black/35" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <h2 className="text-xl font-bold mb-4">Select an AP Exam</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="flex-1 px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 cursor-pointer"
            style={{
              borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
            }}
          >
            <option value="">-- Choose an exam --</option>
            {AP_EXAM_DATA.map((exam) => (
              <option key={exam.slug} value={exam.slug}>
                {exam.label}
              </option>
            ))}
          </select>
          <button
            onClick={handleSearch}
            disabled={!selectedSlug}
            className="px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-secondary)',
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Exam Rubric Display */}
      {activeExam && (
        <div className="space-y-6">
          {/* Exam Title Bar */}
          <div
            className="rounded-xl p-6 shadow-md flex items-center justify-between"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <h2
              className="text-2xl font-bold"
              style={{ color: 'var(--color-secondary)' }}
            >
              {activeExam.label}
            </h2>
            <a
              href={activeExam.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline cursor-pointer opacity-80 hover:opacity-100"
              style={{ color: 'var(--color-secondary)' }}
            >
              View on College Board ↗
            </a>
          </div>

          {/* Sections Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {activeExam.sections.map((section, idx) => (
              <div
                key={idx}
                className="rounded-xl shadow-md overflow-hidden border border-black/35"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                {/* Section Header */}
                <div
                  className="px-6 py-4"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <h3
                    className="text-lg font-bold"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {section.title}
                  </h3>
                </div>

                {/* Stats Row */}
                <div
                  className="flex border-b"
                  style={{
                    borderBottomColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
                  }}
                >
                  <div className="flex-1 px-4 py-3 text-center">
                    <div
                      className="text-xs uppercase tracking-wide"
                      style={{ color: 'var(--color-primary)', opacity: 0.5 }}
                    >
                      Questions
                    </div>
                    <div className="text-lg font-bold mt-1">{section.questionCount}</div>
                  </div>
                  {section.time && (
                    <div
                      className="flex-1 px-4 py-3 text-center border-l"
                      style={{
                        borderLeftColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
                      }}
                    >
                      <div
                        className="text-xs uppercase tracking-wide"
                        style={{ color: 'var(--color-primary)', opacity: 0.5 }}
                      >
                        Time
                      </div>
                      <div className="text-lg font-bold mt-1">{section.time}</div>
                    </div>
                  )}
                  <div
                    className="flex-1 px-4 py-3 text-center border-l"
                    style={{
                      borderLeftColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
                    }}
                  >
                    <div
                      className="text-xs uppercase tracking-wide"
                      style={{ color: 'var(--color-primary)', opacity: 0.5 }}
                    >
                      Score Weight
                    </div>
                    <div
                      className="text-lg font-bold mt-1"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {section.scoreWeight}
                    </div>
                  </div>
                </div>

                {/* Score Weight Bar */}
                <div className="px-6 pt-4 pb-2">
                  <div
                    className="w-full rounded-full h-2"
                    style={{
                      backgroundColor:
                        'color-mix(in srgb, var(--color-primary) 15%, var(--color-secondary))',
                    }}
                  >
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: section.scoreWeight,
                        backgroundColor: 'var(--color-primary)',
                      }}
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="px-6 py-4">
                  <h4
                    className="text-xs font-semibold uppercase tracking-wide mb-3"
                    style={{ color: 'var(--color-primary)', opacity: 0.5 }}
                  >
                    Details
                  </h4>
                  <ul className="space-y-2">
                    {section.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: 'var(--color-primary)', opacity: 0.8 }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: 'var(--color-primary)' }}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Source Attribution */}
          <div
            className="text-center text-xs py-4"
            style={{ color: 'var(--color-primary)', opacity: 0.5 }}
          >
            Data sourced from{' '}
            <a
              href={activeExam.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline cursor-pointer"
            >
              College Board AP Students
            </a>
          </div>
        </div>
      )}

      {!activeExam && (
        <div
          className="text-center py-16 rounded-xl"
          style={{
            backgroundColor:
              'color-mix(in srgb, var(--color-primary) 8%, var(--color-secondary))',
          }}
        >
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Select an Exam Above</h3>
          <p
            className="max-w-md mx-auto"
            style={{ color: 'var(--color-primary)', opacity: 0.7 }}
          >
            Choose an AP exam from the dropdown and click Search to view
            scoring guidelines, rubrics, and exam structure details.
          </p>
        </div>
      )}
    </div>
  )
}
