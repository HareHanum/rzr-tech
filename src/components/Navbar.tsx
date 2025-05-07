import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { Element, Link } from 'react-scroll';

interface NavbarProps {
  scrolled: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar = ({ scrolled, theme, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Services', to: 'services' },
    { name: 'Benefits', to: 'benefits' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Testimonials', to: 'testimonials' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="#hero" className="logo-link">
            <span className="logo-text">RZR Technologies</span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                className="nav-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={`#${link.to}`} className="nav-link">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </motion.button>

          <a href="#contact" className="contact-button">
            Contact Us
          </a>

          <motion.button
            className="menu-toggle"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;