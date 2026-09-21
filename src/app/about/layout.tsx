import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Frontend / product engineer in Vienna since 2021. Stack, experience and how I work.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About — Oleksandr Zabolotnyi',
    description: 'Frontend / product engineer in Vienna since 2021. Stack, experience and how I work.',
    images: ['/og.png'],
    url: '/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
