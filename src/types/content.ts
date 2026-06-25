export interface NavLink {
  label: string;
  href: string;
  dropdown?: { label: string; href: string; description?: string }[];
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: "collaborate" | "plan" | "analyze" | "automate" | "secure" | "track";
}

export interface IntegrationIcon {
  id: string;
  label: string;
  icon: "gmail" | "dropbox" | "slack" | "drive" | "calendar" | "outlook" | "brand";
}

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  highlighted?: boolean;
}

export interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  readTime: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  tagline: string;
  features: string[];
  featured?: boolean;
  ctaLabel: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
