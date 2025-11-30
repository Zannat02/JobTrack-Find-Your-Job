import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CompanyDetails from "../pages/CompanyDetails";
import JobDetails from "../pages/JobDetails";
import FilteredJobs from "../pages/FilteredJobs";




 export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children :[
        {
            index:true,
        path:'/',
        element:<Home></Home>
        },
        { path: "company/:companyId", element: <CompanyDetails /> },
      { path: "company/:companyId/job/:jobId", element: <JobDetails /> },
      { path: "jobs/:jobType", element: <FilteredJobs /> },


    ]
  },
  {
    path: "/auth",
    element: <h2>this is auth page</h2>,
  },
  
  {
    path: "/*",
    element: <h2>Error404</h2>  ,
  },

]);