import { useState, useEffect, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  getFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
  getStacks,
} from '../services/api'
import { getPremadeFlashcardsBySubjectName } from '../data/premadeFlashcards'
import type { Flashcard, PremadeFlashcard, Stack } from '../types/flashcards'
import { buildStudyCards, shuffle } from '../utils/studyCards'
import FlashcardOverlay from './FlashcardOverlay'
import FlashcardEmptyState from './FlashcardEmptyState'
import MyStacks from './MyStacks'
import TrainingMode from './TrainingMode'
import MathText from './MathText'
import './FlashCards.css'

type TabId = 'premade' | 'mine' | 'stacks' | 'train'

const MAX_QUESTION = 1000
const MAX_ANSWER = 2000

interface Props {
  subjectId: number
  subjectName: string
}

export default function FlashCards({ subjectId, subjectName }: Props) {
  const { isAuthenticated } = useAuth()

  const premade = useMemo(() => getPremadeFlashcardsBySubjectName(subjectName), [subjectName])

  const [tab, setTab] = useState<TabId>('premade')
  const [myCards, setMyCards] = useState<Flashcard[]>([])
  const [stacks, setStacks] = useState<Stack[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [trainSource, setTrainSource] = useState<'random' | number>('random')

  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [order, setOrder] = useState<number[]>([])

  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState<Flashcard | null>(null)
  const [confirmingDelete, setConfirmingDelete] = useState(false)

  const pool = useMemo(() => buildStudyCards(premade, myCards), [premade, myCards])

  const browsing = tab === 'premade' || tab === 'mine'
  const size = tab === 'premade' ? premade.length : tab === 'mine' ? myCards.length : 0

  // Load the user's cards and stacks up front so the tabs can show counts.
  useEffect(() => {
    if (!isAuthenticated) {
      setMyCards([])
      setStacks([])
      return
    }
    let cancelled = false
    setLoading(true)
    setError(null)
    Promise.all([getFlashcards(subjectId), getStacks(subjectId)])
      .then(([cards, loadedStacks]) => {
        if (cancelled) return
        setMyCards(cards)
        setStacks(loadedStacks)
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load flashcards')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [isAuthenticated, subjectId])

  // Reset the walk whenever the deck or its contents change.
  useEffect(() => {
    setOrder(Array.from({ length: size }, (_, i) => i))
    setIndex(0)
    setFlipped(false)
    setConfirmingDelete(false)
  }, [tab, size])

  // `order` lags `size` by a render on the first pass; fall back to natural order.
  const walk = order.length === size ? order : Array.from({ length: size }, (_, i) => i)
  const cursor = Math.min(index, Math.max(0, size - 1))

  const premadeCard: PremadeFlashcard | undefined =
    tab === 'premade' ? premade[walk[cursor]] : undefined
  const myCard: Flashcard | undefined = tab === 'mine' ? myCards[walk[cursor]] : undefined

  const goPrev = useCallback(() => {
    setFlipped(false)
    setConfirmingDelete(false)
    setIndex((i) => (i > 0 ? i - 1 : i))
  }, [])

  const goNext = useCallback(() => {
    setFlipped(false)
    setConfirmingDelete(false)
    setIndex((i) => (i < size - 1 ? i + 1 : i))
  }, [size])

  const handleShuffle = () => {
    setOrder((o) => shuffle(o.length === size ? o : Array.from({ length: size }, (_, i) => i)))
    setIndex(0)
    setFlipped(false)
  }

  // Arrow keys walk the deck, space flips it — but not while typing in the overlay.
  useEffect(() => {
    if (modalOpen || !browsing || size === 0) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
      else if (e.key === ' ' || e.key === 'Enter') {
        // Space/Enter belong to whatever is focused — including the card, which
        // flips via its own handler. Swallowing them here would break every button.
        const target = e.target as HTMLElement | null
        if (target?.closest('button, a, input, textarea, select, [role="button"]')) return
        e.preventDefault()
        setFlipped((f) => !f)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [modalOpen, browsing, size, goPrev, goNext])

  const handleSaved = (card: Flashcard) => {
    setMyCards((cards) => {
      const existing = cards.findIndex((c) => c.id === card.id)
      if (existing >= 0) {
        const next = [...cards]
        next[existing] = card
        return next
      }
      return [card, ...cards]
    })
    setModalOpen(false)
    setEditing(null)
    setTab('mine')
  }

  const handleDelete = async () => {
    if (!myCard) return
    try {
      await deleteFlashcard(myCard.id)
      setMyCards((cards) => cards.filter((c) => c.id !== myCard.id))
      // A deleted card is dropped from every stack server-side; mirror that locally.
      setStacks((all) =>
        all.map((s) => ({ ...s, cards: s.cards.filter((ref) => ref.flashcardId !== myCard.id) }))
      )
      setConfirmingDelete(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete flashcard')
    }
  }

  const openCreate = () => {
    setEditing(null)
    setModalOpen(true)
  }

  const openEdit = () => {
    if (!myCard) return
    setEditing(myCard)
    setModalOpen(true)
  }

  const tabs: { id: TabId; label: string; count?: number }[] = [
    { id: 'premade', label: 'Premade', count: premade.length },
    { id: 'mine', label: 'My cards', count: myCards.length },
    { id: 'stacks', label: 'My Stacks', count: stacks.length },
    { id: 'train', label: 'Train' },
  ]

  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="font-display text-2xl font-bold">Flash Cards</h2>

        {browsing &&
          (isAuthenticated ? (
            <button
              onClick={openCreate}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
              New card
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
            >
              Log in to make your own
            </Link>
          ))}
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {tabs.map(({ id, label, count }) => {
          const active = tab === id
          return (
            <button
              key={id}
              onClick={() => setTab(id)}
              className="px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all border"
              style={{
                backgroundColor: active ? 'var(--accent)' : 'var(--surface)',
                color: active ? 'var(--accent-ink)' : 'var(--text)',
                borderColor: active ? 'var(--accent)' : 'var(--hairline)',
              }}
            >
              {label}
              {count !== undefined && ` (${count})`}
            </button>
          )
        })}
      </div>

      {error && (
        <div
          className="mb-4 p-3 rounded-lg border text-sm"
          style={{ backgroundColor: 'var(--error-bg)', borderColor: 'var(--error)', color: 'var(--text)' }}
        >
          {error}
        </div>
      )}

      {tab === 'stacks' ? (
        <MyStacks
          subjectId={subjectId}
          pool={pool}
          stacks={stacks}
          onStacksChange={setStacks}
          onTrainStack={(stackId) => {
            setTrainSource(stackId)
            setTab('train')
          }}
        />
      ) : tab === 'train' ? (
        <TrainingMode
          subjectId={subjectId}
          pool={pool}
          stacks={stacks}
          initialSource={trainSource}
        />
      ) : tab === 'mine' && !isAuthenticated ? (
        <FlashcardEmptyState
          title="Sign in to build your own deck"
          body="Your cards are saved to your account, so they follow you to any device. The premade deck is free to use without an account."
          action={
            <Link
              to="/login"
              className="inline-block mt-5 px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              Log in
            </Link>
          }
        />
      ) : tab === 'mine' && loading ? (
        <div className="text-center py-16" style={{ color: 'var(--text-muted)' }}>
          Loading your cards...
        </div>
      ) : size === 0 ? (
        tab === 'mine' ? (
          <FlashcardEmptyState
            title="No cards yet"
            body={`Write your first ${subjectName} card and it will show up here.`}
            action={
              <button
                onClick={openCreate}
                className="mt-5 px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                Create a card
              </button>
            }
          />
        ) : (
          <FlashcardEmptyState
            title="No premade cards yet"
            body={`Premade cards for ${subjectName} are being prepared. You can still build your own deck.`}
          />
        )
      ) : (
        <>
          {/* Counter + shuffle */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleShuffle}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
              </svg>
              Shuffle
            </button>
            <span
              className="text-sm font-bold px-3 py-1 rounded-full"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              {cursor + 1} / {size}
            </span>
          </div>

          {/* The card */}
          <div className="flashcard-scene flashcard-stack mb-6">
            <div
              className={`flashcard${flipped ? ' is-flipped' : ''}`}
              onClick={() => setFlipped((f) => !f)}
              role="button"
              tabIndex={0}
              aria-label={flipped ? 'Show question' : 'Show answer'}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setFlipped((f) => !f)
                }
              }}
            >
              <CardFace
                eyebrow={
                  premadeCard
                    ? `Unit ${premadeCard.unitNumber} · ${premadeCard.unitTitle}`
                    : 'Your card'
                }
                label="Question"
              >
                <MathText className="text-xl font-semibold leading-relaxed" component="div">
                  {premadeCard?.question ?? myCard?.question ?? ''}
                </MathText>
              </CardFace>

              <CardFace back eyebrow="Tap to flip back" label="Answer">
                <MathText className="text-xl font-semibold leading-relaxed" component="div">
                  {premadeCard?.answer ?? myCard?.answer ?? ''}
                </MathText>
                {premadeCard?.explanation && (
                  <MathText
                    className="text-sm mt-4 leading-relaxed"
                    component="div"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {premadeCard.explanation}
                  </MathText>
                )}
              </CardFace>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={goPrev}
              disabled={cursor === 0}
              className="px-5 py-2 rounded-lg text-sm font-medium border disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
            >
              ← Previous
            </button>

            {tab === 'mine' && myCard && (
              <div className="flex items-center gap-2">
                <button
                  onClick={openEdit}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-opacity hover:opacity-80"
                  style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
                >
                  Edit
                </button>
                {confirmingDelete ? (
                  <>
                    <button
                      onClick={handleDelete}
                      className="px-3.5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'var(--error)', color: '#fff' }}
                    >
                      Delete?
                    </button>
                    <button
                      onClick={() => setConfirmingDelete(false)}
                      className="px-3.5 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-opacity hover:opacity-80"
                      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setConfirmingDelete(true)}
                    className="px-3.5 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-opacity hover:opacity-80"
                    style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--error)' }}
                  >
                    Delete
                  </button>
                )}
              </div>
            )}

            <button
              onClick={goNext}
              disabled={cursor >= size - 1}
              className="px-5 py-2 rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              Next →
            </button>
          </div>
        </>
      )}

      {modalOpen && (
        <FlashcardEditor
          subjectId={subjectId}
          card={editing}
          onClose={() => {
            setModalOpen(false)
            setEditing(null)
          }}
          onSaved={handleSaved}
        />
      )}
    </section>
  )
}

function CardFace({
  back,
  eyebrow,
  label,
  children,
}: {
  back?: boolean
  eyebrow: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className={`flashcard-face${back ? ' flashcard-face--back' : ''}`}>
      <div className="flex items-center justify-between gap-3 mb-6">
        <span
          className="text-xs font-semibold uppercase tracking-[0.18em] truncate"
          style={{ color: 'var(--text-muted)' }}
        >
          {eyebrow}
        </span>
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
        >
          {label}
        </span>
      </div>
      <div className="flex-1 flex flex-col justify-center">{children}</div>
      <div className="text-xs mt-6 text-center" style={{ color: 'var(--text-muted)', opacity: 0.7 }}>
        Click the card or press Space to flip
      </div>
    </div>
  )
}

function FlashcardEditor({
  subjectId,
  card,
  onClose,
  onSaved,
}: {
  subjectId: number
  card: Flashcard | null
  onClose: () => void
  onSaved: (card: Flashcard) => void
}) {
  const [question, setQuestion] = useState(card?.question ?? '')
  const [answer, setAnswer] = useState(card?.answer ?? '')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const canSave = question.trim().length > 0 && answer.trim().length > 0 && !saving

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSave) return

    setSaving(true)
    setError(null)
    try {
      const saved = card
        ? await updateFlashcard(card.id, question.trim(), answer.trim())
        : await createFlashcard(subjectId, question.trim(), answer.trim())
      onSaved(saved)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save flashcard')
      setSaving(false)
    }
  }

  return (
    <FlashcardOverlay title={card ? 'Edit card' : 'New flash card'} onClose={onClose}>
      <form onSubmit={handleSubmit} className="p-6">
        <Field
          label="Question"
          value={question}
          onChange={setQuestion}
          max={MAX_QUESTION}
          rows={3}
          placeholder="What does a p-value below 0.05 indicate?"
          autoFocus
        />
        <Field
          label="Answer"
          value={answer}
          onChange={setAnswer}
          max={MAX_ANSWER}
          rows={5}
          placeholder="Evidence strong enough to reject the null hypothesis at the 5% significance level."
        />

        <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
          Math is supported — wrap it in <code>{'\\( ... \\)'}</code> for inline or{' '}
          <code>{'\\[ ... \\]'}</code> for a display block.
        </p>

        {error && (
          <div
            className="mb-4 p-3 rounded-lg border text-sm"
            style={{ backgroundColor: 'var(--error-bg)', borderColor: 'var(--error)', color: 'var(--text)' }}
          >
            {error}
          </div>
        )}

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border cursor-pointer transition-opacity hover:opacity-80"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!canSave}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
          >
            {saving ? 'Saving...' : card ? 'Save changes' : 'Create card'}
          </button>
        </div>
      </form>
    </FlashcardOverlay>
  )
}

function Field({
  label,
  value,
  onChange,
  max,
  rows,
  placeholder,
  autoFocus,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  max: number
  rows: number
  placeholder: string
  autoFocus?: boolean
}) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
          {label}
        </label>
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {value.length} / {max}
        </span>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, max))}
        rows={rows}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="w-full px-3.5 py-2.5 rounded-lg border text-sm resize-y outline-none focus:ring-2"
        style={{
          backgroundColor: 'var(--bg)',
          borderColor: 'var(--hairline)',
          color: 'var(--text)',
          ['--tw-ring-color' as string]: 'var(--accent)',
        } as React.CSSProperties}
      />
    </div>
  )
}
