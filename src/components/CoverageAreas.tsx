import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Search,
  CheckCircle2,
  Truck,
  Sparkles,
  MessageCircle,
  Phone
} from 'lucide-react';
import { Language, DistrictArea } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';
import { WaveDivider } from './WaveDivider';

interface CoverageAreasProps {
  lang: Language;
}

export const CoverageAreas: React.FC<CoverageAreasProps> = ({ lang }) => {
  const t = uiTranslations[lang].coverage;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictArea | null>(null);

  const filteredDistricts = siteConfig.coverageDistricts.filter((item) => {
    const matchesSearch =
      item.name.ar.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.en.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesZone = selectedZone === 'all' || item.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  const zones = [
    { id: 'all', label: t.filterAll },
    { id: 'north', label: t.filterNorth },
    { id: 'east', label: t.filterEast },
    { id: 'west', label: t.filterWest },
    { id: 'south', label: t.filterSouth },
    { id: 'center', label: t.filterCenter }
  ];

  const handleDistrictClick = (district: DistrictArea) => {
    setSelectedDistrict(district);
  };

  const dispatchWhatsApp = (districtName: string) => {
    const text = `${
      lang === 'ar'
        ? `السلام عليكم، أحتاج إرسال سيارة فحص كشف تسربات / عزل إلى (${districtName}) بالرياض.`
        : `Hello, I need an acoustic leak inspection / insulation van dispatched to (${districtName}), Riyadh.`
    }`;
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section id="coverage" className="relative py-20 bg-[#0E1B23] text-[#F4F6F5] overflow-hidden">
      <WaveDivider variant="subtle" className="mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142632] border border-[#2A4354] text-xs font-semibold text-[#3FB8AF] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#FF7A33]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full py-3.5 px-11 rounded-2xl bg-[#0A141A] border border-[#2A4354] text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#FF7A33] transition shadow-inner"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 rtl:left-auto rtl:right-4 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 rtl:right-auto rtl:left-4 text-xs font-mono-tech text-gray-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Zone Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setSelectedZone(zone.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                selectedZone === zone.id
                  ? 'bg-[#3FB8AF] text-black font-bold shadow-md shadow-[#3FB8AF]/20'
                  : 'bg-[#142632] text-gray-300 hover:bg-[#1D3442] hover:text-white border border-[#2A4354]'
              }`}
            >
              {zone.label}
            </button>
          ))}
        </div>

        {/* Riyadh Districts Chip Cloud */}
        <div className="bg-[#0A141A] border border-[#1D3442] rounded-3xl p-6 sm:p-8 shadow-xl max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2.5 justify-center">
            {filteredDistricts.map((district, idx) => {
              const isSelected = selectedDistrict?.name.ar === district.name.ar;
              return (
                <button
                  key={idx}
                  onClick={() => handleDistrictClick(district)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#FF7A33] text-black font-bold shadow-lg shadow-[#FF7A33]/30 scale-105'
                      : district.popular
                      ? 'bg-[#142632] text-white hover:bg-[#1D3442] border border-[#2A4354] hover:border-[#FF7A33]/60'
                      : 'bg-[#0E1B23] text-gray-300 hover:bg-[#142632] border border-[#1D3442]'
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-[#3FB8AF]'}`} />
                  <span>{district.name[lang]}</span>
                  {district.popular && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF7D] ml-1" title="فريق نشط" />
                  )}
                </button>
              );
            })}
          </div>

          {filteredDistricts.length === 0 && (
            <div className="text-center py-8 text-sm text-gray-400">
              {lang === 'ar'
                ? 'لم يتم العثور على الحي في القائمة السريعة، لكننا نغطي جميع أحياء ومحافظات الرياض بلا استثناء!'
                : 'District not found in quick chips, but our fleet covers all Greater Riyadh areas!'}
            </div>
          )}

          {/* Selected District Dispatch Banner */}
          <div className="mt-8 pt-6 border-t border-[#1D3442] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#142632]/40 p-4 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#3FB8AF]/15 flex items-center justify-center text-[#3FB8AF] shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  {selectedDistrict
                    ? `${lang === 'ar' ? 'فريق جاهز لحي: ' : 'Ready unit for: '} ${selectedDistrict.name[lang]}`
                    : t.activeDispatch}
                </div>
                <div className="text-xs text-gray-400 font-mono-tech">
                  {lang === 'ar' ? 'وقت الوصول التقديري: 15-25 دقيقة' : 'Estimated Arrival: 15-25 mins'}
                </div>
              </div>
            </div>

            <button
              onClick={() =>
                dispatchWhatsApp(selectedDistrict ? selectedDistrict.name[lang] : 'الرياض')
              }
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs sm:text-sm shadow-md transition active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.dispatchBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
