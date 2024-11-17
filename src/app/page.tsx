import Banner from "@/components/Modules/home/Banner";
import Capabilities from "@/components/Modules/home/Capabilities";
import HomeServices from "@/components/Modules/home/HomeServices";
import ProductCatagory from "@/components/Modules/home/ProductCatagory";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeServices />
      <Capabilities />
      <ProductCatagory />
    </>
  );
}
