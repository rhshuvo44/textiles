import CaseStudies from "@/components/Modules/customers/CaseStudies";
import CTA from "@/components/Modules/customers/CTA";
import OurCustomers from "@/components/Modules/customers/FeaturedCustomers";
import IndustryPartners from "@/components/Modules/customers/IndustryPartners";
import Testimonials from "@/components/Modules/customers/Testimonials";
import SectionTitle from "@/components/UI/SectionTitle";

const ServicePage = () => {
  return (
    <>
      <SectionTitle text="Our Customers" />
      <OurCustomers />
      <Testimonials />
      <IndustryPartners />
      <CaseStudies />
      <CTA />
    </>
  );
};

export default ServicePage;
