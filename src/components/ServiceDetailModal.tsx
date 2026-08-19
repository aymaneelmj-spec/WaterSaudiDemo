import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  MessageCircle,
  Phone,
  Wrench,
  Clock,
  FileCheck
} from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  lang: Language;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  lang,
  onClose
}) => {
  if (!service) return null;
  const t = uiTranslations[lang].services;

  const whatsappMessage = `${
    lang === 'ar'
      ? `السلام عليكم، أود حجز فحص / عرض سعر لخدمة (${service.title.ar}) في الرياض.`
      : `Hello, I would like to book an inspection / get a quote for (${service.title.en}) in Riyadh.`
  }`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0E1B23] border border-[#2A4354] rounded-2xl shadow-2xl overflow-hidden z-10 text-[#F4F6F5]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#1D3442] bg-[#0A141A]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#FF7A33]/15 border border-[#FF7A33]/30 text-[#FF7A33] font-mono-tech text-xs font-bold">
                {service.badge[lang]}
              </span>
              <span className="text-xs font-mono-tech text-[#4CAF7D] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                {t.warranty} {service.warrantyYears} {t.years}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#142632] hover:bg-[#1D3442] text-gray-400 hover:text-white transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{service.title[lang]}</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {service.fullDesc[lang]}
              </p>
            </div>

            {/* Diagnostic Equipment Section */}
            <div className="bg-[#070D12] p-4 rounded-xl border border-[#172D3A]">
              <div className="flex items-center gap-2 text-xs font-mono-tech font-bold text-[#3FB8AF] mb-3">
                <Cpu className="w-4 h-4" />
                <span>{lang === 'ar' ? 'الأجهزة والتقنيات المستخدمة:' : 'Equipment & Technologies Used:'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.equipment[lang].map((eq, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3FB8AF]" />
                    <span>{eq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Highlights */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3">
                {lang === 'ar' ? 'مميزات الخدمة والضمان:' : 'Service Key Benefits:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features[lang].map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-[#142632]/50 p-2.5 rounded-lg border border-[#2A4354]/40"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#4CAF7D] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing note */}
            <div className="flex items-center justify-between bg-[#142632] p-4 rounded-xl border border-[#2A4354] font-mono-tech text-xs sm:text-sm">
              <span className="text-gray-400">{lang === 'ar' ? 'التسعير التقديري:' : 'Estimated Pricing:'}</span>
              <span className="font-bold text-[#FF7A33]">{service.priceEstimate[lang]}</span>
            </div>
          </div>

          {/* Modal Footer CTAs */}
          <div className="p-5 border-t border-[#1D3442] bg-[#0A141A] flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.bookViaWhatsApp}</span>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#142632] hover:bg-[#1D3442] text-white font-bold text-sm border border-[#2A4354] transition font-mono-tech"
            >
              <Phone className="w-4 h-4 text-[#FF7A33]" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
