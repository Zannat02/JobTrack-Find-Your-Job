import React, { useState } from "react";

const ApplyModal = ({ job, company, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", resume: null });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm(prev => ({ ...prev, resume: files[0] }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Application:", form);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      <div className="relative bg-white rounded-lg w-11/12 max-w-xl p-6 shadow-lg">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500">✕</button>

        <h3 className="text-xl font-semibold">Apply for {job.title}</h3>
        <p className="text-sm text-gray-500">at {company?.name}</p>

        {submitted ? (
          <div className="mt-6 text-green-600">Application submitted. Thank you!</div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <div>
              <label className="block text-sm">Full Name</label>
              <input required name="name" value={form.name} onChange={handleChange} className="w-full border rounded p-2" />
            </div>

            <div>
              <label className="block text-sm">Email</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full border rounded p-2" />
            </div>

            <div>
              <label className="block text-sm">Resume (PDF)</label>
              <input required type="file" accept=".pdf,.doc,.docx" name="resume" onChange={handleChange} className="w-full" />
            </div>

            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplyModal;
