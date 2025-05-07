import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="py-20 px-6 bg-gray-50" id="contact-page">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#043A53] mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help.
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="bg-[#043A53] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
            </div>
            <h3 className="text-xl font-semibold text-[#043A53] mb-2">Our Office</h3>
            <p className="text-gray-600">
              123 Learning Avenue<br />
              Suite 400<br />
              San Francisco, CA 94107
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="bg-[#043A53] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faPhone} size="lg" />
            </div>
            <h3 className="text-xl font-semibold text-[#043A53] mb-2">Phone</h3>
            <p className="text-gray-600">
              Main: (555) 123-4567<br />
              Support: (555) 987-6543<br />
              Toll-free: 1-800-LEARNING
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="bg-[#043A53] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </div>
            <h3 className="text-xl font-semibold text-[#043A53] mb-2">Email</h3>
            <p className="text-gray-600">
              General: info@trusto.com<br />
              Support: support@trusto.com<br />
              Sales: sales@trusto.com
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-[#043A53] mb-6 text-center">Send Us a Message</h3>
          
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#043A53]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#043A53]"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#043A53]"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#043A53]"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#043A53] text-white px-8 py-3 rounded-full hover:bg-[#032b3e] transition-colors inline-flex items-center"
              >
                Send Message
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16">
          <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
            {/* Replace with an actual Google Maps embed or another map solution */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-gray-600">Map Placeholder - Google Maps would be embedded here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 