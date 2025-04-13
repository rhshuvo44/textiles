import CaseStudies from "@/components/Modules/customers/CaseStudies";
import CTA from "@/components/Modules/customers/CTA";
import OurCustomers from "@/components/Modules/customers/FeaturedCustomers";
import IndustryPartners from "@/components/Modules/customers/IndustryPartners";
import SectionTitle from "@/components/UI/SectionTitle";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Customer - Sarkar Textiles & Apparel",
  description: "Ready made Garment Manufacturer (factory)",
};
const CustomerPage = () => {
  return (
    <>
      <SectionTitle text="Our Customers" />
      <OurCustomers />
      {/* <Testimonials /> */}
      <IndustryPartners />
      <CaseStudies />
      <CTA />
    </>
  );
};

export default CustomerPage;
