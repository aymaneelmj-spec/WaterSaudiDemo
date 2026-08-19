import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Sliders,
  MapPin,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Eye,
  Layers
} from 'lucide-react';
import { Language, BeforeAfterItem } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';
import { WaveDivider } from './WaveDivider';

interface BeforeAfterGalleryProps {
  lang: Language;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ lang }) => {
  const t = uiTranslations[lang].beforeAfter;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItemId, setActiveItemId] = useState<string>('gallery-roof-1');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredItems = siteConfig.beforeAfterGallery.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  const activeItem =
    siteConfig.beforeAfterGallery.find((item) => item.id === activeItemId) ||
    filteredItems[0] ||
    siteConfig.beforeAfterGallery[0];

  // Measure container dimensions for pixel-perfect image alignment
  useEffect(() => {
    if (!containerRef.current) return;
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Dragging event handlers
  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) handleMove(e.touches[0].clientX);
    };
    const onMouseUp = () => setIsDragging(false);
    const onTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchend', onTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging]);

  const categories = [
    { id: 'all', label: t.filterAll },
    { id: 'roof', label: t.filterRoof },
    { id: 'tank', label: t.filterTank },
    { id: 'leak', label: t.filterLeak },
    { id: 'foam', label: t.filterFoam }
  ];

  return (
    <section id="before-after" className="relative py-20 bg-[#0A141A] text-[#F4F6F5] overflow-hidden select-none">
      <WaveDivider variant="teal" className="mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                const matching = siteConfig.beforeAfterGallery.filter(
                  (item) => cat.id === 'all' || item.category === cat.id
                );
                if (matching.length > 0) {
                  setActiveItemId(matching[0].id);
                }
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#FF7A33] text-black shadow-lg shadow-[#FF7A33]/25'
                  : 'bg-[#142632] text-gray-300 hover:bg-[#1D3442] hover:text-white border border-[#2A4354]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active Project Card with Interactive Draggable Slider */}
        <div className="max-w-4xl mx-auto bg-[#0E1B23] border border-[#1D3442] rounded-3xl p-5 sm:p-8 shadow-2xl">
          {/* Project Details Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#3FB8AF] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeItem.location[lang]}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {activeItem.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
                {activeItem.description[lang]}
              </p>
            </div>
          </div>

          {/* Interactive Split Comparison Slider Window */}
          <div
            id="before-after-slider-container"
            ref={containerRef}
            onMouseDown={handleStart}
            onTouchStart={handleStart}
            className="relative w-full h-80 sm:h-96 md:h-[460px] rounded-2xl overflow-hidden cursor-ew-resize border border-[#2A4354] shadow-inner bg-[#070D12]"
          >
            {/* AFTER Image (Full background layer) */}
            <div className="absolute inset-0 w-full h-full">
              {/* REPLACE: after project restoration photo */}
              <img
                src={activeItem.afterImage}
                alt={activeItem.afterLabel[lang]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* After label pill */}
              <div className="absolute top-4 right-4 bg-[#4CAF7D] text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 z-10">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{activeItem.afterLabel[lang]}</span>
              </div>
            </div>

            {/* BEFORE Image (Clipped overlay layer) */}
            <div
              className="absolute inset-0 h-full overflow-hidden z-10"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* REPLACE: before project problem photo */}
              <img
                src={activeItem.beforeImage}
                alt={activeItem.beforeLabel[lang]}
                className="absolute inset-0 h-full object-cover max-w-none"
                style={{
                  width: `${containerWidth}px`
                }}
                referrerPolicy="no-referrer"
              />
              {/* Subtle dark tint on before side */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              {/* Before label pill */}
              <div className="absolute top-4 left-4 bg-[#FF7A33] text-black font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-xl z-20">
                <span>{activeItem.beforeLabel[lang]}</span>
              </div>
            </div>

            {/* Draggable Divider Handle Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)] z-20 pointer-events-none flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-11 h-11 -ml-5 rounded-full bg-[#0E1B23] border-2 border-white text-white flex items-center justify-center shadow-2xl cursor-grab active:cursor-grabbing">
                <Sliders className="w-4 h-4 text-[#FF7A33]" />
              </div>
            </div>

            {/* Bottom drag hint pill */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0A141A]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#2A4354] text-[11px] font-mono-tech text-gray-200 pointer-events-none shadow-lg z-20">
              ↔ {t.dragHint}
            </div>
          </div>

          {/* Project Result Summary Box */}
          <div className="mt-6 p-4 rounded-xl bg-[#142632]/70 border border-[#2A4354] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
              <ShieldCheck className="w-5 h-5 text-[#4CAF7D] shrink-0" />
              <span>{activeItem.resultSummary[lang]}</span>
            </div>
            <div className="text-xs font-mono-tech text-[#3FB8AF] bg-[#0A141A] px-3 py-1.5 rounded-lg border border-[#1D3442] shrink-0">
              {lang === 'ar' ? 'معتمد رسمياً' : 'Official Warranty'}
            </div>
          </div>

          {/* Project Thumbnails Selector Bar */}
          <div className="mt-6 pt-6 border-t border-[#1D3442]">
            <div className="text-xs font-mono-tech text-gray-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#3FB8AF]" />
              <span>{lang === 'ar' ? 'اختر المشروع للمعاينة قبل وبعد:' : 'Select Project to Compare Before & After:'}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {siteConfig.beforeAfterGallery.map((item) => {
                const isSelected = activeItem.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveItemId(item.id);
                      setSliderPosition(50);
                    }}
                    className={`relative rounded-xl overflow-hidden border p-2 text-start transition cursor-pointer ${
                      isSelected
                        ? 'bg-[#142632] border-[#FF7A33] shadow-md shadow-[#FF7A33]/20 ring-1 ring-[#FF7A33]'
                        : 'bg-[#0A141A] border-[#1D3442] hover:border-gray-500'
                    }`}
                  >
                    <div className="relative h-16 rounded-lg overflow-hidden mb-2">
                      <img
                        src={item.afterImage}
                        alt={item.title[lang]}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-1 right-1 bg-black/70 backdrop-blur-xs text-[9px] font-mono-tech text-white px-1.5 py-0.5 rounded">
                        {item.category.toUpperCase()}
                      </div>
                    </div>
                    <div className="text-[11px] font-bold text-white truncate">
                      {item.title[lang]}
                    </div>
                    <div className="text-[9px] text-gray-400 font-mono-tech truncate">
                      {item.location[lang]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
