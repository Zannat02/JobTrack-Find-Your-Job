import React from "react";
import { CheckCircle, Briefcase, Search, Zap } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="py-20 ">
      <div className="w-11/12 mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10 text-slate-900">
          Why Choose JobTrack?
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          JobTrack makes your job search easier, faster, and more effective. 
          Find verified companies, explore clear job details, and apply instantly.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Item 1 */}
          <motion.div
            initial={{ scale: 0.4 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "circInOut", duration: 1.2 }}
            className="p-6 bg-base-200 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <CheckCircle className="w-12 h-12 mx-auto text-blue-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
            <p className="text-gray-700 text-sm">
              All job posts are verified to ensure genuine opportunities.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ scale: 0.4 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "circInOut", duration: 1.2 }}
            className="p-6 bg-base-200 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <Briefcase className="w-12 h-12 mx-auto text-purple-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Company Wise Jobs</h3>
            <p className="text-gray-700 text-sm">
              Browse jobs organized by company for easier navigation.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ scale: 0.4 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "circInOut", duration: 1.2 }}
            className="p-6 bg-base-200 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <Search className="w-12 h-12 mx-auto text-green-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Clear Job Details</h3>
            <p className="text-gray-700 text-sm">
              View roles, salary, location, and requirements in a clean modal.
            </p>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            initial={{ scale: 0.4 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "circInOut", duration: 1.2 }}
            className="p-6 bg-base-200 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <Zap className="w-12 h-12 mx-auto text-orange-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Quick Apply</h3>
            <p className="text-gray-700 text-sm">
              Go directly to the company website and apply instantly.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

