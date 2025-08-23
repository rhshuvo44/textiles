"use client";

import PolymorphicButton from "@/components/UI/PolymorphicButton";
import { BannerSectionProps, PolymorphicButtonProps } from "@/types";
import Image from "next/image";

const BannerSection = ({
  image,
  title,
  subtitle,
  buttons = [], // Array of buttons [{text, href, variant, color, icon, ariaLabel}]
  overlayOpacity = 0.5,
  minHeight = "md:min-h-screen",
}: BannerSectionProps & {
  buttons?: PolymorphicButtonProps[];
  minHeight?: string;
}) => {
  return (
    <section
      className={`relative min-h-[70vh] ${minHeight} sm:h-[80vh] overflow-hidden flex items-center justify-center text-white`}
    >
      {/* Background wrapper */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={typeof title === "string" ? title : "Banner image"}
          fill
          priority
          className="object-cover hero-image"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70`}
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl flex flex-col items-center justify-center">
        {/* Title */}
        <h1
          className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-extrabold mb-4 drop-shadow-lg animate-fadeIn"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="text-md sm:text-lg md:text-xl font-rubik mb-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            {subtitle}
          </p>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <div
            className="flex flex-wrap items-center justify-center gap-4 sm:flex-col md:flex-row md:gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            {buttons.map((btn, idx) => (
              <PolymorphicButton
                key={idx}
                href={btn.href}
                text={btn.text}
                icon={btn.icon}
                variant={btn.variant}
                color={btn.color}
                ariaLabel={btn.ariaLabel}
                className={`font-rubik ${btn.className || ""}`}
                isSubmitting={btn.isSubmitting || false}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BannerSection;
