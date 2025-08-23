"use client";
import banner from "@/assets/image/banner/banner.jpg";
import BannerSection from "@/components/UI/BannerSection";

const GalleryHero = () => {
  return (
    <BannerSection
      image={banner}
      title={<>Gallery</>}
      subtitle="Explore our collection of products, projects, and creativity."
    />
  );
};

export default GalleryHero;
