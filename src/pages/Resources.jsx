import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faVideo, faDownload, faCalendarAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

const Resources = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      title: "How to Implement Effective Microlearning in Corporate Training",
      excerpt: "Discover how bite-sized learning modules can significantly improve knowledge retention and engagement in workplace training programs.",
      date: "May 15, 2025",
      category: "Corporate Training",
      author: "Jane Cooper",
      authorRole: "CEO / Co-Founder"
    },
    {
      title: "The Future of AI in Personalized Learning Experiences",
      excerpt: "Explore how artificial intelligence is revolutionizing e-learning by creating truly personalized educational journeys for each student.",
      date: "April 28, 2025",
      category: "Technology Trends",
      author: "Robert Fox",
      authorRole: "CTO"
    },
    {
      title: "7 Essential Metrics to Track in Your E-Learning Program",
      excerpt: "Learn which key performance indicators matter most when evaluating the effectiveness of your online learning initiatives.",
      date: "April 10, 2025",
      category: "Analytics",
      author: "Esther Howard",
      authorRole: "Head of Product"
    },
    {
      title: "Building Community in Virtual Learning Environments",
      excerpt: "Strategies for fostering meaningful connections and collaboration among learners in online educational settings.",
      date: "March 22, 2025",
      category: "Community",
      author: "Cameron Williamson",
      authorRole: "Head of Marketing"
    },
    {
      title: "Accessibility in E-Learning: Making Education Inclusive for All",
      excerpt: "Best practices for ensuring your digital learning content is accessible to learners with diverse needs and abilities.",
      date: "March 5, 2025",
      category: "Accessibility",
      author: "Leslie Alexander",
      authorRole: "Head of Customer Success"
    },
    {
      title: "The Psychology of Effective Online Course Design",
      excerpt: "How understanding cognitive principles can help you create more engaging and effective e-learning experiences.",
      date: "February 18, 2025",
      category: "Learning Design",
      author: "Brooklyn Simmons",
      authorRole: "Lead Designer"
    }
  ];

  // Sample webinar data
  const upcomingWebinars = [
    {
      id: 1,
      title: 'Transforming Employee Training with Interactive Content',
      date: 'June 10, 2023',
      time: '2:00 PM EST',
      presenter: 'Dr. Sarah Johnson, Learning Specialist'
    },
    {
      id: 2,
      title: 'Data-Driven Course Improvement Strategies',
      date: 'June 25, 2023',
      time: '11:00 AM EST',
      presenter: 'Mark Wilson, Analytics Expert'
    }
  ];

  const resources = [
    {
      title: "E-Learning Implementation Guide",
      description: "A comprehensive guide to implementing e-learning solutions in various organizational contexts.",
      type: "PDF Guide",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Instructional Design Templates",
      description: "Ready-to-use templates to help you design effective learning modules and courses.",
      type: "Template Pack",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "E-Learning ROI Calculator",
      description: "Calculate the potential return on investment for your e-learning initiatives.",
      type: "Interactive Tool",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Learning Analytics Dashboard Demo",
      description: "Explore how our analytics dashboard helps track learning outcomes and engagement.",
      type: "Interactive Demo",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-20 px-6 bg-white" id="resources-page">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#043A53] mb-4">Learning Resources</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access our comprehensive library of educational content, guides, and resources to maximize your e-learning success.
          </p>
        </div>
        
        {/* Free Resources Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#043A53] mb-6">Free Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="bg-[#043A53] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#043A53]">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#043A53] bg-[#E6F0F3] px-3 py-1 rounded-full">{resource.type}</span>
                  <button className="text-[#043A53] font-medium hover:underline flex items-center">
                    Download
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Blog Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#043A53] mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-[#043A53] bg-[#E6F0F3] px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-sm text-gray-500 ml-2">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#043A53]">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <p className="font-medium text-[#043A53]">{post.author}</p>
                        <p className="text-gray-500">{post.authorRole}</p>
                      </div>
                    </div>
                    <button className="text-[#043A53] font-medium hover:underline flex items-center">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources; 