import React, { useState } from "react";
import Logo from "../../../public/assets/howItworks/Navbar/1.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="HABOT Logo" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Find Suppliers
          </a>
          <div className="relative group">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              Find Service Tags
              <svg
                className="inline h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown (Optional, can be replaced with Tailwind Dropdown Component) */}
            <div className="hidden group-hover:block absolute bg-white shadow-lg rounded mt-2">
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Tag 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Tag 2
              </a>
            </div>
          </div>
          <a
            href="#"
            className=" py-2 border-green-700 border-[2px] text-green-700 rounded-sm font-semibold hover:bg-green-700 hover:text-white transition-all delay-100 px-8"
          >
            Login / Sign Up
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Find Suppliers
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Find Service Tags
          </a>
          <a
            href="#"
            className="block px-4 py-2 bg-green-600 text-white text-center rounded-md hover:bg-green-700 mx-4 my-2"
          >
            Login / Sign Up
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
