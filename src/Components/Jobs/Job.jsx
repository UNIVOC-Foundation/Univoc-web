import React from 'react';


const Job = () => {
  return (
    <div className="bg-blue-50 font-sans">
      {/* Header Section */}
      <section className="text-center py-10">
        <h1 className="text-2xl font-semibold text-blue-900">Are You An Employer?</h1>
        <p className="text-blue-600">Hire in 30 Mins</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          Post Free Job
        </button>
      </section>

      {/* Statistics Section */}
      <section className="flex justify-center gap-8 py-8">
        <div className="bg-white shadow-md rounded-lg text-center px-6 py-4">
          <h2 className="text-xl font-bold text-gray-700">1.5 Lakhs+</h2>
          <p className="text-gray-500">Registrations Per Month</p>
        </div>
        <div className="bg-white shadow-md rounded-lg text-center px-6 py-4">
          <h2 className="text-xl font-bold text-gray-700">50 Lakhs+</h2>
          <p className="text-gray-500">Active Job Seekers</p>
        </div>
      </section>

     

     {/* Why We Are Most Popular Section */}
<section className="bg-blue-50 py-10">
  <div className="max-w-7xl mx-auto px-6 md:px-10">
    <h2 className="text-3xl font-bold text-blue-900 text-left">
      Why We Are <span className="text-blue-500">Most Popular</span>
    </h2>
    <p className="mt-4 text-gray-600 text-left max-w-2xl">
      Trusted by top recruiters and job seekers, Univoc simplifies hiring with a seamless experience
      and unmatched opportunities.
    </p>
    <div className="flex flex-wrap gap-4 mt-6">
      <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-600 shadow-sm">
        <img
          src="https://via.placeholder.com/24"
          alt="Quality Job"
          className="mr-2 w-6 h-6"
        />
        Quality Job
      </span>
      <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-600 shadow-sm">
        <img
          src="https://via.placeholder.com/24"
          alt="100% Trusted"
          className="mr-2 w-6 h-6"
        />
        100% Trusted
      </span>
      <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-600 shadow-sm">
        <img
          src="https://via.placeholder.com/24"
          alt="International Job"
          className="mr-2 w-6 h-6"
        />
        International Job
      </span>
      <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-600 shadow-sm">
        <img
          src="https://via.placeholder.com/24"
          alt="Top Companies"
          className="mr-2 w-6 h-6"
        />
        Top Companies
      </span>
      <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-600 shadow-sm">
        <img
          src="https://via.placeholder.com/24"
          alt="No Extra Charge"
          className="mr-2 w-6 h-6"
        />
        No Extra Charge
      </span>
    </div>
    <div className="mt-8 flex justify-end">
      <div className="relative">
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-100 rounded-full -z-10"></div>
        <img
          src="https://via.placeholder.com/300"
          alt="Person with laptop"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>



     
     {/* For Interested Students Section */}
<section className="bg-blue-50 py-10">
  <div className="max-w-7xl mx-auto px-6 md:px-10 gap-8">
    <h2 className="text-3xl font-semibold text-blue-900">
      For Interested <span className="text-blue-500">Student</span>
    </h2>
    <div className="flex flex-col md:flex-row items-center justify-between mt-8">
      {/* Left Side Illustration */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1661602346960-dcb7b9b99779?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D/300*200"
          alt="Student working illustration"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Right Side Content */}
      <div className="mt-6 md:mt-0 md:w-1/2 md:pl-10">
        <h3 className="text-lg font-semibold text-gray-700">
          Get Matched The Most Valuable Jobs, Just Drop Your CV At{" "}
          <span className="text-blue-700 font-bold">UNIVOC</span>
        </h3>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>📌 1M jobs site in India</li>
          <li>📌 Seamless Searching</li>
          <li>📌 Handpicked top companies</li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          I need your CV
        </button>
      </div>
    </div>
  </div>
</section>

{/* For Interested Students Section */}
<section className="bg-blue-50 py-10">
  <div className="max-w-7xl mx-auto px-6 md:px-10">
    <h2 className="text-3xl font-semibold text-blue-900 text-center">
      For Interested <span className="text-blue-500">Students</span>
    </h2>
    <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-8">
      {/* Left Side Illustration */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1661602346960-dcb7b9b99779?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D/300*200"
          alt="Student working illustration"
          className="rounded-lg shadow-md max-w-full h-auto"
        />
      </div>

      {/* Right Side Content */}
      <div className="mt-6 md:mt-0 md:w-1/2 md:pl-10 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-gray-700 leading-relaxed">
          Get Matched To The Most Valuable Jobs! <br />
          Just Drop Your CV At{" "}
          <span className="text-blue-700 font-bold">UNIVOC</span>.
        </h3>
        <ul className="mt-4 space-y-3 text-gray-600 leading-loose">
          <li>📌 1M jobs site in India</li>
          <li>📌 Seamless Searching</li>
          <li>📌 Handpicked top companies</li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 self-start">
          I Need Your CV
        </button>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default Job;
