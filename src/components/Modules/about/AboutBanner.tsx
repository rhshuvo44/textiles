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
      buttons={[
        {
          text: "Explore Our Values",
          href: "#valuesCommitment",
          ariaLabel: "Learn about our company values and commitments",
        },
      ]}
    />
  );
};

export default AboutBanner;
