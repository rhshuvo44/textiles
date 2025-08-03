"use client";

import React from "react";
import Image from "next/image";




import { galleryImages, milestones } from "@/db/data";

const CompanyOverview = () => {
  return (
    <>
      <section className="md:p-10 p-5 bg-base-100 text-base-content">
        <div className="">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8"
          data-aos="fade-up"
          >Who We Are</h2>

          <p className="text-lg text-center max-w-3xl mx-auto mb-12"
          data-aos="fade-up"
          >
            We are a dedicated team of textile professionals passionate about
            crafting premium-quality knit garments. Since our founding in 2023,
            we’ve blended innovation with tradition to deliver products that
            meet global standards.
          </p>

          {/* 🗓 Milestones */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
              >
                <h4 className="text-xl font-semibold text-info mb-2">
                  {milestone.year}
                </h4>
                <p>{milestone.text}</p>
              </div>
            ))}
          </div>

          {/* 🖼 Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl shadow-md"
              data-aos="fade-up"
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
    // <div className="flex flex-col lg:flex-row items-center bg-white p-5 md:p-10 shadow-lg rounded-md">
    //   {/* Left Image Section */}
    //   <div className="w-full lg:w-1/2  mb-6 lg:mb-0" data-aos="fade-right">
    //     <Image
    //       src={image}
    //       alt="Company Industry"
    //       className="rounded-md object-cover"
    //       height={200}
    //       width={500}
    //     />
    //   </div>

    //   {/* Right Content Section */}
    //   <div className="w-full lg:w-1/2">
    //     <h2 className="text-4xl font-bold text-gray-800 mb-4" data-aos="fade-left">
    //       Company Overview
    //     </h2>
    //     <p className="text-gray-600 mb-6 leading-relaxed" data-aos="fade-left">
    //       <span className="text-lg font-bold text-[#00AAE9]">
    //         Sarkar Textile & Apparel
    //       </span>{" "}
    //       is a leading player in the textile industry, specializing in the
    //       production of high-quality fabrics and garments. The company operates
    //       through three primary segments:
    //     </p>
    //     <ul className="mb-5">
    //       <li>
    //         <p className="mb-2" data-aos="fade-left">
    //           <b>Manufacturing and Production:</b> Focused on state-of-the-art
    //           textile manufacturing, including weaving, dyeing, printing, and
    //           finishing processes to deliver premium-quality fabrics and
    //           garments.
    //         </p>
    //       </li>
    //       <li>
    //         <p className="mb-2" data-aos="fade-left">
    //           <b>Supply Chain and Distribution:</b> Ensures efficient logistics
    //           and timely delivery of products to domestic and international
    //           markets, maintaining strong partnerships with suppliers and
    //           distributors.
    //         </p>
    //       </li>
    //       <li>
    //         <p data-aos="fade-left">
    //           <b>Innovation and Sustainability:</b> Committed to adopting
    //           eco-friendly practices, reducing waste, and utilizing sustainable
    //           raw materials to create textiles that meet modern environmental
    //           standards.
    //         </p>
    //       </li>
    //     </ul>

    //     <div className="border-l-4 border-pink-500 pl-4" data-aos="fade-up">
    //       <h3 className="text-lg font-semibold text-gray-800 mb-1">
    //         Company Net Value
    //       </h3>
    //       <p className="text-3xl font-bold text-[#00AAE9]">$12,000,000</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CompanyOverview;
