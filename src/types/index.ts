export interface NavItem {
  label: string;
  href: string;
}

export interface PartnerBrand {
  name: string;
  logo: string;
  category?: string;
}

export interface MetricCardData {
  title: string;
  category: string;
  value: string;
  change?: string;
  description: string;
  badgeColor?: string;
  iconName?: string;
  image?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
  highlightMetric?: string;
}

export interface BentoFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  categoryColor: string;
  imageSrc?: string;
  videoSrc?: string;
  metrics?: { label: string; value: string; trend?: string }[];
}
