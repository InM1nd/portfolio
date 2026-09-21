export type ProjectStatus = 'LIVE' | 'DEMO' | 'NDA' | 'PRIVATE' | 'OSS' | 'ARCHIVED'

export type Project = {
  id: string
  code: string
  name: string
  tagline: string
  year: string
  role: string
  /** One true outcome or constraint. No invented metrics. */
  outcome: string
  stack: string[]
  status: ProjectStatus
  image?: string
  links: { label: string; url: string }[]
}

export const COMMERCIAL: Project[] = [
  {
    id: '01',
    code: 'OBRIO_NAV',
    name: 'OBRIO',
    tagline: 'Internal team navigation dashboard',
    year: '2025',
    role: 'Product UX/UI, information architecture',
    outcome: 'Helps 300+ employees navigate teams and find information fast.',
    stack: ['Next.js', 'TypeScript', 'Google SSO'],
    status: 'NDA',
    links: [],
  },
]

export const PRODUCTS: Project[] = [
  {
    id: '02',
    code: 'FITLOYALTY_OS',
    name: 'FITLOYALTY',
    tagline: 'Retention OS for independent fitness studios',
    year: '2026',
    role: 'Solo — product, design, build',
    outcome: 'Turns attendance data into a daily retention briefing. Demo, all data simulated.',
    stack: ['Next.js 16', 'Tailwind v4', 'Motion', 'EN/DE'],
    status: 'DEMO',
    image: '/projects/fitloyalty.jpg',
    links: [{ label: 'OPEN', url: 'https://fit-loyality.vercel.app/' }],
  },
  {
    id: '03',
    code: 'TRIPWEAVE_PLAN',
    name: 'TRIPWEAVE',
    tagline: 'Collaborative travel planner',
    year: '2026',
    role: 'Solo — product, design, build',
    outcome: 'Real-time trip planning for a group: shared itinerary, places, live sync.',
    stack: ['Next.js', 'TypeScript', 'Real-time'],
    status: 'LIVE',
    image: '/projects/tripweave.jpg',
    links: [{ label: 'OPEN', url: 'https://tripweave-six.vercel.app/' }],
  },
  {
    id: '04',
    code: 'APPSCANNER_PROP',
    name: 'APPSCANNER',
    tagline: 'Vienna proptech decision tool',
    year: '2025',
    role: 'Solo — backend, scraper, tooling',
    outcome: 'Private tool: imports public rental listings, scores them and computes all-in cost.',
    stack: ['PostgreSQL', 'Prisma', 'Docker', 'Telegram'],
    status: 'PRIVATE',
    links: [{ label: 'REPO', url: 'https://github.com/InM1nd/AppScanner' }],
  },
]

export const OPEN_SOURCE: Project[] = [
  {
    id: '05',
    code: 'CODEBASE_MEM',
    name: 'CODEBASE-MEMORY-PLUS',
    tagline: 'Local dashboard for an MCP memory graph',
    year: '2026',
    role: 'Solo — author and maintainer',
    outcome: 'Turns a codebase into a visual graph of packages and symbols. MIT, local-first.',
    stack: ['Next.js', 'MCP', 'AI tooling', 'Vercel'],
    status: 'OSS',
    image: '/projects/codebase-memory-plus.jpg',
    links: [
      { label: 'OPEN', url: 'https://codebase-memory-plus.vercel.app/' },
      { label: 'REPO', url: 'https://github.com/InM1nd/codebase-memory-plus' },
    ],
  },
  {
    id: '06',
    code: 'CYCLOP_NOTCH',
    name: 'CYCLOP',
    tagline: 'MacBook notch as a working tool',
    year: '2026',
    role: 'Solo — native macOS app',
    outcome: 'Player, file shelf, clipboard, calendar and offline translation. Zero dependencies.',
    stack: ['SwiftUI', 'macOS'],
    status: 'OSS',
    links: [{ label: 'REPO', url: 'https://github.com/InM1nd/cyclop_enchanced' }],
  },
]

export const ARCHIVE = [
  {
    id: '07',
    code: 'FILMOTEKA_LIB',
    name: 'FILMOTEKA',
    tagline: 'Film library & tracker',
    year: '2023',
    stack: ['JavaScript', 'HTML/CSS'],
    url: 'https://okolobaha-me.github.io/quentin-filmotino/#en',
  },
]

/** Register order: commercial first, then solo builds, then open source. */
export const ALL_PROJECTS: Project[] = [...COMMERCIAL, ...PRODUCTS, ...OPEN_SOURCE]
