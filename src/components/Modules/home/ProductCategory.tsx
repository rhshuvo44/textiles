"use client";
import { productCategories } from "@/db/data";
import Image from "next/image";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const ProductCategory = () => {
  return (
    <div className="p-5 md:p-10">
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-5"
        data-aos="fade-up"
      >
        Products Category
      </h2>
      <Swiper
        autoplay={true}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={10}
        // loop={true}
        data-aos="fade-up"
        slidesPerView={1}
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
        {/* Add multiple SwiperSlide components */}
        {productCategories.map(({ title, photo }, index) => (
          <SwiperSlide key={index}>
            <div className="card bg-base-100 image-full h-72 shadow-sm cursor-pointer hover:-translate-y-4 duration-300">
              <figure>
                <Image width={400} height={400} src={photo} alt={title} />
              </figure>
              <div className="card-body justify-center items-center">
                <h2 className="card-title">{title}</h2>
              </div>
            </div>
            {/* <div key={index} className="card bg-base-100 shadow-sm">
              <figure>
                <Image
                  width={400}
                  height={400}
                  src={photo}
                  alt={title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {title}
                  <div className="badge badge-info text-white">NEW</div>
                </h2>
              </div>
            </div> */}
            {/* <ProductCategoriesCard
              key={index}
              title={title}
              photo={photo}
              subCategory={subCategory}
            /> */}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {category.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 image-full shadow-xl cursor-pointer hover:-translate-y-4 duration-300"
            data-aos="fade-up"
          >
            <figure>
              <Image src={item.image} alt="Shoes" width={400} height={250} />
            </figure>
            <div className="card-body mt-36">
              <h2 className="card-title" data-aos="fade-left">
                {item.name}
              </h2>
              <div className="card-actions justify-start mt-5">
                <button
                  className="btn btn-outline text-white hover:bg-info hover:border-info duration-300"
                  data-aos="fade-right"
                >
                  View <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ProductCategory;
