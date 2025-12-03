import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/Header/NavBar';
import Footer from '../components/Footer/Footer';

const HomeLayout = () => {
    return (
        <div className="-mb-10 ">
            <header className='bg-base-100 w-11/12 mx-auto mt-2'>
                  
                        <NavBar></NavBar>
                        {import.meta.env.VITE_name}
                   
            </header>
            <main className=" bg-base-200">
              <div className='w-11/12 mx-auto '>
                  <Outlet></Outlet>
              </div>
            </main>
            <footer className=''>
                 <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;











