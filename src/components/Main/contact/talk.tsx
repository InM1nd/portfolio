'use client'

import React, { useRef, useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { glow, glowStrong } from '@/components/pipboy/PipBoyShell'

const CHANNELS = [
  { label: 'EMAIL', handle: 'iamzabolotnyi@gmail.com', url: 'mailto:iamzabolotnyi@gmail.com' },
  { label: 'GITHUB', handle: 'github.com/InM1nd', url: 'https://github.com/InM1nd' },
  {
    label: 'LINKEDIN',
    handle: 'in/oleksandr-zabolotnyi1',
    url: 'https://www.linkedin.com/in/oleksandr-zabolotnyi1/',
  },
  { label: 'TELEGRAM', handle: '@InM1nd', url: 'https://t.me/InM1nd' },
]

const fieldClass =
  'w-full rounded-none border border-terminal-green/30 bg-terminal-green/[0.04] px-3 py-2 font-mono text-sm text-terminal-green placeholder:text-terminal-green/20 focus:border-terminal-green/70 focus:bg-terminal-green/10 focus:outline-none'

const Talk = () => {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'READY' | 'SENDING' | 'SENT' | 'ERROR'>('READY')

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return
    setStatus('SENDING')

    emailjs
      .sendForm('service_akm93ow', 'template_0d6shyb', form.current, 'zbsLT_FXTpYzv9OGr')
      .then(
        () => {
          setStatus('SENT')
          form.current?.reset()
          setTimeout(() => setStatus('READY'), 3000)
        },
        () => {
          setStatus('ERROR')
          setTimeout(() => setStatus('READY'), 3000)
        }
      )
  }

  return (
    <div className="min-h-0 flex-1 overflow-y-auto">
      <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-[280px_1fr] md:p-5">
        {/* channels */}
        <aside className="flex flex-col gap-4">
          <div>
            <h1
              className="font-mono text-2xl uppercase tracking-wide text-terminal-green"
              style={glowStrong}
            >
              CONTACT
            </h1>
            <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-terminal-green/60" style={glow}>
              Open to frontend / product engineering roles. Also available for product work and
              technical consulting.
            </p>
          </div>

          <div>
            <h2 className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-terminal-green/30">
              CHANNELS
            </h2>
            <ul className="space-y-1">
              {CHANNELS.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.url}
                    {...(c.url.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="flex items-baseline gap-2 py-0.5 font-mono transition-colors hover:text-terminal-green"
                  >
                    <span className="w-16 shrink-0 text-[9px] uppercase tracking-wider text-terminal-green/30">
                      {c.label}
                    </span>
                    <span className="min-w-0 break-all text-[11px] text-terminal-green/70">
                      {c.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-terminal-green/30">
              DETAILS
            </h2>
            <p className="font-mono text-[11px] text-terminal-green/60">Based in Vienna, Austria</p>
            <p className="font-mono text-[11px] text-terminal-green/60">English fluent · German A2</p>
          </div>
        </aside>

        {/* transmission */}
        <div className="border-l border-terminal-green/20 md:pl-5">
          <h2 className="mb-3 font-mono text-[9px] uppercase tracking-[0.25em] text-terminal-green/30">
            ESTABLISH CONNECTION
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-terminal-green/40">
                  SENDER_NAME
                </span>
                <input type="text" name="user_name" required placeholder="ENTER NAME" className={fieldClass} />
              </label>
              <label className="block">
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-terminal-green/40">
                  SENDER_EMAIL
                </span>
                <input type="email" name="user_email" required placeholder="ENTER EMAIL" className={fieldClass} />
              </label>
            </div>

            <label className="block">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-terminal-green/40">
                MESSAGE
              </span>
              <textarea
                name="message"
                required
                placeholder="TYPE MESSAGE HERE..."
                className={`${fieldClass} min-h-[150px] resize-none`}
              />
            </label>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={status === 'SENDING'}
                className="border border-terminal-green/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-terminal-green transition-colors hover:bg-terminal-green hover:text-black disabled:opacity-40"
                style={glow}
              >
                {status === 'SENDING' ? 'TRANSMITTING…' : 'TRANSMIT ►'}
              </button>

              <span
                className={`font-mono text-[10px] uppercase tracking-wider ${
                  status === 'SENT'
                    ? 'text-terminal-online'
                    : status === 'ERROR'
                      ? 'text-terminal-danger'
                      : 'text-terminal-green/35'
                }`}
                role="status"
              >
                {status === 'READY' && 'READY_TO_SEND'}
                {status === 'SENDING' && 'UPLINK_ACTIVE…'}
                {status === 'SENT' && '● MESSAGE_RECEIVED'}
                {status === 'ERROR' && '● TRANSMISSION_FAILED — use email above'}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Talk
