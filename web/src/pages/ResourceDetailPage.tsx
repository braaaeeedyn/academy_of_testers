import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getResource, getSubject } from '../services/api'
import type { StudyResource, Subject } from '../types/api'
import { examSlug as toExamSlug, subjectSlug as toSubjectSlug } from '../utils/slug'

export default function ResourceDetailPage() {
  const { resourceId } = useParams<{ resourceId: string }>()
  const navigate = useNavigate()
  const [resource, setResource] = useState<StudyResource | null>(null)
  const [subject, setSubject] = useState<Subject | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadResource() {
      if (!resourceId) return

      try {
        setLoading(true)
        const data = await getResource(parseInt(resourceId))
        setResource(data)
        try {
          setSubject(await getSubject(data.subjectId))
        } catch {
          setSubject(null)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load resource')
      } finally {
        setLoading(false)
      }
    }

    loadResource()
  }, [resourceId])

  const subjectPath = subject
    ? `/${toExamSlug(subject.examName)}/${toSubjectSlug(subject.name)}`
    : '/'

  // Extract just the path from fileUrl so it goes through the Vite proxy (same origin)
  const fileUrl = (() => {
    if (!resource?.fileUrl) return ''
    try {
      const url = new URL(resource.fileUrl)
      return url.pathname
    } catch {
      return resource.fileUrl
    }
  })()

  if (loading) {
    return (
      <div className="text-center py-12">
        <div
          className="text-xl"
          style={{ color: 'var(--text-muted)' }}
        >
          Loading resource...
        </div>
      </div>
    )
  }

  if (error || !resource) {
    return (
      <div className="text-center py-12">
        <div className="text-xl" style={{ color: 'var(--error)' }}>
          Error: {error || 'Resource not found'}
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-4 hover:underline cursor-pointer"
          style={{ color: 'var(--text)' }}
        >
          Back to Exams
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto">
      <button
        onClick={() => navigate(subjectPath)}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer border transition-colors flex-shrink-0 mb-6"
        style={{ color: 'var(--text)', backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 19l-7-7 7-7" />
        </svg>
        Back to {resource.subjectName}
      </button>

      <div className="rounded-2xl shadow-sm p-8 border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}>
        <h1 className="font-display text-3xl font-bold mb-4">{resource.title}</h1>

        <div className="flex flex-wrap gap-3 mb-6">
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
          >
            {resource.subjectName}
          </span>
          {resource.examYear && (
            <span
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--text) 8%, transparent)',
                color: 'var(--text-muted)',
              }}
            >
              Year: {resource.examYear}
            </span>
          )}
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--text) 8%, transparent)',
              color: 'var(--text-muted)',
            }}
          >
            {resource.fileType}
          </span>
        </div>

        <p
          className="mb-8"
          style={{ color: 'var(--text-muted)' }}
        >
          {resource.description}
        </p>

        {/* Inline PDF Viewer */}
        <div className="pt-6 mb-8" style={{ borderTop: '1px solid var(--hairline)' }}>
          <h2 className="font-display text-xl font-semibold mb-4">View Resource</h2>
          <div
            className="w-full rounded-lg overflow-hidden border"
            style={{
              borderColor: 'var(--hairline)',
              backgroundColor: 'color-mix(in srgb, var(--text) 5%, var(--surface))',
            }}
          >
            <iframe
              src={fileUrl}
              title={resource.title}
              className="w-full border-0"
              style={{ height: '80vh', minHeight: '600px' }}
            />
          </div>
        </div>

        <div className="pt-6" style={{ borderTop: '1px solid var(--hairline)' }}>
          <h2 className="font-display text-xl font-semibold mb-4">Download Resource</h2>
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            <div className="docs">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Download PDF
            </div>
            <div className="download">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
          </a>
        </div>

        <div
          className="mt-6 p-4 rounded-lg border"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--text) 5%, var(--surface))',
            borderColor: 'var(--hairline)',
          }}
        >
          <h3 className="font-semibold mb-2">About This Resource</h3>
          <p
            className="text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            This is a free educational resource. Click the download button above to
            open or save the PDF file.
          </p>
        </div>
      </div>
    </div>
  )
}
