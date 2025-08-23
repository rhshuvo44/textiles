import merchandisingBanner from "@/assets/image/banner/merchandising.jpg";
import BannerSection from "@/components/UI/BannerSection";

const MerchandisingBanner = () => {
  return (
    <BannerSection
      image={merchandisingBanner}
      title={<>Merchandising Solutions</>}
      subtitle="Expert textile merchandising tailored for your business"
      buttons={[
        {
          text: "Get a Quote",
          href: "#quote",
          ariaLabel: "View Get a Quote",
        },
      ]}
    />
  );
};

export default MerchandisingBanner;
