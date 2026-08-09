import { useEffect, useState } from 'react'

/** Tailwind's `sm` breakpoint — below this we treat the viewport as a phone. */
export const MOBILE_MAX_WIDTH = 640

/**
 * True when the viewport is at or below a phone-sized width. Used by the inline-styled SAT adaptive
 * components (which can't use CSS media queries) to swap multi-column desktop layouts for stacked
 * mobile ones. Tailwind-based pages should prefer `sm:`/`md:`/`lg:` class prefixes instead.
 */
export function useIsMobile(maxWidth: number = MOBILE_MAX_WIDTH): boolean {
  const query = `(max-width: ${maxWidth}px)`
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = () => setIsMobile(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])

  return isMobile
}
