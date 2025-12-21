import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Import page components
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import OurProjects from './components/OurProjects';
import Contact from './components/Contact';
import Careers from './components/Careers';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;