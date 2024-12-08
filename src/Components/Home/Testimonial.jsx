import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-gradient-to-r from-black to-blue-900 text-white p-6 md:p-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Achieving better than many premier institute students.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            <span className="font-bold text-blue-500">Guarantee Placement</span>{" "}
            of all students from first year onwards.
          </p>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow-lg active:bg-fuchsia-500">
           <a href="#">Apply Now </a>
          </button>
        </div>
        {/* Right Section */}
        <div className="flex-1 relative mt-8 md:mt-0 ">
          <div className="flex justify-center md:justify-end space-x-4">
            {/* Students Images */}
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/7MrpYNapW4Kb8AiwHOnkfv/83a415cd0530742f4c1c3e208cd516f1/Social_Share__72_.png"
              alt="Student 1"
              className="w-full h-full md:w-32 md:h-32 hover:group-hover:focus: rounded-full border-4 border-blue-500 focus:ring focus:ring-violet-300  cursor-pointer"
            />
            <img
              src="https://media.istockphoto.com/id/1581045672/photo/education-laptop-student-computer-teenager-studying-boy-learning-homework-study-young-school.jpg?s=612x612&w=0&k=20&c=ytSpytOADNigrtZTFZkZwYmjBeEculuHc_2MLEvpKNk="
              alt="#"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-500  hover:bg-blue-100 cursor-pointer"
            />
            <img
              src="https://t3.ftcdn.net/jpg/08/53/68/54/360_F_853685414_SsohMtLUJi7yEiAs0zQww5EMQBCkVLaP.jpg"
              alt="Student 3"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-500  hover:bg-white cursor-pointer"
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
