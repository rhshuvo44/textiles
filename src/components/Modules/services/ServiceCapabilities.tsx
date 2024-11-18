import image from "@/assets/image/Subscription_Monthly_M.jpg";
import Image from "next/image";

const ServiceCapabilities = () => {
  return (
    <div className="px-5 md:px-10">
      <div className="card lg:card-side bg-base-100 rounded-none shadow-xl">
        <div className="card-body w-full md:w-1/2  md:px-20">
          <h2 className="text-5xl font-bold text-[#00A9E9]">
            Our Capabilities
          </h2>
          <p className="mt-10">
            Stop by today; our talented staff will be happy to help you find
            what you’re searching for!
            <br />
            <br />
            CEO: Steven Rogers
          </p>
        </div>
        <figure className="w-full md:w-1/2">
          <Image src={image} alt="Album" height={500} width={500} />
        </figure>
      </div>
    </div>
  );
};

export default ServiceCapabilities;
