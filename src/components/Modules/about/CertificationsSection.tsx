"use client";

import { certifications } from "@/db/data";
import Image from "next/image";

const CertificationsSection = () => {
  return (
    <section className="p-5 md:p-10 bg-base-200 text-base-content">
      <div className="">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Membership & Certifications
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 justify-between place-items-center">
          {certifications.map((cert, index) => (
            <div key={index} className="w-full" data-aos="fade-up">
              <div className="flex flex-col items-center text-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  width={400}
                  height={400}
                  src={cert.image}
                  alt={cert.name}
                  className="h-72 object-contain mb-4"
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
