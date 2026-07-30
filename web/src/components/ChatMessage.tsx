import katex from 'katex'
import 'katex/dist/katex.min.css'
import { parseMathString, type MathSegment } from './MathText'

const katexOpts = { throwOnError: false }

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function applyInlineFormatting(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(
      /`(.+?)`/g,
      '<code style="background:var(--code-inline-bg);padding:1px 5px;border-radius:3px;font-size:0.9em;font-family:var(--font-mono)">$1</code>',
    )
}

function renderMarkdownText(raw: string): string {
  const escaped = escapeHtml(raw)
  const lines = escaped.split('\n')
  let html = ''
  let inUl = false
  let inOl = false

  for (const line of lines) {
    const trimmed = line.trim()

    if (inUl && !trimmed.startsWith('- ') && trimmed !== '') {
      html += '</ul>'
      inUl = false
    }
    if (inOl && !/^\d+\.\s/.test(trimmed) && trimmed !== '') {
      html += '</ol>'
      inOl = false
    }

    if (/^#{1,4}\s/.test(trimmed)) {
      const level = trimmed.match(/^(#+)/)?.[1].length ?? 3
      const text = trimmed.replace(/^#+\s*/, '')
      const size = level <= 2 ? '0.95em' : '0.88em'
      html += `<div style="font-weight:600;font-size:${size};margin:10px 0 3px;line-height:1.4;">${applyInlineFormatting(text)}</div>`
    } else if (trimmed.startsWith('- ')) {
      if (!inUl) {
        html += '<ul style="margin:3px 0;padding-left:18px;list-style:disc;">'
        inUl = true
      }
      html += `<li style="margin:2px 0;">${applyInlineFormatting(trimmed.slice(2))}</li>`
    } else if (/^\d+\.\s/.test(trimmed)) {
      if (!inOl) {
        html += '<ol style="margin:3px 0;padding-left:18px;">'
        inOl = true
      }
      html += `<li style="margin:2px 0;">${applyInlineFormatting(trimmed.replace(/^\d+\.\s/, ''))}</li>`
    } else if (trimmed === '---' || trimmed === '***') {
      html +=
        '<hr style="border:none;border-top:1px solid var(--hairline);margin:8px 0;"/>'
    } else if (trimmed === '') {
      html += '<div style="height:5px;"></div>'
    } else {
      html += applyInlineFormatting(trimmed) + '<br/>'
    }
  }

  if (inUl) html += '</ul>'
  if (inOl) html += '</ol>'

  return html
}

function renderSegment(seg: MathSegment): string {
  if (seg.type === 'text') return renderMarkdownText(seg.content)

  if (seg.type === 'code') {
    const escaped = escapeHtml(seg.content)
    return `<pre style="background:var(--code-bg);color:var(--code-text);padding:12px 14px;border-radius:8px;font-size:0.8em;line-height:1.5;overflow-x:auto;margin:6px 0;font-family:var(--font-mono)"><code>${escaped}</code></pre>`
  }

  try {
    const mathContent = seg.content.replace(/\u00b7/g, '\\cdot ')
    return katex.renderToString(mathContent, {
      ...katexOpts,
      displayMode: seg.type === 'display',
    })
  } catch {
    return seg.type === 'display'
      ? `\\[${seg.content}\\]`
      : `\\(${seg.content}\\)`
  }
}

interface ChatMessageProps {
  children: string
}

export default function ChatMessage({ children }: ChatMessageProps) {
  if (!children) return null
  const segments = parseMathString(children)
  const html = segments.map(renderSegment).join('')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
