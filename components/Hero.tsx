'use client';

import { trackEvent } from '@/lib/analytics';
import { useTranslation } from '@/hooks/useTranslation';

export default function Hero() {
  const { t } = useTranslation();

  const handlePrimaryCTA = () => {
    trackEvent({ event: 'click_primary_cta', location: 'hero' });
    // Прокрутка к форме
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSecondaryCTA = () => {
    trackEvent({ event: 'click_secondary_cta', location: 'hero' });
    // В продакшене здесь будет открытие модалки или скачивание примера
    alert(t('common.sampleAlert'));
  };

  return (
    <section className="relative overflow-hidden pt-12 md:pt-16">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t('hero.badge')}
            </span>
          </div>
          
          <h1 className="heading-xl text-white">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={handlePrimaryCTA}
              className="btn-primary"
              aria-label={t('hero.primaryCTAAria')}
            >
              {t('hero.primaryCTA')}
            </button>
            {/* <button
              onClick={handleSecondaryCTA}
              className="btn-secondary"
              aria-label={t('hero.secondaryCTAAria')}
            >
              {t('hero.secondaryCTA')}
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
