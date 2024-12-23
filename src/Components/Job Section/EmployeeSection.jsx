import React from 'react';
import { FaUserTie, FaUsers, FaGlobeAmericas, FaCheckCircle, FaStar, FaDollarSign } from 'react-icons/fa';

export default function EmployerSection() {
  return (
    <div className="min-h-screen bg-[linear-gradient(148.05deg,#C6D5F6_0%,#EAF0FF_48.94%,#DEE8FF_97.87%)] px-4 py-12 font-sans">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#333333] mb-2">
            Are You An Employer?
          </h1>
          <p className="text-[#666666] text-lg mb-6">
            Hire in 30 Mins
          </p>
          <button className="bg-[#0088FF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0077ee] transition-colors">
            Post Free Job
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-3xl font-bold text-[#333333] mb-2">1.5 Lakhs+</div>
            <div className="text-[#666666]">Registration Per month</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-3xl font-bold text-[#333333] mb-2">50 Lakhs+</div>
            <div className="text-[#666666]">Active Job Seekers</div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Why We Are <span className="text-[#0088FF]">Most Popular</span>
            </h2>
            <p className="text-[#666666] text-lg leading-relaxed">
              Trusted by top recruiters and job seekers, Univoc simplifies hiring with a seamless experience and unmatched opportunities
            </p>
          </div>

          {/* Right Content with Image and Floating Elements */}
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Professional with laptop"
              className="w-full rounded-2xl"
            />
            
            {/* Floating Elements */}
            <div className="absolute top-0 right-0 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center gap-2">
              <FaStar className="text-[#0088FF]" />
              <span>Quality Job</span>
            </div>

            <div className="absolute top-1/4 left-0 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center gap-2">
              <FaCheckCircle className="text-[#0088FF]" />
              <span>100% Trusted</span>
            </div>

            <div className="absolute bottom-1/4 left-0 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center gap-2">
              <FaGlobeAmericas className="text-[#0088FF]" />
              <span>International Job</span>
            </div>

            <div className="absolute top-1/3 right-0 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center gap-2">
              <FaUserTie className="text-[#0088FF]" />
              <span>Top Companies</span>
            </div>

            <div className="absolute bottom-1/3 right-0 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center gap-2">
              <FaDollarSign className="text-[#0088FF]" />
              <span>No Extra Charge</span>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#0088FF] opacity-20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#0088FF] opacity-20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}