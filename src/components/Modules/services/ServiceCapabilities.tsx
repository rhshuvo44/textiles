import image from "@/assets/image/Subscription_Monthly_M.jpg";
import Image from "next/image";

const ServiceCapabilities = () => {
  return (
    <div className="px-5 md:px-10">
      <div className="card lg:card-side bg-base-100 rounded-none shadow-xl">
        <div className="card-body w-full md:w-1/2  md:px-20">
          <h2 className="text-5xl font-bold text-[#00A9E9]" data-aos="fade-right">
            Our Capabilities
          </h2>
          <p className="text-gray-600 mb-2 leading-relaxed" data-aos="fade-right">
            At{" "}
            <span className="text-lg font-bold text-[#00AAE9]">
              Sarkar Textile & Apparel
            </span>
            , we pride ourselves on our diverse and robust capabilities that
            enable us to meet the evolving needs of the textile industry. Our
            comprehensive services and advanced technologies ensure the highest
            standards of quality, efficiency, and sustainability.
          </p>

          <p data-aos="fade-right">
            We utilize cutting-edge machinery and technology to produce a wide
            variety of fabrics, including woven, knitted, and non-woven
            textiles. Our state-of-the-art production lines ensure precision and
            efficiency, allowing us to deliver both high-volume and custom-made
            textile solutions.
          </p>

          <p data-aos="fade-up">
            Sustainability is central to our operations. We prioritize
            eco-friendly dyes, reduce water consumption with advanced treatment
            systems, and use sustainable raw materials in production. Our
            commitment to green manufacturing helps minimize our environmental
            impact and supports a circular approach to textile production.
          </p>
        </div>
        <figure className="w-full md:w-1/2" data-aos="fade-left">
          <Image src={image} alt="Album" height={500} width={500} />
        </figure>
      </div>
    </div>
  );
};

export default ServiceCapabilities;
