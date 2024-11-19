import Image from "next/image";
import image from "@/assets/image/companyOverView.jpg";
const CompanyOverview = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white p-5 md:p-10 shadow-lg rounded-md">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2  mb-6 lg:mb-0">
        <Image
          src={image}
          alt="Company Industry"
          className="rounded-md object-cover"
          height={200}
          width={500}
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Company Overview
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          The company principally operates through three primary segments —
          Construction Industries, Resource Industries, and Energy &
          Transportation — and provides financing and related services through
          its Financial Products segment.
        </p>
        <div className="border-l-4 border-pink-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Company Net Value
          </h3>
          <p className="text-3xl font-bold text-blue-700">$12,000,000</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
