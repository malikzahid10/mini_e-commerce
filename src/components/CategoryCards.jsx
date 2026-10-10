import React, { useEffect, useState } from "react";
import { getCategories } from "../services/productServices";

const CategoryCards = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        setError("Something Wrong, Please Try Again.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) {
    return <p className="py-10 text-center">Loading categories...</p>;
  }

  if (error) {
    return <p className="py-10 text-center text-red-600">{error}</p>;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Shop by Category</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="rounded-xl border p-4 text-center transition hover:border-blue-500 hover:shadow-md"
          >
            <h3 className="font-semibold capitalize">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
