import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkStyles = "text-sm font-medium hover:text-gray-200";

  return (
    <nav className="bg-blue-600 text-white font-sans">
      <div className="max-w-[980px] mx-auto px-4 lg:px-0">
        {/* Top Navigation */}
        <div className="h-[44px] flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/HomePage" className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5" />
            <span className="font-bold text-lg">UNIVOC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/HomePage" className={linkStyles}>
              HOME
            </Link>
            <Link to="/about" className={linkStyles}>
              ABOUT US
            </Link>
            <Link to="/courses" className={linkStyles}>
              COURSES
            </Link>
            <Link to="/jobsection" className={linkStyles}>
              HR SECTION
            </Link>
            <Link to="/Contact" className={linkStyles}>
              CONTACT US
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className={linkStyles}>
              <Search className="w-4 h-4" />
            </button>
            <Link
              to="/Login"
              className="bg-white text-blue-600 font-medium px-4 py-1 rounded hover:bg-blue-500 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-700 text-white font-medium px-4 py-1 rounded hover:bg-blue-500 transition"
            >
              Signup
            </Link>
            <button
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="lg:hidden hover:text-gray-200"
            ></button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white py-2 px-4 space-y-2 text-black">
            <Link to="/HomePage" className={linkStyles}>
              HomePage
            </Link>
            <Link to="/about" className={linkStyles}>
              ABOUT US
            </Link>
            <Link to="/courses" className={linkStyles}>
              COURSES
            </Link>
            <Link to="/jobsection" className={linkStyles}>
              JOB SECTION
            </Link>
            <Link to="/studentlife" className={linkStyles}>
              STUDENT LIFE
            </Link>
            <div className="flex flex-col space-y-2">
              <Link
                to="/Login"
                className="bg-blue-600 text-white font-medium text-center py-2 rounded hover:bg-blue-500"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-700 text-white font-medium text-center py-2 rounded hover:bg-blue-500"
              >
                Signup
              </Link>
            </div>
          </div>
        )}

        {/* Promo Section */}
        <div className="mt-4 text-center bg-white-700">
          Navigate your future with confidence. Find your perfect course match
          today!{" "}
          <Link to="/explore" className="text-blue-200 hover:underline">
            Explore now &gt;
          </Link>
        </div>
      </div>
    </nav>
  );
}
