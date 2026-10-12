export type CaseImage = {
  src: string
  width: number
  height: number
  caption: string
  /** Portrait phone shot — keep it narrow, never stretch. */
  narrow?: boolean
}

/** `emphasis` is a prefix of `text`. The page draws that prefix as the lead phrase. */
export type CaseLine = {
  text: string
  emphasis: string
}

export type CaseStudy = {
  slug: string
  name: string
  title: string
  kicker: string
  lead: string
  role?: string
  status?: string
  /** Shown when there is no public URL. */
  access?: string
  note?: string
  live?: string
  stack: string[]
  decisions: CaseLine[]
  images: CaseImage[]
}

const img = (
  file: string,
  width: number,
  height: number,
  caption: string,
  narrow?: boolean,
): CaseImage => ({
  src: `/case-studies/${file}`,
  width,
  height,
  caption,
  narrow,
})

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'fitloyalty',
    name: 'FitLoyalty',
    title: 'One product, many studio brands',
    kicker: 'White-label SaaS · Own product · 2026',
    lead:
      "A retention platform for independent fitness studios: the owner sees who is about to drop out and what it costs, the members get an app in the studio's own brand.",
    role: 'Concept, product design, frontend',
    status: 'Working demo with simulated data',
    live: 'https://fit-loyality.vercel.app/',
    stack: ['Next.js', 'TypeScript', 'Tailwind v4', 'Radix / shadcn', 'Motion', 'Recharts', 'Zod'],
    decisions: [
      {
        emphasis: "Numbers first, then today's actions.",
        text: 'Numbers first, then today\'s actions. The overview answers "who needs a touch today and how much revenue is at stake", and each row opens a ready message.',
      },
      {
        emphasis: 'Branding as a setting, not a fork.',
        text: 'Branding as a setting, not a fork. Studios set colour, app name and logo; the live preview shows the member app in their brand before they save.',
      },
      {
        emphasis: 'Privacy by design.',
        text: "Privacy by design. The churn check reads the studio's CSV in the browser, so member data never leaves the device.",
      },
    ],
    images: [
      img('fitloyalty/01-landing.webp', 2000, 1250, 'Landing page — sells the product with live mockups'),
      img('fitloyalty/02-overview.webp', 2000, 1250, "Owner dashboard — today's overview"),
      img('fitloyalty/03-members.webp', 2000, 1250, 'Members — search, sort and at-risk filters'),
      img('fitloyalty/04-trends.webp', 2000, 1250, 'Analytics — retention cohorts by signup month'),
      img('fitloyalty/05-briefing.webp', 2000, 1250, 'Morning briefing — ranked actions for the day'),
      img('fitloyalty/06-rewards.webp', 2000, 1250, 'Rewards — automated perks that bring members back'),
      img('fitloyalty/07-journeys.webp', 2000, 1250, 'Journeys — onboarding and win-back flows (preview)'),
      img(
        'fitloyalty/08-member-crop.webp',
        590,
        1160,
        'Member app (PWA)',
        true,
      ),
    ],
  },
  {
    slug: 'marswalk',
    name: 'marswalk',
    title: 'A website that sounds like the agency',
    kicker: 'marswalk media · Frontend Developer & Designer · Sep 2025 – now',
    lead:
      'One of two developers at a 50-person Vienna agency. Rebuilt the website from Webflow on Next.js and Sanity, in German and English: bold type, video everywhere, an interactive 3D footer, and case pages the team fills in themselves.',
    live: 'https://www.marswalk.media/',
    stack: ['Next.js App Router', 'Sanity', 'TypeScript', 'Vercel', 'Playwright', 'GitHub Actions'],
    decisions: [
      {
        emphasis: 'One component library shared with the client portal and internal tools.',
        text: 'One component library shared with the client portal and internal tools.',
      },
      {
        emphasis: 'About 300 tests run in CI before every build',
        text: 'About 300 tests run in CI before every build; I also led the SEO side of the migration.',
      },
      {
        emphasis: 'Also the internal tools the team runs on',
        text: 'Also the internal tools the team runs on: a content portal for clients and account managers (built almost from scratch), a community inbox for TikTok and Instagram comments, and the interface of our GEO tool. Not shown here, as they contain client data.',
      },
    ],
    images: [
      img(
        'marswalk/01-mockup.webp',
        2400,
        1160,
        'Home, services grid, a case brief and the interactive 3D footer',
      ),
    ],
  },
  {
    slug: 'piplet',
    name: 'Piplet',
    title: 'Making a complex process feel calm',
    kicker: 'AI production tool · Client demo · 2026',
    lead:
      'A command centre for teams producing social-media ads with AI video: one brief becomes 5–10 variants, generated through different providers and tracked until they are ready to review.',
    role: 'Product design and frontend',
    status: 'Demo, providers simulated',
    live: 'https://piplet.vercel.app/dashboard',
    stack: ['Next.js Server Actions', 'TypeScript', 'Zod domain schemas', 'provider adapters'],
    decisions: [
      {
        emphasis: 'The form adapts to the model.',
        text: 'The form adapts to the model. Every field on the create screen comes from what the selected model can do, so the user never sees an option that will fail.',
      },
      {
        emphasis: 'Cost before commitment.',
        text: 'Cost before commitment. Live price and queue estimate update while the batch is configured.',
      },
      {
        emphasis: 'Every job has a visible state',
        text: 'Every job has a visible state — queued, processing, ready or failed — with retry and cancel, and credits are refunded automatically on failure.',
      },
    ],
    images: [
      img('piplet/01-dash.webp', 1568, 780, 'Dashboard — credits, active queue, recent batches'),
      img('piplet/02-create.webp', 1512, 790, 'Create batch — capability-driven form with live cost (dark mode)'),
    ],
  },
  {
    slug: 'obrio',
    name: 'OBRIO',
    title: 'Who works on what, for 300+ people',
    kicker: 'Internal product, used daily · Contract · Jan – Jul 2025',
    lead:
      'An internal dashboard that helps employees understand a company organised by functions and product streams at the same time.',
    role: 'Product UX/UI, information architecture, frontend',
    access: 'Google SSO, company domain only (no public link)',
    note: 'Names and emails are blurred.',
    stack: ['Next.js', 'TypeScript', 'Google SSO'],
    decisions: [
      {
        emphasis: 'A matrix instead of a tree.',
        text: 'A matrix instead of a tree. Verticals × product streams show how the company actually works, not only who reports to whom.',
      },
      {
        emphasis: 'Three ways to find someone:',
        text: 'Three ways to find someone: the matrix, a classic org chart for hierarchy, and a searchable directory with filters by vertical, stream and grade.',
      },
      {
        emphasis: 'A shared vocabulary.',
        text: 'A shared vocabulary. A glossary explains internal terms for new joiners.',
      },
    ],
    images: [
      img('obrio/01-matrix.webp', 1568, 780, 'Matrix view'),
      img('obrio/02-org.webp', 1568, 780, 'Org chart'),
      img('obrio/03-dir.webp', 1568, 780, 'Team directory'),
    ],
  },
  {
    slug: 'appscanner',
    name: 'AppScanner',
    title: "Honest about what it doesn't know",
    kicker: 'Decisions with incomplete data · Personal tool · 2026',
    lead:
      'A personal tool for finding a flat in Vienna. Listings come with missing or contradicting costs, so the interface is built around confidence, not just numbers.',
    status: 'Private tool (no public link)',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Inngest', 'Vercel AI SDK', 'Playwright'],
    decisions: [
      {
        emphasis: 'Known, likely, unknown.',
        text: 'Known, likely, unknown. Each cost shows whether it is confirmed by the listing, estimated from my profile, or still missing.',
      },
      {
        emphasis: 'A score you can argue with.',
        text: 'A score you can argue with. Every point in the 0–100 score is explained line by line.',
      },
      {
        emphasis: 'AI with receipts.',
        text: 'AI with receipts. Values extracted by a model must quote the source text, otherwise they are shown as "unclear" instead of a guess.',
      },
    ],
    images: [
      img('appscanner/01-dash.webp', 1512, 790, 'Dashboard — top matches and what needs action'),
      img('appscanner/02-detail.webp', 1512, 790, 'Listing — status, all-in cost, data completeness and score breakdown'),
    ],
  },
  {
    slug: 'tripweave',
    name: 'TripWeave',
    title: 'A trip the whole group can see',
    kicker: 'Collaborative planning · Own product',
    lead:
      'A shared planner for group trips: itinerary, map, budget and documents in one place, with places imported straight from TikTok, Instagram and YouTube posts.',
    live: 'https://tripweave-six.vercel.app/',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Leaflet', 'LLM APIs'],
    decisions: [
      {
        emphasis: 'A board, not a spreadsheet.',
        text: 'A board, not a spreadsheet. Each day is a column, each plan a card with time, place, source and cost.',
      },
      {
        emphasis: 'Decide together.',
        text: 'Decide together. Anyone can suggest a place and the group votes before it goes into the plan.',
      },
      {
        emphasis: 'From saved post to plan.',
        text: 'From saved post to plan. Vision and text models turn a social post into a place on the map, with a fallback between providers.',
      },
    ],
    images: [
      img('tripweave/01-trip.webp', 2000, 1165, 'Trip page — ticket-style header and day-by-day board'),
      img('tripweave/02-suggested.webp', 2000, 1048, 'Suggested places — the group votes'),
      img('tripweave/03-explore.webp', 2000, 997, 'Explore — Social Spot Importer and saved places'),
    ],
  },
]

export const CASE_PDF = '/Oleksandr_Zabolotnyi_Case_Studies.pdf'

export const getCase = (slug: string) => CASE_STUDIES.find((item) => item.slug === slug)

export const caseNav = (slug: string) => {
  const index = CASE_STUDIES.findIndex((item) => item.slug === slug)
  const total = CASE_STUDIES.length
  return {
    index,
    total,
    prev: CASE_STUDIES[(index + total - 1) % total],
    next: CASE_STUDIES[(index + 1) % total],
  }
}
