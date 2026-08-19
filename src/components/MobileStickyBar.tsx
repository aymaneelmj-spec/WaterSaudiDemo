import React from 'react';
import { Phone, MessageCircle, Zap } from 'lucide-react';
import { Language } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';

interface MobileStickyBarProps {
  lang: Language;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ lang }) => {
  const t = uiTranslations[lang].mobileBar;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      id="mobile-sticky-action-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A141A]/95 backdrop-blur-lg border-t border-[#1D3442] p-2.5 shadow-2xl safe-area-pb"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Direct Call */}
        <a
          id="btn-mobile-sticky-call"
          href={`tel:${siteConfig.phone}`}
          className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-[#142632] hover:bg-[#1D3442] text-white border border-[#2A4354] active:scale-95 transition"
        >
          <Phone className="w-4 h-4 text-[#FF7A33] mb-0.5" />
          <span className="text-[11px] font-bold">{t.call}</span>
        </a>

        {/* WhatsApp */}
        <a
          id="btn-mobile-sticky-whatsapp"
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
            siteConfig.defaultWhatsAppMessage[lang]
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-[#25D366] text-black font-bold active:scale-95 transition shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-black text-black mb-0.5" />
          <span className="text-[11px]">{t.whatsapp}</span>
        </a>

        {/* Request Inspection */}
        <button
          id="btn-mobile-sticky-quote"
          onClick={scrollToContact}
          className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-[#FF7A33] text-white font-bold active:scale-95 transition shadow-md cursor-pointer"
        >
          <Zap className="w-4 h-4 fill-white mb-0.5" />
          <span className="text-[11px]">{t.book}</span>
        </button>
      </div>
    </div>
  );
};
