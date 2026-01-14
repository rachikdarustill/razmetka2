# Leoni B2B Competency Labeling Landing

Одностраничный лендинг для B2B-партнёров, который объясняет сервис разметки образовательного контента по профессионально важным компетенциям.

## Технологический стек

- **Next.js 14** - React фреймворк с App Router
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **React Hooks** - управление состоянием

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена (статический экспорт)
npm run build

# Запуск продакшен версии (только для локального тестирования)
npm start
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## Деплой на GitHub Pages

Проект настроен для автоматического деплоя на GitHub Pages из ветки `main`.

### Предварительные требования

1. Репозиторий должен быть на GitHub
2. В настройках репозитория (Settings → Pages) должен быть включен GitHub Pages с источником "GitHub Actions"

### Автоматический деплой

При каждом пуше в ветку `main` автоматически запускается GitHub Actions workflow, который:
1. Собирает статический сайт
2. Деплоит его на GitHub Pages

### Настройка переменных окружения (опционально)

Если репозиторий размещен не в корне домена GitHub Pages (например, `username.github.io/repository-name`), basePath настраивается автоматически через workflow.

Для кастомного домена можно установить переменные окружения в GitHub Actions:
- `NEXT_PUBLIC_BASE_URL` - базовый URL сайта
- `NEXT_PUBLIC_BASE_PATH` - базовый путь (для подпапок)
- `NEXT_PUBLIC_API_ENDPOINT` - внешний API endpoint для формы (опционально)

### Важные замечания

⚠️ **API Routes не работают в статическом экспорте**

Для GitHub Pages проект использует статический экспорт Next.js. Это означает:
- API route `/api/lead` **не работает** в продакшене
- Форма контактов использует `mailto:` как fallback, если не настроен внешний API endpoint
- Для обработки формы в продакшене используйте:
  - Внешний API сервис (например, Formspree, EmailJS)
  - Serverless функции (Vercel Functions, Netlify Functions)
  - Собственный backend API

Чтобы использовать внешний API для формы, установите переменную окружения `NEXT_PUBLIC_API_ENDPOINT` в GitHub Actions workflow.

## Структура проекта

```
├── app/
│   ├── api/lead/         # API endpoint для обработки лидов
│   ├── layout.tsx        # Основной layout с SEO метатегами
│   ├── page.tsx          # Главная страница
│   ├── globals.css       # Глобальные стили
│   └── sitemap.ts        # Генерация sitemap.xml
├── components/           # React компоненты для блоков лендинга
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Outcomes.tsx
│   ├── Integrations.tsx
│   ├── Security.tsx
│   ├── FAQ.tsx
│   └── ContactForm.tsx
├── lib/
│   └── analytics.ts      # Утилита для трекинга событий
└── public/              # Статические файлы
```

## Блоки лендинга

1. **Hero** - Заголовок с 2 CTA кнопками и визуализацией процесса
2. **How It Works** - 3-шаговый процесс (Receive → Label → Return)
3. **Outcomes** - 6 карточек с преимуществами для партнёра
4. **Integrations** - Каналы интеграции и примеры API
5. **Security & SLA** - Безопасность данных и уровень обслуживания
6. **FAQ** - Часто задаваемые вопросы с аккордеоном
7. **Contact Form** - Форма для заявки на демо

## Функциональность

### SEO
- Метатеги title, description, keywords
- Open Graph теги для соцсетей
- Twitter Card теги
- Автогенерация sitemap.xml
- robots.txt
- Semantic HTML5

### Аналитика
События для трекинга:
- `click_primary_cta` - клик по основной CTA кнопке
- `click_secondary_cta` - клик по кнопке "Пример разметки"
- `submit_form` - отправка формы

### API
`POST /api/lead` - приём заявок от партнёров

**Request:**
```json
{
  "name": "Иван Иванов",
  "company": "Компания",
  "email": "email@company.com",
  "catalogSize": "1000-10000",
  "message": "Сообщение"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lead submitted successfully",
  "leadId": "LEAD-..."
}
```

### Адаптивность
Поддерживаемые разрешения:
- 360px (mobile)
- 768px (tablet)
- 1024px (laptop)
- 1440px+ (desktop)

### Доступность (a11y)
- Корректные ARIA атрибуты
- Tab навигация
- Контрастность текста
- Семантические HTML теги

## Интеграции (для продакшена)

### CRM
В `app/api/lead/route.ts` добавить интеграцию с:
- HubSpot
- Salesforce
- Pipedrive
- или другой CRM системой

### Аналитика
В `lib/analytics.ts` настроить:
- Google Analytics 4
- Yandex Metrika
- Amplitude
- или другие системы аналитики

### Email
Настроить отправку уведомлений команде продаж при новых лидах

## Производительность

Целевые метрики:
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

## Требования к контенту

Для запуска в продакшен необходимо добавить:
- Логотип Leoni (`/public/logo.svg`)
- OG изображение (`/public/og-image.jpg`) - 1200x630px
- Favicon (`/public/favicon.ico`)
- Реальные контакты и ссылки

## Лицензия

Proprietary - все права принадлежат Leoni
