import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected work — production sites, products and developer tooling.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects — Oleksandr Zabolotnyi',
    description: 'Selected work — production sites, products and developer tooling.',
    images: ['/og.png'],
    url: '/projects',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
