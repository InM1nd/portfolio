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
    <span className="pointer-events-none absolute -left-px -top-px z-20 h-4 w-4 border-l-2 border-t-2 border-terminal-green" />
    <span className="pointer-events-none absolute -right-px -top-px z-20 h-4 w-4 border-r-2 border-t-2 border-terminal-green" />
    <span className="pointer-events-none absolute -bottom-px -left-px z-20 h-4 w-4 border-b-2 border-l-2 border-terminal-green" />
    <span className="pointer-events-none absolute -bottom-px -right-px z-20 h-4 w-4 border-b-2 border-r-2 border-terminal-green" />
  </>
)

const TabBar = () => {
  const pathname = usePathname()

  return (
    <nav className="flex shrink-0 items-stretch">
      {TABS.map((tab) => {
        const active = pathname?.startsWith(tab.href)
        return (
          <TransitionLink
            key={tab.href}
            href={tab.href}
            aria-current={active ? 'page' : undefined}
            className={`flex-1 border-b px-2 py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.2em] transition-colors md:text-xs ${
              active
                ? 'border-terminal-green text-terminal-green'
                : 'border-terminal-green/25 text-terminal-green/35 hover:text-terminal-green/70'
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

/**
 * Bottom readout. Stands in for the Pip-Boy HP/AP bar, but every value is real.
 * `meter` is the page-specific left slot (e.g. "02/06" on the register).
 */
const StatusBar = ({ meter }: { meter?: React.ReactNode }) => (
  <div className="flex shrink-0 items-center gap-4 border-t border-terminal-green/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em]">
    {meter}
    <div className="hidden flex-1 items-center gap-2 sm:flex">
      <span className="text-terminal-green/30">EXP</span>
      <span className="h-[6px] max-w-[180px] flex-1 border border-terminal-green/40">
        <span className="block h-full w-[80%] bg-terminal-green/55" />
      </span>
      <span className="text-terminal-green/45">SINCE 2021</span>
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

/**
 * The device. Page does not scroll — the panel inside does.
 * Below 500px of height (phone landscape) the frame lets go and the page scrolls normally.
 */
const PipBoyShell = ({
  children,
  meter,
}: {
  children: React.ReactNode
  meter?: React.ReactNode
}) => (
  <div className="h-[100dvh] w-full overflow-hidden bg-black p-3 md:p-5 [@media(max-height:500px)]:h-auto [@media(max-height:500px)]:min-h-screen [@media(max-height:500px)]:overflow-visible">
    {/* the world outside the device */}
    <div className="fixed inset-0" style={{ zIndex: 0, pointerEvents: 'none', opacity: 0.3 }}>
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
      />
    </div>

    {/* the screen — opaque, so the background never sits behind the text */}
    <div className="relative z-10 flex h-full flex-col border border-terminal-green/70 bg-[#020402]">
      <CornerTicks />
      <TabBar />
      <main id="main-content" className="flex min-h-0 flex-1 flex-col">
        {children}
      </main>
      <StatusBar meter={meter} />
    </div>
  </div>
)

export default PipBoyShell
