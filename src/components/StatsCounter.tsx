import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, CheckCircle2, Clock, Users, Cpu, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';

interface StatsCounterProps {
  lang: Language;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ lang }) => {
  const t = uiTranslations[lang].stats;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [years, setYears] = useState(0);
  const [jobs, setJobs] = useState(0);
  const [responseMin, setResponseMin] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Smooth count-up animation
    const duration = 1800; // ms
    const frameRate = 30;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);

      setYears(Math.floor(easeOutProgress * siteConfig.experienceYears));
      setJobs(Math.floor(easeOutProgress * 24500));
      setResponseMin(Math.floor(easeOutProgress * siteConfig.responseTimeMinutes));
      setSatisfaction(Number((easeOutProgress * siteConfig.satisfactionRate).toFixed(1)));

      if (frame >= totalFrames) {
        clearInterval(timer);
        setYears(siteConfig.experienceYears);
        setJobs(24500);
        setResponseMin(siteConfig.responseTimeMinutes);
        setSatisfaction(siteConfig.satisfactionRate);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={ref} className="relative py-16 bg-[#070D12] border-y border-[#1D3442] text-[#F4F6F5] overflow-hidden">
      {/* Background technical telemetry grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1D3442_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Telemetry Status Bar */}
        <div className="flex items-center justify-between border-b border-[#1D3442] pb-4 mb-10 text-xs font-mono-tech text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4CAF7D] animate-ping" />
            <span className="text-[#4CAF7D] font-bold">{t.readoutStatus}</span>
          </div>
          <div className="text-gray-400">
            LOC: RIYADH, KSA [24.7136° N, 46.6753° E]
          </div>
        </div>

        {/* 4 Stats Grid in Monospace Readout Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1: Years Active */}
          <div className="bg-[#0E1B23] border border-[#1D3442] p-6 rounded-2xl flex flex-col items-center text-center shadow-lg relative group hover:border-[#3FB8AF]/60 transition">
            <div className="w-12 h-12 rounded-xl bg-[#142632] border border-[#2A4354] flex items-center justify-center text-[#3FB8AF] mb-4 group-hover:scale-110 transition">
              <Award className="w-6 h-6" />
            </div>
            <div className="font-mono-tech text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">
              {years}+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium">
              {t.experience}
            </div>
          </div>

          {/* Stat 2: Jobs Completed */}
          <div className="bg-[#0E1B23] border border-[#1D3442] p-6 rounded-2xl flex flex-col items-center text-center shadow-lg relative group hover:border-[#FF7A33]/60 transition">
            <div className="w-12 h-12 rounded-xl bg-[#142632] border border-[#2A4354] flex items-center justify-center text-[#FF7A33] mb-4 group-hover:scale-110 transition">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="font-mono-tech text-3xl sm:text-4xl lg:text-5xl font-black text-[#FF7A33] mb-2 tracking-tight">
              {jobs.toLocaleString()}+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium">
              {t.completedJobs}
            </div>
          </div>

          {/* Stat 3: Avg Response Time */}
          <div className="bg-[#0E1B23] border border-[#1D3442] p-6 rounded-2xl flex flex-col items-center text-center shadow-lg relative group hover:border-[#3FB8AF]/60 transition">
            <div className="w-12 h-12 rounded-xl bg-[#142632] border border-[#2A4354] flex items-center justify-center text-[#3FB8AF] mb-4 group-hover:scale-110 transition">
              <Clock className="w-6 h-6" />
            </div>
            <div className="font-mono-tech text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight flex items-baseline justify-center">
              <span>{responseMin}</span>
              <span className="text-lg text-[#3FB8AF] ml-1">{lang === 'ar' ? 'د' : 'm'}</span>
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium">
              {t.responseTime}
            </div>
          </div>

          {/* Stat 4: Satisfaction */}
          <div className="bg-[#0E1B23] border border-[#1D3442] p-6 rounded-2xl flex flex-col items-center text-center shadow-lg relative group hover:border-[#4CAF7D]/60 transition">
            <div className="w-12 h-12 rounded-xl bg-[#142632] border border-[#2A4354] flex items-center justify-center text-[#4CAF7D] mb-4 group-hover:scale-110 transition">
              <Users className="w-6 h-6" />
            </div>
            <div className="font-mono-tech text-3xl sm:text-4xl lg:text-5xl font-black text-[#4CAF7D] mb-2 tracking-tight">
              {satisfaction}%
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium">
              {t.satisfaction}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
