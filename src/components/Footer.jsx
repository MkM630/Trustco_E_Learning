import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-evenly items-start pt-8 gap-y-3">
      <div>
        <img className="w-32" src="/assets/Logo.png" alt="Trusto Logo" />
        <div className="my-4 flex items-center justify-evenly">
          <FontAwesomeIcon className="text-gray-400 text-xl" icon={faFacebook} />
          <FontAwesomeIcon className="text-gray-400 text-xl" icon={faInstagram} />
          <FontAwesomeIcon className="text-gray-400 text-xl" icon={faYoutube} />
        </div>
      </div>
      
      <div className="md:text-justify px-4 md:px-8 lg:w-4/12">
        <p>
          An awesome & powerful tools for your business, increase business revenue. With evaluating in depth variety
          of data sets and including the speed of tech adaptation we can build bridges between any companies and
          their customers.
        </p>
      </div>
      
      <div>
        <h4 className="text-xl mb-3 font-bold">Home</h4>
        <ul className="flex flex-col gap-2">
          <li>Features</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
      </div>
      
      <div>
        <h1 className="text-xl mb-3 font-bold">About Us</h1>
        <ul className="flex flex-col gap-2">
          <li>Company</li>
          <li>Contact</li>
          <li>Career</li>
        </ul>
      </div>
      
      <div className="w-full flex flex-wrap items-start justify-between bg-gray-200 text-slate-500 px-8 py-4 mt-4 gap-6">
        <div className="order-3 lg:order-none w-full lg:w-fit text-center">
          ©2022-2023 Trustco.
        </div>
        
        <div className="text-xs flex gap-x-4 mx-auto lg:w-fit">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Language</p>
        </div>
        
        <div className="order-2 lg:order-none w-full lg:w-fit text-center">
          <span><FontAwesomeIcon icon={faGlobe} /></span>
          <span> English </span>
          <span><FontAwesomeIcon icon={faCaretDown} /></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 