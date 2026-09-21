import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch about frontend and product engineering roles in Vienna or remote.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — Oleksandr Zabolotnyi',
    description: 'Get in touch about frontend and product engineering roles in Vienna or remote.',
    images: ['/og.png'],
    url: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
