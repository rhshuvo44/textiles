import { featuredCustomers } from "@/db/data";
import Image from "next/image";

const FeaturedCustomers = () => {
  return (
    <div className=" md:p-10 p-5">
      <h2
        className="text-3xl font-semibold mb-8 text-center"
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
              width={200}
              height={200}
              src={customer.logo}
              alt={customer.name}
              className="mx-auto h-16 mb-4"
            />
            <p className="text-sm text-gray-600">{customer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCustomers;
