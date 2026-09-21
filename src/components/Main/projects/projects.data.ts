export type ProjectStatus = 'LIVE' | 'DEMO' | 'NDA' | 'PRIVATE' | 'FORK' | 'ARCHIVED'

export type ProjectGroup = 'COMMERCIAL' | 'PRODUCTS' | 'DEV TOOLS'

export type Project = {
  id: string
  code: string
  name: string
  group: ProjectGroup
  tagline: string
  year: string
  role: string
  /** One true outcome or constraint. No invented metrics. */
  outcome: string
  /** What it does, one fact per line. Sourced from the live product, README or commit history. */
  highlights: string[]
  stack: string[]
  status: ProjectStatus
  /** Phosphor tint for this project — taken from the product's own brand where it has one. */
  accent: string
  /** Real screenshot of the product (not the marketing page). */
  image?: string
  /** Terminal schematic, shown when there is no public screen to capture. */
  schematic?: string
  /** Brand mark shown with a schematic (not a product screenshot). */
  mark?: string
  links: { label: string; url: string }[]
}

export const PROJECTS: Project[] = [
  {
    id: '01',
    code: 'OBRIO_NAV',
    name: 'OBRIO',
    group: 'COMMERCIAL',
    tagline: 'Corporate organisational-structure dashboard',
    year: '2025',
    role: 'Product UX/UI, information architecture',
    outcome:
      'Designed and built an internal organisational-structure dashboard for OBRIO, helping 300+ employees navigate teams with a clear information hierarchy.',
    highlights: [
      'Company org structure, navigable by team',
      'Google sign-in, restricted to the company domain',
      'Information hierarchy aimed at fast discovery',
    ],
    stack: ['Next.js', 'TypeScript', 'Google SSO'],
    status: 'NDA',
    accent: '#D6DEE6',
    schematic: `        Google SSO
        domain only
             │
             ▼
      ┌──────┴──────┐
      │             │
 teams               people
      │             │
      └──────┬──────┘
             ▼
          search`,
    links: [{ label: 'SSO LOGIN', url: 'https://nebula-seven-omega.vercel.app/' }],
  },
  {
    id: '02',
    code: 'FITLOYALTY_OS',
    name: 'FITLOYALTY',
    group: 'PRODUCTS',
    tagline: 'White-label retention platform for fitness studios',
    year: '2026',
    role: 'Solo — product, design, build',
    outcome:
      'Built for independent DACH studios: turns attendance data into a daily retention briefing. Demo, all data simulated.',
    highlights: [
      'Today view: who needs a touch, MRR in the save queue, WhatsApp drafts',
      'Owner dashboard with Recharts — churn, cohorts, protected revenue',
      'Separate member app with streaks and rewards',
      'White-label, EN / DE; Churn-Check parses a CSV in the browser',
    ],
    stack: ['Next.js 16', 'TypeScript', 'Tailwind v4', 'Motion', 'Recharts', 'Zod', 'Vitest', 'EN/DE'],
    status: 'DEMO',
    accent: '#FF7A1A',
    image: '/projects/fitloyalty.jpg',
    links: [
      { label: 'OPEN', url: 'https://fit-loyality.vercel.app/overview' },
      { label: 'REPO', url: 'https://github.com/InM1nd/FitLoyality' },
    ],
  },
  {
    id: '03',
    code: 'TRIPWEAVE_PLAN',
    name: 'TRIPWEAVE',
    group: 'PRODUCTS',
    tagline: 'Collaborative travel planner',
    year: '2026',
    role: 'Solo — product, design, build',
    outcome:
      'Plans a trip as a group: shared itinerary, budget, documents and maps. AI suggestions and social-spot import sit on PostgreSQL via Prisma.',
    highlights: [
      'Shared trips with roles and voting on places',
      'Drag-and-drop timeline; map pins on OpenStreetMap',
      'Explore: AI place recommendations and social-post import',
      'Installable PWA with offline fallback',
    ],
    stack: [
      'Next.js 16',
      'PostgreSQL',
      'Prisma',
      'Supabase',
      'TanStack Query',
      'Leaflet',
      'dnd-kit',
      'Zod',
    ],
    status: 'LIVE',
    accent: '#F59A6A',
    image: '/projects/tripweave.jpg',
    links: [
      { label: 'OPEN', url: 'https://tripweave-six.vercel.app/' },
      { label: 'REPO', url: 'https://github.com/InM1nd/tripweave' },
    ],
  },
  {
    id: '04',
    code: 'APPSCANNER_PROP',
    name: 'APPSCANNER',
    group: 'PRODUCTS',
    tagline: 'Vienna rental decision tool',
    year: '2025',
    role: 'Solo — full stack, scraper, tooling',
    outcome:
      'Private Vienna rental tool: imports public listings and ranks them by an explainable all-in monthly cost and score.',
    highlights: [
      'Public-listing import through to explainable scoring and all-in monthly cost',
      'PostgreSQL / Prisma with a scraper worker, Dockerized services and tests',
      'Tracks listing changes and sends deduplicated Telegram alerts',
      'Unknown facts never earn points — completeness is part of the score',
    ],
    stack: ['Next.js', 'PostgreSQL', 'Prisma', 'Docker', 'Vitest', 'Playwright', 'Telegram'],
    status: 'PRIVATE',
    accent: '#ED2939',
    schematic: `      public listings
             │
          scraper
             ▼
     ┌── PostgreSQL ──┐
     │  provenance    │
     │  change log    │
     └────────┬───────┘
             ▼
    all-in cost · score
     completeness gate
             │
             ▼
     Telegram · deduped`,
    links: [{ label: 'REPO', url: 'https://github.com/InM1nd/AppScanner' }],
  },
  {
    id: '05',
    code: 'CODEBASE_MEM',
    name: 'CODEBASE-MEMORY-PLUS',
    group: 'DEV TOOLS',
    tagline: 'Local dashboard for MCP memory graphs',
    year: '2026',
    role: 'Solo — author and maintainer',
    outcome:
      'Independent developer-tooling dashboard for MCP memory graphs, package architecture, agent skills, plugins and project management. Deployed on Vercel.',
    highlights: [
      'Packages, symbols and architecture as a filterable graph',
      'MCP servers, skills and plugins across Claude Code, Cursor and Codex in one place',
      'Serena sessions and project management alongside',
    ],
    stack: ['Next.js', 'TypeScript', 'MCP', 'Vercel'],
    status: 'LIVE',
    accent: '#2DD6B8',
    image: '/projects/codebase-memory-plus.jpg',
    links: [
      { label: 'OPEN', url: 'https://codebase-memory-plus.vercel.app/' },
      { label: 'REPO', url: 'https://github.com/InM1nd/codebase-memory-plus' },
    ],
  },
  {
    id: '06',
    code: 'T3CODE_FORK',
    name: 'T3 CODE FORK',
    group: 'DEV TOOLS',
    tagline: 'Control surface for AI coding agents',
    year: '2026',
    role: 'Fork — own features on top of pingdotgg/t3code',
    outcome: 'A customised fork that turns an agent chat into a project workspace with a task board.',
    highlights: [
      'jcode provider with per-model routing',
      'Project Board with task lifecycle, exposed to agents over a stdio MCP bridge',
      'Work modes, project-grouped sidebar, file attachments, isolated delegations',
    ],
    stack: ['TypeScript', 'React', 'Effect', 'Electron', 'MCP'],
    status: 'FORK',
    accent: '#B388FF',
    mark: '/projects/tandem-mark.png',
    schematic: `      pingdotgg/t3code
             │
           fork
             ▼
        t3code-jcode
   ┌────────────────────┐
   │  jcode routing     │
   │  Board ◀──▶ MCP    │
   │  modes · chats     │
   │  files · delegates │
   └────────────────────┘`,
    links: [{ label: 'REPO', url: 'https://github.com/InM1nd/t3code-jcode' }],
  },
  {
    id: '07',
    code: 'CYCLOP_NOTCH',
    name: 'CYCLOP ENHANCED',
    group: 'DEV TOOLS',
    tagline: 'MacBook notch as a working tool',
    year: '2026',
    role: 'Fork — own features on top of akalikbergenov/cyclop',
    outcome: 'Native macOS notch utility; the fork adds developer-facing panels.',
    highlights: [
      'Usage tab: live Claude, Codex and Cursor limits',
      'Memory tab: pressure like Activity Monitor, cache cleanup',
      'Pomodoro with a coloured notch rim, keep-awake with the lid closed',
    ],
    stack: ['SwiftUI', 'AppKit', 'macOS'],
    status: 'FORK',
    accent: '#FFD60A',
    schematic: `╭──────────────────────────╮
│      ╭─── notch ───╮     │
│      │  ●  CYCLOP  │     │
│      ╰──────┬──────╯     │
╰─────────────┼────────────╯
USAGE      MEMORY   POMODORO
claude     pressure      rim
codex      cache       awake
cursor     cleanup       lid`,
    links: [{ label: 'REPO', url: 'https://github.com/InM1nd/cyclop_enchanced' }],
  },
]

export const GROUPS: ProjectGroup[] = ['COMMERCIAL', 'PRODUCTS', 'DEV TOOLS']

export const ARCHIVE = [
  {
    id: '08',
    code: 'FILMOTEKA_LIB',
    name: 'FILMOTEKA',
    tagline: 'Film library & tracker',
    year: '2023',
    stack: ['JavaScript', 'HTML/CSS'],
    url: 'https://okolobaha-me.github.io/quentin-filmotino/#en',
  },
]
