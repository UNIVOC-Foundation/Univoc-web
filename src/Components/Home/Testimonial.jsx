import React from "react";
import student from "../../assets/Student.png";
import student1 from "../../assets/Student1.png";
import student2 from "../../assets/Student2.png";
const Testimonial = () => {
  //bg-gradient-to-r from-black to-blue-900
  return (
    <div className="bg-gradient-to-r from-black to-blue-500 text-white p-6 md:p-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Achieving better than many premier institute students.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            <span className="font-bold text-blue-400">Guarantee Placement</span>{" "}
            of all students from first year onwards.
          </p>
  
          <button className="bg-blue-600 hover:bg-blue-600 text-white py-2 px-6 rounded shadow-lg active:bg-fuchsia-500 cursor-pointer">
           <a href="#">Apply Now </a>
          </button>
        </div>
        {/* Right Section */}
        <div className="relative flex-1  ">
          <div className="flex justify-center md:justify-end pointer-cursor w-full md:w-full">
            {/* Students Images */}
            <img
              src={student2}
              alt="Student2"
              className="w-90 h-60 -mx-11"
            />
            <img
              src={student1}
              alt="Student1"
              className="w-90 h-60 "
            />
            <img
              src={student}
              alt="Student1"
              className="w-90 h-60 -mx-20 z-10"
            />
             <img
              src={student1}
              alt="Student1"
              className="w-90 h-60 "
            />
            
          </div>
          {/* Outline Placeholder */}
          <div className="absolute top-26 left-8 md:top-24 md:left-16 text-white text-lg italic">
            {/* <p>You can be here too</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

