import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { createStack, updateStack, deleteStack } from '../services/api'
import type { Stack, StackCardRef, StudyCard } from '../types/flashcards'
import { resolveStack } from '../utils/studyCards'
import FlashcardOverlay from './FlashcardOverlay'
import FlashcardEmptyState from './FlashcardEmptyState'
import MathText from './MathText'

const MAX_NAME = 100
const MAX_CARDS = 200

const STACK_ICON =
  'M4 7l8-4 8 4-8 4-8-4zm0 5l8 4 8-4M4 17l8 4 8-4'

/** Turns a StudyCard key back into the ref shape the API stores. */
function toRef(card: StudyCard): StackCardRef {
  return card.source === 'user'
    ? { flashcardId: Number(card.key.slice('user:'.length)), premadeId: null }
    : { flashcardId: null, premadeId: card.key.slice('premade:'.length) }
}

interface Props {
  subjectId: number
  pool: StudyCard[]
  stacks: Stack[]
  onStacksChange: (stacks: Stack[]) => void
  onTrainStack: (stackId: number) => void
}

export default function MyStacks({ subjectId, pool, stacks, onStacksChange, onTrainStack }: Props) {
  const { isAuthenticated } = useAuth()
  const [editorOpen, setEditorOpen] = useState(false)
  const [editing, setEditing] = useState<Stack | null>(null)
  const [confirmingDelete, setConfirmingDelete] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  if (!isAuthenticated) {
    return (
      <FlashcardEmptyState
        iconPath={STACK_ICON}
        title="Sign in to build stacks"
        body="Stacks are small, named sets you assemble from the premade cards and your own. They're saved to your account."
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
    )
  }

  const handleSaved = (stack: Stack) => {
    const existing = stacks.findIndex((s) => s.id === stack.id)
    if (existing >= 0) {
      const next = [...stacks]
      next[existing] = stack
      onStacksChange(next)
    } else {
      onStacksChange([stack, ...stacks])
    }
    setEditorOpen(false)
    setEditing(null)
  }

  const handleDelete = async (id: number) => {
    try {
      await deleteStack(id)
      onStacksChange(stacks.filter((s) => s.id !== id))
      setConfirmingDelete(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete stack')
    }
  }

  const openCreate = () => {
    setEditing(null)
    setEditorOpen(true)
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {stacks.length === 0
            ? 'Group cards into focused sets you can train against.'
            : `${stacks.length} stack${stacks.length === 1 ? '' : 's'}`}
        </p>
        <button
          onClick={openCreate}
          disabled={pool.length === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          New stack
        </button>
      </div>

      {error && (
        <div
          className="mb-4 p-3 rounded-lg border text-sm"
          style={{ backgroundColor: 'var(--error-bg)', borderColor: 'var(--error)', color: 'var(--text)' }}
        >
          {error}
        </div>
      )}

      {stacks.length === 0 ? (
        <FlashcardEmptyState
          iconPath={STACK_ICON}
          title="No stacks yet"
          body="A stack is a small set of cards — mix premade questions with your own, then train until every card is mastered."
          action={
            <button
              onClick={openCreate}
              disabled={pool.length === 0}
              className="mt-5 px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              Create a stack
            </button>
          }
        />
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {stacks.map((stack) => {
            const resolved = resolveStack(stack, pool)
            const mine = resolved.filter((c) => c.source === 'user').length
            return (
              <div
                key={stack.id}
                className="flex flex-col p-5 rounded-2xl border"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d={STACK_ICON} />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold truncate">{stack.name}</h3>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {resolved.length} card{resolved.length === 1 ? '' : 's'}
                      {mine > 0 && ` · ${mine} of yours`}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-auto">
                  <button
                    onClick={() => onTrainStack(stack.id)}
                    disabled={resolved.length === 0}
                    className="px-3.5 py-2 rounded-lg text-sm font-semibold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-opacity hover:opacity-90"
                    style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                  >
                    Train
                  </button>
                  <button
                    onClick={() => {
                      setEditing(stack)
                      setEditorOpen(true)
                    }}
                    className="px-3.5 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-opacity hover:opacity-80"
                    style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
                  >
                    Edit
                  </button>
                  {confirmingDelete === stack.id ? (
                    <>
                      <button
                        onClick={() => handleDelete(stack.id)}
                        className="px-3.5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-opacity hover:opacity-90"
                        style={{ backgroundColor: 'var(--error)', color: '#fff' }}
                      >
                        Delete?
                      </button>
                      <button
                        onClick={() => setConfirmingDelete(null)}
                        className="px-3.5 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-opacity hover:opacity-80"
                        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setConfirmingDelete(stack.id)}
                      className="px-3.5 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-opacity hover:opacity-80"
                      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--error)' }}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {editorOpen && (
        <StackEditor
          subjectId={subjectId}
          pool={pool}
          stack={editing}
          onClose={() => {
            setEditorOpen(false)
            setEditing(null)
          }}
          onSaved={handleSaved}
        />
      )}
    </div>
  )
}

function StackEditor({
  subjectId,
  pool,
  stack,
  onClose,
  onSaved,
}: {
  subjectId: number
  pool: StudyCard[]
  stack: Stack | null
  onClose: () => void
  onSaved: (stack: Stack) => void
}) {
  const [name, setName] = useState(stack?.name ?? '')
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(stack ? resolveStack(stack, pool).map((c) => c.key) : [])
  )
  const [filter, setFilter] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const visible = useMemo(() => {
    const q = filter.trim().toLowerCase()
    if (!q) return pool
    return pool.filter(
      (c) => c.question.toLowerCase().includes(q) || c.eyebrow.toLowerCase().includes(q)
    )
  }, [pool, filter])

  const toggle = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else if (next.size < MAX_CARDS) next.add(key)
      return next
    })
  }

  const canSave = name.trim().length > 0 && selected.size > 0 && !saving

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSave) return

    // Preserve pool order so the stack reads in a predictable sequence.
    const refs = pool.filter((c) => selected.has(c.key)).map(toRef)

    setSaving(true)
    setError(null)
    try {
      const saved = stack
        ? await updateStack(stack.id, subjectId, name.trim(), refs)
        : await createStack(subjectId, name.trim(), refs)
      onSaved(saved)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save stack')
      setSaving(false)
    }
  }

  return (
    <FlashcardOverlay
      title={stack ? 'Edit stack' : 'New stack'}
      onClose={onClose}
      widthClass="max-w-2xl"
    >
      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
              Stack name
            </label>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {name.length} / {MAX_NAME}
            </span>
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value.slice(0, MAX_NAME))}
            placeholder="Cell respiration cram"
            autoFocus
            className="w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none focus:ring-2"
            style={{
              backgroundColor: 'var(--bg)',
              borderColor: 'var(--hairline)',
              color: 'var(--text)',
              ['--tw-ring-color' as string]: 'var(--accent)',
            } as React.CSSProperties}
          />
        </div>

        <div className="flex items-center justify-between mb-1.5">
          <label className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
            Cards
          </label>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {selected.size} selected · max {MAX_CARDS}
          </span>
        </div>

        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by question or unit..."
          className="w-full px-3.5 py-2 mb-2 rounded-lg border text-sm outline-none focus:ring-2"
          style={{
            backgroundColor: 'var(--bg)',
            borderColor: 'var(--hairline)',
            color: 'var(--text)',
            ['--tw-ring-color' as string]: 'var(--accent)',
          } as React.CSSProperties}
        />

        <div
          className="rounded-lg border overflow-y-auto mb-4"
          style={{ borderColor: 'var(--hairline)', maxHeight: '300px' }}
        >
          {visible.length === 0 ? (
            <p className="text-sm text-center py-8" style={{ color: 'var(--text-muted)' }}>
              No cards match that filter.
            </p>
          ) : (
            visible.map((card) => {
              const checked = selected.has(card.key)
              return (
                <label
                  key={card.key}
                  className="flex items-start gap-3 px-3.5 py-3 cursor-pointer border-b last:border-b-0 transition-colors"
                  style={{
                    borderColor: 'var(--hairline)',
                    backgroundColor: checked
                      ? 'color-mix(in srgb, var(--accent) 12%, transparent)'
                      : 'transparent',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(card.key)}
                    className="mt-0.5 flex-shrink-0 w-4 h-4 cursor-pointer"
                    style={{ accentColor: 'var(--accent)' }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded flex-shrink-0"
                        style={
                          card.source === 'user'
                            ? { backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }
                            : { backgroundColor: 'var(--hairline)', color: 'var(--text-muted)' }
                        }
                      >
                        {card.source === 'user' ? 'Yours' : 'Premade'}
                      </span>
                      <span className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>
                        {card.eyebrow}
                      </span>
                    </div>
                    <MathText className="text-sm block" component="div">
                      {card.question}
                    </MathText>
                  </div>
                </label>
              )
            })
          )}
        </div>

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
            {saving ? 'Saving...' : stack ? 'Save changes' : 'Create stack'}
          </button>
        </div>
      </form>
    </FlashcardOverlay>
  )
}
