"use client";
import useProducts from "@/hooks/useProducts"; // Import the custom hook
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";
import SortBar from "./SortBar";

const OurStore = () => {
  const {
    categories,
    tags,
    filteredProducts,
    selectedCategory,
    selectedTag,
    sort,
    currentPage,
    totalPages,
    paginatedProducts,
    setSelectedCategory,
    setSelectedTag,
    setSort,
    setCurrentPage,
  } = useProducts(); // Use the custom hook

  return (
    <div className="p-5 md:p-10">
      <div className="flex">
        <Sidebar
          categories={categories}
          tags={tags}
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          onCategoryClick={(category) => {
            setSelectedCategory(category);
            setSelectedTag(null); // Reset tag filter
          }}
          onTagClick={(tag) => {
            setSelectedTag(tag);
            setSelectedCategory(null); // Reset category filter
          }}
        />
        <div className="w-3/4">
          <SortBar
            sort={sort}
            totalProducts={filteredProducts.length}
            onSortChange={(e) => setSort(e.target.value)}
          />
          <ProductList products={paginatedProducts} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default OurStore;
