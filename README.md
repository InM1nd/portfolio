# Portfolio — Oleksandr Zabolotnyi

Frontend / product engineer, Vienna. Live at **https://inm1nd.vercel.app**

A retro-terminal portfolio built as a Pip-Boy style device: the page itself never scrolls,
the panel inside it does. Tabs are real routes, so all five pages stay indexable.

> **Working on this repo — human or agent — read [AGENTS.md](./AGENTS.md) first.**
> It holds the content-honesty rules, the layout contract and the traps.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS 3 ·
static export (`output: 'export'`) deployed on Vercel.

The WebGL background is [`ogl`](https://github.com/oframe/ogl). That is the only rendering
dependency — no Three.js, no animation libraries.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
npx tsc --noEmit   # typecheck
```

## Routes

| Route | Tab | What |
|---|---|---|
| `/` | — | Boot sequence and terminal activation |
| `/projects` | WORK | Project register with filters and detail preview |
| `/about` | PROFILE | Experience, stack, education, languages |
| `/applications` | LAB | Small browser experiments |
| `/contact` | CONTACT | Channels and a message form |

## Layout

```
src/
├── app/
│   ├── <route>/layout.tsx      per-route metadata (server component)
│   ├── <route>/page.tsx        <PipBoyShell><Content/></PipBoyShell>
│   ├── sitemap.ts robots.ts    force-static under output: 'export'
│   └── globals.css
├── components/
│   ├── pipboy/PipBoyShell.tsx  device frame, tabs, status bar
│   ├── Main/projects/
│   │   ├── projects.data.ts    single source of truth for project content
│   │   └── ProjectRegister.tsx
│   ├── FaultyTerminal.tsx      WebGL background
│   └── BootSequence.tsx
└── img/
```

## Docs

- [AGENTS.md](./AGENTS.md) — project rules. Start here.
- [PORTFOLIO_ANALYSIS.md](./PORTFOLIO_ANALYSIS.md) — audit and the hiring-priority plan.
- [PIPBOY_PLAN.md](./PIPBOY_PLAN.md) — design direction and implementation status.
- `REDESIGN_PLAN.md` — **obsolete**, describes a 2024 concept. Kept for history only.
