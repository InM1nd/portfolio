# Аудит портфолио — 2026-09-19

Проверено: код в ветке `t3code/assess-strengthen-portfolio`, продакшен-сборка (`next build`, exit 0),
HTML статического экспорта, живые URL (curl).

---

## 0. Главное: публичный адрес отдаёт мёртвую версию

**Проверено:** `https://inm1nd.github.io/portfolio/` отдаёт **старую Vite-сборку** (Kanit,
`assets/index-275a2211.js`, `#root`), а не Next.js-редизайн. Причина в
`.github/workflows/jekyll-gh-pages.yml`: workflow называется "Deploy Vite site", собирает
`npm run build` и публикует папку `dist`, а Next экспортирует в `out`.

**Живой деплой:** `https://inm1nd.vercel.app/` — 200 на всех пяти маршрутах, отдаёт терминальный
редизайн. Он и есть рабочий адрес.

Старый адрес заброшен, но остаётся публичным и индексируемым — отдаёт версию годовой давности.
Чинить workflow не нужно: отключить GitHub Pages в настройках репозитория, удалить
`jekyll-gh-pages.yml`, выкинуть `basePath`-развилку из `next.config.js` и `gh-pages` из зависимостей.

---

## 1. Что сейчас есть

| | |
|---|---|
| Стек | Next.js 16.1.6 (App Router, Turbopack), React 19, TypeScript, Tailwind 3.4, shadcn/ui |
| Страницы | `/`, `/projects`, `/about`, `/applications`, `/contact` |
| Стиль | Монохромный терминал/CRT: `#36A689` на чёрном, Share Tech Mono, сканлайны, глитч |
| Билд | Проходит, 7 static-страниц, JS-чанки ~1.1 MB |
| Деплой | GitHub Pages (сломан) + Vercel (адрес неизвестен), `output: 'export'` |

Сам визуальный концепт — сильный и запоминающийся. Редизайн переделывать не нужно.
Проблема в другом: эстетика стала нести ответственность за доставку контента.

---

## 2. Блокеры (без них подаваться нельзя)

### 2.1 Три из четырёх главных карточек — пустые, хотя работа сделана
В верхней сетке `src/components/Main/projects/projects.tsx:12-26`: NEBULA, TRIPWEAVE, POLYBOT.
У всех трёх нет скриншота, нет ссылки, нет описания — вместо этого `ProjectLoadingPlaceholder`
с фейковыми `SIGNAL_LOST` / `INITIALIZING_KERNEL` и выдуманными метриками (`DIST: 64.20%`,
`STATUS: 45%`, `nebula.tsx:9-11`).

**Но два из трёх проектов существуют и задеплоены:**
- NEBULA = `https://nebula-seven-omega.vercel.app/` — «OBRIO Corporate organizational dashboard»,
  200, закрыт Google SSO по домену;
- TRIPWEAVE = `https://tripweave-six.vercel.app/` — полноценный лендинг + продукт, 200.

То есть карточки пустые не потому, что работы нет, а потому что их не заполнили. Их надо
дописать, а не удалять. POLYBOT ничему в списке проектов и в резюме не соответствует — либо
уточнить, что это, либо убрать одну эту карточку.

### 2.2 Ссылки на проекты мертвы
```
quizzley-production.up.railway.app          404
skelya.careers                              домена не существует (нет A, нет NS)
balanced-presence-production.up.railway.app 502   (ARCHIVE / BOARDY)
inm1nd.github.io/react_admin                200, но <title>Vite + React</title>
okolobaha-me.github.io/quentin-filmotino    200  — единственная рабочая
```
Оба проекта из основной сетки открыть нельзя. `skelya.careers` не резолвится вообще —
DNS не отдаёт ни A-записи, ни NS, домен истёк или снят. Мёртвая ссылка хуже отсутствующей.

### 2.3 Рекрутер не может ни проверить, ни связаться
Нет фамилии (везде «ALEX», `USER_ID: InM1nd_487`), нет ни одной ссылки на GitHub, нет LinkedIn,
нет CV на скачивание, нет видимого e-mail — только форма EmailJS.

### 2.4 Ссылка в отклике выглядит пустой
`src/app/layout.tsx:24-27`: `title: "Portfolio"`, `description: "Portfolio website"`.
Нет OG-картинки, нет `metadataBase`, нет `robots.txt`/`sitemap.xml`.
Вставленная в заявку ссылка рендерится безликой карточкой.

### 2.5 Контент не существует без JavaScript
`<body>` **каждой** страницы содержит ровно одну строку — `Skip to main content`. Проверено и в
локальном экспорте (`out/index.html`, `out/about/index.html`, `out/projects/index.html`), и на живом
`https://inm1nd.vercel.app/` — там же пустой `<body>`, `<title>Portfolio</title>` и ноль `og:`-тегов.

Корневая причина одна: `layout.tsx:47` оборачивает всё дерево в `ClientPageTransition`, а тот
рендерит `PageTransitionWrapper` через `dynamic(..., { ssr: false })`
(`ClientPageTransition.tsx:5-8`). Значит из пререндера выпадает вообще всё приложение, включая
главную, где терминальный каркас написан прямо в `page.tsx`.

Сверху лежат ещё два слоя того же:
- страничные компоненты тоже грузятся через `dynamic(..., { ssr: false })`
  (`src/app/about/page.tsx:6-11`, аналогично на остальных страницах);
- на главной `<h1>` пуст даже после гидрации в первый момент — текст набирается по буквам из
  `useState('')` (`src/app/page.tsx:15,29-38`), а навигация ждёт `systemReady`, то есть ~3 с
  искусственной задержки (`src/app/page.tsx:18,48-51,157`).

Стиль тут ни при чём — убрать надо только гейты, не эстетику.

---

### 2.6 На сайте нет большей части реальных работ
Живые и проверенные (200 OK), но на сайте отсутствуют:

| Проект | Адрес | Что это |
|---|---|---|
| FitLoyalty | `fit-loyality.vercel.app` | White-label retention-платформа для фитнес-студий DACH, Next 16 + Tailwind v4, EN/DE |
| TripWeave | `tripweave-six.vercel.app` | Совместный планировщик путешествий, real-time |
| OBRIO Dashboard | `nebula-seven-omega.vercel.app` | Корпоративный оргдашборд, 300+ сотрудников, SSO |
| codebase-memory-plus | `codebase-memory-plus.vercel.app` | Open-source MCP-дашборд, MIT |
| AppScanner | `github.com/InM1nd/AppScanner` | Proptech-инструмент для венской аренды, PostgreSQL/Prisma/Docker |
| cyclop_enchanced | `github.com/InM1nd/cyclop_enchanced` | SwiftUI-утилита для челки MacBook, README 28 KB |
| t3code-jcode | `github.com/InM1nd/t3code-jcode` | Форк-интеграция, TypeScript |

Все три репозитория публичные, с README. Это примерно семь показываемых работ против двух
сломанных ссылок, которые сейчас на сайте.

Неудобный вывод: **портфолио — самый слабо сделанный артефакт во всём этом списке.** FitLoyalty и
TripWeave отдают нормальный SSR-контент и осмысленные метаданные. Сайт, который должен их
показывать, отдаёт пустой `<body>` и `<title>Portfolio</title>`.

---

## 3. Доверие к профилю

- Самооценочные шкалы навыков (`team.tsx:12-19`): TypeScript 90%, HTML/CSS 95%, React 85%.
  Проценты, которые никто не может проверить, читаются как признак неопытности. Удалить.
- `CLEARANCE: EXPERT` (`team.tsx:73`) — та же проблема, только громче.
- Таймлайн (`team.tsx:33-48`) — роли без компаний, без продуктов, без результата. И он расходится
  с резюме: там опыт «с 2021, около четырёх лет» и реальные работодатели (Marswalk Media,
  Kicks Space, Menudget), а на сайте `experienceYears = new Date().getFullYear() - 2020`
  (`team.tsx:76`) выводит **6 YEARS**. Рекрутер с резюме в руках это заметит. Правка дешёвая —
  контент уже написан в резюме.
- Ни у одного проекта нет кейс-стади: задача → роль → стек → решение → результат.
- `/applications` (крестики-нолики, погода, рисовалка) стоит в навигации наравне с проектами.
  Для джуна — нормально, для «Interface Engineer» — размывает сигнал.

---

## 4. Инженерный сигнал

- **46 MB картинок в `src/img`**: `LOGO_SMILE.mp4` 20 MB, `LOGO-SMILE.gif` 7.3 MB,
  `SANYA.jpg` 5.6 MB, `Skeptic_Lg.jpg` 3.0 MB. При `images.unoptimized: true`
  (`next.config.js:8`) фото 5.6 MB отдаётся на `/about` как есть.
- **Мёртвый код**: 7 неиспользуемых компонентов проектов (`icecream`, `nutrify`, `skepic`,
  `boardy`, `dashboard`, `filmoteka`, `oilfaces`) и `GridScan.tsx` — единственный потребитель
  `face-api.js`. В `package.json` висят без применения `face-api.js`,
  `@react-three/postprocessing`, `gh-pages`.
- **WebGL-фон на каждой странице**: `FaultyTerminal` (ogl) + `CRTEffect` рендерятся постоянно,
  без паузы вне вьюпорта и без учёта `prefers-reduced-motion`. Это батарея и FPS на ноутбуке
  рекрутера.
- **CI**: workflow собирает несуществующий `dist` (см. п. 0). Нет ни линта, ни typecheck в CI.
- **Тестов нет вообще**; `npm run lint` не настроен на CI.
- **README устарел**: обещает Next.js 14 (реально 16.1.6) и деплой через `gh-pages`. Цифру
  «~89 kB First Load JS» не проверял — Next 16 её в выводе билда больше не печатает.
- **EmailJS**: `service_akm93ow` / `template_0d6shyb` / `zbsLT_FXTpYzv9OGr` в
  `talk.tsx:35` — это публикуемый ключ, утечки нет. Но проверь allowlist доменов в панели
  EmailJS, иначе форма работает как открытый спам-релей.
- **Браузерная база устарела**: `caniuse-lite is 8 months old`.

---

## 5. План по приоритету найма

### Tier 0 — сделано (ветка `t3code/assess-strengthen-portfolio`)

- **Пререндер восстановлен.** Убран `dynamic(ssr:false)` из `ClientPageTransition`; boot-анимация
  теперь оверлей поверх готового контента, а не условие его рендера. Страничные компоненты
  импортируются напрямую, `ssr:false` остался только на WebGL-фоне. `<h1>` содержит текст сразу
  (`sr-only` + анимация печати поверх), навигация всегда в DOM, boot ускорен с ~3 с до ~1 с.
  Проверено: `/projects` отдаёт 2880 знаков текста в HTML вместо 0.
- **Метаданные.** Настоящее имя и роль в `title`, `metadataBase`, per-route `title`/`description`
  через четыре маленьких server-layout, canonical, `robots.txt`, `sitemap.xml`.
- **OG-картинка.** Сгенерирована через `next/og` в терминальном стиле, лежит статикой
  в `public/og.png` (1200×630), подключена на всех страницах.
- **GitHub Pages снесён.** Удалён `jekyll-gh-pages.yml`, из `next.config.js` убрана
  `basePath`-развилка и webpack-алиас (он дублировал `tsconfig paths` и ломал Turbopack),
  из зависимостей — `gh-pages`, `face-api.js`, `@react-three/postprocessing`.
- **Мёртвый код удалён:** 7 неиспользуемых компонентов проектов, `GridScan`, `PageTransition`.
- **Имя и контакты.** Везде `OLEKSANDR ZABOLOTNYI` вместо `ALEX`/`InM1nd`, в футер добавлен
  e-mail прямой ссылкой.

**Состав проектов пересобран.** Витрина теперь повторяет «Selected Projects» из резюме и делится
по честному признаку, а не по выдуманному проценту готовности:

| Секция | Проекты |
|---|---|
| COMMERCIAL | OBRIO (NDA) |
| PRODUCT BUILDS | FitLoyalty (demo), TripWeave (live), AppScanner (NDA, репозиторий) |
| OPEN SOURCE | codebase-memory-plus (MIT), cyclop (SwiftUI) |
| ARCHIVE | Filmoteka |

Убраны: POLYBOT (тестовый), NEBULA-заглушка (это и есть OBRIO — одна карточка вместо двух),
QUIZZLEY и SKELYA (мёртвые ссылки — вернутся, когда поднимутся), BOARDY (502),
DASHBOARD/react_admin (отдаёт дефолтную страницу Vite).

**Карточка проекта переписана.** Было: 6 почти одинаковых файлов по 78–135 строк с захардкоженной
разметкой. Стало: `projects.data.ts` + один `ProjectCard.tsx`. Скриншот и метаданные лежат рядом
по горизонтали, а не стопкой.

- сетка переведена с `2xl` (1536 px) на `lg` (1024 px) — именно этот брейкпоинт и давал одну
  колонку на ноутбуке;
- удалены `ProjectLocationMap` и `ProjectTimeline` (266 строк) вместе с выдуманными `DIST`,
  `STATUS %` и городами («Berlin» для Quizzley, «Wroclaw» для Skelya);
- вместо них настоящие поля: год, роль, статус (LIVE / DEMO / NDA / OSS), стек, одна строка
  результата;
- для NDA-проектов — стильная панель CLASSIFIED вместо скриншота, для открытого кода без
  скриншота — панель с платформой («SWIFTUI · source available»). Мёртвых кнопок нет: где нет
  живой ссылки, там только репозиторий или ничего;
- сняты реальные скриншоты FitLoyalty, TripWeave и codebase-memory-plus (396 KB на три, `public/projects/`);
- у `/projects` появился `h1` («SELECTED WORK»), архивная карточка переписана в общий стиль
  (в старой был синий прогресс-бар, выпадавший из палитры).

Замер на 1440×900, до и после:

| | было | стало |
|---|---|---|
| высота страницы | 6130 px | 3035 px |
| экранов прокрутки | 6.8 | 3.4 |
| колонок | 1 | 2 |
| высота карточки | 898–941 px | 250–410 px |

Проверено также на 1280 (3.9 экрана, 2 колонки) и 390 (5.3 экрана, без горизонтального скролла).
Консоль чистая — 0 ошибок гидрации.

**Скриншоты переснял на продуктовые.** Вместо лендингов — рабочие экраны: дашборд FitLoyalty
(«Studio at a glance» с метриками удержания), схема процесса TripWeave, граф символов и
agent-config в codebase-memory-plus. Вписаны через `object-contain`, чтобы не резать кадр.

**About переписан по резюме.** Было три анонимные роли и `experienceYears`, выводивший 6 лет
вопреки резюме. Стало: Marswalk Media, Kicks Space, Menudget с реальными задачами; образование
(KNEU, University of Vienna, GoIT); языки; стек, сгруппированный как в резюме (CORE / RUNTIME /
DATA / TOOLS / AI WORKFLOW). Удалены шкалы навыков с процентами и `CLEARANCE: EXPERT`.

**«OFFLINE» убран.** Шапка, футер, контакты и LAB показывали красный `[●] OFFLINE` вне 9–18 — рекрутер
вечером видел «недоступен». Заменено на `OPEN TO WORK` (решение владельца — оставить везде,
уходит с текущего места через 6 недель), в LAB — на `RUNS: IN BROWSER`.

**Контакты стали пригодны для связи.** Раньше каналы были просто подписями `EMAIL / GITHUB /
LINKEDIN`. Теперь видны адреса (`iamzabolotnyi@gmail.com`, `github.com/InM1nd`, …) плюс блок
DETAILS с тем, что есть в резюме: город и языки. Исправлено расхождение: на contact
стоял `oleksandr.zabolotnyi1@gmail.com`, в резюме — `iamzabolotnyi@gmail.com`. **Нужно подтвердить,
какой из них рабочий.**

**Главная** получила строку о том, чем занимается, статус `OPEN TO WORK — VIENNA / REMOTE`,
прямые ссылки на почту/GitHub/LinkedIn и третью кнопку `GET IN TOUCH`. `SYSTEM INFO`
переименовано в `ABOUT ME`.

**`/applications` → `LAB`** — «BROWSER EXPERIMENTS … не клиентская работа, просто песочница».
Раздел больше не претендует на один уровень с проектами.

**Вес.** Портрет 5.6 MB → 172 KB. Из зависимостей ушли `three`, `@types/three`,
`@react-three/fiber`, `@react-three/drei`, `postprocessing`, `devicon`, `sass` (вместе с мёртвым
`sauce/Background`). Шрифтов было три семейства и 8 файлов woff2 — при том, что весь сайт
набран одним Share Tech Mono; осталось одно семейство и один файл.

Консоль чистая: 0 ошибок, 0 предупреждений на всех страницах.

Билд проходит, `tsc --noEmit` чистый.

### Tier 0 — осталось

1. **Выключить GitHub Pages в настройках репозитория** — код и workflow удалены, но сама Pages
   остаётся включённой на стороне GitHub, это делается руками.
2. **Поднять QUIZZLEY** — в резюме к нему привязано «300+ users», единственная метрика
   использования, и она сейчас ведёт на 404. Перевезти с умершего Railway на Vercel, туда же
   BOARDY. По SKELYA — либо вернуть домен, либо заменить ссылку на репозиторий/демо-видео.
3. **CV в PDF** — положить в `public/` и дать ссылку в шапке. Файла у меня нет, нужен от тебя.
4. **Кейсы от тебя** — обещанное портфолио с кейсами, которые делали с друзьями.

### Tier 1 — доверие
7. Добавить на сайт FitLoyalty, codebase-memory-plus, AppScanner, cyclop_enchanced — их там нет
   вообще. Два-три из них довести до полного кейса: задача, роль, стек, решение, измеримый
   результат, скриншоты, ссылки на живое и на репозиторий. cyclop (SwiftUI) стоит показать
   отдельно — он доказывает диапазон за пределами React.
8. Удалить шкалы навыков и `CLEARANCE: EXPERT`; вместо этого — стек списком и таймлайн
   с реальными компаниями из резюме (Marswalk Media, Kicks Space, Menudget). Починить
   `experienceYears`, чтобы сайт не спорил с резюме.
9. `/applications` — вынести в подраздел проектов или в «эксперименты», не в основную навигацию.

### Tier 2 — инженерный сигнал
10. Сжать медиа: `SANYA.jpg` до ~200 KB, выкинуть `LOGO_SMILE.mp4` и `LOGO-SMILE.gif` из git.
11. Удалить мёртвые компоненты и зависимости (`face-api.js`, `@react-three/postprocessing`,
    `gh-pages`, `GridScan`).
12. Уважать `prefers-reduced-motion`, ставить WebGL на паузу вне вьюпорта.
13. CI: `tsc --noEmit` + `next lint` + сборка на каждый PR. Lighthouse-бюджет.
14. Переписать README под реальность.

---

## 6. Открытые вопросы

1. Куда ведёт ссылка «Portfolio» в резюме? Если на `inm1nd.github.io/portfolio` — все уже
   отправленные отклики приводили на мёртвую Vite-сборку.
2. Что такое POLYBOT? В списке проектов и в резюме соответствия нет.
3. ~~`marswell.media` не резолвится~~ — это была опечатка. Работодатель — Marswalk Media,
   `marswalk.media` отвечает 200. Если в резюме тоже написано «Marswell», поправить там.
