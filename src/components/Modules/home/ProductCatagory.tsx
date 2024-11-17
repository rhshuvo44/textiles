import Jeans from "@/assets/image/jeans.jpg";
import Denim from "@/assets/image/denim.jpg";
import Home from "@/assets/image/home.jpg";
import Printed from "@/assets/image/printed.jpg";
import Shirting from "@/assets/image/shirting.jpg";
import Yarn from "@/assets/image/yarn.jpg";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProductCatagory = () => {
  const gategory = [
    {
      id: 1,
      name: "Jeans",
      image: Jeans,
    },
    {
      id: 2,
      name: "Denim Fabrics",
      image: Denim,
    },
    {
      id: 3,
      name: "Home Textiles",
      image: Home,
    },
    {
      id: 4,
      name: "Printed Fabrics",
      image: Printed,
    },
    {
      id: 5,
      name: "Shirting Fabrics",
      image: Shirting,
    },
    {
      id: 6,
      name: "Yarn",
      image: Yarn,
    },
  ];
  return (
    <div className="p-5 md:p-10">
      <h2 className="text-4xl font-bold text-center mb-5">Products Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {gategory.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 image-full shadow-xl cursor-pointer hover:-translate-y-4 duration-300"
          >
            <figure>
              <Image src={item.image} alt="Shoes" width={400} height={250} />
            </figure>
            <div className="card-body mt-36">
              <h2 className="card-title">{item.name}</h2>
              <div className="card-actions justify-start mt-5">
                <button className="btn btn-outline text-white hover:bg-info hover:border-info duration-300">
                  View <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatagory;
