'use client'

import Image from 'next/image'
import { useState } from 'react'
import { glow, glowStrong } from '@/components/pipboy/PipBoyShell'
import { ALL_PROJECTS, ARCHIVE, type Project } from './projects.data'

const FILTERS = ['ALL', 'LIVE', 'OPEN SOURCE', 'NDA'] as const
type Filter = (typeof FILTERS)[number]

const matches = (status: Project['status'], f: Filter) =>
  f === 'ALL' ||
  (f === 'LIVE' && (status === 'LIVE' || status === 'DEMO')) ||
  (f === 'OPEN SOURCE' && status === 'OSS') ||
  (f === 'NDA' && (status === 'NDA' || status === 'PRIVATE'))

const LinkRow = ({ links }: { links: Project['links'] }) =>
  links.length > 0 ? (
    <div className="mt-3 flex flex-wrap gap-2">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-terminal-green/45 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-terminal-green/80 transition-colors hover:bg-terminal-green hover:text-black"
          style={glow}
        >
          {l.label} ↗
        </a>
      ))}
    </div>
  ) : null

/** Shown under a row on phones, where there is no side panel to hover into. */
const InlineDetail = ({ p }: { p: Project }) => (
  <div className="detail-open border-y border-terminal-green/20 bg-terminal-green/[0.03] px-3 py-3 md:hidden">
    {p.image && (
      <div className="relative mb-2 aspect-[16/9] overflow-hidden border border-terminal-green/20">
        <Image
          src={p.image}
          alt={`${p.name} — ${p.tagline}`}
          fill
          sizes="100vw"
          className="object-cover object-top opacity-55"
          style={{
            filter:
              'grayscale(1) sepia(1) hue-rotate(96deg) saturate(2.2) brightness(.75) contrast(1.15)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(0,0,0,.5) 0 1px, transparent 1px 3px)',
          }}
        />
      </div>
    )}
    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-terminal-green/40">
      {p.code} · {p.role}
    </p>
    <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-terminal-green/75" style={glow}>
      {p.outcome}
    </p>
    <p className="mt-1.5 font-mono text-[10px] text-terminal-green/35">{p.stack.join('  ·  ')}</p>
    <LinkRow links={p.links} />
  </div>
)

const ProjectRegister = () => {
  const [filter, setFilter] = useState<Filter>('ALL')
  const [sel, setSel] = useState(0)

  const list = ALL_PROJECTS.filter((p) => matches(p.status, filter))
  const current = list[Math.min(sel, list.length - 1)] ?? list[0]
  const idx = list.indexOf(current)

  /** Arrow keys move the cursor, like the real thing. */
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      setSel((s) => {
        const next = e.key === 'ArrowDown' ? s + 1 : s - 1
        return Math.max(0, Math.min(next, list.length - 1))
      })
    }
  }

  return (
    <>
      {/* sub-tabs double as a real filter */}
      <div className="flex shrink-0 flex-wrap items-center gap-1 border-b border-terminal-green/20 px-2 py-1.5">
        {FILTERS.map((f) => {
          const n = ALL_PROJECTS.filter((p) => matches(p.status, f)).length
          const on = f === filter
          return (
            <button
              key={f}
              onClick={() => {
                setFilter(f)
                setSel(0)
              }}
              className={`px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] transition-colors ${
                on ? 'bg-terminal-green text-black' : 'text-terminal-green/40 hover:text-terminal-green/75'
              }`}
            >
              {f} <span className={on ? 'text-black/60' : 'text-terminal-green/25'}>{n}</span>
            </button>
          )
        })}
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr]">
        {/* ── register ── */}
        <div className="flex min-h-0">
          <div className="relative w-4 shrink-0 border-r border-terminal-green/15">
            <div className="absolute inset-y-2 left-1/2 w-px -translate-x-1/2 bg-terminal-green/15" />
            <div
              className="absolute left-1/2 h-6 w-[3px] -translate-x-1/2 bg-terminal-green/70 transition-all duration-300"
              style={{
                top: `${(idx / Math.max(list.length - 1, 1)) * 78 + 8}%`,
                boxShadow: '0 0 6px rgba(54,166,137,.6)',
              }}
            />
          </div>

          {/* key={filter} remounts the list so the ignition animation replays on refilter */}
          <div key={filter} className="min-h-0 flex-1 overflow-y-auto py-1" onKeyDown={onKeyDown}>
            {list.map((item, i) => {
              const on = i === idx
              return (
                <div key={item.id}>
                  <button
                    onMouseEnter={() => setSel(i)}
                    onFocus={() => setSel(i)}
                    onClick={() => setSel(i)}
                    aria-expanded={on}
                    className={`row-ignite flex w-full items-center gap-2 px-2 py-2 text-left transition-colors ${
                      on ? 'bg-terminal-green text-black' : 'text-terminal-green/70 hover:bg-terminal-green/10'
                    }`}
                    style={{ animationDelay: `${i * 45}ms` }}
                  >
                    <span className={`w-3 font-mono text-[11px] ${on ? 'text-black' : 'text-transparent'}`}>
                      ►
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className="block font-mono text-sm uppercase tracking-wide md:text-[15px]"
                        style={on ? undefined : glow}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`block font-mono text-[10px] ${
                          on ? 'text-black/65' : 'text-terminal-green/35'
                        }`}
                      >
                        {item.tagline}
                      </span>
                    </span>
                    <span
                      className={`shrink-0 font-mono text-[9px] tabular-nums ${
                        on ? 'text-black/65' : 'text-terminal-green/30'
                      }`}
                    >
                      {item.year}
                    </span>
                  </button>

                  {on && <InlineDetail p={item} />}
                </div>
              )
            })}

            {/* archive lives at the bottom of the register, deliberately quiet */}
            <div className="mt-3 border-t border-terminal-green/15 px-2 pt-2">
              <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.25em] text-terminal-green/25">
                ARCHIVE
              </p>
              {ARCHIVE.map((a) => (
                <a
                  key={a.id}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline gap-2 py-1 font-mono text-[11px] text-terminal-green/40 transition-colors hover:text-terminal-green/75"
                >
                  <span className="uppercase">{a.name}</span>
                  <span className="text-[9px] text-terminal-green/25">{a.tagline}</span>
                  <span className="ml-auto text-[9px] tabular-nums text-terminal-green/25">{a.year}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── detail, desktop only ── */}
        <div className="hidden min-h-0 flex-col border-l border-terminal-green/20 md:flex">
          <div className="relative min-h-0 flex-[1.4] overflow-hidden">
            {current.image ? (
              <Image
                key={current.id}
                src={current.image}
                alt={`${current.name} — ${current.tagline}`}
                fill
                sizes="60vw"
                className="detail-open object-cover object-top opacity-45"
                style={{
                  filter:
                    'grayscale(1) sepia(1) hue-rotate(96deg) saturate(2.2) brightness(.75) contrast(1.15)',
                }}
              />
            ) : (
              <div
                className="flex h-full items-center justify-center font-mono text-[11px] uppercase tracking-[0.45em] text-terminal-green/25"
                style={glow}
              >
                {current.status === 'NDA' ? 'data restricted' : current.stack[0]}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020402] via-[#020402]/25 to-transparent" />
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, rgba(0,0,0,.5) 0 1px, transparent 1px 3px)',
              }}
            />
          </div>

          <div key={current.id} className="detail-open shrink-0 px-5 pb-4">
            <div className="flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-terminal-green/40">
              <span>{current.code}</span>
              <span className="text-terminal-green/20">◆</span>
              <span
                className={
                  current.status === 'NDA' || current.status === 'PRIVATE' ? 'text-[#FFB642]/80' : ''
                }
              >
                {current.status}
              </span>
            </div>
            <h2
              className="mt-1 font-mono text-2xl uppercase tracking-wide text-terminal-green"
              style={glowStrong}
            >
              {current.name}
            </h2>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-terminal-green/45">
              {current.role}
            </p>
            <p className="mt-2 max-w-xl font-mono text-xs leading-relaxed text-terminal-green/70" style={glow}>
              {current.outcome}
            </p>
            <p className="mt-2.5 font-mono text-[10px] tracking-wide text-terminal-green/35">
              {current.stack.join('   ·   ')}
            </p>
            <LinkRow links={current.links} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectRegister
