"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import { featuredCustomers } from "@/db/data";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const PartnerSlide = () => {
  return (
    <>
      <section className="p-5 md:p-10 bg-base-200">
        <div className=" text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
            Our Clients & Partners
          </h2>
          <Swiper
            autoplay={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {featuredCustomers.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div className="cursor-pointer hover:scale-110 duration-300 py-2 px-5 h-52 flex items-center justify-center">
                  <div className="rounded">
                    <Image src={slide.logo} alt="" width={500} height={500} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default PartnerSlide;
