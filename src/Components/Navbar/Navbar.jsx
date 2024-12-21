import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#1983D3] text-white font-sans">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Main Navigation */}
        <div className="h-[70px] flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/HomePage" className="flex items-center space-x-2">
            {/* Placeholder for logo */}
            <div className="h-8 w-8 bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-700">
              LOGO
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/HomePage" className="text-white hover:text-gray-200 font-medium">
              HOME
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200 font-medium">
              ABOUT US
            </Link>
            <div className="relative group">
              <Link to="/services" className="text-white hover:text-gray-200 font-medium flex items-center">
                OUR SERVICES <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="relative group">
              <Link to="/courses" className="text-white hover:text-gray-200 font-medium flex items-center">
                COURSES <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="relative group">
              <Link to="/JobSection" className="text-white hover:text-gray-200 font-medium flex items-center">
                JOB <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <Link to="/Contact" className="text-white hover:text-gray-200 font-medium">
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white py-4 px-4 absolute top-[70px] left-0 right-0 z-50">
            <div className="flex flex-col space-y-4">
              <Link to="/HomePage" className="text-blue-600 hover:text-blue-800 font-medium">
                HOME
              </Link>
              <Link to="/about" className="text-blue-600 hover:text-blue-800 font-medium">
                ABOUT US
              </Link>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                OUR SERVICES
              </Link>
              <Link to="/courses" className="text-blue-600 hover:text-blue-800 font-medium">
                COURSES
              </Link>
              <Link to="/JobSection" className="text-blue-600 hover:text-blue-800 font-medium">
                JOB
              </Link>
              <Link to="/Contact" className="text-blue-600 hover:text-blue-800 font-medium">
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
