'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function ValueProposition() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="heading-lg text-white">
              {t('valueProposition.title')}
            </h2>
            
            <ul className="space-y-4">
              {[
                t('valueProposition.items.0'),
                t('valueProposition.items.1'),
                t('valueProposition.items.2'),
                t('valueProposition.items.3'),
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-secondary flex-shrink-0 mr-3 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-200 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
