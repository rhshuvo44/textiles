import Banner from "@/components/Modules/home/Banner";
import Capabilities from "@/components/Modules/home/Capabilities";
import HomeServices from "@/components/Modules/home/HomeServices";
import ProductCategory from "@/components/Modules/home/ProductCategory";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeServices />
      <Capabilities />
      <ProductCategory />
    </>
  );
}
