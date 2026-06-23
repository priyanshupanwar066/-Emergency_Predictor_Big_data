import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu as MenuIcon, FiX as CloseIcon } from "react-icons/fi";
import "../styles/Navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-container">
        {/* Brand */}
        <motion.div
          className="brand"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", color: "inherit" }}>
            <span style={{ fontSize: "1.5rem" }}>🚑</span>
            <span>Emergency Predictor</span>
          </Link>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="nav-links desktop">
          {navLinks.map((link, i) => (
            <motion.div key={link.path} custom={i} variants={linkVariants} initial="hidden" animate="visible">
              <NavLink
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <motion.button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Toggle theme"
          >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      <motion.div
        className="nav-links mobile"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            {link.label}
          </NavLink>
        ))}
      </motion.div>
    </motion.nav>
  );
}
