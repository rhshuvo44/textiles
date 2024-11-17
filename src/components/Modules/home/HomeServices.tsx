import SercivesCard from "@/components/UI/SercivesCard";
import { FaDesktop } from "react-icons/fa";

const HomeServices = () => {
  const homeServices = [
    {
      id: 1,
      icon: <FaDesktop className="text-8xl text-[#00A9E9]" />,
      title: "We Manufacture",
      description: `Submit a manufacturer to be featured with a free video and we&apos;ll
          send you a free sample to find our what you need.`,
    },
    {
      id: 2,
      icon: <FaDesktop className="text-8xl text-[#00A9E9]" />,
      title: "We Design Fabric",
      description: `Choose from many fabrics and design your . Create and print only the fabric you need with no minimum order.`,
    },
    {
      id: 3,
      icon: <FaDesktop className="text-8xl text-[#00A9E9]" />,
      title: "We Engineer",
      description: `We carry an enormous inventory of all the things you need to complete your project: notions, patterns and trims.`,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-3 p-5 md:p-10">
      {homeServices.map((service) => (
        <SercivesCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default HomeServices;
