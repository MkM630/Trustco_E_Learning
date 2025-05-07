import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRight, faArrowUp, faTimes, faHome } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (section) => {
    // Close mobile menu when a link is clicked
    setMobileMenuOpen(false);
    
    if (isHomePage) {
      // On home page, scroll to the section
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On other pages, navigate to home and then scroll to section
      navigate('/', { state: { scrollTo: section } });
    }
  };

  const handleLogin = () => {
    console.log('Login clicked');
    // Implement login functionality or redirect
    alert('Login functionality will be implemented here');
  };

  const handleSignUp = () => {
    console.log('Sign Up clicked');
    // Implement sign up functionality or redirect
    alert('Sign Up functionality will be implemented here');
  };

  return (
    <header className={`${isHomePage ? 'bg-[#f0f7fa]' : 'bg-white'} text-[#043A53] h-auto w-full`}>
      <nav className={`${isHomePage ? 'bg-[#f0f7fa]' : 'bg-white'} text-[#043A53] top-0 h-16 w-full flex justify-center items-center fixed z-20 shadow-md`}>
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="w-24 h-5 mx-10 cursor-pointer">
            <img className="w-full h-full" src="/assets/Logo.png" alt="Trusto Logo" />
          </Link>
          
          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex gap-5 text-[#043A53] font-medium">
            <li className="md:mx-2 lg:mx-2 cursor-pointer">
              <Link to="/" className={`flex items-center hover:text-[#032b3e] transition-colors ${isHomePage ? 'font-semibold text-[#032b3e] border-b-2 border-[#032b3e] pb-1' : ''}`}>
                <FontAwesomeIcon icon={faHome} className="mr-1" />
                Home
              </Link>
            </li>
          
            <li className="md:mx-2 lg:mx-2 cursor-pointer">
              <Link to="/features" className={`hover:text-[#032b3e] transition-colors ${location.pathname === '/features' ? 'font-semibold border-b-2 border-[#032b3e] pb-1' : ''}`}>
                Features
              </Link>
            </li>
            
            <li className="md:mx-2 lg:mx-2 cursor-pointer">
              <Link to="/solutions" className={`hover:text-[#032b3e] transition-colors ${location.pathname === '/solutions' ? 'font-semibold border-b-2 border-[#032b3e] pb-1' : ''}`}>
                Solutions
              </Link>
            </li>
            
            <li className="md:mx-2 lg:mx-2 cursor-pointer">
              <Link to="/company" className={`hover:text-[#032b3e] transition-colors ${location.pathname === '/company' ? 'font-semibold border-b-2 border-[#032b3e] pb-1' : ''}`}>
                Company
              </Link>
            </li>
            
            <li className="md:mx-2 lg:mx-2 cursor-pointer">
              <Link to="/resources" className={`hover:text-[#032b3e] transition-colors ${location.pathname === '/resources' ? 'font-semibold border-b-2 border-[#032b3e] pb-1' : ''}`}>
                Resources
              </Link>
            </li>
            
            <li className="md:mx-2 lg:mx-2 cursor-pointer">
              <Link to="/contact" className={`hover:text-[#032b3e] transition-colors ${location.pathname === '/contact' ? 'font-semibold border-b-2 border-[#032b3e] pb-1' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden text-3xl text-[#043A53] mx-10 cursor-pointer" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </div>
          
          {/* Login/Signup Buttons */}
          <div className="hidden md:flex gap-5 mx-5">
            <div className="bg-white rounded-3xl px-5 py-1 text-[#043A53] cursor-pointer hover:bg-gray-100 transition-colors shadow-sm" onClick={handleLogin}>Login</div>
            <div className="bg-[#043A53] text-white rounded-3xl px-4 py-1 cursor-pointer hover:bg-[#032b3e] transition-colors border border-white shadow-sm" onClick={handleSignUp}>Sign Up</div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-[#5DA3C0] z-10 shadow-md py-4 px-6">
          <ul className="flex flex-col gap-4 text-[#043A53]">
            <li className="border-b border-[#80BBD2] pb-2">
              <Link to="/" className="block py-2 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </Link>
            </li>
          
            <li className="border-b border-[#80BBD2] pb-2">
              <Link to="/features" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
            </li>
            
            <li className="border-b border-[#80BBD2] pb-2">
              <Link to="/solutions" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                Solutions
              </Link>
            </li>
            
            <li className="border-b border-[#80BBD2] pb-2">
              <Link to="/company" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                Company
              </Link>
            </li>
            
            <li className="border-b border-[#80BBD2] pb-2">
              <Link to="/resources" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                Resources
              </Link>
            </li>
            
            <li className="border-b border-[#80BBD2] pb-2">
              <Link to="/contact" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
            
            <div className="flex flex-col gap-3 mt-4">
              <button className="bg-white border border-white rounded-3xl px-5 py-2 text-[#043A53] font-medium shadow-sm" onClick={handleLogin}>Login</button>
              <button className="bg-[#043A53] text-white rounded-3xl px-5 py-2 border border-white shadow-sm" onClick={handleSignUp}>Sign Up</button>
            </div>
          </ul>
        </div>
      )}
      
      {/* Only show hero section on homepage */}
      {isHomePage && (
        <div className="h-full w-full pt-16 flex flex-wrap bg-[#f0f7fa]">
          <div className="text-center self-center px-4 w-full lg:h-[230px] md:px-2 lg:px-20 md:text-left md:w-6/12 md:flex md:flex-col md:justify-between">
            <h3 className="text-3xl md:text-4xl text-black font-bold">
              Find High-Potential Customers with
              <span className="block text-[#032b3e]">Trustco.</span>
            </h3>
            <p className="text-[#404040] mt-3 md:mt-0">
              We provide sales teams and professionals with the knowledge, skill
              and discipline they need to be 10x more successful.
            </p>
            <div className="mx-auto md:m-0 mt-4 bg-[#032b3e] w-fit text-white px-3 py-2 rounded-3xl cursor-pointer hover:bg-[#043A53] transition-colors shadow-md font-medium" onClick={() => handleNavLinkClick('works')}>
              Explore Our Works
              <span className="bg-[#043A53] px-2 ml-2 rounded-full py-1">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
          
          <div className="w-full md:w-6/12 h-full relative">
            <img 
              className="md:hidden bg-transparent w-full h-full" 
              src="/assets/Man mobile.png" 
              alt="man" 
            />
            <img 
              className="hidden md:inline-block md:bg-transparent md:object-contain md:w-full md:h-full"
              src="/assets/Man mobile.png" 
              alt="man" 
            />
            
            <div className="w-24 h-24 md:h-32 md:w-32 absolute flex flex-col justify-center items-center bottom-32 md:bottom-48 lg:bottom-64 right-8 md:right-16 lg:right-24 rounded-full bg-[#032b3e] text-white shadow-lg">
              <div className="flex items-center justify-center w-5 h-5 md:w-8 md:h-8 rounded-full bg-opacity-10 bg-[#F2F5F6]">
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
              <p className="text-2xl md:text-4xl font-bold">98%</p>
              <p>Sales Up</p>
            </div>

            <div className="absolute bottom-4 left-12 lg:left-20">
              <img className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg" src="/assets/Images.png" alt="Team" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 