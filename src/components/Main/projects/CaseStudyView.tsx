import TransitionLink from '@/components/TransitionLink'
import { glow, glowStrong } from '@/components/pipboy/PipBoyShell'
import { caseNav, type CaseLine, type CaseStudy } from '@/lib/case-studies'
import CaseCopyScroll from './CaseCopyScroll'
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

const CaseNav = ({ study }: { study: CaseStudy }) => {
  const { prev, next, index, total } = caseNav(study.slug)
  const n = String(index + 1).padStart(2, '0')
  const of = String(total).padStart(2, '0')

  return (
    <nav className="flex items-baseline justify-between gap-3 font-mono text-[12px] uppercase tracking-[0.12em]">
      <TransitionLink href="/projects" className="shrink-0 text-terminal-text/70 hover:text-terminal-green">
        ◂ All work
      </TransitionLink>
      <div className="flex min-w-0 items-baseline justify-end gap-3">
        <TransitionLink href={`/projects/${prev.slug}`} className="min-w-0 truncate">
          ◂ {prev.name}
        </TransitionLink>
        <span className="shrink-0 whitespace-nowrap" aria-label={`${index + 1} of ${total}`}>
          <span className="text-terminal-green">{n}</span>
          <span className="text-terminal-text/60"> / {of}</span>
        </span>
        <TransitionLink href={`/projects/${next.slug}`} className="min-w-0 truncate">
          {next.name} ▸
        </TransitionLink>
      </div>
    </nav>
  )
}

const CaseStudyView = ({ study }: { study: CaseStudy }) => {
  const meta = [study.role, study.status].filter(Boolean).join(' · ')
  const liveLabel = study.status?.toLowerCase().includes('demo') ? 'Live demo' : 'Live'

  return (
    <article className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:flex-row lg:overflow-hidden">
      <aside className="flex flex-col lg:h-full lg:w-[24rem] lg:shrink-0 lg:overflow-hidden lg:border-r lg:border-terminal-green/20 xl:w-[28rem]">
        <CaseCopyScroll>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-terminal-text/70">{study.kicker}</p>
          <h1 className="mt-2 font-mono text-2xl leading-tight text-terminal-green" style={glowStrong}>
            {study.title}
          </h1>
          <p className="mt-3 font-mono text-[13px] leading-relaxed text-terminal-text/80" style={glow}>
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

          <h2 className="mb-2 mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-terminal-text/60">Decisions</h2>
          <ul className="space-y-2">
            {study.decisions.map((line) => (
              <li key={line.emphasis} className="flex gap-2">
                <span aria-hidden="true" className="mt-px font-mono text-[13px] text-terminal-text/60">
                  ▸
                </span>
                <Lead line={line} />
              </li>
            ))}
          </ul>
        </CaseCopyScroll>

        <div className="mx-4 mt-6 hidden border-t border-terminal-green/20 pt-4 sm:mx-6 lg:mx-6 lg:mb-5 lg:mt-0 lg:block lg:shrink-0">
          <CaseNav study={study} />
        </div>
      </aside>

      <div className="px-4 py-4 sm:px-6 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:px-6 lg:py-5">
        {study.note && <p className="mb-3 font-mono text-[12px] text-terminal-text/70">{study.note}</p>}
        <div className="space-y-5">
          {study.images.map((image, index) => (
            <CaseFigure key={image.src} image={image} priority={index === 0} />
          ))}
        </div>
        <div className="mt-8 border-t border-terminal-green/20 pt-4 lg:hidden">
          <CaseNav study={study} />
        </div>
      </div>
    </article>
  )
}

export default CaseStudyView
