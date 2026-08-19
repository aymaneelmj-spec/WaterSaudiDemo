import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Quote,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { Language } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';
import { WaveDivider } from './WaveDivider';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const t = uiTranslations[lang].testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = siteConfig.testimonials;
  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-20 bg-[#0A141A] text-[#F4F6F5] overflow-hidden">
      <WaveDivider variant="amber" className="mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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

        {/* Testimonials Carousel Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-[#0E1B23] border border-[#1D3442] rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
            {/* Ambient Background Water/Glow Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF7A33]/5 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: lang === 'ar' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col justify-between min-h-[260px]"
              >
                {/* Top Quote & Rating Stars */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-[#FF7A33]">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#FF7A33]" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#4CAF7D] bg-[#142632] px-3 py-1 rounded-full border border-[#2A4354]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{t.verifiedClient}</span>
                    </div>
                  </div>

                  {/* Comment Body */}
                  <blockquote className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed font-medium mb-8">
                    "{current.comment[lang]}"
                  </blockquote>
                </div>

                {/* Author Info & Service Tag */}
                <div className="pt-6 border-t border-[#1D3442] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base font-bold text-white mb-0.5">
                      {current.name[lang]}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-gray-400 font-mono-tech">
                      <span className="flex items-center gap-1 text-[#3FB8AF]">
                        <MapPin className="w-3.5 h-3.5" />
                        {current.district[lang]}
                      </span>
                      <span>•</span>
                      <span>{current.date[lang]}</span>
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-xl bg-[#142632] border border-[#2A4354] text-xs font-medium text-gray-300">
                    {current.service[lang]}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#FF7A33]'
                      : 'w-2 bg-[#2A4354] hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-[#142632] hover:bg-[#1D3442] text-white border border-[#2A4354] transition cursor-pointer active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronRight className={`w-5 h-5 ${lang === 'en' ? 'rotate-180' : ''}`} />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-[#142632] hover:bg-[#1D3442] text-white border border-[#2A4354] transition cursor-pointer active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronLeft className={`w-5 h-5 ${lang === 'en' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
