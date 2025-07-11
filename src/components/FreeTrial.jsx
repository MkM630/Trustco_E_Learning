import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FreeTrial = () => {
  return (
    <section className="bg-[#12141D] md:h-8/12 px-4 text-white relative flex flex-wrap">
      <div className="md:left-12 lg:left-28 self-center mx-auto md:mx-0 md:absolute z-10">
        <h2 className="mt-8 md:mt-0 mb-8 text-2xl md:text-3xl lg:text-5xl font-semibold">
          Take Your Customer <br /> Service To The Next Level
        </h2>
        <div className="mb-4 w-fit rounded-2xl px-3 py-1 bg-[#F0B73F] flex flex-wrap items-center">
          <span>Get 14 Days Free Trial</span>
          <span className="flex items-center justify-center w-5 h-5 md:w-8 md:h-4 rounded-full bg-opacity-10 bg-[#F2F5F6]">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
        <p className="text-gray-400 mb-4 md:mb-0">No credit card required</p>
      </div>
      <div className="w-full md:hidden">
        <img className="w-full" src="/assets/Decorations.png" alt="Decorations" />
      </div>
      <div className="hidden md:block w-4/12 ml-auto mt-16">
        <img className="w-full" src="/assets/Decorations.png" alt="Decorations" />
      </div>
    </section>
  );
};

export default FreeTrial; 