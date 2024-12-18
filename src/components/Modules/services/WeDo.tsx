import image from "@/assets/image/weDoIt.jpg";
import Image from "next/image";

const WeDo = () => {
  return (
    <div className="px-5 md:px-10 pb-5">
      <div className="card lg:card-side bg-base-100 rounded-none shadow-xl">
        <figure className="w-full md:w-1/2">
          <Image src={image} alt="Album" height={500} width={500} />
        </figure>
        <div className="card-body w-full md:w-1/2  md:px-20">
          <h2 className="text-5xl font-bold text-[#00A9E9]">How we do it</h2>
          <p className="text-gray-600 mb-2 leading-relaxed">
            At{" "}
            <span className="text-lg font-bold text-[#00AAE9]">
              Sarkar Textile & Apparel
            </span>
            we combine cutting-edge technology, sustainable practices, and
            rigorous quality control to deliver exceptional textile products.
          </p>
          <p>
            Advanced Manufacturing: We use state-of-the-art machinery to produce
            a variety of fabrics, ensuring precision and efficiency. Our skilled
            team oversees the entire process, from raw material sourcing to
            finished fabric.
          </p>
          <p>
            Sustainable Practices: We prioritize eco-friendly materials,
            energy-efficient production, and waste reduction, minimizing our
            environmental impact while maintaining high-quality standards.
          </p>
          <p>
            Quality Control: Every stage of production undergoes strict quality
            checks, from raw material inspection to final product testing,
            ensuring durability, colorfastness, and overall performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
