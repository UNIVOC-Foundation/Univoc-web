import React from "react";
import PopularCoursesSlider from "./PopularCoursesSlider";
//import Courses from '../Courses1';

const Courses = () => {
  return (
    <>
    <div className="w-full min-h-screen bg-blue-50 px-4 md:px-20 py-10 grid place-items-center">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Learning <span className="text-blue-500">Paths</span>
        </h1>
        <p className="text-gray-600 italic mt-2">Reach new horizons in learning</p>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-lg  mb-10">
        <input
          type="text"
          placeholder="Search for over 50+ courses"
          className="w-full px-6 py-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
          Search
        </button>
      </div>

      
     <div className="flex justify-between ">
      {/* Center Square Image */}

<div className="flex items-center justify-center mb-10">
  <div className="relative w-72 h-72 md:w-96 md:h-96 bg-blue-200 rounded-[2rem] border-spacing-6 ">
    <img
      src="/background-square.png"
      alt="Background"
      className="w-full h-full rounded-[2rem] object-cover"
    />
  </div>
</div>


      {/* Benefits Section */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-5xl ">
        {/* Left Placeholder */}
        <div className="hidden md:block w-1/3"></div>
       <div>
        {/* Benefits Text */}
        <div className="w-full md:w-2/3 ">
          <h2 className="text-2xl font-semibold mb-4">
            Benefits <span className=" text-blue-500"> From Our Online <br /> Learning</span> 
          </h2>
          <div className="space-y-4">
            <div className="flex items-start ">
              <div className="bg-blue-500 text-white rounded-full p-2 flex items-center justify-center  hover:bg-blue-600 cursor-pointer">
                🎓
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800 ">Online Degrees</h3>
                <p className="text-gray-600">
                  Earn accredited degrees from the comfort of your home, opening doors to a
                  world of possibilities.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full p-2 flex items-center justify-center  hover:bg-blue-600 cursor-pointer">
                ⏳
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Short Courses</h3>
                <p className="text-gray-600">
                  Enhance your skills with our concise and focused short courses, designed for
                  quick and effective learning.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full p-2 flex items-center justify-center  hover:bg-blue-600 cursor-pointer">
                👨‍🏫
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Training From Experts</h3>
                <p className="text-gray-600">
                  Immerse yourself in knowledge with industry experts guiding you through
                  hands-on experience.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full p-2 flex items-center justify-center  hover:bg-blue-600 cursor-pointer">
                🎥
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">1.5k+ Video Courses</h3>
                <p className="text-gray-600">
                  Dive into a vast library of over 1.5k video courses covering many subjects,
                  offering a visual learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
<PopularCoursesSlider/>
    </>
  );
};

export default Courses;
