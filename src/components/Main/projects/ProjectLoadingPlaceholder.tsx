import { Button } from '@/components/ui/button'

const ProjectLoadingPlaceholder = () => {
  return (
    <div className="space-y-3 relative overflow-hidden group">
      {/* Simulation of Map and Timeline Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 opacity-40 grayscale pointer-events-none">
        {/* Fake Map */}
        <div className="h-40 border border-terminal-green/30 bg-terminal-dark/20 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(54,166,137,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <span className="font-mono text-[10px] text-terminal-green/40 uppercase">SIGNAL_LOST...</span>
        </div>
        {/* Fake Timeline */}
        <div className="h-40 border border-terminal-green/30 bg-terminal-dark/20 p-4 space-y-4">
          <div className="h-2 w-full bg-terminal-green/10" />
          <div className="h-2 w-3/4 bg-terminal-green/10" />
          <div className="h-2 w-1/2 bg-terminal-green/10" />
        </div>
      </div>

      {/* Fake Description */}
      <div className="border border-terminal-green/30 bg-black/40 p-3 opacity-40">
        <div className="h-4 w-full bg-terminal-green/10 mb-2 animate-pulse" />
        <div className="h-4 w-2/3 bg-terminal-green/10 animate-pulse" />
      </div>

      {/* Fake Buttons */}
      <div className="flex gap-3 pt-1 opacity-50">
        <div className="flex-1 h-12 border border-terminal-green/20 bg-terminal-green/5 flex items-center justify-center font-mono text-xs text-terminal-green/30">
          [ INITIALIZING_KERNEL ]
        </div>
        <div className="flex-1 h-12 border border-terminal-green/20 bg-transparent flex items-center justify-center font-mono text-xs text-terminal-green/30">
          [ SCANNING_ASSETS ]
        </div>
      </div>

      {/* Overlay for "Loading" feel */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] flex flex-col items-center justify-center z-30 group-hover:bg-black/60 transition-colors">
        <div className="border-2 border-terminal-green/50 bg-black p-5 md:p-8 shadow-glow-sm relative min-w-[280px]">
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-terminal-green" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-terminal-green" />
          
          <div className="flex flex-col items-center gap-5">
            <div className="font-mono text-sm md:text-base text-terminal-green animate-pulse tracking-[0.3em] font-bold">
              UPDATING_DATA_STREAM...
            </div>
            <div className="w-full max-w-[240px] h-2 bg-terminal-dark border border-terminal-green/30 overflow-hidden">
              <div className="h-full bg-terminal-green animate-loading-bar shadow-[0_0_10px_#36A689]" />
            </div>
            <div className="font-mono text-xs md:text-sm text-terminal-green/70 uppercase tracking-wider">
              CONNECTION: <span className="text-terminal-danger">[FAILSAFE_ACTIVE]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectLoadingPlaceholder
