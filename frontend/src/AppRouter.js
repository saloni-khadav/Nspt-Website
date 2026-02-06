import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout';

// Import page components
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import OurProjects from './components/OurProjects';
import Contact from './components/Contact';
import Careers from './components/Careers';
import ProjectConsultation from './components/ProjectConsultation';
import HelpCenter from './components/HelpCenter';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/project-consultation" element={<ProjectConsultation />} />
        <Route path="/help-center" element={<HelpCenter />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default AppRouter;