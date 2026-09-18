import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/blogs_details.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((b) => b.id === blogId);
        setBlog(found || null);
        setLoading(false);
        if (found) document.title = `${found.title} | JobTrack`;
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [blogId]);

  if (loading) return <div className="p-8 text-center">Loading article...</div>;
  if (!blog) return <div className="p-8 text-center">Article not found.</div>;

  return (
    <div className="w-11/12 mx-auto py-12 max-w-3xl">
      <Link to="/blog" className="text-indigo-600 hover:underline text-sm">
        ← Back to Blog
      </Link>

      <span className="block mt-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide">
        {blog.category}
      </span>
      <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3 text-sky-950">
        {blog.title}
      </h1>
      <div className="text-sm text-gray-500 mb-6">
        {blog.author} •{" "}
        {new Date(blog.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md mb-8"
      />

      <div className="space-y-5 text-gray-700 leading-relaxed">
        {blog.content.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;