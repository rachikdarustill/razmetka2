'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function Integrations() {
  const { t } = useTranslation();

  return (
    <section id="integrations" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-white mb-4">
            {t('integrations.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('integrations.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Channels */}
          <div className="space-y-8 min-w-0">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">{t('integrations.inputChannels.title')}</h3>
              <div className="space-y-4">
                {[
                  { name: t('integrations.inputChannels.items.0.name'), desc: t('integrations.inputChannels.items.0.desc'), badge: t('integrations.inputChannels.items.0.badge') },
                  { name: t('integrations.inputChannels.items.1.name'), desc: t('integrations.inputChannels.items.1.desc') },
                  { name: t('integrations.inputChannels.items.2.name'), desc: t('integrations.inputChannels.items.2.desc') },
                  { name: t('integrations.inputChannels.items.3.name'), desc: t('integrations.inputChannels.items.3.desc') },
                ].map((channel, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="font-bold text-white break-words">{channel.name}</h4>
                        {channel.badge && (
                          <span className="text-xs font-semibold text-secondary bg-secondary/20 px-2 py-0.5 rounded flex-shrink-0">
                            {channel.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-300 break-words">{channel.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('integrations.outputChannels.title')}</h3>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 backdrop-blur-sm">
                  <p className="font-semibold text-white break-words">{t('integrations.outputChannels.api')}</p>
                  <p className="text-sm text-gray-300 mt-1 break-words">{t('integrations.outputChannels.apiDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Data Model Example */}
          <div className="min-w-0">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">{t('integrations.dataModel.title')}</h3>
            
            <div className="bg-gray-900 rounded-xl p-4 sm:p-6 text-xs sm:text-sm overflow-x-auto">
              <div className="text-gray-400 mb-2">{t('integrations.dataModel.inputExample')}</div>
              <pre className="text-gray-100 font-mono whitespace-pre overflow-x-auto">
{`{
  "content_item": {
    "id": "course_123",
    "title": "Основы Python",
    "description": "Курс по базовым...",
    "metadata": {
      "duration": "20h",
      "level": "beginner"
    },
    "url": "https://..."
  }
}`}
              </pre>
              
              <div className="border-t border-gray-700 my-4"></div>
              
              <div className="text-gray-400 mb-2">{t('integrations.dataModel.outputExample')}</div>
              <pre className="text-gray-100 font-mono whitespace-pre overflow-x-auto">
{`{
  "content_item": {
    "id": "course_123",
    "title": "Основы Python",
    "competencies": [
      {
        "name": "Программирование",
        "confidence": 0.95
      },
      {
        "name": "Алгоритмическое мышление",
        "confidence": 0.88
      },
      {
        "name": "Решение задач",
        "confidence": 0.82
      }
    ]
  }
}`}
              </pre>
            </div>
            
            {/* <p className="text-sm text-gray-400 mt-4 italic break-words">
              {t('integrations.dataModel.note')}
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
