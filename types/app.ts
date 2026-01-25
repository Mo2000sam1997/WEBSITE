export interface App {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string[];
  tags: string[];
  pricing: string;
  pricingTier: string;
  thumbnail: string;
  heroImage?: string;
  featured: boolean;
  webhookUrl?: string;
  screenshots?: string[];
}

export interface AppsData {
  apps: App[];
}
