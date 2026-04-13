import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      await login({ identifier, password })
      navigate('/')
    } catch (err: any) {
      setError(err.message || 'Login failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-4 py-2.5 rounded-lg border outline-none transition-shadow focus:ring-2 text-sm'

  return (
    <div className="max-w-md mx-auto mt-12">
      <h1
        className="text-2xl font-bold text-center mb-8"
        style={{ color: 'var(--color-primary)' }}
      >
        Log In
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium mb-1"
            style={{ color: 'var(--color-primary)' }}
          >
            Email
          </label>
          <input
            type="email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="you@example.com"
            required
            className={inputClass}
            style={{
              borderColor: 'color-mix(in srgb, var(--color-primary) 30%, transparent)',
              color: 'var(--color-primary)',
              backgroundColor: 'var(--color-secondary)',
            }}
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
            placeholder="Enter your password"
            required
            className={inputClass}
            style={{
              borderColor: 'color-mix(in srgb, var(--color-primary) 30%, transparent)',
              color: 'var(--color-primary)',
              backgroundColor: 'var(--color-secondary)',
            }}
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
          {isSubmitting ? 'Logging in...' : 'Log In'}
        </button>
      </form>

      <p
        className="text-center text-sm mt-6"
        style={{ color: 'var(--color-primary)', opacity: 0.7 }}
      >
        Don't have an account?{' '}
        <Link
          to="/register"
          className="font-semibold underline"
          style={{ color: 'var(--color-primary)' }}
        >
          Sign up
        </Link>
      </p>
    </div>
  )
}
