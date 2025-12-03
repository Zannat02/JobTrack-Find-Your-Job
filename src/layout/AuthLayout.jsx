import React from 'react';
import NavBar from '../components/Header/NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
       <div className=' -mb-10'>
            <header className='w-11/12 mx-auto'>
               
                 <NavBar></NavBar>
               
            </header>
            <main className='bg-base-200 '>
               <div className='w-11/12 mx-auto py-5 '>
                  <Outlet></Outlet>
               </div>
            </main>
        </div>
    );
};

export default AuthLayout;