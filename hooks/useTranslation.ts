'use client';

import { useLocale } from '@/contexts/LocaleContext';
import { t as translate } from '@/lib/translations';

export function useTranslation() {
  const { locale } = useLocale();

  const t = (key: string): string => {
    return translate(locale, key);
  };

  return { t, locale };
}
