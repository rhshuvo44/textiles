import image from "@/assets/image/Subscription_Monthly_M.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const Capabilities = () => {
  return (
    <section className="px-4 py-8 md:px-10 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center bg-base-100 shadow-xl rounded-lg overflow-hidden">
        <figure className="w-full lg:w-1/2" data-aos="fade-down">
          <Image
            src={image}
            alt="Our textile production facility"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </figure>

        <div
          className="w-full lg:w-1/2 p-6 md:p-10 space-y-4"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Our Capabilities
          </h2>

          <p className="leading-relaxed">
            At <span className="font-semibold text-primary">Textiles</span>,
            we pride ourselves on our diverse and robust capabilities that
            enable us to meet the evolving needs of the textile industry.
          </p>

          <p className="leading-relaxed">
            We utilize cutting-edge machinery and technology to produce a wide
            variety of fabrics, including woven, knitted, and non-woven
            textiles. Our state-of-the-art production lines ensure precision and
            efficiency, allowing us to deliver both high-volume and custom-made
            solutions.
          </p>

          <p className="leading-relaxed">
            Sustainability is central to our operations. We prioritize
            eco-friendly dyes, reduce water consumption, and use sustainable raw
            materials. Our green manufacturing approach minimizes environmental
            impact and supports circular textile production.
          </p>

          <div className="pt-4">
            <Link href="/about" passHref>
              <span className="btn btn-info text-white inline-flex items-center gap-2">
                About Us <FaLongArrowAltRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
