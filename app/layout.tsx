import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import { LocaleProvider } from "@/contexts/LocaleContext";
import Header from "@/components/Header";
import { Locale, defaultLocale } from "@/lib/i18n";
import { getTranslations } from "@/lib/translations";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

const localeMap: Record<Locale, string> = {
  ru: "ru_RU",
  en: "en_US",
  ar: "ar_SA",
};

// Для статического экспорта используем дефолтную локаль
// Реальная локаль будет управляться на клиенте через LocaleProvider
export function generateMetadata(): Metadata {
  const locale = defaultLocale;
  const t = getTranslations(locale);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://leoni.example.com";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return {
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: t.metadata.keywords.split(', '),
    authors: [{ name: "Leoni" }],
    alternates: {
      canonical: baseUrl,
      languages: {
        'ru': `${baseUrl}${basePath}?lang=ru`,
        'en': `${baseUrl}${basePath}?lang=en`,
        'ar': `${baseUrl}${basePath}?lang=ar`,
      },
    },
    openGraph: {
      type: "website",
      locale: localeMap[locale],
      url: baseUrl,
      title: t.metadata.ogTitle,
      description: t.metadata.ogDescription,
      siteName: "Leoni",
      images: [
        {
          url: `${basePath}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: t.metadata.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.ogTitle,
      description: t.metadata.ogDescription,
      images: [`${basePath}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Для статического экспорта используем дефолтную локаль
  // Реальная локаль будет установлена на клиенте через LocaleProvider
  const locale = defaultLocale;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://leoni.example.com";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <link rel="alternate" hrefLang="ru" href={`${baseUrl}${basePath}?lang=ru`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}${basePath}?lang=en`} />
        <link rel="alternate" hrefLang="ar" href={`${baseUrl}${basePath}?lang=ar`} />
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      </head>
      <body className={inter.className}>
        <LocaleProvider>
          <AnimatedBackground />
          <Header />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
