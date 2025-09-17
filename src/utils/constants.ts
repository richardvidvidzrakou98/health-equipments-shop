import type { Product, Service, NavItem, HeroSection } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'ABOUT', href: '/about' },
  { label: 'PRODUCTS', href: '/products' },
  { label: 'CONTACT', href: '/contact' },
];

export const HERO_CONTENT: HeroSection = {
  products: {
    title: 'RELIABLE',
    subtitle: 'MEDICAL EQUIPMENT',
    description: 'High-quality durable medical equipment and supplies for your healthcare needs.',
    buttonText: 'SHOP NOW',
    image: '/hero.png'
  },
  services: {
    title: 'TRUSTED',
    subtitle: 'HEALTHCARE SUPPLIES',
    description: "Accessible, dependable, and compassionate medical supply solutions for you and your loved ones.",
    buttonText: 'CONTACT US',
    image: '/hero.png'
  }
};

export const PRODUCTS: Product[] = [
  {
    id: 'wheelchairs',
    name: 'Wheelchairs',
    title: 'Wheelchairs',
    description: 'Manual and electric wheelchairs for mobility and independence.',
    image: '/images/products/wheelchair',
    features: ['Manual & Electric', 'Lightweight Design', 'Adjustable', 'Comfortable']
  },
  {
    id: 'hospital-beds',
    name: 'Hospital Beds',
    title: 'Hospital Beds',
    description: 'Adjustable hospital beds for home care and medical facilities.',
    image: '/images/products/hospitalbed.jpg',
    features: ['Adjustable Height', 'Side Rails', 'Electric Controls', 'Comfortable Mattress']
  },
  {
    id: 'oxygen-equipment',
    name: 'Oxygen Equipment',
    title: 'Oxygen Equipment',
    description: 'Oxygen concentrators, tanks, and respiratory support equipment.',
    image: '/images/products/oxygyenequipment.webp',
    features: ['Portable Options', 'High Flow Rate', 'Quiet Operation', 'Energy Efficient']
  },
  {
    id: 'mobility-aids',
    name: 'Mobility Aids',
    title: 'Mobility Aids',
    description: 'Walkers, canes, and mobility scooters for enhanced movement.',
    image: '/images/products/mobilityaids.webp',
    features: ['Lightweight', 'Adjustable Height', 'Non-slip Grips', 'Foldable']
  },
  {
    id: 'wound-care',
    name: 'Wound Care',
    title: 'Wound Care Supplies',
    description: 'Comprehensive wound care products and first aid supplies.',
    image: '/images/products/woundcare.jpg',
    features: ['Sterile Products', 'Various Sizes', 'Advanced Healing', 'Easy Application']
  },
  {
    id: 'monitoring-equipment',
    name: 'Monitoring Equipment',
    title: 'Monitoring Equipment',
    description: 'Blood pressure monitors, glucose meters, and diagnostic tools.',
    image: '/images/products/bloodpressuremonitor.jpg',
    features: ['Digital Display', 'Memory Storage', 'Easy Operation', 'Accurate Readings']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'equipment-rental',
    title: 'EQUIPMENT RENTAL',
    description: 'Flexible rental options for short-term and long-term medical equipment needs, perfect for recovery periods.',
    icon: '�',
    details: ['Daily, weekly, monthly rates', 'Delivery & pickup service', 'Maintenance included', 'Insurance billing available']
  },
  {
    id: 'home-delivery',
    title: 'HOME DELIVERY',
    description: 'Fast, reliable delivery service bringing medical supplies directly to your home or healthcare facility.',
    icon: '�',
    details: ['Same-day delivery available', 'Scheduled deliveries', 'Professional setup', 'Contact-free options']
  },
  {
    id: 'insurance-billing',
    title: 'INSURANCE SUPPORT',
    description: 'We work directly with Medicare, Medicaid, and private insurance to minimize your out-of-pocket costs.',
    icon: '�',
    details: ['Medicare certified', 'Medicaid accepted', 'Insurance verification', 'Prior authorization assistance']
  },
  {
    id: 'equipment-setup',
    title: 'SETUP & TRAINING',
    description: 'Professional installation and comprehensive training to ensure safe and effective use of your equipment.',
    icon: '⚙️',
    details: ['Professional installation', 'Equipment training', 'Safety instruction', '24/7 support hotline']
  }
];

export const COMPANY_INFO = {
  name: 'Wayne Medical Supplies LLC',
  tagline: 'Reliable, High-Quality Medical Equipment & Supplies',
  phone: '571-665-0501',
  email: 'WayneMedicalSupplies@gmail.com',
  address: '6606 West Forest Road, Hyattsville, MD 20785',
  founder: 'Micheal Wayne'
};