"use client";

import PolymorphicButton from "@/components/UI/PolymorphicButton";
import { BannerSectionProps } from "@/types";
import Image from "next/image";

const BannerSection = ({
  image,
  title,
  subtitle,
  buttonText,
  buttonHref,
  buttonAriaLabel,
  overlayOpacity = 0.5,
  gradientOverlay = false,
}: BannerSectionProps) => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-screen sm:h-[80vh] overflow-hidden flex items-center justify-center text-white">
      {/* Wrapper for Image and Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <Image
          src={image}
          alt={typeof title === "string" ? title : "Banner image"}
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 ${
            gradientOverlay
              ? "bg-gradient-to-b from-black/70 via-black/50 to-black/70"
              : "bg-black"
          }`}
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl flex flex-col items-center justify-center">
        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="text-md sm:text-lg md:text-xl mb-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            {subtitle}
          </p>
        )}

        {/* Button */}
        {buttonText && buttonHref && (
          <PolymorphicButton
            href={buttonHref}
            text={buttonText}
            ariaLabel={buttonAriaLabel}
            variant="solid"
          />
        )}
      </div>
    </section>
  );
};

export default BannerSection;
