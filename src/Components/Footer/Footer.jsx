// Footer.jsx
import React from 'react';
import {  FaInstagram, FaLinkedin,  FaTwitter, FaYoutube } from 'react-icons/fa6';
import {Mail } from 'lucide-react'; 
import { VscLocation } from "react-icons/vsc";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="flex max-w-7xl mx-auto">
        <div className=" max-w-[20%]  mb-4 mx-4">
          <h3 className='font-bold text-2xl'>UNIVOC</h3>
          <p className='text-gray-400 text-xs'>Skilling to empower</p>
        </div>
        <div className="text-gray-400 text-xs max-w-[80%] mx-4">
          <h2>"Empowering individuals with the skills to thrive in a changing world.</h2>
          <h2>UNIVC skilling to empower bridges talent and
            opportunity, driving innovation and growth for a brighter future."</h2>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>

            <h3 className="text-lg font-semibold mt-4">Careers</h3>
            <div className='text-gray-600 cursor-pointer'>
              <div className='flex items-center gap-2'>
                <VscLocation className='text-2xl'/>
                <div className="mt-2 ">Address</div>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='text-xs'/>
                <div className="mt-2 ">hrd@theunivoc.com</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Academics</h3>
            <ul>
              <li className="mt-2 text-gray-600 cursor-pointer">Programme</li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Innovation</h3>
            <ul>
              <li className="mt-2 text-gray-600 cursor-pointer">Student</li>
              <li className="mt-2 text-gray-600 cursor-pointer">Faculty</li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Other Links</h3>
            <ul>
              <li className="mt-2 text-gray-600 cursor-pointer">Jobs</li>
              <li className="mt-2 text-gray-600 cursor-pointer">Become A Teacher</li>
              <li className="mt-2 text-gray-600 cursor-pointer">Events</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-start mt-8 space-x-4 text-4xl">
          <a href="#" className="mx-2">
            <FaTwitter />
          </a>
          <a href="#" className="mx-2">
            <FaInstagram />
          </a>
          <a href="#" className="mx-2">
            <FaLinkedin />
          </a>
          <a href="#" className="mx-2">
            <FaYoutube />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
