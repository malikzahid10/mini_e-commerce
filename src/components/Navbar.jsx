import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

import ShopLogo from "../assets/shoplogo.png";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const search = searchText.trim();

    if (!search) return;

    navigate(`/products?search=${encodeURIComponent(search)}`);
    setIsOpenMenu(false);
  };

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <button
          type="button"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="cursor-pointer text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          <IoMdMenu />
        </button>

        <div className="flex items-center gap-0.5">
          <img
            className="h-22 w-auto object-contain"
            src={ShopLogo}
            alt="ShopMart logo"
          />

          <Link to="/">
            <h2 className="text-3xl font-bold">
              <span className="text-blue-500">Shop</span>Mart
            </h2>
          </Link>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden md:block">
            <input
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="w-64 rounded-lg border border-gray-400 px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </form>

          <Link to="/wishlist" className="text-xl" aria-label="Wishlist">
            <IoIosHeartEmpty />
          </Link>

          <Link to="/cart" className="text-xl" aria-label="Cart">
            <BsCart />
          </Link>
        </div>
      </div>

      <div className="px-4 pb-4 md:hidden">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full rounded-lg border border-gray-400 px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </form>
      </div>

      <div className="px-4 pb-4 md:hidden">
        {isOpenMenu && (
          <div className="flex flex-col gap-4">
            <Link onClick={() => setIsOpenMenu(false)} to="/">
              Home
            </Link>

            <Link onClick={() => setIsOpenMenu(false)} to="/products">
              Products
            </Link>

            <Link onClick={() => setIsOpenMenu(false)} to="/about">
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
