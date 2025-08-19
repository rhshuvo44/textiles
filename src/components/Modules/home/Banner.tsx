"use client";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { homeBanner } from "@/db/data";
import { Autoplay, Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}">${index + 1}</span>`;
        },
      }}
      speed={800}
      modules={[Pagination, Autoplay]}
    >
      {homeBanner.map((banner, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero min-h-[60vh] md:min-h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${banner.src.src})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content px-4 sm:px-6 md:px-10 py-10 text-center text-neutral-content">
              <div className="max-w-lg mx-auto">
                <h1 className="mb-3 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
                  {banner.title}
                </h1>
                <p className="mb-5">{banner.description}</p>
                <div className="flex flex-row items-center gap-4 justify-center">
                  <Link href="/" className="btn btn-info text-white">
                    In Details <FaLongArrowAltRight />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn btn-outline text-white hover:bg-primary hover:border-primary hover:text-white duration-300"
                  >
                    Contact Us <FaLongArrowAltRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
