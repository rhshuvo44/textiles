"use client";

import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const AdvantagesSection = () => {
  const [bgImage, setBgImage] = useState(
    "https://manufacturer.stylemixthemes.com/textile/wp-content/uploads/sites/6/2018/07/muillu-435001-unsplash-1600x1067.jpg"
  );

  const images = {
    default:
      "https://manufacturer.stylemixthemes.com/textile/wp-content/uploads/sites/6/2018/07/muillu-435001-unsplash-1600x1067.jpg",
    cardM:
      "https://manufacturer.stylemixthemes.com/textile/wp-content/uploads/sites/6/2018/07/adam-frazier-446681-unsplash-1600x1071.jpg",
    cardT:
      "https://manufacturer.stylemixthemes.com/textile/wp-content/uploads/sites/6/2018/08/rawpixel-609031-unsplash-1600x1280.jpg",
  };
  return (
    <section
      className=" w-full px-10 cursor-default bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div
          className=" text-white p-10 innerCard h-[450px] "
          onMouseEnter={() => setBgImage(images.default)}
          onMouseLeave={() => setBgImage(images.default)}
          data-aos="fade-right"
        >
          <div className=" p-5 rounded-lg duration-500 innerCardBody">
            <h3 className="font-bold text-5xl mb-5">01</h3>
            <h1 className=" text-5xl">World-class Technology</h1>
            <div className="bodyDis">
              <p className="my-5">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="btn btn-outline text-white px-4 py-2 rounded  hover:bg-info hover:border-info duration-300">
                Learn More <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
        <div
          className=" text-white p-10 innerCard innerCardM h-[450px] md:border-x-2"
          onMouseEnter={() => setBgImage(images.cardM)}
          onMouseLeave={() => setBgImage(images.default)}
          data-aos="fade-up"
        >
          <div className=" p-5 rounded-lg duration-500 innerCardBody">
            <h3 className="font-bold text-5xl mb-5">02</h3>
            <h1 className=" text-5xl">Quality Standards</h1>
            <div className="bodyDis">
              <p className="my-5">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id
              </p>
              <button className="btn btn-outline text-white px-4 py-2 rounded  hover:bg-info hover:border-info duration-300">
                Learn More <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
        <div
          className=" text-white p-10 innerCard h-[450px]"
          onMouseEnter={() => setBgImage(images.cardT)}
          onMouseLeave={() => setBgImage(images.default)}
          data-aos="fade-left"
        >
          <div className=" p-5 rounded-lg duration-500 innerCardBody">
            <h3 className="font-bold text-5xl mb-5">03</h3>
            <h1 className=" text-5xl">Productive Capacity</h1>
            <div className="bodyDis">
              <p className="my-5">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id
              </p>
              <button className="btn btn-outline text-white px-4 py-2 rounded  hover:bg-info hover:border-info duration-300">
                Learn More <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
