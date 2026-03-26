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
        <div
          className="text-xl"
          style={{ color: 'var(--color-primary)', opacity: 0.65 }}
        >
          Loading resource...
        </div>
      </div>
    )
  }

  if (error || !resource) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-red-500">
          Error: {error || 'Resource not found'}
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-4 hover:underline cursor-pointer"
          style={{ color: 'var(--color-primary)' }}
        >
          Back to Exams
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto">
      <button
        onClick={() => navigate(`/subjects/${resource.subjectId}`)}
        className="hover:underline mb-6 flex items-center cursor-pointer"
        style={{ color: 'var(--color-primary)' }}
      >
        ← Back to {resource.subjectName}
      </button>

      <div className="rounded-lg shadow-lg p-8 border border-black/35" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <h1 className="text-3xl font-bold mb-4">{resource.title}</h1>

        <div className="flex gap-3 mb-6">
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
          >
            {resource.subjectName}
          </span>
          {resource.examYear && (
            <span
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor:
                  'color-mix(in srgb, var(--color-primary) 10%, var(--color-secondary))',
                color: 'color-mix(in srgb, var(--color-primary) 85%, var(--color-secondary))',
              }}
            >
              Year: {resource.examYear}
            </span>
          )}
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor:
                'color-mix(in srgb, var(--color-primary) 10%, var(--color-secondary))',
              color: 'color-mix(in srgb, var(--color-primary) 85%, var(--color-secondary))',
            }}
          >
            {resource.fileType}
          </span>
        </div>

        <p
          className="mb-8"
          style={{ color: 'var(--color-primary)', opacity: 0.75 }}
        >
          {resource.description}
        </p>

        {/* Inline PDF Viewer */}
        <div className="border-t pt-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">View Resource</h2>
          <div
            className="w-full rounded-lg overflow-hidden border"
            style={{
              borderColor:
                'color-mix(in srgb, var(--color-primary) 20%, transparent)',
              backgroundColor:
                'color-mix(in srgb, var(--color-primary) 10%, var(--color-secondary))',
            }}
          >
            <iframe
              src={resource.fileUrl}
              title={resource.title}
              className="w-full border-0"
              style={{ height: '80vh', minHeight: '600px' }}
            />
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Download Resource</h2>
          <a
            href={resource.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-opacity hover:opacity-90 font-medium cursor-pointer"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
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

        <div
          className="mt-6 p-4 rounded-lg"
          style={{
            backgroundColor:
              'color-mix(in srgb, var(--color-primary) 8%, var(--color-secondary))',
          }}
        >
          <h3 className="font-semibold mb-2">About This Resource</h3>
          <p
            className="text-sm"
            style={{ color: 'var(--color-primary)', opacity: 0.65 }}
          >
            This is a free educational resource. Click the download button above to
            open or save the PDF file.
          </p>
        </div>
      </div>
    </div>
  )
}
