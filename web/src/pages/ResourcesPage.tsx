import { useEffect, useState, useMemo } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getSubject, getResourcesBySubject } from '../services/api'
import type { Subject, StudyResource } from '../types/api'
import { getTopicalExamBySubjectName } from '../data/topicalQuestions'
import PracticeProblemsQuiz from '../components/PracticeProblemsQuiz'
import { getUnitOverviewBySubjectName } from '../data/unitOverviews'
import UnitOverviews from '../components/UnitOverviews'
import { AP_PRACTICE_DATA } from '../data/apPracticeQuestions'

type ResourceCategory = 'cheat-sheets' | 'practice-problems' | 'topical-review' | 'video-resources' | 'practice-exams'

interface CategoryInfo {
  id: ResourceCategory
  title: string
  description: string
  iconPath: string
}

const BASE_CATEGORIES: CategoryInfo[] = [
  {
    id: 'cheat-sheets',
    title: 'Unit Overviews',
    description: 'High-level summaries of each unit and subunit.',
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  },
  {
    id: 'practice-problems',
    title: 'Practice Problems',
    description: 'Targeted practice questions to sharpen your skills.',
    iconPath: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
  },
  {
    id: 'topical-review',
    title: 'Topical Unit Review',
    description: 'Unit-by-unit multiple choice quiz with explanations.',
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    id: 'video-resources',
    title: 'Video Resources',
    description: 'Video walkthroughs, concept reviews, and tutorials.',
    iconPath: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  },
  {
    id: 'practice-exams',
    title: 'Practice Exams',
    description: 'Full-length and released practice exams from past years.',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
]

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      className={className || 'w-5 h-5'}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  )
}

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

  const unitOverview = useMemo(
    () => (subject ? getUnitOverviewBySubjectName(subject.name) : undefined),
    [subject]
  )

  const hasTopicalReview = useMemo(
    () => {
      if (!subject) return false
      const slug = subject.name.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '')
      return AP_PRACTICE_DATA.some((e) => e.slug === slug)
    },
    [subject]
  )

  const categories = useMemo(() => {
    return BASE_CATEGORIES.filter((cat) => {
      if (cat.id === 'topical-review') return hasTopicalReview
      return true
    })
  }, [hasTopicalReview])

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
        <div
          className="text-xl"
          style={{ color: 'var(--color-primary)', opacity: 0.7 }}
        >
          Loading resources...
        </div>
      </div>
    )
  }

  if (error || !subject) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-red-500">
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
      {/* Compact subject header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
          >
            <Icon
              path="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              className="w-5 h-5"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold leading-tight">{subject.name}</h1>
            {subject.description && (
              <p
                className="text-sm mt-0.5"
                style={{ color: 'var(--color-primary)', opacity: 0.6 }}
              >
                {subject.description}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={() => activeCategory !== null ? setActiveCategory(null) : navigate(`/exams/${subject.examId}/hub`)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
          style={{
            color: 'var(--color-secondary)',
            backgroundColor: 'var(--color-primary)',
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          {activeCategory !== null ? subject.name : `${subject.examName} Hub`}
        </button>
      </div>

      {/* Resource Category Cards */}
      {activeCategory === null && (
        <section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="group flex items-start gap-4 p-5 rounded-xl border border-black/10 hover:shadow-lg transition-all cursor-pointer text-left"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                >
                  <Icon path={cat.iconPath} className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold group-hover:underline">{cat.title}</h3>
                  <p
                    className="text-xs mt-1 leading-relaxed"
                    style={{ color: 'var(--color-primary)', opacity: 0.55 }}
                  >
                    {cat.description}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 flex-shrink-0 mt-1 opacity-20 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Topical Unit Review (from PracticePage data) */}
      {activeCategory === 'topical-review' && (
        <section>
          <TopicalReviewInline subjectName={subject.name} />
        </section>
      )}

      {/* Practice Problems Quiz */}
      {activeCategory === 'practice-problems' && topicalExam && (
        <section>
          <PracticeProblemsQuiz
            exam={topicalExam}
            onBack={() => setActiveCategory(null)}
          />
        </section>
      )}

      {/* Unit Overviews */}
      {activeCategory === 'cheat-sheets' && unitOverview && (
        <section>
          <UnitOverviews overview={unitOverview} onBack={() => setActiveCategory(null)} />
        </section>
      )}

      {/* Active Category View (non-practice-problems, non-unit-overviews, non-topical-review) */}
      {activeCategory !== null &&
        !(activeCategory === 'topical-review') &&
        !(activeCategory === 'practice-problems' && topicalExam) &&
        !(activeCategory === 'cheat-sheets' && unitOverview) && (
        <section>
          <h2 className="text-xl font-bold mb-6">
            {categories.find((c) => c.id === activeCategory)?.title}
          </h2>

          {activeCategory === 'practice-exams' ? (
            <>
              {resources.length === 0 ? (
                <div
                  className="text-center py-12 rounded-lg"
                  style={{
                    backgroundColor:
                      'color-mix(in srgb, var(--color-primary) 8%, var(--color-secondary))',
                  }}
                >
                  <p style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
                    No practice exams available for this subject yet.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {resources.map((resource) => (
                      <Link
                        key={resource.id}
                        to={`/resources/${resource.id}`}
                        className="group flex items-center gap-4 p-4 rounded-xl border border-black/10 hover:shadow-md transition-all cursor-pointer"
                        style={{ backgroundColor: 'var(--color-secondary)' }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                        >
                          <Icon
                            path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            className="w-5 h-5"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold group-hover:underline">{resource.title}</h3>
                          <p
                            className="text-xs mt-0.5"
                            style={{ color: 'var(--color-primary)', opacity: 0.5 }}
                          >
                            {resource.description}
                          </p>
                          <div
                            className="flex gap-2 mt-1.5 text-xs"
                            style={{ color: 'var(--color-primary)', opacity: 0.4 }}
                          >
                            {resource.examYear && <span>Year: {resource.examYear}</span>}
                            <span>{resource.fileType}</span>
                          </div>
                        </div>
                        <svg
                          className="w-4 h-4 flex-shrink-0 opacity-20 group-hover:opacity-60 transition-opacity"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                      <button
                        onClick={() => setPage((p) => Math.max(0, p - 1))}
                        disabled={page === 0}
                        className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 cursor-pointer"
                        style={{
                          backgroundColor: 'var(--color-secondary)',
                          borderColor:
                            'color-mix(in srgb, var(--color-primary) 20%, transparent)',
                        }}
                      >
                        Previous
                      </button>
                      <span
                        className="px-4 py-2 rounded"
                        style={{
                          backgroundColor:
                            'color-mix(in srgb, var(--color-primary) 10%, var(--color-secondary))',
                        }}
                      >
                        Page {page + 1} of {totalPages}
                      </span>
                      <button
                        onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                        disabled={page >= totalPages - 1}
                        className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 cursor-pointer"
                        style={{
                          backgroundColor: 'var(--color-secondary)',
                          borderColor:
                            'color-mix(in srgb, var(--color-primary) 20%, transparent)',
                        }}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <div
              className="text-center py-16 rounded-xl"
              style={{
                backgroundColor:
                  'color-mix(in srgb, var(--color-primary) 8%, var(--color-secondary))',
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto"
                style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
              >
                <Icon
                  path={categories.find((c) => c.id === activeCategory)?.iconPath || ''}
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
              <p
                className="max-w-md mx-auto"
                style={{ color: 'var(--color-primary)', opacity: 0.7 }}
              >
                {categories.find((c) => c.id === activeCategory)?.title} for{' '}
                {subject.name} are being prepared. Check back soon!
              </p>
            </div>
          )}
        </section>
      )}
    </div>
  )
}

function TopicalReviewInline({
  subjectName,
}: {
  subjectName: string
}) {
  const slug = subjectName.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '')
  const exam = AP_PRACTICE_DATA.find((e) => e.slug === slug)

  const [activeUnit, setActiveUnit] = useState<(typeof exam extends undefined ? never : NonNullable<typeof exam>)['units'][number] | null>(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)

  const resetQuiz = () => {
    setCurrentQ(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnswered(0)
  }

  if (!exam) {
    return (
      <div>
        <p style={{ color: 'var(--color-primary)', opacity: 0.6 }}>
          No topical review data available for this subject.
        </p>
      </div>
    )
  }

  if (!activeUnit) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Topical Unit Review — Select a Unit</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {exam.units.map((unit) => (
            <button
              key={unit.unitNumber}
              onClick={() => { setActiveUnit(unit); resetQuiz() }}
              className="group flex items-start gap-3 p-4 rounded-xl border border-black/10 hover:shadow-md transition-all cursor-pointer text-left"
              style={{ backgroundColor: 'var(--color-secondary)' }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
                style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
              >
                {unit.unitNumber}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold group-hover:underline">{unit.title}</h3>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: 'var(--color-primary)', opacity: 0.5 }}
                >
                  {unit.questions.length} questions
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const question = activeUnit.questions[currentQ]
  if (!question) return null

  const handleAnswer = (idx: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(idx)
    setShowExplanation(true)
    setAnswered((a) => a + 1)
    if (idx === question.correctAnswer) setScore((s) => s + 1)
  }

  const handleNext = () => {
    if (currentQ < activeUnit.questions.length - 1) {
      setCurrentQ((q) => q + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ((q) => q - 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setActiveUnit(null)}
          className="hover:underline flex items-center cursor-pointer text-sm"
          style={{ color: 'var(--color-primary)' }}
        >
          ← Back to units
        </button>
        <div className="flex items-center gap-3">
          <span
            className="text-sm"
            style={{ color: 'var(--color-primary)', opacity: 0.65 }}
          >
            Score: {score}/{answered}
          </span>
          <span
            className="text-sm font-bold px-3 py-1 rounded-full"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
          >
            {currentQ + 1} / {activeUnit.questions.length}
          </span>
        </div>
      </div>

      <div
        className="w-full rounded-full h-2 mb-6"
        style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 15%, var(--color-secondary))' }}
      >
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{
            width: `${((currentQ + 1) / activeUnit.questions.length) * 100}%`,
            backgroundColor: 'var(--color-primary)',
          }}
        />
      </div>

      <div
        className="rounded-xl shadow-md border border-black/10 overflow-hidden"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      >
        <div className="px-6 py-4" style={{ backgroundColor: 'var(--color-primary)' }}>
          <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: 'var(--color-secondary)' }}>
            Unit {activeUnit.unitNumber}: {activeUnit.title}
          </h3>
        </div>
        <div className="p-6">
          <p className="text-base font-semibold mb-6">{question.question}</p>
          <div className="space-y-3">
            {question.options.map((option, idx) => {
              let cls = 'border border-black/10 rounded-lg p-4 cursor-pointer transition-all text-left w-full'
              let st: React.CSSProperties = { backgroundColor: 'var(--color-secondary)' }
              if (selectedAnswer !== null) {
                if (idx === question.correctAnswer) {
                  cls += ' ring-2 ring-green-500'
                  st = { backgroundColor: '#d1fae5' }
                } else if (idx === selectedAnswer) {
                  cls += ' ring-2 ring-red-500'
                  st = { backgroundColor: '#fee2e2' }
                }
              } else {
                cls += ' hover:shadow-md'
              }
              return (
                <button key={idx} onClick={() => handleAnswer(idx)} className={cls} style={st} disabled={selectedAnswer !== null}>
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm">{option}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {showExplanation && (
            <div
              className="mt-6 p-4 rounded-lg border border-black/10"
              style={{ backgroundColor: selectedAnswer === question.correctAnswer ? '#d1fae5' : '#fee2e2' }}
            >
              <span className="font-bold text-sm">
                {selectedAnswer === question.correctAnswer ? 'Correct!' : `Incorrect — Answer: ${String.fromCharCode(65 + question.correctAnswer)}`}
              </span>
              <p className="text-sm mt-1" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
                {question.explanation}
              </p>
            </div>
          )}

          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              disabled={currentQ === 0}
              className="px-5 py-2 rounded-lg text-sm font-medium border border-black/10 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              style={{ backgroundColor: 'var(--color-secondary)' }}
            >
              ← Previous
            </button>
            {currentQ < activeUnit.questions.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={selectedAnswer === null}
                className="px-5 py-2 rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
              >
                Next →
              </button>
            ) : (
              selectedAnswer !== null && (
                <div
                  className="px-5 py-2 rounded-lg text-sm font-semibold"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                >
                  Final Score: {score}/{answered}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
