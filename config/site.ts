import {
  Droplets,
  Flame,
  ShowerHead,
  Wrench,
  ThermometerSun,
  PipetteIcon,
} from "lucide-react";
import type { OpenGraphColors, SiteConfig } from "./site.types";

export type * from "./site.types";

// ---------------------------------------------------------------------------
// OG image colors (hex/rgba only — Satori does not support oklch)
// ---------------------------------------------------------------------------

export const ogColors: OpenGraphColors = {
  primary: "#C05621",
  primaryLight: "#E8784A",
  dark: "#1C1917",
  darkCard: "#292524",
  white: "#FFFFFF",
  whiteAlpha: "rgba(255,255,255,0.7)",
  whiteSubtle: "rgba(255,255,255,0.12)",
  star: "#FACC15",
  starMuted: "#44403C",
};

// ---------------------------------------------------------------------------
// Site configuration -- AI agents: edit everything below this line.
// ---------------------------------------------------------------------------

export const siteConfig: SiteConfig = {
  business: {
    name: "Business Name",
    tradeType: "Trade Type",
    phone: "0800 000 0000",
    email: "info@businessname.com",
    address: {
      street: "Street",
      city: "City",
      region: "Region",
      postcode: "Postcode",
      country: "GB",
    },
    serviceArea: ["X", "Y", "Z"],
    availability: "24/7 Emergency Service",
    yearEstablished: 2026,
    logo: "/images/logo.svg",
  },

  hero: {
    headline: "Emergency X in X — Same-Day Repairs",
    subheadline: "Serving X & Y | 24/7 | No Call-Out Fee",
    primaryCTA: { text: "Call Now", href: "tel:01234567890" },
    secondaryCTA: { text: "Get a Free Quote", href: "#quote" },
    rating: { score: 4.8, count: 1240, platform: "Google" },
    trustBadges: ["Trust Badge 1", "Trust Badge 2", "Trust Badge 3"],
    heroImage: "/images/hero.jpg",
  },

  services: [
    {
      title: "Blocked Drain",
      description:
        "Fast drain unblocking for sinks, toilets, and outside drains. We clear blockages the same day.",
      icon: Droplets,
      href: "#quote",
    },
    {
      title: "Boiler Repair",
      description:
        "Expert boiler diagnostics and repair. Gas Safe registered engineers available 24/7.",
      icon: Flame,
      href: "#quote",
    },
    {
      title: "Bathroom Fitting",
      description:
        "Full bathroom installation from design to completion. Quality fixtures, clean finish.",
      icon: ShowerHead,
      href: "#quote",
    },
    {
      title: "Leak Detection",
      description:
        "Advanced leak detection and repair. We find and fix leaks fast to prevent water damage.",
      icon: PipetteIcon,
      href: "#quote",
    },
    {
      title: "General Plumbing",
      description:
        "Tap repairs, pipe replacement, radiator fitting, and all general plumbing work.",
      icon: Wrench,
      href: "#quote",
    },
    {
      title: "Heating Systems",
      description:
        "Central heating installation, repairs, and power flushing to keep your home warm.",
      icon: ThermometerSun,
      href: "#quote",
    },
  ],

  testimonials: [
    {
      name: "Sarah M.",
      town: "Town",
      service: "Service 1",
      quote:
        "Called at 7am with no hot water. They were here by 9 and had the boiler fixed before lunch. Brilliant service, fair price, and really friendly engineer.",
      rating: 5,
    },
    {
      name: "James T.",
      town: "Town",
      service: "Service 2",
      quote:
        "Had a nasty blocked drain on a Sunday evening. They came out within the hour and sorted it quickly. Can't recommend them enough.",
      rating: 5,
    },
    {
      name: "Linda K.",
      town: "Town",
      service: "Service 3",
      quote:
        "Fantastic job on our new bathroom. Professional from start to finish, left everything spotless. The quality of work is outstanding.",
      rating: 5,
    },
  ],

  trustBadges: [
    {
      name: "Gas Safe Registered",
      description: "All engineers are Gas Safe certified",
    },
    {
      name: "Fully Insured",
      description: "£5M public liability insurance",
    },
    {
      name: "DBS Checked",
      description: "All staff background checked",
    },
    {
      name: "12-Month Guarantee",
      description: "All work guaranteed for 12 months",
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: "Get in Touch",
      description:
        "Call us or fill in the quick quote form. Tell us what you need — we respond fast.",
    },
    {
      step: 2,
      title: "We Assess & Quote",
      description:
        "We visit (or diagnose over the phone), give you a clear, no-obligation quote with no hidden fees.",
    },
    {
      step: 3,
      title: "Job Done Right",
      description:
        "We complete the work to the highest standard, clean up, and you only pay when you're happy.",
    },
  ],

  portfolio: [
    {
      title: "Full Bathroom Renovation",
      description:
        "Complete strip-out and refit of a family bathroom in Roundhay, Leeds.",
      image: "/images/portfolio-1.jpg",
      category: "Bathroom Fitting",
    },
    {
      title: "Emergency Boiler Replacement",
      description:
        "Same-day boiler swap for a family in Bradford during winter.",
      image: "/images/portfolio-2.jpg",
      category: "Boiler Repair",
    },
    {
      title: "Commercial Drain Clearance",
      description:
        "Cleared a severely blocked main drain at a restaurant in Leeds city centre.",
      image: "/images/portfolio-3.jpg",
      category: "Blocked Drain",
    },
  ],

  faqs: [
    {
      question: "How much do you charge?",
      answer:
        "We provide free, no-obligation quotes for all jobs. There's no call-out fee. We'll give you a clear, fixed price before we start any work so there are no surprises.",
    },
    {
      question: "How quickly can you get here?",
      answer:
        "For emergencies, we aim to be with you within 1–2 hours. For non-urgent jobs, we typically book within 24–48 hours at a time that suits you.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We cover Leeds, Bradford, Wakefield, Harrogate, York, and all surrounding areas in West Yorkshire. If you're unsure, just ask — we'll let you know.",
    },
    {
      question: "Are your engineers qualified?",
      answer:
        "Yes. All our engineers are fully qualified, Gas Safe registered (where applicable), DBS checked, and carry £5M public liability insurance.",
    },
    {
      question: "Do you offer a guarantee?",
      answer:
        "Absolutely. All our work comes with a 12-month guarantee. If anything goes wrong with a repair we've done, we'll come back and fix it free of charge.",
    },
    {
      question: "Do you do free quotes?",
      answer:
        "Yes, all our quotes are free and come with no obligation. We'll assess the job and give you an honest, transparent price.",
    },
  ],

  navigation: [
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  seo: {
    siteUrl: "http://localhost:3005",
    titleTemplate: "%s | Your Trade Business",
    defaultTitle: "Your Trade Business | Professional Plumber in Leeds",
    defaultDescription:
      "Professional plumbing services in Leeds & West Yorkshire. 24/7 emergency callouts, no call-out fee, Gas Safe registered. Call 0800 000 0000 for a free quote.",
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: "Your Trade Business",
    },
  },
};
