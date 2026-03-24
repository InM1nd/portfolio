# 🚀 ПЛАН РЕДИЗАЙНА ПОРТФОЛИО: SCI-FI TIME MACHINE UI

## 📋 ОГЛАВЛЕНИЕ
1. [Визуальная концепция](#визуальная-концепция)
2. [Цветовая палитра](#цветовая-палитра)
3. [Типографика](#типографика)
4. [UI Компоненты](#ui-компоненты)
5. [Анимации и эффекты](#анимации-и-эффекты)
6. [Обработка изображений](#обработка-изображений)
7. [3D Фон редизайн](#3d-фон-редизайн)
8. [Адаптивность](#адаптивность)
9. [Технические требования](#технические-требования)
10. [Чеклист компонентов](#чеклист-компонентов)
11. [Этапы реализации](#этапы-реализации)

---

## 🎨 ВИЗУАЛЬНАЯ КОНЦЕПЦИЯ

### Референс
**Главный референс:** Time Machine UI by Sergio Butov

### Ключевые характеристики стиля:
- ✅ Монохромная зелено-бирюзовая цветовая палитра на черном фоне (как мониторы 1990-2000х)
- ✅ Технический, "машинный" интерфейс с координатами, системными данными
- ✅ Множество информационных панелей, графиков, индикаторов
- ✅ Ретро-футуристичная эстетика (CRT мониторы, векторная графика)
- ✅ Моноширинные технические шрифты
- ✅ Глитч-эффекты, сканлайны, шум как на старых мониторах
- ✅ Анимированные элементы интерфейса: прогресс-бары, мигающие индикаторы, бегущий текст

---

## 🌈 ЦВЕТОВАЯ ПАЛИТРА

### PRIMARY PALETTE
```css
--bg-primary: #000000;        /* Глубокий черный */
--bg-secondary: #050505;      /* Темный фон */
--ui-primary: #36A689;        /* Основной бирюзовый */
--ui-accent: #3FC89C;         /* Яркий акцент */
--ui-dark: #205030;           /* Темные элементы */
--ui-darker: #1a4029;         /* Очень темный зеленоватый */
--text-primary: #36A689;      /* Зеленый текст */
--text-secondary: #D9D9D9;    /* Светло-серый текст */
```

### ALTERNATIVE STATES
```css
--danger: #DF2E30;            /* Красный для алертов */
--warning: #B98C13;           /* Желто-оранжевый */
--inactive: #050905;          /* Неактивные элементы */
--inactive-alt: #0F1410;      /* Альтернативный неактивный */
```

### EFFECTS
```css
--glow: rgba(54, 166, 137, 0.3);      /* Glow эффект */
--glow-strong: rgba(54, 166, 137, 0.8); /* Сильный glow */
--scanlines: rgba(54, 166, 137, 0.05);  /* Сканлайны */
--crt-noise: rgba(54, 166, 137, 0.02);  /* CRT шум */
```

---

## 📐 ТИПОГРАФИКА

### Шрифты

#### PRIMARY FONT STACK
```css
/* Headers */
font-family: "Space Grotesk Expanded", "Orbitron", sans-serif;
font-weight: 400, 500, 700;
letter-spacing: 0.1em - 0.2em; /* Расширенный */

/* Body/Technical */
font-family: "Share Tech Mono", "Courier New", monospace;
font-weight: 400;
letter-spacing: 0.05em;

/* Labels/UI */
font-family: "Inter", "Space Grotesk", sans-serif;
font-weight: 300, 400, 500;
text-transform: uppercase; /* Для labels */
```

### Размеры (адаптивные)

| Элемент | Desktop | Mobile |
|---------|---------|--------|
| H1 | 72px (UPPERCASE, expanded) | 32px |
| H2 | 48px (UPPERCASE) | 24px |
| H3 | 32px (UPPERCASE) | 20px |
| Body | 16-20px (mono) | 14-16px |
| Labels | 12-14px (UPPERCASE, tracking wide) | 12px |

---

## 🧱 UI КОМПОНЕНТЫ И СТИЛИСТИКА

### 1. ОБЩИЙ LAYOUT СТИЛЬ

#### Aesthetic Guidelines
- Все интерфейсы должны выглядеть как "компьютерные терминалы 1990-2000х"
- Строгая сетка с техническими рамками вокруг блоков
- Множество маленьких деталей: координаты, метки, коды, индикаторы
- Угловатые формы (НЕ скругленные), прямые углы или скошенные (clip-path)
- Тонкие рамки (1-2px) зеленого цвета
- Тройные рамки для важных элементов

#### Border Styles

**STANDARD BORDER:**
```css
border: 1px solid #36A689;
box-shadow: 0 0 10px rgba(54, 166, 137, 0.3); /* glow эффект */
```

**EMPHASIZED BORDER:**
```css
border: 2px solid #36A689;
box-shadow: inset 0 0 20px rgba(54, 166, 137, 0.2);
```

**TRIPLE FRAME (для важных блоков):**
```css
/* Три вложенные рамки с отступами */
border: 2px solid #36A689; /* Внешняя */
/* Средняя: 1px solid rgba(54, 166, 137, 0.5) */
/* Внутренняя: 1px solid rgba(54, 166, 137, 0.3) */
```

#### Background Effects

**CRT SCANLINES:**
```css
background: repeating-linear-gradient(
  0deg,
  rgba(54, 166, 137, 0.03) 0px,
  transparent 1px,
  transparent 2px
);
```

**GRID PATTERN:**
```css
background-image: 
  linear-gradient(#36A689 1px, transparent 1px),
  linear-gradient(90deg, #36A689 1px, transparent 1px);
background-size: 50px 50px;
opacity: 0.05;
```

**VIGNETTE EFFECT:**
```css
box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.9);
```

---

### 2. НАВИГАЦИЯ (Header)

**Концепция:** Терминальная навигационная панель со статус-индикаторами

**Структура:**
```
┌───────────────────────────────────────────────────────────┐
│ [⌘] NEXUS TERMINAL                      [●] SYSTEM ONLINE │
├───────────────────────────────────────────────────────────┤
│  [PROJECTS]  [ABOUT]  [APPLICATIONS]  [CONTACT]          │
│  ◂ BACK      CODE: 487                    [===] 98%       │
└───────────────────────────────────────────────────────────┘
```

**Детали дизайна:**
- Fixed top navbar с backdrop-filter (blur) + темный фон
- Двойная рамка (border top/bottom 2px зеленый)
- Кнопки навигации: прямоугольные с outline, glow при hover
- Активная кнопка: заполненный фон #36A689, черный текст
- Правый угол: индикаторы системы (заряд, статус, время)
- Левый угол: логотип/иконка терминала
- Добавить "системные" элементы: текущую дату/время в формате кода
- Hover эффект: glitch animation + glow увеличение

**Пример кода:**
```jsx
<nav className="fixed top-0 w-full border-y-2 border-[#36A689] bg-black/90 backdrop-blur-md shadow-[0_0_20px_rgba(54,166,137,0.3)]">
  <div className="flex items-center justify-between px-6 py-3">
    <div className="flex items-center gap-4 font-mono text-xs">
      <span className="text-[#36A689]">[⌘]</span>
      <span className="tracking-widest">NEXUS TERMINAL</span>
    </div>
    <div className="flex gap-2">
      {navItems.map(item => (
        <button className="px-6 py-2 border border-[#36A689] hover:bg-[#36A689] hover:text-black transition-all uppercase tracking-wider text-sm">
          {item}
        </button>
      ))}
    </div>
    <div className="flex items-center gap-3 text-xs">
      <span className="text-[#36A689]">[●]</span>
      <span>ONLINE</span>
    </div>
  </div>
</nav>
```

---

### 3. HERO СЕКЦИЯ (Head Component)

**Концепция:** Экран загрузки системы + приветствие как терминальный вывод

**Структура:**
```
┌──────────────────────────────────────────────┐
│  NEXUS OS VERSION 2000                       │
│  LAST UPDATE: 25/06/2036                     │
│  ─────────────────────────────────────────   │
│  > INITIALIZING INTERFACE...                 │
│  > LOADING USER PROFILE...          [100%]   │
│  > CONNECTION ESTABLISHED           [████]   │
│                                              │
│  ╔════════════════════════════════════════╗  │
│  ║  HI. I'M ALEX.                        ║  │
│  ║  WEB DEVELOPER / INTERFACE ENGINEER    ║  │
│  ╚════════════════════════════════════════╝  │
│                                              │
│  [▸ EXPLORE PROJECTS]  [⚙ SYSTEM INFO]      │
└──────────────────────────────────────────────┘
```

**Детали дизайна:**
- Большая центральная панель с тройной рамкой
- Анимация печатающегося текста (typewriter effect) для приветствия
- Прогресс-бары загрузки (animated)
- Ascii-art элементы или векторная графика в углу
- Системная информация в верхних углах (OS version, date, coordinates)
- Мигающий курсор после текста
- Добавить "глобус" или "координатную сетку" как в референсе
- Кнопки в стиле терминала: [▸ TEXT]

**Анимации:**
- Появление текста по буквам (100-150ms delay)
- Мигающие индикаторы (blink animation)
- Плавное появление прогресс-баров
- Glitch эффект при загрузке страницы

---

### 4. PROJECTS СЕКЦИЯ

**Концепция:** Архив миссий/проектов в виде терминальной базы данных

**Структура каждого проекта:**
```
┌─ PROJECT_ID: 001 ──────────────────────────┐
│  CODE: DASHBOARD_ADMIN                     │
│  STATUS: [████████░░] 85% COMPLETE         │
│  ┌──────────────────────────────────────┐  │
│  │  [IMAGE: grayscale + green tint]      │  │
│  └──────────────────────────────────────┘  │
│  TITLE: Custom Admin Panel                 │
│  DESC: Real-time dashboard system          │
│  TECH: [React] [TypeScript] [Three.js]     │
│  [▸ ACCESS_FILE] [◇ DETAILS]               │
└────────────────────────────────────────────┘
```

**Layout Grid:**
- Grid 3 колонки (desktop) → 1 колонка (mobile)
- Каждая карточка - как "файл" в системе
- Изображения: grayscale + green overlay (как монитор)
- Hover: увеличение glow, появление дополнительной информации
- Метки "In Progress" как мигающий индикатор [◆ IN_PROGRESS]

**Карточки стиль:**
```css
.project-card {
  background: linear-gradient(135deg, #0a0a0a 0%, #050505 100%);
  border: 1px solid #36A689;
  box-shadow: 0 0 15px rgba(54, 166, 137, 0.2);
  position: relative;
  padding: 20px;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(54, 166, 137, 0.03) 0px,
    transparent 2px
  );
  pointer-events: none;
}

.project-image {
  filter: grayscale(100%) brightness(0.8);
  mix-blend-mode: screen;
}

.project-card:hover .project-image {
  filter: grayscale(0) brightness(1);
}
```

---

### 5. ABOUT СЕКЦИЯ (Team Component)

**Концепция:** Персональный профиль как досье оператора системы

**Структура:**
```
┌─ OPERATOR_PROFILE ─────────────────────────┐
│  USER_ID: InM1nd_487                       │
│  CLEARANCE_LEVEL: [████████████] EXPERT    │
│  ┌────────────┐  ┌─ SKILLS_MATRIX ──────┐  │
│  │  [PHOTO]   │  │ React:     [████░] 85%│  │
│  │  Alex      │  │ TypeScript:[█████] 90%│  │
│  │  Vienna,AT │  │ Three.js:  [███░░] 70%│  │
│  └────────────┘  └───────────────────────┘  │
│  ┌─ BIO_DATA ──────────────────────────┐    │
│  │  Web developer specializing in...   │    │
│  └──────────────────────────────────────┘    │
│  ┌─ TECH_STACK ────────────────────────┐    │
│  │  [HTML5] [SASS] [JS] [TS] [React]  │    │
│  └──────────────────────────────────────┘    │
└────────────────────────────────────────────┘
```

**Детали дизайна:**
- Две колонки: фото слева, информация справа
- Фото: clip-path hexagon или rectangle с двойной рамкой, green tint overlay
- Skill bars: прогресс-бары с процентами
- Технологии: иконки в стиле badges/chips с зеленой рамкой
- Добавить "системные метки": USER_ID, CLEARANCE_LEVEL, EXPERIENCE_YEARS
- Анимированные skill bars (заполняются при scroll)

---

### 6. APPLICATIONS СЕКЦИЯ

**Концепция:** Набор утилит/модулей системы

**Layout:**
```
┌─ SYSTEM_UTILITIES ─────────────────────────┐
│  SELECT_MODULE:                            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │ [WEATHER]│ │[TIC-TAC] │ │ [DRAWING]│   │
│  │  MODULE  │ │  MODULE  │ │  MODULE  │   │
│  └──────────┘ └──────────┘ └──────────┘   │
│                                            │
│  [ACTIVE_MODULE: WEATHER_SCANNER]          │
│  ┌──────────────────────────────────────┐  │
│  │  INPUT_LOCATION: [_____________]     │  │
│  │  [⚡ SCAN]                           │  │
│  │  ───────────────────────────────────  │  │
│  │  TEMP: 15°C  HUMIDITY: 65%          │  │
│  │  PRESSURE: 1013 hPa                 │  │
│  └──────────────────────────────────────┘  │
└────────────────────────────────────────────┘
```

**Каждое приложение:**
- Tabs навигация в стиле терминала
- Активный модуль: увеличенная подсветка
- Inputs: styled как терминальные поля с мигающим курсором
- Buttons: [⚡ ACTION] или [▸ EXECUTE]
- Weather: данные как sensor readouts с индикаторами
- TicTacToe: grid с border, X/O в зеленом цвете
- Drawing: canvas с toolbar в стиле терминала

**Weather карточки:**
```jsx
<div className="grid grid-cols-2 gap-4">
  <div className="border border-[#36A689] p-4">
    <div className="text-xs text-[#36A689] mb-2">TEMPERATURE</div>
    <div className="text-3xl font-mono">{temp}°C</div>
    <div className="mt-2 h-1 bg-[#36A689]/20">
      <div className="h-full bg-[#36A689]" style={{width: `${tempPercent}%`}} />
    </div>
  </div>
  {/* Repeat for other metrics */}
</div>
```

---

### 7. CONTACT ФОРМА

**Концепция:** Коммуникационный терминал / система сообщений

**Структура:**
```
┌─ COMMUNICATION_TERMINAL ───────────────────┐
│  ESTABLISH_CONNECTION                      │
│  ┌──────────────────────────────────────┐  │
│  │ SENDER_NAME:                         │  │
│  │ [____________________________]       │  │
│  │                                      │  │
│  │ SENDER_EMAIL:                        │  │
│  │ [____________________________]       │  │
│  │                                      │  │
│  │ MESSAGE_CONTENT:                     │  │
│  │ [____________________________]       │  │
│  │ [____________________________]       │  │
│  │ [____________________________]       │  │
│  │                                      │  │
│  │ [▸ TRANSMIT_MESSAGE]                 │  │
│  └──────────────────────────────────────┘  │
│  STATUS: [●] READY_TO_SEND                 │
└────────────────────────────────────────────┘
```

**Input fields:**
```css
input, textarea {
  background: transparent;
  border: none;
  border-bottom: 1px solid #36A689;
  color: #36A689;
  font-family: 'Share Tech Mono', monospace;
  padding: 8px 0;
  outline: none;
}

input:focus, textarea:focus {
  border-bottom: 2px solid #36A689;
  box-shadow: 0 2px 10px rgba(54, 166, 137, 0.3);
}

/* Animated cursor in inputs */
input::after {
  content: '▮';
  animation: blink 1s infinite;
}
```

---

### 8. FOOTER

**Концепция:** Системная информация и внешние ссылки

**Структура:**
```
┌────────────────────────────────────────────┐
│  SYSTEM_INFO                  EXTERNAL_LINKS│
│  © 2024 InM1nd               [GitHub]      │
│  NEXUS_OS v2000              [LinkedIn]    │
│  Last_Sync: 02/07/2026       [Instagram]   │
│  Status: [●] Operational     [Telegram]    │
│                                             │
│  NOW_PLAYING: [Spotify track info]          │
│  ██████░░░░ 2:45 / 4:32                    │
└─────────────────────────────────────────────┘
```

**Детали:**
- Две колонки: info слева, links справа
- Spotify widget: прогресс-бар в стиле терминала
- Ссылки: кнопки с иконками и hover glow
- Системный статус с индикатором

---

## 🎬 АНИМАЦИИ И ЭФФЕКТЫ

### 1. CRT Screen Effect
```css
@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.97; }
}

body::after {
  content: '';
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1) 0px,
    transparent 2px
  );
  pointer-events: none;
  animation: flicker 0.15s infinite;
}
```

### 2. Glitch Effect
```css
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

.glitch-hover:hover {
  animation: glitch 0.3s infinite;
}
```

### 3. Typing Effect
```jsx
// Typewriter animation with blinking cursor
const [displayText, setDisplayText] = useState('');
const fullText = "HI. I'M ALEX.";

useEffect(() => {
  let index = 0;
  const interval = setInterval(() => {
    setDisplayText(fullText.slice(0, index));
    index++;
    if (index > fullText.length) clearInterval(interval);
  }, 100);
  return () => clearInterval(interval);
}, []);

<h1 className="font-mono text-6xl">
  {displayText}<span className="animate-blink">▮</span>
</h1>
```

### 4. Loading Bars Animation
```css
@keyframes loading {
  0% { width: 0%; }
  100% { width: var(--progress); }
}

.progress-bar {
  animation: loading 2s ease-out forwards;
}
```

### 5. Glow Pulse
```css
@keyframes glow-pulse {
  0%, 100% { 
    box-shadow: 0 0 10px rgba(54, 166, 137, 0.3);
  }
  50% { 
    box-shadow: 0 0 30px rgba(54, 166, 137, 0.8);
  }
}

.active-element {
  animation: glow-pulse 2s infinite;
}
```

### 6. Scanline Movement
```css
@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

.scanline {
  position: fixed;
  width: 100%;
  height: 4px;
  background: linear-gradient(
    transparent,
    rgba(54, 166, 137, 0.5),
    transparent
  );
  animation: scanline 8s linear infinite;
}
```

### 7. Text Flicker
```css
@keyframes text-flicker {
  0%, 100% { opacity: 1; }
  41.99% { opacity: 1; }
  42% { opacity: 0; }
  43% { opacity: 0; }
  43.01% { opacity: 1; }
  47.99% { opacity: 1; }
  48% { opacity: 0; }
  48.01% { opacity: 1; }
}

.flicker-text {
  animation: text-flicker 3s infinite;
}
```

---

## 🖼️ ОБРАБОТКА ИЗОБРАЖЕНИЙ

### CSS Filters для "монохромного монитора" эффекта:
```css
.project-image {
  filter: 
    grayscale(100%)
    brightness(0.7)
    contrast(1.2)
    hue-rotate(120deg); /* Сдвиг в зеленый спектр */
  mix-blend-mode: screen;
  position: relative;
}

.project-image::after {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: #36A689;
  mix-blend-mode: multiply;
  opacity: 0.3;
}

.project-card:hover .project-image {
  filter: grayscale(0) brightness(1) contrast(1);
}
```

### Alternative: Duotone effect
```css
.duotone-green {
  filter: 
    grayscale(100%)
    sepia(100%)
    hue-rotate(60deg)
    saturate(400%)
    brightness(0.9);
}
```

---

## 🎮 3D ФОНА РЕДИЗАЙН

### Концепция
Вместо вращающихся сфер - координатная сетка / particle field

### Варианты

#### Option 1: Координатная сетка
```jsx
// Three.js grid с зелеными линиями
<GridHelper 
  args={[100, 50]} 
  position={[0, 0, 0]}
  material={new LineBasicMaterial({ color: 0x36A689, opacity: 0.2 })}
/>

// Добавить "глобус" или сферу с wireframe
<Sphere args={[5, 32, 32]}>
  <meshBasicMaterial 
    color="#36A689" 
    wireframe 
    transparent 
    opacity={0.3}
  />
</Sphere>
```

#### Option 2: Particle field
```jsx
// Множество маленьких particle с glow
const particles = useMemo(() => {
  const temp = [];
  for (let i = 0; i < 500; i++) {
    temp.push({
      position: [
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
        Math.random() * 100 - 50
      ]
    });
  }
  return temp;
}, []);

return (
  <Points>
    <pointsMaterial 
      size={0.1}
      color="#36A689"
      transparent
      opacity={0.6}
      sizeAttenuation
    />
  </Points>
);
```

#### Option 3: Комбинация
Grid + rotating wireframe objects

---

## 📱 АДАПТИВНОСТЬ

### Mobile версия

**Ключевые изменения:**
- Навигация: collapse в hamburger menu (styled как терминальное меню)
- Grid: 3 columns → 1 column
- Шрифты: уменьшить на 30-40%
- Сохранить все эффекты, но уменьшить интенсивность (performance)
- Footer: stack вертикально
- Touch-friendly кнопки: min-height 44px

**Hamburger menu:**
```
┌─ MENU ────────────┐
│  [●] SYSTEM_MENU  │
├───────────────────┤
│  ▸ PROJECTS       │
│  ▸ ABOUT          │
│  ▸ APPLICATIONS   │
│  ▸ CONTACT        │
│  ─────────────────│
│  [×] CLOSE        │
└───────────────────┘
```

---

## 🎼 ДОПОЛНИТЕЛЬНЫЕ UI ЭЛЕМЕНТЫ

### 1. Corner Decorations
```jsx
<!-- В углах экрана -->
<div className="fixed top-4 left-4 text-xs font-mono text-[#36A689]">
  <div>[⌘] SYSTEM STATUS</div>
  <div>LOAD: 78%</div>
  <div>TEMP: 42°C</div>
</div>

<div className="fixed top-4 right-4 text-xs font-mono text-[#36A689]">
  <div>TIME: {currentTime}</div>
  <div>USER: InM1nd</div>
  <div>ID: 487</div>
</div>
```

### 2. Progress Indicators
```jsx
<div className="flex items-center gap-2">
  <span>LOADING</span>
  <div className="flex gap-1">
    <span className="animate-pulse">█</span>
    <span className="animate-pulse delay-100">█</span>
    <span className="animate-pulse delay-200">█</span>
  </div>
</div>
```

### 3. Status Badges
```jsx
<span className="border border-[#36A689] px-3 py-1 text-xs uppercase tracking-wider">
  [●] ONLINE
</span>

<span className="border border-[#DF2E30] px-3 py-1 text-xs uppercase tracking-wider animate-pulse">
  [◆] IN PROGRESS
</span>
```

### 4. Dividers
```css
.terminal-divider {
  height: 1px;
  background: #36A689;
  box-shadow: 0 0 10px rgba(54, 166, 137, 0.5);
  margin: 2rem 0;
}

/* Или с текстом */
<div className="flex items-center gap-4">
  <div className="flex-1 h-px bg-[#36A689]"></div>
  <span className="text-xs text-[#36A689]">SECTION_BREAK</span>
  <div className="flex-1 h-px bg-[#36A689]"></div>
</div>
```

---

## 🔧 ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ

### Tailwind Config
```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        'terminal-green': '#36A689',
        'terminal-dark': '#050905',
        'terminal-danger': '#DF2E30',
        'terminal-warning': '#B98C13',
      },
      fontFamily: {
        'space': ['"Space Grotesk Expanded"', 'sans-serif'],
        'mono': ['"Share Tech Mono"', 'monospace'],
        'tech': ['"Inter"', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'glitch': 'glitch 0.3s infinite',
        'scanline': 'scanline 8s linear infinite',
        'glow-pulse': 'glow-pulse 2s infinite',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(54, 166, 137, 0.3)',
        'glow-lg': '0 0 40px rgba(54, 166, 137, 0.5)',
      },
    },
  },
};
```

### Fonts Import
```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');
```

---

## 📋 ЧЕКЛИСТ КОМПОНЕНТОВ ДЛЯ РЕДИЗАЙНА

### High Priority ✅
- [ ] Header/Navigation → Terminal style navbar
- [ ] Hero/Head → System boot screen
- [ ] Projects Grid → Archive cards с терминальными рамками
- [ ] Color scheme → Монохромная зелено-бирюзовая
- [ ] Typography → Моноширинные технические шрифты
- [ ] Buttons → Terminal style [▸ ACTION]
- [ ] Borders → Тонкие зеленые с glow
- [ ] Background effects → CRT scanlines + grid

### Medium Priority ⚠️
- [ ] About/Team → Operator profile досье
- [ ] Contact Form → Communication terminal
- [ ] Applications → System utilities modules
- [ ] Footer → System info panel
- [ ] Images → Duotone green filter
- [ ] Animations → Typing, glitch, glow effects

### Low Priority (но важно для атмосферы) 📌
- [ ] Corner decorations → System status indicators
- [ ] Loading states → Progress bars
- [ ] Hover effects → Glitch + glow
- [ ] 3D Background → Grid/particles в зеленом
- [ ] Sound effects (опционально) → Terminal beeps при клике

---

## 🚀 ЭТАПЫ РЕАЛИЗАЦИИ

### Phase 1: Foundation (день 1-2)
- [ ] Установка шрифтов
- [ ] Настройка цветовой палитры в Tailwind
- [ ] Создание базовых анимаций (blink, glitch, glow)
- [ ] Редизайн Header и Footer

### Phase 2: Core Components (день 3-4)
- [ ] Hero секция с typing effect
- [ ] Projects grid с новым стилем карточек
- [ ] About секция как operator profile
- [ ] Contact форма как terminal

### Phase 3: Details & Polish (день 5-6)
- [ ] Applications модули редизайн
- [ ] 3D background переделка
- [ ] Corner decorations
- [ ] Hover states и микроанимации
- [ ] CRT эффекты (scanlines, flicker)

### Phase 4: Optimization (день 7)
- [ ] Mobile адаптация
- [ ] Performance оптимизация
- [ ] Accessibility проверка
- [ ] Cross-browser тестирование

---

## 💡 ФИНАЛЬНЫЕ РЕКОМЕНДАЦИИ

### Консистентность
Все элементы должны выглядеть как части единой "операционной системы"

### Детали
Добавь много маленьких "системных" деталей (коды, координаты, метки)

### Анимации
Плавные, но с "техническим" характером (не слишком smooth)

### Performance
Оптимизируй эффекты для mobile (отключи тяжелые анимации)

### Accessibility
Сохрани контраст текста (зеленый на черном должен быть достаточно ярким)

### Typography
UPPERCASE для labels, monospace для важной информации

### Spacing
Четкая сетка, все выровнено по пикселям

### Interactive feedback
Каждое действие должно давать визуальный/звуковой фидбек

---

## 🎨 РЕФЕРЕНСЫ ДЛЯ ВДОХНОВЕНИЯ

### Основной
- **Time Machine UI by Sergio Butov** (Behance)

### Дополнительные
- Fallout Pip-Boy интерфейс (зеленый монохром)
- Alien (1979) - MOTHER компьютер интерфейс
- Robocop (1987) - HUD интерфейсы
- The Matrix (1999) - зеленый код
- Terminal/Command Line эстетика
- Retro CRT monitors 1990-2000s
- Sci-fi UI от Territory Studio

### Ключевые слова для поиска
- "retro futuristic UI"
- "terminal interface design"
- "CRT screen aesthetic"
- "monochrome green UI"
- "sci-fi HUD interface"
- "pip boy interface"
- "command line UI design"

---

## 📝 ЗАМЕТКИ

### Важные моменты
- Все цвета должны быть из палитры терминала
- Шрифты должны быть техническими и моноширинными
- Каждый элемент должен иметь "системный" вид
- Анимации должны быть плавными, но техническими
- Mobile версия должна сохранять атмосферу

### Проблемы для решения
- Performance на мобильных устройствах
- Контрастность текста для accessibility
- Баланс между деталями и читаемостью
- Оптимизация 3D эффектов

---

**Дата создания:** 2024  
**Версия:** 1.0  
**Статус:** В разработке


