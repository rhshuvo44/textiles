import { TProduct } from "@/types";
import { useEffect, useState } from "react";

const applySorting = (products: TProduct[], sort: string) => {
  const sortCriteria: { [key: string]: (a: TProduct, b: TProduct) => number } =
    {
      "title-ascending": (a, b) => a.title.localeCompare(b.title),
      "title-descending": (a, b) => b.title.localeCompare(a.title),
      "price-ascending": (a, b) => a.price - b.price,
      "price-descending": (a, b) => b.price - a.price,
      "rating-ascending": (a, b) => a.rating - b.rating,
      "rating-descending": (a, b) => b.rating - a.rating,
      "created-ascending": (a, b) =>
        new Date(a.meta.createdAt).getTime() -
        new Date(b.meta.createdAt).getTime(),
      "created-descending": (a, b) =>
        new Date(b.meta.createdAt).getTime() -
        new Date(a.meta.createdAt).getTime(),
    };

  const compare = sortCriteria[sort];
  return compare ? products.sort(compare) : products;
};

const useProducts = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sort, setSort] = useState<string>("best-selling");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);

        const uniqueCategories = [
          ...new Set(
            data.products.map((product: TProduct) => product.category)
          ),
        ];
        setCategories(uniqueCategories as string[]);

        const uniqueTags = [
          ...new Set(
            data.products.flatMap((product: TProduct) => product.tags || [])
          ),
        ];
        setTags(uniqueTags as string[]);

        setFilteredProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sorting logic
  useEffect(() => {
    let updatedProducts = [...products];

    if (selectedCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedTag) {
      updatedProducts = updatedProducts.filter((product) =>
        product.tags?.includes(selectedTag)
      );
    }

    updatedProducts = applySorting(updatedProducts, sort);

    setFilteredProducts(updatedProducts);
  }, [selectedCategory, selectedTag, sort, products]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    products,
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
  };
};

export default useProducts;
