import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="px-4 lg:px-20 pt-16 bg-[#043A53] text-white">
      <div className="w-full flex justify-between flex-wrap mb-12">
        <h2 className="lg:w-6/12 lg:px-12 mb-2 text-2xl lg:text-4xl font-semibold">
          High-Level Sales <span className="text-[#F0B73F]">Teams & Professionals</span>
        </h2>
        <p className="lg:w-6/12 lg:px-12">
          Circuit is flexible and affordable and offers you exceptional support to
          achieve your career goals. Circuit is a Global training provider based across the UK that specialises.
        </p>
      </div>
      <div className="w-[100%] lg:w-11/12 mx-auto relative">
        <img className="w-full h-full object-cover" src="/assets/team video BG.png" alt="Team Video Background" />
        <img 
          className="absolute top-[50%] left-[50%] -translate-x-[50%] w-12 h-12 lg:w-32 lg:h-32"
          src="/assets/Play.png" 
          alt="Play Button" 
        />
      </div>
    </section>
  );
};

export default About; 