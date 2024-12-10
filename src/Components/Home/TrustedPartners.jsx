<<<<<<< HEAD
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
=======
import React from "react";
import { motion } from "framer-motion";

const logos = [
  { id: 1, src: "https://i.pinimg.com/originals/20/3d/8e/203d8e6de718b5a5f34295533e6f808b.png", alt: "Adani" },
  { id: 2, src: "https://media.licdn.com/dms/image/v2/C4E0BAQHvBxRWTG8LHw/company-logo_200_200/company-logo_200_200/0/1630614472121?e=2147483647&v=beta&t=Qtn5Y3DFTvUplZm_mYW4wIK1p3T5eyYZiGJpPlgTam0", alt: "Elin" },
  { id: 3, src: "https://cdn.siasat.com/wp-content/uploads/2022/01/boAt.jpg", alt: "Dixon" },
  { id: 4, src: "https://www.equitybulls.com/equitybullsadmin/uploads/Subros%20Limited%203.jpg", alt: "Subros" },
  { id: 5, src: "https://swarajya.gumlet.io/swarajya/2020-09/4ade7640-dae8-4a20-bb03-5a4d13babaa6/10x1210ibn534moto.jpg?w=610&q=50&compress=true&format=auto", alt: "NSDC" },
  { id: 11, src: "https://i.pinimg.com/originals/20/3d/8e/203d8e6de718b5a5f34295533e6f808b.png", alt: "Adani" },
  { id: 12, src: "https://media.licdn.com/dms/image/v2/C4E0BAQHvBxRWTG8LHw/company-logo_200_200/company-logo_200_200/0/1630614472121?e=2147483647&v=beta&t=Qtn5Y3DFTvUplZm_mYW4wIK1p3T5eyYZiGJpPlgTam0", alt: "Elin" },
  
  { id: 6 , src: "https://play-lh.googleusercontent.com/N4rkYSD8mo3vlpgVFBbmpeMAXbHSxdWxzo1aZ9eb3xcK3YIXV-gWfH0RlkdkWCyjUQ", alt: "Partner 6" },
>>>>>>> ed4e689 (add pages)
];

const TrustedPartners = () => {
  return (
<<<<<<< HEAD
    <div
      className="max-w-full mx-auto min-h-screen relative w-full h-64 overflow-hidden bg-gray-100"
      style={{
        
        backgroundImage: `url('/public/logos/baground.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
     

      {/* Moving Logos */}
      <div className="flex items-center w-full animate-moveLogos mt-20 py-36">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-44 h-44 rounded-full animate-fadeIn mx-8 border-2 border-sky-600"
          />
        ))}
=======
    <div className="bg-white py-10 ">
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-8">
        Trusted <span className="text-black">Partners</span>
      </h2>
      <div className="relative overflow-show">
        {/* Animation Wrapper */}
        <motion.div
          className="flex space-x-8 animate-slide"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full border-2 border-blue-600 p-2 hover:scale-110 transition-all"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
>>>>>>> ed4e689 (add pages)
      </div>
    </div>
  );
};

export default TrustedPartners;
