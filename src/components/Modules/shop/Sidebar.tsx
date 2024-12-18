import React from "react";

type SidebarProps = {
  categories: string[];
  tags: string[];
  selectedCategory: string | null;
  selectedTag: string | null;
  onCategoryClick: (category: string) => void;
  onTagClick: (tag: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  tags,
  selectedCategory,
  selectedTag,
  onCategoryClick,
  onTagClick,
}) => {
  return (
    <div className="w-1/4">
      {/* Categories */}
      <div className="filter-card mb-3">
        <h3 className="filter-title">Shop By Categories</h3>
        <div className="mt-4">
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:text-blue-500 capitalize ${
                  selectedCategory === category ? "text-blue-500 font-bold" : ""
                }`}
                onClick={() => onCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="filter-card mb-3">
        <h3 className="filter-title">Filter By </h3>
        <div className="mt-4">
          <h5 className="sub-title">Available</h5>
          <div className="space-y-2">
            {[
              { label: "In stock (21)", value: "inStock" },
              { label: "Out of stock (0)", value: "outOfStock" },
            ].map((option, index) => (
              <label key={index} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  value={option.value}
                />
                <span className="ml-2">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <h5 className="sub-title">Price</h5>
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
        </div>

        <div>
          <h5 className="sub-title">Size</h5>
          <div className="space-y-2">
            {["S", "M", "L", "XL", "XXL"].map((size, index) => (
              <label key={index} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  value={size}
                />
                <span className="ml-2">{`${size} (2)`}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* Product Tags */}
      <div className="filter-card mb-3">
        <h3 className="filter-title mb-3">Product Tags</h3>
        <div className="product-tags flex flex-wrap items-center gap-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`badge rounded-3 py-2 px-3 cursor-pointer ${
                selectedTag === tag
                  ? "bg-blue-500 text-white"
                  : "bg-light text-[#00AAE9]"
              }`}
              onClick={() => onTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
