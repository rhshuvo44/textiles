import { TServices } from "@/types";

const ServicesCard = ({ service }: { service: TServices }) => {
  return (
    <div className="card bg-base-100 shadow-2xl hover:-translate-y-4 duration-300 ">
      <div className="card-body">
        <div className="my-2">{service.icon}</div>
        <h2 className="card-title text-[#00A9E9]">{service.title}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
