import { Button } from '@/components/ui/button'

interface ArchiveCardProps {
  id: string
  code: string
  title: string
  subtitle: string
  date: string
  tech: string[]
  link: string
}

const ArchiveCard = ({ id, code, title, subtitle, date, tech, link }: ArchiveCardProps) => {
  const status = 100
  const blueAccent = 'text-blue-500'
  const blueBorder = 'border-blue-500'
  const blueBg = 'bg-blue-500'

  return (
    <div className="border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 relative z-20 shadow-glow-sm project-card flex flex-col h-full">
      {/* Project Header with Coordinates (Style matching main cards) */}
      <div className="border-b border-terminal-green/50 pb-3 space-y-2 mb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
          <div className="font-mono text-sm text-terminal-green/75">
            ID: <span className="text-terminal-green">{id}</span> | CODE: <span className="text-terminal-green">{code}</span>
          </div>
          <div className="font-mono text-xs text-terminal-green/70">
            DATE: <span className="text-terminal-green">{date}</span>
          </div>
        </div>

        {/* Status Bar (Blue style) */}
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className="flex items-center gap-2 flex-1">
            <span className="font-mono text-xs text-terminal-green/70 uppercase">DECRYPT_STATUS:</span>
            <div className={`flex-1 h-2.5 border ${blueBorder} bg-terminal-dark max-w-[140px]`}>
              <div 
                className={`h-full ${blueBg} transition-all duration-300 opacity-80`}
                style={{ width: `${status}%` }}
              />
            </div>
            <span className={`font-mono text-xs ${blueAccent}`}>{status}%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`font-mono text-[10px] ${blueAccent} brightness-125 uppercase tracking-tighter`}>
              [ ARCHIVED_BLOCK ]
            </span>
          </div>
        </div>
      </div>

      {/* Project Title Area */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h2 className="font-mono text-2xl md:text-3xl text-terminal-green uppercase tracking-wider">
            {title}
          </h2>
          <h3 className="font-mono text-sm text-terminal-green/80 uppercase">
            {subtitle}
          </h3>
        </div>
      </div>

      {/* Tech Stack (Green style) */}
      <div className="flex flex-wrap items-center gap-1 mb-6">
        {tech.map((t, idx) => (
          <span key={idx} className="border border-terminal-green/50 px-2 py-1 font-mono text-[10px] md:text-xs text-terminal-green">
            {t}
          </span>
        ))}
      </div>

      {/* Action Button (Green style) */}
      <div className="mt-auto pt-4">
        <Button asChild className="w-full terminal-button project-cta-button project-cta-button-ghost font-mono text-sm md:text-base uppercase tracking-wider py-3 h-auto">
          <a href={link} target="_blank" rel="noopener noreferrer">
            [&gt;] RECALL_DATA_ARCHIVE
          </a>
        </Button>
      </div>
    </div>
  )
}

export default ArchiveCard
