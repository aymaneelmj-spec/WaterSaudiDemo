import React from 'react';
import { motion } from 'motion/react';
import {
  PhoneCall,
  Truck,
  Activity,
  FileCheck,
  Wrench,
  Award,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { Language } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';
import { WaveDivider } from './WaveDivider';

interface HowItWorksProps {
  lang: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ lang }) => {
  const t = uiTranslations[lang].howItWorks;

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-[#FF7A33]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#3FB8AF]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#FF7A33]" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-[#4CAF7D]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#FF7A33]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#3FB8AF]" />;
      default:
        return <Activity className="w-5 h-5 text-[#FF7A33]" />;
    }
  };

  return (
    <section id="how-it-works" className="relative py-20 bg-[#0E1B23] text-[#F4F6F5] overflow-hidden">
      <WaveDivider variant="amber" className="mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142632] border border-[#2A4354] text-xs font-semibold text-[#FF7A33] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Numbered Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {siteConfig.howItWorks.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-[#0A141A] border border-[#1D3442] rounded-2xl p-6 flex flex-col justify-between hover:border-[#3FB8AF]/50 transition-colors shadow-lg group"
            >
              {/* Step number badge (Earned sequence) */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#142632] border border-[#2A4354] flex items-center justify-center font-mono-tech font-bold text-[#FF7A33] text-base group-hover:bg-[#FF7A33] group-hover:text-black transition-colors">
                    0{step.stepNumber}
                  </div>
                  <div className="p-2 rounded-lg bg-[#142632]/50 border border-[#2A4354]">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-md bg-[#142632] border border-[#2A4354] text-[11px] font-mono-tech text-[#3FB8AF]">
                  {step.tag[lang]}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3FB8AF] transition-colors">
                  {step.title[lang]}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {step.description[lang]}
                </p>
              </div>

              {/* Bottom Subtle Step Status */}
              <div className="mt-4 pt-3 border-t border-[#1D3442] flex items-center justify-between text-[11px] font-mono-tech text-gray-500">
                <span>{lang === 'ar' ? `المرحلة ${step.stepNumber} من 6` : `Phase ${step.stepNumber} of 6`}</span>
                <span className="text-[#4CAF7D]">✓ {lang === 'ar' ? 'معتمد' : 'Standard'}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
