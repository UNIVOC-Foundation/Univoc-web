import React from "react";
import student from "../../assets/Student.png"
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
        <div className="relative flex-1 ">
          <div className="flex justify-center md:justify-end pointer-cursor w-full md:w-full">
            {/* Students Images */}

            <img
              src={student}
              alt="Student 1"
              className="w-100 h-50  hover:bg-blue-600"
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


// import React from "react";
// import student from "../../assets/Student.png";

// const Testimonial = () => {
//   return (
//     <div className="relative bg-gradient-to-r from-black to-blue-900 text-white p-6 md:p-12">
//       <div className="container mx-auto flex flex-col md:flex-row items-center relative">
//         {/* Left Section */}
//         <div className="flex-1 z-10 text-center md:text-left">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4">
//             Achieving better than many premier institute students.
//           </h1>
//           <p className="text-lg md:text-xl mb-6">
//             <span className="font-bold text-blue-500">Guarantee Placement</span>{" "}
//             of all students from first year onwards.
//           </p>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow-lg active:bg-fuchsia-500">
//             <a href="#">Apply Now</a>
//           </button>
//         </div>

//         {/* Right Section */}
//         <div className="relative flex-1">
//           {/* Background Image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center rounded-lg"
//             style={{
//               backgroundImage: `url(${student})`,
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

