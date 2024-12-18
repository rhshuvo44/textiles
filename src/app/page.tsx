import Banner from "@/components/Modules/home/Banner";
import Capabilities from "@/components/Modules/home/Capabilities";
import HomeServices from "@/components/Modules/home/HomeServices";
import OfficeContacts from "@/components/Modules/home/OfficeContacts";
import ProductCategory from "@/components/Modules/home/ProductCategory";
import Stats from "@/components/Modules/home/Stats";
import AdvantagesSection from "@/components/UI/AdvantagesSection";
import AOSComponent from "@/components/UI/AOSComponent";
import NewsLatest from "@/components/UI/NewsLatest";
import PartnerSlide from "@/components/UI/PartnerSlide";

export default function Home() {
  return (
    <>
      <AOSComponent />
      <Banner />
      <HomeServices />
      <Capabilities />
      <ProductCategory />
      <Stats />
      <AdvantagesSection />
      <PartnerSlide />
      <OfficeContacts />
      <NewsLatest />
    </>
  );
}
