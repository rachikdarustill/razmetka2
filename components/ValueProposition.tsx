'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function ValueProposition() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Value bullets */}
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
          
          {/* Right column: Visual process */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
              <div className="space-y-6">
                {/* Process visualization */}
                {[
                  { 
                    step: '1', 
                    title: t('valueProposition.process.receive.title'), 
                    desc: t('valueProposition.process.receive.desc'),
                    color: 'bg-blue-500'
                  },
                  { 
                    step: '2', 
                    title: t('valueProposition.process.label.title'), 
                    desc: t('valueProposition.process.label.desc'),
                    color: 'bg-secondary'
                  },
                  { 
                    step: '3', 
                    title: t('valueProposition.process.return.title'), 
                    desc: t('valueProposition.process.return.desc'),
                    color: 'bg-accent'
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center space-x-4">
                      <div className={`${item.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white">{item.title}</h3>
                        <p className="text-sm text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                    {index < 2 && (
                      <div className="flex justify-start mt-2 mb-2 ml-3">
                        <svg className="w-6 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
