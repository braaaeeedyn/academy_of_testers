import { Link, useNavigate } from 'react-router-dom'
import PageBand from '../components/PageBand'
import MathText from '../components/MathText'
import { DESMOS_GUIDE } from '../data/satDesmosGuide'

export default function SatDesmosGuidePage() {
  const navigate = useNavigate()

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <PageBand
        crumbs={[
          { label: 'SAT hub', onClick: () => navigate('/sat/hub') },
          { label: 'Prep resources', onClick: () => navigate('/sat/prep') },
          { label: 'Desmos guide' },
        ]}
        back={{ label: 'Prep resources', onClick: () => navigate('/sat/prep') }}
        watermark="GRAPH"
        title={DESMOS_GUIDE.title}
        subtitle={DESMOS_GUIDE.intro}
      />

      {/* Jump list */}
      <nav aria-label="Strategies" className="flex flex-wrap gap-2 mt-8">
        {DESMOS_GUIDE.sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-opacity hover:opacity-80"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
          >
            {i + 1}. {s.title}
          </a>
        ))}
      </nav>

      <div className="space-y-5 mt-6">
        {DESMOS_GUIDE.sections.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="rounded-2xl border p-6 scroll-mt-6"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <div className="flex items-start gap-3.5">
              <span
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-display text-lg font-bold"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                {i + 1}
              </span>
              <div className="min-w-0">
                <h2 className="font-display text-xl font-bold tracking-tight leading-tight mt-1">{s.title}</h2>
                <MathText component="p" className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                  {`When to use it: ${s.when}`}
                </MathText>
              </div>
            </div>

            <ol className="mt-4 space-y-2 list-decimal pl-5 text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
              {s.steps.map((step) => (
                <li key={step}>
                  <MathText>{step}</MathText>
                </li>
              ))}
            </ol>

            {s.example && (
              <div
                className="mt-5 rounded-xl border p-4"
                style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--text-muted)' }}>
                  Worked example
                </p>
                <MathText component="p" className="text-sm font-semibold">
                  {s.example.problem}
                </MathText>
                <ol className="mt-2 space-y-1 list-decimal pl-5 text-sm" style={{ color: 'var(--text)' }}>
                  {s.example.steps.map((step) => (
                    <li key={step}>
                      <MathText>{step}</MathText>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {s.tip && (
              <MathText component="p" className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
                {`Tip: ${s.tip}`}
              </MathText>
            )}
          </section>
        ))}
      </div>

      <div
        className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border p-6"
        style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
      >
        <div>
          <h3 className="font-display text-lg font-bold tracking-tight">Practice with the calculator</h3>
          <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
            The SAT Academy has the calculator built in, so you can try each move on real questions.
          </p>
        </div>
        <Link
          to="/sat/adaptive"
          className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
        >
          Enter the Academy
        </Link>
      </div>
    </div>
  )
}
