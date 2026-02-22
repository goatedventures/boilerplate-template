import type { LucideIcon } from "lucide-react";

export interface Address {
  street: string;
  city: string;
  region: string;
  postcode: string;
  country: string;
}

export interface BusinessConfig {
  name: string;
  tradeType: string;
  phone: string;
  email: string;
  address: Address;
  serviceArea: string[];
  availability: string;
  yearEstablished: number;
  logo: string;
}

export interface CTAButton {
  text: string;
  href: string;
}

export interface HeroConfig {
  headline: string;
  subheadline: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
  rating: {
    score: number;
    count: number;
    platform: string;
  };
  trustBadges: string[];
  heroImage: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export interface Testimonial {
  name: string;
  town: string;
  service: string;
  quote: string;
  rating: number;
}

export interface TrustBadge {
  name: string;
  description?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SEOConfig {
  siteUrl: string;
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
  openGraph: {
    type: string;
    locale: string;
    siteName: string;
  };
}

export interface OpenGraphColors {
  primary: string;
  primaryLight: string;
  dark: string;
  darkCard: string;
  white: string;
  whiteAlpha: string;
  whiteSubtle: string;
  star: string;
  starMuted: string;
}

export interface SiteConfig {
  business: BusinessConfig;
  hero: HeroConfig;
  services: ServiceItem[];
  testimonials: Testimonial[];
  trustBadges: TrustBadge[];
  howItWorks: ProcessStep[];
  portfolio: PortfolioItem[];
  faqs: FAQItem[];
  navigation: NavItem[];
  seo: SEOConfig;
}
