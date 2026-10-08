import { useState, useRef, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ChatMessage from '../components/ChatMessage'
import { useTestyChat, TESTY_MAX_CHARS as MAX_CHARS } from '../hooks/useTestyChat'

/** Subjects Testy can ground answers in via the RAG curriculum corpus.
 *  '' == no scoping (general tutor). Names must match the corpus subject naming
 *  EXACTLY — retrieval keys off this string (RagRetrievalService.findCurriculumCandidates),
 *  so a typo silently yields no grounding. The 29 "AP …" entries mirror the ingested
 *  curriculum corpus (verified against server/src/main/resources/rag). The two SAT
 *  entries have no ingested corpus by design — SAT content is general enough that the
 *  base model tutors it fine ungrounded, so they degrade gracefully (no retrieval). */
const SUBJECTS = [
  '',
  'SAT Math',
  'SAT Reading & Writing',
  'AP African American Studies',
  'AP Art History',
  'AP Biology',
  'AP Calculus AB',
  'AP Calculus BC',
  'AP Chemistry',
  'AP Comparative Government',
  'AP Computer Science A',
  'AP Computer Science Principles',
  'AP English Language',
  'AP English Literature',
  'AP Environmental Science',
  'AP European History',
  'AP Government',
  'AP Human Geography',
  'AP Macroeconomics',
  'AP Microeconomics',
  'AP Music Theory',
  'AP Physics 1',
  'AP Physics 2',
  'AP Physics C: E&M',
  'AP Physics C: Mechanics',
  'AP Precalculus',
  'AP Psychology',
  'AP Research',
  'AP Seminar',
  'AP Statistics',
  'AP US History',
  'AP World History',
] as const

/** Quick-start prompts tuned to test prep — clicking one sends it. */
const SUGGESTIONS: { label: string; icon: string; prompt: string }[] = [
  {
    label: 'Explain a concept',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    prompt: 'Explain this concept to me like I have never seen it before, then give a quick example: ',
  },
  {
    label: 'Make a practice question',
    icon: 'M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    prompt: 'Write me one exam-style practice question with the answer hidden until I ask, on: ',
  },
  {
    label: 'Check my reasoning',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    prompt: 'Here is my reasoning for a problem — tell me where it breaks down and how to fix it:\n',
  },
  {
    label: 'Build a study plan',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    prompt: 'Help me build a focused week-by-week study plan for: ',
  },
]

function SparkIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={style}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  )
}

export default function TestyPage() {
  const { isAuthenticated, messages, input, setInput, isLoading, remaining, error, send, reset, usageLabel: labelFor } =
    useTestyChat()
  const [searchParams] = useSearchParams()
  // `?subject=` preselects grounding when another page links here (e.g. an SAT prep topic).
  const [subject, setSubject] = useState<string>(() => {
    const requested = searchParams.get('subject') ?? ''
    return (SUBJECTS as readonly string[]).includes(requested) ? requested : ''
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const navigate = useNavigate()

  const hasConversation = messages.length > 0

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 200)
  }, [])

  useEffect(() => {
    if (hasConversation) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading, hasConversation])

  const sendMessage = (override?: string) => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    send(override, subject ? { subject } : undefined)
  }

  const applySuggestion = (prompt: string) => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    setInput(prompt)
    setTimeout(() => {
      const el = inputRef.current
      if (el) {
        el.focus()
        el.setSelectionRange(prompt.length, prompt.length)
      }
    }, 0)
  }

  const newChat = () => {
    reset()
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  const usageLabel = labelFor(false)

  /* ------- The composer (shared between hero + conversation) ------- */
  const composer = (
    <div className="w-full">
      <div
        className="rounded-card border shadow-sm transition-shadow focus-within:shadow-md"
        style={{
          backgroundColor: 'var(--surface-elevated)',
          borderColor: 'var(--hairline)',
        }}
      >
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            !isAuthenticated
              ? 'Log in to ask Testy anything…'
              : remaining <= 0
                ? 'Hourly limit reached — try again later'
                : 'Ask Testy about any AP or SAT topic…'
          }
          disabled={!isAuthenticated || remaining <= 0 || isLoading}
          rows={hasConversation ? 2 : 3}
          className="w-full resize-none bg-transparent px-4 pt-3.5 outline-none disabled:opacity-50"
          style={{
            fontSize: '0.95rem',
            fontFamily: 'var(--font-body)',
            color: 'var(--text)',
          }}
        />
        <div className="flex items-center justify-between gap-2 px-3 pb-3">
          {/* Subject grounding selector */}
          <label
            className="flex items-center gap-1.5 rounded-pill border px-2.5 py-1.5 text-xs cursor-pointer"
            style={{ borderColor: 'var(--hairline)', color: 'var(--text-muted)' }}
            title="Ground Testy's answers in a subject's curriculum"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-transparent outline-none cursor-pointer pr-1"
              style={{ color: 'var(--text)', fontFamily: 'var(--font-body)' }}
            >
              {SUBJECTS.map((s) => (
                <option key={s || 'all'} value={s} style={{ color: 'var(--text)', backgroundColor: 'var(--surface-elevated)' }}>
                  {s || 'All subjects'}
                </option>
              ))}
            </select>
          </label>

          <div className="flex items-center gap-2">
            <span className="text-xs opacity-60" style={{ color: 'var(--text-muted)' }}>
              {input.length}/{MAX_CHARS}
            </span>
            <button
              onClick={() => sendMessage()}
              disabled={!isAuthenticated || !input.trim() || isLoading || remaining <= 0}
              className="shrink-0 p-2.5 rounded-btn transition-opacity disabled:opacity-25 cursor-pointer"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
              aria-label="Send message"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-2 px-1 text-xs opacity-60" style={{ color: 'var(--text-muted)' }}>
        <span>{usageLabel}</span>
      </div>
    </div>
  )

  /* ---------------------------- Hero (empty) ---------------------------- */
  if (!hasConversation) {
    return (
      <div className="min-h-[62vh] flex flex-col items-center justify-center max-w-2xl mx-auto text-center testy-fade-in">
        <SparkIcon className="w-12 h-12 mb-4" style={{ color: 'var(--text)' }} />

        <h1
          className="font-bold tracking-tight"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text)', fontSize: 'clamp(2.5rem, 7vw, 3.75rem)' }}
        >
          Testy
        </h1>
        <p className="mt-2 mb-8 text-base" style={{ color: 'var(--text-muted)' }}>
          Your AP &amp; SAT study companion. Ask a question, work a problem, or plan your prep.
        </p>

        {composer}

        {/* Quick-start suggestions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6 w-full">
          {SUGGESTIONS.map((s) => (
            <button
              key={s.label}
              onClick={() => applySuggestion(s.prompt)}
              className="flex items-center gap-2.5 text-left rounded-card border px-3.5 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm cursor-pointer"
              style={{ borderColor: 'var(--hairline)', backgroundColor: 'var(--surface)', color: 'var(--text)' }}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} style={{ color: 'var(--accent)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
              </svg>
              <span className="text-sm font-medium">{s.label}</span>
            </button>
          ))}
        </div>

        {!isAuthenticated && (
          <button
            onClick={() => navigate('/login')}
            className="mt-6 px-5 py-2.5 rounded-btn text-sm font-semibold transition-opacity hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
          >
            Log in to start chatting
          </button>
        )}

        {error && (
          <p className="mt-4 rounded-lg px-3 py-2 text-xs" style={{ color: 'var(--error)', backgroundColor: 'var(--error-bg)' }}>
            {error}
          </p>
        )}
      </div>
    )
  }

  /* ------------------------- Conversation view ------------------------- */
  return (
    <div className="max-w-3xl mx-auto flex flex-col" style={{ minHeight: 'calc(100vh - 220px)' }}>
      {/* Header row */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b" style={{ borderColor: 'var(--hairline)' }}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
            <SparkIcon className="w-4.5 h-4.5" style={{ color: 'var(--color-secondary)' }} />
          </div>
          <div className="leading-tight">
            <h1 className="font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)', fontSize: '1.1rem' }}>
              Testy
            </h1>
            {subject && (
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Grounded in {subject}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={newChat}
          className="flex items-center gap-1.5 rounded-btn border px-3 py-1.5 text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity"
          style={{ borderColor: 'var(--hairline)', color: 'var(--text)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          New chat
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 pb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} testy-fade-in`}>
            <div
              className={`max-w-[85%] rounded-card px-4 py-2.5 leading-relaxed ${msg.role === 'user' ? 'rounded-br-md' : 'rounded-bl-md border'}`}
              style={{
                fontSize: '0.9rem',
                ...(msg.role === 'user'
                  ? { backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }
                  : { backgroundColor: 'var(--surface-elevated)', color: 'var(--text)', borderColor: 'var(--hairline)', borderWidth: '1px' }),
              }}
            >
              {msg.role === 'assistant' ? <ChatMessage>{msg.content}</ChatMessage> : <span className="whitespace-pre-wrap">{msg.content}</span>}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="rounded-card rounded-bl-md px-4 py-3 border" style={{ borderColor: 'var(--hairline)', borderWidth: '1px' }}>
              <div className="flex items-center gap-2">
                <SparkIcon className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--text)', animation: 'testy-pulse 1.5s ease-in-out infinite' }} />
                <span className="text-xs font-medium opacity-70" style={{ color: 'var(--text)' }}>
                  Testy is thinking
                  <span className="testy-dots" />
                </span>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="text-center">
            <p className="rounded-lg px-3 py-2 inline-block text-xs" style={{ color: 'var(--error)', backgroundColor: 'var(--error-bg)' }}>
              {error}
            </p>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Composer pinned at bottom */}
      <div className="sticky bottom-0 pt-3 pb-2" style={{ backgroundColor: 'var(--bg)' }}>
        {composer}
      </div>
    </div>
  )
}
