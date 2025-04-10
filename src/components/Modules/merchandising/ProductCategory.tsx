import ProductCategoriesCard from "@/components/UI/ProductCategoriesCard";
import { productCategories } from "@/db/data";
import Image from "next/image";

const ProductCategory = () => {
  return (
    <section className="py-16 bg-gray-100 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Product Categories
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {productCategories.map(({ title, subCategory, photo }, index) => (
          //           <div key={index} className="card bg-base-100 shadow-sm">
          //             <figure>
          //               <Image width={400} height={400} src={photo} alt={title}  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"/>
          //             </figure>
          //             <div className="card-body">
          //               <h2 className="card-title">
          //                {title}
          //                 {/* <div className="badge badge-secondary">NEW</div> */}
          //               </h2>
          //               {/* <p>
          //                 A card component has a figure, a body part, and inside body
          //                 there are title and actions parts
          //               </p> */}
          //               <div className="card-actions justify-start">
          // {
          //                 subCategory?.map((subCat, index) => (
          //                   <div key={index} className="badge">
          //                     {subCat.title}
          //                   </div>
          //                 ))
          // }
          //                 {/* <div className="badge badge-outline">Fashion</div>
          //                 <div className="badge badge-outline">Products</div> */}
          //               </div>
          //             </div>
          //           </div>
          <ProductCategoriesCard
            key={index}
            title={title}
            photo={photo}
            subCategory={subCategory}
          />
        ))}
      </div>
      <h2 className="text-3xl font-bold text-center mb-10">
        Product Categories
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {productCategories.map(({ title, subCategory, photo }, index) => (
          <div key={index} className="card bg-base-100 shadow-sm">
            <figure>
              <Image
                width={400}
                height={400}
                src={photo}
                alt={title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {title}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              {/* <p>
                          A card component has a figure, a body part, and inside body
                          there are title and actions parts
                        </p> */}
              <div className="card-actions justify-start">
                {subCategory?.map((subCat, index) => (
                  <div key={index} className="badge">
                    {subCat.title}
                  </div>
                ))}
                {/* <div className="badge badge-outline">Fashion</div>
                          <div className="badge badge-outline">Products</div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
