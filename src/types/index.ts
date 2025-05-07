import { StaticImageData } from "next/image"

export type TServices = {
    id: number,
    icon: React.ReactNode,
    title: string,
    description: string,
}
export type TGetTouch = {
    name: string
    email: string
    phone: string
}
export type TContactForm = {
    name: string
    company: string
    email: string
    phone: string
    message: string
}
export type TeamMember = {
    name: string;
    role: string;
    image: string | StaticImageData;
    bio: string;
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