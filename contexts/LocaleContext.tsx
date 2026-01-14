'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, defaultLocale, isRTL } from '@/lib/i18n';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isRTL: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    // Load locale from localStorage or cookie on mount
    const savedLocale = localStorage.getItem('locale') as Locale;
    const cookieLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('locale='))
      ?.split('=')[1] as Locale;
    
    const localeToUse = savedLocale || cookieLocale;
    if (localeToUse && ['ru', 'en', 'ar'].includes(localeToUse)) {
      setLocaleState(localeToUse);
      // Set cookie if not already set
      if (!cookieLocale) {
        document.cookie = `locale=${localeToUse}; path=/; max-age=31536000; SameSite=Lax`;
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    
    // Set cookie for server-side metadata generation
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = newLocale;
    document.documentElement.dir = isRTL(newLocale) ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    // Update HTML attributes when locale changes
    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL(locale) ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isRTL: isRTL(locale) }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
