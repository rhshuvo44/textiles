import { caseStudies } from "@/db/data";
import Image from "next/image";

const CaseStudies = () => {
  return (
    <>
      {caseStudies.length > 0 && (
        <div className="bg-gray-50 md:p-10 p-5">
          <h2
            className="text-4xl sm:text-5xl font-semibold mb-8 text-center"
            data-aos="fade-up"
          >
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6"
                data-aos="fade-up"
              >
                {/* Image wrapper with relative and fixed height */}
                <div className="relative w-full h-48 rounded overflow-hidden mb-4">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover"
                  />
                </div>
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
