import React from 'react';

const logos = [
  'https://th.bing.com/th?id=OIP.fU_lTenVatF88-JiD0zaAgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
  'https://th.bing.com/th/id/OIP.49TFG17ev6qlRjmca4c4OwEsEn?w=164&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  'https://s3-symbol-logo.tradingview.com/elin-electronics-ltd--600.png',
  'https://assets.upstox.com/content/dam/aem-content-integration/assets/images/logos/SUBROS/square_SUBROS_com.png',
  'https://rplrfp.nsdcindia.org/Images/MRIGS_Logo.png',
  'https://th.bing.com/th/id/OIP.49TFG17ev6qlRjmca4c4OwEsEn?w=164&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  'https://s3-symbol-logo.tradingview.com/elin-electronics-ltd--600.png',
  'https://assets.upstox.com/content/dam/aem-content-integration/assets/images/logos/SUBROS/square_SUBROS_com.png',
  'https://rplrfp.nsdcindia.org/Images/MRIGS_Logo.png'
];

const TrustedPartners = () => {
  return (
    <div className="max-w-full mx-auto min-h-screen relative w-full h-64 overflow-hidden bg-gray-100">
      <h1 className='text-sky-600 text-4xl text-center font-bold relative top-18'>TRUSTED <span className='font-thin text-gray-600 italic'>Partners</span></h1>
      {/* Zigzag Line */}
      <div className="relative top-48 h-56 overflow-hidden">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 200"
          preserveAspectRatio="none"
        >
          <path
            d="
        M0,100 
        Q50,20 100,100 
        Q150,180 200,100 
        Q250,20 300,100 
        Q350,180 400,100 
        Q450,20 500,100 
        Q550,180 600,100 
        Q650,20 700,100 
        Q750,180 800,100"
            fill="none"
            stroke="#0284C7"
            strokeWidth="5"
          />
        </svg>
      </div>
      {/* Moving Logos */}
      <div className="flex items-center  w-full animate-moveLogos ">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-40 h-40  rounded-full animate-hoverZigzag  mx-16 border-2 border-sky-600  "
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedPartners;
