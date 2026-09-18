import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = `Search: ${query} | JobTrack`;
    }, [query]);

    useEffect(() => {
        setLoading(true);
        fetch("/companies_details.json")
            .then(res => res.json())
            .then(data => {
                const matched = [];
                data.forEach(company => {
                    company.jobs.forEach(job => {
                        if (job.title.toLowerCase().includes(query.toLowerCase())) {
                            matched.push({ ...job, companyName: company.name, companyId: company.id, companyLogo: company.logo });
                        }
                    });
                });
                setResults(matched);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [query]);

    if (loading) return <div className="p-8 text-center">Searching...</div>;

    return (
        <div className="w-11/12 mx-auto py-8">
            <h2 className="text-2xl font-bold mb-2">
                Search results for "{query}"
            </h2>
            <p className="text-gray-500 mb-6">{results.length} job(s) found</p>

            {results.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-gray-600 mb-4">No jobs found matching "{query}"</p>
                    <Link to="/" className="text-indigo-600 hover:underline">Back to Home</Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map(job => (
                        <div key={job.id} className="bg-white rounded-lg shadow-sm p-5">
                            <div className="flex items-center gap-3 mb-2">
                                <img src={job.companyLogo} alt={job.companyName} className="w-10 h-10 object-contain" />
                                <div>
                                    <h3 className="text-lg font-semibold">{job.title}</h3>
                                    <p className="text-sm text-gray-500">{job.companyName}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">{job.jobType} • {job.location}</p>
                            <p className="text-sm font-medium mt-1">{job.salary}</p>
                            <div className="mt-3">
                                <Link
                                    to={`/company/${job.companyId}/job/${job.id}`}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 inline-block"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResults;