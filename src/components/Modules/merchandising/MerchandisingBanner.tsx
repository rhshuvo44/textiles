import merchandisingBanner from "@/assets/image/banner/merchandising.jpg";
import BannerSection from "@/components/UI/BannerSection";

const MerchandisingBanner = () => {
  return (
    <BannerSection
      image={merchandisingBanner}
      title={<>Merchandising Solutions</>}
      subtitle="Expert textile merchandising tailored for your business"
      buttonText="Get a Quote"
      buttonHref="#quote"
      buttonAriaLabel="View Get a Quote"
    />
  );
};

export default MerchandisingBanner;
