import FAQ from "@/components/Modules/merchandising/FAQ";
import MerchandisingAbout from "@/components/Modules/merchandising/MerchandisingAbout";
import MerchandisingBanner from "@/components/Modules/merchandising/MerchandisingBanner";
import MerchandisingProcess from "@/components/Modules/merchandising/MerchandisingProcess";
import ProductCategory from "@/components/Modules/merchandising/ProductCategory";
import RequestAQuote from "@/components/Modules/merchandising/RequestAQuote";

const MerchandisingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <MerchandisingBanner />

      {/* About Merchandising */}
      <MerchandisingAbout />

      {/* Product Categories */}

      <ProductCategory />
      {/* Merchandising Process */}
      <MerchandisingProcess />

      {/* Request a Quote */}
      <RequestAQuote />

      <FAQ />
    </>
  );
};

export default MerchandisingPage;
