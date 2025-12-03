
import React from "react";
import bgImage from "../../assets/Testimonial-Background.png";

const Testimonials = () => {
  return (
    <section className="w-full ">
      
     
      <h2 className="text-4xl font-bold text-center text-slate-900 mb-10">
        Success Stories
      </h2>

      
      <div
        className="relative w-full bg-cover bg-center py-30"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
      
        <div className="absolute inset-0 bg-base-200/50"></div>

      
        <div className="relative max-w-6xl mx-auto h-[420px]">

        
          <div className="group absolute top-5 left-10 z-20">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              className="w-20 h-20 rounded-full border-4 border-white shadow-xl cursor-pointer"
            />
            <div className="chat chat-start  opacity-0 group-hover:opacity-100 transition duration-300 absolute -top-2 left-24 w-64 z-30">
              <div className="chat-bubble bg-gray-300 text-slate-800 shadow-2xl">
                <p>"JobTrack helped me land a Frontend Developer job within 2 weeks!"</p>
                <p className="font-bold mt-2">Anika Rahman</p>
                <p className="text-sm text-gray-600">Frontend Developer</p>
              </div>
            </div>
          </div>

         
          <div className="group absolute bottom-10 left-1/4 z-20">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-20 h-20 rounded-full border-4 border-white shadow-xl cursor-pointer"
            />
            <div className="chat chat-end opacity-0 group-hover:opacity-100 transition duration-300 absolute top-0 -left-72 w-64 z-30">
              <div className="chat-bubble bg-gray-300 text-slate-800 shadow-2xl">
                <p>"Great platform! The job details modal is so helpful."</p>
                <p className="font-bold mt-2">Mahdi Hasan</p>
                <p className="text-sm text-gray-600">UI/UX Designer</p>
              </div>
            </div>
          </div>

          <div className="group absolute top-32 right-30 z-20">
            <img
              src="https://randomuser.me/api/portraits/women/50.jpg"
              className="w-20 h-20 rounded-full border-4 border-white shadow-xl cursor-pointer"
            />
            <div className="chat chat-start opacity-0 group-hover:opacity-100 transition duration-300 absolute -top-2 left-24 w-64 z-30">
              <div className="chat-bubble bg-gray-300 text-slate-800 shadow-2xl">
                <p>"I applied directly through JobTrack — very easy workflow!"</p>
                <p className="font-bold mt-2">Sara Islam</p>
                <p className="text-sm text-gray-600">Software Engineer</p>
              </div>
            </div>
          </div>

        
          <div className="group absolute bottom-5 right-1/3 z-20">
            <img
              src="https://randomuser.me/api/portraits/men/12.jpg"
              className="w-20 h-20 rounded-full border-4 border-white shadow-xl cursor-pointer"
            />
            <div className="chat chat-start opacity-0 group-hover:opacity-100 transition duration-300 absolute top-0 left-24 w-64 z-30">
              <div className="chat-bubble bg-gray-300 text-slate-800 shadow-2xl">
                <p>"JobTrack made job searching faster and more organized."</p>
                <p className="font-bold mt-2">Rezaul Karim</p>
                <p className="text-sm text-gray-600">Backend Developer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;


