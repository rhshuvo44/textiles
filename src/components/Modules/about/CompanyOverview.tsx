"use client";

import Image from "next/image";
import { galleryImages, milestones } from "@/db/data";

const CompanyOverview = () => {
  return (
    <section className="p-5 md:p-10 bg-base-100 text-base-content">
      {/* ✅ Title */}
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-6"
        data-aos="fade-up"
      >
        Who We Are
      </h2>

      {/* ✅ Intro */}
      <p
        className="text-lg text-center max-w-3xl mx-auto mb-12"
        data-aos="fade-up"
      >
        We are a dedicated team of textile professionals passionate about
        crafting premium-quality knit garments. Since our founding in 2023,
        we’ve blended innovation with tradition to deliver products that meet
        global standards.
      </p>

      {/* ✅ Milestones */}
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {milestones.map((milestone, idx) => (
          <div
            key={idx}
            className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <h4 className="text-xl font-semibold text-info mb-2">
              {milestone.year}
            </h4>
            <p>{milestone.text}</p>
          </div>
        ))}
      </div>

      {/* ✅ Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <Image
              src={src}
              alt={`Factory photo ${idx + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyOverview;
