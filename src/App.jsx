import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Brands from './components/Brands'
import About from './components/About'
import Beneficial from './components/Beneficial'
import FreeTrial from './components/FreeTrial'
import Footer from './components/Footer'
import Features from './pages/Features'
import Solutions from './pages/Solutions'
import Resources from './pages/Resources'
import Company from './pages/Company'
import Contact from './pages/Contact'

// Scroll to top on page change
function ScrollToTop() {
  const { pathname, state } = useLocation();
  
  useEffect(() => {
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
    
    // If there's a specific section to scroll to
    if (state && state.scrollTo) {
      setTimeout(() => {
        document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [pathname, state]);
  
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <div id="home">
              <Header />
            </div>
            <div id="partners">
              <Brands />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="benefits">
              <Beneficial />
            </div>
            <div id="trial">
              <FreeTrial />
            </div>
            <div id="contact">
              <Footer />
            </div>
          </>
        } />
        <Route path="/features" element={
          <>
            <Header />
            <Features />
            <Footer />
          </>
        } />
        <Route path="/solutions" element={
          <>
            <Header />
            <Solutions />
            <Footer />
          </>
        } />
        <Route path="/resources" element={
          <>
            <Header />
            <Resources />
            <Footer />
          </>
        } />
        <Route path="/company" element={
          <>
            <Header />
            <Company />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Header />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App 