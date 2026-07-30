/** Smooth scroll with custom duration and easing. Resolves when finished. */
export function smoothScrollToElement(
  element: HTMLElement,
  options: { duration?: number; offset?: number; onProgress?: (progress: number) => void } = {}
): Promise<void> {
  const { duration = 1600, offset = 80, onProgress } = options
  const start = window.scrollY
  const target = element.getBoundingClientRect().top + start - offset
  const distance = target - start

  if (Math.abs(distance) < 2) return Promise.resolve()

  return new Promise((resolve) => {
    const startTime = performance.now()

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      onProgress?.(progress)
      window.scrollTo(0, start + distance * easeInOutCubic(progress))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        resolve()
      }
    }

    requestAnimationFrame(step)
  })
}
