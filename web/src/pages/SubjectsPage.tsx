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
        <div className="text-xl text-gray-600">Loading subjects...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-red-600">Error: {error}</div>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-blue-600 hover:underline"
        >
          Back to Exams
        </button>
      </div>
    )
  }

  const examName = subjects[0]?.examName || 'Exam'

  return (
    <div>
      <button
        onClick={() => navigate('/')}
        className="text-blue-600 hover:underline mb-4 flex items-center"
      >
        ← Back to Exams
      </button>

      <h1 className="text-4xl font-bold mb-6">{examName} Subjects</h1>
      <p className="text-gray-600 mb-8">
        Select a subject to view available study resources
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <Link
            key={subject.id}
            to={`/subjects/${subject.id}`}
            className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-500"
          >
            <h3 className="font-semibold text-lg mb-2">{subject.name}</h3>
            {subject.description && (
              <p className="text-sm text-gray-600">{subject.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
