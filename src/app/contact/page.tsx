import ContactForm from "@/components/Modules/contact/ContactForm";
import ContactHero from "@/components/Modules/contact/ContactHero";
import OfficeContacts from "@/components/Modules/home/OfficeContacts";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact - Sarkar Textiles & Apparel",
  description: "Ready made Garment Manufacturer (factory)",
};
const ContactPage = () => {
  return (
    <>
      {/* <SectionTitle text="Contacts" /> */}
      <ContactHero />
      <OfficeContacts />
      {/* <CallUs /> */}
      {/* <NewsLatest /> */}
      <ContactForm />
    </>
  );
};

export default ContactPage;
