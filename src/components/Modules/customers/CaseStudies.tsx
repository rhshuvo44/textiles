import Image from "next/image";
import React from "react";
interface CaseStudy {
    title: string;
    description: string;
    image: string;
    stats: string;
  }
const caseStudies: CaseStudy[] = [
  {
    title: "Boosting Production for EcoWear",
    description:
      "Helped EcoWear scale production while maintaining sustainability.",
    image: "/case-studies/ecowear.png",
    stats: "Efficiency ↑ 30%",
  },
];
const CaseStudies = () => {
  return (
    <>
      {caseStudies.length > 0 && (
        <div className="bg-gray-50 md:p-10 p-5">
          <h2 className="text-3xl font-semibold mb-8 text-center"
          data-aos="fade-up"
          >
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 ">
            {caseStudies.map((cs, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6"
              data-aos="fade-up"
              >
                <Image
                fill
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{cs.title}</h3>
                <p className="text-gray-600 mb-2">{cs.description}</p>
                <span className="font-medium text-indigo-600">{cs.stats}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudies;
