import image from "@/assets/image/Subscription_Monthly_M.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
const Capabilities = () => {
  return (
    <div className="p-5 md:p-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-full md:w-1/2">
          <Image src={image} alt="Album" height={500} width={500} />
        </figure>
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

          <div className="card-actions justify-start">
            <Link href="/about" className="btn btn-info text-white">
              About us <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
