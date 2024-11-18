import CallUs from "@/components/Modules/contact/CallUs";
import OfficeContacts from "@/components/Modules/home/OfficeContacts";
import SectionTitle from "@/components/UI/SectionTitle";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <SectionTitle text="Contacts" />
      <CallUs />
      <OfficeContacts />
    </>
  );
};

export default ContactPage;
