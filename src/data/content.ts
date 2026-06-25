import {
  Article,
  FAQItem,
  FeatureCard,
  IntegrationIcon,
  NavLink,
  PricingPlan,
  StatItem,
  Step,
  Testimonial,
} from "@/types/content";

export const siteConfig = {
  name: "whitepace",
  tagline: "Get More Done with whitepace",
  description:
    "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.",
  url: "https://whitepace.example.com",
};

export const navLinks: NavLink[] = [
  {
    label: "Products",
    href: "#features",
    dropdown: [
      { label: "Project Management", href: "#features", description: "Plan and track work in one place" },
      { label: "Integrations", href: "#integrations", description: "Connect your favorite tools" },
      { label: "Automation", href: "#how-it-works", description: "Let whitepace handle the busywork" },
    ],
  },
  {
    label: "Solutions",
    href: "#how-it-works",
    dropdown: [
      { label: "For Startups", href: "#how-it-works", description: "Move fast without breaking process" },
      { label: "For Enterprise", href: "#statistics", description: "Scale with confidence and control" },
    ],
  },
  {
    label: "Resources",
    href: "#resources",
    dropdown: [
      { label: "Blog", href: "#resources", description: "Tips, guides and product updates" },
      { label: "Help Center", href: "#faq", description: "Find answers fast" },
    ],
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
];

export const featureCards: FeatureCard[] = [
  {
    id: "collaborate",
    icon: "collaborate",
    title: "Real-time collaboration",
    description: "Share notes with your team and work on them together, anywhere in the world.",
  },
  {
    id: "plan",
    icon: "plan",
    title: "Visual planning",
    description: "Organize tasks on boards, lists, or timelines that match how your team thinks.",
  },
  {
    id: "analyze",
    icon: "analyze",
    title: "Actionable insights",
    description: "Track progress with dashboards that surface what needs your attention.",
  },
  {
    id: "automate",
    icon: "automate",
    title: "Smart automation",
    description: "Automate repetitive steps so your team can focus on meaningful work.",
  },
  {
    id: "secure",
    icon: "secure",
    title: "Enterprise-grade security",
    description: "End-to-end encryption keeps every note and file private by default.",
  },
  {
    id: "track",
    icon: "track",
    title: "Everyday task tracking",
    description: "Due dates, reminders and notifications keep every task on schedule.",
  },
];

export const integrationIcons: IntegrationIcon[] = [
  { id: "gmail", label: "Gmail", icon: "gmail" },
  { id: "dropbox", label: "Dropbox", icon: "dropbox" },
  { id: "slack", label: "Slack", icon: "slack" },
  { id: "drive", label: "Google Drive", icon: "drive" },
  { id: "calendar", label: "Calendar", icon: "calendar" },
  { id: "outlook", label: "Outlook", icon: "outlook" },
];

export const stats: StatItem[] = [
  { id: "users", value: 120, suffix: "K+", label: "Active teams" },
  { id: "tasks", value: 4, suffix: "M+", label: "Tasks completed" },
  { id: "uptime", value: 99, suffix: "%", label: "Uptime guarantee" },
  { id: "countries", value: 80, suffix: "+", label: "Countries served" },
];

export const steps: Step[] = [
  {
    id: "step-1",
    number: "01",
    title: "Create your workspace",
    description: "Set up a workspace for your team in seconds, no credit card required.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Add your tasks",
    description: "Bring in projects from a spreadsheet, another tool, or start from scratch.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Invite your team",
    description: "Collaborate with teammates in real time, with roles and permissions built in.",
  },
  {
    id: "step-4",
    number: "04",
    title: "Track and improve",
    description: "Use dashboards and reports to see what's working and what needs attention.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "If you haven't tried whitepace yet, you need to give it a shot for your next project. It's so easy and intuitive to get a new workspace set up, and if you need any help their customer service is seriously amazing.",
    name: "Jessie Owner",
    role: "Founder, XYZ Company",
    avatar: "/images/avatar-1.svg",
  },
  {
    id: "t2",
    quote:
      "Our team switched from three different tools to just whitepace. Planning, tracking and reporting now live in one place, and onboarding new hires takes a fraction of the time it used to.",
    name: "Maria Chen",
    role: "Operations Lead, Northwind",
    avatar: "/images/avatar-2.svg",
    highlighted: true,
  },
  {
    id: "t3",
    quote:
      "The automation rules alone saved us hours every week. Support is responsive, the product ships improvements constantly, and it genuinely feels built for how we work.",
    name: "Daniel Osei",
    role: "Product Manager, Loop Studio",
    avatar: "/images/avatar-3.svg",
  },
];

export const articles: Article[] = [
  {
    id: "a1",
    category: "Productivity",
    title: "5 ways to keep remote teams aligned without more meetings",
    excerpt:
      "Async habits, lightweight rituals, and the dashboards that keep everyone on the same page.",
    image: "/images/article-1.svg",
    href: "#",
    readTime: "6 min read",
  },
  {
    id: "a2",
    category: "Guides",
    title: "A practical guide to setting up your first workspace",
    excerpt: "From templates to permissions, everything you need before inviting your team.",
    image: "/images/article-2.svg",
    href: "#",
    readTime: "4 min read",
  },
  {
    id: "a3",
    category: "Product",
    title: "What's new in whitepace: automations, themes and more",
    excerpt: "A look at the latest releases and what they mean for your day-to-day workflow.",
    image: "/images/article-3.svg",
    href: "#",
    readTime: "5 min read",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    tagline: "Capture ideas and find them quickly",
    ctaLabel: "Get Started",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    id: "personal",
    name: "Personal",
    price: "$11.99",
    priceNote: "/month",
    tagline: "Keep home and family on track",
    ctaLabel: "Get Started",
    featured: true,
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    id: "organization",
    name: "Organization",
    price: "$49.99",
    priceNote: "/month",
    tagline: "Capture ideas and find them quickly",
    ctaLabel: "Get Started",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Can I use whitepace with my whole team?",
    answer:
      "Yes. Every plan supports unlimited team members on shared workspaces, with roles and permissions you control.",
  },
  {
    id: "faq-2",
    question: "Does whitepace work offline?",
    answer:
      "Desktop and mobile apps cache your most recent workspaces, so you can keep working without a connection and sync automatically once you're back online.",
  },
  {
    id: "faq-3",
    question: "Can I import data from another tool?",
    answer:
      "You can import from spreadsheets and several popular project tools directly from your workspace settings.",
  },
  {
    id: "faq-4",
    question: "Is my data secure?",
    answer:
      "All notes are protected with end-to-end encryption, and you can export your data in an open format at any time.",
  },
];

export const sponsorLogos = ["Apple", "Microsoft", "Slack", "Google"];

export const footerLinks = {
  product: [
    { label: "Overview", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Customer stories", href: "#testimonials" },
  ],
  resources: [
    { label: "Blog", href: "#resources" },
    { label: "Guides & tutorials", href: "#resources" },
    { label: "Help center", href: "#faq" },
  ],
  company: [
    { label: "About us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Media kit", href: "#" },
  ],
};
