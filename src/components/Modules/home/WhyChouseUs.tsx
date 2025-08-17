import { BiGlobe, BiLeaf } from "react-icons/bi";
import { FcFactory } from "react-icons/fc";
import { LuPackageCheck } from "react-icons/lu";

const capabilities = [
  {
    icon: <FcFactory className="w-10 h-10" />,
    title: "State-of-the-Art Manufacturing",
    description:
      "Cutting-edge machinery & processes ensuring top-tier quality.",
  },
  {
    icon: <BiLeaf className="w-10 h-10 text-green-500" />,
    title: "Eco-Friendly & Sustainable",
    description: "Committed to ethical practices and green production.",
  },
  {
    icon: <LuPackageCheck className="w-10 h-10 text-blue-500" />,
    title: "Customization & Bulk Orders",
    description: "Tailored solutions for brands and high-volume needs.",
  },
  {
    icon: <BiGlobe className="w-10 h-10 text-indigo-500" />,
    title: "Global Distribution",
    description: "Efficient worldwide shipping & logistic solutions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className=" px-4 sm:px-6 lg:px-20 py-12">
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-extrabold"
          data-aos="fade-up"
        >
          Why Choose Us?
        </h2>
        <p
          className="mt-4 text-base sm:text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover what sets us apart in the textile industry.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item, index) => (
          <div
            key={index}
            className=" shadow hover:shadow-lg transition-all duration-300 rounded-2xl p-6 text-center flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
