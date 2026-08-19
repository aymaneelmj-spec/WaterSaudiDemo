import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  ShieldCheck,
  Droplet,
  Layers,
  FileText,
  Wrench,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Sparkles
} from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';
import { ServiceDetailModal } from './ServiceDetailModal';
import { WaveDivider } from './WaveDivider';

interface ServicesGridProps {
  lang: Language;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ lang }) => {
  const t = uiTranslations[lang].services;
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#FF7A33]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#3FB8AF]" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-[#3FB8AF]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#FF7A33]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#4CAF7D]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#FF7A33]" />;
      default:
        return <Activity className="w-6 h-6 text-[#FF7A33]" />;
    }
  };

  return (
    <section id="services" className="relative py-20 bg-[#0A141A] text-[#F4F6F5] overflow-hidden">
      <WaveDivider variant="subtle" className="mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142632] border border-[#2A4354] text-xs font-semibold text-[#3FB8AF] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A33]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Services Grid with staggered motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#0E1B23] border border-[#1D3442] hover:border-[#FF7A33]/60 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-[#FF7A33]/5 scanline-effect"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#142632] border border-[#2A4354] group-hover:border-[#FF7A33] group-hover:scale-105 transition-all flex items-center justify-center shadow-inner">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#142632] border border-[#2A4354] text-[11px] font-mono-tech font-bold text-[#3FB8AF]">
                    {service.badge[lang]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF7A33] transition-colors leading-snug">
                  {service.title[lang]}
                </h3>

                {/* Short Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.shortDesc[lang]}
                </p>

                {/* Features list */}
                <ul className="space-y-1.5 mb-6 text-xs text-gray-300">
                  {service.features[lang].slice(0, 3).map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4CAF7D] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Price & Details Action */}
              <div className="pt-4 border-t border-[#1D3442] flex items-center justify-between gap-3">
                <div className="text-xs font-mono-tech text-gray-400">
                  <span className="text-[#4CAF7D] font-bold">
                    {service.warrantyYears} {t.years} {t.warranty}
                  </span>
                </div>

                <button
                  id={`btn-service-detail-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#FF7A33] hover:text-white transition group-hover:underline cursor-pointer"
                >
                  <span>{t.detailsBtn}</span>
                  {lang === 'ar' ? (
                    <ArrowLeft className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Detail Component */}
      <ServiceDetailModal
        service={selectedService}
        lang={lang}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
