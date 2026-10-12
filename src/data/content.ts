import { NavItem, PartnerBrand, BentoFeature, TestimonialItem } from "../types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "What's Inside", href: "#whats-inside" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export const partnerBrands: PartnerBrand[] = [
  { name: "Printable PDF", logo: "/assets/images/planner/01-hero-cover-glowup-planner.png", category: "Printable" },
  { name: "GoodNotes", logo: "/assets/images/planner/02-daily-movement-workout-log.png", category: "Digital App" },
  { name: "Notability", logo: "/assets/images/planner/03-sleep-water-hydration-tracker.png", category: "Digital App" },
  { name: "iPad & Tablet", logo: "/assets/images/planner/04-weekly-checkin-planner.png", category: "Tablet" },
];

export const heroStats = {
  rating: 4.9,
  totalRatings: "28,600+",
  activeMembers: "35,000+",
  tagline: "Small Habits. Big Changes.",
};

export const bentoFeatures: BentoFeature[] = [
  {
    id: "strain-energy",
    title: "Energy Bank & Daily Strain",
    subtitle: "Real-time strain calculation",
    description: "Balances exertion against your real-time recovery. Know precisely when to push harder in training or prioritize active rest before burn out.",
    badge: "Recovery & Strain",
    categoryColor: "#31ce01",
    imageSrc: "/assets/images/ui/home-message.avif",
    metrics: [
      { label: "Daily Strain Target", value: "14.2", trend: "+1.2 vs yesterday" },
      { label: "Energy Remaining", value: "68%", trend: "Optimal window" },
    ],
  },
  {
    id: "sleep-circadian",
    title: "Sleep Quality & Circadian Clock",
    subtitle: "Wake up restored, eliminate debt",
    description: "Advanced stage sleep breakdown (Deep, REM, Light) coupled with smart alarms tuned to your personal sleep latency and circadian rhythm.",
    badge: "Restorative Sleep",
    categoryColor: "#b9a6ff",
    imageSrc: "/assets/images/ui/home-message-4.avif",
    metrics: [
      { label: "Sleep Score", value: "92%", trend: "High Restoration" },
      { label: "Sleep Debt", value: "12m", trend: "Down 45m this week" },
    ],
  },
  {
    id: "nutrition-food",
    title: "Biomarker Nutrition Tracker",
    subtitle: "Food impact on physiological data",
    description: "Connect meal intake to glucose peaks, heart rate variability dips, and next-day recovery. Eat for longevity, not just counting calories.",
    badge: "Metabolic Health",
    categoryColor: "#ffab94",
    imageSrc: "/assets/images/ui/home-message-5.avif",
    metrics: [
      { label: "Metabolic Stability", value: "88/100", trend: "Balanced" },
      { label: "Recovery Impact", value: "+14%", trend: "Anti-inflammatory" },
    ],
  },
  {
    id: "biomarkers-longevity",
    title: "Longevity & Clinical Biomarkers",
    subtitle: "390+ Lab markers synthesized",
    description: "Transform complex bloodwork, ApoB, lipid panels, and hormonal tests into a unified biological age and actionable lifestyle prescriptions.",
    badge: "Clinical Intelligence",
    categoryColor: "#415eee",
    imageSrc: "/assets/images/ui/biology-ldl-p-800.avif",
    metrics: [
      { label: "Biological Age", value: "28.4 yrs", trend: "4.1 yrs younger" },
      { label: "Cardio Health", value: "Vo2 Max 52", trend: "Top 5% bracket" },
    ],
  },
];

export const coachModes = [
  {
    id: "commander",
    title: "Coach Commander",
    role: "Performance & Discipline",
    description: "Direct, no-nonsense daily targets. Pushes your VO2 max and workout thresholds when your body is fully recovered.",
    badge: "High Performance",
  },
  {
    id: "friend",
    title: "Coach Friend",
    role: "Balance & Consistency",
    description: "Encouraging and adaptable. Adjusts targets around busy travel schedules, family events, and stress spikes.",
    badge: "Holistic Wellness",
  },
  {
    id: "guardian",
    title: "Coach Guardian",
    role: "Longevity & Injury Prevention",
    description: "Meticulous focus on biomarker stability, heart rate variability restoration, and chronic stress reduction.",
    badge: "Preventative Health",
  },
];

export const memberStories: TestimonialItem[] = [
  {
    id: "1",
    name: "Dr. Andrew K.",
    role: "Cardiologist & Marathoner",
    avatar: "/assets/images/members/member-photos-01.avif",
    quote: "Bevel translates raw biometrics into clarity that even clinical athletes appreciate. The strain-to-recovery feedback loop is second to none.",
    rating: 5,
    highlightMetric: "VO2 Max +12%",
  },
  {
    id: "2",
    name: "Elena R.",
    role: "Tech Founder & Mother",
    avatar: "/assets/images/members/member-photos-02.avif",
    quote: "Eliminated chronic sleep debt within 30 days. Seeing my sleep latency and wake-up phases connected to afternoon caffeine was eye-opening.",
    rating: 5,
    highlightMetric: "Sleep Score 94%",
  },
  {
    id: "3",
    name: "Marcus V.",
    role: "CrossFit Coach",
    avatar: "/assets/images/members/member-photos-03.avif",
    quote: "The cleanest UI on any health app. No fluff, no useless notifications—just actionable insight every morning right when I need it.",
    rating: 5,
    highlightMetric: "Recovery +22%",
  },
];
