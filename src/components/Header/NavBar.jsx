import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import logo from "../../assets/logo.jpg";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [jobTypes, setJobTypes] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const mobileMenuRef = useRef(null);
  const categoryRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logoutUser()
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const links = (
    <>
      <li>
        <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? "underline" : "")}>
          Home
        </NavLink>
      </li>




      <li className="relative" ref={categoryRef}>
        <button
          onClick={() => setDropdownOpen((p) => !p)}
          className={location.pathname.startsWith("/jobs") ? "underline" : ""}
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
                  onClick={() => {
                    setDropdownOpen(false);
                    closeMobileMenu();
                  }}
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
          onClick={closeMobileMenu}
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? "underline" : "")}>
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown" ref={mobileMenuRef}>
          <button
            onClick={() => setMobileMenuOpen((p) => !p)}
            className="btn btn-ghost lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          {mobileMenuOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          )}
        </div>

        {/* <img className="w-8 rounded-xl" src={logo} alt="logo" />
        <p className="text-2xl font-bold ml-2">JobTrack</p> */}
        <img className="w-8 rounded-xl" src={logo} alt="logo" />

        <p className="hidden lg:block text-2xl font-bold ml-2">
          JobTrack
        </p>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-5">
        {user ? (
          <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
            <img src={user.photoURL || logo} alt="user" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full" />
            <span className="hidden lg:block">{user.displayName || user.email}</span>
            <button onClick={handleLogout} className="btn btn-sm lg:btn-md btn-ghost text-black border border-gray-300">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-1 md:gap-2 lg:gap-3">
            <Link
              to="/auth/login"
              className="btn btn-sm lg:btn-md border border-blue-500 hover:border-none"
            >
              Log In
            </Link>
            <Link
              to="/auth/register"
              className="btn btn-sm lg:btn-md border border-red-600 hover:border-none"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;