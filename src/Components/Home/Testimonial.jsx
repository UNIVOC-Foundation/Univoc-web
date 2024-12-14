import React from "react";
import student from "../../assets/Student.png";
import student1 from "../../assets/Student1.png";
import student2 from "../../assets/Student2.png";
import student3 from "../../assets/Student3.png";

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
          <div className="flex space-x-4">
  {/* Button 1: Adani Group Logo */}
  <button className="flex items-center  hover:bg-blue-700 text-white py-2 px-6 rounded shadow-lg active:bg-fuchsia-500 cursor-pointer">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png"
      alt="Adani Group Logo"
      className="w-6 h-6 mr-2"
    />
    <a href="#" className="no-underline text-white">
    Adani
    </a>
  </button>

  {/* Button 2: Dixon Logo */}
  <button className="flex items-center hover:bg-blue-700 text-white py-2 px-6 full-rounded shadow-lg active:bg-fuchsia-500 cursor-pointer">
    <img
      src="https://media.licdn.com/dms/image/v2/C560BAQFD_5U0VD-ycQ/company-logo_200_200/company-logo_200_200/0/1630473927375/dixoninfo_logo?e=2147483647&v=beta&t=yA8lIfpVPlRck75Cr09DW4OPmBiGIwtjJ_gd-oADHYo"
      alt="Dixon Logo"
      className="w-3 h-3 mr-2 rounded-sm"
    />
    <a href="#" className="no-underline text-white">
      Dixon
    </a>
  </button>

  {/* Button 3: Default */}
  <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded shadow-lg active:bg-fuchsia-500 cursor-pointer">
    <a href="#" className="no-underline text-white">
      Apply Now
    </a>
  </button>
</div>

        </div>
        {/* Right Section */}
        <div className="relative flex-1  ">
          <div className="flex justify-center md:justify-end pointer-cursor w-full md:w-full">
            {/* Students Images */}
            <img
              src={student2}
              alt="Student2"
              className="w-90 h-60 -mx-11 my-5"
            />
            <img
              src={student3}
              alt="Student3"
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
              className="w-90 h-72 -my-10"
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

