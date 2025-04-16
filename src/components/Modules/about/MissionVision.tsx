"use client";

import { FaBullseye, FaEye } from "react-icons/fa";
const missionVision = [
  {
    title: "Our Mission",
    description:
      "To deliver high-quality knit garments by blending craftsmanship with cutting-edge technology, while empowering our workforce and ensuring customer satisfaction at every step.",
    icon: <FaBullseye className="text-info text-3xl" />,
  },
  {
    title: "Our Vision",
    description:
      "To be a global leader in sustainable textile manufacturing — committed to eco-friendly practices, ethical production, and innovation that shapes the future of fashion.",
    icon: <FaEye className="text-info text-3xl" />,
  },
];

const MissionVision = () => {
  return (
    <section className="md:p-10 p-5 bg-base-200 text-base-content">
      <div className="">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {missionVision.map((item, index) => (
            <div
              key={index}
              className="bg-base-100 p-8 rounded-xl shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-2xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-lg leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
