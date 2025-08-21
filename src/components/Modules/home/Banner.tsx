"use client";
import Image from "next/image";
import { FaLongArrowAltRight, FaPhone } from "react-icons/fa";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import PolymorphicButton from "@/components/UI/PolymorphicButton";
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
        renderBullet: (index, className) =>
          `<span class="${className} custom-pagination">${index + 1}</span>`,
      }}
      speed={800}
      modules={[Pagination, Autoplay]}
    >
      {homeBanner.map(({ src, title, description }, index) => (
        <SwiperSlide key={index}>
          <div className="relative min-h-[60vh] md:min-h-screen">
            {/* Optimized Next.js Image */}
            <Image
              src={src.src}
              alt={title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Dark mode overlay */}
            <div className="absolute inset-0 bg-black/50 dark:bg-gray-900/50"></div>
            <div className="absolute inset-0 flex items-center justify-center px-4 py-10 text-white sm:px-6 md:px-10">
              <div className="max-w-xl text-center sm:text-center md:text-left">
                <h1 className="mb-3 text-xl font-bold sm:text-2xl md:text-4xl lg:text-5xl">
                  {title}
                </h1>
                <p className="mb-5">{description}</p>
                <div className="flex flex-row items-center justify-center gap-4 sm:flex-col sm:gap-3 md:flex-row md:gap-4">
                  <PolymorphicButton
                    href="/contact"
                    text="Contact Us"
                    variant="outline"
                    color="primary"
                    ariaLabel="Contact page"
                    icon={FaPhone}
                  />

                  <PolymorphicButton
                    href="/details"
                    text="In Details"
                    variant="solid"
                    color="primary"
                    ariaLabel="Details page"
                    icon={FaLongArrowAltRight}
                  />
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
