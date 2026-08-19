import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Clock,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  Phone,
  MessageCircle,
  Building,
  CheckCircle2,
  Star,
  Navigation,
  Share2
} from 'lucide-react';
import { Language } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';
import { WaveDivider } from './WaveDivider';

interface MapHoursBlockProps {
  lang: Language;
}

export const MapHoursBlock: React.FC<MapHoursBlockProps> = ({ lang }) => {
  const t = uiTranslations[lang].mapHours;
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    // 24/7 service in Riyadh
    setIsOpenNow(true);
  }, []);

  return (
    <section id="map-hours" className="relative py-16 sm:py-20 bg-[#0E1B23] text-[#F4F6F5] overflow-hidden">
      <WaveDivider variant="teal" className="mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142632] border border-[#2A4354] text-xs font-semibold text-[#3FB8AF] mb-3">
            <Building className="w-3.5 h-3.5 text-[#FF7A33]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            {siteConfig.companyName[lang]}
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Split: Google Maps Embed & Working Hours Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left / Map Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Google Maps Responsive Wrapper */}
            <div
              className="map-wrapper shadow-2xl border border-[#2A4354] relative w-full overflow-hidden rounded-2xl bg-[#070D12]"
              style={{
                position: 'relative',
                paddingBottom: '60%',
                height: 0,
                borderRadius: '16px'
              }}
            >
              <iframe
                src={siteConfig.googleMapsEmbedUrl}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="شركة كشف تسربات المياه بالرياض Google Maps Location"
              />
            </div>

            {/* Address bar under map */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#0A141A] rounded-xl border border-[#1D3442] text-xs font-mono-tech text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF7A33] shrink-0" />
                <span className="leading-snug">{siteConfig.address[lang]}</span>
              </div>
              <a
                href={siteConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3FB8AF] hover:underline flex items-center gap-1 font-bold shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.directionsBtn}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right / Google-style Hours & Business Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            {/* Google Business Profile Styled Card */}
            <div className="bg-[#0A141A] border border-[#1D3442] rounded-2xl p-5 sm:p-6 shadow-xl">
              {/* Business Name & 5.0 Star Rating from Google Business */}
              <div className="pb-4 border-b border-[#1D3442] mb-4">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-extrabold text-base sm:text-lg text-white leading-tight">
                    {siteConfig.companyName[lang]}
                  </h3>
                  <span className="text-[10px] font-mono-tech bg-[#FF7A33]/15 text-[#FF7A33] px-2 py-0.5 rounded border border-[#FF7A33]/30 shrink-0">
                    {lang === 'ar' ? 'معتمد' : 'Verified'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-bold text-white font-mono-tech">5.0</span>
                  <div className="flex items-center text-[#FFB800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800]" />
                    ))}
                  </div>
                  <span className="text-gray-400 font-mono-tech">({lang === 'ar' ? '2 تقييم' : '2 reviews'})</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-[#3FB8AF] text-[11px] font-medium">
                    {lang === 'ar' ? 'خدمات كشف وعزل تسربات' : 'Waterproofing Service'}
                  </span>
                </div>
              </div>

              {/* Live Open / Closed Status Bar */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isOpenNow ? 'bg-[#4CAF7D]' : 'bg-red-500'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-3 w-3 ${
                        isOpenNow ? 'bg-[#4CAF7D]' : 'bg-red-500'
                      }`}
                    />
                  </span>
                  <span className="font-extrabold text-sm text-white">
                    {isOpenNow ? (
                      <span className="text-[#4CAF7D]">{t.openNow}</span>
                    ) : (
                      <span className="text-red-400">{t.closedNow}</span>
                    )}
                  </span>
                </div>

                {/* Expandable Weekly Schedule Toggle */}
                <button
                  onClick={() => setIsScheduleOpen(!isScheduleOpen)}
                  className="flex items-center gap-1 text-xs font-mono-tech text-[#3FB8AF] hover:text-white transition cursor-pointer"
                  aria-expanded={isScheduleOpen}
                >
                  <span>{t.scheduleTitle}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isScheduleOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                {lang === 'ar'
                  ? 'نعمل بنظام الطوارئ المستمر على مدار 24 ساعة يومياً طوال أيام الأسبوع لخدمة كافة أحياء الرياض.'
                  : 'Operating on a 24/7 continuous emergency standby schedule across all Riyadh districts.'}
              </p>

              {/* Weekly Schedule Dropdown */}
              <AnimatePresence>
                {isScheduleOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-[#1D3442] pt-3 mt-3 space-y-2 text-xs font-mono-tech"
                  >
                    {siteConfig.workingHoursSchedule.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-gray-300 py-1 border-b border-[#142632] last:border-0"
                      >
                        <span className="font-semibold text-white">
                          {item.dayName[lang]}
                        </span>
                        <span className="text-[#4CAF7D]">
                          {item.is24Hours
                            ? lang === 'ar'
                              ? 'مفتوح 24 ساعة'
                              : 'Open 24 Hours'
                            : `${item.openTime} - ${item.closeTime}`}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Direct Contact Buttons inside Card */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-[#1D3442]">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#142632] hover:bg-[#1D3442] text-white border border-[#2A4354] text-xs font-bold transition active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF7A33]" />
                  <span>{lang === 'ar' ? 'اتصال' : 'Call'}</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    siteConfig.defaultWhatsAppMessage[lang]
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] text-black text-xs font-bold transition active:scale-95 shadow-md hover:bg-[#20bd5a]"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-black text-black" />
                  <span>{lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Quick Contact & Verified License Info */}
            <div className="bg-[#0A141A] border border-[#1D3442] rounded-2xl p-5 sm:p-6 shadow-xl space-y-3 text-xs font-mono-tech">
              <div className="flex items-center justify-between text-gray-300 pb-2.5 border-b border-[#1D3442]">
                <span className="text-gray-400">{lang === 'ar' ? 'الهاتف المعتمد:' : 'Verified Phone:'}</span>
                <a href={`tel:${siteConfig.phone}`} className="font-bold text-white hover:text-[#FF7A33]">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center justify-between text-gray-300 pb-2.5 border-b border-[#1D3442]">
                <span className="text-gray-400">{lang === 'ar' ? 'الرمز البريدي/الموقع:' : 'Plus Code:'}</span>
                <span className="font-bold text-[#3FB8AF]">RV2V+HH حي الندوة</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span className="text-gray-400">{lang === 'ar' ? 'الاعتماد الهندسي:' : 'Accreditation:'}</span>
                <span className="text-[#4CAF7D] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {lang === 'ar' ? 'معتمد رسميًا (NWC)' : 'NWC Ready'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
