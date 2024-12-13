// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import LearnMore from "./LearnMore";

// const Courses = () => {
//   const courses = [
//     {
//       id: "1",
//       title: "B.Voc in Optometry",
//       description: "Develop skills in eye care and vision science",
//       fullDescription: `Learn the essential skills needed to become an optometrist. This comprehensive course covers everything from basic eye anatomy to advanced vision correction techniques.

//       What you'll learn:
//       - Eye anatomy and physiology
//       - Vision testing procedures
//       - Optical dispensing
//       - Contact lens fitting
//       - Ocular disease detection
//       - Patient care and management`,
//       duration: "3 years",
//       students: 1500,
//       level: "Undergraduate",
//       price: 399,
//       monthlyPrice: 33.25,
//       image: "/placeholder1.svg?height=600&width=800",
//       instructor: "Dr. Jane Smith",
//       rating: 4.8,
//       totalReviews: 245,
//     },
//     {
//       id: "2",
//       title: "B.Voc in Hotel Management",
//       description: "Master the art of hospitality and hotel operations",
//       fullDescription: `Dive deep into the world of hospitality management and learn to run successful hotel operations.

//       What you'll learn:
//       - Front office operations
//       - Food and beverage management
//       - Housekeeping operations
//       - Hotel accounting
//       - Customer service excellence
//       - Event planning and management`,
//       duration: "3 years",
//       students: 1200,
//       level: "Undergraduate",
//       price: 499,
//       monthlyPrice: 41.58,
//       image: "/placeholder2.svg?height=600&width=800",
//       instructor: "Prof. John Doe",
//       rating: 4.9,
//       totalReviews: 189,
//     },
//     {
//       id: "3",
//       title: "B.Voc in Production Technology",
//       description: "Become an expert in modern manufacturing processes",
//       fullDescription: `Master both theoretical and practical aspects of production technology and manufacturing processes.

//       What you'll learn:
//       - Manufacturing processes
//       - Quality control techniques
//       - Industrial automation
//       - Supply chain management
//       - Lean manufacturing principles
//       - CAD/CAM technologies`,
//       duration: "3 years",
//       students: 980,
//       level: "Undergraduate",
//       price: 599,
//       monthlyPrice: 49.92,
//       image: "/placeholder3.svg?height=600&width=800",
//       instructor: "Dr. Alice Johnson",
//       rating: 4.7,
//       totalReviews: 156,
//     },
//   ];

//   const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const handlePrevSlide = () => {
//     setCurrentCourseIndex((prevIndex) =>
//       prevIndex === 0 ? courses.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextSlide = () => {
//     setCurrentCourseIndex((prevIndex) =>
//       prevIndex === courses.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handleLearnMore = (course) => {
//     setSelectedCourse(course);
//   };

//   const handleBackToCourses = () => {
//     setSelectedCourse(null);
//   };

//   if (selectedCourse) {
//     return <LearnMore course={selectedCourse} onBack={handleBackToCourses} />;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
//               Skilling to Empower
//             </span>
//             <span className="text-gray-700">
//               {" "}
//               and Shaping Futures, Building Skills
//             </span>
//           </h1>
//         </div>

//         {/* Course Cards */}
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           {courses.map((course, index) => (
//             <div
//               key={course.id}
//               className={`relative bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 ${
//                 index === currentCourseIndex
//                   ? "ring-2 ring-blue-500 shadow-xl"
//                   : "shadow-lg"
//               }`}
//               style={{
//                 background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)",
//               }}
//             >
//               <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mb-6">
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="space-y-4">
//                 <h2 className="text-2xl font-bold text-gray-900">
//                   {course.title}
//                 </h2>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <span>{course.duration}</span>
//                 </div>
//                 <div className="text-lg font-semibold">
//                   Eligibility: 12th Pass/Equivalent
//                 </div>
//                 <button
//                   className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
//                   onClick={() => handleLearnMore(course)}
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-center gap-4 mt-8">
//           <button
//             className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
//             onClick={handlePrevSlide}
//             aria-label="Previous course"
//           >
//             <FaChevronLeft />
//           </button>
//           <button
//             className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
//             onClick={handleNextSlide}
//             aria-label="Next course"
//           >
//             <FaChevronRight />
//           </button>
//         </div>

//         {/* Footer Text */}
//         <div className="text-center mt-16">
//           <h2 className="text-4xl font-bold">
//             <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
//               Personalization
//             </span>
//             <span className="text-gray-700">
//               . Just for them, just from you.
//             </span>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;

import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { AiFillYoutube } from "react-icons/ai";

const Courses = () => {
  return (
    <div className="bg-blue-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Learning <span className="text-blue-600">Paths</span>
          </h1>
          <p className="mt-2 text-gray-600 text-lg italic">Reach new horizons in learning</p>
        </div>

        {/* Search Bar */}
        <div className="mt-6 flex justify-center">
          <div className="flex w-full max-w-md items-center bg-white shadow-md rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search for over 50+ courses"
              className="flex-grow py-3 px-4 text-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-r-4">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <div className="relative grid grid-cols-2 gap-4 p-4 rounded bg-blue-100 border-2 border-dashed border-blue-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1664474801059-6111b2a4e854?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Engineer"
                className="rounded-lg"
              />
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
                alt="Doctor"
                className="rounded-lg"
              />
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
                alt="Student"
                className="rounded-lg"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1664474801059-6111b2a4e854?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Chef"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 italic">
              Benefits From Our Online Learning
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full p-3">
                  <CiPlay1 />
                  <svg
                   // xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7V3m-4 4V3m-4 4V3m8 18v-2m-4 2v-2m-4 2v-2M3 16h2m16 0h2M3 12h2m16 0h2M3 8h2m16 0h2M3 4h2m16 0h2M8 21h8"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Online Degrees
                  </h3>
                  <p className="text-gray-600">
                    Earn accredited degrees from the comfort of your home, opening
                    doors to a world of possibilities.
                  </p>
                </div>
              </li>

              {/* <li className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full p-3">
                  <CiPlay1 />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c2.28 0 4.5-.5 4.5-2.5S14.28 3 12 3 7.5 4 7.5 5.5 9.72 8 12 8z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Short Courses
                  </h3>
                  <p className="text-gray-600">
                    Enhance your skills with concise and focused short courses,
                    designed for quick and effective learning.
                  </p>
                </div>
              </li> */}
              <li className="flex items-start">
  <div className="bg-blue-600 text-white rounded-full p-3 flex justify-center items-center">
    {/* YouTube Icon */}
    <AiFillYoutube className="h-6 w-6" />
  </div>
  <div className="ml-4">
    <h3 className="text-lg font-semibold text-gray-800">Short Courses</h3>
    <p className="text-gray-600">
      Enhance your skills with concise and focused short courses, designed for
      quick and effective learning.
    </p>
  </div>
</li>


<li className="flex items-start">
<div className="bg-blue-600 text-white rounded-full p-3 flex justify-center items-center">
<AiFillYoutube className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Training From Experts
                  </h3>
                  <p className="text-gray-600">
                    Immerse yourself in knowledge with industry experts guiding
                    you through hands-on experience.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 9.75L12 12m0 0l2.25 2.25M12 12l-2.25 2.25m0-4.5L12 9.75m0 0L14.25 12M12 12l2.25-2.25"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    1.5k+ Video Courses
                  </h3>
                  <p className="text-gray-600">
                    Dive into a vast library of over 1.5k video courses covering
                    many subjects, offering a visual learning experience.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
