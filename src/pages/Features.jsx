import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLaptop, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div className="py-20 px-6 bg-white" id="features-page">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#043A53] mb-4">Our Platform Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the comprehensive suite of tools designed to transform your learning experience
            and enhance productivity for both educators and students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature Card 1 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
            <div className="text-[#043A53] text-3xl mb-4">
              <FontAwesomeIcon icon={faLaptop} />
            </div>
            <h3 className="text-xl font-bold text-[#043A53] mb-3">Learning Management</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive learning management system for course creation, delivery, and tracking student progress.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                <span>Course organization tools</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                <span>Student tracking & analytics</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                <span>Seamless content delivery</span>
              </li>
            </ul>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
            <div className="text-[#043A53] text-3xl mb-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3 className="text-xl font-bold text-[#043A53] mb-3">Content Creation</h3>
            <p className="text-gray-600 mb-4">
              Powerful tools to create engaging and interactive learning content for any subject or skill level.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                <span>Interactive lesson builder</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                <span>Media integration</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                <span>Assessment creation tools</span>
              </li>
            </ul>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
            <div className="text-[#043A53] text-3xl mb-4">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3 className="text-xl font-bold text-[#043A53] mb-3">Analytics & Reports</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive analytics and reporting tools to measure learning outcomes and improve course effectiveness.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                <span>Performance dashboards</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                <span>Custom report generation</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                <span>Data-driven insights</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#043A53] text-white px-8 py-3 rounded-full hover:bg-[#032b3e] transition-colors">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features; 