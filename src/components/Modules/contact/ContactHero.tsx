"use client";
import banner from "@/assets/image/banner/contact.jpg";
import BannerSection from "@/components/UI/BannerSection";

const ContactHero = () => {
  return (
    <BannerSection
      image={banner}
      title={<>Get in Touch with Us!</>}
      subtitle="We’re here to help. Reach out for inquiries, partnerships, or support."
      buttons={[
        {
          text: "Get in Touch",
          href: "#contact-form",
          ariaLabel: "Get in Touch",
        },
      ]}
    />
  );
};

export default ContactHero;
