import { featuredCustomers } from "@/db/data";
import Image from "next/image";

const FeaturedCustomers = () => {
  return (
    <div className="md:p-10 p-5">
      <h2
        className="text-4xl sm:text-5xl font-semibold mb-8 text-center"
        data-aos="fade-up"
      >
        Featured Customers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {featuredCustomers.slice(0, 3).map((customer, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-md text-center"
            data-aos="fade-up"
          >
            <Image
              src={customer.logo}
              alt={customer.name}
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <p className="text-sm text-info">{customer.name}</p>
            <p className="text-sm text-gray-600">{customer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCustomers;
