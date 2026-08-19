import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Phone, MessageCircle, Zap } from 'lucide-react';
import { Language } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';

interface UrgentBannerProps {
  lang: Language;
}

export const UrgentBanner: React.FC<UrgentBannerProps> = ({ lang }) => {
  const t = uiTranslations[lang].urgent;

  return (
    <section className="relative bg-gradient-to-r from-[#FF7A33] via-[#E86018] to-[#FF7A33] text-black py-4 px-4 shadow-xl z-20 overflow-hidden">
      {/* Dynamic pulse background pattern */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Urgent Text & Icon */}
        <div className="flex items-center gap-3 text-center md:text-start">
          <div className="relative flex items-center justify-center shrink-0">
            <span className="w-8 h-8 rounded-full bg-black/20 animate-ping absolute" />
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black text-sm shadow">
              <Zap className="w-4 h-4 fill-white" />
            </div>
          </div>
          <div>
            <span className="font-extrabold text-sm sm:text-base mr-2 inline-block">
              {t.alert}
            </span>
            <span className="text-xs sm:text-sm font-medium text-black/90">
              {t.text}
            </span>
          </div>
        </div>

        {/* Emergency Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            id="btn-urgent-whatsapp"
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              lang === 'ar'
                ? 'طوارئ: يوجد تسرب مياه عاجل في الرياض أحتاج فحص وإصلاح فوري.'
                : 'Emergency: Immediate water leak in Riyadh requiring urgent inspection & repair.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 py-2 px-4 rounded-xl bg-[#25D366] text-black font-bold text-xs sm:text-sm shadow-md hover:bg-white transition active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.whatsappBtn}</span>
          </a>

          <a
            id="btn-urgent-call"
            href={`tel:${siteConfig.emergencyPhone}`}
            className="flex items-center gap-1.5 py-2 px-4 rounded-xl bg-black text-white font-bold text-xs sm:text-sm shadow-md hover:bg-gray-900 transition active:scale-95 font-mono-tech"
          >
            <Phone className="w-4 h-4 text-[#FF7A33]" />
            <span>{t.callBtn} ({siteConfig.phoneDisplay})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
