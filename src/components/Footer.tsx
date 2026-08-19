import React from 'react';
import {
  Activity,
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  ArrowUp,
  Instagram,
  Twitter,
  Clock,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = uiTranslations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070D12] text-gray-400 border-t border-[#1D3442] pt-16 pb-24 md:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About & Tech Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#142632] border border-[#2A4354] flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#FF7A33]" />
              </div>
              <div>
                <span className="font-bold text-base text-white block">
                  {lang === 'ar' ? 'المهندس المعتمد' : 'Al-Mohendis'}
                </span>
                <span className="text-[10px] text-[#3FB8AF] font-mono-tech">
                  {lang === 'ar' ? 'كشف تسربات وعزل بالرياض' : 'Leak Detection & Waterproofing'}
                </span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-xs">
              {t.aboutDesc}
            </p>

            {/* Saudi Socials (Snapchat, Instagram, X, TikTok, WhatsApp) */}
            <div className="flex items-center gap-2 pt-2">
              {siteConfig.socials.snapchat && (
                <a
                  href={siteConfig.socials.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#142632] hover:bg-[#FFFC00] hover:text-black flex items-center justify-center text-gray-300 transition"
                  title="Snapchat"
                >
                  <span className="font-bold text-xs font-mono-tech">👻</span>
                </a>
              )}
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#142632] hover:bg-[#E1306C] hover:text-white flex items-center justify-center text-gray-300 transition"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.twitter && (
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#142632] hover:bg-black hover:text-white flex items-center justify-center text-gray-300 transition"
                  title="X (Twitter)"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#142632] hover:bg-[#25D366] hover:text-black flex items-center justify-center text-gray-300 transition"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services List */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">
              {t.servicesTitle}
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.services.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="hover:text-[#FF7A33] transition text-start"
                  >
                    {s.title[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-[#3FB8AF] transition">
                  {uiTranslations[lang].nav.services}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('how-it-works')} className="hover:text-[#3FB8AF] transition">
                  {uiTranslations[lang].nav.howItWorks}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('before-after')} className="hover:text-[#3FB8AF] transition">
                  {uiTranslations[lang].nav.beforeAfter}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('coverage')} className="hover:text-[#3FB8AF] transition">
                  {uiTranslations[lang].nav.coverage}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('faq')} className="hover:text-[#3FB8AF] transition">
                  {uiTranslations[lang].nav.faq}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-[#3FB8AF] transition">
                  {uiTranslations[lang].nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Accreditations */}
          <div className="space-y-3 font-mono-tech">
            <h4 className="font-bold text-white text-sm mb-4">
              {t.contactTitle}
            </h4>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4 text-[#FF7A33] shrink-0" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {siteConfig.whatsappDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4 text-[#3FB8AF] shrink-0" />
              <span>{siteConfig.address[lang]}</span>
            </div>
            <div className="pt-2 text-[11px] text-gray-500">
              CR: {siteConfig.crNumber} | VAT: {siteConfig.vatNumber}
            </div>
          </div>
        </div>

        {/* Bottom Bar & Scroll to Top */}
        <div className="pt-8 border-t border-[#1D3442] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-gray-500 text-center sm:text-start">
            {t.rights} {new Date().getFullYear()} {siteConfig.companyName[lang]}.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#142632] hover:bg-[#1D3442] text-gray-300 hover:text-white transition cursor-pointer font-mono-tech text-xs"
            aria-label="Scroll to top"
          >
            <span>{lang === 'ar' ? 'للأعلى' : 'Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
