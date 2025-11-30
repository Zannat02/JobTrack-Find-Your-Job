import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";

const CompanyDetails = () => {
    const { companyId } = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        fetch("/companies_details.json")
            .then(res => res.json())
            .then(data => {
                const found = data.find(c => c.id === companyId);
                setCompany(found || null);
            })
            .catch(err => console.error(err));
    }, [companyId]);

    if (!company) {
        return <div className="p-8">Company not found.</div>;
    }

    return (
        <div className="w-11/12 mx-auto py-8">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 flex gap-6">
                    <img src={company.logo} alt={company.name} className="w-24 h-24 object-contain" />
                    <div>
                        <h1 className="text-2xl font-bold">{company.name}</h1>
                        <p className="text-sm text-gray-500">{company.industry} • 📍 {company.location}</p>
                        <a href={company.website} target="_blank" rel="noreferrer" className="text-indigo-600 mt-2 inline-block">
                            {company.website}
                        </a>
                    </div>
                </div>
            </div>

           
     
            {/* Jobs list */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {company.jobs.map((job, index) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-lg shadow-sm p-5"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold">{job.title}</h3>
                                <p className="text-sm text-gray-500">{job.jobType} • {job.location}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-medium">{job.salary}</p>
                            </div>
                        </div>

                        <p className="mt-3 text-gray-700 line-clamp-3">{job.description}</p>

                        <div className="mt-4 flex gap-3">
                            <Link
                                to={`/company/${company.id}/job/${job.id}`}
                                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                            >
                                View Details
                            </Link>
                            <button
                                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                                className="px-4 py-2 border rounded-md text-sm"
                            >
                                Contact Company
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CompanyDetails;
