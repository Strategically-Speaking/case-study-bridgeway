// ─── Core Types ──────────────────────────────────────────────────────────────

export interface SocialLinks {
  facebook?: string;
  linkedin?: string;
  instagram?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteSettings {
  _type: string;
  _id: string;
  siteName: string;
  tagline: string;
  mission: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: SocialLinks;
  nav: NavItem[];
  navCta: NavItem;
}

// ─── Content Types ───────────────────────────────────────────────────────────

export interface ImageField {
  src: string;
  alt: string;
}

export interface CtaField {
  label: string;
  href: string;
}

export interface Program {
  _type: string;
  _id: string;
  title: string;
  slug: string;
  category: string;
  duration: string;
  format: string;
  cost: string;
  description: string;
  fullDescription: string;
  outcomes: string[];
  eligibility: string;
  ctaText: string;
  icon: string;
  image: ImageField;
}

export interface TeamMember {
  _type: string;
  _id: string;
  name: string;
  title: string;
  bio: string;
  image: ImageField;
}

export interface Testimonial {
  _type: string;
  _id: string;
  quote: string;
  name: string;
  program: string;
  image: ImageField;
}

export interface ImpactStat {
  _type: string;
  _id: string;
  value: string;
  label: string;
  description: string;
}

// ─── Page Types ───────────────────────────────────────────────────────────────

export interface HeroSection {
  label?: string;
  headline: string;
  subheadline: string;
  primaryCta?: CtaField;
  secondaryCta?: CtaField;
  image?: ImageField;
}

export interface ContactFormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

export interface ContactOption {
  title: string;
  description: string;
  icon: string;
}
