import GalleryHero from "@/components/Modules/gallery/GalleryHero";
import GallerySection from "@/components/Modules/gallery/GallerySection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gallery - Sarkar Textiles & Apparel",
  description: "Ready made Garment Manufacturer (factory)",
};
const GalleryPage = () => {
  return (
    <>
      <GalleryHero />
      <GallerySection />
    </>
  );
};

export default GalleryPage;
