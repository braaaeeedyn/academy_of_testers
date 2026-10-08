import { useChat } from '../context/ChatContext'
import type { AiChatContext } from '../services/api'
import { buildExplainMistakePrompt, type ExplainMistakeInput } from '../utils/explainMistake'

interface ExplainMistakeButtonProps extends ExplainMistakeInput {
  /** Extra chat context; the subject is always included. */
  context?: AiChatContext
  className?: string
}

/**
 * Opens Testy with a prefilled "explain my mistake" message. Never auto-sends: the student reads
 * it, can add their own reasoning, and presses Send (each message counts toward the hourly limit).
 * Only render this after a wrong answer has been graded.
 */
export default function ExplainMistakeButton({ context, className, ...input }: ExplainMistakeButtonProps) {
  const { openChat } = useChat()

  const open = () => {
    openChat({
      text: buildExplainMistakePrompt(input),
      context: { ...context, subject: context?.subject ?? input.subject },
    })
  }

  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer transition-opacity hover:opacity-80 ${className ?? ''}`}
      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
      title="Opens Testy with this question filled in. Add your reasoning, then press Send."
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
      Explain my mistake
    </button>
  )
}
