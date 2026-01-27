'use client';

import Hero from '@/components/Hero';
import WhyWeDoIt from '@/components/WhyWeDoIt';
import ValueProposition from '@/components/ValueProposition';
import HowItWorks from '@/components/HowItWorks';
import Outcomes from '@/components/Outcomes';
import Integrations from '@/components/Integrations';
import Security from '@/components/Security';
import Technologies from '@/components/Technologies';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen relative pt-16 md:pt-20">
      <Hero />
      <WhyWeDoIt />
      <ValueProposition />
      <HowItWorks />
      <Outcomes />
      <Integrations />
      <Security />
      <Technologies />
      <FAQ />
      <ContactForm />
      
      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm text-gray-300 py-12 border-t border-white/10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Leoni</h3>
              <p className="text-sm">
                {t('footer.description')}
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.navigation.title')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#why-we-do-it" className="hover:text-white transition-colors">{t('footer.navigation.whyWeDoIt')}</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">{t('footer.navigation.howItWorks')}</a></li>
                <li><a href="#outcomes" className="hover:text-white transition-colors">{t('footer.navigation.outcomes')}</a></li>
                <li><a href="#integrations" className="hover:text-white transition-colors">{t('footer.navigation.integrations')}</a></li>
                <li><a href="#technologies" className="hover:text-white transition-colors">{t('footer.navigation.technologies')}</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">{t('footer.navigation.faq')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.contacts.title')}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:services@leoni.land" className="hover:text-white transition-colors">
                    services@leoni.land
                  </a>
                </li>
                <li>
                  <a href="https://t.me/darustill" className="hover:text-white transition-colors">
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Leoni. {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
