'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function Security() {
  const { t } = useTranslation();

  const securityFeatures = [
    {
      title: t('security.features.0.title'),
      description: t('security.features.0.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: t('security.features.1.title'),
      description: t('security.features.1.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: t('security.features.2.title'),
      description: t('security.features.2.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      title: t('security.features.3.title'),
      description: t('security.features.3.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  const slaItems = [
    { label: t('security.slaItems.0.label'), value: t('security.slaItems.0.value') },
    { label: t('security.slaItems.1.label'), value: t('security.slaItems.1.value') },
    { label: t('security.slaItems.2.label'), value: t('security.slaItems.2.value') },
    { label: t('security.slaItems.3.label'), value: t('security.slaItems.3.value') },
  ];

  return (
    <section id="security" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-white mb-4">
            {t('security.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('security.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Security features */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{t('security.securityTitle')}</h3>
            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-5 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SLA */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{t('security.slaTitle')}</h3>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
              <div className="divide-y divide-white/10">
                {slaItems.map((item, index) => (
                  <div key={index} className="p-5 hover:bg-white/5 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white">{item.label}</span>
                      <span className="text-primary font-medium">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-lg bg-blue-500/10 border border-blue-400/30 backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('security.customConditions.title')}</h4>
                  <p className="text-sm text-gray-300">
                    {t('security.customConditions.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
