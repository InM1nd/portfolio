import Image from 'next/image'
import Sanya from '@/img/other/SANYA.jpg'
import { glow, glowStrong } from '@/components/pipboy/PipBoyShell'

const EXPERIENCE = [
  {
    period: '2025 — NOW',
    role: 'Frontend Developer & Designer',
    company: 'Marswalk Media',
    points: [
      'Built and maintain marswalk.media — bilingual production site on Next.js, TypeScript, Sanity CMS, GSAP, Three.js.',
      'Redesigned and rebuilt a production client portal: responsive layouts, navigation, core flows.',
      'Improved UX/UI of an internal tool used by account managers.',
      'Built landing-page funnels for lead generation, working with the CTO.',
    ],
    stack: 'Next.js · TypeScript · Sanity · GSAP',
  },
  {
    period: '2023',
    role: 'Frontend Developer',
    company: 'Kicks Space — sneakers store',
    points: [
      'Built a responsive e-commerce UI with React and Tailwind CSS.',
      'Agile cross-functional team: sprint planning, code reviews, iterative UX work.',
    ],
    stack: 'React · Tailwind',
  },
  {
    period: '2022 — 2023',
    role: 'Frontend Developer',
    company: 'Menudget — smart menu',
    points: [
      'Developed interactive digital-menu components with Next.js and Tailwind CSS.',
      'Focused on cross-device behaviour and clear presentation of menu features.',
    ],
    stack: 'Next.js · Tailwind',
  },
]

const STACK: [string, string][] = [
  ['CORE', 'React · Next.js · TypeScript · Tailwind CSS'],
  ['RUNTIME', 'Node.js · Three.js · GSAP · Motion'],
  ['DATA', 'PostgreSQL · MongoDB · Prisma · Supabase'],
  ['TOOLS', 'Git · Docker · Vercel · Sanity CMS · Playwright'],
  ['AI', 'Claude · GPT · Cursor · Codex · MCP'],
]

const EDUCATION = [
  ['MSc Information Systems and Technologies', 'KNEU, Kyiv · 2024—2025'],
  ['MSc Applied Economics', 'University of Vienna · 2021—now'],
  ['Frontend Developer Certification', 'GoIT, Kyiv · 2021—2022'],
]

const LANGUAGES = [
  ['English', 'Fluent'],
  ['German', 'A2'],
  ['Ukrainian', 'Native'],
  ['Russian', 'Native'],
]

const Block = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <section>
    <h2 className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-terminal-text/60">
      {label}
    </h2>
    {children}
  </section>
)

const Team = () => (
  <div className="min-h-0 flex-1 overflow-y-auto">
    <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-[210px_1fr] md:p-5">
      {/* identity column */}
      <aside className="flex flex-col gap-4">
        <div className="relative aspect-[4/5] w-full max-w-[210px] border border-terminal-green/35">
          <Image
            src={Sanya}
            alt="Oleksandr Zabolotnyi"
            fill
            sizes="210px"
            className="object-cover"
            style={{ filter: 'grayscale(.5) sepia(.4) hue-rotate(80deg) brightness(.85)' }}
            priority
          />
        </div>

        <Block label="LANGUAGES">
          <dl className="space-y-1 font-mono text-[12px]">
            {LANGUAGES.map(([name, level]) => (
              <div key={name} className="flex justify-between gap-2">
                <dt className="text-terminal-text/80">{name}</dt>
                <dd className="text-terminal-text/60">{level}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block label="EDUCATION">
          <ul className="space-y-2 font-mono text-[12px]">
            {EDUCATION.map(([title, place]) => (
              <li key={title}>
                <p className="text-terminal-text/80">{title}</p>
                <p className="text-terminal-text/60">{place}</p>
              </li>
            ))}
          </ul>
        </Block>
      </aside>

      {/* dossier column */}
      <div className="flex flex-col gap-5">
        <header>
          <h1
            className="font-mono text-2xl uppercase tracking-wide text-terminal-green md:text-3xl"
            style={glowStrong}
          >
            OLEKSANDR ZABOLOTNYI
          </h1>
          <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.2em] text-terminal-text/70">
            Frontend / product engineer · Vienna, AT
          </p>
          <p className="mt-2 max-w-2xl font-mono text-[13px] leading-relaxed text-terminal-text/80" style={glow}>
            Building for the web since 2021. I combine UX judgment with implementation ownership —
            bilingual production sites, client portals, dashboards and data-backed tooling.
          </p>
        </header>

        <Block label="EXPERIENCE">
          <ol className="space-y-3">
            {EXPERIENCE.map((job) => (
              <li key={job.period} className="border-l border-terminal-green/25 pl-3">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <p className="font-mono text-sm uppercase tracking-wide text-terminal-text" style={glow}>
                    {job.role}
                  </p>
                  <p className="font-mono text-[11px] tabular-nums text-terminal-text/60">{job.period}</p>
                </div>
                <p className="font-mono text-[12px] text-terminal-text">{job.company}</p>
                <ul className="mt-1 space-y-0.5">
                  {job.points.map((point) => (
                    <li key={point} className="font-mono text-[12px] leading-snug text-terminal-text/80">
                      <span className="text-terminal-text/60">— </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-1 font-mono text-[11px] text-terminal-text/60">{job.stack}</p>
              </li>
            ))}
          </ol>
        </Block>

        <Block label="STACK">
          <div className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
            {STACK.map(([group, items]) => (
              <p key={group} className="font-mono text-[12px] text-terminal-text/80">
                <span className="text-terminal-text/60">{group} </span>
                {items}
              </p>
            ))}
          </div>
        </Block>

        <Block label="HOW I WORK">
          <ul className="grid grid-cols-1 gap-1 font-mono text-[12px] text-terminal-text/80 sm:grid-cols-2">
            <li>— Own a feature end to end, from UX decision to production.</li>
            <li>— Type-safe frontend and reusable component systems.</li>
            <li>— Performance and rendering quality treated as features.</li>
            <li>— AI-assisted workflows where they actually save time.</li>
          </ul>
        </Block>
      </div>
    </div>
  </div>
)

export default Team
