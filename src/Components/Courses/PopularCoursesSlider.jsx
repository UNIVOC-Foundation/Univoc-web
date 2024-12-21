import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const courses = [
  {
    id: 1,
    title: "Hotel Management: Distribution, Revenue and Demand Management Specialization",
    category: "Hotel Management",
    description:
      "Skills You'll Gain: Business Analysis, Leadership, Market Analysis, Marketing Strategy.",
    image: "https://media.istockphoto.com/id/1494544311/photo/chef-teaching-students-to-cook-in-the-kitchen-at-a-cooking-school.jpg?s=612x612&w=0&k=20&c=ZOKCI7zybZ2Q5qMhm4hn1dr1VGnWqM2zaejJCV1lezA=", // Replace with course 1 image
  },
  {
    id: 2,
    title: "Hotel Management: Distribution, Revenue and Demand Management Specialization",
    category: "Hotel Management",
    description:
      "Skills You'll Gain: Business Analysis, Leadership, Market Analysis, Marketing Strategy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdvESU1dghCfTr2vPBLxudX-UhHT1vW4htQ&s", // Replace with course 1 image
  },
  {
    id: 3,
    title: "Hotel Management: Distribution, Revenue and Demand Management Specialization",
    category: "Hotel Management",
    description:
      "Skills You'll Gain: Business Analysis, Leadership, Market Analysis, Marketing Strategy.",
    image: "https://kiahm.in/wp-content/uploads/2022/04/Chef.jpg", // Replace with course 1 image
  },
  {
    id: 4,
    title: "Hotel Management: Distribution, Revenue and Demand Management Specialization",
    category: "Hotel Management",
    description:
      "Skills You'll Gain: Business Analysis, Leadership, Market Analysis, Marketing Strategy.",
    image: "https://media.istockphoto.com/id/1494544311/photo/chef-teaching-students-to-cook-in-the-kitchen-at-a-cooking-school.jpg?s=612x612&w=0&k=20&c=ZOKCI7zybZ2Q5qMhm4hn1dr1VGnWqM2zaejJCV1lezA=", // Replace with course 1 image
  },
  {
    id: 5,
    title: "Hotel Management: Distribution, Revenue and Demand Management Specialization",
    category: "Hotel Management",
    description:
      "Skills You'll Gain: Business Analysis, Leadership, Market Analysis, Marketing Strategy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdvESU1dghCfTr2vPBLxudX-UhHT1vW4htQ&s", // Replace with course 1 image
  },
  {
    id: 6,
    title: "Data science: Distribution, Revenue and Demand Management Specialization",
    category: "Data science",
    description:
      "Skills You'll Gain: Business Analytics, Market Analysis, Data Science.",
    image: "https://media.istockphoto.com/id/1494544311/photo/chef-teaching-students-to-cook-in-the-kitchen-at-a-cooking-school.jpg?s=612x612&w=0&k=20&c=ZOKCI7zybZ2Q5qMhm4hn1dr1VGnWqM2zaejJCV1lezA=", // Replace with course 2 image
  },
  {
    id: 7,
    title: "Hotel Management: Distribution, Revenue and Demand Management Specialization",
    category: "Hotel Management",
    description:
      "Skills You'll Gain: Business Analysis, Leadership, Market Analysis, Marketing Strategy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdvESU1dghCfTr2vPBLxudX-UhHT1vW4htQ&s", // Replace with course 1 image
  },
  {
    id: 8,
    title: "Hotel Management: Distribution, Revenue and Demand Management Specialization",
    category: "Hotel Management",
    description:
      "Skills You'll Gain: Business Analysis, Leadership, Market Analysis, Marketing Strategy.",
    image: "https://media.istockphoto.com/id/1494544311/photo/chef-teaching-students-to-cook-in-the-kitchen-at-a-cooking-school.jpg?s=612x612&w=0&k=20&c=ZOKCI7zybZ2Q5qMhm4hn1dr1VGnWqM2zaejJCV1lezA=", // Replace with course 1 image
  },
  {
    id: 9,
    title: "Hotel Management: Distribution, Revenue and Demand Management Specialization",
    category: "Hotel Management",
    description:
      "Skills You'll Gain: Business Analysis, Leadership, Market Analysis, Marketing Strategy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdvESU1dghCfTr2vPBLxudX-UhHT1vW4htQ&s", // Replace with course 1 image
  },
  {
    id: 10,
    title: "Hotel Management: Distribution, Revenue and Demand Management Specialization",
    category: "Hotel Management",
    description:
      "Skills You'll Gain: Business Analysis, Leadership, Market Analysis, Marketing Strategy.",
    image: "https://media.istockphoto.com/id/1494544311/photo/chef-teaching-students-to-cook-in-the-kitchen-at-a-cooking-school.jpg?s=612x612&w=0&k=20&c=ZOKCI7zybZ2Q5qMhm4hn1dr1VGnWqM2zaejJCV1lezA=", // Replace with course 1 image
  },
  {
    id: 11,
    title: "Hotel Management: Distribution, Revenue and Demand Management Specialization",
    category: "Hotel Management",
    description:
      "Skills You'll Gain: Business Analysis, Leadership, Market Analysis, Marketing Strategy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdvESU1dghCfTr2vPBLxudX-UhHT1vW4htQ&s", // Replace with course 1 image
  },
];

const PopularCoursesSlider = () => {
  return (
    <section className="bg-gradient-to-r from-blue-200 to-blue-500 p-8">
      <div className="text-center mb-6">
        <h2 className="text-5xl font-bold text-white">
          Our <span className="text-blue-900">most</span> Popular Courses
        </h2>
        <p className="text-white mt-2">Learn Best Things</p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1.5}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        className="pb-8"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-blue-600 font-semibold">
                  {course.category} :
                </h3>
                <h2 className="text-gray-800 font-bold text-lg">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {course.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Apply Now
                  </button>
                  <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-50 transition">
                    Explore Courses
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularCoursesSlider;
