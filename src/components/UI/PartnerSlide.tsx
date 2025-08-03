"use client";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { featuredCustomers } from "@/db/data";
import Image from "next/image";

const PartnerSlide = () => {
  return (
    <section className="p-5 md:p-10 bg-base-200">
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">
          Our Clients & Partners
        </h2>

        <Swiper
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {featuredCustomers.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="w-full h-32 sm:h-40 flex items-center justify-center bg-white rounded-lg shadow-md transition-transform hover:scale-105 duration-300 p-4">
                <Image
                  src={slide.logo}
                  alt={`Partner ${index + 1}`}
                  width={150}
                  height={150}
                  className="object-contain h-full w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerSlide;
