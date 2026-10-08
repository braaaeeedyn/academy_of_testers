import { useEffect, useState, type ReactNode } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SAT_PREP_TOPICS, type PrepVideo, type PrepWorkedExample, type PrepQuickCheck } from '../data/satPrepContent'
import PageBand from '../components/PageBand'
import MathText from '../components/MathText'

/** The page's sections, in order; drives both the headings and the "On this page" nav. */
const SECTIONS = [
  { id: 'lesson', label: 'The lesson' },
  { id: 'formulas', label: 'Formula sheet' },
  { id: 'examples', label: 'Worked examples' },
  { id: 'check', label: 'Check yourself' },
  { id: 'traps', label: 'Common traps' },
  { id: 'strategy', label: 'Test-day strategy' },
  { id: 'videos', label: 'Video lessons' },
] as const

type SectionId = (typeof SECTIONS)[number]['id']

function Section({ id, intro, children }: { id: SectionId; intro?: string; children: ReactNode }) {
  const label = SECTIONS.find((s) => s.id === id)!.label
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className="font-display text-2xl font-bold tracking-tight">{label}</h2>
      {intro && (
        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
          {intro}
        </p>
      )}
      <div className="mt-4">{children}</div>
    </section>
  )
}

/** A small text button that toggles hidden content open. */
function RevealButton({ open, onClick, closedLabel, openLabel }: { open: boolean; onClick: () => void; closedLabel: string; openLabel: string }) {
  return (
    <button
      onClick={onClick}
      aria-expanded={open}
      className="inline-flex items-center gap-1.5 text-sm font-semibold cursor-pointer hover:opacity-80"
      style={{ color: 'var(--link)' }}
    >
      <svg
        className="w-4 h-4 transition-transform"
        style={{ transform: open ? 'rotate(90deg)' : undefined }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 5l7 7-7 7" />
      </svg>
      {open ? openLabel : closedLabel}
    </button>
  )
}

function WorkedExample({ example, number }: { example: PrepWorkedExample; number: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border p-5" style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}>
      <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
        Example {number}
      </div>
      <MathText component="p" className="mt-1.5 leading-relaxed font-medium">
        {example.problem}
      </MathText>
      <div className="mt-3">
        <RevealButton open={open} onClick={() => setOpen((o) => !o)} closedLabel="Show solution" openLabel="Hide solution" />
      </div>
      {open && (
        <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--hairline)' }}>
          <ol className="flex flex-col gap-2">
            {example.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-pill)' }}
                >
                  {i + 1}
                </span>
                <MathText className="pt-0.5">{step}</MathText>
              </li>
            ))}
          </ol>
          <div
            className="mt-4 px-3 py-2 text-sm"
            style={{ backgroundColor: 'var(--success-bg)', color: 'var(--success-ink)', borderRadius: 'var(--radius-input)' }}
          >
            <span className="font-semibold">Answer: </span>
            <MathText>{example.answer}</MathText>
          </div>
        </div>
      )}
    </div>
  )
}

function QuickCheck({ check, number }: { check: PrepQuickCheck; number: number }) {
  const [open, setOpen] = useState(false)
  return (
    <li className="py-4" style={{ borderTop: '1px solid var(--hairline)' }}>
      <div className="flex gap-3">
        <span className="font-display font-bold flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
          {number}.
        </span>
        <div className="min-w-0">
          <MathText component="p" className="leading-relaxed">
            {check.question}
          </MathText>
          <div className="mt-2">
            <RevealButton open={open} onClick={() => setOpen((o) => !o)} closedLabel="Reveal answer" openLabel="Hide answer" />
          </div>
          {open && (
            <MathText component="p" className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {check.answer}
            </MathText>
          )}
        </div>
      </div>
    </li>
  )
}

/** Renders a YouTube embed, or a labelled placeholder while `youtubeId` is unset. */
function VideoSlot({ video }: { video: PrepVideo }) {
  return (
    <div className="flex flex-col gap-2">
      {video.youtubeId ? (
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: '16 / 9', backgroundColor: 'var(--surface)' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-2 w-full rounded-xl border border-dashed text-center px-4"
          style={{ aspectRatio: '16 / 9', borderColor: 'var(--hairline)', backgroundColor: 'var(--surface)' }}
        >
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 16%, transparent)', color: 'var(--accent)' }}
          >
            <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
            Video coming soon
          </span>
        </div>
      )}
      <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{video.title}</span>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

function WarningIcon() {
  return (
    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--warning)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  )
}

export default function SatPrepTopicPage() {
  const { topicId } = useParams()
  const navigate = useNavigate()

  const index = SAT_PREP_TOPICS.findIndex((t) => t.id === topicId)
  const topic = index >= 0 ? SAT_PREP_TOPICS[index] : undefined

  // Scroll to top when switching between topics (prev/next navigation).
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [topicId])

  if (!topic) {
    return (
      <div className="text-center py-16">
        <h1 className="font-display text-2xl font-bold">Topic not found</h1>
        <p className="mt-2" style={{ color: 'var(--text-muted)' }}>
          That SAT Math topic doesn't exist.
        </p>
        <Link to="/sat/prep" className="inline-block mt-5 hover:underline font-semibold" style={{ color: 'var(--accent)' }}>
          Back to all topics
        </Link>
      </div>
    )
  }

  const prev = index > 0 ? SAT_PREP_TOPICS[index - 1] : null
  const next = index < SAT_PREP_TOPICS.length - 1 ? SAT_PREP_TOPICS[index + 1] : null

  return (
    <div>
      <PageBand
        crumbs={[
          { label: 'SAT hub', onClick: () => navigate('/sat/hub') },
          { label: 'Prep resources', onClick: () => navigate('/sat/prep') },
          { label: `Topic ${index + 1} of ${SAT_PREP_TOPICS.length}` },
        ]}
        back={{ label: 'All topics', onClick: () => navigate('/sat/prep') }}
        title={topic.name}
        subtitle={topic.summary}
      >
        {/* What it covers */}
        <div className="flex flex-wrap gap-2 mt-5">
          {topic.covers.map((c) => (
            <span
              key={c}
              className="text-xs font-medium px-2.5 py-1"
              style={{
                border: '1px solid color-mix(in srgb, var(--accent-ink) 30%, transparent)',
                borderRadius: 'var(--radius-pill)',
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </PageBand>

      {/* Keyed by topic so every reveal toggle resets when moving between topics. */}
      <div key={topic.id} className="max-w-5xl mx-auto mt-10 grid lg:grid-cols-[minmax(0,1fr)_15rem] gap-10 lg:gap-14">
        <div className="min-w-0 flex flex-col gap-14">
          <Section id="lesson">
            <div className="flex flex-col gap-5">
              {topic.concepts.map((c) => (
                <div key={c.heading}>
                  <h3 className="font-semibold text-lg">{c.heading}</h3>
                  <MathText component="p" className="mt-1 leading-relaxed" style={{ color: 'var(--text)' }}>
                    {c.body}
                  </MathText>
                </div>
              ))}
            </div>
          </Section>

          <Section id="formulas" intro="The formulas to know cold for this topic.">
            <div className="grid sm:grid-cols-2 gap-3">
              {topic.formulas.map((f) => (
                <div
                  key={f.label}
                  className="border px-4 py-3 overflow-x-auto"
                  style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', borderRadius: 'var(--radius-card)' }}
                >
                  <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    {f.label}
                  </div>
                  <MathText component="div">{`\\[${f.tex}\\]`}</MathText>
                </div>
              ))}
            </div>
          </Section>

          <Section id="examples" intro="Work each one on paper first, then reveal the solution to compare.">
            <div className="flex flex-col gap-4">
              {topic.examples.map((ex, i) => (
                <WorkedExample key={i} example={ex} number={i + 1} />
              ))}
            </div>
          </Section>

          <Section id="check" intro="Quick problems to confirm the ideas stuck.">
            <ol style={{ borderBottom: '1px solid var(--hairline)' }}>
              {topic.checks.map((c, i) => (
                <QuickCheck key={i} check={c} number={i + 1} />
              ))}
            </ol>
          </Section>

          <Section id="traps" intro="The mistakes that cost the most points on this topic.">
            <ul className="flex flex-col gap-3">
              {topic.traps.map((t) => (
                <li key={t} className="flex gap-2.5 leading-relaxed">
                  <WarningIcon />
                  <MathText>{t}</MathText>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="strategy">
            <ul className="flex flex-col gap-3">
              {topic.advice.map((a) => (
                <li key={a} className="flex gap-2.5 leading-relaxed">
                  <CheckIcon />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="videos" intro="The same material, explained out loud.">
            <div className="grid sm:grid-cols-2 gap-4">
              {topic.videos.map((v) => (
                <VideoSlot key={v.title} video={v} />
              ))}
            </div>
          </Section>
        </div>

        <aside>
          <div className="lg:sticky lg:top-6 flex flex-col gap-6">
            <nav aria-label="On this page" className="hidden lg:block">
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                On this page
              </div>
              <ul className="flex flex-col gap-1.5 text-sm">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="hover:underline underline-offset-4" style={{ color: 'var(--text)' }}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border p-5" style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)', borderRadius: 'var(--radius-card)' }}>
              <h3 className="font-display text-lg font-bold tracking-tight">Practice this topic</h3>
              <p className="text-sm mt-0.5 mb-4" style={{ color: 'var(--text-muted)' }}>
                The SAT Academy adapts to your mastery and drills your weakest topics.
              </p>
              <button
                onClick={() => navigate('/sat/adaptive')}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold cursor-pointer"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)', borderRadius: 'var(--radius-btn)' }}
              >
                Enter the Academy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="border p-5" style={{ borderColor: 'var(--hairline)', borderRadius: 'var(--radius-card)' }}>
              <h3 className="font-display text-lg font-bold tracking-tight">Stuck on something?</h3>
              <p className="text-sm mt-0.5 mb-3" style={{ color: 'var(--text-muted)' }}>
                Ask Testy to explain a step another way or make you a fresh practice problem.
              </p>
              <Link
                to={`/testy?subject=${encodeURIComponent('SAT Math')}`}
                className="text-sm font-semibold underline underline-offset-4"
              >
                Ask Testy
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Prev / next topic */}
      <nav className="max-w-5xl mx-auto mt-14 grid sm:grid-cols-2 gap-4">
        {prev ? (
          <Link
            to={`/sat/prep/${prev.id}`}
            className="flex items-center gap-3 rounded-xl border p-4 transition-all hover:shadow-md"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            <div>
              <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Previous</div>
              <div className="font-semibold" style={{ color: 'var(--text)' }}>{prev.name}</div>
            </div>
          </Link>
        ) : <div />}
        {next ? (
          <Link
            to={`/sat/prep/${next.id}`}
            className="flex items-center justify-end gap-3 rounded-xl border p-4 text-right transition-all hover:shadow-md"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <div>
              <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Next</div>
              <div className="font-semibold" style={{ color: 'var(--text)' }}>{next.name}</div>
            </div>
            <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : <div />}
      </nav>
    </div>
  )
}
