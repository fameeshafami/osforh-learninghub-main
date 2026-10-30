import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../img/b9c795b6-7732-4f8b-ad73-409c570795f8.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Programs', path: '/programs' },
    { name: 'Why Osforh', path: '/why-osforh' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className={scrolled ? 'sc' : ''} id="nav">
        <div className="wrap">
          <Link to="/" className="brand" aria-label="Osforh Learning Hub">
            <img className="brand-logo" src={logo} alt="" />
          </Link>

          <div className="nl" id="nl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={isActive(link.path) ? 'on' : ''}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Link className="btn sm" to="/contact">Apply Now</Link>
            <button
              className="ham"
              id="ham"
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i></i>
              <i></i>
              <i></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <div className={`mm ${menuOpen ? 'on' : ''}`} id="mm">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={isActive(link.path) ? 'on' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          className="btn"
          style={{ marginTop: '20px', alignSelf: 'flex-start' }}
          onClick={() => setMenuOpen(false)}
        >
          Apply Now →
        </Link>
      </div>
    </>
  );
}
