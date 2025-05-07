"use client";
import { productGallery } from "@/db/data";
import Image from "next/image";
import { useState } from "react";

const ProductGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSubCategory = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-12 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Product Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productGallery.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
          >
            {/* Main Category Card */}
            <div onClick={() => toggleSubCategory(index)}>
              <Image
                src={product.photo}
                alt={product.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{product.title}</h3>
              </div>
            </div>

            {/* Subcategories */}
            {activeIndex === index && (
              <div className="px-4 pb-4">
                <ul className="space-y-2 mt-2">
                  {product.subCategory.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className="border rounded-lg p-2 flex items-center gap-3 bg-gray-50 hover:bg-gray-100"
                    >
                      <Image
                        src={sub.photo}
                        alt={sub.title}
                        className="w-14 h-14 object-cover rounded-md"
                      />
                      <span className="text-sm font-medium">{sub.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;
