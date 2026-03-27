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

export default function MissionPage() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Our Mission</h2>
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

      {/* Top row — Why + Inequality side by side */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Why This Exists */}
        <div
          className="rounded-xl border border-black/10 p-6 lg:w-1/2"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              <Icon path="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">Why This Exists</h3>
          </div>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
            <p>
              Academy of Testers was born from a simple observation: access to quality education shouldn't depend on where you live or how much your family earns. The idea that two equally capable students could have drastically different outcomes on a standardized test simply because of the resources available to them felt deeply wrong, and it still does.
            </p>
            <p>
              Growing up, I experienced firsthand the stark differences in educational standards across regions and communities. Some students had test prep tutors, review courses, and stacks of practice materials. Others had a textbook and not much else. Moving between school districts, I saw how the quality of teaching, the availability of AP courses, and even the encouragement to take challenging exams varied enormously depending on zip code and household income. The gap isn't about ability. It's about access.
            </p>
            <p>
              I remember sitting in a classroom where students were being told they weren't "the type" to take AP exams, while across town, students were being enrolled in AP courses by default. That contrast stuck with me. It wasn't a difference in potential; it was a difference in expectation and opportunity. Academy of Testers exists because I believe every student deserves someone, or something, in their corner telling them they can do this, and then giving them the tools to prove it.
            </p>
            <p>
              This project started small, just a handful of practice questions I compiled for friends. But as I saw how much of a difference even a few good practice problems could make, I realized this could help far more people. What started as a personal project has grown into something much bigger, and it continues to grow because the need is real.
            </p>
          </div>
        </div>

        {/* Education Inequality */}
        <div
          className="rounded-xl border border-black/10 p-6 lg:w-1/2"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              <Icon path="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">Education Inequality</h3>
          </div>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
            <p>
              Education inequality is a global issue that affects hundreds of millions of students. In under-resourced schools, students often lack the materials, guidance, and practice opportunities that their peers in wealthier areas take for granted. There are schools where a single teacher covers multiple subjects, where internet access is unreliable, and where the idea of a "test prep course" is completely foreign. Meanwhile, students in well-funded districts have access to specialized tutors, official practice exams, and study groups led by experienced educators.
            </p>
            <p>
              Standardized tests like the AP and SAT carry real weight for college admissions and scholarships, yet preparation for these exams is often locked behind expensive courses and paywalls. A typical AP prep course can cost hundreds of dollars. Private SAT tutoring can run into the thousands. Even many "free" resources require accounts, limit access, or funnel students toward paid tiers. For a student whose family is already stretched thin, these costs are not just inconvenient; they are prohibitive.
            </p>
            <p>
              This creates a cycle that reinforces itself generation after generation: those who already have advantages get more prepared, score higher, earn more scholarships, and attend better institutions. Those who need the most support get the least. Studies consistently show that SAT scores correlate more strongly with family income than with academic potential. That's not a reflection of student ability; it's a reflection of systemic failure. It's not a level playing field, and pretending otherwise does a disservice to every student who has ever been told to "just study harder" without being given the means to do so.
            </p>
            <p>
              The consequences extend beyond test scores. Students who don't perform well on standardized tests may miss out on merit-based scholarships, limiting their college options. They may internalize the idea that they aren't "smart enough" for rigorous academics, when in reality they simply didn't have the same preparation. This is a problem that can be changed, and it starts with removing the barriers between students and the resources they need.
            </p>
          </div>
        </div>
      </div>

      {/* What we do about it — full width */}
      <div
        className="rounded-xl border border-black/10 p-6 mb-6"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
          >
            <Icon path="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold">What We're Doing About It</h3>
        </div>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
          <p>
            Academy of Testers provides completely free, open-access study materials for AP and SAT exams. No accounts, no paywalls, no catches. Every student who has an internet connection can access the same unit reviews, practice problems, scoring rubrics, and AI-powered help that used to be reserved for those who could afford it. The platform is designed to be as simple and direct as possible: find your subject, pick a resource type, and start studying.
          </p>
          <p>
            We cover over 25 AP subjects with detailed unit overviews that break down every topic students need to know, practice problems with full explanations so students understand not just the "what" but the "why," and topical unit reviews that let students quiz themselves unit by unit with instant feedback. For exam strategy, we provide official scoring rubrics and exam tips drawn from College Board guidelines, so students know exactly how their work will be evaluated and how to maximize their scores.
          </p>
          <p>
            The platform also includes an AI-powered study assistant that students can use to ask questions, work through problems, and get explanations on demand. This is the kind of personalized help that used to require a private tutor. Now it's available to anyone, for free, at any time of day. Whether a student is studying at midnight before an exam or reviewing concepts over the summer, the help is there.
          </p>
          <p>
            This project is built and maintained by students who believe that a quality education should be a right, not a privilege. Every feature, every practice question, and every unit overview is created with one goal in mind: giving students the resources they need to succeed regardless of their background. If even one person scores higher on their exam, earns a scholarship they wouldn't have otherwise, or simply feels more confident walking into a testing room because of what they found here, it's worth every hour spent building this platform.
          </p>
        </div>
      </div>

      {/* Closing statement */}
      <div
        className="rounded-xl p-5 text-center"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--color-primary) 8%, var(--color-secondary))',
        }}
      >
        <p className="text-sm font-medium" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
          "Everyone deserves the chance to prove what they're capable of, regardless of circumstance."
        </p>
      </div>
    </div>
  )
}
