import image from "@/assets/image/companyOverView.jpg";
import Image from "next/image";
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
          <span className="text-lg font-bold text-[#00AAE9]">
            Sarkar Textile & Apparel
          </span>{" "}
          is a leading player in the textile industry, specializing in the
          production of high-quality fabrics and garments. The company operates
          through three primary segments:
        </p>
        <ul className="mb-5">
          <li>
            <p className="mb-2">
              <b>Manufacturing and Production:</b> Focused on state-of-the-art
              textile manufacturing, including weaving, dyeing, printing, and
              finishing processes to deliver premium-quality fabrics and
              garments.
            </p>
          </li>
          <li>
            <p className="mb-2">
              <b>Supply Chain and Distribution:</b> Ensures efficient logistics
              and timely delivery of products to domestic and international
              markets, maintaining strong partnerships with suppliers and
              distributors.
            </p>
          </li>
          <li>
            <p>
              <b>Innovation and Sustainability:</b> Committed to adopting
              eco-friendly practices, reducing waste, and utilizing sustainable
              raw materials to create textiles that meet modern environmental
              standards.
            </p>
          </li>
        </ul>

        <div className="border-l-4 border-pink-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Company Net Value
          </h3>
          <p className="text-3xl font-bold text-[#00AAE9]">$12,000,000</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
