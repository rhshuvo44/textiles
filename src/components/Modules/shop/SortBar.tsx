import React from "react";

type SortBarProps = {
  sort: string;
  totalProducts: number;
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SortBar: React.FC<SortBarProps> = ({
  sort,
  totalProducts,
  onSortChange,
}) => {
  return (
    <div className="filter-sort-grid mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-10">
          <p className="mb-0" style={{ width: "100px" }}>
            Sort By:
          </p>
          <select
            name="sort_by"
            className="form-control form-select"
            id="SortBy"
            value={sort}
            onChange={onSortChange}
          >
            <option defaultValue="best-selling">Best selling</option>
            <option value="manual">Featured</option>
            <option value="title-ascending">Alphabetically, A-Z</option>
            <option value="title-descending">Alphabetically, Z-A</option>
            <option value="price-ascending">Price, low to high</option>
            <option value="price-descending">Price, high to low</option>
            <option value="created-ascending">Date, old to new</option>
            <option value="created-descending">Date, new to old</option>
          </select>
        </div>
        <div className="flex items-center gap-10">
          <p className="tottalproducts mb-0">{totalProducts} products</p>
        </div>
      </div>
    </div>
  );
};

export default SortBar;
