import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { IconType } from "react-icons";
export type TServices = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};
export type TGetTouch = {
  name: string;
  email: string;
  phone: string;
};
export type TContactForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};
export type TeamMember = {
  name: string;
  role: string;
  image: string | StaticImageData;
  bio: string;
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
};

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  photo: string | StaticImageData;
  text: string;
}

export interface Customer {
  name: string;
  logo: string | StaticImageData;
  description: string;
}
export type Certification = {
  name: string;
  image: string | StaticImageData;
};

export type QuoteFormData = {
  name: string;
  company?: string;
  email: string;
  phone: string;
  whatsapp?: string;
  GSM: string;
  quantity: number;
  category?: string;
  fabric?: string;
  yarn?: string;
  ratio?: number;
  upload?: FileList;
};
export interface Job {
  title: string;
  department: string;
  location: string;
  deadline: string;
}
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}


export interface CaseStudy {
  title: string;
  description: string;
  image: string | StaticImageData;
  stats: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type FormData = {
  fullName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  linkedin?: string;
  subject: string;
  message: string;
};



export interface Banner {
  src: string | StaticImageData;
  title: string;
  description: string;
}

export interface ProductSubCategory {
  title: string;
  photo: (string | StaticImageData)[];
  description: string;
}

export interface Product {
  title: string;
  subCategory: ProductSubCategory[];
  photo: string | StaticImageData;
}

export interface NavLink {
  path: string;
  label: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Milestone {
  year: string;
  text: string;
}


export interface Culture {
  image: string | StaticImageData;
  quote: string;
  name: string;
  title: string;
}

export interface Job {
  title: string;
  department: string;
  location: string;
  deadline: string;
}


export interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
}

export interface ContactInfo {
  id: string;
  label: string;
  value: string | string[];
  icon: IconType;
  type: "text" | "phone" | "email";
}

export interface MissionVision {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface Value {
  title: string;
  icon: JSX.Element;
  description: string;
}

export interface Service {
  title: string;
  icon: JSX.Element;
  description: string;
}

export interface Capability {
  icon: ReactNode | IconType;
  title: string;
  description: string;
}

export interface MerchandisingAbout {
  icon: string; // emoji for simplicity
  title: string;
  description: string;
}

export interface Step {
  title: string;
  icon: JSX.Element;
}
export interface BannerSectionProps {
  image: StaticImageData | string;
  title: React.ReactNode;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonAriaLabel?: string;
  overlayOpacity?: number;
}

export interface SectionTitleProps {
  text: string;
}

export type CapabilityItem = {
  title: string;
  description: string;
  icon: ReactNode | IconType;
};

export type showcaseSectionProps = {
  title?: string;
  subtitle?: string;
  capabilities: CapabilityItem[];
  className?: string;
};
export type SectionHeaderProps = {
  title: string | undefined;
  subtitle?: string;
  className?: string;
};