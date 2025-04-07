import ServicesCard from "@/components/UI/ServicesCard";
import { GiTravelDress } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineEngineering } from "react-icons/md";

const HomeServices = () => {
  const homeServices = [
    {
      id: 1,
      icon: <IoMdSettings className="text-8xl text-[#00A9E9]" />,
      title: "We Manufacture",
      description: `Submit a manufacturer to be featured with a free video and we&apos;ll
          send you a free sample to find our what you need.`,
    },
    {
      id: 2,
      icon: <GiTravelDress className="text-8xl text-[#00A9E9]" />,
      title: "We Design Fabric",
      description: `Choose from many fabrics and design your . Create and print only the fabric you need with no minimum order.`,
    },
    {
      id: 3,
      icon: <MdOutlineEngineering className="text-8xl text-[#00A9E9]" />,
      title: "We Engineer",
      description: `We carry an enormous inventory of all the things you need to complete your project: notions, patterns and trims.`,
    },
  ];
  return (
    <div
      className="flex flex-col md:flex-row gap-3 p-5 md:p-10 md:-mt-36 cursor-pointer "
      data-aos="fade-up"
    >
      {homeServices.map((service) => (
        <ServicesCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default HomeServices;
