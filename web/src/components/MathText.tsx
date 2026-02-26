import katex from 'katex'
import 'katex/dist/katex.min.css'

export type MathSegment =
  | { type: 'text'; content: string }
  | { type: 'inline'; content: string }
  | { type: 'display'; content: string }

/**
 * Parses a string for LaTeX inline \\( ... \\) and display \\[ ... \\] and returns segments.
 */
export function parseMathString(str: string): MathSegment[] {
  const result: MathSegment[] = []
  let i = 0
  const len = str.length

  while (i < len) {
    const rest = str.slice(i)
    const nextInline = str.indexOf('\\(', i)
    const nextDisplay = str.indexOf('\\[', i)

    const next =
      nextInline === -1 && nextDisplay === -1
        ? -1
        : nextInline === -1
          ? nextDisplay
          : nextDisplay === -1
            ? nextInline
            : Math.min(nextInline, nextDisplay)

    if (next === -1) {
      if (i < len) result.push({ type: 'text', content: rest })
      break
    }

    if (i < next) {
      result.push({ type: 'text', content: str.slice(i, next) })
    }

    if (str.substring(next, next + 2) === '\\(') {
      const end = str.indexOf('\\)', next + 2)
      if (end === -1) {
        result.push({ type: 'text', content: str.slice(next) })
        break
      }
      result.push({ type: 'inline', content: str.slice(next + 2, end).trim() })
      i = end + 2
    } else {
      const end = str.indexOf('\\]', next + 2)
      if (end === -1) {
        result.push({ type: 'text', content: str.slice(next) })
        break
      }
      result.push({ type: 'display', content: str.slice(next + 2, end).trim() })
      i = end + 2
    }
  }

  return result
}

const katexOpts = { throwOnError: false }

function renderSegment(seg: MathSegment): string {
  if (seg.type === 'text') {
    return seg.content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>')
  }
  try {
    return katex.renderToString(seg.content, {
      ...katexOpts,
      displayMode: seg.type === 'display',
    })
  } catch {
    return seg.type === 'display' ? `\\[${seg.content}\\]` : `\\(${seg.content}\\)`
  }
}

interface MathTextProps {
  children: string
  className?: string
  component?: 'span' | 'p' | 'div'
}

/**
 * Renders a string that may contain LaTeX inline \\( ... \\) and display \\[ ... \\].
 */
export default function MathText({
  children,
  className = '',
  component: Component = 'span',
}: MathTextProps) {
  if (!children) return null
  const segments = parseMathString(children)
  const html = segments.map(renderSegment).join('')
  return (
    <Component
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

/**
 * Renders a full LaTeX block (e.g. for exampleCode when exampleLanguage is 'latex').
 * Newlines are turned into line breaks in one display-math block, or use \\ for line breaks inside math.
 */
export function renderLatexBlock(latex: string): string {
  const trimmed = latex.trim()
  if (!trimmed) return ''
  try {
    const withBreaks = trimmed.replace(/\n/g, ' \\\\ ')
    return katex.renderToString(withBreaks, {
      ...katexOpts,
      displayMode: true,
    })
  } catch {
    return trimmed.replace(/\n/g, '<br/>')
  }
}
