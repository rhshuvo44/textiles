"use client";

import SectionHeader from "@/components/UI/SectionHeader";
import { missionVision } from "@/db/data";

const MissionVision = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-10 bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Mission & Vision"
          subtitle="Guiding principles that shape our journey"
        />
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
