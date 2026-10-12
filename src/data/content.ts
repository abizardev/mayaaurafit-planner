export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  image: string;
}

export interface PlannerPageItem {
  id: string;
  title: string;
  category: "all" | "habits" | "meals" | "workouts" | "reflection";
  categoryLabel: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  rating: number;
  highlight: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "What's Inside", href: "#whats-inside" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export const tickerItems = [
  "✦ HEALTHIER HABITS",
  "✦ STRONGER YOU",
  "✦ MAYAAURAFIT",
  "✦ 63+ PRINTABLE PAGES",
  "✦ INSTANT DOWNLOAD",
  "✦ PRINT AS MANY AS YOU NEED",
  "✦ COMPATIBLE WITH IPAD & GOODNOTES",
  "✦ 100% HAPPINESS GUARANTEE",
];

export const featureCards: FeatureCard[] = [
  {
    id: "daily-habits",
    title: "Track Your Daily Habits",
    tagline: "Stay consistent with your workouts, meals, and healthy routines.",
    description: "Build effortless morning and evening routines with structured checklists that keep you motivated every day.",
    badge: "Daily Routine",
    image: "/assets/images/planner/07-daily-habit-tracker-checklist.webp",
  },
  {
    id: "plan-meals",
    title: "Plan Your Meals",
    tagline: "Fuel your body with balanced and nutritious meals every day.",
    description: "Weekly food logs, hydration tracking, and grocery guides designed to eliminate mealtime stress.",
    badge: "Nutrition Guide",
    image: "/assets/images/planner/05-meal-prep-food-journal.webp",
  },
  {
    id: "stay-organized",
    title: "Stay Organized",
    tagline: "Keep track of your goals, workouts, and progress all in one place.",
    description: "Structured workout logs, sets, reps, and weekly check-in schedules that turn vague goals into actionable steps.",
    badge: "Workout Logs",
    image: "/assets/images/planner/04-weekly-checkin-planner.webp",
  },
  {
    id: "see-progress",
    title: "See Your Progress",
    tagline: "Celebrate your small wins and keep going!",
    description: "Visual 30-day and 90-day streak grids, body measurement milestones, and reflection pages that celebrate every victory.",
    badge: "Streak Tracker",
    image: "/assets/images/planner/13-monthly-streak-progress-grid.webp",
  },
  {
    id: "jot-thoughts",
    title: "Jot Down Thoughts",
    tagline: "Write your goals, reminders, and motivations.",
    description: "Mindset journaling, weekly reflections, and habit stacking worksheets to nourish your mental well-being.",
    badge: "Mindset & Goals",
    image: "/assets/images/planner/12-reflection-journal-challenge-start.webp",
  },
];

export const plannerGallery: PlannerPageItem[] = [
  {
    id: "p1",
    title: "90-Day Glow Up Cover & Roadmap",
    category: "reflection",
    categoryLabel: "Overview",
    description: "Aesthetic cover page with your personal goals, milestone rewards, and intention roadmap.",
    image: "/assets/images/planner/01-hero-cover-glowup-planner.webp",
  },
  {
    id: "p2",
    title: "Daily Movement & Workout Log",
    category: "workouts",
    categoryLabel: "Fitness",
    description: "Detailed daily exercises, sets, reps, cardio time, and post-workout energy levels.",
    image: "/assets/images/planner/02-daily-movement-workout-log.webp",
  },
  {
    id: "p3",
    title: "Hydration & Sleep Recovery Tracker",
    category: "habits",
    categoryLabel: "Wellness",
    description: "Monitor your 8 daily glasses of water, bedtime routine, and sleep quality scores.",
    image: "/assets/images/planner/03-sleep-water-hydration-tracker.webp",
  },
  {
    id: "p4",
    title: "Weekly Check-In & Goal Alignment",
    category: "habits",
    categoryLabel: "Weekly",
    description: "Review what worked, what needs adjusting, and celebrate your weekly achievements.",
    image: "/assets/images/planner/04-weekly-checkin-planner.webp",
  },
  {
    id: "p5",
    title: "Meal Prep & Nutritious Food Journal",
    category: "meals",
    categoryLabel: "Nutrition",
    description: "Breakfast, lunch, dinner, snack planner and healthy grocery checklist.",
    image: "/assets/images/planner/05-meal-prep-food-journal.webp",
  },
  {
    id: "p6",
    title: "Monthly Streak & Habit Progress Grid",
    category: "habits",
    categoryLabel: "Progress",
    description: "Fill-in color streak squares that make consistency feel like a game.",
    image: "/assets/images/planner/13-monthly-streak-progress-grid.webp",
  },
  {
    id: "p7",
    title: "Body Measurements & Milestone Tracker",
    category: "workouts",
    categoryLabel: "Milestones",
    description: "Track non-scale victories, strength improvements, and body transformation checkpoints.",
    image: "/assets/images/planner/11-body-measurements-starting-point.webp",
  },
  {
    id: "p8",
    title: "Habit Stacking & Self-Care Reflection",
    category: "reflection",
    categoryLabel: "Mindset",
    description: "Guided worksheets to anchor new fitness habits onto existing daily routines seamlessly.",
    image: "/assets/images/planner/16-habit-stacking-worksheet-reflection.webp",
  },
];

export const reviews: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah M.",
    role: "Marketing Manager & Fitness Enthusiast",
    avatar: "/assets/images/members/member-photos-01.avif",
    comment: "This planner completely changed how I look at daily routines. Instead of feeling guilty, the pastel layout makes me look forward to opening it every morning with coffee!",
    rating: 5,
    highlight: "90-day streak unbroken",
    verified: true,
  },
  {
    id: "t2",
    name: "Chloe T.",
    role: "Busy Mom of Two",
    avatar: "/assets/images/members/member-photos-02.avif",
    comment: "I printed the meal prep and habit sheets and stuck them on my fridge. It took away so much mental clutter and my family is eating healthier together.",
    rating: 5,
    highlight: "Saved 4+ hours every week",
    verified: true,
  },
  {
    id: "t3",
    name: "Amanda L.",
    role: "Pilates Instructor",
    avatar: "/assets/images/members/member-photos-03.avif",
    comment: "I use this digitally in GoodNotes on my iPad Pro. The hyperlinks and clean aesthetic are absolutely top tier. I recommend it to all my clients!",
    rating: 5,
    highlight: "iPad & GoodNotes favorite",
    verified: true,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How do I receive my planner after purchasing?",
    answer: "You get instant lifetime access! Immediately after checkout, you will receive a secure download link containing the full high-resolution PDF bundle (both A4 and US Letter sizes) ready to print or import into your tablet.",
  },
  {
    question: "Can I use this digitally on an iPad or tablet?",
    answer: "Yes, absolutely! The PDF files are fully compatible with digital annotation apps such as GoodNotes, Notability, CollaNote, and Noteshelf on iPad and Android tablets.",
  },
  {
    question: "What printer settings and paper size should I use?",
    answer: "The bundle includes both standard US Letter (8.5 x 11 in) and International A4 files. You can print at 100% scale on any standard home printer or take the files to a local print shop.",
  },
  {
    question: "Are the pages dated or undated?",
    answer: "Every page is 100% undated! That means you can start on any day of the year without wasting pages, pause when traveling, and reuse the planner forever.",
  },
  {
    question: "Can I print individual sheets multiple times?",
    answer: "Yes! You have personal license rights to print as many copies of any worksheet (daily tracker, weekly meals, workout logs) as you need for yourself forever.",
  },
];
