import React from "react";

import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
import AboutImg from '../assets/About-image.jpg'

const About = () => {
  return (
    <>
     

    

      <section className="max-w-6xl mx-auto py-16 px-4 flex flex-col lg:flex-row items-center gap-10">
       
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-5">About JobTrack</h1>
          <p className="text-gray-700 mb-4">
            JobTrack is a platform that connects job seekers with the latest opportunities across companies.
            Explore jobs by category, check company details, and apply easily.
          </p>
          <p className="text-gray-700">
            Our mission is to simplify job hunting and make career development accessible for everyone.
          </p>
        </div>

        
        <div className="lg:w-1/2">
          <img src={AboutImg} alt="About us" className="w-full rounded-lg shadow-lg" />
        </div>
      </section>

     
    </>
  );
};

export default About;
