import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog | JobTrack";
  }, []);

  useEffect(() => {
    fetch("/blogs_details.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center">Loading articles...</div>;

  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-sky-950 mb-3">JobTrack Blog</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Career tips, interview advice, and industry insights to help you land your next job.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            to={`/blog/${blog.id}`}
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group"
          >
            <div className="overflow-hidden h-48">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                {blog.category}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-2 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">{blog.excerpt}</p>
              <div className="mt-4 text-xs text-gray-400">
                {blog.author} • {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;