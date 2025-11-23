import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getSubject, getResourcesBySubject } from '../services/api'
import type { Subject, StudyResource } from '../types/api'

export default function ResourcesPage() {
  const { subjectId } = useParams<{ subjectId: string }>()
  const navigate = useNavigate()
  const [subject, setSubject] = useState<Subject | null>(null)
  const [resources, setResources] = useState<StudyResource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

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
          className="mt-4 text-blue-600 hover:underline"
        >
          Back to Exams
        </button>
      </div>
    )
  }

  return (
    <div>
      <button
        onClick={() => navigate(`/exams/${subject.examId}`)}
        className="text-blue-600 hover:underline mb-4 flex items-center"
      >
        ← Back to {subject.examName} Subjects
      </button>

      <h1 className="text-4xl font-bold mb-2">{subject.name}</h1>
      <p className="text-gray-600 mb-8">{subject.description}</p>

      {resources.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No resources available for this subject yet.</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {resources.map((resource) => (
              <Link
                key={resource.id}
                to={`/resources/${resource.id}`}
                className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-500"
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
                className="px-4 py-2 bg-white border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              <span className="px-4 py-2 bg-gray-100 rounded">
                Page {page + 1} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                className="px-4 py-2 bg-white border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
