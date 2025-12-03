import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import logo from "../../assets/logo.jpg";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [jobTypes, setJobTypes] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/companies_details.json")
      .then((res) => res.json())
      .then((data) => {
        const types = new Set();
        data.forEach((company) => {
          company.jobs.forEach((job) => types.add(job.jobType));
        });
        setJobTypes([...types]);
      })
      .catch(() => setJobTypes([]));
  }, []);

  const handleLogout = () => {
    logoutUser()
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
          Home
        </NavLink>
      </li>




      <li className="relative">
        <button
          onClick={() => setDropdownOpen((p) => !p)}
          className={`px-4 py-2 rounded-md hover:bg-gray-100 ${location.pathname.startsWith("/jobs") ? "underline" : ""
            }`}
        >
          Category
        </button>

        {dropdownOpen && (
          <ul className="absolute bg-white shadow-md rounded-md mt-2 p-2 min-w-[180px] z-10">
            {jobTypes.map((type) => (
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
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <img className="w-8 rounded-xl" src={logo} alt="logo" />
        <p className="text-2xl font-bold ml-2">JobTrack</p>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-5">
        {user ? (
          <div className="flex items-center gap-3">
            <img src={user.photoURL || logo} alt="user" className="w-10 h-10 rounded-full" />
            <span className="hidden md:block">{user.displayName || user.email}</span>
            <button onClick={handleLogout} className="btn btn-md btn-ghost text-black border border-gray-300">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link to="/auth/login" className="btn border border-blue-500 hover:border-none">
              Log In
            </Link>
            <Link to="/auth/register" className="btn border border-red-600 hover:border-none">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;


