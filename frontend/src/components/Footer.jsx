import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ['Features', 'Dashboard', 'Analytics', 'Pricing'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Documentation', 'API Docs', 'Support', 'Community'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Security'],
  };

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: '#', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <FiTwitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <FiMail size={20} />, href: 'mailto:priyanshupanwar@email.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Brand Section */}
        <motion.div className="footer-section footer-brand" variants={itemVariants}>
          <h3 style={{ marginBottom: '1rem' }}>🚑 Emergency Predictor</h3>
          <p>
            Advanced AI-powered emergency management system protecting communities worldwide.
          </p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                title={link.label}
                whileHover={{ scale: 1.2, color: '#FF6B6B' }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Links Sections */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <motion.div key={category} className="footer-section" variants={itemVariants}>
            <h4>{category}</h4>
            <ul>
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: '#FF6B6B' }}
                  transition={{ type: 'spring', damping: 10 }}
                >
                  <a href="#">{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Newsletter Section */}
        <motion.div className="footer-section footer-newsletter" variants={itemVariants}>
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom Section */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="footer-bottom-content">
          <p>
            © {currentYear} Emergency Predictor | Developed by Priyanshu Panwar | Bennett University
          </p>
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 107, 107, 0.2)' }}
            whileTap={{ scale: 0.9 }}
            title="Scroll to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
}
