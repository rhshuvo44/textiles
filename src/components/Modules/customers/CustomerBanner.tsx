"use client";

import banner from "@/assets/image/banner/textile_main_image.jpg";
import BannerSection from "@/components/UI/BannerSection";

const CustomerBanner = () => {
  return (
    <BannerSection
      image={banner}
      title={
        <>
          Trusted by Leading Brands &{" "}
          <span className="text-primary">Clients Worldwide</span>
        </>
      }
      subtitle="We collaborate with industry leaders to deliver top-quality textile solutions, ensuring excellence, reliability, and innovation in every project."
      buttons={[
        {
          text: "View Our Partners",
          href: "#partners",
          ariaLabel: "See our client and partner logos",
        },
      ]}
    />
  );
};

export default CustomerBanner;
