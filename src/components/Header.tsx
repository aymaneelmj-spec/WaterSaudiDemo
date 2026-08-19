import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Globe,
  Activity,
  MapPin,
  Clock
} from 'lucide-react';
import { Language } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = uiTranslations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services', label: t.services },
    { id: 'how-it-works', label: t.howItWorks },
    { id: 'before-after', label: t.beforeAfter },
    { id: 'coverage', label: t.coverage },
    { id: 'testimonials', label: t.testimonials },
    { id: 'faq', label: t.faq },
    { id: 'contact', label: t.contact }
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Emergency & Live Dispatch Ribbon */}
      <div className="bg-[#070D12] text-gray-300 border-b border-[#1D3442] text-xs py-2 px-4 select-none">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#3FB8AF]">
              <span className="w-2 h-2 rounded-full bg-[#3FB8AF] animate-ping" />
              <span className="font-semibold">{lang === 'ar' ? 'فحص صوتي بدون تكسير بالرياض' : 'Acoustic Scan Without Demolition Riyadh'}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-gray-400 font-mono-tech">
              <Clock className="w-3.5 h-3.5 text-[#FF7A33]" />
              <span>{lang === 'ar' ? 'طوارئ 24 ساعة - استجابة 15 دقيقة' : '24/7 Emergency - 15m Dispatch'}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono-tech text-[11px]">
            <a
              href={`tel:${siteConfig.emergencyPhone}`}
              className="hidden sm:flex items-center gap-1 text-[#FF7A33] hover:underline font-bold"
            >
              <Phone className="w-3 h-3" />
              <span>{lang === 'ar' ? 'طوارئ: ' : 'Emergency: '} {siteConfig.phoneDisplay}</span>
            </a>
            <span className="hidden sm:inline text-gray-500">|</span>
            <span className="text-gray-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#3FB8AF]" />
              <span>{lang === 'ar' ? 'الرياض - حي الندوة' : 'Riyadh - Al Nadwa'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-sticky-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E1B23]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#1D3442]'
            : 'bg-[#0E1B23] py-3.5 border-b border-[#1D3442]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Logo & Technical Icon Badge */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1D3442] to-[#142632] border border-[#2A4354] flex items-center justify-center shadow-md group-hover:border-[#FF7A33] transition-colors shrink-0">
              <Activity className="w-5 h-5 text-[#FF7A33] group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#3FB8AF] border-2 border-[#0E1B23]" />
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base lg:text-lg tracking-tight text-white flex items-center gap-1.5 leading-tight">
                <span>{siteConfig.companyName[lang]}</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#3FB8AF] font-mono-tech">
                {lang === 'ar' ? 'نكتشف التسرب .. قبل حدوث المشكلة' : 'Zero Demolition Leak Detection'}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3 py-2 rounded-lg hover:text-white hover:bg-[#142632] transition cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs and Language Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Toggle Button */}
            <button
              id="btn-language-toggle"
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-2 rounded-xl bg-[#142632] hover:bg-[#1D3442] text-gray-200 text-xs font-medium border border-[#2A4354] transition cursor-pointer"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل للغة العربية'}
              aria-label="Toggle Language"
            >
              <Globe className="w-4 h-4 text-[#3FB8AF]" />
              <span className="font-mono-tech font-bold uppercase">{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            {/* Quick WhatsApp Button (Desktop/Tablet) */}
            <a
              id="btn-header-whatsapp"
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.defaultWhatsAppMessage[lang]
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 text-xs font-bold transition shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
            </a>

            {/* Direct Call Button - Visible on md/lg only, hidden on mobile */}
            <a
              id="btn-header-call"
              href={`tel:${siteConfig.phone}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#FF7A33] to-[#FF8F4D] hover:opacity-95 text-white text-xs font-bold shadow-lg shadow-[#FF7A33]/25 transition active:scale-95 shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>{t.emergencyCall} ({siteConfig.phoneDisplay})</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
