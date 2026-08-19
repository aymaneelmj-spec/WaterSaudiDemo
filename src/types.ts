export type Language = 'ar' | 'en';

export interface ServiceItem {
  id: string;
  iconName: string;
  title: { ar: string; en: string };
  shortDesc: { ar: string; en: string };
  fullDesc: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
  equipment: { ar: string[]; en: string[] };
  warrantyYears: number;
  badge: { ar: string; en: string };
  priceEstimate: { ar: string; en: string };
  imagePlaceholder: string;
}

export interface HowItWorksStep {
  stepNumber: number;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  tag: { ar: string; en: string };
  icon: string;
}

export interface BeforeAfterItem {
  id: string;
  category: 'roof' | 'tank' | 'leak' | 'foam';
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  location: { ar: string; en: string };
  beforeImage: string;
  afterImage: string;
  beforeLabel: { ar: string; en: string };
  afterLabel: { ar: string; en: string };
  resultSummary: { ar: string; en: string };
}

export interface TestimonialItem {
  id: string;
  name: { ar: string; en: string };
  district: { ar: string; en: string };
  service: { ar: string; en: string };
  rating: number;
  comment: { ar: string; en: string };
  date: { ar: string; en: string };
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: { ar: string; en: string };
  answer: { ar: string; en: string };
  category: string;
}

export interface DailySchedule {
  dayName: { ar: string; en: string };
  isOpen: boolean;
  openTime: string; // e.g. "08:00" or "00:00"
  closeTime: string; // e.g. "23:00" or "23:59"
  is24Hours?: boolean;
}

export interface DistrictArea {
  name: { ar: string; en: string };
  zone: 'north' | 'east' | 'west' | 'south' | 'center';
  popular?: boolean;
}

export interface SiteConfig {
  companyName: { ar: string; en: string };
  tagline: { ar: string; en: string };
  subTagline: { ar: string; en: string };
  phone: string;
  phoneDisplay: string;
  emergencyPhone: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  defaultWhatsAppMessage: { ar: string; en: string };
  address: { ar: string; en: string };
  crNumber: string; // Commercial Registration
  vatNumber: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  experienceYears: number;
  completedJobsCount: string;
  responseTimeMinutes: number;
  satisfactionRate: number;
  warrantyMaxYears: number;
  workingHoursSchedule: DailySchedule[];
  alwaysOpen24HoursEmergency: boolean;
  socials: {
    snapchat?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
    whatsapp: string;
    phone: string;
  };
  services: ServiceItem[];
  howItWorks: HowItWorksStep[];
  beforeAfterGallery: BeforeAfterItem[];
  coverageDistricts: DistrictArea[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
}
