'use client'

import { useState } from 'react'
import TicTac from './tictac/tictac'
import Weather from './weather/weather'
import InteractiveCanvas from './testim/testim'
import { glow, glowStrong } from '@/components/pipboy/PipBoyShell'

const MODULES = [
  { id: 'WEATHER' as const, label: 'WEATHER', code: 'WEATHER_SCANNER', note: 'live API readout' },
  { id: 'TICTAC' as const, label: 'TIC-TAC', code: 'TICTAC_MODULE', note: 'two-player board' },
  { id: 'DRAWING' as const, label: 'DRAWING', code: 'DRAWING_MODULE', note: 'canvas sandbox' },
]

const Applications = () => {
  const [active, setActive] = useState<(typeof MODULES)[number]['id']>('WEATHER')
  const current = MODULES.find((m) => m.id === active)!

  const drawing = active === 'DRAWING'

  return (
    <div className={`flex min-h-0 flex-1 flex-col overflow-y-auto ${drawing ? 'md:overflow-hidden' : ''}`}>
      <div className={`grid min-h-0 grid-cols-1 md:grid-cols-[minmax(0,280px)_1fr] ${drawing ? 'flex-1' : 'min-h-full'}`}>
        {/* module register */}
        <aside className="border-b border-terminal-green/20 md:border-b-0">
          <header className="px-4 pb-4 pt-3 md:px-5 md:pt-5">
            <div className="flex items-baseline justify-between gap-3">
              <h1 className="font-mono text-2xl uppercase tracking-wide text-terminal-green" style={glowStrong}>
                LAB
              </h1>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-terminal-text/60">
                {String(MODULES.length).padStart(2, '0')} modules
              </span>
            </div>
            <p className="mt-1 max-w-[28rem] font-mono text-[13px] leading-relaxed text-terminal-text/80">
              Small interactive things built to try an idea or an API. Not client work — the sandbox.
            </p>
          </header>

          <div className="border-t border-terminal-green/15 py-2">
            {MODULES.map((m, index) => {
              const on = m.id === active
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(m.id)}
                  aria-pressed={on}
                  className="relative flex w-full items-start gap-3 border-l-2 px-4 py-2.5 text-left transition-colors hover:bg-terminal-green/[0.05] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-terminal-green"
                  style={{
                    borderColor: on ? '#36A689' : 'transparent',
                    background: on ? 'rgba(54,166,137,.07)' : undefined,
                  }}
                >
                  <span className="mt-0.5 w-5 shrink-0 font-mono text-[11px] tabular-nums text-terminal-text/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${on ? 'bg-terminal-green shadow-[0_0_6px_#36A689]' : 'bg-terminal-green/25'}`}
                      />
                      <span
                        className={`font-mono text-sm uppercase tracking-wide ${on ? 'text-terminal-text' : 'text-terminal-text/70'}`}
                        style={on ? glow : undefined}
                      >
                        {m.label}
                      </span>
                    </span>
                    <span className="mt-0.5 block font-mono text-[12px] text-terminal-text/60">{m.note}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </aside>

        {/* module output */}
        <section className={`min-w-0 border-l border-terminal-green/20 ${drawing ? 'flex min-h-0 flex-1 flex-col' : ''}`}>
          <div className="flex shrink-0 items-baseline justify-between border-b border-terminal-green/20 bg-[#060a08]/90 px-4 py-2 backdrop-blur-sm md:px-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-terminal-text/70">
              {current.code}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-terminal-online">
              ● running in browser
            </span>
          </div>

          <div className={drawing ? 'flex min-h-0 flex-1 flex-col p-4 md:p-5' : 'p-4 md:p-5'}>
            {active === 'WEATHER' && <Weather />}
            {active === 'TICTAC' && <TicTac />}
            {active === 'DRAWING' && <InteractiveCanvas />}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Applications
