// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import ApplyModal from "../components/Jobs/ApplyModal";

// const JobDetails = () => {
//   const { companyId, jobId } = useParams();
//   const [company, setCompany] = useState(null);
//   const [job, setJob] = useState(null);
//   const [showApply, setShowApply] = useState(false);

//   useEffect(() => {
//     fetch("/companies_details.json")
//       .then(res => res.json())
//       .then(data => {
//         const comp = data.find(c => c.id === companyId);
//         setCompany(comp || null);
//         const j = comp?.jobs?.find(x => x.id === jobId);
//         setJob(j || null);
//       })
//       .catch(err => console.error(err));
//   }, [companyId, jobId]);

//   if (!job) return <div className="p-8">Job not found.</div>;

//   return (
//     <div className="w-11/12 mx-auto py-8">
//       {/* Banner */}
//       <div
//         className="w-full h-56 rounded-lg bg-cover bg-center shadow-md"
//         style={{ backgroundImage: `url(${job.bannerImage})` }}
//       />

//       {/* Info */}
//       <div className="bg-white rounded-lg shadow-md p-6 mt-6">
//         <div className="flex justify-between items-start">
//           <div>
//             <h1 className="text-2xl font-bold">{job.title}</h1>
//             <p className="text-sm text-gray-500 mt-1">{job.jobType} • {job.location}</p>
//           </div>
//           <div className="text-right">
//             <p className="text-lg font-semibold">{job.salary}</p>
//             <p className="text-sm text-gray-500">{company?.name}</p>
//           </div>
//         </div>

//         <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left: description & requirements */}
//           <div className="lg:col-span-2">
//             <h4 className="font-semibold mb-2">Job Description</h4>
//             <p className="text-gray-700">{job.description}</p>

//             <h4 className="font-semibold mt-4 mb-2">Requirements</h4>
//             <ul className="list-disc ml-5 text-gray-700">
//               {job.requirements.map((req, idx) => (
//                 <li key={idx} className="mb-1">{req}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Right: Apply box */}
//           <div className="p-4 border rounded-md">
//             <p className="text-sm text-gray-500">Company</p>
//             <p className="font-medium">{company?.name}</p>
//             <p className="text-sm text-gray-500 mt-2">Location</p>
//             <p className="font-medium">{job.location}</p>

//             <button
//               onClick={() => setShowApply(true)}
//               className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md"
//             >
//               Apply Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {showApply && <ApplyModal job={job} onClose={() => setShowApply(false)} company={company} />}
//     </div>
//   );
// };

// export default JobDetails;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import ApplyModal from "../components/Jobs/ApplyModal";

const JobDetails = () => {
  const { companyId, jobId } = useParams();
  const [company, setCompany] = useState(null);
  const [job, setJob] = useState(null);
  const [showApply, setShowApply] = useState(false);

  useEffect(() => {
    fetch("/companies_details.json")
      .then(res => res.json())
      .then(data => {
        const comp = data.find(c => c.id === companyId);
        setCompany(comp || null);
        const j = comp?.jobs?.find(x => x.id === jobId);
        setJob(j || null);
      })
      .catch(err => console.error(err));
  }, [companyId, jobId]);

  if (!job) return <div className="p-8">Job not found.</div>;

  return (
    <div className="w-11/12 mx-auto py-8">
      {/* Banner */}
      <div
        className="w-full h-56 rounded-lg bg-cover bg-center shadow-md"
        style={{ backgroundImage: `url(${job.bannerImage})` }}
      />

      {/* Info */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="text-sm text-gray-500 mt-1">{job.jobType} • {job.location}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">{job.salary}</p>
            <p className="text-sm text-gray-500">{company?.name}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: description & requirements */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-2">Job Description</h4>
            <p className="text-gray-700">{job.description}</p>

            <h4 className="font-semibold mt-4 mb-2">Requirements</h4>
            <ul className="list-disc ml-5 text-gray-700">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="mb-1">{req}</li>
              ))}
            </ul>
          </div>

          {/* Right: Apply box */}
          <div className="p-4 border rounded-md">
            <p className="text-sm text-gray-500">Company</p>
            <p className="font-medium">{company?.name}</p>
            <p className="text-sm text-gray-500 mt-2">Location</p>
            <p className="font-medium">{job.location}</p>

            <button
              onClick={() => setShowApply(true)}
              className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Back to Company Button */}
        <div className="mt-6 text-center">
          <Link
            to={`/company/${companyId}`}
            className="inline-block px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300 text-gray-700"
          >
            Back to Company Details
          </Link>
        </div>
      </div>

      {showApply && <ApplyModal job={job} onClose={() => setShowApply(false)} company={company} />}
    </div>
  );
};

export default JobDetails;

