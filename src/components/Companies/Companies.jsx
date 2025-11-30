import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { animate, stagger } from "motion";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/companies_details.json")
      .then((res) => res.json())
      .then((data) => setCompanies(data))
      .catch((err) => console.error("Failed to load companies:", err));
  }, []);

  // Show first 4 initially
  const visibleCompanies = showAll ? companies : companies.slice(0, 4);

  // Animation Fix (Initial + After Expand)
  useEffect(() => {
    const items = document.querySelectorAll("li.company-card");
    if (items.length === 0) return;

    animate(
      items,
      { opacity: 1, y: 0 },
      { delay: stagger(0.1), duration: 0.5 }
    );
  }, [visibleCompanies]);

  return (
    <>
      {/* COMPANY GRID */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-5">
        {visibleCompanies.map((company) => (
          <li
            key={company.id}
            className="company-card opacity-0 translate-y-5 list-none"
          >
            <CompanyCard company={company} />
          </li>
        ))}
      </ul>

      {/* BUTTON: ALL / SHOW LESS */}
      <div className="text-center mt-10  pb-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          {showAll ? "Show Less" : "All Companies"}
        </button>
      </div>
    </>
  );
};

export default Companies;




