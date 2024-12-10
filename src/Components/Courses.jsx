import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LearnMore from "./LearnMore";

const Courses = () => {
  const courses = [
    {
      id: "1",
      title: "B.Voc in Optometry",
      description: "Develop skills in eye care and vision science",
      fullDescription: `Learn the essential skills needed to become an optometrist. This comprehensive course covers everything from basic eye anatomy to advanced vision correction techniques.

      What you'll learn:
      - Eye anatomy and physiology
      - Vision testing procedures
      - Optical dispensing
      - Contact lens fitting
      - Ocular disease detection
      - Patient care and management`,
      duration: "3 years",
      students: 1500,
      level: "Undergraduate",
      price: 399,
      monthlyPrice: 33.25,
      image: "/placeholder1.svg?height=600&width=800",
      instructor: "Dr. Jane Smith",
      rating: 4.8,
      totalReviews: 245,
    },
    {
      id: "2",
      title: "B.Voc in Hotel Management",
      description: "Master the art of hospitality and hotel operations",
      fullDescription: `Dive deep into the world of hospitality management and learn to run successful hotel operations.

      What you'll learn:
      - Front office operations
      - Food and beverage management
      - Housekeeping operations
      - Hotel accounting
      - Customer service excellence
      - Event planning and management`,
      duration: "3 years",
      students: 1200,
      level: "Undergraduate",
      price: 499,
      monthlyPrice: 41.58,
      image: "/placeholder2.svg?height=600&width=800",
      instructor: "Prof. John Doe",
      rating: 4.9,
      totalReviews: 189,
    },
    {
      id: "3",
      title: "B.Voc in Production Technology",
      description: "Become an expert in modern manufacturing processes",
      fullDescription: `Master both theoretical and practical aspects of production technology and manufacturing processes.

      What you'll learn:
      - Manufacturing processes
      - Quality control techniques
      - Industrial automation
      - Supply chain management
      - Lean manufacturing principles
      - CAD/CAM technologies`,
      duration: "3 years",
      students: 980,
      level: "Undergraduate",
      price: 599,
      monthlyPrice: 49.92,
      image: "/placeholder3.svg?height=600&width=800",
      instructor: "Dr. Alice Johnson",
      rating: 4.7,
      totalReviews: 156,
    },
    {
      id: "4",
      title: "B.Voc in Digital Marketing",
      description: "Master the art of online marketing and brand promotion",
      fullDescription: `Learn to create and execute effective digital marketing strategies in this comprehensive course.

      What you'll learn:
      - Social media marketing
      - Search engine optimization (SEO)
      - Content marketing
      - Email marketing
      - Pay-per-click advertising
      - Analytics and data interpretation`,
      duration: "3 years",
      students: 1350,
      level: "Undergraduate",
      price: 449,
      monthlyPrice: 37.42,
      image: "/placeholder4.svg?height=600&width=800",
      instructor: "Prof. Sarah Brown",
      rating: 4.8,
      totalReviews: 210,
    },
    {
      id: "5",
      title: "B.Voc in Culinary Arts",
      description: "Become a master chef and culinary innovator",
      fullDescription: `Develop your culinary skills and creativity in this hands-on program focused on global cuisines and innovative cooking techniques.

      What you'll learn:
      - Classical and modern cooking techniques
      - Menu planning and development
      - Food safety and sanitation
      - Nutrition and dietary considerations
      - Restaurant management
      - Food styling and presentation`,
      duration: "3 years",
      students: 890,
      level: "Undergraduate",
      price: 549,
      monthlyPrice: 45.75,
      image: "/placeholder5.svg?height=600&width=800",
      instructor: "Chef Michael Lee",
      rating: 4.9,
      totalReviews: 178,
    },
    {
      id: "6",
      title: "B.Voc in Fashion Design",
      description: "Create cutting-edge designs and shape the future of fashion",
      fullDescription: `Explore your creativity and learn the technical skills needed to succeed in the dynamic world of fashion design.

      What you'll learn:
      - Fashion illustration and technical drawing
      - Textile science and fabric manipulation
      - Pattern making and garment construction
      - Fashion history and trend forecasting
      - Computer-aided design (CAD) for fashion
      - Fashion marketing and branding`,
      duration: "3 years",
      students: 1100,
      level: "Undergraduate",
      price: 499,
      monthlyPrice: 41.58,
      image: "/placeholder6.svg?height=600&width=800",
      instructor: "Prof. Emily Chen",
      rating: 4.7,
      totalReviews: 195,
    },
    {
      id: "7",
      title: "B.Voc in Renewable Energy Technology",
      description: "Pioneer sustainable energy solutions for a greener future",
      fullDescription: `Gain expertise in various renewable energy technologies and learn to design and implement sustainable energy systems.

      What you'll learn:
      - Solar photovoltaic systems
      - Wind energy technology
      - Hydroelectric power systems
      - Biomass and biofuel production
      - Energy storage solutions
      - Smart grid technologies`,
      duration: "3 years",
      students: 750,
      level: "Undergraduate",
      price: 599,
      monthlyPrice: 49.92,
      image: "/placeholder7.svg?height=600&width=800",
      instructor: "Dr. Robert Green",
      rating: 4.8,
      totalReviews: 132,
    },
    {
      id: "8",
      title: "B.Voc in Artificial Intelligence and Machine Learning",
      description: "Shape the future with cutting-edge AI and ML technologies",
      fullDescription: `Dive into the world of artificial intelligence and machine learning, learning to develop intelligent systems and algorithms.

      What you'll learn:
      - Machine learning algorithms
      - Neural networks and deep learning
      - Natural language processing
      - Computer vision
      - Robotics and automation
      - AI ethics and governance`,
      duration: "3 years",
      students: 1400,
      level: "Undergraduate",
      price: 649,
      monthlyPrice: 54.08,
      image: "/placeholder8.svg?height=600&width=800",
      instructor: "Prof. David Lee",
      rating: 4.9,
      totalReviews: 228,
    },
    {
      id: "9",
      title: "B.Voc in Cybersecurity",
      description: "Protect digital assets and combat cyber threats",
      fullDescription: `Learn to safeguard information systems and networks from cyber attacks in this comprehensive cybersecurity program.

      What you'll learn:
      - Network security
      - Ethical hacking and penetration testing
      - Cryptography
      - Digital forensics
      - Security policies and risk management
      - Incident response and recovery`,
      duration: "3 years",
      students: 1050,
      level: "Undergraduate",
      price: 599,
      monthlyPrice: 49.92,
      image: "/placeholder9.svg?height=600&width=800",
      instructor: "Dr. Lisa Wang",
      rating: 4.8,
      totalReviews: 187,
    },
  ];

  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);

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

  const handleLearnMore = (course) => {
    setSelectedCourse(course);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
  };

  if (selectedCourse) {
    return <LearnMore course={selectedCourse} onBack={handleBackToCourses} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Skilling to Empower
            </span>
            <span className="text-white">
              {" "}
              and Shaping Futures, Building Skills
            </span>
          </h1>
        </div>

        {/* Course Cards Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentCourseIndex * 33.333}%)`,
              }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div
                    className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-xl"
                    style={{
                      background:
                        "linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)",
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
                      <h2 className="text-2xl font-bold text-gray-900">
                        {course.title}
                      </h2>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{course.duration}</span>
                      </div>
                      <div className="text-lg font-semibold">
                        Eligibility: 12th Pass/Equivalent
                      </div>
                      <button
                        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-6 rounded-xl font-medium hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
                        onClick={() => handleLearnMore(course)}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            onClick={handlePrevSlide}
            aria-label="Previous course"
          >
            <FaChevronLeft className="text-blue-600" />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            onClick={handleNextSlide}
            aria-label="Next course"
          >
            <FaChevronRight className="text-blue-600" />
          </button>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Personalization
            </span>
            <span className="text-white">. Just for them, just from you.</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Courses;

