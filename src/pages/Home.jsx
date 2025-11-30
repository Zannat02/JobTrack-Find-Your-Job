import React from 'react';
import Bannar from '../components/Header/Bannar';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Companies from '../components/Companies/Companies';

const Home = () => {
    return (
        <div className='bg-base-200'>
            <section className='w-11/12 mx-auto '>
                <Bannar></Bannar>
                <HowItWorks></HowItWorks>
                <div className="mt-10">
                    <h2 className="text-2xl text-center font-semibold mb-10">Featured Companies</h2>
                    <Companies />
                </div>
            </section>
        </div>
    );
};

export default Home;