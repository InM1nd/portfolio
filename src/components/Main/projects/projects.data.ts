export type ProjectStatus = 'LIVE' | 'DEMO' | 'NDA' | 'PRIVATE' | 'FORK' | 'ARCHIVED'

export type ProjectGroup = 'CLIENT WORK' | 'PRODUCTS' | 'DEV TOOLS'

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
    group: 'CLIENT WORK',
    tagline: 'Corporate organisational-structure dashboard',
    year: '2025',
    role: 'Product UX/UI, information architecture',
    outcome:
      'Internal org-structure dashboard used by 300+ employees. Designed and built with a clear information hierarchy for navigating teams.',
    highlights: [
      'Company org structure, navigable by team',
      'Google sign-in, restricted to the company domain',
      'Information hierarchy aimed at fast discovery',
    ],
    stack: ['Next.js', 'TypeScript', 'Google SSO'],
    status: 'NDA',
    accent: '#D6DEE6',
    mark: '/projects/obrio-mark.png',
    schematic: `┌─────────────┐     ┌──▶ teams  ──┐
│ Google SSO  │─────┤             ├──▶ search
│ domain only │     └──▶ people ──┘
└─────────────┘`,
    links: [],
  },
  {
    id: '02',
    code: 'SKELYA_CAREERS',
    name: 'SKELYA',
    group: 'CLIENT WORK',
    tagline: 'Career consultation platform',
    year: '2024',
    role: 'Freelance — design and frontend',
    outcome:
      'Next.js site for a career-consultation service, with SEO setup, WayForPay payments and Telegram-based client-consultant matching.',
    highlights: [
      'Responsive Next.js site, design through to production',
      'SEO setup and WayForPay payment integration',
      'Telegram flow for matching clients with consultants',
    ],
    stack: ['Next.js', 'SEO', 'WayForPay', 'Telegram'],
    status: 'ARCHIVED',
    accent: '#7C5CFF',
    image: '/projects/skelya.jpg',
    links: [],
  },
  {
    id: '03',
    code: 'VERUS_PROPERTY',
    name: 'VERUS PROPERTY',
    group: 'CLIENT WORK',
    tagline: 'Dubai real estate landing',
    year: '2024',
    role: 'Freelance — design and frontend',
    outcome: 'Responsive real-estate landing experience for a Dubai property brand.',
    highlights: [
      'Responsive WordPress site from design to production',
      'Email capture, DNS and hosting setup',
    ],
    stack: ['WordPress'],
    status: 'LIVE',
    accent: '#1E4FD8',
    image: '/projects/verus.jpg',
    links: [{ label: 'OPEN', url: 'https://verusproperty.com/' }],
  },
  {
    id: '04',
    code: 'SKEPTIC_FIT',
    name: 'SKEPTIC',
    group: 'CLIENT WORK',
    tagline: 'Fitness platform landing',
    year: '2024',
    role: 'Freelance — design and frontend',
    outcome: 'Responsive fitness-brand landing page with a focused path to enquiry.',
    highlights: [
      'Responsive Next.js site from design to production',
      'Email capture, DNS and hosting setup',
    ],
    stack: ['Next.js'],
    status: 'ARCHIVED',
    accent: '#1A1A1A',
    image: '/projects/skeptic.jpg',
    links: [],
  },
  {
    id: '05',
    code: 'QUIZZLEY_AI',
    name: 'QUIZZLEY',
    group: 'PRODUCTS',
    tagline: 'AI quiz platform',
    year: '2025',
    role: 'Solo — product, design, build',
    outcome: 'AI quiz platform used by 300+ users. The app is currently offline; source is on GitHub.',
    highlights: [
      'Quizzes generated with LangChain / OpenAI',
      'Auth via NextAuth; Postgres via Drizzle, hosted on Supabase',
      'Stripe for payments',
    ],
    stack: ['Next.js', 'TypeScript', 'NextAuth', 'LangChain', 'Drizzle', 'PostgreSQL', 'Supabase', 'Stripe'],
    status: 'ARCHIVED',
    accent: '#EA580C',
    image: '/projects/quizzley.jpg',
    links: [{ label: 'REPO', url: 'https://github.com/InM1nd/quizzley' }],
  },
  {
    id: '06',
    code: 'APPSCANNER_PROP',
    name: 'APPSCANNER',
    group: 'PRODUCTS',
    tagline: 'Vienna rental decision tool',
    year: '2025',
    role: 'Solo — full stack, scraper, tooling',
    outcome:
      'Private Vienna rental decision tool aggregating 6 listing sources, removing duplicates, comparing up to 4 apartments and scoring commute, amenities and custom criteria.',
    highlights: [
      'Scheduled crawls and listing refreshes through Inngest; changes tracked, listings never silently dropped',
      'Explainable all-in monthly cost; unknown facts never earn points — completeness 0–100% is part of the score',
      'AI extraction of rent and fees from listing text; deduplicated Telegram alerts and a daily digest',
      'Owner-only login; CI runs unit, integration and Playwright E2E tests with axe WCAG checks',
    ],
    stack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Prisma', 'Inngest', 'Clerk', 'AI SDK', 'Vitest', 'Playwright', 'Telegram'],
    status: 'PRIVATE',
    accent: '#ED2939',
    schematic: `               ┌─ PostgreSQL ─┐   ┌─────────────────┐
 6 listing     │              │   │ all-in cost     │
 sources ─────▶│ provenance   │──▶│ score           │──▶ Telegram
 scraper       │ change log   │   │ completeness    │    deduped
               └──────────────┘   └─────────────────┘`,
    links: [{ label: 'REPO', url: 'https://github.com/InM1nd/AppScanner' }],
  },
  {
    id: '07',
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
    id: '08',
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
    id: '09',
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
    id: '10',
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
    schematic: `                         ┌───────── t3code-jcode ─────────┐
                         │ jcode routing    modes · chats │
pingdotgg/t3code ─fork──▶│ Board ◀──▶ MCP   files         │
                         │                  delegates     │
                         └────────────────────────────────┘`,
    links: [{ label: 'REPO', url: 'https://github.com/InM1nd/t3code-jcode' }],
  },
  {
    id: '11',
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
    schematic: `               ┌─ USAGE     claude · codex · cursor
╭── notch ──╮  │
│ ● CYCLOP  │──┼─ MEMORY    pressure · cache cleanup
╰───────────╯  │
               └─ POMODORO  rim · awake with lid closed`,
    links: [{ label: 'REPO', url: 'https://github.com/InM1nd/cyclop_enchanced' }],
  },
]

export const GROUPS: ProjectGroup[] = ['CLIENT WORK', 'PRODUCTS', 'DEV TOOLS']

export const ARCHIVE = [
  {
    id: '12',
    code: 'FILMOTEKA_LIB',
    name: 'FILMOTEKA',
    tagline: 'Film library & tracker',
    year: '2023',
    stack: ['JavaScript', 'HTML/CSS'],
    url: 'https://okolobaha-me.github.io/quentin-filmotino/#en',
  },
]
