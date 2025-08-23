"use client";

import image from "@/assets/image/Subscription_Monthly_M.jpg";
import PolymorphicButton from "@/components/UI/PolymorphicButton";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const Capabilities = () => {
  return (
    <section className="px-4 py-8 md:px-10 lg:py-16 max-w-screen-xl mx-auto">
      <div
        className="flex flex-col lg:flex-row items-center bg-base-100 shadow-xl rounded-lg overflow-hidden relative gap-8 lg:gap-0 
        transition-transform duration-700 ease-in-out hover:scale-[1.01] hover:shadow-2xl"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        {/* Image Section */}
        <figure
          className="w-full lg:w-1/2 transform transition-transform duration-700 hover:scale-105"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <Image
            src={image}
            alt="Our textile production facility"
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-lg capability-image"
            priority
          />
        </figure>

        {/* Content Section */}
        <div
          className="w-full lg:w-1/2 p-6 md:p-10 space-y-4"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="text-xl sm:text-4xl md:text-5xl font-playfair font-bold text-primary drop-shadow-lg animate-fade-in">
            Our Capabilities
          </h2>

          <p className="font-rubik leading-relaxed animate-slide-up">
            At <span className="font-semibold text-primary">Textiles</span>, we
            pride ourselves on our diverse and robust capabilities that enable
            us to meet the evolving needs of the textile industry.
          </p>

          <p className="font-rubik leading-relaxed animate-slide-up delay-200">
            We utilize cutting-edge machinery and technology to produce a wide
            variety of fabrics, including woven, knitted, and non-woven
            textiles. Our state-of-the-art production lines ensure precision and
            efficiency, allowing us to deliver both high-volume and custom-made
            solutions.
          </p>

          <p className="font-rubik leading-relaxed animate-slide-up delay-300">
            Sustainability is central to our operations. We prioritize
            eco-friendly dyes, reduce water consumption, and use sustainable raw
            materials. Our green manufacturing approach minimizes environmental
            impact and supports circular textile production.
          </p>

          {/* Button with Hover Animation */}
          <div className="pt-4">
            <PolymorphicButton
              href="/about"
              text="About Us"
              ariaLabel="View About Us"
              variant="solid"
              icon={FaLongArrowAltRight}
              className="transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg font-montserrat"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
