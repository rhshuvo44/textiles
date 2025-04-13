import React from "react";

const MerchandisingProcess = () => {
  return (
    <section className="p-5 md:p-10">
      <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
        Our Process
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
        {[
          "Consultation",
          "Design & Sampling",
          "Sourcing & Production",
          "Quality Assurance",
          "Delivery",
        ].map((step, idx) => (
          <div
            key={step}
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-info text-white rounded-full text-lg font-bold mb-2">
              {idx + 1}
            </div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MerchandisingProcess;
