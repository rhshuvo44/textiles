"use client";

import {
  FaBalanceScale,
  FaCheckCircle,
  FaFlask,
  FaLeaf,
  FaLightbulb,
  FaSmile,
} from "react-icons/fa";

const values = [
  {
    title: "Quality Assurance",
    icon: <FaCheckCircle className="text-primary text-3xl shrink-0" />,
    description:
      "Strict quality control from sourcing to delivery to ensure perfection in every stitch.",
  },
  {
    title: "Sustainability & Eco-Friendly",
    icon: <FaLeaf className="text-green-600 text-3xl shrink-0" />,
    description:
      "We prioritize eco-conscious materials and processes for a greener future.",
  },
  {
    title: "Innovation & Customization",
    icon: <FaLightbulb className="text-yellow-500 text-3xl shrink-0" />,
    description:
      "Tailored solutions and cutting-edge designs to match modern fashion needs.",
  },
  {
    title: "Research & Development",
    icon: <FaFlask className="text-indigo-500 text-3xl shrink-0" />,
    description: "Constantly experimenting to create trendsetting garments.",
  },
  {
    title: "Customer Satisfaction",
    icon: <FaSmile className="text-rose-500 text-3xl shrink-0" />,
    description:
      "We listen, adapt, and serve — ensuring happy clients across the globe.",
  },
  {
    title: "Ethical Manufacturing",
    icon: <FaBalanceScale className="text-gray-600 text-3xl shrink-0" />,
    description:
      "Fair wages, safe work environments, and integrity in every process.",
  },
];

const ValuesCommitment = () => {
  return (
    <section
      className="px-4 sm:px-6 lg:px-12 py-10 bg-base-100 text-base-content"
      id="valuesCommitment"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Our Values & Commitment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-base">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesCommitment;
