import React from "react";
import { Link } from "react-router";

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-[1.02] p-5">
      <div className="flex items-start gap-4">
        <img src={company.logo} alt={company.name} className="w-16 h-16 object-contain rounded-md" />
        <div>
          <h3 className="text-lg font-semibold">{company.name}</h3>
          <p className="text-sm text-gray-500">{company.industry}</p>
          <p className="text-sm mt-1">📍 {company.location}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <a href={company.website} target="_blank" rel="noreferrer" className="text-sm text-indigo-600 hover:underline">
          Visit Website
        </a>
        <Link
          to={`/company/${company.id}`}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700"
        >
          View Jobs
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard;
