import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="text-center py-16">
      <p className="font-display text-5xl font-bold" style={{ color: 'var(--accent)' }}>
        404
      </p>
      <h1 className="font-display text-2xl font-bold mt-2">Page not found</h1>
      <p className="mt-2" style={{ color: 'var(--text-muted)' }}>
        That page doesn't exist or has moved.
      </p>
      <Link to="/" className="inline-block mt-5 hover:underline font-semibold" style={{ color: 'var(--accent)' }}>
        Back to the home page
      </Link>
    </div>
  )
}
