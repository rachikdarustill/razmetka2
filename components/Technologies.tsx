'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function Technologies() {
  const { t } = useTranslation();

  const technologies = [
    { name: t('technologies.tech.0.name'), description: t('technologies.tech.0.description') },
    { name: t('technologies.tech.1.name'), description: t('technologies.tech.1.description') },
    { name: t('technologies.tech.2.name'), description: t('technologies.tech.2.description') },
    { name: t('technologies.tech.3.name'), description: t('technologies.tech.3.description') },
    { name: t('technologies.tech.4.name'), description: t('technologies.tech.4.description') },
    { name: t('technologies.tech.5.name'), description: t('technologies.tech.5.description') },
  ].filter((tech) => tech.name.trim().length > 0);

  const aiModels = [
    { name: t('technologies.aiModels.0.name'), description: t('technologies.aiModels.0.description') },
    { name: t('technologies.aiModels.1.name'), description: t('technologies.aiModels.1.description') },
    { name: t('technologies.aiModels.2.name'), description: t('technologies.aiModels.2.description') },
    { name: t('technologies.aiModels.3.name'), description: t('technologies.aiModels.3.description') },
  ].filter((model) => model.name.trim().length > 0);

  return (
    <section id="technologies" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-white mb-4">
            {t('technologies.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('technologies.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{t('technologies.techTitle')}</h3>
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-start space-x-4 p-5 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{tech.name}</h4>
                    <p className="text-sm text-gray-300">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Models */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{t('technologies.aiTitle')}</h3>
            <div className="space-y-4">
              {aiModels.map((model, index) => (
                <div key={index} className="flex items-start space-x-4 p-5 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:border-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{model.name}</h4>
                    <p className="text-sm text-gray-300">{model.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
