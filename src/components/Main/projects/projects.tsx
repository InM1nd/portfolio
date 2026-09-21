import ProjectCard from './ProjectCard'
import ArchiveCard from './ArchiveCard'
import { COMMERCIAL, PRODUCTS, OPEN_SOURCE, ARCHIVE } from './projects.data'

const SectionDivider = ({ title, note }: { title: string; note: string }) => (
  <div className="w-full px-4 md:px-6 mt-10 mb-5">
    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-terminal-green/30 pb-2">
      <h2 className="font-mono text-base md:text-xl uppercase tracking-wider text-terminal-green">
        <span className="text-terminal-green/50" aria-hidden="true">// </span>
        {title}
      </h2>
      <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-terminal-green/45">
        {note}
      </span>
    </div>
  </div>
)

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 md:px-6 w-full">{children}</div>
)

const Projects = () => {
  return (
    <section className="flex flex-col items-center mb-2 relative z-10 pt-32 md:pt-36 w-full max-w-[1700px] mx-auto">
      <header className="w-full px-4 md:px-6">
        <div className="border-2 border-terminal-green bg-black/80 p-5 md:p-6 shadow-glow-sm">
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-terminal-green/60">
            PROJECT INDEX
          </p>
          <h1 className="font-mono text-2xl md:text-4xl uppercase tracking-wider text-terminal-green mt-1">
            SELECTED WORK
          </h1>
          <p className="font-mono text-xs md:text-sm text-terminal-green/75 mt-2 max-w-3xl">
            Production apps, product builds and developer tooling. Every status below is real —
            what is live is linked, what is under NDA says so.
          </p>
        </div>
      </header>

      <SectionDivider title="COMMERCIAL" note="shipped with a team" />
      <div className="grid grid-cols-1 gap-4 px-4 md:px-6 w-full">
        {COMMERCIAL.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <SectionDivider title="PRODUCT BUILDS" note="designed and built solo" />
      <Grid>
        {PRODUCTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Grid>

      <SectionDivider title="OPEN SOURCE" note="public code, public license" />
      <Grid>
        {OPEN_SOURCE.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Grid>

      <SectionDivider title="ARCHIVE" note="earlier work, kept online" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-6 w-full">
        {ARCHIVE.map((p) => (
          <ArchiveCard
            key={p.id}
            id={p.id}
            code={p.code}
            title={p.name}
            subtitle={p.tagline}
            date={p.year}
            tech={p.stack}
            link={p.url}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
