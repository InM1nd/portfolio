# Project rules

Personal portfolio of Oleksandr Zabolotnyi — frontend / product engineer, Vienna.
It exists to get him hired. Every decision below serves that, not decoration.

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind 3 · static export to Vercel.

---

## 1. Content honesty — the rule that overrides everything

**Never invent a fact about this person.** Not a metric, not a status, not a date, not a
capability. This portfolio previously shipped fake telemetry (`DIST: 64.20%`, `STATUS: 45%`),
invented cities per project, and a claim of holding an Austrian work permit. All of it was
removed. Do not reintroduce any of it.

Sources of truth, in order: the user's own statements in conversation → their CV → live
verification (`curl` the URL, check the repo). If a number is not in one of those, it does not
go on the page.

- Verified metrics that may be used: OBRIO "300+ employees", Quizzley "300+ users".
- Status labels must be true: `LIVE` / `DEMO` / `NDA` / `PRIVATE` / `OSS` / `ARCHIVED`.
  FitLoyalty is `DEMO` because its own site says "all data simulated" — not `LIVE`.
- Never add a live link without checking it responds. Dead links are worse than omissions.
- No self-rated skill bars, no "CLEARANCE: EXPERT", no seniority claims the CV doesn't make.
- The site must not contradict the CV. Experience starts 2021, not 2020.

---

## 2. One screen, always

The page never scrolls. The panel inside the device does.

- `PipBoyShell` owns `h-[100dvh] overflow-hidden`. Use `100dvh`, never `100vh` — iOS Safari's
  address bar eats the bottom strip otherwise.
- Exactly one node per page carries `min-h-0 flex-1 overflow-y-auto`. Parents in that chain
  need `min-h-0`, or flexbox refuses to shrink them and the page grows instead.
- Below 500px of viewport *height* (phone landscape) the shell lets go and the page scrolls
  normally: `[@media(max-height:500px)]`.
- **Tailwind gotcha:** `max-[500px]` is a **width** query. For height you must write the
  arbitrary variant `[@media(max-height:500px)]`. This bug shipped once already.

Verify with a measurement, not by eye:

```js
document.documentElement.scrollHeight > window.innerHeight + 2  // must be false
document.documentElement.scrollWidth  > window.innerWidth       // must be false
```

Check at 1440×900, 1280×800, 768×1024, 390×844.

---

## 3. Routing and prerender

**Tabs are routes, never state.** `{tab === 'work' && <Work/>}` would collapse 5 indexable URLs
into 1 and throw away the per-route `title` / `description` / canonical in
`src/app/*/layout.tsx`. Navigation is `TransitionLink` with the active tab styled from
`usePathname()`.

**Never put `ssr: false` on anything that carries content.** The whole app once rendered an
empty `<body>` because `ClientPageTransition` wrapped everything in `dynamic(..., {ssr:false})`.
`ssr: false` is allowed only for WebGL/canvas decoration (`FaultyTerminal`, `CRTEffect`).

Content must not be gated behind an effect or a timer either — a boot animation renders *over*
already-rendered markup, never *instead of* it.

Verify after any render-path change:

```bash
npm run build
python3 -c "import re;h=open('out/projects/index.html',encoding='utf8').read();b=re.sub(r'<script.*?</script>','',h.split('<body',1)[1],flags=re.S);print(len(re.sub(r'\s+',' ',re.sub(r'<[^>]*>',' ',b)).strip()))"
# projects ≈ 700+ chars of real text. If it prints ~40, prerender is broken.
```

---

## 4. Visual language

Retro terminal / Fallout Pip-Boy. Monochrome green on black.

| Token | Value | Use |
|---|---|---|
| `terminal-green` | `#36A689` | everything |
| `terminal-online` | `#4AF626` | live / available status only |
| `#FFB642` | amber | NDA, selection accents. Sparingly |
| `terminal-danger` | `#DF2E30` | errors only — never for availability |

Font: **Share Tech Mono only** (`font-mono`). There is exactly one font family in this project.
Three were once loaded and two were unused.

**Style comes from subtraction.** An earlier attempt was rejected as "наляписто" — cluttered.
What caused it, and what to keep avoiding:

- Frame inside frame inside frame. **One** outer border; inside it use hairline dividers
  (`border-terminal-green/20`) and whitespace.
- Background behind text. The device screen is opaque (`bg-[#020402]`); the WebGL background
  lives *around* it, never under the reading area.
- Decoration with no function. The HP bar and diamonds were cut. The filter sub-tabs stayed —
  they actually filter.
- Everything at one visual weight. Build hierarchy with opacity and size, not with borders:
  heading 100% → body 70% → meta 35% → label 25%.

Pip-Boy signals that are correct because each does a job: two-level tabs (sections + filters),
inverted selected row with a `►` cursor, phosphor `text-shadow` glow, corner ticks, vertical
position track, bottom status bar. Project screenshots get pushed through
`grayscale → sepia → hue-rotate(96deg)` so they read as terminal output.

Minimum body text size is 12px. Shrink padding and chrome, not legibility.

---

## 5. Layout

```
src/components/pipboy/PipBoyShell.tsx     device frame, tabs, status bar; exports glow/glowStrong
src/components/Main/projects/
  projects.data.ts                        single source of truth for all project content
  ProjectRegister.tsx                     the register + detail panel
src/app/<route>/layout.tsx                per-route metadata (server component)
src/app/<route>/page.tsx                  thin: <PipBoyShell><Content/></PipBoyShell>
```

Project content lives in `projects.data.ts` and nowhere else. There were once six near-identical
135-line component files per project; they were collapsed into data + one renderer. Do not
recreate them.

---

## 6. Before saying anything is done

```bash
npm run build          # must exit 0
npx tsc --noEmit       # must be clean
```

Plus: load every route in a browser, confirm 0 console errors, and re-run the scroll
measurement from §2. `next build` passing proves it compiles and prerenders — it does **not**
prove the page hydrates or fits. Those need the browser.

Screenshots for `public/projects/` are captured from the live product (the dashboard, the real
screen), not the marketing landing page. Compress before committing: `sips -s format jpeg -s
formatOptions 75 -Z 1200`. The repo once carried a 5.6MB portrait and a 20MB mp4.

Dependencies: add nothing that a few lines of CSS can do. `three`, `@react-three/*`,
`face-api.js`, `devicon`, `postprocessing`, `sass` and `gh-pages` were all removed as unused.

---

## 7. Deployment

Single canonical URL: **https://inm1nd.vercel.app** — static export (`output: 'export'`).
GitHub Pages is dead and must stay dead; it served a stale pre-migration build for a year.
Do not reintroduce `basePath`, `gh-pages`, or a Pages workflow.

`sitemap.ts` and `robots.ts` need `export const dynamic = 'force-static'` under `output: 'export'`.

---

## 8. Known traps

- **Global anchor rule.** `a:not(.terminal-button)` in `globals.css` sets `position: relative`
  and outranks `.sr-only` by specificity. Any new utility-positioned link needs an exclusion,
  or it will silently occupy space in the flow.
- **EmailJS keys in `talk.tsx` are publishable** — not a leak. The real safeguard is the domain
  allowlist in the EmailJS dashboard.
- `PORTFOLIO_ANALYSIS.md` and `PIPBOY_PLAN.md` are current. **`REDESIGN_PLAN.md` is obsolete** —
  it describes a 2024 concept that no longer matches the code. Don't take direction from it.
