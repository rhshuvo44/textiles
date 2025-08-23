"use client";
import Image from "next/image";
import { FaLongArrowAltRight, FaPhone } from "react-icons/fa";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import PolymorphicButton from "@/components/UI/PolymorphicButton";
import { homeBanner } from "@/db/data";
import { Autoplay, Pagination } from "swiper/modules";
import BannerSection from "@/components/UI/BannerSection";

const Banner = () => {
  return (
    <Swiper
      role="region"
      aria-label="Home page banner carousel"
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
          <BannerSection
            image={src}
            title={<>{title}</>}
            subtitle={description}
            buttons={[
              {
                text: "Contact Us",
                href: "/contact",
                variant: "outline",
                color: "primary",
                icon: FaPhone,
                ariaLabel: "Contact page",
              },
              {
                text: "Our Services",
                href: "#services",
                variant: "solid",
                color: "primary",
                icon: FaLongArrowAltRight,
                ariaLabel: "Services page",
              },
            ]}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
