import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/pi.jpg";

const Hero = () => {
  return (
    <div className="bg-blue-100">
      <div className="max-w-7xl mx-auto md:py-16 py-10 px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <p className="mb-3 text-blue-600 font-semibold uppercase tracking-wider">
            Welcome to ShopMart
          </p>
          <h1 className="text-3xl font-bold mb-4 text-gray-900 leading-tight text-3xl sm:text-4xl md:text-5xl">
            Discover Your Everyday Essentials
          </h1>
          <p className="mb-6 max-w-lg text-gray-600">
            Explore products you'll love at prices you'll enjoy. Find something
            special for your everyday needs.
          </p>
          <Link
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            to="/products"
          >
            Shop Now →
          </Link>
        </div>
        <div>
          <img
            className="h-64 sm:h-80 md:h-96 w-full rounded-2xl object-cover"
            src={HeroImage}
            alt="shopping products"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
