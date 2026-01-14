'use client';

import { useState, FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';
import { useTranslation } from '@/hooks/useTranslation';

interface FormData {
  name: string;
  company: string;
  email: string;
  catalogSize: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    catalogSize: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    trackEvent({ 
      event: 'submit_form', 
      location: 'contact_form',
      company: formData.company,
      catalogSize: formData.catalogSize,
    });

    try {
      // Для статического экспорта используем внешний API endpoint
      // Если не задан, используем mailto как fallback
      const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT || '/api/lead';
      
      // Проверяем, доступен ли API endpoint (только для разработки)
      if (apiEndpoint === '/api/lead' && typeof window !== 'undefined') {
        // В статическом экспорте API route недоступен
        // Используем mailto как fallback
        const subject = encodeURIComponent(`Новая заявка от ${formData.company}`);
        const body = encodeURIComponent(
          `Имя: ${formData.name}\n` +
          `Компания: ${formData.company}\n` +
          `Email: ${formData.email}\n` +
          `Размер каталога: ${formData.catalogSize || 'Не указан'}\n` +
          `Сообщение: ${formData.message || 'Не указано'}`
        );
        window.location.href = `mailto:services@leoni.land?subject=${subject}&body=${body}`;
        
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          catalogSize: '',
          message: '',
        });
        
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        // Используем внешний API endpoint
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({
            name: '',
            company: '',
            email: '',
            catalogSize: '',
            message: '',
          });
          
          setTimeout(() => setSubmitStatus('idle'), 5000);
        } else {
          throw new Error('Failed to submit form');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact-form" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-white mb-4">
              {t('contactForm.title')}
            </h2>
            <p className="text-xl text-gray-300">
              {t('contactForm.subtitle')}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    {t('contactForm.fields.name')} <span className="text-red-400">{t('contactForm.required')}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder={t('contactForm.placeholders.name')}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                    {t('contactForm.fields.company')} <span className="text-red-400">{t('contactForm.required')}</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder={t('contactForm.placeholders.company')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  {t('contactForm.fields.email')} <span className="text-red-400">{t('contactForm.required')}</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder={t('contactForm.placeholders.email')}
                />
              </div>

              <div>
                <label htmlFor="catalogSize" className="block text-sm font-semibold text-white mb-2">
                  {t('contactForm.fields.catalogSize')}
                </label>
                <select
                  id="catalogSize"
                  name="catalogSize"
                  value={formData.catalogSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                >
                  <option value="" className="bg-gray-900 text-white">{t('contactForm.catalogSizeOptions.select')}</option>
                  <option value="< 100" className="bg-gray-900 text-white">{t('contactForm.catalogSizeOptions.less100')}</option>
                  <option value="100-1000" className="bg-gray-900 text-white">{t('contactForm.catalogSizeOptions.100to1000')}</option>
                  <option value="1000-10000" className="bg-gray-900 text-white">{t('contactForm.catalogSizeOptions.1000to10000')}</option>
                  <option value="> 10000" className="bg-gray-900 text-white">{t('contactForm.catalogSizeOptions.more10000')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  {t('contactForm.fields.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                  placeholder={t('contactForm.placeholders.message')}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-400/50 backdrop-blur-sm flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-green-300">{t('contactForm.success.title')}</h4>
                    <p className="text-sm text-green-200">{t('contactForm.success.message')}</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-400/50 backdrop-blur-sm flex items-start space-x-3">
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-red-300">{t('contactForm.error.title')}</h4>
                    <p className="text-sm text-red-200">{t('contactForm.error.message')}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg py-4"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contactForm.submitting')}
                  </span>
                ) : (
                  t('contactForm.submit')
                )}
              </button>

              <p className="text-sm text-gray-400 text-center">
                {t('contactForm.privacy')}
              </p>
            </form>

            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p className="text-sm text-gray-300 mb-3">{t('contactForm.alternative')}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:services@leoni.land" className="text-primary hover:text-blue-400 font-semibold transition-colors">
                  services@leoni.land
                </a>
                <span className="text-gray-500">|</span>
                <a href="https://t.me/darustill" className="text-primary hover:text-blue-400 font-semibold transition-colors">
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
