"use client";

import PolymorphicButton from "@/components/UI/PolymorphicButton";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="relative text-center py-28 px-6 md:px-10 bg-gradient-to-br from-base-100 via-base-200 to-base-100 text-base-content overflow-hidden">
      {/* Gradient overlay shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-80 animate-[pulse_8s_infinite]"></div>

      {/* Floating background orbs */}
      <span className="absolute -top-24 -left-24 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></span>
      <span className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_reverse]"></span>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-playfair leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Ready to Create Together?
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl md:text-2xl mb-10 text-base-content/80 font-montserrat max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Let’s discuss how we can bring your textile vision to life with our
          <span className="text-primary font-semibold">
            {" "}
            expertise
          </span> and{" "}
          <span className="text-secondary font-semibold">innovation</span>.
        </p>

        {/* CTA Button */}
        <div data-aos="zoom-in" data-aos-delay="500">
          <PolymorphicButton
            text="Get Started"
            ariaLabel="Get Started"
            color="primary"
            href="/contact"
            variant="gradient"
            icon={FaArrowRight}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
