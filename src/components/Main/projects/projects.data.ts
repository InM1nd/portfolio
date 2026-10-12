export type ProjectStatus = 'LIVE' | 'DEMO' | 'NDA' | 'PRIVATE' | 'FORK' | 'ARCHIVED'

export type ProjectGroup = 'CASE STUDIES' | 'PRODUCTS' | 'DEV TOOLS'

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
  /** Case study route under /projects, when this card has one. */
  caseSlug?: string
}

export const PROJECTS: Project[] = [
  {
    id: '01',
    code: 'FITLOYALTY_OS',
    name: 'FITLOYALTY',
    group: 'CASE STUDIES',
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
    caseSlug: 'fitloyalty',
  },
  {
    id: '02',
    code: 'MARSWALK_MEDIA',
    name: 'MARSWALK',
    group: 'CASE STUDIES',
    tagline: 'Agency site, rebuilt from Webflow',
    year: '2025',
    role: 'Frontend Developer & Designer',
    outcome:
      'One of two developers at a 50-person Vienna agency. Rebuilt the website from Webflow on Next.js and Sanity, in German and English: bold type, video everywhere, an interactive 3D footer, and case pages the team fills in themselves.',
    highlights: [
      'One component library shared with the client portal and internal tools',
      'About 300 tests run in CI before every build; led the SEO side of the migration',
      'Internal tools — a content portal, a community inbox, and the GEO tool interface — stay off the page, they contain client data',
    ],
    stack: ['Next.js App Router', 'Sanity', 'TypeScript', 'Vercel', 'Playwright', 'GitHub Actions'],
    status: 'LIVE',
    accent: '#F4F4F4',
    image: '/case-studies/marswalk/01-mockup.webp',
    links: [{ label: 'OPEN', url: 'https://www.marswalk.media/' }],
    caseSlug: 'marswalk',
  },
  {
    id: '03',
    code: 'PIPLET_ADS',
    name: 'PIPLET',
    group: 'CASE STUDIES',
    tagline: 'Command centre for AI video ads',
    year: '2026',
    role: 'Product design and frontend',
    outcome:
      'A command centre for teams producing social-media ads with AI video: one brief becomes 5–10 variants, generated through different providers and tracked until they are ready to review.',
    highlights: [
      'Every field on the create screen comes from what the selected model can do',
      'Live price and queue estimate update while the batch is configured',
      'Each job shows queued, processing, ready or failed, with retry, cancel and an automatic credit refund',
    ],
    stack: ['Next.js Server Actions', 'TypeScript', 'Zod domain schemas', 'provider adapters'],
    status: 'DEMO',
    accent: '#CF7547',
    image: '/case-studies/piplet/01-dash.webp',
    links: [{ label: 'OPEN', url: 'https://piplet.vercel.app/dashboard' }],
    caseSlug: 'piplet',
  },
  {
    id: '04',
    code: 'OBRIO_NAV',
    name: 'OBRIO',
    group: 'CASE STUDIES',
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
    caseSlug: 'obrio',
  },
  {
    id: '07',
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
    id: '05',
    code: 'APPSCANNER_PROP',
    name: 'APPSCANNER',
    group: 'CASE STUDIES',
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
    caseSlug: 'appscanner',
  },
  {
    id: '06',
    code: 'TRIPWEAVE_PLAN',
    name: 'TRIPWEAVE',
    group: 'CASE STUDIES',
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
    caseSlug: 'tripweave',
  },
  {
    id: '08',
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
    id: '09',
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
    id: '10',
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

export const GROUPS: ProjectGroup[] = ['CASE STUDIES', 'PRODUCTS', 'DEV TOOLS']

export const ARCHIVE: {
  id: string
  name: string
  tagline: string
  year: string
  url?: string
}[] = [
  {
    id: '11',
    name: 'FILMOTEKA',
    tagline: 'Film library & tracker',
    year: '2021',
    url: 'https://okolobaha-me.github.io/quentin-filmotino/#en',
  },
  {
    id: '15',
    name: 'MENUDGET',
    tagline: 'Menu & ordering app',
    year: 'OCT 2022 — APR 2023',
  },
  {
    id: '12',
    name: 'SKELYA',
    tagline: 'Career-support platform',
    year: 'JAN 2024 — DEC 2024',
  },
  {
    id: '13',
    name: 'VERUS',
    tagline: 'Dubai real-estate site',
    year: 'JAN 2024 — DEC 2024',
    url: 'https://verusproperty.com/',
  },
  {
    id: '14',
    name: 'SKEPTIC',
    tagline: 'Fitness platform',
    year: 'JAN 2024 — DEC 2024',
  },
]
