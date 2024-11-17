"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import partner1 from "@/assets/image/partners_item_1.png";
import partner2 from "@/assets/image/partners_item_2.png";
import partner3 from "@/assets/image/partners_item_3.png";
import partner4 from "@/assets/image/partners_item_4.png";
import partner5 from "@/assets/image/partners_item_5.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
const PartnerSlide = () => {
  const sliders = [
    {
      id: 1,
      image: partner1,
    },
    {
      id: 2,
      image: partner2,
    },
    {
      id: 3,
      image: partner3,
    },
    {
      id: 4,
      image: partner4,
    },
    {
      id: 5,
      image: partner5,
    },
  ];
  return (
    <div className="p-5 md:p-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        className="mySwiper"
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
        {sliders.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="border shadow-sm rounded-md cursor-pointer hover:-translate-y-1 duration-300 py-2 px-5">
              <div className="rounded">
                <Image src={slide.image} alt="" width={500} height={500} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerSlide;
