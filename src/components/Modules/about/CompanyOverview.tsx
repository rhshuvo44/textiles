"use client";

import Image from "next/image";
import { galleryImages, milestones } from "@/db/data";
import SectionHeader from "@/components/UI/SectionHeader";

const CompanyOverview = () => {
  return (
    <section className="p-5 md:p-10 bg-base-100 text-base-content">
      {/* Section Title & Subtitle */}
      <SectionHeader
        title="Who We Are"
        subtitle="A dedicated team crafting premium knit garments with innovation and precision since 2023"
      />

      {/* Milestones */}
      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {milestones.map((milestone, idx) => (
          <div
            key={idx}
            className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <h4 className="text-xl font-montserrat font-semibold text-primary mb-2">
              {milestone.title}
            </h4>
            <p className="text-base font-rubik leading-relaxed">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <Image
              src={src}
              alt={`Textile manufacturing process step ${idx + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-72 hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading={idx > 1 ? "lazy" : "eager"}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyOverview;
