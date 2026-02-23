import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getExams, getSubjectsByExam } from '../services/api'
import type { Exam, Subject } from '../types/api'

interface HubSection {
  id: string
  title: string
  description: string
  icon: string
  linkTo: (examId: string) => string
}

const AP_SECTIONS: HubSection[] = [
  {
    id: 'practice',
    title: 'Topical Unit Reviews',
    description: 'Sharpen your skills with targeted practice questions and problem sets.',
    icon: '🎯',
    linkTo: (examId) => `/exams/${examId}/practice`,
  },
  {
    id: 'scoring',
    title: 'Scoring & Rubrics',
    description: 'Understand how AP exams are scored and what graders look for.',
    icon: '📊',
    linkTo: (examId) => `/exams/${examId}/exam-info`,
  },
  {
    id: 'tips',
    title: 'Exam Tips & Strategies',
    description: 'Proven strategies for time management, FRQs, and multiple choice.',
    icon: '💡',
    linkTo: (examId) => `/exams/${examId}/tips`,
  },
]

const SAT_SECTIONS: HubSection[] = [
  {
    id: 'practice',
    title: 'Topical Unit Reviews',
    description: 'Focused practice for Math, Reading, and Writing sections.',
    icon: '🎯',
    linkTo: (examId) => `/exams/${examId}/practice`,
  },
  {
    id: 'vocab',
    title: 'Vocabulary & Grammar',
    description: 'Essential vocabulary lists and grammar rules for the verbal sections.',
    icon: '📖',
    linkTo: (examId) => `/exams/${examId}`,
  },
  {
    id: 'tips',
    title: 'Exam Tips & Strategies',
    description: 'Time management, pacing guides, and test-day strategies.',
    icon: '💡',
    linkTo: (examId) => `/exams/${examId}/tips`,
  },
]

interface SubjectCategory {
  category: string
  subjectNames: string[]
}

const AP_SUBJECT_CATEGORIES: SubjectCategory[] = [
  {
    category: 'AP Capstone Diploma Program',
    subjectNames: ['AP Seminar'],
  },
  {
    category: 'Arts',
    subjectNames: ['AP Art History', 'AP Music Theory'],
  },
  {
    category: 'English',
    subjectNames: ['AP English Language', 'AP English Literature'],
  },
  {
    category: 'History and Social Sciences',
    subjectNames: [
      'AP African American Studies',
      'AP Comparative Government',
      'AP European History',
      'AP Human Geography',
      'AP Macroeconomics',
      'AP Microeconomics',
      'AP Psychology',
      'AP Government',
      'AP US History',
      'AP World History',
    ],
  },
  {
    category: 'Math',
    subjectNames: [
      'AP Calculus AB',
      'AP Calculus BC',
      'AP Precalculus',
      'AP Statistics',
    ],
  },
  {
    category: 'Computer Science',
    subjectNames: [
      'AP Computer Science A',
      'AP Computer Science Principles',
    ],
  },
  {
    category: 'Sciences',
    subjectNames: [
      'AP Biology',
      'AP Chemistry',
      'AP Environmental Science',
      'AP Physics 1',
      'AP Physics 2',
      'AP Physics C: E&M',
      'AP Physics C: Mechanics',
    ],
  },
  {
    category: 'World Languages and Cultures',
    subjectNames: ['AP Foreign Languages'],
  },
]

export default function ExamHubPage() {
  const { examId } = useParams<{ examId: string }>()
  const navigate = useNavigate()
  const [exam, setExam] = useState<Exam | null>(null)
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      if (!examId) return

      try {
        setLoading(true)
        const [exams, subjectData] = await Promise.all([
          getExams(),
          getSubjectsByExam(parseInt(examId)),
        ])
        const found = exams.find((e) => e.id === parseInt(examId))
        setExam(found || null)
        setSubjects(subjectData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [examId])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  if (error || !exam) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-red-600">
          Error: {error || 'Exam not found'}
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-4 hover:underline cursor-pointer"
          style={{ color: 'var(--color-primary)' }}
        >
          Back to Home
        </button>
      </div>
    )
  }

  const isAP = exam.name.toUpperCase() === 'AP'
  const sections = isAP ? AP_SECTIONS : SAT_SECTIONS

  return (
    <div>
      <button
        onClick={() => navigate('/')}
        className="hover:underline mb-6 flex items-center cursor-pointer"
        style={{ color: 'var(--color-primary)' }}
      >
        ← Back to Home
      </button>

      {/* Exam Header */}
      <div
        className="rounded-xl p-8 mb-10 shadow-md"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: 'var(--color-secondary)' }}
        >
          {exam.name} Resources
        </h1>
        <p
          className="text-lg opacity-80"
          style={{ color: 'var(--color-secondary)' }}
        >
          {exam.description}
        </p>
      </div>

      {/* Resource Sections Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">General Resource Categories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.linkTo(examId!)}
              className="group flex flex-col rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-black/35 cursor-pointer"
              style={{ backgroundColor: 'var(--color-secondary)' }}
            >
              <div className="p-6 flex-1">
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:underline">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600">{section.description}</p>
              </div>
              <div
                className="px-6 py-3 text-xs font-semibold mt-auto"
                style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
              >
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by Subject (categorized, AP only) */}
      {isAP && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Browse by Subject</h2>
          <p className="text-gray-600 mb-6">
            Explore {exam.name} subjects organized by category
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {AP_SUBJECT_CATEGORIES.map((cat) => {
              const matched = cat.subjectNames
                .map((name) => subjects.find((s) => s.name === name))
                .filter((s): s is Subject => s !== undefined)
              if (matched.length === 0) return null
              const isExpanded = expandedCategory === cat.category
              return (
                <div key={cat.category} className="relative">
                  <button
                    onClick={() =>
                      setExpandedCategory(isExpanded ? null : cat.category)
                    }
                    className="w-full p-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer text-left border border-black/35"
                    style={{ backgroundColor: 'var(--color-secondary)' }}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-sm">{cat.category}</h3>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {matched.length} exam{matched.length !== 1 ? 's' : ''}
                    </p>
                  </button>
                  {isExpanded && (
                    <div className="absolute z-10 left-0 right-0 mt-1 rounded-xl shadow-xl border border-black/35 overflow-hidden" style={{ backgroundColor: 'var(--color-secondary)' }}>
                      {matched.map((subject) => (
                        <Link
                          key={subject.id}
                          to={`/subjects/${subject.id}`}
                          className="block px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer border-l-4"
                          style={{ borderColor: 'var(--color-primary)' }}
                        >
                          {subject.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Browse by Exam */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Browse by Exam</h2>
        <p className="text-gray-600 mb-6">
          Jump directly to a specific {exam.name} exam
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects
            .filter((subject) => subject.name.toLowerCase() !== 'sat essay')
            .map((subject) => (
              <Link
                key={subject.id}
                to={`/subjects/${subject.id}`}
                className="block p-4 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border border-black/35 cursor-pointer"
                style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--color-secondary)' }}
              >
                <h3 className="font-semibold text-sm">{subject.name}</h3>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}
