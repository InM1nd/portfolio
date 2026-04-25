import Image from 'next/image'
import { Button } from '@/components/ui/button'
import LargeImage from '@/img/other/Filmoteka_Lg.png'
import ProjectLocationMap from '@/components/ProjectLocationMap'
import ProjectTimeline from '@/components/ProjectTimeline'

const Filmoteka = () => {
  const projectCode = 'FILMOTEKA_LIB'
  const projectId = '004'
  const status = 100
  const distortion = 1.8
  const coordinates = { x: 50.4, y: 30.5, z: 433.0 }
  const city = 'Kyiv'
  const projectDate = '2023-11-05'
  const techStack = ['JavaScript', 'HTML/CSS']

  const getStatusColor = (dist: number) => {
    if (dist < 5) return 'text-terminal-green'
    if (dist < 15) return 'text-terminal-warning'
    return 'text-terminal-danger'
  }

  const getStatusLabel = (dist: number) => {
    if (dist < 5) return 'STABLE'
    if (dist < 15) return 'CORRECTION NEEDED'
    return 'INSTABILITY'
  }

  const statusColor = getStatusColor(distortion)
  const statusLabel = getStatusLabel(distortion)

  return (
    <div className="w-full flex flex-col space-y-3">
      <div className="border-b border-terminal-green/50 pb-3 space-y-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
          <div className="font-mono text-sm text-terminal-green/75">
            ID: <span className="text-terminal-green">{projectId}</span> | CODE: <span className="text-terminal-green">{projectCode}</span>
          </div>
          <div className="font-mono text-xs text-terminal-green/70">
            DATE: <span className="text-terminal-green">{projectDate}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className="flex items-center gap-2 flex-1">
            <span className="font-mono text-xs text-terminal-green/70">STATUS:</span>
            <div className="flex-1 h-2.5 border border-terminal-green bg-terminal-dark max-w-[140px]">
              <div 
                className="h-full bg-terminal-green transition-all duration-300"
                style={{ width: `${status}%` }}
              />
            </div>
            <span className="font-mono text-xs text-terminal-green">{status}%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`font-mono text-xs ${statusColor}`}>
              DIST: <span className="font-bold">{distortion.toFixed(2)}%</span>
            </span>
            <span className={`font-mono text-xs ${statusColor}`}>
              [{statusLabel}]
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
        <div>
          <h2 className="font-mono text-2xl md:text-3xl text-terminal-green uppercase tracking-wider">
            FILMOTEKA
          </h2>
          <h3 className="font-mono text-sm text-terminal-green/80 uppercase">
            FILM LIBRARY & TRACKER
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-1 md:justify-end max-w-[260px]">
          {techStack.map((tech, idx) => (
            <span key={idx} className="border border-terminal-green/50 px-2 py-1 font-mono text-[10px] md:text-xs text-terminal-green">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="relative border border-terminal-green/50 bg-black p-2">
        <div className="relative overflow-hidden min-h-[240px] md:min-h-[290px]">
          <Image
            src={LargeImage}
            alt="Filmoteka project"
            className="w-full h-full object-cover transition-all duration-300 grayscale project-image-container"
            style={{
              filter: 'grayscale(100%) brightness(0.7) contrast(1.2)',
            }}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
        <ProjectLocationMap
          coordinates={coordinates}
          distortion={distortion}
          projectCode={projectCode}
          city={city}
        />
        <ProjectTimeline
          startDate={projectDate}
          endDate="2024-01-15"
          projectCode={projectCode}
        />
      </div>

      <div className="border border-terminal-green/50 bg-black p-3 space-y-2">
        <div className="font-mono text-xs md:text-sm text-terminal-green/80 line-clamp-2">
          Film library and tracking system with search functionality
        </div>
      </div>

      <div className="flex gap-3 pt-1">
        <Button asChild className="flex-1 terminal-button project-cta-button project-cta-button-filled font-mono text-sm md:text-base uppercase tracking-wider py-3">
          <a href="https://okolobaha-me.github.io/quentin-filmotino/#en" target="_blank" rel="noopener noreferrer">
            [&gt;] OPEN PROJECT
          </a>
        </Button>
        <Button asChild className="flex-1 terminal-button project-cta-button project-cta-button-ghost font-mono text-sm md:text-base uppercase tracking-wider py-3">
          <a href="https://okolobaha-me.github.io/quentin-filmotino/#en" target="_blank" rel="noopener noreferrer">
            [i] CASE STUDY
          </a>
        </Button>
      </div>
    </div>
  )
}

export default Filmoteka
