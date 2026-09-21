'use client'

import Image from 'next/image'
import { Fragment, useState } from 'react'
import { glow, glowStrong } from '@/components/pipboy/PipBoyShell'
import { ARCHIVE, GROUPS, PROJECTS, type Project } from './projects.data'

const FILTERS = ['ALL', 'LIVE', 'CODE', 'PRIVATE'] as const
type Filter = (typeof FILTERS)[number]

const matches = (p: Project, f: Filter) =>
  f === 'ALL' ||
  (f === 'LIVE' && (p.status === 'LIVE' || p.status === 'DEMO')) ||
  (f === 'CODE' && p.links.some((l) => l.label === 'REPO')) ||
  (f === 'PRIVATE' && (p.status === 'NDA' || p.status === 'PRIVATE'))

/** Status is monochrome; only restricted work gets the amber warning tone. */
const STATUS_TONE: Record<Project['status'], string> = {
  LIVE: 'border-terminal-green/45 text-terminal-green/80',
  DEMO: 'border-terminal-green/30 text-terminal-green/60',
  NDA: 'border-[#FFB642]/40 text-[#FFB642]/75',
  PRIVATE: 'border-[#FFB642]/40 text-[#FFB642]/75',
  FORK: 'border-terminal-green/25 text-terminal-green/50',
  ARCHIVED: 'border-terminal-green/20 text-terminal-green/40',
}

const StatusChip = ({ status }: { status: Project['status'] }) => (
  <span
    className={`shrink-0 border px-1.5 py-px font-mono text-[9px] uppercase tracking-[0.15em] ${STATUS_TONE[status]}`}
  >
    {status}
  </span>
)

/** The project's own colour, used sparingly: one small lamp next to the selection. */
const Lamp = ({ accent, lit = true }: { accent: string; lit?: boolean }) => (
  <span
    aria-hidden="true"
    className="h-1.5 w-1.5 shrink-0 rounded-full transition-colors"
    style={lit ? { background: accent, boxShadow: `0 0 6px ${accent}` } : { background: 'rgba(54,166,137,.22)' }}
  />
)

const LinkRow = ({ p }: { p: Project }) =>
  p.links.length > 0 ? (
    <div className="ml-auto flex flex-wrap gap-2">
      {p.links.map((l) => (
        <a
          key={l.label}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="terminal-button border border-terminal-green/45 bg-transparent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-terminal-green hover:bg-terminal-green hover:text-black"
        >
          {l.label} ↗
        </a>
      ))}
    </div>
  ) : null

const host = (p: Project) => {
  const url = p.links.find((l) => l.label === 'OPEN')?.url ?? p.links[0]?.url
  return url ? new URL(url).host + new URL(url).pathname.replace(/\/$/, '') : p.name.toLowerCase()
}

/**
 * Screenshot as a browser window — real colour, native resolution, nothing painted over it.
 * The window keeps a 16:10 frame and fits whichever side of the box runs out first.
 */
const Media = ({ p, sizes }: { p: Project; sizes: string }) =>
  p.image ? (
    <div className="flex h-full min-h-0 items-center justify-center [container-type:size]">
      <figure
        key={p.id}
        className="detail-open w-[min(100cqw,calc((100cqh-26px)*1.6))] overflow-hidden rounded-md border border-terminal-green/20 bg-black shadow-[0_18px_50px_rgba(0,0,0,.6)]"
      >
        <div className="flex h-[26px] items-center gap-1.5 border-b border-terminal-green/15 px-2.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-terminal-green/20" />
          ))}
          <span className="ml-2 truncate font-mono text-[10px] tracking-wide text-terminal-green/40">
            {host(p)}
          </span>
        </div>
        <div className="relative aspect-[16/10]">
          <Image src={p.image} alt={`${p.name} — ${p.tagline}`} fill sizes={sizes} className="object-cover object-left-top" />
        </div>
      </figure>
    </div>
  ) : (
    <div className="relative flex h-full min-h-0 items-center justify-center overflow-hidden border border-dashed border-terminal-green/20">
      <pre
        key={p.id}
        aria-label={`${p.name} schematic`}
        className="detail-open overflow-x-auto p-4 text-[10px] leading-[1.35] text-terminal-green/80 sm:text-[11px] lg:text-xs"
        // Share Tech Mono has no box-drawing glyphs; a system mono keeps the lines aligned (nothing is downloaded)
        style={{ fontFamily: 'Menlo, Monaco, Consolas, "DejaVu Sans Mono", monospace', ...glow }}
      >
        {p.schematic}
      </pre>
    </div>
  )

const Details = ({ p, compact = false }: { p: Project; compact?: boolean }) => (
  <div key={p.id} className="detail-open">
    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-terminal-green/40">
      <Lamp accent={p.accent} />
      <span>{p.code}</span>
      <StatusChip status={p.status} />
      <span className="ml-auto tabular-nums text-terminal-green/30">{p.year}</span>
    </div>
    {!compact && (
      <h2 className="mt-1.5 font-mono text-2xl uppercase tracking-wide text-terminal-green lg:text-[28px]" style={glowStrong}>
        {p.name}
      </h2>
    )}
    <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-terminal-green/45">{p.role}</p>
    <p className="mt-2 max-w-2xl font-mono text-xs leading-relaxed text-terminal-green/80" style={glow}>
      {p.outcome}
    </p>
    <ul className="mt-2 space-y-0.5">
      {p.highlights.map((h) => (
        <li key={h} className="flex gap-2 font-mono text-xs leading-relaxed text-terminal-green/65">
          <span aria-hidden="true" className="text-terminal-green/35">
            ▸
          </span>
          <span>{h}</span>
        </li>
      ))}
    </ul>
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
      <div className="flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span
            key={s}
            className="border border-terminal-green/15 px-1.5 py-px font-mono text-[10px] text-terminal-green/45"
          >
            {s}
          </span>
        ))}
      </div>
      <LinkRow p={p} />
    </div>
  </div>
)

const ProjectRegister = () => {
  const [filter, setFilter] = useState<Filter>('ALL')
  const [sel, setSel] = useState(0)

  // grouped order is also the keyboard order
  const list = GROUPS.flatMap((g) => PROJECTS.filter((p) => p.group === g && matches(p, filter)))
  const idx = Math.min(sel, list.length - 1)
  const current = list[idx]

  /** Arrow keys move the cursor, like the real thing. */
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      setSel((s) => Math.max(0, Math.min(s + (e.key === 'ArrowDown' ? 1 : -1), list.length - 1)))
    }
  }

  return (
    <>
      {/* sub-tabs double as a real filter */}
      <div className="flex shrink-0 flex-wrap items-center gap-1 border-b border-terminal-green/20 px-2 py-1.5">
        {FILTERS.map((f) => {
          const n = PROJECTS.filter((p) => matches(p, f)).length
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

      <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[minmax(0,380px)_1fr]">
        {/* ── register ── */}
        <div className="flex min-h-0">
          <div className="relative w-4 shrink-0 border-r border-terminal-green/15">
            <div className="absolute inset-y-2 left-1/2 w-px -translate-x-1/2 bg-terminal-green/15" />
            <div
              className="absolute left-1/2 h-6 w-[3px] -translate-x-1/2 transition-all duration-300"
              style={{
                top: `${(idx / Math.max(list.length - 1, 1)) * 78 + 8}%`,
                background: current.accent,
                boxShadow: `0 0 8px ${current.accent}`,
              }}
            />
          </div>

          {/* key={filter} remounts the list so the ignition animation replays on refilter */}
          <div key={filter} className="min-h-0 flex-1 overflow-y-auto pb-2" onKeyDown={onKeyDown}>
            {list.map((item, i) => {
              const on = i === idx
              const groupStart = i === 0 || list[i - 1].group !== item.group
              return (
                <Fragment key={item.id}>
                  {groupStart && (
                    <p className="flex items-center gap-2 px-3 pb-1 pt-3 font-mono text-[9px] uppercase tracking-[0.3em] text-terminal-green/30">
                      {item.group}
                      <span className="h-px flex-1 bg-terminal-green/10" />
                    </p>
                  )}
                  <button
                    onMouseEnter={() => setSel(i)}
                    onFocus={() => setSel(i)}
                    onClick={() => setSel(i)}
                    aria-expanded={on}
                    className="row-ignite relative flex w-full items-start gap-2.5 border-l-2 py-2 pl-2.5 pr-3 text-left transition-colors focus-visible:translate-y-0 focus-visible:shadow-none focus-visible:outline-none"
                    style={{
                      animationDelay: `${i * 45}ms`,
                      borderColor: on ? item.accent : 'transparent',
                      background: on ? 'rgba(54,166,137,.07)' : undefined,
                    }}
                  >
                    <span className="mt-[3px] w-5 shrink-0 font-mono text-[10px] tabular-nums text-terminal-green/30">
                      {item.id}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <Lamp accent={item.accent} lit={on} />
                        <span
                          className={`truncate font-mono text-sm uppercase tracking-wide transition-colors md:text-[15px] ${
                            on ? 'text-terminal-green' : 'text-terminal-green/70'
                          }`}
                          style={on ? glowStrong : undefined}
                        >
                          {item.name}
                        </span>
                        <span className="ml-auto">
                          <StatusChip status={item.status} />
                        </span>
                      </span>
                      <span className={`mt-0.5 block truncate font-mono text-[11px] ${on ? 'text-terminal-green/65' : 'text-terminal-green/35'}`}>
                        {item.tagline}
                      </span>
                    </span>
                  </button>

                  {on && (
                    <div className="detail-open space-y-3 border-b border-terminal-green/15 px-3 pb-4 pt-2 md:hidden">
                      <div className="h-44">
                        <Media p={item} sizes="100vw" />
                      </div>
                      <Details p={item} compact />
                    </div>
                  )}
                </Fragment>
              )
            })}

            {/* archive lives at the bottom of the register, deliberately quiet */}
            <div className="mt-3 border-t border-terminal-green/15 px-3 pt-2">
              <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.3em] text-terminal-green/25">ARCHIVE</p>
              {ARCHIVE.map((a) => (
                <a
                  key={a.id}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline gap-2 py-1 font-mono text-[11px] text-terminal-green/40 transition-colors hover:text-terminal-green/75"
                >
                  <span className="uppercase">{a.name}</span>
                  <span className="text-[10px] text-terminal-green/25">{a.tagline}</span>
                  <span className="ml-auto text-[10px] tabular-nums text-terminal-green/25">{a.year}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── detail, desktop only ── */}
        <div className="hidden min-h-0 flex-col gap-3 border-l border-terminal-green/20 px-5 pb-4 pt-4 md:flex">
          <div className="min-h-0 flex-1">
            <Media p={current} sizes="60vw" />
          </div>
          <div className="shrink-0">
            <Details p={current} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectRegister
