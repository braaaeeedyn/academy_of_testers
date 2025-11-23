import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExams } from '../services/api'
import type { Exam } from '../types/api'

export default function ExamsPage() {
  const [exams, setExams] = useState<Exam[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadExams() {
      try {
        setLoading(true)
        const data = await getExams()
        setExams(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load exams')
      } finally {
        setLoading(false)
      }
    }

    loadExams()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-gray-600">Loading exams...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Browse Exams</h1>
      <p className="text-gray-600 mb-8">
        Select an exam to view available subjects and study materials
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {exams.map((exam) => (
          <Link
            key={exam.id}
            to={`/exams/${exam.id}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-blue-500"
          >
            <h2 className="text-2xl font-bold mb-2">{exam.name}</h2>
            <p className="text-gray-600">{exam.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
