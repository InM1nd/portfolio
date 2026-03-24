'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/Header/header_render'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer/footer'), { ssr: false })
const Applications = dynamic(() => import('@/components/Main/applications/applications'), { ssr: false })
const Scanline = dynamic(() => import('@/components/Scanline'), { ssr: false })
const CornerDecorations = dynamic(() => import('@/components/CornerDecorations'), { ssr: false })
const FaultyTerminal = dynamic(() => import('@/components/FaultyTerminal'), { ssr: false })

export default function ApplicationsPage() {
  return (
    <main id="main-content" className="relative z-10 min-h-screen bg-black">
      <div className="fixed inset-0" style={{ zIndex: 1, pointerEvents: 'none', opacity: 0.4 }}>
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
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={0.6}
        />
      </div>
      <Scanline />
      <CornerDecorations />
      <Header />
      <Suspense fallback={
        <div className="relative z-50 text-terminal-green font-mono p-8 text-center mt-28">
          <div className="text-2xl">LOADING...</div>
        </div>
      }>
        <Applications />
      </Suspense>
      <Footer />
    </main>
  )
}

