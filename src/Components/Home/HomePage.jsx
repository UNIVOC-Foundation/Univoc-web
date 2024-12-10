//"use client";

<<<<<<< HEAD
import { useState, useEffect } from "react";
import Testimonial from "./Testimonial";
import TrustedPartners from "./TrustedPartners";

=======
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
>>>>>>> 8b6ea73 (Home Page Updated)

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image objects with profession labels
  // Assuming images are in public/images folder
  const images = [
    {
      url: "/images/image1.png", // Relative path from the public folder
      alt: "Professional careers showcase",
      profession: "Multiple Professions",
    },
    {
      url: "/images/image2.png",
      alt: "Healthcare and technical professionals",
      profession: "Healthcare & Technical",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
<<<<<<< HEAD
    <div className="relative min-h-screen bg-blue-500 overflow-hidden">
=======
    <div className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
>>>>>>> 8b6ea73 (Home Page Updated)
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {images.map(
            (image, index) =>
              currentImageIndex === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
       
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
     
      </button>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="text-blue-300">Earn,</span>{" "}
          <span className="text-white">Learn,</span>{" "}
          <span className="text-blue-100">Grow</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-lg md:text-xl mb-8"
        >
          We create industry-ready talent through advanced learning, skilling,
          and certification, leveraging Univoc's expertise, in partnership with
          universities, corporates, and governments.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          EXPLORE MORE
        </motion.button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImageIndex === index
                  ? "bg-blue-500 w-6"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Testimonial/>
      <TrustedPartners/>

    </div>
  );
}
