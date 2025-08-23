"use client";

import { SectionHeaderProps } from "@/types";

const SectionHeader = ({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <h2
        className="text-3xl sm:text-4xl font-playfair font-extrabold"
        data-aos="fade-up"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-2 text-base sm:text-lg font-rubik text-gray-600"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
