/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Language } from './types';
import { siteConfig } from './data/siteConfig';

import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UrgentBanner } from './components/UrgentBanner';
import { ServicesGrid } from './components/ServicesGrid';
import { HowItWorks } from './components/HowItWorks';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { StatsCounter } from './components/StatsCounter';
import { CoverageAreas } from './components/CoverageAreas';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactQuoteForm } from './components/ContactQuoteForm';
import { MapHoursBlock } from './components/MapHoursBlock';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isLoading, setIsLoading] = useState(true);

  // Sync html lang and dir attributes dynamically
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title =
      lang === 'ar'
        ? 'شركة كشف تسربات المياه وعزل الأسطح بالرياض | فحص معتمد بدون تكسير'
        : 'Al-Mohendis | Certified Water Leak Detection & Waterproofing Riyadh';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <div className="min-h-screen bg-[#0E1B23] text-[#F4F6F5] relative selection:bg-[#FF7A33] selection:text-white">
      {/* 1. Intro Loading Screen (respects prefers-reduced-motion) */}
      <LoadingScreen lang={lang} onFinish={() => setIsLoading(false)} />

      {/* 2. Sticky Header */}
      <Header lang={lang} onToggleLang={toggleLanguage} />

      {/* 3. Hero Section (Split Layout + Live Sonar Scan Motif + Trust Strip) */}
      <Hero lang={lang} />

      {/* 4. Urgent Emergency Lead Conversion Banner */}
      <UrgentBanner lang={lang} />

      {/* 5. Services Grid (6 Cards with Scanline Hover & Detail Modals) */}
      <ServicesGrid lang={lang} />

      {/* 6. How It Works (Earned 6-Step Sequence) */}
      <HowItWorks lang={lang} />

      {/* 7. Before & After Gallery (Interactive Draggable Comparison Slider) */}
      <BeforeAfterGallery lang={lang} />

      {/* 8. Stats Counter (Animated Telemetry Count-up) */}
      <StatsCounter lang={lang} />

      {/* 9. Riyadh Coverage Areas (Districts Chip Cloud & Search) */}
      <CoverageAreas lang={lang} />

      {/* 10. Customer Testimonials (5-Star Verified Carousel) */}
      <Testimonials lang={lang} />

      {/* 11. FAQ Accordion */}
      <FaqSection lang={lang} />

      {/* 12. Contact + Quote Form (Direct WhatsApp generator) */}
      <ContactQuoteForm lang={lang} />

      {/* 13. Map + Live Business Hours + Office Info Block */}
      <MapHoursBlock lang={lang} />

      {/* 14. Footer */}
      <Footer lang={lang} />

      {/* 15. Mobile Sticky Bottom Action Bar */}
      <MobileStickyBar lang={lang} />

      {/* 16. Floating Desktop Pulsing WhatsApp Button (mirrored correctly in RTL / LTR) */}
      <div
        className={`hidden md:flex fixed bottom-6 z-40 ${
          lang === 'ar' ? 'left-6' : 'right-6'
        }`}
      >
        <a
          id="btn-floating-whatsapp"
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
            siteConfig.defaultWhatsAppMessage[lang]
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center gap-2 p-3.5 rounded-full bg-[#25D366] text-black font-extrabold shadow-2xl hover:scale-110 active:scale-95 transition duration-300"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle pulse ring around WhatsApp */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 pointer-events-none" />
          <MessageCircle className="w-6 h-6 fill-black text-black" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold px-0 group-hover:px-1">
            {lang === 'ar' ? 'تحدث مع المهندس' : 'Chat with Engineer'}
          </span>
        </a>
      </div>
    </div>
  );
}
