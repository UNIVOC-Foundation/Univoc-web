"use client";

import { useState, useEffect } from "react";
import React from 'react';
import Student from '../Hero/Student.png';
import Carrer from '../Hero/Carrer.png';
import Learn from '../Hero/Learn.png';
import Post from '../Hero/Post.png';
import Work from '../Hero/Work.png';
import Trainee from '../Hero/Trainee.png';
import Recognized from '../Hero/Recognized.png';
import Life from '../Hero/Life.png';


export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image objects with profession labels
  const images = [
    {
      url:"/placeholder.svg?height=600&width=1200", // Use the imported local image directly
      alt: "Chef in professional kitchen",
      profession: "Culinary Arts",
    },
    {
      url: "/placeholder.svg?height=600&width=1200",
      alt: "Doctor with microscope",
      profession: "Healthcare",
    },
    {
      url: "/placeholder.svg?height=600&width=1200",
      alt: "Engineer at work",
      profession: "Engineering",
    },
    {
      url: "/placeholder.svg?height=600&width=1200",
      alt: "IT professional",
      profession: "Information Technology",
    },
    {
      url: "/placeholder.svg?height=600&width=1200",
      alt: "Business professional",
      profession: "Business Management",
    },
  ];

  useEffect(() => {
    // Set up the interval for automatic sliding
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1983D3] overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover mx-auto"
              style={{
                width: "1200px", // Explicit width
                height: "600px", // Explicit height
              }}
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white text-center bg-[#1983D3] px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-blue-200">Earn,</span>{" "}
          <span className="text-white">Learn,</span>{" "}
          <span className="text-gray-200">Grow</span>
        </h1>

        <p className="max-w-3xl text-lg md:text-xl mb-8">
          We create industry-ready talent through advanced learning, skilling,
          and certification, leveraging Univoc's expertise, in partnership with
          universities, corporates, and governments.
        </p>

        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition-colors duration-300">
          EXPLORE MORE
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentImageIndex === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/*kshitij*/}
      <div>
        {/* Courses & Jobs Section */}
        <section className="bg-[#1983D3] flex justify-center py-12 px-4">
          <div
            className="relative bg-white rounded-3xl shadow-lg p-16 w-full max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[95%]"
            style={{
              margin: '0 5px',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              overflow: 'hidden',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(to right, rgba(30, 144, 255, 0.5) 0px, rgba(25, 131, 211, 0.5) 1px, transparent 1px, transparent 40px),
                  repeating-linear-gradient(to bottom, rgba(30, 144, 255, 0.5) 0px, rgba(25, 131, 211, 0.5) 1px, transparent 1px, transparent 40px)
                `,
                maskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%)`,
                WebkitMaskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%)`,
                backgroundSize: '100% 100%',
                zIndex: 0,
              }}
            ></div>
  
            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Courses Section */}
              <div className="flex flex-col items-center text-center">
                <h2
                  className="text-5xl font-Arial mb-4 text-black"
                  style={{ marginTop: '50px', marginBottom: '50px' }}
                >
                  COURSES
                </h2>
                <img
                  src={Student}
                  alt="Student"
                  className="w-full h-auto max-w-[500px] object-cover rounded-lg mb-6"
                  style={{ marginTop: '50px' }}
                />
                <button className="mt-4 bg-[#1983D3] text-white text-lg font-semibold py-4 px-14 rounded-full hover:bg-[#1983D3]">
                  Explore
                </button>
              </div>
  
              {/* Jobs Section */}
              <div className="flex flex-col items-center text-center">
                <h2
                  className="text-5xl font-Arial mb-4 text-black"
                  style={{ marginTop: '50px', marginBottom: '50px' }}
                >
                  JOB
                </h2>
                <img
                  src={Carrer}
                  alt="Career"
                  className="w-full h-auto max-w-[500px] object-cover rounded-lg mb-6"
                  style={{ marginTop: '50px' }}
                />
                <button className="mt-4 bg-[#1983D3] text-white text-lg font-semibold py-4 px-14 rounded-full hover:bg-[#1983D3]">
                  Explore
                </button>
              </div>
            </div>
  
            {/* Placement Rate */}
            <div className="mt-40 text-center relative z-10">
              <div className="flex items-center justify-center w-full relative">
                <div className="border-t border-black w-1/4"></div>
                <span className="px-4 text-lg font-semibold italic text-gray-700">
                  With a 100% placement rate, we ensure students gain skills and
                  secure top careers after graduation.
                </span>
                <div className="border-t border-black w-1/4"></div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Why Students Choose Us Section */}
        <section className="py-8 bg-gradient-to-b from-[#DFF3FF] via-[#F8FCFF] to-[#E8F5FF]">
          <div className="bg-transparent rounded-lg py-12 px-4 shadow-md">
            {/* Why Choose Us Heading with Custom Styles */}
            <h2
              className="text-center mb-8 text-[#066BB4]"
              style={{
                fontFamily: 'Agbalumo',
                fontSize: '100px',
                fontWeight: '900',
                lineHeight: '183.6px',
                textAlign: 'center',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
              }}
            >
              Why Thousand Students Choose Us Every Day ?
            </h2>
  
            {/* Updated Feature Cards with images inline in the grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Feature Card with image and description inline */}
              <FeatureCard
                title="LEARN AND EARN"
                description="Develop job skills while gaining employment opportunities and financial independence through a stipend."
                image={Learn}
              />
              <FeatureCard
                title="QUALITY WORK EXPERIENCE"
                description="Receive on-the-job training with reputed organizations to enhance industry acceptance and career progression."
                image={Work}
              />
              <FeatureCard
                title="TRAINEE WELFARE"
                description="Benefit from comprehensive health, safety, and welfare measures, including insurance coverage."
                image={Trainee}
              />
              <FeatureCard
                title="WORK-LIFE BALANCE"
                description="Adhere to regulated hours of work, overtime, leave, and holidays for a balanced experience."
                image={Life}
              />
              <FeatureCard
                title="POST-TRAINING SUPPORT"
                description="Access career guidance and opportunities after completing training programs."
                image={Post}
              />
              <FeatureCard
                title="RECOGNIZED QUALIFICATIONS"
                description="Earn UGC-certified diplomas, advanced diplomas, bachelor’s degrees, and eligibility for government jobs."
                image={Recognized}
              />
            </div>
          </div>
        </section>
    </div>
   </div>
  );
} 
  
  
  function FeatureCard({ title, description, image }) {
    return (
      <div className="p-6 bg-transparent text-center">
        {/* Image used as a background to fill the div */}
        <div
          className="w-full h-[300px] bg-cover bg-center rounded-lg mb-4"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover', // Ensure the image fully covers the div
            backgroundPosition: 'center', // Center the image
          }}
        ></div>
        <h3 className="text-4xl font-bold text-[#066BB4]">{title}</h3>
        <p className="text-lg text-black mt-2">{description}</p>
      </div>
  );
}
 
