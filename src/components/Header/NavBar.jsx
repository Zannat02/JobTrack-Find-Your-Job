// import React from 'react';
// import { NavLink } from 'react-router';
// import logo from '../../assets/logo.jpg'

// const NavBar = () => {



//    const links = <>

//   <div className='flex gap-5'>
//       <NavLink to='/'>Home</NavLink>
//     <NavLink to='' >Category</NavLink>
//     <NavLink to='/'>About Us</NavLink>

//   </div>
   
//    </>
                   
                    
// return (
//         <div className="navbar bg-base-100  ">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                         {links}
//                     </ul>
//                 </div>
//                 <img  className='w-8 rounded-xl'  src={logo} alt="" />
//                 <p className=" text-2xl font-bold ml-2">JobTrack</p>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                    {links}
//                 </ul>
//             </div>
//             <div className="navbar-end gap-5">
//                 <button className="btn border border-blue-500 hover:border-none">Sign In</button>
//                 <button className="btn border border-red-600 hover:border-none">Register</button>
//             </div>
//         </div>
//     );
// };

// export default NavBar;



import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import logo from '../../assets/logo.jpg';

const NavBar = () => {
  const [jobTypes, setJobTypes] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetch("/companies_details.json")
      .then(res => res.json())
      .then(data => {
        const types = new Set();
        data.forEach(company => {
          company.jobs.forEach(job => types.add(job.jobType));
        });
        setJobTypes([...types]);
      });
  }, []);

  // 🔥 Category active detection
  const isCategoryActive = location.pathname.startsWith("/jobs/");

  const links = (
    <div className='flex gap-5 items-center'>

      {/* Home */}
      <NavLink to='/' className={({ isActive }) => isActive ? 'underline' : ''}>
        Home
      </NavLink>

      {/* Category */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(prev => !prev)}
          className={`px-4 py-2 rounded-md hover:bg-gray-100 ${isCategoryActive ? 'underline' : ''}`}
        >
          Category
        </button>

        {dropdownOpen && (
          <ul className="absolute bg-white shadow-md rounded-md mt-2 p-2 min-w-[180px] z-10">
            {jobTypes.map(type => (
              <li key={type}>
                <NavLink
                  to={`/jobs/${type.toLowerCase()}`}
                  className="block px-3 py-2 rounded hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  {type}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* About */}
      <NavLink to='/about' className={({ isActive }) => isActive ? 'underline' : ''}>
        About Us
      </NavLink>

    </div>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <img className='w-8 rounded-xl' src={logo} alt="" />
        <p className="text-2xl font-bold ml-2">JobTrack</p>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-5">
        <button className="btn border border-blue-500 hover:border-none">Sign In</button>
        <button className="btn border border-red-600 hover:border-none">Register</button>
      </div>
    </div>
  );
};

export default NavBar;





