import Banner from "@/components/Modules/home/Banner";
import Capabilities from "@/components/Modules/home/Capabilities";
import HomeServices from "@/components/Modules/home/HomeServices";
import OfficeContacts from "@/components/Modules/home/OfficeContacts";
import ProductCategory from "@/components/Modules/home/ProductCategory";
import WhyChooseUs from "@/components/Modules/home/WhyChouseUs";
import AOSComponent from "@/components/UI/AOSComponent";
import PartnerSlide from "@/components/UI/PartnerSlide";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home - Textiles & Apparel",
  description: "Ready made Garment Manufacturer (factory)",
};
export default function Home() {
  return (
    <>
      <AOSComponent />
      <Banner />
      <HomeServices />
      <Capabilities />
      <WhyChooseUs />
      <ProductCategory />
      <PartnerSlide />
      <OfficeContacts />
    </>
  );
}
