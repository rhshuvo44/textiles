"use client";

import { missionVision } from "@/db/data";

const MissionVision = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-10 bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 leading-tight"
          data-aos="fade-up"
        >
          Our Mission & Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {missionVision.map((item, index) => (
            <div
              key={index}
              className="bg-base-100 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              data-aos="fade-up"
            >
              <div className="flex items-start gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="text-base sm:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
