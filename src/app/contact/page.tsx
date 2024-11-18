import CallUs from "@/components/Modules/contact/CallUs";
import OfficeContacts from "@/components/Modules/home/OfficeContacts";
import NewsLatest from "@/components/UI/NewsLatest";
import SectionTitle from "@/components/UI/SectionTitle";

const ContactPage = () => {
  return (
    <>
      <SectionTitle text="Contacts" />
      <CallUs />
      <OfficeContacts />
      <NewsLatest />
    </>
  );
};

export default ContactPage;
