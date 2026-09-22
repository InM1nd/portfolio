import Image from 'next/image'
import Sanya from '@/img/other/SANYA.jpg'
import { glow, glowStrong } from '@/components/pipboy/PipBoyShell'

type Job = {
  from?: string
  to?: string
  role: string
  company: string
  points: string[]
  stack?: string
}

const EXPERIENCE: Job[] = [
  {
    from: 'SEP 2025',
    to: 'NOW',
    role: 'Frontend Developer & Designer',
    company: 'Marswalk Media',
    points: [
      'Designed and built a bilingual Next.js 16 / Sanity 5 platform to replace the agency’s Webflow site, plus a production client portal for account managers.',
      'Preserved search equity for the migration: Search-Console-led 308 redirects, hreflang, sitemap, JSON-LD and crawler-readable SSR content.',
      'Built a consent-aware multi-step lead funnel with server-side validation and fail-closed Make delivery.',
      'Established a CI quality gate with 300 Node-based contract tests covering rendering, SEO, redirects, lead delivery and architecture rules.',
    ],
    stack: 'Next.js · React · TypeScript · Tailwind · Sanity · MongoDB · GSAP · Three.js · CI · Node contract tests',
  },
  {
    from: 'JAN 2025',
    to: 'JUL 2025',
    role: 'Frontend / Product Engineer (Contract)',
    company: 'OBRIO',
    points: [
      'Designed and built an internal org-structure dashboard used by 300+ employees (Next.js, TypeScript, Google SSO).',
    ],
    stack: 'Next.js · TypeScript · Google SSO',
  },
  {
    from: 'JAN 2024',
    to: 'DEC 2024',
    role: 'Freelance Frontend Developer',
    company: 'Landing pages for early-stage brands',
    points: [
      'Skelya (career consultation platform), Verus Property (Dubai real estate), Skeptic (fitness platform).',
      'Built and shipped responsive sites from design to production.',
      'Skelya: Next.js site with SEO setup, WayForPay payments and a Telegram-based client-consultant matching flow.',
      'Verus Property on WordPress; Skeptic on Next.js — both with email capture, DNS and hosting setup.',
    ],
  },
  {
    from: 'MAR 2023',
    to: 'NOV 2023',
    role: 'Frontend Developer',
    company: 'Kicks Space — sneakers store',
    points: [
      'Built a responsive e-commerce UI with React and Tailwind CSS.',
      'Implemented adaptive layouts and UI logic across screen sizes.',
      'Agile cross-functional team: sprint planning, code reviews, iterative UX work.',
    ],
    stack: 'React · Tailwind CSS',
  },
  {
    from: 'OCT 2022',
    to: 'APR 2023',
    role: 'Frontend Developer',
    company: 'Menudget — smart menu',
    points: [
      'Developed interactive digital-menu components with Next.js and Tailwind CSS.',
      'Improved responsive behaviour and visual presentation across screen sizes.',
      'Focused on smooth cross-device interaction and clearer presentation of menu features.',
    ],
    stack: 'Next.js · Tailwind CSS',
  },
]

/** Verified facts only — Marswalk migration and OBRIO. */
const PROOF = [
  'WEBFLOW → NEXT.JS PLATFORM',
  'DE / EN · SANITY CMS · SSR FOR CRAWLERS',
  '300 CONTRACT TESTS · CI ON PR + MAIN',
  'OBRIO · USED BY 300+ EMPLOYEES',
]

const STACK: [string, string][] = [
  ['FRONTEND', 'React · Next.js · TypeScript · Tailwind CSS'],
  ['RUNTIME', 'Node.js · Three.js · GSAP · Motion'],
  ['DATA', 'PostgreSQL · MongoDB · Prisma · Supabase'],
  ['TOOLS', 'Git · GitHub · Docker · Vercel · Sanity CMS · Playwright'],
  ['AI', 'Claude · GPT · Cursor · Codex · MCP'],
]

const EDUCATION = [
  ['MSc Information Systems and Technologies', 'KNEU, Kyiv · Feb 2024—May 2025'],
  ['MSc Applied Economics · MSc International Economics', 'University of Vienna; KNEU, Kyiv'],
  ['Frontend Developer Certification', 'GoIT, Kyiv · Sep 2021—Aug 2022'],
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

const Languages = () => (
  <Block label="LANGUAGES">
    <dl className="max-w-xs space-y-1 font-mono text-[12px]">
      {LANGUAGES.map(([name, level]) => (
        <div key={name} className="flex justify-between gap-2">
          <dt className="text-terminal-text/80">{name}</dt>
          <dd className="text-terminal-text/60">{level}</dd>
        </div>
      ))}
    </dl>
  </Block>
)

const Stack = ({ className }: { className: string }) => (
  <Block label="STACK">
    <div className={className}>
      {STACK.map(([group, items]) => (
        <p key={group} className="font-mono text-[12px] text-terminal-text/80">
          <span className="text-terminal-text/60">{group} </span>
          {/* nbsp keeps each "·" on the line of the word before it */}
          {items.replaceAll(' · ', '\u00a0· ')}
        </p>
      ))}
    </div>
  </Block>
)

const Team = () => (
  <div className="flex min-h-0 flex-1 flex-col overflow-y-auto md:overflow-hidden">
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-5 p-4 md:grid-cols-[210px_1fr] md:gap-0 md:overflow-hidden md:p-5">
      {/* photo first on a phone — stack follows in the dossier so the name is still next */}
      <aside className="flex shrink-0 flex-col gap-4 md:min-h-0 md:pr-5">
        <div className="relative mx-auto aspect-[4/5] w-52 border border-terminal-green/35 md:mx-0 md:w-full md:max-w-[210px]">
          <Image
            src={Sanya}
            alt="Oleksandr Zabolotnyi"
            fill
            sizes="(max-width: 767px) 208px, 210px"
            className="object-cover"
            priority
          />
        </div>

        {/* photo + stack only — languages and education live in the dossier so the sidebar fits without scrolling */}
        <div className="hidden md:block">
          <Stack className="flex flex-col gap-1.5" />
        </div>
      </aside>

      {/* dossier column — the only pane that scrolls on desktop */}
      <div className="flex flex-col gap-5 md:min-h-0 md:overflow-y-auto md:border-l md:border-terminal-green/20 md:pl-5">
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
            Building for the web since 2021, based in Vienna. I own product UX and the
            implementation: a bilingual Next.js platform, client portals, and products I ship
            myself. I also built Quizzley, an AI quiz platform used by 300+ users. Hands-on with
            PostgreSQL, MongoDB, Prisma, Docker, Vercel, and AI-assisted workflows. German A2.
          </p>
        </header>

        <Block label="SELECTED PROOF">
          <ul className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-1 border-l border-terminal-green/25 pl-3 sm:grid-cols-2">
            {PROOF.map((fact) => (
              <li key={fact} className="flex gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-terminal-text/80">
                <span aria-hidden="true" className="text-terminal-text/60">
                  ▸
                </span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block label="EXPERIENCE">
          <ol className="space-y-3">
            {EXPERIENCE.map((job) => (
              <li key={`${job.company}-${job.from ?? job.role}`} className="border-l border-terminal-green/25 pl-3">
                {job.from && job.to && (
                  <p className="font-mono text-[11px] uppercase tabular-nums text-terminal-text/60">
                    {job.from === job.to ? job.from : `${job.from} — ${job.to}`}
                  </p>
                )}
                <p className="mt-0.5 font-mono text-sm uppercase tracking-wide text-terminal-text" style={glow}>
                  {job.role}
                </p>
                <p className="font-mono text-[12px] text-terminal-text">{job.company}</p>
                <ul className="mt-1 space-y-0.5">
                  {job.points.map((point) => (
                    <li key={point} className="font-mono text-[13px] leading-normal text-terminal-text/80">
                      <span className="text-terminal-text/60">— </span>
                      {point}
                    </li>
                  ))}
                </ul>
                {job.stack && (
                  <p className="mt-1 font-mono text-[11px] text-terminal-text/70">{job.stack}</p>
                )}
              </li>
            ))}
          </ol>
        </Block>

        <div className="md:hidden">
          <Stack className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2" />
        </div>

        <div>
          <Block label="HOW I WORK">
            <ul className="grid grid-cols-1 gap-1 font-mono text-[12px] text-terminal-text/80 sm:grid-cols-2">
              <li>— Own a feature end to end, from UX decision to production.</li>
              <li>— Type-safe frontend and reusable component systems.</li>
              <li>— Performance and rendering quality treated as features.</li>
              <li>— AI-assisted workflows where they actually save time.</li>
            </ul>
          </Block>
        </div>

        <Block label="EDUCATION">
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2 font-mono text-[12px] sm:grid-cols-2">
            {EDUCATION.map(([title, place]) => (
              <li key={title}>
                <p className="text-terminal-text/80">{title}</p>
                <p className="text-terminal-text/60">{place}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Languages />
      </div>
    </div>
  </div>
)

export default Team
