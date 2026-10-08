import { useCallback, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { sendAiMessage, getAiUsage, type AiChatContext } from '../services/api'

export interface TestyMessage {
  role: 'user' | 'assistant'
  content: string
}

/** Mirrors the server's per-message cap in AiChatService. */
export const TESTY_MAX_CHARS = 1000
/** Shown until /ai/chat/usage answers; the server's `ai.usage.max-per-hour`. */
const DEFAULT_LIMIT = 10

/**
 * Conversation state shared by the floating chat panel and the full Testy page: the message list,
 * the composer text, and the hourly usage budget. `active` defers the usage fetch until the chat
 * is actually on screen.
 */
export function useTestyChat({ active = true }: { active?: boolean } = {}) {
  const { isAuthenticated } = useAuth()
  const [messages, setMessages] = useState<TestyMessage[]>([])
  const [input, setInputState] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [limit, setLimit] = useState(DEFAULT_LIMIT)
  const [remaining, setRemaining] = useState(DEFAULT_LIMIT)
  const [resetsAt, setResetsAt] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!active || !isAuthenticated) return
    getAiUsage()
      .then((d) => {
        setLimit(d.limit)
        setRemaining(d.remaining)
        setResetsAt(d.resetsAt !== 'N/A' ? d.resetsAt : null)
      })
      .catch(() => {})
  }, [active, isAuthenticated])

  const setInput = useCallback((value: string) => setInputState(value.slice(0, TESTY_MAX_CHARS)), [])

  /** Sends `override` (or the composer text). Returns false when nothing was sent. */
  const send = async (override?: string, context?: AiChatContext): Promise<boolean> => {
    const trimmed = (override ?? input).trim()
    if (!isAuthenticated || !trimmed || isLoading || remaining <= 0) return false
    if (trimmed.length > TESTY_MAX_CHARS) return false

    setError(null)
    const history = messages
    const updated: TestyMessage[] = [...history, { role: 'user', content: trimmed }]
    setMessages(updated)
    setInputState('')
    setIsLoading(true)

    try {
      const data = await sendAiMessage(updated, context)
      setMessages([...updated, { role: 'assistant', content: data.content }])
      if (typeof data.remaining === 'number') setRemaining(data.remaining)
      return true
    } catch (err) {
      // Put the unanswered message back in the composer so retrying is one click. The server
      // refunds failed requests, so a retry doesn't cost another message.
      setMessages(history)
      setInputState(trimmed)
      setError(err instanceof Error && err.message ? err.message : 'Something went wrong')
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const reset = () => {
    setMessages([])
    setInputState('')
    setError(null)
  }

  const usageLabel = (short: boolean) =>
    !isAuthenticated
      ? 'Log in to chat'
      : remaining <= 0 && resetsAt
        ? `Resets ${new Date(resetsAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
        : short
          ? `${remaining}/${limit} left`
          : `${remaining}/${limit} messages left this hour`

  return {
    isAuthenticated,
    messages,
    input,
    setInput,
    isLoading,
    remaining,
    limit,
    error,
    send,
    reset,
    usageLabel,
  }
}
