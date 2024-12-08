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
];

const TrustedPartners = () => {
  return (
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
      </div>
    </div>
  );
};

export default TrustedPartners;
