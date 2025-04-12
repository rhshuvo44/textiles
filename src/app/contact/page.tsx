import ContactForm from "@/components/Modules/contact/ContactForm";
import ContactHero from "@/components/Modules/contact/ContactHero";
import OfficeContacts from "@/components/Modules/home/OfficeContacts";

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
