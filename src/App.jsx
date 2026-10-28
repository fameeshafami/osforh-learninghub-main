import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Preloader from './components/Preloader.jsx';
import ScrollProgressBar from './components/ScrollProgressBar.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

import Home from './pages/Home.jsx';
import Programs from './pages/Programs.jsx';
import WhyOsforh from './pages/why-osforh.jsx';
import Testimonials from './pages/testimonial.jsx';
import Contact from './pages/Contact.jsx';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      {/* Experience Shell */}
      <Preloader />
      <ScrollProgressBar />

      {/* Primary Header Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main id="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/why-osforh" element={<WhyOsforh />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legacy HTML routes redirect support */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/programs.html" element={<Navigate to="/programs" replace />} />
          <Route path="/why-osforh.html" element={<Navigate to="/why-osforh" replace />} />
          <Route path="/testimonials.html" element={<Navigate to="/testimonials" replace />} />
          <Route path="/contact.html" element={<Navigate to="/contact" replace />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer & Floating Actions */}
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
