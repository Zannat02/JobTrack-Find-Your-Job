import React from "react";
import AboutSlider from "../components/About/AboutSlider";
import StatsSection from "../components/About/StatsSection";
import AboutImg from '../assets/About-image.jpg'

const About = () => {
  return (
    <>
      <section>
        <AboutSlider />
      </section>

      <section className="relative py-16">
        {/* Full-width decorative background layer */}
        <div className="absolute inset-y-0 left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden z-0">
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-red-50"></div>

          {/* Decorative blobs */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-sky-950/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl"></div>
        </div>

        {/* Content — constrained to max-w-7xl */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-5 text-sky-950">About JobTrack</h1>
            <p className="text-gray-700 mb-4">
              JobTrack is a platform that connects job seekers with the latest opportunities across companies.
              Explore jobs by category, check company details, and apply easily.
            </p>
            <p className="text-gray-700">
              Our mission is to simplify job hunting and make career development accessible for everyone.
            </p>
          </div>

          <div className="lg:w-1/2">
            <img
              src={AboutImg}
              alt="About us"
              className="w-full rounded-lg shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      <StatsSection />
    </>
  );
};

export default About;