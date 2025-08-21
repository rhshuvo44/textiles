"use client";
import Image from "next/image";
import banner from "@/assets/image/banner/banner.jpg";

const GalleryHero = () => {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Use the next/image component for the background */}
      <Image
        src={banner}
        alt="A vibrant hero banner for the gallery page"
        layout="fill"
        objectFit="cover"
        quality={100}
        placeholder="blur"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
          Gallery
        </h1>
        <p className="text-lg md:text-2xl mb-6" data-aos="fade-up">
          Explore our collection of products, projects, and creativity.
        </p>
      </div>
    </section>
  );
};

export default GalleryHero;
