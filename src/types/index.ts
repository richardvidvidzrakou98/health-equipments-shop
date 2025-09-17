export interface Product {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  category?: string;
  price?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface HeroSection {
  products: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    image: string;
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    image: string;
  };
}

export interface Review {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  socialLinks?: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}