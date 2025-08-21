"use client";

import { FaTruckLoading } from "react-icons/fa";
import { GiClothes, GiCottonFlower } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";

const services = [
  {
    title: "Knit Garments Manufacturer & Exporter",
    icon: <GiClothes size={48} className="text-primary" />,
    desc: "Premium quality knitwear tailored for global markets.",
  },
  {
    title: "Custom Fashion Design & Development",
    icon: <MdDesignServices size={48} className="text-primary" />,
    desc: "Create unique fashion lines with our expert designers.",
  },
  {
    title: "Wholesale & Export",
    icon: <FaTruckLoading size={48} className="text-primary" />,
    desc: "Reliable bulk supply with international shipping.",
  },
  {
    title: "Yarn Wholesaler",
    icon: <GiCottonFlower size={48} className="text-primary" />,
    desc: "Supplying top-grade yarn for all textile needs.",
  },
];

const HomeServices = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-12 xl:px-20 text-center">
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
