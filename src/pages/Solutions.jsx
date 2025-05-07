import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faGraduationCap, faMedkit, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Solutions = () => {
  return (
    <div className="py-20 px-6 bg-gray-50" id="solutions-page">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#043A53] mb-4">Tailored Solutions for Every Need</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform adapts to the unique requirements of different industries,
            providing specialized features and workflows to maximize your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Enterprise Solution */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
            <div className="text-[#043A53] text-3xl mb-6">
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            <h3 className="text-2xl font-bold text-[#043A53] mb-4">For Enterprise</h3>
            <p className="text-gray-600 mb-6">
              Corporate training solutions designed to upskill your workforce, 
              improve retention, and drive business results.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</span>
                <span>Employee onboarding and development</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</span>
                <span>Compliance and certification tracking</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</span>
                <span>Custom learning paths for teams</span>
              </li>
            </ul>
            <div className="text-[#043A53] font-semibold flex items-center cursor-pointer hover:underline">
              Learn more
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </div>
          </div>

          {/* Education Solution */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
            <div className="text-[#043A53] text-3xl mb-6">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <h3 className="text-2xl font-bold text-[#043A53] mb-4">For Education</h3>
            <p className="text-gray-600 mb-6">
              Digital learning solutions for schools and universities to create 
              engaging courses and track student achievement.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</span>
                <span>Interactive classroom tools</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</span>
                <span>Student performance analytics</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</span>
                <span>Curriculum development resources</span>
              </li>
            </ul>
            <div className="text-[#043A53] font-semibold flex items-center cursor-pointer hover:underline">
              Learn more
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </div>
          </div>

          {/* Healthcare Solution */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
            <div className="text-[#043A53] text-3xl mb-6">
              <FontAwesomeIcon icon={faMedkit} />
            </div>
            <h3 className="text-2xl font-bold text-[#043A53] mb-4">For Healthcare</h3>
            <p className="text-gray-600 mb-6">
              Specialized learning solutions for healthcare professionals with 
              HIPAA-compliant features and medical curriculum tools.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</span>
                <span>Medical procedure training</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</span>
                <span>Compliance certification</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</span>
                <span>Continuing education credits</span>
              </li>
            </ul>
            <div className="text-[#043A53] font-semibold flex items-center cursor-pointer hover:underline">
              Learn more
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-[#043A53] mb-5">Want to learn more about our solutions?</h3>
          <button className="bg-[#043A53] text-white px-8 py-3 rounded-full hover:bg-[#032b3e] transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions; 