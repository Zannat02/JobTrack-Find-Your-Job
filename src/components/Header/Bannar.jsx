import React from 'react';
import BannarImage from '../../assets/Bannar-img.jpg'
import { IoIosSearch } from 'react-icons/io';

const Bannar = () => {
    return (

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 py-16 px-5">

          
            <div className="md:w-1/2 w-full text-center md:text-left pt-10">

                <p className='text-sky-950 text-4xl md:text-5xl font-bold'>
                    Find Your Favourite <br />
                    <span className='text-red-400 text-2xl md:text-3xl'>Job Immediete</span>
                </p>

                <p className='pt-5 text-gray-700'>
                    Stop jumping between websites to find your next job.
                    JobTrack collects the latest opportunities from multiple companies and brings them to your fingertips.
                    Search, explore, and apply—quickly and easily.
                </p>

              
                <div className="join pt-5 w-full flex justify-center md:justify-start">
                    <div >
                        <label className="input validator join-item flex items-center gap-2">
                            <IoIosSearch size={25} className='text-gray-400' />
                            <input
                                type="text"
                                placeholder="Search, explore, and apply"
                                className="outline-none"
                            />
                        </label>
                    </div>

                    <button className="btn bg-sky-950 hover:bg-red-400 text-white join-item">
                        Search
                    </button>
                </div>

            </div>

         
            <div className="md:w-1/2 w-full flex justify-center">
                <img className="w-full md:w-[700px]" src={BannarImage} alt="Banner" />
            </div>

        </div>

    );
};

export default Bannar;