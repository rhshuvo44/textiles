"use client";

import { showcaseSectionProps } from "@/types";
import SectionHeader from "./SectionHeader";

const ShowcaseSection = ({
  title,
  subtitle,
  capabilities,
  className = "",
  capabilitiesClassName = "",
}: showcaseSectionProps) => {
  return (
    <section className={`px-4 sm:px-6 lg:px-10 py-12 ${className}`}>
      {/* Section Title */}
      <SectionHeader title={title} subtitle={subtitle} />

      {/* Capabilities Grid */}
      <div
        className={`grid gap-8 grid-cols-1 sm:grid-cols-2 ${capabilitiesClassName}`}
      >
        {capabilities.map((item, index) => (
          <div
            key={index}
            className="shadow hover:shadow-lg transition-all duration-300 rounded-2xl p-6 text-center flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="mb-4 text-4xl text-primary">
              {" "}
              {typeof item.icon === "function" ? <item.icon /> : item.icon}
            </div>
            <h3 className="text-lg font-playfair font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-sm font-rubik">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
