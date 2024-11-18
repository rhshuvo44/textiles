import HomeServices from "@/components/Modules/home/HomeServices";
import ServiceCapabilities from "@/components/Modules/services/ServiceCapabilities";
import WeDo from "@/components/Modules/services/WeDo";
import SectionTitle from "@/components/UI/SectionTitle";

const ServicePage = () => {
  return (
    <>
      <SectionTitle text="Services" />
      <HomeServices />
      <ServiceCapabilities />
      <WeDo />
    </>
  );
};

export default ServicePage;
