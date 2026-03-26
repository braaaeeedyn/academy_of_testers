import type { Plugin, ViteDevServer } from 'vite'
import type { IncomingMessage, ServerResponse } from 'http'

const RATE_LIMIT = 10
const RATE_WINDOW_MS = 60 * 60 * 1000
const MAX_MESSAGE_LENGTH = 1000

const rateLimitMap = new Map<string, number[]>()

const SYSTEM_PROMPT =
  'You are an AI study helper for Academy of Testers, a free platform for AP and SAT exam preparation. ' +
  'Help students understand concepts, solve practice problems, and prepare for their exams. ' +
  'Be concise, clear, and encouraging. ' +
  'When explaining math or science formulas, use LaTeX notation wrapped in \\( \\) for inline math and \\[ \\] for display math.'

function getClientIP(req: IncomingMessage): string {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string') return forwarded.split(',')[0].trim()
  return req.socket.remoteAddress || 'unknown'
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const timestamps = (rateLimitMap.get(ip) || []).filter(
    (t) => now - t < RATE_WINDOW_MS,
  )
  rateLimitMap.set(ip, timestamps)
  const remaining = Math.max(0, RATE_LIMIT - timestamps.length)
  return { allowed: remaining > 0, remaining }
}

function recordQuery(ip: string): void {
  const timestamps = rateLimitMap.get(ip) || []
  timestamps.push(Date.now())
  rateLimitMap.set(ip, timestamps)
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk: Buffer) => {
      body += chunk.toString()
    })
    req.on('end', () => resolve(body))
    req.on('error', reject)
  })
}

function json(res: ServerResponse, status: number, data: unknown): void {
  res.writeHead(status, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(data))
}

export function aiChatPlugin(apiKey: string): Plugin {
  return {
    name: 'ai-chat-api',
    configureServer(server: ViteDevServer) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== '/api/ai/chat') return next()

        if (req.method === 'GET') {
          const ip = getClientIP(req)
          const { remaining } = checkRateLimit(ip)
          return json(res, 200, { remaining })
        }

        if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' })

        if (!apiKey) return json(res, 500, { error: 'OpenAI API key not configured' })

        const ip = getClientIP(req)
        const { allowed, remaining } = checkRateLimit(ip)

        if (!allowed) {
          return json(res, 429, {
            error: 'Rate limit reached — you can send up to 10 messages per hour. Please try again later.',
            remaining: 0,
          })
        }

        try {
          const body = JSON.parse(await readBody(req))

          if (!Array.isArray(body.messages)) {
            return json(res, 400, { error: 'Invalid request' })
          }

          const lastMsg = body.messages[body.messages.length - 1]
          if (
            lastMsg?.role === 'user' &&
            lastMsg.content.length > MAX_MESSAGE_LENGTH
          ) {
            return json(res, 400, {
              error: `Message exceeds the ${MAX_MESSAGE_LENGTH} character limit`,
            })
          }

          recordQuery(ip)

          const openaiRes = await fetch(
            'https://api.openai.com/v1/chat/completions',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
              },
              body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                  { role: 'system', content: SYSTEM_PROMPT },
                  ...body.messages.slice(-20),
                ],
                max_tokens: 1024,
                temperature: 0.7,
              }),
            },
          )

          if (!openaiRes.ok) {
            console.error('OpenAI error:', await openaiRes.text())
            return json(res, 502, { error: 'Failed to get a response from AI' })
          }

          const data = await openaiRes.json()
          const content =
            data.choices?.[0]?.message?.content ??
            'Sorry, I could not generate a response.'

          const updated = checkRateLimit(ip)
          return json(res, 200, { content, remaining: updated.remaining })
        } catch (err) {
          console.error('AI chat error:', err)
          return json(res, 500, { error: 'Internal server error' })
        }
      })
    },
  }
}
