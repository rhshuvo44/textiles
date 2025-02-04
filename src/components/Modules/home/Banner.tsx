import banner from "@/assets/image/textile_main_image.jpg";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center px-10">
        <div className="max-w-lg ">
          <h1 className="mb-5 text-2xl md:text-5xl font-bold"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          >
            The Largest Exporter of Textile Products
          </h1>
          <p
            className="mb-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            In the list of importers – 45 countries: Germany, Spain, Italy,
            Poland, Portugal, Turkey, South Korea, Japan, etc.
          </p>
          <div className="flex gap-3 flex-col md:flex-row">
            <Link
              href="/"
              className="btn btn-info text-white"
              data-aos="zoom-in"
            >
              In Details <FaLongArrowAltRight />
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline text-info hover:bg-info hover:border-info duration-300"
              data-aos="zoom-out"
            >
              Contact Us <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
