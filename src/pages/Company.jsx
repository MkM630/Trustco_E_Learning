import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobe, faBriefcase, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Company = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      bio: 'With over 15 years of experience in EdTech, Sarah leads our company vision and strategy.',
      image: '/assets/people/gina.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Michael brings 12 years of software development expertise to our platform architecture.',
      image: '/assets/people/american-man_62972-2584.avif'
    },
    {
      id: 3,
      name: 'Jennifer Lee',
      role: 'Head of Learning Design',
      bio: 'Jennifer creates innovative learning experiences backed by educational research.',
      image: '/assets/people/gd.jpg'
    },
    {
      id: 4,
      name: 'Rachel Wilson',
      role: 'VP of Customer Success',
      bio: 'David works closely with clients to ensure they achieve their learning goals.',
      image: '/assets/people/512.jpg'
    }
  ];

  return (
    <div className="py-20 px-6 bg-white" id="company-page">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#043A53] mb-4">About Our Company</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're on a mission to transform how organizations deliver learning experiences
              and help professionals develop skills for the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#043A53] mb-6">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2018, Trusto began with a simple idea: learning should be accessible, 
                engaging, and effective for everyone. What started as a small team of passionate 
                educators and technologists has grown into a company serving clients worldwide.
              </p>
              <p className="text-gray-600">
                Today, we're proud to help organizations of all sizes create powerful learning 
                experiences that drive real results. Our platform combines cutting-edge technology 
                with proven educational principles to deliver solutions that work.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src="/assets/Man laptop.jpg" alt="Company Story" className="w-full object-cover" />
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mb-20 bg-gray-50 p-12 rounded-xl">
          <h3 className="text-2xl font-bold text-[#043A53] mb-8 text-center">Our Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-[#043A53] text-3xl mb-4 flex justify-center">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h4 className="text-lg font-semibold text-[#043A53] mb-2">People First</h4>
              <p className="text-gray-600">We believe in putting people at the center of everything we do.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-[#043A53] text-3xl mb-4 flex justify-center">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h4 className="text-lg font-semibold text-[#043A53] mb-2">Accessibility</h4>
              <p className="text-gray-600">We're committed to making education accessible to all learners.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-[#043A53] text-3xl mb-4 flex justify-center">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h4 className="text-lg font-semibold text-[#043A53] mb-2">Excellence</h4>
              <p className="text-gray-600">We strive for excellence in every aspect of our platform and service.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-[#043A53] text-3xl mb-4 flex justify-center">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h4 className="text-lg font-semibold text-[#043A53] mb-2">Partnership</h4>
              <p className="text-gray-600">We build lasting partnerships with our clients and communities.</p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043A53] mb-8 text-center">Meet Our Leadership Team</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all">
                <div className="relative h-60 bg-gradient-to-r from-[#043A53] to-[#0a5b83]">
                  {/* Fallback image if team member image doesn't exist yet */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = '/assets/Images.png';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#043A53] mb-1">{member.name}</h4>
                  <p className="text-sm text-[#043A53] mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Join Us Section */}
        <div className="bg-[#043A53] text-white p-10 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="max-w-2xl mx-auto mb-6">
            We're always looking for passionate individuals to join our growing team. 
            Check out our open positions and become part of our mission.
          </p>
          <button className="bg-white text-[#043A53] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            View Career Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Company; 