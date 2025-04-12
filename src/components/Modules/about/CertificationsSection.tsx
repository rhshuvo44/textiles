"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import pic from '@/assets/image/denim.jpg';
type Certification = {
  name: string;
  image: string | StaticImageData;
};

const certifications: Certification[] = [
  {
    name: "ISO 9001 Certified",
    image: pic,
  },
  {
    name: "OEKO-TEX Standard 100",
    image: pic,
  },
  {
    name: "GOTS Certified",
    image: pic,
  },
  {
    name: "WRAP Certified",
    image: pic,
  },
  {
    name: "Best Exporter Award 2023",
    image: pic,
  },
  {
    name: "Sustainable Business Recognition",
    image: pic,
  },
];

const CertificationsSection = () => {
  return (
    <section className="p-5 md:p-10 bg-base-200 text-base-content">
      <div className="">
        <h2 className="text-4xl font-bold text-center mb-12"
        data-aos="fade-up"
        >
          Certifications & Achievements
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-between place-items-center">
          {certifications.map((cert, index) => (
            <div key={index} className="w-full"
            data-aos="fade-up"
            >
              <div className="flex flex-col items-center text-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  width={200}
                  height={200}
                  src={cert.image}
                  alt={cert.name}
                  className=" object-contain mb-4"
                />
                <p className="text-lg font-medium">{cert.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
