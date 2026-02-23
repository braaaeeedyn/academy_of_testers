import { useEffect, useState, useMemo } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getSubject, getResourcesBySubject } from '../services/api'
import type { Subject, StudyResource } from '../types/api'
import { getTopicalExamBySubjectName } from '../data/topicalQuestions'
import PracticeProblemsQuiz from '../components/PracticeProblemsQuiz'

type ResourceCategory = 'cheat-sheets' | 'practice-problems' | 'video-resources' | 'practice-exams'

interface CategoryInfo {
  id: ResourceCategory
  title: string
  description: string
  icon: string
}

const CATEGORIES: CategoryInfo[] = [
  {
    id: 'cheat-sheets',
    title: 'Cheat Sheets',
    description: 'Quick reference guides and formula sheets for fast review.',
    icon: '📋',
  },
  {
    id: 'practice-problems',
    title: 'Practice Problems',
    description: 'Targeted practice questions to sharpen your skills.',
    icon: '✏️',
  },
  {
    id: 'video-resources',
    title: 'Video Resources',
    description: 'Video walkthroughs, concept reviews, and tutorials.',
    icon: '🎬',
  },
  {
    id: 'practice-exams',
    title: 'Practice Exams',
    description: 'Full-length and released practice exams from past years.',
    icon: '📝',
  },
]

export default function ResourcesPage() {
  const { subjectId } = useParams<{ subjectId: string }>()
  const navigate = useNavigate()
  const [subject, setSubject] = useState<Subject | null>(null)
  const [resources, setResources] = useState<StudyResource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | null>(null)

  const topicalExam = useMemo(
    () => (subject ? getTopicalExamBySubjectName(subject.name) : undefined),
    [subject]
  )

  useEffect(() => {
    async function loadData() {
      if (!subjectId) return

      try {
        setLoading(true)
        const [subjectData, resourcesData] = await Promise.all([
          getSubject(parseInt(subjectId)),
          getResourcesBySubject(parseInt(subjectId), page),
        ])
        setSubject(subjectData)
        setResources(resourcesData.content)
        setTotalPages(resourcesData.totalPages)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load resources')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [subjectId, page])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-gray-600">Loading resources...</div>
      </div>
    )
  }

  if (error || !subject) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-red-600">
          Error: {error || 'Subject not found'}
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

  return (
    <div>
      <button
        onClick={() => navigate(`/exams/${subject.examId}/hub`)}
        className="hover:underline mb-4 flex items-center cursor-pointer"
        style={{ color: 'var(--color-primary)' }}
      >
        ← Back to {subject.examName} Hub
      </button>

      <div
        className="rounded-xl p-8 mb-8 shadow-md"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: 'var(--color-secondary)' }}
        >
          {subject.name}
        </h1>
        <p
          className="text-lg opacity-80"
          style={{ color: 'var(--color-secondary)' }}
        >
          {subject.description}
        </p>
      </div>

      {/* Resource Category Cards */}
      {activeCategory === null && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Resource Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="group flex flex-col rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-black/35 cursor-pointer text-left"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                <div className="p-5 flex-1">
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="text-lg font-bold mb-1 group-hover:underline">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-gray-600">{cat.description}</p>
                </div>
                <div
                  className="px-5 py-2 text-xs font-semibold mt-auto"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                >
                  Browse →
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Practice Problems Quiz (rendered without extra header since quiz has its own nav) */}
      {activeCategory === 'practice-problems' && topicalExam && (
        <section>
          <PracticeProblemsQuiz
            exam={topicalExam}
            onBack={() => setActiveCategory(null)}
          />
        </section>
      )}

      {/* Active Category View (non-practice-problems) */}
      {activeCategory !== null && !(activeCategory === 'practice-problems' && topicalExam) && (
        <section>
          <button
            onClick={() => setActiveCategory(null)}
            className="hover:underline mb-4 flex items-center cursor-pointer"
            style={{ color: 'var(--color-primary)' }}
          >
            ← Back to {subject.name} categories
          </button>

          <h2 className="text-2xl font-bold mb-6">
            {CATEGORIES.find((c) => c.id === activeCategory)?.title}
          </h2>

          {activeCategory === 'practice-exams' ? (
            <>
              {resources.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">No practice exams available for this subject yet.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    {resources.map((resource) => (
                      <Link
                        key={resource.id}
                        to={`/resources/${resource.id}`}
                        className="block p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-black/35 cursor-pointer"
                        style={{ backgroundColor: 'var(--color-secondary)' }}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{resource.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                            <div className="flex gap-3 text-xs text-gray-500">
                              {resource.examYear && (
                                <span className="bg-gray-100 px-2 py-1 rounded">
                                  Year: {resource.examYear}
                                </span>
                              )}
                              <span className="bg-gray-100 px-2 py-1 rounded">
                                {resource.fileType}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <svg
                              className="w-6 h-6 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                      <button
                        onClick={() => setPage((p) => Math.max(0, p - 1))}
                        disabled={page === 0}
                        className="px-4 py-2 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 cursor-pointer"
                        style={{ backgroundColor: 'var(--color-secondary)' }}
                      >
                        Previous
                      </button>
                      <span className="px-4 py-2 bg-gray-100 rounded">
                        Page {page + 1} of {totalPages}
                      </span>
                      <button
                        onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                        disabled={page >= totalPages - 1}
                        className="px-4 py-2 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 cursor-pointer"
                        style={{ backgroundColor: 'var(--color-secondary)' }}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <div className="text-5xl mb-4">
                {CATEGORIES.find((c) => c.id === activeCategory)?.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                {CATEGORIES.find((c) => c.id === activeCategory)?.title} for{' '}
                {subject.name} are being prepared. Check back soon!
              </p>
            </div>
          )}
        </section>
      )}
    </div>
  )
}
