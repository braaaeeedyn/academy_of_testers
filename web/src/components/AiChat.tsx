import { useState, useRef, useEffect, type KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import ChatMessage from './ChatMessage'
import { useAuth } from '../context/AuthContext'
import { sendAiMessage, getAiUsage } from '../services/api'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const MAX_CHARS = 1000
const INITIAL_REMAINING = 10
const CHAT_FONT = "'Helvetica Neue', 'Lexend', Arial, sans-serif"
const LEXEND_URL =
  'https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600&display=swap'

interface AiChatProps {
  isOpen: boolean
  onClose: () => void
}

export default function AiChat({ isOpen, onClose }: AiChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [remaining, setRemaining] = useState(INITIAL_REMAINING)
  const [resetsAt, setResetsAt] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (document.querySelector(`link[href="${LEXEND_URL}"]`)) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = LEXEND_URL
    document.head.appendChild(link)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !isAuthenticated) return
    getAiUsage()
      .then((d) => {
        setRemaining(d.remaining)
        if (d.resetsAt !== 'N/A') setResetsAt(d.resetsAt)
      })
      .catch(() => {})
  }, [isOpen, isAuthenticated])

  const sendMessage = async () => {
    if (!isAuthenticated) {
      onClose()
      navigate('/login')
      return
    }

    const trimmed = input.trim()
    if (!trimmed || isLoading || remaining <= 0) return
    if (trimmed.length > MAX_CHARS) return

    setError(null)
    const userMsg: Message = { role: 'user', content: trimmed }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setIsLoading(true)

    try {
      const data = await sendAiMessage(updated)
      setMessages([...updated, { role: 'assistant', content: data.content }])
      if (typeof data.remaining === 'number') setRemaining(data.remaining)
    } catch (err: any) {
      const msg = err.message || 'Something went wrong'
      setError(msg)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: 'var(--color-secondary)',
          fontFamily: CHAT_FONT,
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3 shadow-sm shrink-0"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: 'var(--color-secondary)' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <h2
              className="font-semibold"
              style={{
                color: 'var(--color-secondary)',
                fontSize: '1.05rem',
              }}
            >
              Testy
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="opacity-80"
              style={{
                color: 'var(--color-secondary)',
                fontSize: '0.7rem',
              }}
            >
              {isAuthenticated
                ? remaining <= 0 && resetsAt
                  ? `Resets ${new Date(resetsAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
                  : `${remaining}/10 left`
                : 'Log in to chat'}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded hover:opacity-70 transition-opacity cursor-pointer"
              style={{ color: 'var(--color-secondary)' }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div
              className="text-center py-12 opacity-50"
              style={{ color: 'var(--color-primary)' }}
            >
              <svg
                className="w-14 h-14 mx-auto mb-4 opacity-40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <p style={{ fontSize: '0.8rem', fontWeight: 500 }}>
                Hey, I'm Testy!
              </p>
              <p style={{ fontSize: '0.7rem', marginTop: '4px' }}>
                Ask me anything about AP &amp; SAT exam topics, concepts, and
                practice problems.
              </p>
              {!isAuthenticated && (
                <button
                  onClick={() => { onClose(); navigate('/login') }}
                  className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 cursor-pointer"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-secondary)',
                    opacity: 1,
                  }}
                >
                  Log in to start chatting
                </button>
              )}
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed ${
                  msg.role === 'user'
                    ? 'rounded-br-md'
                    : 'rounded-bl-md border'
                }`}
                style={{
                  fontSize: '0.8rem',
                  ...(msg.role === 'user'
                    ? {
                        backgroundColor: 'var(--color-primary)',
                        color: 'var(--color-secondary)',
                      }
                    : {
                        backgroundColor: 'var(--color-secondary)',
                        color: 'var(--color-primary)',
                        borderColor: 'var(--color-primary)',
                        borderWidth: '1px',
                      }),
                }}
              >
                {msg.role === 'assistant' ? (
                  <ChatMessage>{msg.content}</ChatMessage>
                ) : (
                  <span className="whitespace-pre-wrap">{msg.content}</span>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div
                className="rounded-2xl rounded-bl-md px-4 py-3 border"
                style={{
                  borderColor: 'var(--color-primary)',
                  borderWidth: '1px',
                }}
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      color: 'var(--color-primary)',
                      animation: 'testy-pulse 1.5s ease-in-out infinite',
                    }}
                  >
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: 'var(--color-primary)',
                      opacity: 0.7,
                    }}
                  >
                    Testy is thinking
                    <span className="testy-dots" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="text-center">
              <p
                className="text-red-700 bg-red-50 rounded-lg px-3 py-2 inline-block"
                style={{ fontSize: '0.7rem' }}
              >
                {error}
              </p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div
          className="shrink-0 p-3 border-t"
          style={{
            borderColor:
              'color-mix(in srgb, var(--color-primary) 20%, transparent)',
          }}
        >
          <div className="flex gap-2 items-end">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_CHARS))}
              onKeyDown={handleKeyDown}
              placeholder={
                !isAuthenticated
                  ? 'Log in to use Testy AI'
                  : remaining <= 0
                    ? 'Hourly limit reached — try again later'
                    : 'Ask a question…'
              }
              disabled={!isAuthenticated || remaining <= 0 || isLoading}
              rows={2}
              className="flex-1 resize-none rounded-xl px-3 py-2 border outline-none transition-shadow focus:ring-2 disabled:opacity-40"
              style={{
                fontSize: '0.8rem',
                fontFamily: CHAT_FONT,
                borderColor:
                  'color-mix(in srgb, var(--color-primary) 30%, transparent)',
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-secondary)',
                // @ts-expect-error CSS custom property for ring color
                '--tw-ring-color':
                  'color-mix(in srgb, var(--color-primary) 40%, transparent)',
              }}
            />
            <button
              onClick={sendMessage}
              disabled={!isAuthenticated || !input.trim() || isLoading || remaining <= 0}
              className="shrink-0 p-2.5 rounded-xl transition-opacity disabled:opacity-25 cursor-pointer"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-secondary)',
              }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
          <div
            className="flex justify-between mt-1.5 px-1 opacity-50"
            style={{
              color: 'var(--color-primary)',
              fontSize: '0.65rem',
            }}
          >
            <span>Shift+Enter for new line</span>
            <span
              style={{
                color:
                  input.length > MAX_CHARS * 0.9
                    ? '#dc2626'
                    : 'var(--color-primary)',
                opacity: input.length > MAX_CHARS * 0.9 ? 1 : undefined,
              }}
            >
              {input.length}/{MAX_CHARS}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
