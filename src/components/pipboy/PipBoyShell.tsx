'use client'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import TransitionLink from '@/components/TransitionLink'

const FaultyTerminal = dynamic(() => import('@/components/FaultyTerminal'), { ssr: false })

/** Phosphor glow — what makes a CRT read as a CRT. */
export const glow = { textShadow: '0 0 6px rgba(54,166,137,0.45)' }
export const glowStrong = { textShadow: '0 0 10px rgba(54,166,137,0.7)' }

const TABS = [
  { href: '/projects', label: 'WORK' },
  { href: '/about', label: 'PROFILE' },
  { href: '/applications', label: 'LAB' },
  { href: '/contact', label: 'CONTACT' },
]

const CornerTicks = () => (
  <>
    <span className="pointer-events-none absolute -left-px -top-px z-20 h-4 w-4 rounded-tl-[18px] border-l-2 border-t-2 border-terminal-green" />
    <span className="pointer-events-none absolute -right-px -top-px z-20 h-4 w-4 rounded-tr-[18px] border-r-2 border-t-2 border-terminal-green" />
    <span className="pointer-events-none absolute -bottom-px -left-px z-20 h-4 w-4 rounded-bl-[18px] border-b-2 border-l-2 border-terminal-green" />
    <span className="pointer-events-none absolute -bottom-px -right-px z-20 h-4 w-4 rounded-br-[18px] border-b-2 border-r-2 border-terminal-green" />
  </>
)

const TabBar = () => {
  const pathname = usePathname()

  return (
    <nav className="pipboy-part flex shrink-0 items-stretch">
      {TABS.map((tab) => {
        const active = pathname?.startsWith(tab.href)
        return (
          <TransitionLink
            key={tab.href}
            href={tab.href}
            aria-current={active ? 'page' : undefined}
            className={`flex-1 border-b px-2 py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.2em] transition-colors md:text-xs ${
              active
                ? 'border-terminal-green text-terminal-text'
                : 'border-terminal-green/25 text-terminal-text/60 hover:text-terminal-text/80'
            }`}
            style={active ? glowStrong : undefined}
          >
            {tab.label}
          </TransitionLink>
        )
      })}
    </nav>
  )
}

/** Page-specific left slot of the status bar. */
const METERS: Record<string, string> = { '/': 'HOME / IDENTITY' }

/** Bottom readout. Stands in for the Pip-Boy HP/AP bar, but every value is real. */
const StatusBar = () => {
  const meter = METERS[usePathname() ?? '']
  return (
    <div className="pipboy-part flex shrink-0 items-center gap-4 border-t border-terminal-green/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em]">
      {meter && <span className="text-terminal-text/70">{meter}</span>}
      <div className="hidden flex-1 items-center gap-2 sm:flex">
        <span className="text-terminal-text/60">EXP</span>
        <span className="h-[6px] max-w-[180px] flex-1 border border-terminal-green/40">
          <span className="block h-full w-[80%] bg-terminal-green/55" />
        </span>
        <span className="text-terminal-text/70">SINCE 2021</span>
      </div>
      <a
        href="mailto:iamzabolotnyi@gmail.com"
        className="ml-auto flex items-center gap-1.5 text-terminal-online transition-opacity hover:opacity-80"
        style={{ textShadow: '0 0 6px rgba(74,246,38,.5)' }}
      >
        <span className="animate-pulse">●</span> OPEN TO WORK
      </a>
    </div>
  )
}

/**
 * The device. Lives in the root layout so the frame, tabs and WebGL world persist across routes;
 * only <main> swaps (and plays the CRT off/on on navigation). Page does not scroll — the panel inside does.
 * Below 500px of height (phone landscape) the frame lets go and the page scrolls normally.
 */
const PipBoyShell = ({ children }: { children: React.ReactNode }) => (
  <div className="h-[100dvh] w-full overflow-hidden bg-black p-3 md:p-5 [@media(max-height:500px)]:h-auto [@media(max-height:500px)]:min-h-screen [@media(max-height:500px)]:overflow-visible">
    {/* the world outside the device */}
    <div className="pipboy-world fixed inset-0" style={{ zIndex: 0, pointerEvents: 'none', opacity: 0.3 }}>
      <FaultyTerminal
        scale={1.5}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={0.5}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0.1}
        tint="#36A689"
        mouseReact={false}
        mouseStrength={0.5}
        pageLoadAnimation={false}
        brightness={0.6}
        // decoration at 30% opacity: 1x is indistinguishable and quarters the shader cost on retina
        dpr={1}
      />
    </div>

    {/* the screen — tinted glass over a blurred background, so the world shows through without competing with the text */}
    <div className="pipboy-screen crt-screen relative z-10 flex h-full flex-col border border-terminal-green/70">
      <span aria-hidden="true" className="crt-glass" />
      <CornerTicks />
      <TabBar />
      <main id="main-content" className="pipboy-part relative flex min-h-0 flex-1 flex-col">
        {children}
      </main>
      <StatusBar />
    </div>
  </div>
)

export default PipBoyShell
