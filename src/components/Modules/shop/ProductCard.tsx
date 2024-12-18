import { TProduct } from "@/types";
import Image from "next/image";
import StarRatingsComponent from "./StarRatingsComponent";

const ProductCard = ({ product }: { product: TProduct }) => {
  const {
    title,
    description,
    price,
    brand,
    rating,
    thumbnail,
    discountPercentage,
  } = product;

  return (
    <div className="card shadow-lg p-5">
      <div className=" product-card">
        <div className="product-img">
          <Image
            src={thumbnail}
            alt="Product Image"
            className="image-full"
            width={500}
            height={500}
          />
        </div>
        <div className="product-details">
          <h6 className="brand text-[#00AAE9]">{brand}</h6>
          <h5 className="product-title">{title}</h5>
          <StarRatingsComponent rating={rating} />
          <p
            className="disc"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <p className="price" >$<del>{discountPercentage}</del></p>
          <p className="price text-red-500">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
