import banner from "@/assets/image/banner/carrer.jpg";
import BannerSection from "@/components/UI/BannerSection";
import PolymorphicButton from "@/components/UI/PolymorphicButton";
import Image from "next/image";

const CareerHero = () => {
  return (
    <BannerSection
      image={banner}
      title={<>Join Our Team & Weave Your Future With Us!</>}
      subtitle="Be a part of an innovative and growing textile company."
      buttonText="View Open Positions"
      buttonHref="#job-openings"
      buttonAriaLabel="View Open Positions"
    />
  );
};

export default CareerHero;
