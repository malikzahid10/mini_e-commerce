import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-4">
        <div>
          <Link to="/" className="text-2xl font-bold">
            Shop<span className="text-blue-400">Mart</span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
            Discover your everyday essentials with ShopMart. Find products you
            love at great prices.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-gray-300 transition hover:text-white">
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-300 transition hover:text-white"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-300 transition hover:text-white"
            >
              About Us
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Shopping Links</h3>
          <div className="flex flex-col gap-4">
            <Link
              to="/wishlist"
              className="text-gray-300 transition hover:text-white"
            >
              Wishlist
            </Link>
            <Link
              to="/cart"
              className="text-gray-300 transition hover:text-white"
            >
              Shopping Cart
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resource</h3>
          <div className="flex flex-col gap-4">
            <p>Blog</p>
            <p>Newsletter</p>
            <p>Help Center</p>
            <p>Support</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 px-5 py-5 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} ShopMart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
