import TransitionLink from '@/components/TransitionLink'
import { glow, glowStrong } from '@/components/pipboy/PipBoyShell'

export default function NotFound() {
  return (
    <div className="flex min-h-0 flex-1 items-center justify-center p-4">
      <div className="max-w-lg space-y-5 text-center">
        <h1
          className="font-mono text-6xl uppercase tracking-[0.1em] text-terminal-green md:text-7xl"
          style={glowStrong}
        >
          404
        </h1>
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-terminal-text/70">
          PAGE NOT FOUND
        </p>
        <p className="font-mono text-[13px] leading-relaxed text-terminal-text/80" style={glow}>
          The requested resource does not exist in the system.
        </p>
        <TransitionLink
          href="/"
          className="terminal-button inline-flex border border-terminal-green bg-terminal-green px-4 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-black transition-colors hover:bg-terminal-green/80"
        >
          [◂] RETURN HOME
        </TransitionLink>
      </div>
    </div>
  )
}
