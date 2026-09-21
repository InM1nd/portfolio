type ArchiveCardProps = {
  id: string
  code: string
  title: string
  subtitle: string
  date: string
  tech: string[]
  link: string
}

const ArchiveCard = ({ id, code, title, subtitle, date, tech, link }: ArchiveCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 border border-terminal-green/40 bg-black p-4 transition-colors duration-300 hover:border-terminal-green"
    >
      <div className="flex items-center justify-between font-mono text-[10px] text-terminal-green/50">
        <span>
          {id} / {code}
        </span>
        <span>{date}</span>
      </div>

      <div>
        <h3 className="font-mono text-lg uppercase tracking-wider text-terminal-green">{title}</h3>
        <p className="font-mono text-xs uppercase text-terminal-green/60">{subtitle}</p>
      </div>

      <ul className="flex flex-wrap gap-1">
        {tech.map((t) => (
          <li
            key={t}
            className="border border-terminal-green/30 px-2 py-0.5 font-mono text-[10px] text-terminal-green/70"
          >
            {t}
          </li>
        ))}
      </ul>

      <span className="mt-1 font-mono text-[11px] uppercase tracking-wider text-terminal-green/60 transition-colors group-hover:text-terminal-green">
        [&gt;] OPEN ↗
      </span>
    </a>
  )
}

export default ArchiveCard
