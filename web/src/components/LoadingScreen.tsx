import { useMemo } from 'react'
import { getRandomLoadingQuote } from '../data/loadingQuotes'

/**
 * Full-section loading state: an animated three-dot loader plus a random study quote, so an
 * unavoidable first-load wait feels intentional rather than sluggish. The quote is chosen once
 * per mount (useMemo) so it doesn't flicker on re-render.
 */
export default function LoadingScreen({ message = 'Loading' }: { message?: string }) {
  const quote = useMemo(() => getRandomLoadingQuote(), [])

  return (
    <div
      className="flex flex-col items-center justify-center text-center py-20 px-6"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2 mb-6" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="loading-dot inline-block w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: 'var(--accent)', animationDelay: `${i * 0.16}s` }}
          />
        ))}
      </div>

      <p
        className="text-sm font-semibold uppercase tracking-[0.16em] mb-5"
        style={{ color: 'var(--text-muted)' }}
      >
        {message}
      </p>

      <blockquote className="max-w-md">
        <p
          className="font-display text-lg md:text-xl italic leading-snug"
          style={{ color: 'var(--text)', textWrap: 'balance' } as React.CSSProperties}
        >
          “{quote.text}”
        </p>
        {quote.author && (
          <footer
            className="text-xs mt-3 uppercase tracking-[0.14em]"
            style={{ color: 'var(--text-muted)' }}
          >
            — {quote.author}
          </footer>
        )}
      </blockquote>
    </div>
  )
}
