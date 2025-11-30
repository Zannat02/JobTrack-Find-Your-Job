import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/Header/NavBar';
import Footer from '../components/Footer/Footer';

const HomeLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className='w-11/12 mx-auto mt-2'>
                  
                        <NavBar></NavBar>
                   
            </header>
            <main className="flex-grow">
                <Outlet></Outlet>
            </main>
            <footer >
                 <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;







// import React from 'react';
// import { Outlet } from 'react-router';
// import NavBar from '../components/Header/NavBar';
// import Footer from '../components/Footer/Footer';

// const HomeLayout = () => {
//     return (
//         <div className="min-h-screen flex flex-col">
            
//             <header className='w-11/12 mx-auto mt-2'>
//                 <NavBar />
//             </header>

//             {/* MAIN must grow to push footer down */}
//             <main className="flex-grow">
//                 <Outlet />
//             </main>

//             <footer>
//                 <Footer />
//             </footer>

//         </div>
//     );
// };

// export default HomeLayout;