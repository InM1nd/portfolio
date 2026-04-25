import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ProjectLoadingPlaceholder from './ProjectLoadingPlaceholder'

const TripweavePlanner = () => {
  const projectCode = 'TRIPWEAVE_PLANNER'
  const projectId = '007'
  const status = 25
  const distortion = 82.4
  const projectDate = '2025-02-15'
  const techStack = ['React', 'Node.js', 'PostgreSQL']

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
                className="h-full bg-terminal-danger transition-all duration-300"
                style={{ width: `${status}%` }}
              />
            </div>
            <span className="font-mono text-xs text-terminal-danger animate-pulse">{status}%</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs md:text-sm text-terminal-danger animate-pulse">
              DIST: <span className="font-bold">{distortion.toFixed(2)}%</span>
            </span>
            <span className="font-mono text-xs text-terminal-danger uppercase tracking-tighter">
              [STRUCTURING_NODES...]
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
        <div>
          <h2 className="font-mono text-2xl md:text-3xl text-terminal-green uppercase tracking-wider">
            TRIPWEAVE
          </h2>
          <h3 className="font-mono text-sm text-terminal-green/80 uppercase">
            AI TRAVEL ORCHESTRATOR
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
        <div className="relative overflow-hidden min-h-[240px] md:min-h-[290px] flex items-center justify-center bg-terminal-dark/20">
          <span className="font-mono text-terminal-green/30 text-xl uppercase tracking-widest animate-pulse">
            [ MAPPING_NEURAL_PATHWAYS ]
          </span>
        </div>
      </div>

      <ProjectLoadingPlaceholder />
    </div>
  )
}

export default TripweavePlanner
