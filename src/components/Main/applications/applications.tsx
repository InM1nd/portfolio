'use client'

import { useState } from 'react'
import TicTac from './tictac/tictac'
import Weather from './weather/weather'
import InteractiveCanvas from './testim/testim'
import { glow, glowStrong } from '@/components/pipboy/PipBoyShell'

const MODULES = [
  { id: 'WEATHER' as const, label: 'WEATHER', code: 'WEATHER_SCANNER', note: 'live API readout' },
  { id: 'TICTAC' as const, label: 'TIC-TAC', code: 'TICTAC_MODULE', note: 'minimax opponent' },
  { id: 'DRAWING' as const, label: 'DRAWING', code: 'DRAWING_MODULE', note: 'canvas sandbox' },
]

const Applications = () => {
  const [active, setActive] = useState<(typeof MODULES)[number]['id']>('WEATHER')
  const current = MODULES.find((m) => m.id === active)!

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[minmax(0,260px)_1fr]">
      {/* module register */}
      <div className="min-h-0 overflow-y-auto border-b border-terminal-green/20 md:border-b-0">
        <div className="px-3 py-3">
          <h1 className="font-mono text-xl uppercase tracking-wide text-terminal-green" style={glowStrong}>
            LAB
          </h1>
          <p className="mt-1 font-mono text-[13px] leading-relaxed text-terminal-text/80">
            Small interactive things built to try an idea or an API. Not client work — the sandbox.
          </p>
        </div>

        {MODULES.map((m) => {
          const on = m.id === active
          return (
            <button
              key={m.id}
              onClick={() => setActive(m.id)}
              className={`flex w-full items-center gap-2 px-2 py-2 text-left transition-colors ${
                on ? 'bg-terminal-green text-black' : 'text-terminal-text/80 hover:bg-terminal-green/10'
              }`}
            >
              <span className={`w-3 font-mono text-[11px] ${on ? 'text-black' : 'text-transparent'}`}>
                ►
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-sm uppercase tracking-wide" style={on ? undefined : glow}>
                  {m.label}
                </span>
                <span className={`block font-mono text-[12px] ${on ? 'text-black/80' : 'text-terminal-text/60'}`}>
                  {m.note}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      {/* module output */}
      <div className="flex min-h-0 flex-col border-l border-terminal-green/20">
        <div className="flex shrink-0 items-baseline justify-between border-b border-terminal-green/20 px-3 py-1.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-terminal-text/70">
            {current.code}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-terminal-online">
            ● running in browser
          </span>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-3 md:p-4">
          {active === 'WEATHER' && <Weather />}
          {active === 'TICTAC' && <TicTac />}
          {active === 'DRAWING' && <InteractiveCanvas />}
        </div>
      </div>
    </div>
  )
}

export default Applications
