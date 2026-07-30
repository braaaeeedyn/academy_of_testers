import type { CSSProperties } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export type MathSegment =
  | { type: 'text'; content: string }
  | { type: 'inline'; content: string }
  | { type: 'display'; content: string }
  | { type: 'code'; content: string }

/**
 * Parses a string for:
 *  - Code blocks delimited by triple backticks (```)
 *  - LaTeX inline \\( ... \\) and display \\[ ... \\]
 */
export function parseMathString(str: string): MathSegment[] {
  const result: MathSegment[] = []
  let i = 0
  const len = str.length

  while (i < len) {
    const nextInline = str.indexOf('\\(', i)
    const nextDisplay = str.indexOf('\\[', i)
    const nextCode = str.indexOf('```', i)

    const candidates: number[] = []
    if (nextInline !== -1) candidates.push(nextInline)
    if (nextDisplay !== -1) candidates.push(nextDisplay)
    if (nextCode !== -1) candidates.push(nextCode)

    if (candidates.length === 0) {
      if (i < len) result.push({ type: 'text', content: str.slice(i) })
      break
    }

    const next = Math.min(...candidates)

    if (i < next) {
      result.push({ type: 'text', content: str.slice(i, next) })
    }

    if (next === nextCode) {
      const end = str.indexOf('```', next + 3)
      if (end === -1) {
        result.push({ type: 'text', content: str.slice(next) })
        break
      }
      let code = str.slice(next + 3, end)
      if (code.startsWith('\n')) code = code.slice(1)
      if (code.endsWith('\n')) code = code.slice(0, -1)
      result.push({ type: 'code', content: code })
      i = end + 3
    } else if (next === nextInline && str.substring(next, next + 2) === '\\(') {
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
  if (seg.type === 'code') {
    const escaped = seg.content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    return `<pre style="background:var(--code-bg);color:var(--code-text);padding:14px 16px;border-radius:8px;font-size:0.85em;line-height:1.6;overflow-x:auto;margin:8px 0;font-family:var(--font-mono)"><code>${escaped}</code></pre>`
  }
  try {
    // Unicode middle dot (U+00B7) inside math is mapped to \cdotp by KaTeX and often renders
    // incorrectly inside \text{...}; use \cdot (math) instead.
    const mathContent = seg.content.replace(/\u00b7/g, '\\cdot ')
    return katex.renderToString(mathContent, {
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
  style?: CSSProperties
}

/**
 * Renders a string that may contain LaTeX inline \\( ... \\) and display \\[ ... \\].
 */
export default function MathText({
  children,
  className = '',
  component: Component = 'span',
  style,
}: MathTextProps) {
  if (!children) return null
  const segments = parseMathString(children)
  const html = segments.map(renderSegment).join('')
  return (
    <Component
      className={className}
      style={style}
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
    const withBreaks = trimmed.replace(/\n/g, ' \\\\ ').replace(/\u00b7/g, '\\cdot ')
    return katex.renderToString(withBreaks, {
      ...katexOpts,
      displayMode: true,
    })
  } catch {
    return trimmed.replace(/\n/g, '<br/>')
  }
}
