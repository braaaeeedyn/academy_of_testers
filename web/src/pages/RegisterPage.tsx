import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setIsSubmitting(true)

    try {
      const res = await register({ email, password, displayName })
      navigate('/verify', {
        state: { userId: res.userId, email },
      })
    } catch (err: any) {
      setError(err.message || 'Registration failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-4 py-2.5 rounded-lg border outline-none transition-shadow focus:ring-2 text-sm'
  const inputStyle = {
    borderColor: 'color-mix(in srgb, var(--color-primary) 30%, transparent)',
    color: 'var(--color-primary)',
    backgroundColor: 'var(--color-secondary)',
  }

  return (
    <div className="max-w-md mx-auto mt-12">
      <h1
        className="text-2xl font-bold text-center mb-8"
        style={{ color: 'var(--color-primary)' }}
      >
        Create Account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium mb-1"
            style={{ color: 'var(--color-primary)' }}
          >
            Display Name
          </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Your name"
            required
            maxLength={100}
            className={inputClass}
            style={inputStyle}
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-1"
            style={{ color: 'var(--color-primary)' }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-1"
            style={{ color: 'var(--color-primary)' }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Min 8 chars, 1 uppercase, 1 number"
            required
            minLength={8}
            className={inputClass}
            style={inputStyle}
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-1"
            style={{ color: 'var(--color-primary)' }}
          >
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 rounded-lg px-3 py-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-50 cursor-pointer"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-secondary)',
          }}
        >
          {isSubmitting ? 'Creating account...' : 'Create Account'}
        </button>
      </form>

      <p
        className="text-center text-sm mt-6"
        style={{ color: 'var(--color-primary)', opacity: 0.7 }}
      >
        Already have an account?{' '}
        <Link
          to="/login"
          className="font-semibold underline"
          style={{ color: 'var(--color-primary)' }}
        >
          Log in
        </Link>
      </p>
    </div>
  )
}
