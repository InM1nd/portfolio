import TransitionLink from '@/components/TransitionLink'
import { glow, glowStrong } from '@/components/pipboy/PipBoyShell'
import { nextCase, type CaseLine, type CaseStudy } from '@/lib/case-studies'
import CaseFigure from './CaseFigure'

const Lead = ({ line }: { line: CaseLine }) => {
  const rest = line.text.startsWith(line.emphasis) ? line.text.slice(line.emphasis.length) : ''
  return (
    <p className="font-mono text-[13px] leading-relaxed">
      <span className="text-terminal-green">{line.emphasis}</span>
      {rest && <span className="text-terminal-text/80">{rest}</span>}
    </p>
  )
}

const CaseStudyView = ({ study }: { study: CaseStudy }) => {
  const next = nextCase(study.slug)
  const meta = [study.role, study.status].filter(Boolean).join(' · ')
  const liveLabel = study.status?.toLowerCase().includes('demo') ? 'Live demo' : 'Live'

  return (
    <article className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-6 md:px-8 md:py-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-terminal-text/70">{study.kicker}</p>
        <h1
          className="mt-2 max-w-3xl font-mono text-2xl leading-tight text-terminal-green sm:text-3xl"
          style={glowStrong}
        >
          {study.title}
        </h1>
        <p className="mt-3 max-w-2xl font-mono text-[13px] leading-relaxed text-terminal-text/80" style={glow}>
          {study.lead}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          {meta && (
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-terminal-text/70">{meta}</p>
          )}
          {study.live && (
            <a
              href={study.live}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button border border-terminal-green/45 bg-transparent px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-terminal-green hover:bg-terminal-green hover:text-black"
            >
              {liveLabel} ↗
            </a>
          )}
        </div>
        {study.access && (
          <p className="mt-2 font-mono text-[12px] leading-snug text-terminal-text/70">{study.access}</p>
        )}
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {study.stack.map((item) => (
            <li
              key={item}
              className="border border-terminal-green/15 px-1.5 py-px font-mono text-[11px] text-terminal-text/70"
            >
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mb-2 mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-terminal-text/60">Decisions</h2>
        <ul className="max-w-2xl space-y-2.5">
          {study.decisions.map((line) => (
            <li key={line.emphasis} className="flex gap-2">
              <span aria-hidden="true" className="mt-px font-mono text-[13px] text-terminal-text/60">
                ▸
              </span>
              <Lead line={line} />
            </li>
          ))}
        </ul>

        <div className="mt-6 max-w-3xl space-y-6">
          {study.note && <p className="font-mono text-[12px] text-terminal-text/70">{study.note}</p>}
          {study.images.map((image, index) => (
            <CaseFigure key={image.src} image={image} priority={index === 0} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-terminal-green/20 pt-4">
          <TransitionLink
            href="/projects"
            className="terminal-button font-mono text-[12px] uppercase tracking-[0.16em] text-terminal-green hover:text-terminal-text"
          >
            [◂] Back to all work
          </TransitionLink>
          <TransitionLink
            href={`/projects/${next.slug}`}
            className="terminal-button font-mono text-[12px] uppercase tracking-[0.16em] text-terminal-green hover:text-terminal-text"
          >
            Next case → {next.name}
          </TransitionLink>
        </div>
      </div>
    </article>
  )
}

export default CaseStudyView
