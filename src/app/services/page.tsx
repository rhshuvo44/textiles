import HomeServices from "@/components/Modules/home/HomeServices";
import Stats from "@/components/Modules/home/Stats";
import ServiceCapabilities from "@/components/Modules/services/ServiceCapabilities";
import WeDo from "@/components/Modules/services/WeDo";
import AdvantagesSection from "@/components/UI/AdvantagesSection";
import NewsLatest from "@/components/UI/NewsLatest";
import PartnerSlide from "@/components/UI/PartnerSlide";
import SectionTitle from "@/components/UI/SectionTitle";

const ServicePage = () => {
  return (
    <>
      <SectionTitle text="Services" />
      <HomeServices />
      <ServiceCapabilities />
      <WeDo />
      <PartnerSlide />
      <Stats />
      <AdvantagesSection />
      <NewsLatest />
    </>
  );
};

export default ServicePage;
