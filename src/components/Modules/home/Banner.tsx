"use client";
import banner from "@/assets/image/textile_main_image.jpg";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
//   ssr: false,
// });
// const SwiperSlide = dynamic(
//   () => import("swiper/react").then((mod) => mod.SwiperSlide),
//   { ssr: false }
// );
// import required modules
// import { Autoplay } from "swiper/modules";

import { Autoplay, Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <Swiper
      // spaceBetween={10}
      // slidesPerView={1}
      autoplay={true}
      loop={true}
      // autoplay={{ delay: 5000 }}
      // effect="fade"
      pagination={{
        dynamicBullets: true,
        enabled: true,
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}">${index + 1}</span>`;
        },
      }}
      modules={[Pagination, Autoplay]}
    >
      {/* Add multiple SwiperSlide components */}
      <SwiperSlide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${banner.src})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center px-10">
            <div className="max-w-lg ">
              <h1
                className="mb-5 text-2xl md:text-5xl font-bold"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                The Largest Exporter of Textile Products
              </h1>
              <p
                className="mb-5"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                In the list of importers – 45 countries: Germany, Spain, Italy,
                Poland, Portugal, Turkey, South Korea, Japan, etc.
              </p>
              <div className="flex gap-3 justify-center flex-col md:flex-row">
                <Link
                  href="/"
                  className="btn btn-info text-white"
                  data-aos="zoom-in"
                >
                  In Details <FaLongArrowAltRight />
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-outline text-info hover:bg-info hover:border-info duration-300"
                  data-aos="zoom-out"
                >
                  Contact Us <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${banner.src})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center px-10">
            <div className="max-w-lg ">
              <h1
                className="mb-5 text-2xl md:text-5xl font-bold"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                The Largest Exporter of Textile Products
              </h1>
              <p
                className="mb-5"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                In the list of importers – 45 countries: Germany, Spain, Italy,
                Poland, Portugal, Turkey, South Korea, Japan, etc.
              </p>
              <div className="flex gap-3 justify-center flex-col md:flex-row">
                <Link
                  href="/"
                  className="btn btn-info text-white"
                  data-aos="zoom-in"
                >
                  In Details <FaLongArrowAltRight />
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-outline text-info hover:bg-info hover:border-info duration-300"
                  data-aos="zoom-out"
                >
                  Contact Us <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${banner.src})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center px-10">
            <div className="max-w-lg ">
              <h1
                className="mb-5 text-2xl md:text-5xl font-bold"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                The Largest Exporter of Textile Products
              </h1>
              <p
                className="mb-5"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                In the list of importers – 45 countries: Germany, Spain, Italy,
                Poland, Portugal, Turkey, South Korea, Japan, etc.
              </p>
              <div className="flex gap-3 justify-center flex-col md:flex-row">
                <Link
                  href="/"
                  className="btn btn-info text-white"
                  data-aos="zoom-in"
                >
                  In Details <FaLongArrowAltRight />
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-outline text-info hover:bg-info hover:border-info duration-300"
                  data-aos="zoom-out"
                >
                  Contact Us <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    // <div
    //   className="hero min-h-screen"
    //   style={{
    //     backgroundImage: `url(${banner.src})`,
    //   }}
    // >
    //   <div className="hero-overlay bg-opacity-60"></div>
    //   <div className="hero-content text-neutral-content text-center px-10">
    //     <div className="max-w-lg ">
    //       <h1 className="mb-5 text-2xl md:text-5xl font-bold"
    //       data-aos="fade-left"
    //       data-aos-offset="300"
    //       data-aos-easing="ease-in-sine"
    //       >
    //         The Largest Exporter of Textile Products
    //       </h1>
    //       <p
    //         className="mb-5"
    //         data-aos="fade-right"
    //         data-aos-offset="300"
    //         data-aos-easing="ease-in-sine"
    //       >
    //         In the list of importers – 45 countries: Germany, Spain, Italy,
    //         Poland, Portugal, Turkey, South Korea, Japan, etc.
    //       </p>
    //       <div className="flex gap-3 justify-center flex-col md:flex-row">
    //         <Link
    //           href="/"
    //           className="btn btn-info text-white"
    //           data-aos="zoom-in"
    //         >
    //           In Details <FaLongArrowAltRight />
    //         </Link>
    //         <Link
    //           href="/contact"
    //           className="btn btn-outline text-info hover:bg-info hover:border-info duration-300"
    //           data-aos="zoom-out"
    //         >
    //           Contact Us <FaLongArrowAltRight />
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
