import React from "react";
import { TProduct } from "@/types";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: TProduct[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="products-list pb-5 grid grid-cols-3 gap-10">
      {products.map((product: TProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
