"use client";

import banner from "@/assets/image/banner/investor-relations.jpg";
import Button from "@/components/UI/Button";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <section className="relative w-full h-[90vh] sm:h-[80vh] overflow-hidden bg-black text-white flex items-center justify-center">
      {/* ✅ Background Image */}
      <Image
        src={banner}
        alt="Banner"
        fill
        priority
        className="object-cover opacity-60"
      />

      {/* ✅ Overlay Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
          data-aos="fade-up"
        >
          Crafting Excellence in Knit Garments Industry Since{" "}
          <span className="text-primary">2023</span>
        </h1>
        <p className="text-md sm:text-lg md:text-xl mb-6" data-aos="fade-up">
          From AI-Driven Design to Sustainable Manufacturing – We Bring Your
          Fashion Vision to Life
        </p>
        <Button
          href="#valuesCommitment"
          text="Explore Our Services"
          ariaLabel="View Explore Our Services"
          variant="solid"
        />
        
      </div>
    </section>
  );
};

export default AboutBanner;
