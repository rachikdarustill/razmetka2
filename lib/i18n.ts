export type Locale = 'ru' | 'en' | 'ar';

export const locales: Locale[] = ['ru', 'en', 'ar'];

export const defaultLocale: Locale = 'ru';

export const localeNames: Record<Locale, string> = {
  ru: 'Русский',
  en: 'English',
  ar: 'العربية',
};

// RTL languages
export const rtlLocales: Locale[] = ['ar'];

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
