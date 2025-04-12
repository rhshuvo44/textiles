"use client";

import { FaTruckLoading } from "react-icons/fa";
import { GiClothes, GiCottonFlower } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";

const HomeServices = () => {
  // const homeServices = [
  //   {
  //     id: 1,
  //     icon: <IoMdSettings className="text-8xl text-[#00A9E9]" />,
  //     title: "We Manufacture",
  //     description: `Submit a manufacturer to be featured with a free video and we&apos;ll
  //         send you a free sample to find our what you need.`,
  //   },
  //   {
  //     id: 2,
  //     icon: <GiTravelDress className="text-8xl text-[#00A9E9]" />,
  //     title: "We Design Fabric",
  //     description: `Choose from many fabrics and design your . Create and print only the fabric you need with no minimum order.`,
  //   },
  //   {
  //     id: 3,
  //     icon: <MdOutlineEngineering className="text-8xl text-[#00A9E9]" />,
  //     title: "We Engineer",
  //     description: `We carry an enormous inventory of all the things you need to complete your project: notions, patterns and trims.`,
  //   },
  // ];
  const services = [
    {
      title: "Knit Garments Manufacturer & Exporter",
      icon: <GiClothes size={48} className="text-info" />,
      desc: "Premium quality knitwear tailored for global markets.",
    },
    {
      title: "Custom Fashion Design & Development",
      icon: <MdDesignServices size={48} className="text-info" />,
      desc: "Create unique fashion lines with our expert designers.",
    },
    {
      title: "Wholesale & Export",
      icon: <FaTruckLoading size={48} className="text-info" />,
      desc: "Reliable bulk supply with international shipping.",
    },
    {
      title: "Yarn Wholesaler",
      icon: <GiCottonFlower size={48} className="text-info" />,
      desc: "Supplying top-grade yarn for all textile needs.",
    },
  ];
  return (
    <>
      {/* <div
      className="flex flex-col md:flex-row gap-3 p-5 md:p-10  cursor-pointer "
      data-aos="fade-up"
    >
      {homeServices.map((service) => (
        <ServicesCard key={service.id} service={service} />
      ))}
    </div> */}
      <section className="p-5 md:p-10 text-center">
        <h2 className="text-4xl font-bold mb-8"  data-aos="fade-up">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-base-100 shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeServices;
