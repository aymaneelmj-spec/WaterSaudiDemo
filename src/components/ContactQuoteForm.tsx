import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MapPin,
  FileText,
  User,
  Phone,
  Activity
} from 'lucide-react';
import { Language } from '../types';
import { siteConfig, uiTranslations } from '../data/siteConfig';
import { WaveDivider } from './WaveDivider';

interface ContactQuoteFormProps {
  lang: Language;
}

export const ContactQuoteForm: React.FC<ContactQuoteFormProps> = ({ lang }) => {
  const t = uiTranslations[lang].form;

  const [selectedService, setSelectedService] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const symptomsList = [
    { id: 'symptom1', text: t.symptom1 },
    { id: 'symptom2', text: t.symptom2 },
    { id: 'symptom3', text: t.symptom3 },
    { id: 'symptom4', text: t.symptom4 },
    { id: 'symptom5', text: t.symptom5 },
    { id: 'symptom6', text: t.symptom6 }
  ];

  const handleToggleSymptom = (symptomText: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomText)
        ? prev.filter((s) => s !== symptomText)
        : [...prev, symptomText]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct formatted WhatsApp message with full details
    const serviceObj = siteConfig.services.find((s) => s.id === selectedService);
    const serviceName = serviceObj ? serviceObj.title[lang] : selectedService || 'كشف عام';

    const messageLines = [
      lang === 'ar' ? '📋 *طلب كشف تسربات وعزل جديد*' : '📋 *New Leak & Waterproofing Inquiry*',
      '------------------------------',
      `${lang === 'ar' ? '👤 *الاسم:*' : '👤 *Name:*'} ${name || (lang === 'ar' ? 'عميل' : 'Client')}`,
      `${lang === 'ar' ? '📞 *الجوال:*' : '📞 *Phone:*'} ${phone || 'N/A'}`,
      `${lang === 'ar' ? '📍 *الحي بالرياض:*' : '📍 *District:*'} ${district || (lang === 'ar' ? 'الرياض' : 'Riyadh')}`,
      `${lang === 'ar' ? '🛠️ *الخدمة المطلوبة:*' : '🛠️ *Service:*'} ${serviceName}`,
      selectedSymptoms.length > 0
        ? `${lang === 'ar' ? '⚠️ *الأعراض الملاحظة:*' : '⚠️ *Symptoms:*'}\n- ${selectedSymptoms.join('\n- ')}`
        : '',
      notes ? `${lang === 'ar' ? '📝 *ملاحظات إضافية:*' : '📝 *Notes:*'} ${notes}` : '',
      '------------------------------',
      lang === 'ar'
        ? '✅ أرجو تحديد موعد للفحص وإرسال عرض السعر المعتمد.'
        : '✅ Please schedule an inspection and provide a quotation.'
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      messageLines
    )}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
    }, 400);
  };

  return (
    <section id="contact" className="relative py-20 bg-[#0A141A] text-[#F4F6F5] overflow-hidden">
      <WaveDivider variant="amber" className="mb-12" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        {/* The Quote Form Container */}
        <div className="bg-[#0E1B23] border border-[#1D3442] rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service & District Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-2">
                  {t.serviceLabel} *
                </label>
                <select
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#070D12] border border-[#2A4354] text-white text-sm focus:outline-none focus:border-[#FF7A33] transition"
                >
                  <option value="">{t.selectServicePlaceholder}</option>
                  {siteConfig.services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title[lang]}
                    </option>
                  ))}
                </select>
              </div>

              {/* District Input */}
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-2">
                  {t.districtLabel} *
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    required
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder={t.districtPlaceholder}
                    className="w-full py-3.5 px-4 pr-10 rtl:pr-4 rtl:pl-10 rounded-xl bg-[#070D12] border border-[#2A4354] text-white text-sm focus:outline-none focus:border-[#FF7A33] transition"
                  />
                  <MapPin className="w-4 h-4 text-gray-400 absolute right-3 rtl:right-auto rtl:left-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Symptoms Checklist */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-2.5">
                {t.problemTypeLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {symptomsList.map((symptom) => {
                  const isChecked = selectedSymptoms.includes(symptom.text);
                  return (
                    <div
                      key={symptom.id}
                      onClick={() => handleToggleSymptom(symptom.text)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition select-none ${
                        isChecked
                          ? 'bg-[#FF7A33]/15 border-[#FF7A33] text-white font-semibold'
                          : 'bg-[#070D12] border-[#2A4354] text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center text-xs shrink-0 ${
                          isChecked ? 'bg-[#FF7A33] text-black font-bold' : 'border border-gray-600'
                        }`}
                      >
                        {isChecked && '✓'}
                      </div>
                      <span>{symptom.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Client Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-2">
                  {t.nameLabel} *
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    className="w-full py-3.5 px-4 pr-10 rtl:pr-4 rtl:pl-10 rounded-xl bg-[#070D12] border border-[#2A4354] text-white text-sm focus:outline-none focus:border-[#FF7A33] transition"
                  />
                  <User className="w-4 h-4 text-gray-400 absolute right-3 rtl:right-auto rtl:left-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-2">
                  {t.phoneLabel} *
                </label>
                <div className="relative flex items-center">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.phonePlaceholder}
                    dir="ltr"
                    className="w-full py-3.5 px-4 pr-10 rtl:pr-4 rtl:pl-10 rounded-xl bg-[#070D12] border border-[#2A4354] text-white text-sm focus:outline-none focus:border-[#FF7A33] transition font-mono-tech"
                  />
                  <Phone className="w-4 h-4 text-gray-400 absolute right-3 rtl:right-auto rtl:left-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Notes textarea */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-2">
                {t.notesLabel}
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.notesPlaceholder}
                className="w-full py-3 px-4 rounded-xl bg-[#070D12] border border-[#2A4354] text-white text-sm focus:outline-none focus:border-[#FF7A33] transition resize-none"
              />
            </div>

            {/* Submit Button (Direct to WhatsApp) */}
            <div>
              <button
                type="submit"
                id="btn-submit-quote-form"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#20bd5a] to-[#25D366] text-black font-extrabold text-base sm:text-lg shadow-xl shadow-[#25D366]/20 hover:opacity-95 transition active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-black text-black" />
                <span>{t.submitBtn}</span>
              </button>

              <p className="text-center text-xs font-mono-tech text-gray-400 mt-3 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#4CAF7D]" />
                <span>{t.guaranteeNotice}</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
