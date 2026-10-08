import { useState, type CSSProperties, type FormEvent } from 'react'
import { sendContactMessage } from '../services/api'

const MAX_MESSAGE = 5000

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fieldClass = 'w-full px-3 py-2 text-sm border outline-none focus:ring-2'
const fieldStyle = {
  backgroundColor: 'var(--surface-elevated)',
  borderColor: 'var(--hairline)',
  borderRadius: 'var(--radius-input)',
  color: 'var(--text)',
  '--tw-ring-color': 'color-mix(in srgb, var(--accent) 45%, transparent)',
} as CSSProperties

/**
 * The site's contact form. Messages are emailed to the developer by `/api/contact`, with the
 * sender's address set as reply-to.
 */
export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  // Honeypot: hidden from people, but naive spam bots fill every field.
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  const ready = name.trim() && email.trim() && message.trim()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!ready || status === 'sending') return
    setError(null)
    setStatus('sending')
    try {
      if (!website) {
        await sendContactMessage({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        })
      }
      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'sent') {
    return (
      <div
        className="p-5 text-sm"
        role="status"
        style={{
          backgroundColor: 'var(--success-bg)',
          color: 'var(--success-ink)',
          borderRadius: 'var(--radius-card)',
        }}
      >
        <p className="font-semibold">Thanks, your message is on its way.</p>
        <p className="mt-1">You’ll get a reply at the email you gave.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-3 font-semibold underline underline-offset-4 cursor-pointer"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <label
          className="flex flex-col gap-1 text-xs font-medium"
          style={{ color: 'var(--text-muted)' }}
        >
          Name
          <input
            type="text"
            required
            maxLength={200}
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            style={fieldStyle}
          />
        </label>
        <label
          className="flex flex-col gap-1 text-xs font-medium"
          style={{ color: 'var(--text-muted)' }}
        >
          Email
          <input
            type="email"
            required
            maxLength={320}
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
            style={fieldStyle}
          />
        </label>
      </div>
      <label
        className="flex flex-col gap-1 text-xs font-medium"
        style={{ color: 'var(--text-muted)' }}
      >
        Message
        <textarea
          required
          rows={4}
          maxLength={MAX_MESSAGE}
          placeholder="A question, a bug, a resource you wish existed…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldClass} resize-y`}
          style={fieldStyle}
        />
      </label>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="absolute -left-[9999px] w-px h-px opacity-0"
      />

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={!ready || status === 'sending'}
          className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold cursor-pointer hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'var(--accent)',
            color: 'var(--accent-ink)',
            borderRadius: 'var(--radius-btn)',
          }}
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {error && (
          <p role="alert" className="text-xs" style={{ color: 'var(--error)' }}>
            {error}
          </p>
        )}
      </div>
    </form>
  )
}
