import { motion } from 'framer-motion';
import { FiCode, FiBarChart2, FiDatabase, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi';
import './Pages.css';

function About() {
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

  const technologies = [
    {
      icon: <FiDatabase size={32} />,
      name: 'PySpark',
      description: 'Big data processing and analysis on Google Colab',
    },
    {
      icon: <FiCode size={32} />,
      name: 'React.js',
      description: 'Modern frontend framework for interactive UI',
    },
    {
      icon: <FiBarChart2 size={32} />,
      name: 'Power BI',
      description: 'Advanced analytics and data visualization',
    },
    {
      icon: <FiTrendingUp size={32} />,
      name: 'Machine Learning',
      description: 'Predictive models for accident prevention',
    },
  ];

  const team = [
    {
      name: 'Dr. Priyanshu Panwar',
      role: 'Lead Developer & Project Lead',
      emoji: '👨‍💼',
      bio: 'Big data engineer specializing in predictive analytics',
    },
    {
      name: 'Data Science Team',
      role: 'Model Development',
      emoji: '👩‍🔬',
      bio: 'Experts in machine learning and statistical analysis',
    },
    {
      name: 'Frontend Team',
      role: 'UI/UX Development',
      emoji: '👨‍💻',
      bio: 'Creative developers building modern interfaces',
    },
    {
      name: 'DevOps Team',
      role: 'Infrastructure',
      emoji: '⚙️',
      bio: 'System engineers ensuring reliability and performance',
    },
  ];

  const timeline = [
    {
      phase: 'Phase 1',
      title: 'Data Collection & Preparation',
      description: 'Gathered 500K+ accident records from data.gov.in and performed initial data cleaning using PySpark',
      status: 'Completed',
    },
    {
      phase: 'Phase 2',
      title: 'Analysis & Model Development',
      description: 'Built predictive models to identify high-risk regions and time periods',
      status: 'Completed',
    },
    {
      phase: 'Phase 3',
      title: 'Dashboard Development',
      description: 'Created interactive React dashboard with real-time analytics visualization',
      status: 'Completed',
    },
    {
      phase: 'Phase 4',
      title: 'Deployment & Optimization',
      description: 'Deployed to production with performance optimization and monitoring',
      status: 'Live',
    },
  ];

  const achievements = [
    { icon: '🎯', label: '95% Prediction Accuracy', value: '+0.15x improvement' },
    { icon: '⚡', label: '2 Min Response Time', value: 'Real-time updates' },
    { icon: '🌍', label: '500+ Regions', value: 'Global coverage' },
    { icon: '📊', label: '500K+ Records', value: 'Big data analysis' },
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Our Project</h1>
        <p>
          Emergency Accident Prediction System - A cutting-edge big data solution combining PySpark,
          Machine Learning, and modern web technologies to save lives through intelligent prediction
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.section
        className="mission-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div className="mission-content" variants={itemVariants}>
          <h2>Our Mission</h2>
          <p>
            To revolutionize emergency response systems by leveraging artificial intelligence and big data analytics
            to predict accident-prone areas and times before incidents occur.
          </p>
          <p>
            We believe that through data-driven insights, we can significantly reduce response times, increase
            emergency preparedness, and ultimately save lives in our communities.
          </p>
          <motion.div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {['Research', 'Innovation', 'Community', 'Excellence'].map((value, index) => (
              <motion.span
                key={index}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(255, 107, 107, 0.1)',
                  border: '1px solid rgba(255, 107, 107, 0.3)',
                  borderRadius: '20px',
                  color: '#FF6B6B',
                  fontWeight: 600,
                }}
                whileHover={{ scale: 1.05 }}
              >
                ✓ {value}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="mission-image"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          🏥
        </motion.div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section style={{ marginBottom: '4rem' }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Our Technology Stack</h2>
          <p>Built with cutting-edge technologies for optimal performance</p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="feature-icon"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {tech.icon}
              </motion.div>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section style={{ marginBottom: '4rem' }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Our Achievements</h2>
          <p>Proven results and impact</p>
        </motion.div>

        <motion.div
          className="stats-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{achievement.icon}</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.3rem' }}>{achievement.label}</p>
              <p style={{ color: '#A0A9B8', fontSize: '0.9rem' }}>{achievement.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section style={{ marginBottom: '4rem' }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Project Development Timeline</h2>
          <p>From conception to production</p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(255, 107, 107, 0.1)',
                borderRadius: '20px',
                color: '#FF6B6B',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '1rem',
              }}>
                {item.phase}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                color: item.status === 'Live' ? '#4ECDC4' : '#FFA07A',
                fontWeight: 700,
              }}>
                Status: {item.status}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <motion.section className="team-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Meet Our Team</h2>
          <p>Dedicated professionals driving innovation</p>
        </motion.div>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-member"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="member-avatar">{member.emoji}</div>
              <h3>{member.name}</h3>
              <p style={{ color: '#FF6B6B', fontWeight: 600, marginBottom: '0.5rem' }}>
                {member.role}
              </p>
              <p>{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Ready to Experience the Future of Emergency Management?</h2>
          <p>Join us in our mission to save lives through intelligent prediction</p>
          <motion.button
            className="btn btn-primary btn-large"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 107, 107, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default About;
