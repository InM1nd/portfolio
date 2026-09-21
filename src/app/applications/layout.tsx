import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Browser experiments and small interactive utilities — the sandbox, not client work.',
  alternates: { canonical: '/applications' },
  openGraph: {
    title: 'Lab — Oleksandr Zabolotnyi',
    description: 'Browser experiments and small interactive utilities — the sandbox, not client work.',
    images: ['/og.png'],
    url: '/applications',
  },
}

export default function ApplicationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
