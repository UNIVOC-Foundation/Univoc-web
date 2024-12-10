import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroSection from '../Components/Hero/HeroSection'
import TrustedPartners from '../Components/Home/TrustedPartners'
import Testimonial from '../Components/Home/Testimonial'
// import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (<>
    <div className="app-container">
        <HeroSection/>
      </div>
      <Testimonial/>
      <TrustedPartners/>
      {/* <Footer/> */}
     
  </>
  )
}

export default Home;