'use client';

import LanguageSwitcher from './LanguageSwitcher';
import { useLocale } from '@/contexts/LocaleContext';

export default function Header() {
  const { locale, setLocale, isRTL } = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="container-custom">
        <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} justify-between h-16 md:h-20`}>
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-white">Leoni</h1>
          </div>
          <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />
        </div>
      </div>
    </header>
  );
}
