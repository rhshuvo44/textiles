"use client";
import banner from "@/assets/image/investor-relations.jpg";

import Image from "next/image";
const AboutBanner = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center bg-black text-white">
      {/* 🔁 Background video or image */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/garment-process.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Image
        width={1920}
        height={500}
        alt="Banner Image"
        src={banner.src}
        className="absolute w-full h-full object-cover opacity-60"
      />

      {/* 🧾 Overlay Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
        data-aos="fade-up"
        >
          Crafting Excellence in Kint Garments Industry Since{" "}
          <span className="text-info">2023</span>
        </h1>
        <p className="text-lg md:text-xl mb-6"
        data-aos="fade-up"
        >
          From AI-Driven Design to Sustainable Manufacturing – We Bring Your
          Fashion Vision to Life
        </p>
        <a href="#valuesCommitment" className="btn btn-info text-white bg-gradient-to-r from-info to-secondary hover:from-secondary hover:to-info transition duration-300"
        data-aos="fade-up"
        >
          Explore Our Services
        </a>
      </div>
    </section>

    // <div
    //   className="hero min-h-screen"
    //   style={{
    //     backgroundImage: `url(${banner.src})`,
    //   }}
    // >
    //   <div className="hero-overlay bg-opacity-60"></div>
    //   <div className="hero-content flex-col lg:flex-row pt-40 md:pt-0">
    //     <div className=" max-w-2xl text-white">
    //       <h1 className="text-3xl lg:text-6xl font-bold" data-aos="fade-right">Investor Relations</h1>
    //       <p className="py-6" data-aos="fade-left">
    //         Since 1995, Manufacturer has been helping our customers build a
    //         better world – making sustainable progress possible and driving
    //         positive change on every continent.
    //       </p>
    //     </div>
    //     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    //       <GetInTouch />
    //     </div>
    //   </div>
    // </div>
  );
};

export default AboutBanner;
