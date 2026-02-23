import { useState, useMemo, useCallback } from 'react'
import type { TopicalExam, TopicalQuestion, TopicalUnit } from '../data/topicalQuestions'

type Difficulty = 'easy' | 'medium' | 'hard'

interface QuizQuestion {
  unitNumber: number
  unitTitle: string
  question: TopicalQuestion
}

function pickRandom(questions: TopicalQuestion[]): TopicalQuestion {
  return questions[Math.floor(Math.random() * questions.length)]
}

function buildQuiz(exam: TopicalExam, difficulty: Difficulty): QuizQuestion[] {
  return exam.units.map((unit: TopicalUnit) => ({
    unitNumber: unit.unitNumber,
    unitTitle: unit.title,
    question: pickRandom(unit[difficulty]),
  }))
}

interface Props {
  exam: TopicalExam
  onBack: () => void
}

export default function PracticeProblemsQuiz({ exam, onBack }: Props) {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')
  const [seed, setSeed] = useState(0)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const questions = useMemo(
    () => buildQuiz(exam, difficulty),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exam, difficulty, seed]
  )

  const resetQuiz = useCallback(() => {
    setCurrentQ(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnswered(0)
    setQuizComplete(false)
  }, [])

  const changeDifficulty = (d: Difficulty) => {
    setDifficulty(d)
    setSeed((s) => s + 1)
    resetQuiz()
  }

  const handleAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(optionIndex)
    setShowExplanation(true)
    setAnswered((a) => a + 1)
    if (optionIndex === questions[currentQ].question.correctAnswer) {
      setScore((s) => s + 1)
    }
  }

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizComplete(true)
    }
  }

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ((q) => q - 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handleRetry = () => {
    setSeed((s) => s + 1)
    resetQuiz()
  }

  const current = questions[currentQ]
  const q = current?.question

  const difficultyConfig: Record<Difficulty, { label: string; color: string; bg: string }> = {
    easy: { label: 'Easy', color: '#059669', bg: '#d1fae5' },
    medium: { label: 'Medium', color: '#d97706', bg: '#fef3c7' },
    hard: { label: 'Hard', color: '#dc2626', bg: '#fee2e2' },
  }

  if (quizComplete) {
    const pct = answered === 0 ? 0 : Math.round((score / answered) * 100)
    return (
      <div>
        <button
          onClick={onBack}
          className="hover:underline mb-6 flex items-center cursor-pointer"
          style={{ color: 'var(--color-primary)' }}
        >
          ← Back to categories
        </button>

        <div className="rounded-xl shadow-md border border-black/35 overflow-hidden" style={{ backgroundColor: 'var(--color-secondary)' }}>
          <div className="px-6 py-4" style={{ backgroundColor: 'var(--color-primary)' }}>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-secondary)' }}>
              Quiz Complete!
            </h3>
          </div>
          <div className="p-8 text-center">
            <div className="text-6xl mb-4">{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}</div>
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
              {score} / {answered}
            </div>
            <div className="text-lg mb-1" style={{ color: 'var(--color-primary)' }}>
              {pct}% correct
            </div>
            <div className="text-sm mb-6" style={{ color: difficultyConfig[difficulty].color }}>
              Difficulty: {difficultyConfig[difficulty].label}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleRetry}
                className="px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
              >
                Try Again ({difficultyConfig[difficulty].label})
              </button>
              {difficulty !== 'hard' && (
                <button
                  onClick={() => changeDifficulty(difficulty === 'easy' ? 'medium' : 'hard')}
                  className="px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer border border-black/35 transition-opacity hover:opacity-80"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  Try {difficulty === 'easy' ? 'Medium' : 'Hard'} →
                </button>
              )}
              <button
                onClick={onBack}
                className="px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer border border-black/35 transition-opacity hover:opacity-80"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                Back to Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!q) return null

  return (
    <div>
      <button
        onClick={onBack}
        className="hover:underline mb-4 flex items-center cursor-pointer"
        style={{ color: 'var(--color-primary)' }}
      >
        ← Back to categories
      </button>

      {/* Difficulty Selector */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-sm font-medium mr-1" style={{ color: 'var(--color-primary)' }}>
          Difficulty:
        </span>
        {(['easy', 'medium', 'hard'] as Difficulty[]).map((d) => (
          <button
            key={d}
            onClick={() => changeDifficulty(d)}
            className="px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all border"
            style={{
              backgroundColor: difficulty === d ? difficultyConfig[d].bg : 'var(--color-secondary)',
              color: difficulty === d ? difficultyConfig[d].color : 'var(--color-primary)',
              borderColor: difficulty === d ? difficultyConfig[d].color : 'var(--color-primary)',
            }}
          >
            {difficultyConfig[d].label}
          </button>
        ))}
      </div>

      {/* Header with score */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
          Score: {score}/{answered}
        </span>
        <span
          className="text-sm font-bold px-3 py-1 rounded-full"
          style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
        >
          {currentQ + 1} / {questions.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{
            width: `${((currentQ + 1) / questions.length) * 100}%`,
            backgroundColor: difficultyConfig[difficulty].color,
          }}
        />
      </div>

      {/* Question Card */}
      <div className="rounded-xl shadow-md border border-black/35 overflow-hidden" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <div className="px-6 py-4" style={{ backgroundColor: 'var(--color-primary)' }}>
          <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: 'var(--color-secondary)' }}>
            Unit {current.unitNumber}: {current.unitTitle}
          </h3>
        </div>

        <div className="p-6">
          <p className="text-lg font-semibold mb-6">{q.question}</p>

          <div className="space-y-3">
            {q.options.map((option, idx) => {
              let optionClass = 'border border-black/35 rounded-lg p-4 cursor-pointer transition-all text-left w-full'
              let optionStyle: React.CSSProperties = { backgroundColor: 'var(--color-secondary)' }

              if (selectedAnswer !== null) {
                if (idx === q.correctAnswer) {
                  optionClass += ' ring-2 ring-green-500'
                  optionStyle = { backgroundColor: '#d1fae5' }
                } else if (idx === selectedAnswer && idx !== q.correctAnswer) {
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
                    <span className="text-sm">{option}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div
              className="mt-6 p-4 rounded-lg border border-black/35"
              style={{ backgroundColor: selectedAnswer === q.correctAnswer ? '#d1fae5' : '#fee2e2' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{selectedAnswer === q.correctAnswer ? '✅' : '❌'}</span>
                <span className="font-bold text-sm">
                  {selectedAnswer === q.correctAnswer
                    ? 'Correct!'
                    : `Incorrect — Answer: ${String.fromCharCode(65 + q.correctAnswer)}`}
                </span>
              </div>
              <p className="text-sm text-gray-700">{q.explanation}</p>
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
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="px-5 py-2 rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              {currentQ < questions.length - 1 ? 'Next →' : 'Finish Quiz'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
