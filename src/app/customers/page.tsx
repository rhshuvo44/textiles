import CaseStudies from "@/components/Modules/customers/CaseStudies";
import CTA from "@/components/Modules/customers/CTA";
import OurCustomers from "@/components/Modules/customers/FeaturedCustomers";
import IndustryPartners from "@/components/Modules/customers/IndustryPartners";
import PartnerSlide from "@/components/UI/PartnerSlide";
import SectionTitle from "@/components/UI/SectionTitle";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Customer -Textiles & Apparel",
  description: "Ready made Garment Manufacturer (factory)",
};
const CustomerPage = () => {
  return (
    <>
      <SectionTitle text="Our Customers" />
      <OurCustomers />
      <PartnerSlide />
      <CaseStudies />
      <CTA />
    </>
  );
};

export default CustomerPage;
