import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, CheckCircle2, AlertTriangle, RefreshCw, Volume2, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { uiTranslations } from '../data/siteConfig';

interface AcousticScanMotifProps {
  lang: Language;
  interactive?: boolean;
}

export const AcousticScanMotif: React.FC<AcousticScanMotifProps> = ({
  lang,
  interactive = true
}) => {
  const t = uiTranslations[lang].hero;
  const [scanState, setScanState] = useState<'scanning' | 'detected' | 'repaired'>('scanning');
  const [frequency, setFrequency] = useState(4820);
  const [decibels, setDecibels] = useState(72.4);
  const [pressure, setPressure] = useState('3.8 Bar');
  const [depth, setDepth] = useState('18 cm');

  // Realistic telemetry fluctuation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      if (scanState === 'scanning') {
        setFrequency(Math.floor(4600 + Math.random() * 600));
        setDecibels(Number((68 + Math.random() * 12).toFixed(1)));
      } else if (scanState === 'detected') {
        setFrequency(5280);
        setDecibels(84.6);
      } else {
        setFrequency(120);
        setDecibels(18.2);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [scanState]);

  const handleSimulate = () => {
    if (scanState === 'scanning') {
      setScanState('detected');
    } else if (scanState === 'detected') {
      setScanState('repaired');
    } else {
      setScanState('scanning');
    }
  };

  return (
    <div
      id="acoustic-scan-visualizer"
      className="relative w-full max-w-lg mx-auto bg-[#0A141A] rounded-2xl border border-[#1D3442] shadow-2xl p-5 overflow-hidden select-none"
    >
      {/* Top telemetry bar */}
      <div className="flex items-center justify-between border-b border-[#1D3442] pb-3 mb-4 text-xs font-mono-tech">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                scanState === 'scanning'
                  ? 'bg-[#3FB8AF]'
                  : scanState === 'detected'
                  ? 'bg-[#FF7A33]'
                  : 'bg-[#4CAF7D]'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                scanState === 'scanning'
                  ? 'bg-[#3FB8AF]'
                  : scanState === 'detected'
                  ? 'bg-[#FF7A33]'
                  : 'bg-[#4CAF7D]'
              }`}
            />
          </span>
          <span className="text-gray-300 font-medium">
            {scanState === 'scanning' && t.sonarStatusNormal}
            {scanState === 'detected' && (
              <span className="text-[#FF7A33] font-bold flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 inline" /> {t.sonarStatusLeak}
              </span>
            )}
            {scanState === 'repaired' && (
              <span className="text-[#4CAF7D] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 inline" /> {t.sonarStatusFixed}
              </span>
            )}
          </span>
        </div>
        <div className="text-gray-400 bg-[#142632] px-2 py-0.5 rounded border border-[#2A4354] text-[11px]">
          FLIR & SEBA S-30
        </div>
      </div>

      {/* Main Diagnostic Sonar Screen */}
      <div className="relative h-64 bg-[#070D12] rounded-xl border border-[#172D3A] overflow-hidden flex items-center justify-center">
        {/* Sonar Circular Grid */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-56 h-56 rounded-full border border-[#172D3A]/60" />
          <div className="w-40 h-40 rounded-full border border-[#172D3A]/70" />
          <div className="w-24 h-24 rounded-full border border-[#1D3442]" />
          <div className="absolute w-full h-[1px] bg-[#172D3A]/70" />
          <div className="absolute h-full w-[1px] bg-[#172D3A]/70" />
        </div>

        {/* Sweep Sonar Needle */}
        {scanState === 'scanning' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-56 h-56 rounded-full animate-radar origin-center">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#3FB8AF]/20 to-[#3FB8AF] rounded-l-full opacity-60" />
            </div>
          </div>
        )}

        {/* Pipe Cross-Section Illustration */}
        <div className="relative z-10 w-full px-6 flex flex-col items-center">
          {/* Concrete / Tile Layer Simulation */}
          <div className="w-full flex items-center justify-between text-[10px] font-mono-tech text-gray-400 mb-1 px-1">
            <span>{lang === 'ar' ? 'سطح السيراميك / البلاط' : 'TILES SURFACE'}</span>
            <span className="text-[#3FB8AF]">{lang === 'ar' ? 'بدون أي تكسير' : 'NON-DESTRUCTIVE'}</span>
          </div>
          <div className="w-full h-2 bg-gradient-to-r from-[#203644] via-[#2D4A5C] to-[#203644] rounded-sm mb-4 border border-[#3E5C6E]/40" />

          {/* Hidden Pipe Under Floor / Inside Wall */}
          <div className="relative w-full h-14 bg-[#142632] rounded-lg border border-[#2A4354] flex items-center px-4 justify-between shadow-inner">
            {/* Water Flow Stream inside pipe */}
            <div className="absolute inset-x-2 inset-y-2 bg-[#0E1B23] rounded flex items-center overflow-hidden">
              <div
                className={`h-full w-full bg-gradient-to-r ${
                  scanState === 'detected'
                    ? 'from-[#1D3442] via-[#FF7A33]/40 to-[#1D3442]'
                    : scanState === 'repaired'
                    ? 'from-[#1D3442] via-[#4CAF7D]/30 to-[#1D3442]'
                    : 'from-[#142632] via-[#3FB8AF]/20 to-[#142632]'
                } transition-colors duration-500`}
              />
            </div>

            {/* Inflow indicator */}
            <div className="relative z-10 flex items-center gap-1 text-[11px] font-mono-tech text-cyan-300/80">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>{lang === 'ar' ? 'خط التغذية' : 'INFLOW'}</span>
            </div>

            {/* The Leak Point Spot */}
            <div className="relative z-20 flex items-center justify-center">
              {scanState === 'detected' ? (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative flex items-center justify-center"
                >
                  {/* Blinking Signal-Amber Leak Pulse */}
                  <span className="absolute w-12 h-12 rounded-full bg-[#FF7A33]/40 animate-ping" />
                  <span className="absolute w-8 h-8 rounded-full bg-[#FF7A33]/60 animate-pulse" />
                  <div className="relative w-6 h-6 rounded-full bg-[#FF7A33] text-black font-black flex items-center justify-center text-xs shadow-[0_0_15px_#FF7A33]">
                    !
                  </div>
                  {/* Leak Callout Tag */}
                  <div className="absolute -top-10 bg-[#FF7A33] text-black font-bold text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap">
                    {lang === 'ar' ? 'نقطة التسرب الدقيقة (±0.5 مم)' : 'Leak Point (±0.5 mm)'}
                  </div>
                </motion.div>
              ) : scanState === 'repaired' ? (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative flex items-center justify-center"
                >
                  <div className="w-8 h-8 rounded-full bg-[#4CAF7D] text-white flex items-center justify-center shadow-[0_0_15px_#4CAF7D]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="absolute -top-10 bg-[#4CAF7D] text-white font-bold text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap">
                    {lang === 'ar' ? 'معالجة مضمونة 100%' : '100% Repaired & Sealed'}
                  </div>
                </motion.div>
              ) : (
                <div className="w-4 h-4 rounded-full border border-dashed border-[#3FB8AF] animate-spin" />
              )}
            </div>

            {/* Outflow indicator */}
            <div className="relative z-10 flex items-center gap-1 text-[11px] font-mono-tech text-gray-400">
              <span>{lang === 'ar' ? 'محبس العزل' : 'OUTFLOW'}</span>
            </div>
          </div>

          {/* Live Waveform Oscilloscope Bars */}
          <div className="w-full flex items-end justify-between h-8 mt-3 px-2 gap-1">
            {[40, 65, 85, 95, 70, 55, 30, 60, 90, 100, 75, 45, 80, 60, 35, 90, 50].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t transition-all duration-300 ${
                  scanState === 'detected'
                    ? i > 7 && i < 11
                      ? 'bg-[#FF7A33] shadow-[0_0_8px_#FF7A33]'
                      : 'bg-[#2A4354]'
                    : scanState === 'repaired'
                    ? 'bg-[#4CAF7D]'
                    : 'bg-[#3FB8AF]/70'
                }`}
                style={{
                  height: `${
                    scanState === 'detected' && (i > 7 && i < 11)
                      ? 100
                      : scanState === 'repaired'
                      ? 20
                      : Math.max(15, (h * (decibels / 90)))
                  }%`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Diagnostic telemetry numbers in JetBrains Mono */}
      <div className="grid grid-cols-4 gap-2 mt-4 text-center font-mono-tech">
        <div className="bg-[#070D12] p-2 rounded-lg border border-[#172D3A]">
          <div className="text-[10px] text-gray-400 mb-0.5">{lang === 'ar' ? 'التردد الصوتي' : 'FREQ'}</div>
          <div className="text-xs font-bold text-[#3FB8AF]">{frequency} Hz</div>
        </div>
        <div className="bg-[#070D12] p-2 rounded-lg border border-[#172D3A]">
          <div className="text-[10px] text-gray-400 mb-0.5">{lang === 'ar' ? 'مستوى الصوت' : 'NOISE'}</div>
          <div className={`text-xs font-bold ${scanState === 'detected' ? 'text-[#FF7A33]' : 'text-white'}`}>
            {decibels} dB
          </div>
        </div>
        <div className="bg-[#070D12] p-2 rounded-lg border border-[#172D3A]">
          <div className="text-[10px] text-gray-400 mb-0.5">{lang === 'ar' ? 'ضغط الخط' : 'PRESSURE'}</div>
          <div className="text-xs font-bold text-gray-200">{pressure}</div>
        </div>
        <div className="bg-[#070D12] p-2 rounded-lg border border-[#172D3A]">
          <div className="text-[10px] text-gray-400 mb-0.5">{lang === 'ar' ? 'عمق الكشف' : 'DEPTH'}</div>
          <div className="text-xs font-bold text-white">{depth}</div>
        </div>
      </div>

      {/* Interactive Trigger Button */}
      {interactive && (
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            id="btn-simulate-sonar"
            onClick={handleSimulate}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#1D3442] to-[#142632] hover:from-[#254254] hover:to-[#1D3442] text-xs font-bold text-[#F4F6F5] border border-[#2A4354] transition shadow-md active:scale-95 cursor-pointer"
          >
            {scanState === 'scanning' ? (
              <>
                <AlertTriangle className="w-4 h-4 text-[#FF7A33]" />
                <span>{lang === 'ar' ? 'محاكاة كشف نقطة التسرب' : 'Simulate Leak Detection'}</span>
              </>
            ) : scanState === 'detected' ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-[#4CAF7D]" />
                <span>{lang === 'ar' ? 'محاكاة إصلاح وعزل الماسورة' : 'Simulate Repair & Seal'}</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4 text-[#3FB8AF]" />
                <span>{lang === 'ar' ? 'إعادة الفحص من جديد' : 'Restart Scan'}</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
