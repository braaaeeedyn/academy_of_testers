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
      <button
        onClick={() => navigate(examId ? `/exams/${examId}/hub` : '/')}
        className="hover:underline mb-6 flex items-center cursor-pointer"
        style={{ color: 'var(--color-primary)' }}
      >
        ← Back to Hub
      </button>

      <div
        className="rounded-xl p-8 mb-8 shadow-md"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: 'var(--color-secondary)' }}
        >
          AP Exam Information
        </h1>
        <p
          className="text-lg opacity-80"
          style={{ color: 'var(--color-secondary)' }}
        >
          View official scoring guidelines, rubrics, and exam details from College Board
        </p>
      </div>

      {/* Exam Selector */}
      <div className="rounded-xl shadow-md p-6 mb-8 border border-black/35" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <h2 className="text-xl font-bold mb-4">Select an AP Exam</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 cursor-pointer"
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
                <div className="flex divide-x divide-gray-200 border-b border-gray-200">
                  <div className="flex-1 px-4 py-3 text-center">
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Questions</div>
                    <div className="text-lg font-bold mt-1">{section.questionCount}</div>
                  </div>
                  {section.time && (
                    <div className="flex-1 px-4 py-3 text-center">
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Time</div>
                      <div className="text-lg font-bold mt-1">{section.time}</div>
                    </div>
                  )}
                  <div className="flex-1 px-4 py-3 text-center">
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Score Weight</div>
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
                  <div className="w-full bg-gray-200 rounded-full h-2">
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
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Details
                  </h4>
                  <ul className="space-y-2">
                    {section.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-sm text-gray-700">
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
          <div className="text-center text-xs text-gray-400 py-4">
            Data sourced from{' '}
            <a
              href={activeExam.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600 cursor-pointer"
            >
              College Board AP Students
            </a>
          </div>
        </div>
      )}

      {!activeExam && (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <div className="text-5xl mb-4">📊</div>
          <h3 className="text-xl font-bold mb-2">Select an Exam Above</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Choose an AP exam from the dropdown and click Search to view
            scoring guidelines, rubrics, and exam structure details.
          </p>
        </div>
      )}
    </div>
  )
}
