'use client';

import type { ReactNode } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

type WhyItem = {
  title: string;
  intro: string;
  bullets: string[];
  note?: string;
  icon: ReactNode;
};

export default function WhyWeDoIt() {
  const { t } = useTranslation();
  const subtitle = t('whyWeDoIt.subtitle');

  const items: WhyItem[] = [
    {
      title: t('whyWeDoIt.items.0.title'),
      intro: t('whyWeDoIt.items.0.intro'),
      bullets: [
        t('whyWeDoIt.items.0.bullets.0'),
        t('whyWeDoIt.items.0.bullets.1'),
        t('whyWeDoIt.items.0.bullets.2'),
      ],
      note: t('whyWeDoIt.items.0.note'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L8 21h8l-1.75-4M12 3v9m0 0l-3-3m3 3l3-3"
          />
        </svg>
      ),
    },
    {
      title: t('whyWeDoIt.items.1.title'),
      intro: t('whyWeDoIt.items.1.intro'),
      bullets: [
        t('whyWeDoIt.items.1.bullets.0'),
        t('whyWeDoIt.items.1.bullets.1'),
        t('whyWeDoIt.items.1.bullets.2'),
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2M7 7h10M7 11h6M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: t('whyWeDoIt.items.2.title'),
      intro: t('whyWeDoIt.items.2.intro'),
      bullets: [
        t('whyWeDoIt.items.2.bullets.0'),
        t('whyWeDoIt.items.2.bullets.1'),
        t('whyWeDoIt.items.2.bullets.2'),
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a6 6 0 016 6c0 1.9-.88 3.6-2.26 4.72L16 21H8l.26-4.28A5.98 5.98 0 016 12a6 6 0 016-6z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-we-do-it" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-white mb-4">{t('whyWeDoIt.title')}</h2>
          {subtitle && <p className="text-xl text-gray-300">{subtitle}</p>}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div key={index} className="card bg-white/10 backdrop-blur-lg border-white/20 hover:border-primary/30">
              <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>

              <p className="text-gray-200 mb-4">{item.intro}</p>

              <ul className="space-y-2 text-gray-300">
                {item.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {item.note && <p className="text-sm text-gray-400 mt-4 italic">{item.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

