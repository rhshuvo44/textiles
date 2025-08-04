import ProductCategoriesCard from "@/components/UI/ProductCategoriesCard";
import { productGallery } from "@/db/data";

const ProductCategory = () => {
  return (
    <section className="md:p-10 bg-gray-100 p-5">
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Product Categories
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productGallery.map(({ title, subCategory, photo }, index) => (
          <ProductCategoriesCard
            key={index}
            title={title}
            photo={photo}
            subCategory={subCategory}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
