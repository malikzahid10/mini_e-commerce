import React from "react";
import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCards";
import FeatureProducts from "../components/FeatureProducts";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <CategoryCards />
      <FeatureProducts />
    </div>
  );
};

export default Home;
