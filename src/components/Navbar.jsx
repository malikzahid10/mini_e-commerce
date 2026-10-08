import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

import ShopLogo from "../assets/shoplogo.png";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <button
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="text-2xl cursor-pointer md:hidden"
        >
          <IoMdMenu />
        </button>
        <div className="flex items-center gap-0.5">
          <img
            className="h-22 w-auto object-contain"
            src={ShopLogo}
            alt="shoplogo"
          />
          <Link to="/">
            <h2 className="text-3xl font-bold">
              <span className="text-blue-500">Shop</span>Mart
            </h2>
          </Link>
        </div>
        <div className="md:flex items-center gap-6 hidden">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="flex gap-4 items-center">
          <input
            className="border border-gray-400 py-2 px-3 w-64 rounded-lg focus:outline-none hidden md:block"
            type="text"
            placeholder="search products.."
          />
          <Link to="/wishlist" className="text-xl">
            <IoIosHeartEmpty />
          </Link>
          <Link to="/cart" className="text-xl">
            <BsCart />
          </Link>
        </div>
      </div>
      <div className="md:hidden px-4 pb-4">
        <input
          type="text"
          placeholder="search products.."
          className="border border-gray-400 px-3 py-2 w-full rounded-lg focus:outline-none"
        />
      </div>
      <div className="md:hidden py-1 px-4">
        {isOpenMenu && (
          <div className="flex flex-col gap-4">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
