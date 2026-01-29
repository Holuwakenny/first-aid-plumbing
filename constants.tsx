
import React from 'react';
import { Phone, MapPin, Clock, Droplets, Wrench, ShieldCheck, Flame, Search, Bath } from 'lucide-react';
import { Service, GalleryImage } from './types';

export const COMPANY = {
  name: "First Aid Plumbing Specialist INC",
  role: "Plumber",
  address: "9847 Sageroyal Ln, Houston, TX 77089, United States",
  phone: "+1 832-279-3065",
  hours: "Open 24 hours",
  plusCode: "HQP7+2J Pearland, Texas, USA",
  email: "firstaidplumbing@gmail.com", // Placeholder
};

export const SERVICES: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency Repairs',
    description: 'Burst pipes, overflowing toilets, and major leaks handled 24/7.',
    icon: 'Wrench'
  },
  {
    id: 'drain',
    title: 'Drain Cleaning',
    description: 'State-of-the-art equipment to clear even the toughest clogs.',
    icon: 'Droplets'
  },
  {
    id: 'heaters',
    title: 'Water Heaters',
    description: 'Installation and repair of traditional and tankless water heaters.',
    icon: 'Flame'
  },
  {
    id: 'leak',
    title: 'Leak Detection',
    description: 'Precise detection technology to find hidden pipe leaks.',
    icon: 'Search'
  },
  {
    id: 'fixture',
    title: 'Fixtures & Faucets',
    description: 'Upgrading your bathroom or kitchen with professional installs.',
    icon: 'Bath'
  },
  {
    id: 'maintenance',
    title: 'General Maintenance',
    description: 'Scheduled checkups to prevent costly plumbing disasters.',
    icon: 'ShieldCheck'
  }
];

export const GALLERY: GalleryImage[] = [
  {
    url: 'https://lh3.googleusercontent.com/p/AF1QipMkpQR4tb_L4ylTOPXqoSlbCUbzKKo3TqFDl4_v=s1600',
    alt: 'Service truck for First Aid Plumbing Specialist INC',
    title: 'Our Service Team'
  },
  {
    url: 'https://lh3.googleusercontent.com/p/AF1QipPMW4CTIN9myrJzKZiryOHz_H_NfVgEOWSWDZUw=s1600',
    alt: 'Plumbing equipment and workspace',
    title: 'Precision Tools'
  },
  {
    url: 'https://lh3.googleusercontent.com/p/AF1QipORdjQAv--YBVgX8J3Tr0D_52XuyOkIi_C98_Iy=s1600',
    alt: 'Specialized plumbing repair in progress',
    title: 'Specialized Repairs'
  },
  {
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerl_pUne7nW_T5S3pRGNVqw331ThirFD1cjdf5iEimBQhQiYAEu9fjoIBpbbg43wV00GZ7UvbgKQVOlHwmCdkG4aTPO9gQOasVIoFk787ARvBMlpQZ6JjDeSfKvAYY_INx95703=s1600',
    alt: 'Detailed pipe repair work',
    title: 'Quality Craftsmanship'
  }
];

export const IconMap: Record<string, React.ReactNode> = {
  Phone: <Phone className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Flame: <Flame className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Bath: <Bath className="w-6 h-6" />
};
