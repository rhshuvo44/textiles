const FilterSidebar = () => {
  return (
    <div className="w-full">
      {/* Categories */}
      <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Shop By Categories</h3>
        <ul className="space-y-2">
          {[
            "hoody/jacket",
            "Leggins",
            "Polo Shirt",
            "T-Shirt",
            "Tank Top",
            "Sweat Shirt",
            "Trouser",
            "Shorts",
            "Romper/Keeper",
            "Long Sleeve T-shirt",
          ].map((category, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-500 capitalize"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Filter By</h3>

        {/* Availability */}
        <h5 className="text-sm font-semibold mb-2">Availability</h5>
       

        {/* Price */}
        {/* <div className="mt-4">
          <h5 className="text-sm font-semibold mb-2">Price</h5>
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="From"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              placeholder="To"
              className="input input-bordered w-full"
            />
          </div>
        </div> */}

        {/* Size */}
        <div className="mt-4">
          <h5 className="text-sm font-semibold mb-2">Size</h5>
          
        </div>
      </div>

      {/* Product Tags */}
      {/* <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Product Tags</h3>
        <div className="flex flex-wrap gap-2">
          {["Headphone", "Laptop", "Mobile", "Oppo", "Tablet"].map(
            (tag, index) => (
              <span
                key={index}
                className="badge badge-outline badge-primary py-2 px-3"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div> */}

      {/* Random Products */}
      {/* <div className="bg-white shadow-md p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Random Product</h3>
        {[1, 2].map((item, index) => (
          <div key={index} className="flex gap-4 mb-4">
            <div className="w-1/2">
              <Image
                src="/images/watch.jpg"
                width={150}
                height={150}
                className="rounded-lg object-cover"
                alt="Random Product"
              />
            </div>
            <div className="w-1/2">
              <h4 className="font-semibold text-sm mb-2">
                Lorem ipsum dolor sit amet.
              </h4>
              <div className="rating">
                <input
                  type="radio"
                  name={`rating-${index}`}
                  className="mask mask-star-2 bg-yellow-500"
                  checked
                />
                <input
                  type="radio"
                  name={`rating-${index}`}
                  className="mask mask-star-2 bg-yellow-500"
                />
              </div>
              <p className="font-bold text-lg">$100</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default FilterSidebar;
