'use client'

import PageTransitionWrapper from '@/components/PageTransitionWrapper'

export default function ClientPageTransition({ children }: { children: React.ReactNode }) {
  return <PageTransitionWrapper>{children}</PageTransitionWrapper>
}
