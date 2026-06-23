import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Pages.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      content: 'priyanshupanwar@email.com',
      link: 'mailto:priyanshupanwar@email.com',
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      content: '+917078041562',
      link: 'tel:+917078041562',
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      content: 'Bennett University, Greater Noida',
      link: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <div className="contact-container">
      {/* Hero Section */}
      <motion.div
        className="contact-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Get In Touch</h1>
        <p>
          Have questions about our emergency prediction system? We'd love to hear from you.
          Reach out to our team for technical support, partnerships, or feedback.
        </p>
      </motion.div>

      {/* Contact Content */}
      <motion.div
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contact Info */}
        <motion.div className="contact-info">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              className="info-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="info-icon" style={{ color: index === 0 ? '#FF6B6B' : index === 1 ? '#4ECDC4' : '#45B7D1' }}>
                {info.icon}
              </div>
              <h3>{info.title}</h3>
              <p>{info.content}</p>
            </motion.a>
          ))}

          {/* Additional Info */}
          <motion.div
            className="info-card"
            variants={itemVariants}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))',
              borderColor: 'rgba(255, 107, 107, 0.2)',
            }}
          >
            <h3>Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </motion.div>

          {/* Team Info */}
          <motion.div
            className="info-card"
            variants={itemVariants}
          >
            <h3>Project Lead</h3>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}> Priyanshu Panwar</p>
            <p style={{ fontSize: '0.9rem', color: '#A0A9B8' }}>
              Big Data Engineer & AI Specialist
            </p>
            <p style={{ fontSize: '0.9rem', color: '#A0A9B8' }}>
              Bennett University, Greater Noida
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="contact-form"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send us a Message</h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                padding: '2rem',
                textAlign: 'center',
                background: 'rgba(78, 205, 196, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(78, 205, 196, 0.3)',
              }}
            >
              <p style={{ fontSize: '1.2rem', color: '#4ECDC4', fontWeight: 700, marginBottom: '0.5rem' }}>
                ✓ Message Sent Successfully!
              </p>
              <p style={{ color: '#A0A9B8' }}>
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Priyanshu"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your thoughts, questions, or feedback..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend style={{ display: 'inline', marginRight: '0.5rem' }} />
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>

      {/* FAQ Section */}
      <motion.section style={{ marginTop: '4rem' }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to common questions</p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            {
              question: 'How accurate is your prediction model?',
              answer: 'Our model achieves 95% accuracy in predicting high-risk areas and times for accidents.',
            },
            {
              question: 'What data sources do you use?',
              answer: 'We analyze historical accident data from data.gov.in and combine it with real-time incident reports.',
            },
            {
              question: 'Is my data secure?',
              answer: 'Yes, we use enterprise-grade encryption and comply with all data privacy regulations.',
            },
            {
              question: 'How quickly do you respond to incidents?',
              answer: 'Our system provides alerts in less than 2 minutes, enabling faster emergency response.',
            },
            {
              question: 'Can we integrate this with our systems?',
              answer: 'Yes, we offer comprehensive API documentation and support for custom integrations.',
            },
            {
              question: 'What support do you offer?',
              answer: 'We provide 24/7 technical support, training, and regular system updates.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 style={{ color: '#FF6B6B', marginBottom: '0.5rem' }}>Q: {item.question}</h3>
              <p style={{ color: '#A0A9B8' }}>A: {item.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="cta-section" style={{ marginTop: '4rem' }}>
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Let's Work Together</h2>
          <p>Transform emergency management in your organization</p>
          <motion.button
            className="btn btn-primary btn-large"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 107, 107, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Free Consultation
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Contact;
