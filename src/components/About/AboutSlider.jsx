import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import slide1 from "../../assets/slider1.png";
import slide2 from "../../assets/slider2.png";
import slide3 from "../../assets/slider3.png";
import slide4 from "../../assets/slider4.png";

const slides = [
  {
    image: slide1,
    title: "Find Your Perfect Job",
    text: "Browse thousands of verified job listings from trusted companies, all in one place.",
  },
  {
    image: slide2,
    title: "Explore Companies",
    text: "Get to know the companies behind the jobs — their culture, industry, and open roles.",
  },
  {
    image: slide3,
    title: "Apply With Confidence",
    text: "Clear job details, requirements, and a simple application process to get you hired faster.",
  },
  {
    image: slide4,
    title: "Work From Anywhere",
    text: "From remote roles to on-site positions, JobTrack helps you find work that fits your life.",
  },
];

const AUTOPLAY_DELAY = 4000;

const AboutSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);
  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  const slide = slides[current];

 return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen h-[400px] md:h-[550px] overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl md:text-5xl font-bold text-white mb-4"
            >
              {slide.title}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-sm md:text-lg text-gray-200 max-w-xl"
            >
              {slide.text}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next arrows */}
      <button
        onClick={goPrev}
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center transition"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center transition"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
);
};

export default AboutSlider;