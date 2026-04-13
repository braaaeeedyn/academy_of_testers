import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AP_PRACTICE_DATA } from '../data/practiceProblems/apPracticeQuestions'
import type { APPracticeExam, ExamUnit, PracticeQuestion } from '../data/practiceProblems/apPracticeQuestions'
import MathText from '../components/MathText'

export default function PracticePage() {
  const { examId } = useParams<{ examId: string }>()
  const navigate = useNavigate()
  const [selectedSlug, setSelectedSlug] = useState('')
  const [activeExam, setActiveExam] = useState<APPracticeExam | null>(null)
  const [activeUnit, setActiveUnit] = useState<ExamUnit | null>(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)

  const handleSearch = () => {
    if (!selectedSlug) return
    const found = AP_PRACTICE_DATA.find((e) => e.slug === selectedSlug)
    setActiveExam(found || null)
    setActiveUnit(null)
    resetQuiz()
  }

  const handleSelectUnit = (unit: ExamUnit) => {
    setActiveUnit(unit)
    resetQuiz()
  }

  const resetQuiz = () => {
    setCurrentQ(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnswered(0)
  }

  const handleAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(optionIndex)
    setShowExplanation(true)
    setAnswered((a) => a + 1)
    if (activeUnit && optionIndex === activeUnit.questions[currentQ].correctAnswer) {
      setScore((s) => s + 1)
    }
  }

  const handleNext = () => {
    if (!activeUnit) return
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

  const question: PracticeQuestion | null = activeUnit ? activeUnit.questions[currentQ] : null

  return (
    <div>
      <button
        onClick={() => navigate(examId ? `/exams/${examId}/hub` : '/')}
        className="hover:underline mb-6 flex items-center cursor-pointer"
        style={{ color: 'var(--color-primary)' }}
      >
        ← Back to Hub
      </button>

      <div
        className="rounded-xl p-8 mb-8 shadow-md"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: 'var(--color-secondary)' }}
        >
          Topical Unit Review
        </h1>
        <p
          className="text-lg opacity-80"
          style={{ color: 'var(--color-secondary)' }}
        >
          Test your knowledge with 20 practice questions per unit
        </p>
      </div>

      {/* Exam Selector */}
      <div className="rounded-xl shadow-md p-6 mb-8 border border-black/35" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <h2 className="text-xl font-bold mb-4">Select an AP Exam</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="flex-1 px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 cursor-pointer"
            style={{
              borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
            }}
          >
            <option value="">-- Choose an exam --</option>
            {AP_PRACTICE_DATA.map((exam) => (
              <option key={exam.slug} value={exam.slug}>
                {exam.label}
              </option>
            ))}
          </select>
          <button
            onClick={handleSearch}
            disabled={!selectedSlug}
            className="px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-secondary)',
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Unit Selection */}
      {activeExam && !activeUnit && (
        <div>
          <h2 className="text-2xl font-bold mb-4">{activeExam.label} — Select a Unit</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {activeExam.units.map((unit) => (
              <button
                key={unit.unitNumber}
                onClick={() => handleSelectUnit(unit)}
                className="group flex flex-col rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-black/35 cursor-pointer text-left"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                <div className="p-5 flex-1">
                  <div
                    className="text-xs font-bold uppercase tracking-wide mb-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Unit {unit.unitNumber}
                  </div>
                  <h3 className="text-lg font-bold mb-1 group-hover:underline">
                    {unit.title}
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--color-primary)', opacity: 0.5 }}>
                    {unit.questions.length} questions
                  </p>
                </div>
                <div
                  className="px-5 py-2 text-xs font-semibold mt-auto"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                >
                  Start Practice →
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quiz View */}
      {activeUnit && question && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setActiveUnit(null)}
              className="hover:underline flex items-center cursor-pointer"
              style={{ color: 'var(--color-primary)' }}
            >
              ← Back to units
            </button>
            <div className="flex items-center gap-4">
              <span
                className="text-sm font-medium"
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

          {/* Progress Bar */}
          <div
            className="w-full rounded-full h-2 mb-6"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--color-primary) 15%, var(--color-secondary))',
            }}
          >
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQ + 1) / activeUnit.questions.length) * 100}%`,
                backgroundColor: 'var(--color-primary)',
              }}
            />
          </div>

          {/* Question Card */}
          <div className="rounded-xl shadow-md border border-black/35 overflow-hidden" style={{ backgroundColor: 'var(--color-secondary)' }}>
            <div
              className="px-6 py-4"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <h3
                className="text-sm font-bold uppercase tracking-wide"
                style={{ color: 'var(--color-secondary)' }}
              >
                Unit {activeUnit.unitNumber}: {activeUnit.title}
              </h3>
            </div>

            <div className="p-6">
              <MathText className="text-lg font-semibold mb-6" component="p">
                {question.question}
              </MathText>

              <div className="space-y-3">
                {question.options.map((option, idx) => {
                  let optionClass = 'border border-black/35 rounded-lg p-4 cursor-pointer transition-all text-left w-full'
                  let optionStyle: React.CSSProperties = { backgroundColor: 'var(--color-secondary)' }

                  if (selectedAnswer !== null) {
                    if (idx === question.correctAnswer) {
                      optionClass += ' ring-2 ring-green-500'
                      optionStyle = { backgroundColor: '#d1fae5' }
                    } else if (idx === selectedAnswer && idx !== question.correctAnswer) {
                      optionClass += ' ring-2 ring-red-500'
                      optionStyle = { backgroundColor: '#fee2e2' }
                    }
                  } else {
                    optionClass += ' hover:shadow-md'
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className={optionClass}
                      style={optionStyle}
                      disabled={selectedAnswer !== null}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                        >
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <MathText className="text-sm" component="span">
                          {option}
                        </MathText>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <div className="mt-6 p-4 rounded-lg border border-black/35" style={{ backgroundColor: selectedAnswer === question.correctAnswer ? '#d1fae5' : '#fee2e2' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{selectedAnswer === question.correctAnswer ? '✅' : '❌'}</span>
                    <span className="font-bold text-sm">
                      {selectedAnswer === question.correctAnswer ? 'Correct!' : `Incorrect — Answer: ${String.fromCharCode(65 + question.correctAnswer)}`}
                    </span>
                  </div>
                  <MathText
                    className="text-sm"
                    component="p"
                    style={{ color: 'var(--color-primary)', opacity: 0.7 }}
                  >
                    {question.explanation}
                  </MathText>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePrev}
                  disabled={currentQ === 0}
                  className="px-5 py-2 rounded-lg text-sm font-medium border border-black/35 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity hover:opacity-80"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  ← Previous
                </button>
                {currentQ < activeUnit.questions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={selectedAnswer === null}
                    className="px-5 py-2 rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity hover:opacity-90"
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
      )}

      {/* Empty State */}
      {!activeExam && (
        <div
          className="text-center py-16 rounded-xl"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-primary) 8%, var(--color-secondary))',
          }}
        >
          <div className="text-5xl mb-4">🎯</div>
          <h3 className="text-xl font-bold mb-2">Select an Exam Above</h3>
          <p className="max-w-md mx-auto" style={{ color: 'var(--color-primary)', opacity: 0.65 }}>
            Choose an AP exam from the dropdown and click Search to start
            practicing with unit-based multiple choice questions.
          </p>
        </div>
      )}
    </div>
  )
}
