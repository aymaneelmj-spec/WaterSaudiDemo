import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface LoadingScreenProps {
  lang: Language;
  onFinish?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ lang, onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onFinish?.();
      return;
    }

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onFinish?.();
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0E1B23] text-white select-none"
        >
          <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
            {/* Signature Sonar & Pipe Scan Visual */}
            <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
              {/* Radar Sweeping Ring */}
              <div className="absolute inset-0 rounded-full border border-[#1D3442] shadow-[0_0_30px_rgba(63,184,175,0.2)]" />
              <div className="absolute inset-3 rounded-full border border-dashed border-[#2A4354]" />
              
              {/* Expanding Sonar Pulse */}
              <div className="absolute inset-0 rounded-full bg-[#3FB8AF]/20 animate-sonar-ring" />
              
              {/* Radar Sweep Needle */}
              <div className="absolute inset-0 rounded-full animate-radar origin-center pointer-events-none">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#FF7A33]/20 to-[#FF7A33] rounded-l-full opacity-70" />
              </div>

              {/* Pipe Cross-Section Icon */}
              <div className="relative z-10 w-12 h-12 rounded-xl bg-[#142632] border border-[#2A4354] flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 rounded-full border-2 border-[#3FB8AF] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#FF7A33] animate-ping" />
                </div>
              </div>
            </div>

            {/* Diagnostic Progress Readout */}
            <div className="font-mono-tech text-xs tracking-widest text-[#3FB8AF] mb-2">
              {lang === 'ar' ? 'جاري معايرة مجسات السونار الصوتي...' : 'CALIBRATING ACOUSTIC SONAR SENSORS...'}
            </div>

            <div className="text-lg font-bold tracking-tight text-white mb-4">
              {lang === 'ar' ? 'المهندس المعتمد لكشف التسربات' : 'AL-MOHENDIS LEAK DETECTION'}
            </div>

            {/* Tech progress bar */}
            <div className="w-48 h-1.5 bg-[#142632] rounded-full overflow-hidden border border-[#2A4354]/60">
              <motion.div
                className="h-full bg-gradient-to-r from-[#3FB8AF] to-[#FF7A33]"
                style={{ width: `${scanProgress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <div className="mt-2 font-mono-tech text-[11px] text-gray-400">
              {scanProgress}% {lang === 'ar' ? 'جاهزية النظام' : 'SYSTEM READY'}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
