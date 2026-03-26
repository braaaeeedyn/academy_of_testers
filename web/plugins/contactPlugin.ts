import type { Plugin, ViteDevServer } from 'vite'
import type { IncomingMessage, ServerResponse } from 'http'
import nodemailer from 'nodemailer'

export function contactPlugin(smtpUser: string, smtpPass: string): Plugin {
  return {
    name: 'contact-plugin',
    configureServer(server: ViteDevServer) {
      server.middlewares.use('/api/contact', (req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== 'POST') {
          res.writeHead(405, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let body = ''
        req.on('data', (chunk: Buffer) => {
          body += chunk.toString()
          if (body.length > 10_000) {
            res.writeHead(413, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Payload too large' }))
            req.destroy()
          }
        })

        req.on('end', async () => {
          try {
            const { name, email, message } = JSON.parse(body)

            if (!name?.trim() || !email?.trim() || !message?.trim()) {
              res.writeHead(400, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: 'All fields are required' }))
              return
            }

            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: { user: smtpUser, pass: smtpPass },
            })

            await transporter.sendMail({
              from: `"Academy of Testers Contact" <${smtpUser}>`,
              to: 'braedynthompson@berkeley.edu',
              replyTo: email,
              subject: `AoT Contact: Message from ${name}`,
              text: `From: ${name} (${email})\n\n${message}`,
              html: `<p><strong>From:</strong> ${name} (${email})</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`,
            })

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ success: true }))
          } catch (err: unknown) {
            console.error('Contact form error:', err)
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Failed to send message' }))
          }
        })
      })
    },
  }
}
