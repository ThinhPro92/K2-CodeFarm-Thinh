import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">MyApp</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            About
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Services
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Contact
          </a>
        </nav>

        {/* Nút hành động */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
