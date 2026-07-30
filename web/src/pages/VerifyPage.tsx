import { useState, type FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { resendVerification } from '../services/authApi'

interface VerifyState {
  userId: number
  email: string
}

export default function VerifyPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { verify } = useAuth()
  const state = location.state as VerifyState | null

  const [code, setCode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isResending, setIsResending] = useState(false)

  if (!state) {
    return (
      <div className="max-w-md mx-auto mt-12 text-center">
        <p style={{ color: 'var(--color-primary)' }}>
          No verification data found.{' '}
          <button
            onClick={() => navigate('/register')}
            className="underline font-semibold cursor-pointer"
            style={{ color: 'var(--color-primary)' }}
          >
            Register
          </button>
        </p>
      </div>
    )
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      await verify({ userId: state.userId, code })
      navigate('/login', {
        state: { message: 'Verification successful! You can now log in.' },
      })
    } catch (err: any) {
      setError(err.message || 'Verification failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResend = async () => {
    setError(null)
    setSuccess(null)
    setIsResending(true)

    try {
      await resendVerification(state.userId)
      setSuccess('A new verification code has been sent.')
    } catch (err: any) {
      setError(err.message || 'Failed to resend code')
    } finally {
      setIsResending(false)
    }
  }

  const inputClass =
    'w-full px-4 py-2.5 rounded-lg border outline-none transition-shadow focus:ring-2 text-sm text-center tracking-[0.5em] text-lg font-mono'

  return (
    <div className="max-w-md mx-auto mt-12">
      <h1
        className="text-2xl font-bold text-center mb-4"
        style={{ color: 'var(--color-primary)' }}
      >
        Verify Your Email
      </h1>

      <p
        className="text-center text-sm mb-4"
        style={{ color: 'var(--color-primary)', opacity: 0.7 }}
      >
        We sent a 6-digit code to{' '}
        <span className="font-semibold">{state.email}</span>
      </p>

      <p
        className="text-center text-xs mb-8 px-4 py-2 rounded-lg"
        style={{
          color: 'var(--color-primary)',
          opacity: 0.6,
          backgroundColor: 'color-mix(in srgb, var(--color-primary) 8%, transparent)',
        }}
      >
        Don't see it? Check your spam or junk folder.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
          placeholder="000000"
          required
          maxLength={6}
          className={inputClass}
          style={{
            borderColor: 'color-mix(in srgb, var(--color-primary) 30%, transparent)',
            color: 'var(--color-primary)',
            backgroundColor: 'var(--color-secondary)',
          }}
        />

        {error && (
          <p className="text-sm rounded-lg px-3 py-2" style={{ color: 'var(--error)', backgroundColor: 'var(--error-bg)' }}>{error}</p>
        )}

        {success && (
          <p className="text-sm rounded-lg px-3 py-2" style={{ color: 'var(--success)', backgroundColor: 'var(--success-bg)' }}>
            {success}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting || code.length !== 6}
          className="w-full py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-50 cursor-pointer"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-secondary)',
          }}
        >
          {isSubmitting ? 'Verifying...' : 'Verify'}
        </button>
      </form>

      <p
        className="text-center text-sm mt-6"
        style={{ color: 'var(--color-primary)', opacity: 0.7 }}
      >
        Didn't receive the code?{' '}
        <button
          onClick={handleResend}
          disabled={isResending}
          className="font-semibold underline cursor-pointer disabled:opacity-50"
          style={{ color: 'var(--color-primary)' }}
        >
          {isResending ? 'Sending...' : 'Resend'}
        </button>
      </p>
    </div>
  )
}
