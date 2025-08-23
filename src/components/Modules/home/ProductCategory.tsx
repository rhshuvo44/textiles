"use client";
import SectionHeader from "@/components/UI/SectionHeader";
import { productGallery } from "@/db/data";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductCategory = () => {
  return (
    <div className="px-4 py-10 md:px-10">
      <SectionHeader
        title="Product Categories"
        subtitle="Explore our wide range of products"
      />

      <Swiper
        autoplay={{ delay: 2500 }}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        data-aos="fade-up"
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {productGallery.map(({ title, photo }, index) => (
          <SwiperSlide key={index}>
            <div className="shadow-md overflow-hidden h-72 relative group hover:shadow-xl transition-shadow duration-300">
              <Image
                src={photo}
                alt={title}
                width={400}
                height={400}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCategory;
