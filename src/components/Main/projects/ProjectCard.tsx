import Image from 'next/image'
import type { Project, ProjectStatus } from './projects.data'

const STATUS_STYLE: Record<ProjectStatus, { color: string; label: string }> = {
  LIVE: { color: 'text-terminal-online', label: 'LIVE' },
  DEMO: { color: 'text-terminal-green', label: 'DEMO' },
  NDA: { color: 'text-terminal-warning', label: 'NDA' },
  PRIVATE: { color: 'text-terminal-green/70', label: 'PRIVATE TOOL' },
  OSS: { color: 'text-terminal-green', label: 'OPEN SOURCE' },
  ARCHIVED: { color: 'text-terminal-green/60', label: 'ARCHIVED' },
}

/** Shown instead of a screenshot when the work cannot be published. */
const ClassifiedPanel = ({ reason }: { reason: string }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-terminal-dark/20 overflow-hidden">
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, rgba(54,166,137,0.12) 0 12px, transparent 12px 24px)',
      }}
    />
    <div className="relative border-2 border-terminal-warning px-5 py-2 font-mono text-sm md:text-base uppercase tracking-[0.3em] text-terminal-warning">
      CLASSIFIED
    </div>
    <div className="relative font-mono text-[10px] md:text-xs uppercase tracking-wider text-terminal-green/60 text-center px-6">
      {reason}
    </div>
  </div>
)

/** Fallback for public code with no screenshot — states the platform instead of hiding it. */
const StackPanel = ({ stack }: { stack: string[] }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-terminal-dark/20 overflow-hidden">
    <div
      className="absolute inset-0 opacity-25"
      style={{
        backgroundImage:
          'linear-gradient(rgba(54,166,137,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(54,166,137,0.12) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
    <div className="relative font-mono text-2xl md:text-3xl uppercase tracking-wider text-terminal-green/80">
      {stack[0]}
    </div>
    <div className="relative font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-terminal-green/50">
      source available
    </div>
  </div>
)

const ProjectCard = ({ project }: { project: Project }) => {
  const status = STATUS_STYLE[project.status]

  return (
    <article className="flex h-full flex-col border-2 border-terminal-green bg-black shadow-glow-sm project-card">
      <header className="flex items-center justify-between gap-3 border-b border-terminal-green/50 px-4 py-2 font-mono text-[11px] md:text-xs text-terminal-green/70">
        <span>
          {project.id} / <span className="text-terminal-green">{project.code}</span>
        </span>
        <span className="flex items-center gap-3">
          <span>{project.year}</span>
          <span className={`flex items-center gap-1.5 ${status.color}`}>
            <span aria-hidden="true">[●]</span>
            <span>{status.label}</span>
          </span>
        </span>
      </header>

      <div className="grid flex-1 grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="relative min-h-[200px] border-b border-terminal-green/30 bg-terminal-dark/30 md:border-b-0 md:border-r">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} — ${project.tagline}`}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-contain object-center p-3 opacity-90 transition-all duration-500 hover:opacity-100 hover:scale-[1.02]"
            />
          ) : project.status === 'NDA' ? (
            <ClassifiedPanel reason="Screenshots withheld — real user data" />
          ) : (
            <StackPanel stack={project.stack} />
          )}
        </div>

        <div className="flex flex-col gap-3 p-4 md:p-5">
          <div>
            <h2 className="font-mono text-xl md:text-2xl uppercase tracking-wider text-terminal-green">
              {project.name}
            </h2>
            <p className="font-mono text-xs md:text-sm uppercase text-terminal-green/70">
              {project.tagline}
            </p>
          </div>

          <dl className="space-y-1 font-mono text-[11px] md:text-xs text-terminal-green/75">
            <div className="flex gap-2">
              <dt className="shrink-0 text-terminal-green/50">ROLE:</dt>
              <dd>{project.role}</dd>
            </div>
          </dl>

          <p className="font-mono text-xs md:text-sm leading-relaxed text-terminal-green/85">
            <span className="text-terminal-green/50" aria-hidden="true">&gt; </span>
            {project.outcome}
          </p>

          <ul className="mt-auto flex flex-wrap gap-1">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="border border-terminal-green/40 px-2 py-0.5 font-mono text-[10px] md:text-xs text-terminal-green/80"
              >
                {tech}
              </li>
            ))}
          </ul>

          {project.links.length > 0 && (
            <div className="flex gap-2">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-button flex-1 px-3 py-2 text-center font-mono text-xs md:text-sm uppercase tracking-wider"
                >
                  [&gt;] {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
