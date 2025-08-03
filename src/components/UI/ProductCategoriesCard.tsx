import Image, { StaticImageData } from "next/image";

const ProductCategoriesCard = ({
  title,
  photo,
  subCategory,
}: {
  title: string;
  photo: string | StaticImageData;
  subCategory?: { title: string; photo: string | StaticImageData }[];
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      data-aos="fade-up"
    >
      <Image
        src={photo}
        alt={title}
        width={400}
        height={400}
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="card-actions justify-center mt-2 flex flex-wrap gap-2">
          {subCategory?.map((subCat, index) => (
            <div key={index} className="badge">
              {subCat.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategoriesCard;
