// components/CTA.tsx
"use client";

import PolymorphicButton from "@/components/UI/PolymorphicButton";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="text-center py-20 px-5 bg-base-200 text-base-content relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-50 dark:from-base-300 dark:to-base-300"></div>

      <span className="absolute -top-16 -left-16 w-72 h-72 bg-base-100/10 rounded-full animate-ping"></span>
      <span className="absolute -bottom-16 -right-16 w-72 h-72 bg-base-100/10 rounded-full animate-ping"></span>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Ready to Create Together?
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-base-content/90">
          Let's discuss how we can bring your textile vision to life with our
          expertise and innovation.
        </p>
        <PolymorphicButton
          text="Get Started"
          ariaLabel="Get Started"
          color="primary"
          href="/contact"
          variant="solid"
          icon={FaArrowRight}
        />
      </div>
    </section>
  );
};

export default CTA;