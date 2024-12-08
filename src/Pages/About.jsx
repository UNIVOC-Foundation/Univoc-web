import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Css/About.css";
import image from "../Components/Images/3dc47f30-3ee7-11ef-ad24-fdf8ff2fca7f.jpg";
import Footer from "../Components/Footer/Footer";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App bg-gray-100 min-h-screen">
      {/* About Univoc Section */}
      <div className="container mx-auto bg-gray-800 text-white rounded-lg shadow-lg p-8 flex items-center gap-7 h-[500px]">
        <div data-aos="fade-right" className="md:w-1/2 relative">
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">About Univoc</h3>
            <div className="line-run"></div>
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed font-bold text-lg">
            UNIVOC is dedicated to setting global standards in vocational
            education and integrating industry needs. As a fast-growing provider
            of skilling and manpower solutions in India, we focus on equipping
            individuals with the skills necessary for today’s job market.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Our team of outsourcing industry experts ensures our programs are
            both{" "}
            <span style={{ color: "red" }}>
              practical and aligned with real-world demands.
            </span>
          </p>
        </div>
        <div data-aos="fade-left" className="md:w-1/3">
          <img
            src={image}
            alt="About Univoc"
            className="rounded-lg shadow-lg w-full h-auto ml-20"
          />
        </div>
      </div>

      {/* Why Us Section */}
      <div className="container mx-auto bg-white text-gray-800 rounded-lg shadow-lg p-8 flex items-center gap-12 h-[500px] justify-center ">
        <div data-aos="fade-right" className="md:w-1/3">
          <img
            src={image}
            alt="Why Us"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div data-aos="fade-left" className="md:w-1/2 relative">
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">Why Us?</h3>
            <div className="line-run"></div>
          </div>
          <p className="text-gray-800 mb-4 leading-relaxed font-semibold  text-wrap text-lg">
            Our client-centric approach sets us apart. We take the time to
            deeply understand each client’s unique challenges and needs.
          </p>
          <p className="text-gray-800 leading-relaxed font-semibold text-wrap text-lg">
            Feel the difference with personalized solutions and dedicated
            service at <span style={{ color: "red" }}>Hanover</span> and{" "}
            <span style={{ color: "red" }}>Tyke.</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto bg-gray-800 text-white rounded-lg shadow-lg p-8 flex items-center gap-7 h-[600px]">
        <div data-aos="fade-right" className="md:w-1/2 relative">
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">OBJECTIVE</h3>
            <div className="line-run"></div>
          </div>
          <p className="text-gray-300 leading-relaxed text-wrap text-lg">
            To facilitate and create a pool of qualified jobready resources.
            <br />
            To provide flexibility to students by means of pre-defined
            single/multiple entry and multiple exit points
            <br />
            To ensure adequate knowledge and skills for making students work
            ready at each exit point of the program
            <br />
            To address the issues of unemployment and Industry requirements in
            the state through a meaningful industryacademia partnership by
            adopting Dual System of training.
            <br />
            To integrate NSQF and international specifications within the
            undergraduate level of higher education in order to enhance
            employability of the graduates in meeting global workforce
            requirements.
          </p>
        </div>
        <div data-aos="fade-left" className="md:w-1/3">
          <img
            src={image}
            alt="About Univoc"
            className="rounded-lg shadow-lg w-full h-auto ml-20"
          />
        </div>
      </div>
      <div className="container mx-auto bg-white-800 text-grey-800 rounded-lg shadow-lg p-8 flex items-center gap-7 h-[600px]">
        <div data-aos="fade-right" className="md:w-1/2 relative">
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">VISION</h3>
            <div className="line-run"></div>
          </div>
          <p className="text-gray-800 leading-relaxed text-wrap text-lg">
            Expand access to work-integrated education on a broad scale,
            developing job-ready programs that create meaningful career
            opportunities for individuals across diverse social and geographic
            backgrounds
          </p>
        </div>
        <div data-aos="fade-left" className="md:w-1/3 ml-20">
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">MISSION</h3>
            <div className="line-run"></div>
                    </div>
            <p className="text-gray-800 leading-relaxed text-wrap text-lg">
              Commit to empowering youth through skill-integrated education that
              enhances employability and nurtures entrepreneurship
            </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;