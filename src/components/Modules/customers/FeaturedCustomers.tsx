import partner1 from "@/assets/image/partners_item_1.png";
import partner2 from "@/assets/image/partners_item_2.png";
import partner3 from "@/assets/image/partners_item_3.png";
import Image, { StaticImageData } from "next/image";
export interface Customer {
  name: string;
  logo: string | StaticImageData;
  description: string;
}

const featuredCustomers: Customer[] = [
  {
    name: "Brand A",
    logo: partner1,
    description: "Leading fashion house",
  },
  {
    name: "Brand B",
    logo: partner2,
    description: "Global textile distributor",
  },
  {
    name: "Brand C",
    logo: partner3,
    description: "Eco-friendly apparel maker",
  },
];

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
        {featuredCustomers.map((customer, index) => (
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
