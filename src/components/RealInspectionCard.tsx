import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Clock,
  Radio,
  FileCheck,
  Zap,
  PhoneCall,
  MessageCircle,
  Truck,
  Sparkles,
  Award
} from 'lucide-react';
import { Language } from '../types';
import { siteConfig } from '../data/siteConfig';

interface RealInspectionCardProps {
  lang: Language;
}

export const RealInspectionCard: React.FC<RealInspectionCardProps> = ({ lang }) => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>(
    lang === 'ar' ? 'حي الملقا' : 'Al-Malqa'
  );

  const districts = [
    { ar: 'حي الملقا (شمال الرياض)', en: 'Al-Malqa (North)' },
    { ar: 'حي الياسمين (شمال الرياض)', en: 'Al-Yasmin (North)' },
    { ar: 'حي النرجس (شمال الرياض)', en: 'Al-Narjis (North)' },
    { ar: 'حي حطين (شمال الرياض)', en: 'Hittin (North)' },
    { ar: 'حي الرمال (شرق الرياض)', en: 'Al-Rimal (East)' },
    { ar: 'حي طويق (غرب الرياض)', en: 'Tuwaiq (West)' }
  ];

  return (
    <div
      id="acoustic-scan-visualizer"
      className="w-full bg-[#070D12] border border-[#1D3442] rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden"
    >
      {/* Real Inspection Photo Header with Live Badge */}
      <div className="relative h-52 sm:h-60 rounded-2xl overflow-hidden mb-4 border border-[#2A4354] shadow-inner group">
        <img
          src="/src/assets/images/hero_tech_inspect_1787092958968.jpg"
          alt="Certified Engineer inspecting leak in Riyadh"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D12] via-black/30 to-transparent" />

        {/* Live Active Field Units Pill */}
        <div className="absolute top-3 right-3 bg-[#0E1B23]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#2A4354] flex items-center gap-2 shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4CAF7D] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4CAF7D]" />
          </span>
          <span className="text-[11px] font-mono-tech font-bold text-[#4CAF7D]">
            {lang === 'ar' ? 'ميداني: 4 سيارات فحص متواجدة الآن' : 'Live: 4 Inspection Labs Active'}
          </span>
        </div>

        {/* Official NWC Certified Stamp Badge */}
        <div className="absolute bottom-3 left-3 bg-[#142632]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#FF7A33]/50 flex items-center gap-2 text-white shadow-lg">
          <Award className="w-4 h-4 text-[#FF7A33]" />
          <div className="text-start">
            <div className="text-[11px] font-extrabold text-[#FF7A33]">
              {lang === 'ar' ? 'معتمد رسمياً (NWC)' : 'Official NWC Accreditation'}
            </div>
            <div className="text-[9px] font-mono-tech text-gray-300">
              {lang === 'ar' ? 'تقرير معتمد لحل الفواتير' : 'Stamp #SA-84920'}
            </div>
          </div>
        </div>
      </div>

      {/* 3 Core Trust Metric Tiles */}
      <div className="grid grid-cols-3 gap-2.5 mb-4 text-center">
        <div className="bg-[#0E1B23] border border-[#1D3442] p-2.5 rounded-xl">
          <div className="text-base sm:text-lg font-black text-[#FF7A33] font-mono-tech">0%</div>
          <div className="text-[10px] text-gray-300 font-semibold">
            {lang === 'ar' ? 'بدون تكسير' : 'Zero Demolition'}
          </div>
        </div>
        <div className="bg-[#0E1B23] border border-[#1D3442] p-2.5 rounded-xl">
          <div className="text-base sm:text-lg font-black text-[#3FB8AF] font-mono-tech">15 {lang === 'ar' ? 'سنة' : 'Yrs'}</div>
          <div className="text-[10px] text-gray-300 font-semibold">
            {lang === 'ar' ? 'ضمان معتمد' : 'Warranty'}
          </div>
        </div>
        <div className="bg-[#0E1B23] border border-[#1D3442] p-2.5 rounded-xl">
          <div className="text-base sm:text-lg font-black text-[#4CAF7D] font-mono-tech">25 {lang === 'ar' ? 'دقيقة' : 'Min'}</div>
          <div className="text-[10px] text-gray-300 font-semibold">
            {lang === 'ar' ? 'سرعة الوصول' : 'Avg Arrival'}
          </div>
        </div>
      </div>

      {/* Live District Dispatch Availability Selector */}
      <div className="bg-[#0E1B23] border border-[#1D3442] p-3.5 rounded-2xl mb-4">
        <div className="flex items-center justify-between text-xs font-mono-tech text-gray-300 mb-2">
          <span className="flex items-center gap-1.5 text-white font-bold">
            <Truck className="w-3.5 h-3.5 text-[#FF7A33]" />
            {lang === 'ar' ? 'جاهزية الفريق في حيك:' : 'Crew Ready in District:'}
          </span>
          <span className="text-[#4CAF7D] font-bold">
            {lang === 'ar' ? '● متاح حالياً' : '● Available Now'}
          </span>
        </div>

        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="w-full py-2 px-3 rounded-xl bg-[#070D12] border border-[#2A4354] text-white text-xs font-semibold focus:outline-none focus:border-[#FF7A33]"
        >
          {districts.map((d, i) => (
            <option key={i} value={d[lang]}>
              {d[lang]}
            </option>
          ))}
        </select>
      </div>

      {/* Instant Action Button */}
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
          lang === 'ar'
            ? `السلام عليكم، أحتاج إرسال سيارة الفحص المعتمدة إلى ${selectedDistrict} للكشف عن تسربات المياه.`
            : `Hello, please dispatch an inspection team to ${selectedDistrict} for leak detection.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-black font-extrabold text-xs sm:text-sm shadow-lg hover:opacity-95 transition active:scale-95 cursor-pointer"
      >
        <MessageCircle className="w-4 h-4 fill-black text-black" />
        <span>
          {lang === 'ar' ? `طلب فحص معتمد في ${selectedDistrict}` : `Book Inspection in ${selectedDistrict}`}
        </span>
      </a>
    </div>
  );
};
