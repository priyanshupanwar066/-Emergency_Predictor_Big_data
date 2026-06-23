import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiShield, FiTrendingUp, FiAlertCircle, FiUsers, FiGlobe, FiZap } from 'react-icons/fi';
import './Pages.css';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <FiShield size={40} />,
      title: 'Real-Time Protection',
      description: 'Advanced algorithms monitor and predict emergency risks in real-time with 95% accuracy.',
    },
    {
      icon: <FiTrendingUp size={40} />,
      title: 'Data Analytics',
      description: 'Comprehensive analytics dashboard for tracking trends and patterns in emergency data.',
    },
    {
      icon: <FiAlertCircle size={40} />,
      title: 'Smart Alerts',
      description: 'Intelligent alert system that notifies you before emergencies become critical.',
    },
    {
      icon: <FiUsers size={40} />,
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team and share insights across departments.',
    },
    {
      icon: <FiGlobe size={40} />,
      title: 'Global Coverage',
      description: 'Monitor emergency patterns across 500+ regions worldwide simultaneously.',
    },
    {
      icon: <FiZap size={40} />,
      title: 'Lightning Fast',
      description: 'Response time under 2 minutes with our optimized infrastructure.',
    },
  ];

  const stats = [
    { label: 'Lives Protected', value: '100K+', color: '#FF6B6B' },
    { label: 'Regions Covered', value: '500+', color: '#4ECDC4' },
    { label: 'Incidents Prevented', value: '95%', color: '#45B7D1' },
    { label: 'Response Time', value: '< 2 min', color: '#FFA07A' },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Hospital Director',
      text: 'This platform has revolutionized our emergency response capabilities. We\'ve reduced response times by 40%.',
      image: '👩‍⚕️',
    },
    {
      name: 'Michael Chen',
      role: 'Emergency Services Chief',
      text: 'The predictive analytics give us the edge we need to stay ahead of critical situations.',
      image: '👨‍🚒',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Data Analyst',
      text: 'Intuitive interface with powerful insights. This is the future of emergency management.',
      image: '👩‍💼',
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <motion.div
            className="gradient-orb orb-1"
            animate={{
              x: mousePosition.x * 0.05,
              y: mousePosition.y * 0.05,
            }}
            transition={{ type: 'spring', damping: 30 }}
          />
          <motion.div
            className="gradient-orb orb-2"
            animate={{
              x: -mousePosition.x * 0.03,
              y: -mousePosition.y * 0.03,
            }}
            transition={{ type: 'spring', damping: 30 }}
          />
        </div>

        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="badge">
            🚀 Next Generation Emergency Management
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Emergency Risk <span className="gradient-text">Predictor</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Advanced AI-powered system to predict and prevent emergency accidents before they happen. 
            Protect your community with intelligent foresight and real-time analytics.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 107, 107, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <FiArrowRight className="btn-icon" />
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">100K+</span>
              <span className="stat-label">Users Active</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Regions</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Accuracy</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated Shape */}
        <motion.div
          className="floating-shape"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </section>

      {/* Features Section */}
      <section className="features-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Why Choose Our Platform?</h2>
          <p>Experience the next generation of emergency management with cutting-edge AI technology</p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              }}
              transition={{ type: 'spring', damping: 10 }}
            >
              <motion.div
                className="feature-icon"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Our Impact</h2>
          <p>Trusted by organizations worldwide to save lives</p>
        </motion.div>

        <motion.div
          className="stats-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              style={{ borderTopColor: stat.color }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <h3 style={{ color: stat.color }}>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>What Our Clients Say</h2>
          <p>Join hundreds of satisfied organizations transforming emergency management</p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.image}</div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-rating">
                {'⭐'.repeat(5)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Ready to Protect Your Community?</h2>
          <p>Join thousands of organizations using our platform to save lives and prevent emergencies</p>
          <motion.button
            className="btn btn-primary btn-large"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 107, 107, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
