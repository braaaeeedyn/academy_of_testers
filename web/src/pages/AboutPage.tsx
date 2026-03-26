import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      className={className || 'w-5 h-5'}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  )
}

const EXPERIENCE = [
  {
    role: 'Backend Software Engineering Intern',
    company: 'TradeForge',
    location: 'Salt Lake City, UT',
    period: 'Sep 2025 – Present',
    bullets: [
      'Built automated data pipelines with NumPy and Pandas for statistical analysis and algorithmic computation',
      'Designed and optimized RESTful API endpoints to increase throughput and reduce response latency',
    ],
  },
  {
    role: 'Full-Stack Software Engineering Intern',
    company: 'NumIsToken',
    location: 'Berkeley, CA',
    period: 'Sep 2025 – Present',
    bullets: [
      'Led backend development for key redemption workflows with reliable state management',
      'Designed SQL schemas and optimized APIs for high-throughput payment state transitions',
    ],
  },
  {
    role: 'Backend Software Development Intern',
    company: 'The Kigumi Group',
    location: 'Hong Kong',
    period: 'Jun 2025 – Sep 2025',
    bullets: [
      'Contributed to an AI-powered educational platform, debugging backend services and REST APIs',
      'Developed unit and integration tests while diagnosing AI pipeline failures',
    ],
  },
  {
    role: 'Full-Stack Software Development Intern',
    company: 'Fayble Inc.',
    location: 'Berkeley, CA',
    period: 'May 2025 – Sep 2025',
    bullets: [
      'Built a video streaming service using HLS with adaptive playback across varying network conditions',
      'Implemented Supabase auth with Row Level Security and JWT-based session management',
    ],
  },
]

const PROJECTS = [
  {
    name: 'Academy of Testers',
    description: 'Public exam library with curated AP practice tests, study resources, and 100K+ TikTok views driving student engagement',
  },
  {
    name: 'Panda Explorer',
    description: '1st place UC Berkeley web dev competition — interactive global panda map with Leaflet API and Discord webhooks',
  },
  {
    name: 'Stock Market Simulator',
    description: '25 dynamically priced stocks across sectors with real-time trading, economic dashboard, and multi-session saving',
  },
]

const SKILLS = [
  'Python', 'Java', 'SQL', 'C', 'JavaScript',
  'Spring Boot', 'FastAPI', 'React', 'Docker',
  'PostgreSQL', 'MySQL', 'Supabase', 'Git',
]

export default function AboutPage() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Header row */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Behind the Project</h2>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity"
          style={{ color: 'var(--color-secondary)', backgroundColor: 'var(--color-primary)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Home
        </button>
      </div>

      {/* Profile + Skills/Coursework side by side */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Profile card */}
        <div
          className="rounded-xl border border-black/10 overflow-hidden lg:w-1/2"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 h-full">
            <img
              src="/developer.png"
              alt="Braedyn Thompson"
              className="w-28 h-28 rounded-2xl object-cover shadow-md flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-xl font-bold">Braedyn Thompson</h1>
              <p className="text-sm mt-1" style={{ color: 'var(--color-primary)', opacity: 0.6 }}>
                Computer Science & Data Science at UC Berkeley
              </p>
              <p className="text-sm mt-0.5" style={{ color: 'var(--color-primary)', opacity: 0.5 }}>
                B.A. CS & B.A. Data Science — Applied Mathematics & Modeling
              </p>
              <div className="flex items-center gap-3 mt-3 justify-center sm:justify-start">
                <a
                  href="https://www.linkedin.com/in/braedyn-thompson-67a396284/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://www.tiktok.com/@academyoftesters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" />
                  </svg>
                  TikTok
                </a>
                <a
                  href="https://github.com/braaaeeedyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills + Coursework stacked */}
        <div className="lg:w-1/2 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
              >
                <Icon path="M13 10V3L4 14h7v7l9-11h-7z" className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, var(--color-secondary))',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
              >
                <Icon path="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold">Relevant Coursework</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Data Structures', 'Computer Architecture', 'Artificial Intelligence', 'Data Science Principles', 'Linear Programming & Optimization'].map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, var(--color-secondary))',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience + Projects side by side */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Experience */}
        <div className="lg:w-3/5">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              <Icon path="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold">Experience</h3>
          </div>
          <div className="space-y-3">
            {EXPERIENCE.map((exp, i) => (
              <div
                key={i}
                className="rounded-xl border border-black/10 p-4"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold">{exp.role}</h4>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--color-primary)', opacity: 0.6 }}>
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="text-xs flex-shrink-0" style={{ color: 'var(--color-primary)', opacity: 0.45 }}>
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-2 space-y-1">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-primary)', opacity: 0.4 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects + Get in Touch */}
        <div className="lg:w-2/5 space-y-6">
          {/* Projects */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
              >
                <Icon path="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold">Projects</h3>
            </div>
            <div className="space-y-3">
              {PROJECTS.map((proj, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-black/10 p-4"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  <h4 className="text-sm font-bold mb-1">{proj.name}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-primary)', opacity: 0.6 }}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSend = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      })
      if (!res.ok) throw new Error('Send failed')
      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const btnLabel = {
    idle: 'Send Message',
    sending: 'Sending...',
    sent: 'Message Sent!',
    error: 'Failed to send — try again',
  }[status]

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold">Get in Touch</h3>
      </div>
      <div
        className="rounded-xl border border-black/10 p-4 space-y-3"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      >
        <p className="text-xs" style={{ color: 'var(--color-primary)', opacity: 0.55 }}>
          braedynthompson@berkeley.edu
        </p>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded-lg text-xs border border-black/10 focus:outline-none focus:ring-1"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-primary) 5%, var(--color-secondary))',
            color: 'var(--color-primary)',
          }}
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded-lg text-xs border border-black/10 focus:outline-none focus:ring-1"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-primary) 5%, var(--color-secondary))',
            color: 'var(--color-primary)',
          }}
        />
        <textarea
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 rounded-lg text-xs border border-black/10 focus:outline-none focus:ring-1 resize-none"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-primary) 5%, var(--color-secondary))',
            color: 'var(--color-primary)',
          }}
        />
        <button
          onClick={handleSend}
          disabled={status === 'sending' || status === 'sent' || !name.trim() || !email.trim() || !message.trim()}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ backgroundColor: status === 'sent' ? '#16a34a' : status === 'error' ? '#dc2626' : 'var(--color-primary)', color: status === 'sent' || status === 'error' ? '#fff' : 'var(--color-secondary)' }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d={status === 'sent' ? 'M5 13l4 4L19 7' : 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z'} />
          </svg>
          {btnLabel}
        </button>
      </div>
    </div>
  )
}
