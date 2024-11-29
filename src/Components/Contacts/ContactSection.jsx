import React from 'react';
import ContactForm from './ContactForm';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const ContactSection = () => {
  return (
    <section className="bg-teal-50 p-8 md:p-12 lg:p-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Have more questions?
          </h2>
          <p className="mt-2 text-gray-600">
            Reach out to us. Our Support team is ready to assist you.
          </p>
          <br />
          {/* <div className="mt-4 space-y-2">
            <p className="text-gray-600 flex items-center">
              <span className="material-icons mr-2">email</span> support@pw.io
            </p>
            <p className="text-gray-600 flex items-center">
              <span className="material-icons mr-2">phone</span> +91 7428096971
            </p>
          </div> */}
            <div className="space-y-4">
           {/* Address */}
           <div className="flex items-center space-x-4">
             <span className="text-purple-500">
             <FaLocationDot />
             </span>
             <a href="#">Address: Sector 135,Noida Uttar Pradesh</a>
           </div>
           {/* Phone */}
           <div className="flex items-center space-x-4">
             <span className="text-purple-500">
             <FaPhone />
             </span>
             <a href="#">Phone: +91 7428096971</a>
           </div>
           {/* Email */}
           <div className="flex items-center space-x-4">
             <span className="text-purple-500">
             <MdEmail /> 
             </span>
             <a href="#">Email: support@pwioi.com</a>
           
           </div>
           {/* Website */}
           <div className="flex items-center space-x-4">
             <span className="text-purple-500">
             <TbWorldWww />
             
             </span>
             <a href="#">Website: univoc.com</a>
           
           </div>
         </div>
         <div className="mt-8">
           <h3 className="text-xl font-semibold mb-4">Our Location</h3>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7012.690053981605!2d77.39557513873372!3d28.499265331737494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8609722a14b%3A0x31318b8199ad8290!2sSector%20135%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1732879818304!5m2!1sen!2si" 
             width="100%"
             height="300"
             style={{ border: "0" }}
             allowFullScreen=""
             loading="lazy"
           ></iframe>
         </div>

          <p className="mt-4 text-sm text-gray-500">
            *PW IOI is neither a college nor provides a degree. It's a residential, job-ready program.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
