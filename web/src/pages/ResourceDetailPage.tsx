import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getResource } from '../services/api'
import type { StudyResource } from '../types/api'

export default function ResourceDetailPage() {
  const { resourceId } = useParams<{ resourceId: string }>()
  const navigate = useNavigate()
  const [resource, setResource] = useState<StudyResource | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadResource() {
      if (!resourceId) return

      try {
        setLoading(true)
        const data = await getResource(parseInt(resourceId))
        setResource(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load resource')
      } finally {
        setLoading(false)
      }
    }

    loadResource()
  }, [resourceId])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-gray-600">Loading resource...</div>
      </div>
    )
  }

  if (error || !resource) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-red-600">
          Error: {error || 'Resource not found'}
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
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => navigate(`/subjects/${resource.subjectId}`)}
        className="text-blue-600 hover:underline mb-6 flex items-center"
      >
        ← Back to {resource.subjectName}
      </button>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">{resource.title}</h1>

        <div className="flex gap-3 mb-6">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {resource.subjectName}
          </span>
          {resource.examYear && (
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              Year: {resource.examYear}
            </span>
          )}
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {resource.fileType}
          </span>
        </div>

        <p className="text-gray-700 mb-8">{resource.description}</p>

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Download Resource</h2>
          <a
            href={resource.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download PDF
          </a>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">About This Resource</h3>
          <p className="text-sm text-gray-600">
            This is a free educational resource. Click the download button above to
            open or save the PDF file.
          </p>
        </div>
      </div>
    </div>
  )
}
