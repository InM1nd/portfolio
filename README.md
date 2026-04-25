# Portfolio

Современное портфолио на Next.js с TypeScript, Tailwind CSS и shadcn/ui.

## 🚀 Технологии

- **Next.js 14** - React фреймворк с App Router
- **TypeScript** - Типизация
- **Tailwind CSS** - Утилитарный CSS фреймворк
- **shadcn/ui** - Компонентная библиотека на основе Radix UI
- **Three.js** - 3D графика и анимации
- **@react-three/fiber** - React рендерер для Three.js
- **EmailJS** - Отправка форм

## 📁 Структура проекта (Best Practices)

```
portfolio/
├── src/                          # Исходный код
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx              # Главная страница (Projects)
│   │   ├── about/                # Страница About
│   │   ├── applications/         # Страница Applications
│   │   ├── contact/              # Страница Contact
│   │   ├── layout.tsx            # Корневой layout
│   │   ├── not-found.tsx         # 404 страница
│   │   └── globals.css           # Глобальные стили (Tailwind)
│   ├── components/               # React компоненты
│   │   ├── Header/              # Навигация
│   │   ├── Footer/              # Футер
│   │   ├── Main/                # Основные секции
│   │   │   ├── projects/        # Проекты (TypeScript + Tailwind)
│   │   │   ├── team/            # О себе
│   │   │   ├── contact/         # Форма контакта
│   │   │   ├── head/            # Hero секция
│   │   │   └── applications/    # Интерактивные приложения
│   │   ├── sauce/               # Общие компоненты (Background)
│   │   └── ui/                  # shadcn/ui компоненты
│   ├── lib/                      # Утилиты
│   │   └── utils.ts              # Утилиты (cn для Tailwind)
│   └── img/                      # Статические изображения
└── public/                       # Публичные файлы
```

## 🛠️ Установка

```bash
npm install
```

## 🚀 Разработка

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📦 Сборка

```bash
npm run build
```

## 🚢 Деплой

Проект настроен для статического экспорта и деплоя на GitHub Pages:

```bash
npm run build
npm run deploy
```

## 📝 Роутинг

- `/portfolio` - Главная страница (Projects)
- `/portfolio/about` - О себе
- `/portfolio/applications` - Интерактивные приложения
- `/portfolio/contact` - Форма обратной связи

## ✨ Особенности

- ✅ Полностью на TypeScript
- ✅ Tailwind CSS для всех стилей
- ✅ shadcn/ui компоненты
- ✅ 3D фон с Three.js
- ✅ Адаптивный дизайн
- ✅ Оптимизированный bundle (~89 kB First Load JS)
- ✅ Статический экспорт для GitHub Pages
- ✅ Правильная структура src/ по best practices

## 📄 Лицензия

Private project
