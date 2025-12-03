import React, { useEffect } from 'react';
import Bannar from '../components/Header/Bannar';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Companies from '../components/Companies/Companies';
import Testimonials from '../components/Testimonials/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';







const Home = () => {

    useEffect(() => {
        document.title = "Home | JobTrack";
    }, []);





    useEffect(() => {
        const shouldScroll = localStorage.getItem("fromCompanyPage");

        if (shouldScroll === "true") {
            const section = document.getElementById("featured-companies");

            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }

          
            localStorage.removeItem("fromCompanyPage");
        }
    }, []);

    return (
        <div className='   '>
            <section className=' '>

               

                <Bannar />
                <HowItWorks />

               
                <div id="featured-companies" className="mt-10 ">
                    <h2 className="text-4xl text-center font-bold mb-10">Featured Companies</h2>
                    <Companies />
                </div>

                <section className='mt-10 pb-12 hidden md:block'>
                    <Testimonials />
                </section>

                <WhyChooseUs />
            </section>
        </div>
    );
};

export default Home;

