import React, { useEffect, useState } from "react";
import { getFeatureProducts } from "../services/productServices";
import ProductCard from "./ProductCard";

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getFeatureProducts();
        setProducts(response);
      } catch (error) {
        setError("Something went wrong , Please Try Again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p className="py-10 text-center">Loading...</p>;
  }

  if (error) {
    return <p className="py-10 text-center text-red-600">{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto py-4 px-10">
      <h1 className="text-3xl font-bold sm:text-3xl">Features Products</h1>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
