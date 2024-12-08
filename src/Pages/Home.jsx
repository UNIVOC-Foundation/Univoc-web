import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroSection from '../Components/Hero/HeroSection'
import TrustedPartners from '../Components/Home/TrustedPartners'
import Testimonial from '../Components/Home/Testimonial'


const Home = () => {
  return (<>
    <div className="app-container">
        <HeroSection/>
      </div>
      <Testimonial/>
      <TrustedPartners/>
     
  </>
  )
}

export default Home;