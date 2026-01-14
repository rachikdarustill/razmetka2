import { Locale, defaultLocale } from './i18n';
import ruTranslations from '@/translations/ru.json';
import enTranslations from '@/translations/en.json';
import arTranslations from '@/translations/ar.json';

export type TranslationKey = string;

const translations = {
  ru: ruTranslations,
  en: enTranslations,
  ar: arTranslations,
};

export function getTranslations(locale: Locale = defaultLocale) {
  return translations[locale] || translations[defaultLocale];
}

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale] || translations[defaultLocale];
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      // Handle array indices
      if (Array.isArray(value)) {
        const index = parseInt(k, 10);
        if (!isNaN(index) && index >= 0 && index < value.length) {
          value = value[index];
        } else {
          // Fallback to default locale
          value = translations[defaultLocale];
          for (const fallbackKey of keys) {
            if (value && typeof value === 'object') {
              if (Array.isArray(value)) {
                const fallbackIndex = parseInt(fallbackKey, 10);
                if (!isNaN(fallbackIndex) && fallbackIndex >= 0 && fallbackIndex < value.length) {
                  value = value[fallbackIndex];
                } else {
                  return key;
                }
              } else if (fallbackKey in value) {
                value = value[fallbackKey];
              } else {
                return key;
              }
            } else {
              return key;
            }
          }
          return typeof value === 'string' ? value : key;
        }
      } else if (k in value) {
        value = value[k];
      } else {
        // Fallback to default locale
        value = translations[defaultLocale];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object') {
            if (Array.isArray(value)) {
              const fallbackIndex = parseInt(fallbackKey, 10);
              if (!isNaN(fallbackIndex) && fallbackIndex >= 0 && fallbackIndex < value.length) {
                value = value[fallbackIndex];
              } else {
                return key;
              }
            } else if (fallbackKey in value) {
              value = value[fallbackKey];
            } else {
              return key;
            }
          } else {
            return key;
          }
        }
        return typeof value === 'string' ? value : key;
      }
    } else {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}
