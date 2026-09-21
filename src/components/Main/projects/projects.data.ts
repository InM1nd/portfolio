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
    outcome: 'Helps 300+ employees navigate teams and find information fast.',
    highlights: [
      'Company org structure, navigable by team',
      'Google sign-in, restricted to the company domain',
    ],
    stack: ['Next.js', 'TypeScript', 'Google SSO'],
    status: 'NDA',
    accent: '#D6DEE6',
    schematic: `  Google SSO ── company domain only
       │
       ▼
  ┌─ ORG STRUCTURE ─────────────┐
  │  teams ──── people          │
  └─────────────┬───────────────┘
                ▼
          search · navigate`,
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
      'Separate member app with streaks and rewards',
      'White-label, EN / DE',
    ],
    stack: ['Next.js 16', 'Tailwind v4', 'Motion', 'EN/DE'],
    status: 'DEMO',
    accent: '#FF7A1A',
    image: '/projects/fitloyalty.jpg',
    links: [{ label: 'OPEN', url: 'https://fit-loyality.vercel.app/overview' }],
  },
  {
    id: '03',
    code: 'TRIPWEAVE_PLAN',
    name: 'TRIPWEAVE',
    group: 'PRODUCTS',
    tagline: 'Collaborative travel planner',
    year: '2026',
    role: 'Solo — product, design, build',
    outcome: 'Plans a trip as a group: shared itinerary, places and live sync.',
    highlights: [
      'Shared trips with group voting on places',
      'Explore feed with AI place recommendations',
      'Maps and notifications',
    ],
    stack: ['Next.js', 'TypeScript', 'Real-time'],
    status: 'LIVE',
    accent: '#F59A6A',
    image: '/projects/tripweave.jpg',
    links: [{ label: 'OPEN', url: 'https://tripweave-six.vercel.app/' }],
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
      'Private single-user tool: imports public listings and ranks them by an explainable all-in monthly cost and score.',
    highlights: [
      'Scraper worker imports listings and keeps their provenance',
      'Explainable score with data completeness — unknown facts never earn points',
      'Tracks listing changes, sends deduplicated Telegram alerts',
    ],
    stack: ['Next.js', 'PostgreSQL', 'Prisma', 'Docker', 'Vitest', 'Playwright'],
    status: 'PRIVATE',
    accent: '#ED2939',
    schematic: `  public listings
       │  scraper worker
       ▼
  ┌─ PostgreSQL · Prisma ───────┐
  │  provenance · change log    │
  └─────────────┬───────────────┘
                ▼
     all-in cost · score · completeness
                │
                ▼
       Telegram ── deduplicated alerts`,
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
    outcome: 'One local workspace for a codebase graph and the AI agents working on it.',
    highlights: [
      'Packages, symbols and architecture as a filterable graph',
      'MCP servers, skills and plugins across Claude Code, Cursor and Codex in one place',
      'Serena sessions and project management alongside',
    ],
    stack: ['Next.js', 'TypeScript', 'MCP'],
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
    schematic: `  pingdotgg/t3code ──fork──▶ t3code-jcode
                              │
     ┌────────────────────────┴──────┐
     │ + jcode provider · routing    │
     │ + Project Board ◀─▶ MCP stdio │◀─▶ agents
     │ + work modes · grouped chats  │
     │ + attachments · delegations   │
     └───────────────────────────────┘`,
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
    schematic: `        ╭──────── notch ────────╮
        │  ●  CYCLOP            │
        ╰───────────┬───────────╯
      ┌─────────────┼──────────────┐
    USAGE        MEMORY        POMODORO
  claude/codex  pressure ·    rim colour ·
  cursor limits cache clean   keep-awake`,
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
