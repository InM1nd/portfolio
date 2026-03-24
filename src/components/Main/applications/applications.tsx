import { useState } from 'react'
import TicTac from './tictac/tictac'
import Weather from './weather/weather'
import InteractiveCanvas from './testim/testim'

const Applications = () => {
  const [activeModule, setActiveModule] = useState<'WEATHER' | 'TICTAC' | 'DRAWING'>('WEATHER')

  const modules = [
    { id: 'WEATHER' as const, label: 'WEATHER', code: 'WEATHER_SCANNER' },
    { id: 'TICTAC' as const, label: 'TIC-TAC', code: 'TICTAC_MODULE' },
    { id: 'DRAWING' as const, label: 'DRAWING', code: 'DRAWING_MODULE' },
  ]

  return (
    <section className="flex flex-col items-center px-4 md:px-6 mb-12 mx-auto pt-36 md:pt-40 w-full">
      <div className="w-full max-w-[1700px]">
        <div className="border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 shadow-glow-sm">
          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4 mb-6 pb-5 border-b border-terminal-green/30">
            <div>
              <div className="font-mono text-xs text-terminal-green/70 uppercase tracking-[0.2em] mb-2">
                SYSTEM UTILITIES
              </div>
              <h1 className="font-mono text-3xl md:text-5xl text-terminal-green uppercase tracking-wider">
                APPLICATIONS HUB
              </h1>
              <p className="font-mono text-sm md:text-base text-terminal-green/75 mt-2 max-w-3xl">
                Interactive utilities and experiments available directly in terminal mode.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 font-mono text-xs md:text-sm">
              <div className="border border-terminal-green/40 bg-terminal-dark/20 px-3 py-2">
                <span className="text-terminal-green/60">MODULES:</span>{' '}
                <span className="text-terminal-green">{modules.length}</span>
              </div>
              <div className="border border-terminal-green/40 bg-terminal-dark/20 px-3 py-2">
                <span className="text-terminal-green/60">STATUS:</span>{' '}
                <span className="text-terminal-green">ONLINE</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[340px_1fr] gap-5 md:gap-6">
            <aside className="border border-terminal-green/50 bg-terminal-dark/20 p-4 md:p-5">
              <div className="font-mono text-xs text-terminal-green/70 mb-3 uppercase tracking-wider">
                SELECT MODULE
              </div>
              <div className="space-y-2">
                {modules.map((module) => {
                  const isActive = activeModule === module.id
                  return (
                    <button
                      key={module.id}
                      onClick={() => setActiveModule(module.id)}
                      className={`w-full text-left border px-3 py-3 font-mono text-xs md:text-sm uppercase tracking-wider transition-all duration-200 ${
                        isActive
                          ? 'border-terminal-green bg-terminal-green text-black shadow-glow-sm'
                          : 'border-terminal-green/40 bg-black/50 text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>[{module.label}]</span>
                        <span className={isActive ? 'text-black/70' : 'text-terminal-green/60'}>{module.code}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
              <div className="mt-4 pt-3 border-t border-terminal-green/30 font-mono text-xs text-terminal-green/75">
                ACTIVE: <span className="text-terminal-green">{modules.find((m) => m.id === activeModule)?.code}</span>
              </div>
            </aside>

            <div className="border border-terminal-green/50 bg-terminal-dark/20 p-4 md:p-5">
              {activeModule === 'WEATHER' && (
                <div className="space-y-4">
                  <div className="font-mono text-sm md:text-base text-terminal-green mb-1 uppercase tracking-wider border-b border-terminal-green/30 pb-2">
                    WEATHER_SCANNER
                  </div>
                  <Weather />
                </div>
              )}

              {activeModule === 'TICTAC' && (
                <div className="space-y-4">
                  <div className="font-mono text-sm md:text-base text-terminal-green mb-1 uppercase tracking-wider border-b border-terminal-green/30 pb-2">
                    TICTAC_MODULE
                  </div>
                  <TicTac />
                </div>
              )}

              {activeModule === 'DRAWING' && (
                <div className="space-y-4">
                  <div className="font-mono text-sm md:text-base text-terminal-green mb-1 uppercase tracking-wider border-b border-terminal-green/30 pb-2">
                    DRAWING_MODULE
                  </div>
                  <InteractiveCanvas />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Applications
