export interface PricingPlan {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  buttonText: string;
  link: string;
  featured?: boolean;
}