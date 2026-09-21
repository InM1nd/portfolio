'use client'

import { useRef, useState } from 'react'
import { glow, glowStrong } from '@/components/pipboy/PipBoyShell'

type ChannelId = 'EMAIL' | 'LINKEDIN' | 'GITHUB' | 'TELEGRAM'
type CopyState = 'IDLE' | 'COPIED' | 'FAILED'

type Channel = {
  id: ChannelId
  label: string
  code: string
  handle: string
  url: string
  copyValue: string
  action: string
  note: string
  external: boolean
}

const CHANNELS: Channel[] = [
  {
    id: 'EMAIL',
    label: 'EMAIL',
    code: 'MAIL_CHANNEL',
    handle: 'iamzabolotnyi@gmail.com',
    url: 'mailto:iamzabolotnyi@gmail.com',
    copyValue: 'iamzabolotnyi@gmail.com',
    action: 'OPEN MAIL',
    note: 'Direct. Roles, intros, anything that should land in a mailbox.',
    external: false,
  },
  {
    id: 'LINKEDIN',
    label: 'LINKEDIN',
    code: 'LINKEDIN_CHANNEL',
    handle: 'in/oleksandr-zabolotnyi1',
    url: 'https://www.linkedin.com/in/oleksandr-zabolotnyi1/',
    copyValue: 'https://www.linkedin.com/in/oleksandr-zabolotnyi1/',
    action: 'OPEN PROFILE',
    note: 'Hiring managers and recruiters.',
    external: true,
  },
  {
    id: 'GITHUB',
    label: 'GITHUB',
    code: 'GITHUB_CHANNEL',
    handle: 'github.com/InM1nd',
    url: 'https://github.com/InM1nd',
    copyValue: 'https://github.com/InM1nd',
    action: 'OPEN PROFILE',
    note: 'Public work and commits.',
    external: true,
  },
  {
    id: 'TELEGRAM',
    label: 'TELEGRAM',
    code: 'TELEGRAM_CHANNEL',
    handle: '@InM1nd',
    url: 'https://t.me/InM1nd',
    copyValue: 'https://t.me/InM1nd',
    action: 'OPEN CHAT',
    note: 'Quick messages. Not the hiring path.',
    external: true,
  },
]

const actionClass =
  'terminal-button border border-terminal-green/45 bg-transparent px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-terminal-green hover:bg-terminal-green hover:text-black'
const actionFilledClass =
  'terminal-button border border-terminal-green bg-terminal-green px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-black hover:bg-terminal-green/80'

const Talk = () => {
  const [active, setActive] = useState<ChannelId>('EMAIL')
  const [copyState, setCopyState] = useState<CopyState>('IDLE')
  const copyTimer = useRef<number>(0)
  const current = CHANNELS.find((c) => c.id === active)!

  const select = (id: ChannelId) => {
    window.clearTimeout(copyTimer.current)
    setActive(id)
    setCopyState('IDLE')
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(current.copyValue)
      setCopyState('COPIED')
      window.clearTimeout(copyTimer.current)
      copyTimer.current = window.setTimeout(() => setCopyState('IDLE'), 2000)
    } catch {
      setCopyState('FAILED')
    }
  }

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 content-start md:grid-cols-[minmax(0,300px)_1fr] md:content-stretch">
      <div className="min-h-0 overflow-y-auto border-b border-terminal-green/20 md:border-b-0">
        <div className="px-3 py-3">
          <h1 className="font-mono text-xl uppercase tracking-wide text-terminal-green" style={glowStrong}>
            CONTACT
          </h1>
          <p className="mt-1 font-mono text-[13px] leading-relaxed text-terminal-text/80" style={glow}>
            Open to frontend / product engineering roles. Also available for product work and
            technical consulting.
          </p>
          <p className="mt-2 font-mono text-[12px] text-terminal-text/70">
            Vienna, AT · English fluent · German A2
          </p>
        </div>

        {CHANNELS.map((c) => {
          const on = c.id === active
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => select(c.id)}
              aria-pressed={on}
              className={`flex w-full items-center gap-2 px-2 py-2 text-left transition-colors ${
                on ? 'bg-terminal-green text-black' : 'text-terminal-text/80 hover:bg-terminal-green/10'
              }`}
            >
              <span className={`w-3 font-mono text-[11px] ${on ? 'text-black' : 'text-transparent'}`}>
                ►
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-sm uppercase tracking-wide" style={on ? undefined : glow}>
                  {c.label}
                </span>
                <span
                  className={`block break-all font-mono text-[12px] ${
                    on ? 'text-black/80' : 'text-terminal-text/60'
                  }`}
                >
                  {c.handle}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      <div className="flex min-h-0 flex-col border-l-0 border-terminal-green/20 md:border-l">
        <div className="flex shrink-0 items-baseline justify-between border-b border-terminal-green/20 px-3 py-1.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-terminal-text/70">
            {current.code}
          </span>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-3 md:p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terminal-text/60">
            {current.label}
          </p>
          <p
            className="mt-2 select-all break-all font-mono text-xl tracking-wide text-terminal-text md:text-2xl"
            style={glowStrong}
          >
            {current.handle}
          </p>
          <p className="mt-3 max-w-lg font-mono text-[13px] leading-relaxed text-terminal-text/80" style={glow}>
            {current.note}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {current.id === 'EMAIL' ? (
              <>
                <button type="button" onClick={copy} className={actionFilledClass}>
                  {copyState === 'COPIED' ? 'COPIED' : 'COPY ADDRESS'}
                </button>
                <a href={current.url} className={actionClass}>
                  {current.action}
                </a>
              </>
            ) : (
              <>
                <a
                  href={current.url}
                  className={actionFilledClass}
                  {...(current.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {current.action} ↗
                </a>
                <button type="button" onClick={copy} className={actionClass}>
                  {copyState === 'COPIED' ? 'COPIED' : 'COPY LINK'}
                </button>
              </>
            )}
          </div>

          <p
            className={`font-mono text-[11px] uppercase tracking-wider ${
              copyState === 'IDLE' ? 'sr-only' : 'mt-3'
            } ${copyState === 'FAILED' ? 'text-terminal-danger' : 'text-terminal-online'}`}
            role="status"
          >
            {copyState === 'IDLE' && 'Ready'}
            {copyState === 'COPIED' && '● COPIED TO CLIPBOARD'}
            {copyState === 'FAILED' && '● COPY FAILED — select the handle above'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Talk
