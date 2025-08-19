import { TServices } from "@/types";

const ServicesCard = ({ service }: { service: TServices }) => {
  return (
    <div
      className="card bg-base-100 shadow-2xl hover:-translate-y-4 transition-transform duration-300 cursor-pointer"
      role="region"
      aria-label={service.title}
    >
      <div className="card-body">
        <div className="my-4 text-4xl text-primary">{service.icon}</div>
        <h2 className="card-title text-primary">{service.title}</h2>
        <p className="mt-2 text-gray-700">{service.description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
