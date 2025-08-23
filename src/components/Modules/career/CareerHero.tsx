import banner from "@/assets/image/banner/carrer.jpg";
import BannerSection from "@/components/UI/BannerSection";

const CareerHero = () => {
  return (
    <BannerSection
      image={banner}
      title={<>Join Our Team & Weave Your Future With Us!</>}
      subtitle="Be a part of an innovative and growing textile company."
      buttons={[
        {
          text: "View Open Positions",
          href: "#job-openings",
          ariaLabel: "View Open Positions",
        },
      ]}
    />
  );
};

export default CareerHero;
