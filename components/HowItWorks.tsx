'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      title: t('howItWorks.steps.receive.title'),
      subtitle: t('howItWorks.steps.receive.subtitle'),
      description: t('howItWorks.steps.receive.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
    },
    {
      number: '02',
      title: t('howItWorks.steps.label.title'),
      subtitle: t('howItWorks.steps.label.subtitle'),
      description: t('howItWorks.steps.label.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: '03',
      title: t('howItWorks.steps.return.title'),
      subtitle: t('howItWorks.steps.return.subtitle'),
      description: t('howItWorks.steps.return.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-white mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card h-full bg-white/10 backdrop-blur-lg border-white/20">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="text-5xl font-bold text-gray-400/30 leading-none">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                
                <p className="text-sm font-semibold text-secondary mb-3">
                  {step.subtitle}
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow between cards on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
