import React from 'react';
const logos = [
 '/logos/logo1.png', // Local logo 1
  '/logos/logo2.png', // Local logo 2
  '/logos/logo3.png', // Local logo 3
  '/logos/logo4.png', // Local logo 4
  '/logos/logo5.png', // Local logo 5
  '/logos/logo6.png', // Local logo 6
  '/logos/logo7.png', // Local logo 7
  '/logos/logo8.png', // Local logo 8
  '/logos/logo9.png', // Local logo 6
  '/logos/logo10.png', // Local logo 7
  '/logos/logo11.png', // Local logo 8
  '/logos/logo12.png', // Local logo 8
];

const TrustedPartners = () => {
  return (
    <div
      className="max-w-full mx-auto min-h-screen relative w-full h-60 overflow-hidden bg-gray-100 "
      style={{
        
        backgroundImage: `url('/public/logos/baground.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-blue-100 bg-opacity-30 z-0"></div>

      {/* Moving Logos */}
      <div className="flex items-center w-full animate-moveLogos mt-20 py-36 z-10 cursor-pointer">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-44 h-44 rounded-full animate-fadeIn mx-8 border-2 border-sky-600 z-10 hover:bg-white transition-transform transform hover:scale-105"
          />
        ))}
      </div>

       
    </div>
  );
};

export default TrustedPartners;