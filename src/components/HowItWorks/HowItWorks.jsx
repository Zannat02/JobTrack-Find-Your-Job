import { Briefcase, FileSearch, LayoutList, ExternalLink } from "lucide-react";

const steps = [
  {
    title: "Browse Companies",
    description: "Explore job opportunities from verified companies in one place.",
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Check Requirements",
    description: "Compare job criteria like experience, skills, and salary range.",
    icon: <FileSearch className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "View Job Details",
    description: "Open a clean modal to see full job information instantly.",
    icon: <LayoutList className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Apply Quickly",
    description: "Visit the company website or external link to submit your application.",
    icon: <ExternalLink className="w-10 h-10 text-blue-600" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">How JobTrack Works</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Understand the simple steps to explore job opportunities and apply with confidence.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mx-auto mb-4 flex justify-center">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
