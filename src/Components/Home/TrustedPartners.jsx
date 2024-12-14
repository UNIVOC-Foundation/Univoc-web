import React from 'react';
const logos = [
  // 'https://th.bing.com/th?id=OIP.fU_lTenVatF88-JiD0zaAgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
  // 'https://th.bing.com/th/id/OIP.49TFG17ev6qlRjmca4c4OwEsEn?w=164&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  // 'https://s3-symbol-logo.tradingview.com/elin-electronics-ltd--600.png',
  // 'https://assets.upstox.com/content/dam/aem-content-integration/assets/images/logos/SUBROS/square_SUBROS_com.png',
  
  // 'https://th.bing.com/th?id=OIP.fU_lTenVatF88-JiD0zaAgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
  
  // 'https://th.bing.com/th/id/OIP.49TFG17ev6qlRjmca4c4OwEsEn?w=164&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  // 'https://s3-symbol-logo.tradingview.com/elin-electronics-ltd--600.png',
  // 'https://assets.upstox.com/content/dam/aem-content-integration/assets/images/logos/SUBROS/square_SUBROS_com.png',
  // 'https://th.bing.com/th?id=OIP.fU_lTenVatF88-JiD0zaAgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'

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