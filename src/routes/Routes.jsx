
import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CompanyDetails from "../pages/CompanyDetails";
import JobDetails from "../pages/JobDetails";
import FilteredJobs from "../pages/FilteredJobs";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

import PrivateRoute from "../provider/PrivateRoute";
import ForgotPassword from "../pages/ForgetPassword";
import About from "../pages/About";
import SearchResults from "../pages/SearchResults";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "search",
        element: (
          <PrivateRoute>
            <SearchResults />
          </PrivateRoute>
        ),
      },
      {
        path: "company/:companyId",
        element: (
          <PrivateRoute>
            <CompanyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "company/:companyId/job/:jobId",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "jobs/:jobType",
        element: (
          <PrivateRoute>
            <FilteredJobs />
          </PrivateRoute>
        ),
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "blog",
        element: <Blogs />,
      },
      {
        path: "blog/:blogId",
        element: <BlogDetails />,
      },
    ],

  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot", element: <ForgotPassword /> },
    ],
  },
  { path: "*", element: <h2 className="p-10">404 - Not Found</h2> },
]);
