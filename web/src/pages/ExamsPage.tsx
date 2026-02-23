import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExams } from '../services/api'
import type { Exam } from '../types/api'

// Place your logo at: web/public/aotpfp.png
const LOGO_PATH = '/aotpfp.png'

export default function ExamsPage() {
  const [exams, setExams] = useState<Exam[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [logoError, setLogoError] = useState(false)

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

  return (
    <div>
      {/* Hero Section with Logo */}
      <div className="text-center py-12 mb-4">
        <div className="flex justify-center mb-6">
          {logoError ? (
            <div
              className="w-40 h-40 rounded-full flex items-center justify-center text-4xl font-bold"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              AoT
            </div>
          ) : (
            <img
              src={LOGO_PATH}
              alt="Academy of Testers"
              className="w-40 h-40 rounded-full object-cover shadow-lg"
              onError={() => setLogoError(true)}
            />
          )}
        </div>
        <h1 className="text-5xl font-bold mb-4">Academy of Testers</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your free hub for AP and SAT exam preparation. Browse study materials,
          practice exams, video resources, study guides, and more — select an
          exam below to get started.
        </p>
      </div>

      <section>

        {loading && (
          <div className="text-center py-12">
            <div className="text-xl text-gray-600">Loading...</div>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="text-xl text-red-600">Error: {error}</div>
          </div>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 gap-8">
            {exams.map((exam) => (
              <Link
                key={exam.id}
                to={`/exams/${exam.id}/hub`}
                className="group block rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-200 cursor-pointer ring-0 hover:ring-4 ring-white/50 border border-black/35"
              >
                <div
                  className="p-8"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <h3
                    className="text-3xl font-bold mb-2"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {exam.name}
                  </h3>
                  <p
                    className="text-sm opacity-80"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {exam.name.toUpperCase() === 'AP'
                      ? 'Resources for 25+ AP Exams'
                      : exam.name.toUpperCase() === 'SAT'
                        ? 'Practice Tests and Review Materials for all parts of the SAT'
                        : exam.description}
                  </p>
                </div>
                <div className="p-5 flex items-center justify-between" style={{ backgroundColor: 'var(--color-secondary)' }}>
                  <span className="text-sm font-medium text-gray-700">
                    Explore {exam.name} resources
                  </span>
                  <span
                    className="text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Get Started →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
