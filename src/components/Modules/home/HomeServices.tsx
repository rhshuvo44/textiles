"use client";

import { services } from "@/db/data";

const HomeServices = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-12 xl:px-20 text-center" id="services">
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10"
        data-aos="fade-up"
      >
        What We Offer
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-base-100 shadow-md hover:shadow-xl rounded-xl p-6 transition-transform transform hover:scale-105 duration-300"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
