import { StaticImageData } from "next/image";
import { ReactNode } from "react";

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