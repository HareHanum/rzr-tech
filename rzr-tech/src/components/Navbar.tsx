import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-scroll";

interface NavbarProps {
  scrolled: boolean;
  theme: "light" | "dark";
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
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { name: "Home", to: "hero", offset: -70 },
    { name: "Services", to: "services", offset: -70 },
    { name: "Benefits", to: "benefits", offset: -70 },
    { name: "Portfolio", to: "portfolio", offset: -70 },
    { name: "Testimonials", to: "testimonials", offset: -70 },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link to="hero" smooth={true} duration={500}>
            <span className="logo-text">
              RZR <span className="text-gradient">Technologies</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className={`navbar-links ${isOpen && mobileView ? "show" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                  onClick={mobileView ? toggleMenu : undefined}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="navbar-actions">
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </motion.button>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-primary navbar-cta"
          >
            Contact Us
          </Link>

          <motion.button
            className="mobile-menu-toggle"
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
