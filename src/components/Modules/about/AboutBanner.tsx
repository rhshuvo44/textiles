"use client";

import banner from "@/assets/image/banner/investor-relations.jpg";
import BannerSection from "@/components/UI/BannerSection";

const AboutBanner = () => {
  return (
    <BannerSection
      image={banner}
      title={
        <>
          Crafting Excellence in Knit Garments Industry Since{" "}
          <span className="text-primary">2023</span>
        </>
      }
      subtitle="From AI-Driven Design to Sustainable Manufacturing – We Bring Your Fashion Vision to Life"
      buttonText="Explore Our Values"
      buttonHref="#valuesCommitment"
      buttonAriaLabel="Learn about our company values and commitments"
    />
  );
};

export default AboutBanner;
