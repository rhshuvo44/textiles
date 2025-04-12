import {} from "react-icons";
import { BiGlobe, BiLeaf } from "react-icons/bi";
import { FcFactory } from "react-icons/fc";
import { LuPackageCheck } from "react-icons/lu";

const capabilities = [
  {
    icon: <FcFactory className="w-10 h-10 text-info" />,
    title: "State-of-the-Art Manufacturing",
    description:
      "Cutting-edge machinery & processes ensuring top-tier quality.",
  },
  {
    icon: <BiLeaf className="w-10 h-10 text-info" />,
    title: "Eco-Friendly & Sustainable",
    description: "Committed to ethical practices and green production.",
  },
  {
    icon: <LuPackageCheck className="w-10 h-10 text-info" />,
    title: "Customization & Bulk Orders",
    description: "Tailored solutions for brands and high-volume needs.",
  },
  {
    icon: <BiGlobe className="w-10 h-10 text-info" />,
    title: "Global Distribution",
    description: "Efficient worldwide shipping & logistic solutions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="p-5 md:p-10 bg-gray-50">
      <div className="text-center">
        <h2
          className="text-3xl font-bold text-gray-800 mb-4"
          data-aos="fade-up"
        >
          Why Choose Us?
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto" data-aos="fade-up">
          Discover what sets us apart in the textile industry.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition hover:shadow-xl"
              data-aos="fade-up"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
