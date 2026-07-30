import { useEffect } from 'react'
import './FlashCards.css'

interface Props {
  title: string
  onClose: () => void
  children: React.ReactNode
  /** Tailwind max-width class; wider for the stack card picker. */
  widthClass?: string
}

/** Backdrop + accent-header shell shared by the card and stack editors. */
export default function FlashcardOverlay({ title, onClose, children, widthClass = 'max-w-lg' }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="flashcard-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(3px)' }}
      onClick={onClose}
    >
      <div
        className={`flashcard-modal w-full ${widthClass} rounded-2xl border shadow-2xl overflow-hidden`}
        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ backgroundColor: 'var(--accent)' }}
        >
          <h3 className="text-base font-bold" style={{ color: 'var(--accent-ink)' }}>
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1 cursor-pointer transition-opacity hover:opacity-70"
            style={{ color: 'var(--accent-ink)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
