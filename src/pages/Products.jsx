import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getAllProducts, getCategories } from "../services/productServices";

import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || "all";

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError("Products load nahi ho paaye. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Fetch all categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Categories fetch error:", error);
      }
    };

    fetchCategories();
  }, []);

  // Filter products by selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  if (loading) {
    return <p className="py-16 text-center">Loading products...</p>;
  }

  if (error) {
    return <p className="py-16 text-center text-red-600">{error}</p>;
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-10">
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        All Products
      </h1>

      <p className="mb-8 text-gray-500">Explore our collection of products.</p>

      {/* Category Dropdown */}
      <div className="mb-8 max-w-sm">
        <label
          htmlFor="category"
          className="mb-2 block font-medium text-gray-700"
        >
          Filter by Category
        </label>

        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => {
            const category = e.target.value;

            if (category === "all") {
              setSearchParams({});
            } else {
              setSearchParams({ category });
            }
          }}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="all">All Categories</option>

          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Product Count */}
      <p className="mb-5 text-sm text-gray-500">
        Showing {filteredProducts.length} products
      </p>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="py-10 text-center text-gray-500">
          No products found in this category.
        </p>
      )}
    </main>
  );
}

export default Products;
