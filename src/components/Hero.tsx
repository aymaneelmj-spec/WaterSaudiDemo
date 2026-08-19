import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Award,
  Phone,
  MessageCircle,
  FileCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowDown
} from 'lucide-react';
import { Language } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';
import { RealInspectionCard } from './RealInspectionCard';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = uiTranslations[lang].hero;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-[#0E1B23] pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#FF7A33]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#3FB8AF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text & CTAs (Right column in RTL Arabic, Left in LTR English) */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Top Engineering Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142632] border border-[#2A4354] text-xs font-semibold text-[#3FB8AF] mb-5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF7A33]" />
              <span>{t.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.25] tracking-tight mb-4"
            >
              <span>{t.headingMain} </span>
              <span className="text-[#FF7A33] inline-block underline decoration-[#FF7A33]/40 underline-offset-8">
                {t.headingAccent}
              </span>
            </motion.h1>

            {/* Value Proposition Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl"
            >
              {t.subheading}
            </motion.p>

            {/* Two Primary CTAs + Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8"
            >
              {/* Request Free Inspection CTA */}
              <button
                id="btn-hero-quote"
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-[#FF7A33] to-[#FF8F4D] hover:opacity-95 text-white font-black text-base shadow-xl shadow-[#FF7A33]/25 transition active:scale-95 cursor-pointer"
              >
                <Zap className="w-5 h-5 fill-white" />
                <span>{t.ctaInspection}</span>
              </button>

              {/* Instant WhatsApp CTA */}
              <a
                id="btn-hero-whatsapp"
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.defaultWhatsAppMessage[lang]
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] font-bold text-base border border-[#25D366]/30 transition shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.ctaWhatsApp}</span>
              </a>

              {/* Emergency Call Mini Pill */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="hidden xl:inline-flex items-center gap-2 py-3.5 px-4 rounded-xl bg-[#142632] hover:bg-[#1D3442] text-gray-300 font-mono-tech text-xs border border-[#2A4354] transition"
              >
                <Phone className="w-4 h-4 text-[#FF7A33]" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
            </motion.div>

            {/* Quick Guarantees Checklist */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-lg text-xs font-semibold text-gray-300">
              <div className="flex items-center gap-2 bg-[#0A141A]/70 px-3 py-2 rounded-lg border border-[#1D3442]">
                <CheckCircle2 className="w-4 h-4 text-[#4CAF7D] shrink-0" />
                <span>{lang === 'ar' ? 'فحص بجهاز السونار الألماني' : 'German Sonar Scanner'}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0A141A]/70 px-3 py-2 rounded-lg border border-[#1D3442]">
                <CheckCircle2 className="w-4 h-4 text-[#4CAF7D] shrink-0" />
                <span>{lang === 'ar' ? 'تقرير معتمد لشركة المياه (NWC)' : 'NWC Certified Report'}</span>
              </div>
            </div>
          </div>

          {/* Certified Technical Inspection Hub (Authentic Real Photo & Live Field Dispatch) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <RealInspectionCard lang={lang} />
          </div>
        </div>

        {/* Trust Strip Beneath Hero */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-[#1D3442] grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="flex items-center gap-3 bg-[#142632]/60 p-4 rounded-xl border border-[#2A4354]/60">
            <div className="w-10 h-10 rounded-lg bg-[#3FB8AF]/15 flex items-center justify-center text-[#3FB8AF] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-tight">{t.trustBadge1}</div>
              <div className="text-[11px] text-gray-400 font-mono-tech">{siteConfig.completedJobsCount} {lang === 'ar' ? 'مشروع' : 'Jobs'}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#142632]/60 p-4 rounded-xl border border-[#2A4354]/60">
            <div className="w-10 h-10 rounded-lg bg-[#FF7A33]/15 flex items-center justify-center text-[#FF7A33] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-tight">{t.trustBadge2}</div>
              <div className="text-[11px] text-gray-400">{lang === 'ar' ? 'حماية الديكور والأرضيات' : 'Protects Tiles & Walls'}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#142632]/60 p-4 rounded-xl border border-[#2A4354]/60">
            <div className="w-10 h-10 rounded-lg bg-[#4CAF7D]/15 flex items-center justify-center text-[#4CAF7D] shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-tight">{t.trustBadge3}</div>
              <div className="text-[11px] text-gray-400">{lang === 'ar' ? 'لتخفيض الفواتير فوراً' : 'Instant Bill Dispute'}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#142632]/60 p-4 rounded-xl border border-[#2A4354]/60">
            <div className="w-10 h-10 rounded-lg bg-[#3FB8AF]/15 flex items-center justify-center text-[#3FB8AF] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-tight">{t.trustBadge4}</div>
              <div className="text-[11px] text-gray-400">{lang === 'ar' ? 'شهادة ضمان مختومة' : 'Stamped Certificate'}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
