import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  companyName: {
    ar: 'شركة كشف تسربات المياه بالرياض',
    en: 'Water Leak Detection & Waterproofing Company in Riyadh'
  },
  tagline: {
    ar: 'نكتشف التسرب .. قبل حدوث المشكلة | كشف دقيق بدون تكسير',
    en: 'We Detect Leaks Before They Cause Damage | Zero Demolition Acoustic Inspection'
  },
  subTagline: {
    ar: 'أجهزة كشف حديثة ودقيقة، ضمان معتمد على الخدمة، وحلول سريعة وفعالة مع تقارير هندسية معتمدة لشركة المياه الوطنية (NWC).',
    en: 'Advanced precision detection hardware, certified service warranty, rapid effective solutions with official NWC approved discount reports.'
  },
  phone: '+966531481797',
  phoneDisplay: '053 148 1797',
  emergencyPhone: '+966531481797',
  whatsappNumber: '966531481797',
  whatsappDisplay: '+966 53 148 1797',
  defaultWhatsAppMessage: {
    ar: 'السلام عليكم، أود طلب فحص كشف تسربات مياه / استشارة عزل في الرياض.',
    en: 'Hello, I would like to request a water leak inspection / waterproofing service in Riyadh.'
  },
  address: {
    ar: '8286-8325 الطرفاء، حي الندوة، الرياض 14814، المملكة العربية السعودية (RV2V+HH)',
    en: '8286-8325 Al Tourfah, Al Nadwa, Riyadh 14814, Saudi Arabia (RV2V+HH)'
  },
  crNumber: '1010894521',
  vatNumber: '310245896300003',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14831732.814361298!2d27.145499349999984!3d24.828698299999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fab60a5f268dd%3A0xdb8c43c677e57720!2z2LTYsdmD2Kkg2YPYtNmBINiq2LPYsdio2KfYqiDYp9mE2YXZitin2Ycg2KjYp9mE2LHZitin2LY!5e0!3m2!1sen!2sma!4v1787098742941!5m2!1sen!2sma',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=8286-8325+Al+Tourfah,+Al+Nadwa,+Riyadh+14814,+Saudi+Arabia',
  experienceYears: 16,
  completedJobsCount: '24,500+',
  responseTimeMinutes: 15,
  satisfactionRate: 99.6,
  warrantyMaxYears: 15,
  alwaysOpen24HoursEmergency: true,
  
  // Weekly Schedule (Google Business Profile format)
  workingHoursSchedule: [
    { dayName: { ar: 'السبت', en: 'Saturday' }, isOpen: true, openTime: '00:00', closeTime: '23:59', is24Hours: true },
    { dayName: { ar: 'الأحد', en: 'Sunday' }, isOpen: true, openTime: '00:00', closeTime: '23:59', is24Hours: true },
    { dayName: { ar: 'الإثنين', en: 'Monday' }, isOpen: true, openTime: '00:00', closeTime: '23:59', is24Hours: true },
    { dayName: { ar: 'الثلاثاء', en: 'Tuesday' }, isOpen: true, openTime: '00:00', closeTime: '23:59', is24Hours: true },
    { dayName: { ar: 'الأربعاء', en: 'Wednesday' }, isOpen: true, openTime: '00:00', closeTime: '23:59', is24Hours: true },
    { dayName: { ar: 'الخميس', en: 'Thursday' }, isOpen: true, openTime: '00:00', closeTime: '23:59', is24Hours: true },
    { dayName: { ar: 'الجمعة', en: 'Friday' }, isOpen: true, openTime: '00:00', closeTime: '23:59', is24Hours: true },
  ],

  socials: {
    snapchat: 'https://snapchat.com/add/leak_riyadh',
    instagram: 'https://instagram.com/leak_detection_riyadh',
    twitter: 'https://twitter.com/leak_riyadh',
    tiktok: 'https://tiktok.com/@leak_detection_riyadh',
    whatsapp: 'https://wa.me/966531481797',
    phone: 'tel:+966531481797',
  },

  services: [
    {
      id: 'leak-detection',
      iconName: 'Activity',
      title: {
        ar: 'كشف تسربات المياه بدون تكسير',
        en: 'Acoustic Leak Detection Without Demolition'
      },
      shortDesc: {
        ar: 'فحص إلكتروني دقيق بالصوت والحرارة لتحديد نقطة التسرب خلف الجدران وتحت البلاط بدقة مليمترية.',
        en: 'Pinpoint acoustic & thermal electronic inspection behind walls and beneath tiles with millimeter accuracy.'
      },
      fullDesc: {
        ar: 'نعتمد على الجيل الأحدث من أجهزة السيوجر الألمانية والمجسات الصوتية الحساسة وكاميرات التصوير الحراري (FLIR) لرصد تسربات شبكات التغذية والصرف والمحابس دون إحداث أي تكسير عشوائي في السيراميك أو الدهانات.',
        en: 'We utilize German acoustic sensors, ultrasonic geophones, and FLIR thermal cameras to pinpoint hidden pipe leaks and valves with zero wall or floor damage.'
      },
      features: {
        ar: ['فحص بالأمواج الصوتية والنيتروجين', 'تحديد مكان التسرب بدقة 100%', 'تقرير هندسي معتمد لشركة المياه', 'بدون أي تكسير غير ضروري'],
        en: ['Acoustic wave & nitrogen pressure scan', '100% leak location precision', 'NWC certified engineering report', 'Zero unnecessary wall destruction']
      },
      equipment: {
        ar: ['أجهزة SebaKMT الألمانية', 'كاميرات FLIR الحرارية', 'مجسات الجيوفون الأرضية', 'أجهزة كشف غاز النيتروجين'],
        en: ['German SebaKMT acoustic scanners', 'FLIR High-res Thermal Imagers', 'Ground Geophone Sensors', 'Trace Nitrogen Gas Sniffers']
      },
      warrantyYears: 5,
      badge: { ar: 'الأكثر طلبًا', en: 'Most Popular' },
      priceEstimate: { ar: 'تبدأ من 150 ريال (مجاني مع الإصلاح)', en: 'From 150 SAR (Free with repair)' },
      imagePlaceholder: 'https://picsum.photos/seed/leak-acoustic-tech/800/600'
    },
    {
      id: 'roof-insulation',
      iconName: 'ShieldCheck',
      title: {
        ar: 'عزل أسطح مائي وحراري',
        en: 'Roof Waterproofing & Thermal Insulation'
      },
      shortDesc: {
        ar: 'حماية كاملة للأسطح المبلطة والخرسانية والشينكو من تسرب مياه الأمطار والحرارة الشديدة.',
        en: 'Complete protection for concrete, tiled, and metal roofs against rain leaks and severe desert heat.'
      },
      fullDesc: {
        ar: 'تطبيق أنظمة العزل المائي والحراري المعتمدة باستخدام لفائف الممبرين البوليمرية والمطاط السائل ومواد الأكريليك المقاومة لأشعة الشمس فوق البنفسجية، مما يمنع تشققات الأسقف ويخفض استهلاك تكييف الهواء حتى 40%.',
        en: 'Application of polymer membrane rolls, liquid rubber, and UV-resistant acrylic elastomeric coatings to prevent cracks and slash AC electricity bills by up to 40%.'
      },
      features: {
        ar: ['عزل أسطح خرسانية وشينكو ومبلطة', 'مقاوم بنسبة 100% لمياه الأمطار', 'تخفيض استهلاك فاتورة الكهرباء', 'ضمان معتمد 10 إلى 15 سنة'],
        en: ['Concrete, corrugated & tiled roofs', '100% rain puddle impenetrable', 'Cuts AC cooling power bills', '10-15 Year certified warranty']
      },
      equipment: {
        ar: ['ماكينات رش العزل الأمريكي', 'أجهزة قياس سمك طبقة الميكرون', 'مواد سيكو كوت بروف المعتمدة'],
        en: ['Hydraulic spray machines', 'Digital micron thickness gauges', 'Certified Sika/Bitumat membranes']
      },
      warrantyYears: 15,
      badge: { ar: 'ضمان 15 سنة', en: '15-Year Warranty' },
      priceEstimate: { ar: 'حسب المساحة بالمتر المربع', en: 'Customized per square meter' },
      imagePlaceholder: 'https://picsum.photos/seed/roof-waterproofing-sa/800/600'
    },
    {
      id: 'tank-insulation',
      iconName: 'Droplet',
      title: {
        ar: 'عزل وترميم خزانات المياه',
        en: 'Water Tank Waterproofing & Restoration'
      },
      shortDesc: {
        ar: 'عزل خزانات أرضية وعلوية بمواد إيبوكسية وسيكو معتمدة وغير سامة تمنع تسرب المياه نهائياً.',
        en: 'Epoxy & non-toxic food-grade certified coatings for underground and overhead water storage tanks.'
      },
      fullDesc: {
        ar: 'معالجة الشروخ والتعشيش في جدران الخزانات الخرسانية لمنع اختلاط المياه الجوفية بمياه الشرب أو تسرب المياه إلى أساسات المبنى، مع تعقيم كامل للمياه ومطابقة لمعايير وزارة الصحة السعودية.',
        en: 'Repairing concrete fissures and water seepage to stop foundation damage and ground water contamination using food-grade non-toxic epoxy resins approved for drinking water.'
      },
      features: {
        ar: ['عزل إيبوكسي آمن لمياه الشرب', 'معالجة الشروخ والتعشيش الإنشائي', 'حماية القواعد والأساسات من الهبوط', 'تعقيم مجاني شامل للخزان'],
        en: ['Food-grade potable safe epoxy', 'Structural crack & void treatment', 'Foundation subsidence prevention', 'Complimentary full disinfection']
      },
      equipment: {
        ar: ['إيبوكسي معتمد لمياه الشرب', 'مضخات حقن الراتنجات الإسمنتية', 'أجهزة تجفيف حراري متطورة'],
        en: ['Certified food-grade epoxy', 'Polyurethane resin injection pumps', 'Industrial moisture drying blowers']
      },
      warrantyYears: 10,
      badge: { ar: 'آمن صحياً 100%', en: '100% Food Grade' },
      priceEstimate: { ar: 'عروض خاصة للخزانات الأرضية', en: 'Special rates for underground tanks' },
      imagePlaceholder: 'https://picsum.photos/seed/tank-epoxy-clean/800/600'
    },
    {
      id: 'foam-insulation',
      iconName: 'Layers',
      title: {
        ar: 'عزل فوم بولي يوريثان (مائي وحراري)',
        en: 'Polyurethane Foam Spray Insulation'
      },
      shortDesc: {
        ar: 'العزل الثنائي الأسرع والأقوى المعتمد لدى شركة الكهرباء السعودية لتقليل الحمل الحراري.',
        en: 'Dual waterproofing & thermal insulation certified by Saudi Electricity Company (SEC).'
      },
      fullDesc: {
        ar: 'طبقة فوم بولي يوريثان متجانسة بدون فواصل تغلق أدق الثغرات وتعمل كعازل مائي وحراري في خطوة واحدة، مغطاة بطبقة حماية أكريلية من الأشعة الشمسية.',
        en: 'Seamless polyurethane foam layer without joints, acting as both thermal barrier and waterproofing membrane, finished with UV protective acrylic coat.'
      },
      features: {
        ar: ['معتمد من شركة الكهرباء السعودية', 'عزل مائي وحراري مزدوج', 'وزن خفيف جداً على الأسطح', 'سرعة فائقة في التنفيذ والتجفيف'],
        en: ['SEC certified energy saver', 'Dual thermal & water barrier', 'Ultra-lightweight on building roofs', 'Rapid application & curing']
      },
      equipment: {
        ar: ['معدات Graco الأمريكية لرش الفوم', 'بولي يوريثان كثافة 45 كجم/م3', 'دهان حماية أكريليك UV'],
        en: ['USA Graco High-Pressure Reactors', 'High density 45kg/m³ Polyurethane', 'Elastomeric UV Topcoat']
      },
      warrantyYears: 10,
      badge: { ar: 'معتمد من شركة الكهرباء', en: 'SEC Certified' },
      priceEstimate: { ar: 'أسعار منافسة للمشاريع والفلل', en: 'Competitive rates for villas & projects' },
      imagePlaceholder: 'https://picsum.photos/seed/foam-spray-insulation/800/600'
    },
    {
      id: 'water-bill-diagnostic',
      iconName: 'FileText',
      title: {
        ar: 'حل ارتفاع فاتورة المياه واعتراضها',
        en: 'High Water Bill Diagnostics & NWC Reports'
      },
      shortDesc: {
        ar: 'كشف الأسباب الخفية لارتفاع الفاتورة وإصدار تقرير هندسي معتمد لتقديمه لشركة المياه لخصم المبالغ.',
        en: 'Uncover hidden leak causes and issue certified engineering reports to lower & dispute bills with NWC.'
      },
      fullDesc: {
        ar: 'هل تفاجأت بارتفاع فاتورة المياه؟ نقوم بفحص شامل للعوامات، محابس الرداد، الخزان الأرضي، وشبكة الضخ مع تقرير رسمي مختوم يثبت الإصلاح ويساعدك على تخفيض الفاتورة واسترداد المبالغ المسددة بالخطأ.',
        en: 'High water bill? We execute comprehensive diagnostics on float valves, underground tanks, check valves, and pipeline networks, issuing an official NWC-ready stamp report for bill reductions.'
      },
      features: {
        ar: ['كشف تسربات العوامات والمحابس', 'فحص الخزان الأرضي وشبكة العداد', 'تقرير هندسي إلكتروني فوري', 'متابعة وتخفيض مبالغ الفواتير'],
        en: ['Float valve & pipe checks', 'Underground tank & meter audit', 'Instant electronic certified report', 'NWC bill dispute assistance']
      },
      equipment: {
        ar: ['أجهزة قياس تدفق التدفق الرقمي', 'أجهزة الضغط الهيدروستاتيكي', 'منظومة إصدار التقارير المعتمدة'],
        en: ['Digital flow rate meters', 'Hydrostatic line test gauges', 'Certified engineering reporting suite']
      },
      warrantyYears: 5,
      badge: { ar: 'تقرير معتمد 100%', en: 'NWC Ready' },
      priceEstimate: { ar: 'كشف + تقرير رسمي معتمد', en: 'Inspection + official report' },
      imagePlaceholder: 'https://picsum.photos/seed/nwc-water-bill-report/800/600'
    },
    {
      id: 'maintenance-operations',
      iconName: 'Wrench',
      title: {
        ar: 'تشغيل وصيانة شبكات المياه والمباني',
        en: 'Facility Operation & Plumbing Maintenance'
      },
      shortDesc: {
        ar: 'عقود صيانة دورية للمجمعات، المباني السكنية، والفلل لضمان سلامة شبكات الصرف والتغذية.',
        en: 'Preventative & periodic maintenance contracts for residential compounds, villas, and commercial facilities.'
      },
      fullDesc: {
        ar: 'خدمات صيانة متكاملة تشمل فحص المضخات، الغطاسات، فلاتر المياه المركزية، وتغيير السباكة المتهالكة مع فرق طوارئ جاهزة للتدخل السريع على مدار 24 ساعة.',
        en: 'Turnkey facility maintenance including booster pumps, submersibles, central filtration systems, and pipe renewals with 24/7 rapid response standby technicians.'
      },
      features: {
        ar: ['عقود صيانة شهرية وسنوية', 'صيانة مضخات وفلاتر المياه', 'استجابة فورية لحالات الطوارئ', 'فنيون ومهندسون ذوو خبرة'],
        en: ['Monthly & annual maintenance plans', 'Pumps & filtration overhaul', '24/7 emergency response dispatch', 'Certified veteran engineers']
      },
      equipment: {
        ar: ['معدات تسليك وضغط هيدروليكي', 'أجهزة فحص دوائر المضخات', 'قطع غيار أصلية بضمان المصنع'],
        en: ['Hydraulic pressure rodders', 'Pump electrical diagnostic kits', 'OEM certified plumbing hardware']
      },
      warrantyYears: 3,
      badge: { ar: 'طوارئ 24/7', en: '24/7 Standby' },
      priceEstimate: { ar: 'عقود مرنة حسب المنشأة', en: 'Flexible contract tiers' },
      imagePlaceholder: 'https://picsum.photos/seed/facility-plumbing-maint/800/600'
    }
  ],

  howItWorks: [
    {
      stepNumber: 1,
      title: { ar: 'الاتصال أو حجز موعد', en: 'Quick Call or Booking' },
      description: {
        ar: 'تواصل معنا عبر الهاتف أو الواتساب، ويصلك فريقنا في نفس اليوم بأي حي في الرياض.',
        en: 'Reach us via direct call or WhatsApp, and our crew dispatches to your Riyadh location.'
      },
      tag: { ar: 'استجابة خلال 15 دقيقة', en: '15 min response' },
      icon: 'PhoneCall'
    },
    {
      stepNumber: 2,
      title: { ar: 'وصول المهندس المختص', en: 'Certified Tech Arrival' },
      description: {
        ar: 'يصل فني متخصص مجهز بسيارة فحص كاملة وأحدث أجهزة الرصد الإلكترونية.',
        en: 'A licensed specialist arrives equipped with full mobile diagnostic hardware.'
      },
      tag: { ar: 'سيارة فحص مجهزة', en: 'Mobile Lab' },
      icon: 'Truck'
    },
    {
      stepNumber: 3,
      title: { ar: 'الفحص الدقيق بدون تكسير', en: 'Acoustic Scan Zero Demolition' },
      description: {
        ar: 'إجراء مسح صوتي وحراري لشبكة المياه والخزانات والأسطح لتحديد موضع التسرب بدقة مليمترية.',
        en: 'Acoustic sonar & thermal scanning pinpoints the exact leak point behind tiles or walls.'
      },
      tag: { ar: 'أجهزة ألمانية متطورة', en: 'German Sonar Tech' },
      icon: 'Activity'
    },
    {
      stepNumber: 4,
      title: { ar: 'التقرير الهندسي وعرض السعر', en: 'Certified Report & Quote' },
      description: {
        ar: 'تسليمك تقرير فني يوضح أسباب المشكلة وتكلفة الإصلاح الواضحة بدون أي رسوم خفية.',
        en: 'Transparent diagnostic report detailing causes, solutions, and exact itemized pricing.'
      },
      tag: { ar: 'شفافية تامة بالأسعار', en: 'Zero Hidden Fees' },
      icon: 'FileCheck'
    },
    {
      stepNumber: 5,
      title: { ar: 'الإصلاح والعزل المعتمد', en: 'Precision Repair & Insulation' },
      description: {
        ar: 'إصلاح نقطة التسرب فقط أو تنفيذ العزل المائي بأعلى معايير الجودة ومواد العزل المعتمدة.',
        en: 'Targeted surgical repair of leak spot or premium waterproofing application.'
      },
      tag: { ar: 'أعلى مواصفات الجودة', en: 'High Standard Materials' },
      icon: 'Wrench'
    },
    {
      stepNumber: 6,
      title: { ar: 'الضمان والتقرير لشركة المياه', en: 'Warranty & NWC Clearance' },
      description: {
        ar: 'تسليم شهادة الضمان المكتوبة حتى 15 سنة وتزويدك بالتقرير المعتمد لتخفيض فاتورة المياه.',
        en: 'Official stamped warranty certificate up to 15 years + NWC approved discount paperwork.'
      },
      tag: { ar: 'ضمان معتمد حتى 15 سنة', en: 'Up to 15-Yr Guarantee' },
      icon: 'Award'
    }
  ],

  beforeAfterGallery: [
    {
      id: 'gallery-roof-1',
      category: 'roof',
      title: { ar: 'عزل سطح فيلا بالملقا ضد الأمطار', en: 'Roof Waterproofing in Al-Malqa Villa' },
      description: {
        ar: 'معالجة تسرب مياه الأمطار والتشققات السطحية وتطبيق عزل بوليمري ثلاثي الطبقات مع حماية من الأشعة فوق البنفسجية.',
        en: 'Eliminated heavy rain leaks and cracks by applying triple-layer elastomeric polymer coating with UV shield.'
      },
      location: { ar: 'حي الملقا، شمال الرياض', en: 'Al-Malqa District, North Riyadh' },
      // before roof waterproofing photo
      beforeImage: '/images/roof_before_1787092685868.jpg',
      // after roof waterproofing photo
      afterImage: '/images/roof_after_1787092697801.jpg',
      beforeLabel: { ar: 'قبل: تشققات وتسرب مياه أمطار', en: 'Before: Cracks & Rain Seepage' },
      afterLabel: { ar: 'بعد: عزل ألماني متجانس بضمان 15 سنة', en: 'After: Seamless Coating (15y Warranty)' },
      resultSummary: { ar: 'منع تسرب بنسبة 100% وتخفيض حرارة السقف 8 درجات مئوية', en: '100% Water Tightness & 8°C Roof Temp Drop' }
    },
    {
      id: 'gallery-tank-1',
      category: 'tank',
      title: { ar: 'ترميم وعزل خزان أرضي بحي الياسمين', en: 'Underground Tank Restoration in Al-Yasmin' },
      description: {
        ar: 'معالجة تعشيش الخرسانة ووقف تسرب المياه الجوفية وتطبيق إيبوكسي صحي عالي النقاوة معتمد لمياه الشرب.',
        en: 'Repaired concrete honeycombing, stopped groundwater infiltration, applied high-purity food-grade potable epoxy.'
      },
      location: { ar: 'حي الياسمين، شمال الرياض', en: 'Al-Yasmin District, North Riyadh' },
      // before tank repair photo
      beforeImage: '/images/tank_before_1787092708049.jpg',
      // after tank repair photo
      afterImage: '/images/tank_after_1787092716472.jpg',
      beforeLabel: { ar: 'قبل: تسرب وفاقد مياه يومي', en: 'Before: Heavy Water Loss' },
      afterLabel: { ar: 'بعد: تبطين إيبوكسي أزرق معقم', en: 'After: Sanitized Blue Epoxy Lining' },
      resultSummary: { ar: 'توفير فاقد الخزان بالكامل وحل مشكلة فاتورة المياه', en: 'Zero Water Loss & Huge Bill Reduction' }
    },
    {
      id: 'gallery-leak-1',
      category: 'leak',
      title: { ar: 'كشف تسرب حمام مخفي بدون تكسير بالحطين', en: 'Acoustic Leak Detection in Hittin Bathroom' },
      description: {
        ar: 'تحديد كسر دقيق في ماسورة التغذية الداخلية خلف البلاط بالسونار بدون تكسير الحمام بالكامل، وتغيير القطعة فقط.',
        en: 'Acoustic sonar located broken pressurized pipe behind tiles without destroying the bathroom floor.'
      },
      location: { ar: 'حي حطين، شمال الرياض', en: 'Hittin District, North Riyadh' },
      // before acoustic leak repair photo
      beforeImage: '/images/leak_before_1787092726080.jpg',
      // after acoustic leak repair photo
      afterImage: '/images/leak_after_1787092732253.jpg',
      beforeLabel: { ar: 'قبل: رطوبة وانتفاخ دهانات الجدار', en: 'Before: Wall Dampness & Peeling Paint' },
      afterLabel: { ar: 'بعد: إصلاح بقعة 20 سم وإعادة التبليط', en: 'After: 20cm Targeted Spot Fix & Retile' },
      resultSummary: { ar: 'توفير 85% من تكاليف التكسير والترميم العشوائي', en: 'Saved 85% vs Full Bathroom Demolition' }
    },
    {
      id: 'gallery-foam-1',
      category: 'foam',
      title: { ar: 'عزل فوم بولي يوريثان لسطح تجاري بالنرجس', en: 'Polyurethane Foam Spray on Commercial Roof' },
      description: {
        ar: 'رش فوم كثافة 45 كجم/م3 بسماكة 4 سم مع طبقة حماية أكريلية معتمدة لتقليل استهلاك المكيفات بنسبة 40%.',
        en: 'High density 45kg/m³ polyurethane foam sprayed at 4cm thickness with UV elastomeric topcoat.'
      },
      location: { ar: 'حي النرجس، شمال الرياض', en: 'Al-Narjis District, North Riyadh' },
      // before foam spray photo
      beforeImage: '/images/foam_before_1787092742987.jpg',
      // after foam spray photo
      afterImage: '/images/foam_after_1787092750157.jpg',
      beforeLabel: { ar: 'قبل: سطح شينكو ينفذ الحرارة والماء', en: 'Before: Leaking & Hot Metal Sheet' },
      afterLabel: { ar: 'بعد: طبقة فوم عازلة متصلة', en: 'After: Monolithic Insulation Coat' },
      resultSummary: { ar: 'تخفيض حمل التكييف بنسبة 40% وضمان 10 سنوات', en: '40% AC Energy Savings with 10y Warranty' }
    }
  ],

  coverageDistricts: [
    // North Riyadh
    { name: { ar: 'حي الياسمين', en: 'Al-Yasmin' }, zone: 'north', popular: true },
    { name: { ar: 'حي الملقا', en: 'Al-Malqa' }, zone: 'north', popular: true },
    { name: { ar: 'حي النرجس', en: 'Al-Narjis' }, zone: 'north', popular: true },
    { name: { ar: 'حي حطين', en: 'Hittin' }, zone: 'north', popular: true },
    { name: { ar: 'حي العارض', en: 'Al-Arid' }, zone: 'north', popular: true },
    { name: { ar: 'حي الصحافة', en: 'Al-Sahafa' }, zone: 'north', popular: true },
    { name: { ar: 'حي العقيق', en: 'Al-Aqeeq' }, zone: 'north' },
    { name: { ar: 'حي الغدير', en: 'Al-Ghadir' }, zone: 'north' },
    { name: { ar: 'حي الربيع', en: 'Al-Rabi' }, zone: 'north' },
    { name: { ar: 'حي الندى', en: 'Al-Nada' }, zone: 'north' },
    { name: { ar: 'حي القيروان', en: 'Al-Qirawan' }, zone: 'north' },
    
    // East Riyadh
    { name: { ar: 'حي اليرموك', en: 'Al-Yarmouk' }, zone: 'east', popular: true },
    { name: { ar: 'حي المونسية', en: 'Al-Munsiyah' }, zone: 'east', popular: true },
    { name: { ar: 'حي الرمال', en: 'Al-Rimal' }, zone: 'east', popular: true },
    { name: { ar: 'حي الروضة', en: 'Al-Rawdah' }, zone: 'east' },
    { name: { ar: 'حي الحمراء', en: 'Al-Hamra' }, zone: 'east' },
    { name: { ar: 'حي القدس', en: 'Al-Quds' }, zone: 'east' },
    { name: { ar: 'حي الخليج', en: 'Al-Khaleej' }, zone: 'east' },
    { name: { ar: 'حي قرطبة', en: 'Qurtubah' }, zone: 'east', popular: true },

    // Center & West Riyadh
    { name: { ar: 'حي السليمانية', en: 'Al-Sulaimaniyah' }, zone: 'center' },
    { name: { ar: 'حي العليا', en: 'Al-Olaya' }, zone: 'center', popular: true },
    { name: { ar: 'حي المحمدية', en: 'Al-Muhammadiyah' }, zone: 'west' },
    { name: { ar: 'حي الرائد', en: 'Al-Raid' }, zone: 'west' },
    { name: { ar: 'حي ظهرة لبن', en: 'Dhahrat Laban' }, zone: 'west', popular: true },
    { name: { ar: 'حي طويق', en: 'Tuwaiq' }, zone: 'west' },
    { name: { ar: 'حي السويدي', en: 'Al-Suwaidi' }, zone: 'south' },
    { name: { ar: 'حي الشفا', en: 'Al-Shifa' }, zone: 'south' },
    { name: { ar: 'حي العزيزية', en: 'Al-Aziziyah' }, zone: 'south' },
  ],

  testimonials: [
    {
      id: 'test-1',
      name: { ar: 'أبو فهد القحطاني', en: 'Abu Fahad Al-Qahtani' },
      district: { ar: 'حي الملقا - الرياض', en: 'Al-Malqa, Riyadh' },
      service: { ar: 'كشف تسرب الحمام بدون تكسير', en: 'Bathroom Leak Scan Without Demolition' },
      rating: 5,
      comment: {
        ar: 'كان عندي تسريب مياه هلك الجيران بالدور الأرضي وكنت خايف أكسر حمام رخام كامل. وصل المهندس بجهاز السونار وحدد نقطة التسرب بالضبط في كوع 3/4 بوصة، فك بلاطة واحدة وصلحها. وفرتوا علي آلاف الريالات!',
        en: 'I had a leak dripping to the ground floor and feared tearing down an expensive marble bathroom. The engineer arrived with sonar, pinpointed the exact fitting, removed just one single tile, and fixed it perfectly.'
      },
      date: { ar: 'منذ يومين', en: '2 days ago' },
      verified: true
    },
    {
      id: 'test-2',
      name: { ar: 'د. خالد التميمي', en: 'Dr. Khalid Al-Tamimi' },
      district: { ar: 'حي الياسمين - الرياض', en: 'Al-Yasmin, Riyadh' },
      service: { ar: 'حل فاتورة المياه وعزل الخزان', en: 'Water Bill Dispute & Tank Insulation' },
      rating: 5,
      comment: {
        ar: 'فاتورة المياه جتني 3,400 ريال بالخطأ بسبب تسريب في رقبة الخزان الأرضي. سووا كشف وعزلوا الخزان وعطوني تقرير معتمد مختوم لشركة المياه الوطنية، وتم تسوية الفاتورة وتخفيضها إلى 180 ريال. مصداقية وسرعة فائقة.',
        en: 'My water bill spiked to 3,400 SAR due to a hidden underground tank crack. They isolated the leak, waterproofed the tank, and provided an NWC certified stamped report which reduced my bill to 180 SAR.'
      },
      date: { ar: 'منذ 5 أيام', en: '5 days ago' },
      verified: true
    },
    {
      id: 'test-3',
      name: { ar: 'م. عبدالعزيز الشمري', en: 'Eng. Abdulaziz Al-Shammari' },
      district: { ar: 'حي النرجس - الرياض', en: 'Al-Narjis, Riyadh' },
      service: { ar: 'عزل فوم وأسطح بضمان 15 سنة', en: 'Foam & Roof Insulation (15y Warranty)' },
      rating: 5,
      comment: {
        ar: 'تعاملت معهم لعزل سطح فيلا 450 م2 فوم بولي يوريثان. التزام بالمواعيد، عمالة محترفة، وأعطوني شهادة ضمان معتمدة ومختومة 15 سنة. لاحظت انخفاض فوري في حرارة الدور العلوي وفاتورة الكهرباء.',
        en: 'Contracted them for a 450m² villa roof polyurethane foam insulation. Punctual crew, master craftsmanship, stamped 15-year warranty. The second-floor temperature dropped dramatically right away.'
      },
      date: { ar: 'منذ أسبوع', en: '1 week ago' },
      verified: true
    },
    {
      id: 'test-4',
      name: { ar: 'سلطان الدوسري', en: 'Sultan Al-Dossary' },
      district: { ar: 'حي المونسية - الرياض', en: 'Al-Munsiyah, Riyadh' },
      service: { ar: 'طوارئ كشف تسرب شبكة التغذية', en: 'Emergency Pressure Pipe Diagnostic' },
      rating: 5,
      comment: {
        ar: 'اتصلت بهم الساعة 11 مساءً بعد ما انكسر خط دينمو رئيسي. فريق الطوارئ وصل خلال 20 دقيقة وسيطروا على التسريب. خدمة ممتازة وتستاهل كل ريال.',
        en: 'Called them late at night for a ruptured booster pump line. Emergency standby crew arrived in under 20 minutes and contained the leak safely. Top notch reliability.'
      },
      date: { ar: 'منذ أسبوعين', en: '2 weeks ago' },
      verified: true
    }
  ],

  faqs: [
    {
      id: 'faq-1',
      category: 'detection',
      question: {
        ar: 'هل يتم الكشف عن مكان التسرب حقاً بدون أي تكسير في السيراميك أو الجدران؟',
        en: 'Is the leak truly located with zero demolition of ceramic tiles or walls?'
      },
      answer: {
        ar: 'نعم 100%! نعتمد على أحدث الأجهزة الألمانية الصوتية (Acoustic Sensors) والكاميرات الحرارية بالأشعة تحت الحمراء (FLIR) وأجهزة ضغط غاز النيتروجين الآمن، والتي تحدد موضع الكسر بدقة مليمترية خلف الجدار أو تحت البلاط دون الحاجة لأي تكسير استكشافي.',
        en: 'Yes, 100%! We utilize German acoustic sonar sensors, high-res FLIR infrared thermal cameras, and safe tracer nitrogen pressure gauges that pinpoint the exact leak point beneath floor tiles or behind concrete without unnecessary exploratory demolition.'
      }
    },
    {
      id: 'faq-2',
      category: 'nwc',
      question: {
        ar: 'هل تقرير الكشف لديكم معتمد لدى شركة المياه الوطنية لحل مشكلة ارتفاع الفاتورة؟',
        en: 'Are your inspection reports certified by the National Water Company (NWC) to dispute high bills?'
      },
      answer: {
        ar: 'نعم، نصدر تقارير هندسية إلكترونية رسمية معتمدة ومختومة ومطابقة لكافة اشتراطات شركة المياه الوطنية (NWC). بعد إصلاح التسرب، نقوم برفع التقرير أو تزويدك به لتقديمه عبر فرعك الإلكتروني بوزارة البيئة والمياه لطلب تسوية وخصم الفاتورة فوراً.',
        en: 'Yes, we issue officially certified and stamped engineering reports fully compliant with National Water Company (NWC) requirements. This report serves as legal proof of leak detection and repair to adjust, dispute, or lower your high water utility bills.'
      }
    },
    {
      id: 'faq-3',
      category: 'duration',
      question: {
        ar: 'كم يستغرق فحص كشف التسربات في الفيلا أو الشقة؟',
        en: 'How long does an inspection take for a typical villa or apartment?'
      },
      answer: {
        ar: 'يستغرق الفحص الشامل للفيلا (يشمل الحمامات، المطابخ، شبكة التغذية، الخزان الأرضي، الخزان العلوي، والمحابس) ما بين 30 إلى 60 دقيقة فقط باستخدام أجهزتنا السريعة، ويتم تسليمك التقرير والنتائج فور الانتهاء.',
        en: 'A comprehensive inspection for an entire villa (including bathrooms, kitchens, supply lines, underground tank, rooftop tank, and valves) takes only 30 to 60 minutes with our advanced digital equipment, with instant on-site results.'
      }
    },
    {
      id: 'faq-4',
      category: 'warranty',
      question: {
        ar: 'ما هي مدة الضمان على أعمال كشف التسربات وعزل الأسطح والخزانات؟',
        en: 'What is the warranty period for leak repairs, roof insulation, and tank waterproofing?'
      },
      answer: {
        ar: 'نقدم ضمانات معتمدة ومكتوبة: من 3 إلى 5 سنوات على إصلاح نقاط التسرب وشبكات السباكة، وضمان من 10 إلى 15 سنة على أعمال العزل المائي والحراري للأسطح والخزانات وعزل الفوم، مع متابعة دورية مجانية.',
        en: 'We provide stamped written warranties: 3 to 5 years on plumbing and pipeline spot repairs, and 10 to 15 years on roof waterproofing, underground tank epoxy insulation, and polyurethane foam coatings, including free periodic checkups.'
      }
    },
    {
      id: 'faq-5',
      category: 'coverage',
      question: {
        ar: 'هل تغطون جميع أحياء وضواحي الرياض؟ وما هي سرعة الوصول؟',
        en: 'Do you cover all Riyadh districts and neighborhoods, and how fast can you arrive?'
      },
      answer: {
        ar: 'نعم، نمتلك أسطول سيارات فحص متكاملة موزعة استراتيجياً في شمال الرياض (الملقا، الياسمين، النرجس، حطين)، وشرق الرياض (اليرموك، المونسية، الرمال)، وغرب وجنوب ووسط الرياض، بمتوسط وقت وصول لا يتجاوز 15 إلى 30 دقيقة.',
        en: 'Yes, we maintain a fleet of mobile diagnostic vans stationed across North Riyadh (Al-Malqa, Al-Yasmin, Al-Narjis, Hittin), East Riyadh, West, South, and Central Riyadh, with an average response time of 15 to 30 minutes.'
      }
    }
  ]
};

// Complete bilingual UI text dictionary for full site translation
export const uiTranslations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      howItWorks: 'كيف نعمل',
      beforeAfter: 'نماذج أعمالنا',
      coverage: 'أحياء الرياض',
      testimonials: 'آراء العملاء',
      faq: 'الأسئلة الشائعة',
      contact: 'طلب كشف فوري',
      emergencyCall: 'طوارئ 24/7'
    },
    hero: {
      badge: 'الشركة الهندسية المعتمدة رقم 1 بالرياض',
      headingMain: 'كشف تسربات المياه بأحدث الأجهزة الصوتية',
      headingAccent: 'بدون تكسير نهائياً',
      subheading: 'فحص مليمتر دقيق بالأمواج الصوتية والكاميرات الحرارية | حل فوري لارتفاع فاتورة المياه | عزل أسطح وخزانات معتمد بضمان حتى 15 سنة.',
      ctaInspection: 'اطلب كشف فوري مجاني',
      ctaWhatsApp: 'واتساب فوري مع المهندس',
      callNow: 'اتصل الآن: ',
      trustBadge1: '16+ سنة خبرة بالرياض',
      trustBadge2: 'فحص معتمد بدون تكسير',
      trustBadge3: 'تقرير معتمد لشركة المياه',
      trustBadge4: 'ضمان مكتوب حتى 15 سنة',
      sonarLiveTitle: 'محاكي الفحص الصوتي الحي',
      sonarStatusNormal: 'حالة الشبكة: رصد ذبذبات صوتية',
      sonarStatusLeak: 'تم تحديد نقطة التسرب بدقة!',
      sonarStatusFixed: 'تم إصلاح التسرب بنجاح 100%',
      sonarAccuracy: 'دقة تحديد الموقع:',
      sonarPressure: 'ضغط الشبكة:',
      sonarDepth: 'عمق الفحص:',
      sonarSignal: 'إشارة السونار:',
      simulateAction: 'اختبر كشف التسرب الآن',
      resetAction: 'إعادة الفحص',
      acousticReading: 'قراءة التردد الصوتي:'
    },
    services: {
      badge: 'خدمات هندسية متكاملة',
      title: 'حلول احترافية لكشف التسربات والعزل المعتمد بالرياض',
      subtitle: 'نجمع بين أحدث التقنيات الألمانية والمواد العازلة المعتمدة لتقديم حلول جذرية تضمن سلامة مبناك وخفض فواتيرك.',
      detailsBtn: 'تفاصيل الخدمة والتسعير',
      warranty: 'ضمان:',
      years: 'سنوات',
      requestService: 'طلب الخدمة الآن',
      bookViaWhatsApp: 'حجز فحص للخدمة عبر الواتساب'
    },
    howItWorks: {
      badge: 'خطوات منظمة',
      title: 'كيف تتم عملية الكشف والإصلاح؟',
      subtitle: 'مسار عمل هندسي دقيق من لحظة اتصالك وحتى استلام شهادة الضمان والتقرير المعتمد.'
    },
    beforeAfter: {
      badge: 'واقعية وموثقة',
      title: 'نماذج قبل وبعد أعمال العزل والكشف',
      subtitle: 'اسحب المقبض لمشاهدة نتائج العزل ومعالجة التسربات في مشاريعنا المنفذة بأحياء الرياض.',
      filterAll: 'جميع الأعمال',
      filterRoof: 'عزل أسطح',
      filterTank: 'عزل خزانات',
      filterLeak: 'كشف تسربات',
      filterFoam: 'عزل فوم',
      dragHint: 'اسحب لمقارنة الصور قبل وبعد'
    },
    stats: {
      badge: 'أرقام تتحدث عن جودتنا',
      title: 'سجل حافل بالثقة والإنجاز في منطقة الرياض',
      experience: 'سنوات خبرة متواصلة',
      completedJobs: 'موقع تم فحصه وعزله بنجاح',
      responseTime: 'دقيقة متوسط سرعة الوصول',
      satisfaction: 'نسبة رضا العملاء الموثقة',
      readoutStatus: 'نظام التشخيص: نشط ومحدث'
    },
    coverage: {
      badge: 'تغطية شاملة 24/7',
      title: 'نغطي كافة أحياء الرياض وضواحيها',
      subtitle: 'سيارات الفحص مجهزة وموزعة في كافة القطاعات للوصول إليك في أسرع وقت ممكن.',
      searchPlaceholder: 'ابحث عن حيك (مثال: الياسمين، الملقا، النرجس...)',
      filterNorth: 'شمال الرياض',
      filterEast: 'شرق الرياض',
      filterWest: 'غرب الرياض',
      filterSouth: 'جنوب الرياض',
      filterCenter: 'وسط الرياض',
      filterAll: 'كافة الأحياء',
      activeDispatch: 'فريق فحص متواجد حالياً بالقرب من حيك',
      dispatchBtn: 'طلب إرسال أقرب سيارة فحص لحيك'
    },
    testimonials: {
      badge: 'تجارب حقيقية',
      title: 'ماذا يقول عملاؤنا في الرياض؟',
      subtitle: 'تقييمات موثقة من أصحاب الفلل والمنشآت التي حلت مشاكل التسربات ووفرت فواتيرها معنا.',
      verifiedClient: 'عميل موثق'
    },
    urgent: {
      alert: 'حالة طوارئ؟',
      text: 'تسرب مياه مفاجئ أو صوت تدفق خفي؟ فريق الطوارئ جاهز للتحرك إلى موقعك فوراً خلال 15 دقيقة.',
      callBtn: 'اتصال طارئ مباشر',
      whatsappBtn: 'واتساب الطوارئ الفوري'
    },
    faq: {
      badge: 'إجابات واضحة',
      title: 'الأسئلة الأكثر شيوعاً حول كشف التسربات والعزل',
      subtitle: 'كل ما تحتاج لمعرفته حول طريقة الفحص، الأجهزة، الضمانات، وتقارير شركة المياه.'
    },
    form: {
      badge: 'احصل على عرض سعر فوري',
      title: 'اطلب كشف تسربات أو استشارة عزل معتمدة',
      subtitle: 'املأ البيانات البسيطة وسيتواصل معك المهندس المختص فوراً عبر الواتساب مع تسعيرة تقديرية وتحديد موعد.',
      serviceLabel: 'نوع الخدمة المطلوبة',
      selectServicePlaceholder: '-- اختر الخدمة المطلوبة --',
      districtLabel: 'الحي السكني بالرياض',
      districtPlaceholder: 'مثال: حي الملقا / حي الياسمين',
      problemTypeLabel: 'أعراض المشكلة (اختر ما ينطبق)',
      symptom1: 'ارتفاع مفاجئ في فاتورة المياه',
      symptom2: 'رطوبة أو تقشير دهانات بالجدران',
      symptom3: 'صوت صفير أو تدفق مياه خفي',
      symptom4: 'خرير مياه من السقف وقت المطر',
      symptom5: 'نقص سريع في مياه الخزان الأرضي',
      symptom6: 'هبوط في بلاط الحوش أو الممرات',
      notesLabel: 'وصف مختصر للمشكلة أو المساحة',
      notesPlaceholder: 'اكتب أي ملاحظات إضافية تساعد الفني...',
      nameLabel: 'الاسم الكريم',
      namePlaceholder: 'أدخل اسمك',
      phoneLabel: 'رقم الجوال (للتواصل السريع)',
      phonePlaceholder: '05xxxxxxxx',
      submitBtn: 'إرسال الطلب عبر الواتساب فوراً',
      guaranteeNotice: 'كشف دقيق 100% بدون تكسير مع تقرير معتمد'
    },
    mapHours: {
      badge: 'مقرنا وأوقات العمل',
      title: 'موقعنا وساعات العمل المعتمدة بالرياض',
      subtitle: 'نستقبلكم في مقرنا بالصحافة، وتتحرك فرقنا الميدانية لتغطية كافة أرجاء مدينة الرياض على مدار الساعة.',
      openNow: 'مفتوح الآن (خدمة 24 ساعة)',
      closedNow: 'مغلق حالياً',
      scheduleTitle: 'ساعات العمل وأوقات الاستقبال',
      directionsBtn: 'فتح الاتجاهات على خرائط جوجل',
      addressTitle: 'العنوان الرئيسي:',
      crTitle: 'السجل التجاري:'
    },
    footer: {
      aboutTitle: 'عن الشركة',
      aboutDesc: 'الشركة الرائدة والمتخصصة في كشف تسربات المياه بأحدث الأجهزة الصوتية بدون تكسير، وعزل الأسطح والخزانات المعتمد بالرياض، مع تقارير رسمية لشركة المياه الوطنية وضمانات تصل إلى 15 سنة.',
      quickLinks: 'روابط سريعة',
      servicesTitle: 'خدماتنا الرئيسية',
      contactTitle: 'تواصل معنا مباشرة',
      rights: 'جميع الحقوق محفوظة ©',
      privacy: 'سياسة الخصوصية وشروط الضمان'
    },
    mobileBar: {
      call: 'اتصال هاتفي',
      whatsapp: 'محادثة واتساب',
      book: 'حجز كشف'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      howItWorks: 'How It Works',
      beforeAfter: 'Projects',
      coverage: 'Coverage Areas',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contact: 'Book Inspection',
      emergencyCall: '24/7 Emergency'
    },
    hero: {
      badge: 'Top Certified Water Leak & Insulation Specialist in Riyadh',
      headingMain: 'Acoustic Water Leak Detection',
      headingAccent: 'Zero Wall Demolition Guaranteed',
      subheading: 'Millimeter-precise sonar & thermal imaging scans | Instant water bill dispute diagnostics | Certified roof & tank waterproofing with up to 15-year warranty.',
      ctaInspection: 'Request Free Inspection',
      ctaWhatsApp: 'Instant WhatsApp Booking',
      callNow: 'Call Now: ',
      trustBadge1: '16+ Years Riyadh Experience',
      trustBadge2: 'Zero Demolition Inspection',
      trustBadge3: 'NWC Certified Reports',
      trustBadge4: 'Up to 15-Year Warranty',
      sonarLiveTitle: 'Live Acoustic Sonar Diagnostic Simulator',
      sonarStatusNormal: 'Network Status: Listening for Acoustic Frequencies',
      sonarStatusLeak: 'Leak Point Detected with Pinpoint Precision!',
      sonarStatusFixed: 'Leak Repaired 100% Successfully',
      sonarAccuracy: 'Location Accuracy:',
      sonarPressure: 'Line Pressure:',
      sonarDepth: 'Scan Depth:',
      sonarSignal: 'Sonar Signal:',
      simulateAction: 'Simulate Leak Scan',
      resetAction: 'Reset Scanner',
      acousticReading: 'Acoustic Frequency:'
    },
    services: {
      badge: 'Certified Engineering Solutions',
      title: 'Comprehensive Leak Detection & Insulation Services in Riyadh',
      subtitle: 'Combining German sonar technology and high-grade waterproofing materials to safeguard your property and lower utility bills.',
      detailsBtn: 'Service Details & Pricing',
      warranty: 'Warranty:',
      years: 'Years',
      requestService: 'Request Service',
      bookViaWhatsApp: 'Book Service via WhatsApp'
    },
    howItWorks: {
      badge: 'Proven Sequence',
      title: 'Our Proven 6-Step Detection & Repair Process',
      subtitle: 'A disciplined diagnostic workflow from the moment you call to the stamped warranty and NWC certified report delivery.'
    },
    beforeAfter: {
      badge: 'Verified Case Studies',
      title: 'Before & After Insulation & Detection Results',
      subtitle: 'Drag the split slider to view real before-and-after results across Riyadh residential and commercial projects.',
      filterAll: 'All Works',
      filterRoof: 'Roof Waterproofing',
      filterTank: 'Tank Lining',
      filterLeak: 'Leak Detection',
      filterFoam: 'Foam Spray',
      dragHint: 'Drag handle to compare Before & After'
    },
    stats: {
      badge: 'Verified Performance',
      title: 'A Proven Track Record of Excellence Across Riyadh',
      experience: 'Years of Experience',
      completedJobs: 'Properties Inspected & Waterproofed',
      responseTime: 'Minutes Average Response Time',
      satisfaction: 'Customer Satisfaction Rate',
      readoutStatus: 'Telemetry Diagnostics: Online & Active'
    },
    coverage: {
      badge: 'Riyadh-Wide 24/7 Dispatch',
      title: 'Serving All Riyadh Neighborhoods & Districts',
      subtitle: 'Our mobile diagnostic units are stationed across Riyadh for rapid on-site dispatch.',
      searchPlaceholder: 'Search your neighborhood (e.g. Al-Yasmin, Al-Malqa, Hittin...)',
      filterNorth: 'North Riyadh',
      filterEast: 'East Riyadh',
      filterWest: 'West Riyadh',
      filterSouth: 'South Riyadh',
      filterCenter: 'Central Riyadh',
      filterAll: 'All Districts',
      activeDispatch: 'Mobile inspection crew currently stationed near your district',
      dispatchBtn: 'Dispatch Nearest Unit to My District'
    },
    testimonials: {
      badge: 'Real Feedback',
      title: 'What Our Clients in Riyadh Say',
      subtitle: 'Genuine reviews from homeowners and facility managers who solved leaks and lowered their water bills.',
      verifiedClient: 'Verified Client'
    },
    urgent: {
      alert: 'Water Leak Emergency?',
      text: 'Sudden pipe burst or water seepage? Our emergency response team arrives at your doorstep in under 15 minutes.',
      callBtn: 'Call Emergency Hotline',
      whatsappBtn: 'Instant WhatsApp Alert'
    },
    faq: {
      badge: 'Transparent Answers',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about acoustic detection, NWC reports, pricing, and warranty policies.'
    },
    form: {
      badge: 'Get an Instant Quote',
      title: 'Book Inspection or Request Waterproofing Consultation',
      subtitle: 'Fill out this simple form and our certified engineer will immediately respond via WhatsApp with a detailed quotation.',
      serviceLabel: 'Required Service',
      selectServicePlaceholder: '-- Select a Service --',
      districtLabel: 'Riyadh District / Neighborhood',
      districtPlaceholder: 'e.g. Al-Malqa / Al-Yasmin',
      problemTypeLabel: 'Observed Leak Symptoms (Check all that apply)',
      symptom1: 'Sudden surge in monthly water bill',
      symptom2: 'Moisture or peeling paint on walls',
      symptom3: 'Hissing sound or hidden water flow sound',
      symptom4: 'Ceiling drips during rain storms',
      symptom5: 'Rapid drainage of underground water tank',
      symptom6: 'Subsidence or cracks in courtyard tiles',
      notesLabel: 'Brief Description or Area Dimensions',
      notesPlaceholder: 'Add any specific notes to assist our team...',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'Enter your name',
      phoneLabel: 'Mobile Number (for quick contact)',
      phonePlaceholder: '05xxxxxxxx',
      submitBtn: 'Send Request via WhatsApp Now',
      guaranteeNotice: '100% Non-destructive scan with official certified report'
    },
    mapHours: {
      badge: 'Office & Operating Hours',
      title: 'Our Location & Working Schedule in Riyadh',
      subtitle: 'Visit our office in Al-Sahafa or request our mobile units dispatched 24/7 across Riyadh.',
      openNow: 'Open Now (24/7 Standby)',
      closedNow: 'Currently Closed',
      scheduleTitle: 'Weekly Operating Hours',
      directionsBtn: 'Open in Google Maps',
      addressTitle: 'Headquarters:',
      crTitle: 'Commercial Reg (CR):'
    },
    footer: {
      aboutTitle: 'About Us',
      aboutDesc: 'The leading specialized company in acoustic water leak detection without demolition, roof & tank waterproofing in Riyadh, with official NWC certified reports and up to 15-year warranty.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Core Services',
      contactTitle: 'Direct Contact',
      rights: 'All rights reserved ©',
      privacy: 'Privacy Policy & Warranty Terms'
    },
    mobileBar: {
      call: 'Direct Call',
      whatsapp: 'WhatsApp',
      book: 'Book Scan'
    }
  }
};
