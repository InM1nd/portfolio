'use client'

import dynamic from 'next/dynamic'

const PageTransitionWrapper = dynamic(
  () => import('@/components/PageTransitionWrapper'),
  { ssr: false }
)

export default function ClientPageTransition({ children }: { children: React.ReactNode }) {
  return <PageTransitionWrapper>{children}</PageTransitionWrapper>
}

