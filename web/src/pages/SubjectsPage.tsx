import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getSubjectsByExam } from '../services/api'
import type { Subject } from '../types/api'

export default function SubjectsPage() {
  const { examId } = useParams<{ examId: string }>()
  const navigate = useNavigate()
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadSubjects() {
      if (!examId) return

      try {
        setLoading(true)
        const data = await getSubjectsByExam(parseInt(examId))
        setSubjects(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load subjects')
      } finally {
        setLoading(false)
      }
    }

    loadSubjects()
  }, [examId])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div
          className="text-xl"
          style={{ color: 'var(--color-primary)', opacity: 0.65 }}
        >
          Loading subjects...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-red-500">Error: {error}</div>
        <button
          onClick={() => navigate(examId ? `/exams/${examId}/hub` : '/')}
          className="mt-4 hover:underline cursor-pointer"
          style={{ color: 'var(--color-primary)' }}
        >
          Back to Hub
        </button>
      </div>
    )
  }

  const examName = subjects[0]?.examName || 'Exam'

  return (
    <div>
      <button
        onClick={() => navigate(`/exams/${examId}/hub`)}
        className="hover:underline mb-4 flex items-center cursor-pointer"
        style={{ color: 'var(--color-primary)' }}
      >
        ← Back to {examName} Hub
      </button>

      <h1 className="text-4xl font-bold mb-6">{examName} Subjects</h1>
      <p
        className="mb-8"
        style={{ color: 'var(--color-primary)', opacity: 0.65 }}
      >
        Select a subject to view available study resources
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {subjects
          .filter((subject) => subject.name.toLowerCase() !== 'sat essay')
          .map((subject) => (
            <Link
              key={subject.id}
              to={`/subjects/${subject.id}`}
              className="block p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-black/35 cursor-pointer"
              style={{ backgroundColor: 'var(--color-secondary)' }}
            >
              <h3 className="font-semibold text-lg mb-2">{subject.name}</h3>
              {subject.description && (
                <p
                  className="text-sm"
                  style={{ color: 'var(--color-primary)', opacity: 0.65 }}
                >
                  {subject.description}
                </p>
              )}
            </Link>
          ))}
      </div>
    </div>
  )
}
