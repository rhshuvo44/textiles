import { howWeHire } from "@/db/data";
import React from "react";

const HowWeHire = () => {
  return (
    <section className="px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8">How We Hire</h2>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
        {howWeHire.map((step, idx) => (
          <div
            key={idx}
            className="card bg-base-100 shadow-md"
            data-aos="fade-up"
          >
            <div className="card-body">
              <p>{step}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeHire;
