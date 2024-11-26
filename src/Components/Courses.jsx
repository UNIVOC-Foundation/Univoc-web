import React, { useState } from "react";
import { FaArrowLeft, FaClock, FaUsers, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Courses = () => {
  const courses = [
    {
      id: "1",
      title: "Web Development Fundamentals",
      description: "Master the basics of web development with HTML, CSS, and JavaScript",
      fullDescription: `Learn the essential skills needed to become a web developer. This comprehensive course covers everything from basic HTML and CSS to advanced JavaScript concepts.

      What you'll learn:
      - HTML5 and semantic markup
      - CSS3 and modern layouts
      - JavaScript fundamentals
      - Responsive design principles
      - Basic web accessibility
      - Version control with Git`,
      duration: "12 weeks",
      students: 1500,
      level: "Beginner",
      price: 399,
      monthlyPrice: 33.25,
      image: "/placeholder1.svg?height=600&width=800",
      instructor: "Jane Smith",
      rating: 4.8,
      totalReviews: 245,
    },
    {
      id: "2",
      title: "Advanced React Development",
      description: "Take your React skills to the next level",
      fullDescription: `Dive deep into advanced React concepts and build complex applications with confidence.

      What you'll learn:
      - Advanced state management with Redux
      - React Hooks in-depth
      - Server-side rendering with Next.js
      - Performance optimization techniques
      - Testing React applications
      - Deploying React apps at scale`,
      duration: "10 weeks",
      students: 1200,
      level: "Intermediate",
      price: 499,
      monthlyPrice: 41.58,
      image: "/placeholder2.svg?height=600&width=800",
      instructor: "John Doe",
      rating: 4.9,
      totalReviews: 189,
    },
    {
      id: "3",
      title: "Full-Stack JavaScript",
      description: "Become a full-stack developer with JavaScript",
      fullDescription: `Master both front-end and back-end development using JavaScript technologies.

      What you'll learn:
      - Node.js and Express.js
      - MongoDB and Mongoose
      - RESTful API design
      - Authentication and authorization
      - Real-time applications with Socket.io
      - Deployment and DevOps basics`,
      duration: "16 weeks",
      students: 980,
      level: "Advanced",
      price: 599,
      monthlyPrice: 49.92,
      image: "/placeholder3.svg?height=600&width=800",
      instructor: "Alice Johnson",
      rating: 4.7,
      totalReviews: 156,
    },
  ];

  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentCourseIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentCourseIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCourse = courses[currentCourseIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              The latest
            </span>
            <span className="text-gray-700">. Let them unwrap wonders.</span>
          </h1>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 ${
                index === currentCourseIndex ? 'ring-2 ring-blue-500 shadow-xl' : 'shadow-lg'
              }`}
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
              }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mb-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaClock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="text-lg font-semibold">
                  From ${course.price} or ${course.monthlyPrice}/mo. for 12 mo.*
                </div>
                <button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setCurrentCourseIndex(index)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            onClick={handlePrevSlide}
            aria-label="Previous course"
          >
            
          </button>
          <button
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            onClick={handleNextSlide}
            aria-label="Next course"
          >
            
          </button>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Personalization
            </span>
            <span className="text-gray-700">. Just for them, just from you.</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Courses;

