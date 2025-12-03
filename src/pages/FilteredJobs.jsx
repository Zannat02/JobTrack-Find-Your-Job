import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const FilteredJobs = () => {
  const { jobType } = useParams(); 
  const [jobs, setJobs] = useState([]);


   useEffect(() => {
          document.title = "TypeOfJobs | JobTrack";
      }, []);



  useEffect(() => {
    fetch("/companies_details.json")
      .then(res => res.json())
      .then(data => {
        const filtered = [];
        data.forEach(company => {
          company.jobs.forEach(job => {
            if (job.jobType.toLowerCase() === jobType.toLowerCase()) {
              filtered.push({ ...job, companyName: company.name, companyId: company.id });
            }
          });
        });
        setJobs(filtered);
      });
  }, [jobType]);

  if (jobs.length === 0) return <div className="p-8">No {jobType} jobs found.</div>;

  return (
    <div className="w-11/12 mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map(job => (
        <div key={job.id} className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-500">{job.companyName} • {job.location}</p>
          <p className="text-sm font-medium">{job.salary}</p>
          <div className="mt-3">
            <Link
              to={`/company/${job.companyId}/job/${job.id}`}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilteredJobs;
