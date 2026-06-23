# 💻 Code Examples & Implementation Details

## 📚 Table of Contents
1. Animation Patterns
2. Component Structure
3. Styling Examples
4. Form Implementation
5. Data Visualization
6. Responsive Design

---

## 🎬 Animation Patterns Used

### 1. Stagger Container (Parent)
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,        // Delay between children
      delayChildren: 0.3,          // Initial delay
    },
  },
};
```

### 2. Item Variants (Children)
```jsx
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};
```

### 3. Usage in JSX
```jsx
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
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
    >
      {/* Content */}
    </motion.div>
  ))}
</motion.div>
```

### 4. Hover Effects
```jsx
<motion.button
  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,107,107,0.4)' }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

### 5. Continuous Animations
```jsx
<motion.div
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
```

### 6. Scroll-Triggered Animations
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, margin: '-100px' }}
>
  Appears when scrolled into view!
</motion.div>
```

---

## 🏗️ Component Structure

### Basic Component Template
```jsx
import { motion } from 'framer-motion';
import './ComponentName.css';

const ComponentName = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="component"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {/* Content */}
    </motion.div>
  );
};

export default ComponentName;
```

### With State Management
```jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
      />
      {/* More fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
```

---

## 🎨 Styling Examples

### CSS Variables Setup
```css
:root {
  --primary-color: #FF6B6B;
  --secondary-color: #4ECDC4;
  --dark-bg: #0F1419;
  --text-primary: #FFFFFF;
  --text-secondary: #A0A9B8;
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Glassmorphism Effect
```css
.card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, #FF6B6B, #FF5252);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Responsive Grid
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
```

### Smooth Transitions
```css
.btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

---

## 📋 Form Implementation

### Complete Form Component
```jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields');
      return;
    }
    
    // Submit
    console.log('Form data:', formData);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <motion.form onSubmit={handleSubmit}>
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          ✓ Message Sent Successfully!
        </motion.div>
      ) : (
        <>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows="5"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiSend /> Send Message
          </motion.button>
        </>
      )}
    </motion.form>
  );
};

export default ContactForm;
```

### Form CSS
```css
.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
}
```

---

## 📊 Data Visualization with Recharts

### Line Chart
```jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
      <XAxis dataKey="name" stroke="#A0A9B8" />
      <YAxis stroke="#A0A9B8" />
      <Tooltip 
        contentStyle={{
          background: 'rgba(15, 20, 25, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
        }}
      />
      <Legend />
      <Line 
        type="monotone" 
        dataKey="value" 
        stroke="#FF6B6B" 
        strokeWidth={2}
        dot={{ r: 4 }}
      />
    </LineChart>
  </ResponsiveContainer>
);
```

### Pie Chart
```jsx
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PieChartComponent = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={({ name, value }) => `${name}: ${value}%`}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);
```

---

## 📱 Responsive Design Patterns

### Mobile-First Approach
```css
/* Base mobile styles */
.container {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

/* Desktop and up */
@media (min-width: 1200px) {
  .container {
    padding: 2rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
```

### Flexible Navigation
```jsx
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand">Logo</div>
      
      {/* Desktop Menu */}
      <div className="nav-links desktop">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>

      {/* Mobile Menu */}
      <motion.div
        className="nav-links mobile"
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
      >
        <a href="/">Home</a>
        <a href="/about">About</a>
      </motion.div>
    </nav>
  );
};
```

---

## 🔧 Utility Functions

### Smooth Scroll to Top
```jsx
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
```

### Format Number
```jsx
const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num);
};

// Usage: formatNumber(1000) → "1,000"
```

### Debounce Function
```jsx
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
```

### Theme Toggle
```jsx
const toggleTheme = () => {
  const current = localStorage.getItem('theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  document.body.className = next;
};
```

---

## 🎯 Performance Tips

### 1. Code Splitting
```jsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));

<Suspense fallback={<Loading />}>
  <Dashboard />
</Suspense>
```

### 2. Memoization
```jsx
import { memo } from 'react';

const Card = memo(({ title, description }) => (
  <div>{title}: {description}</div>
));
```

### 3. useCallback for Event Handlers
```jsx
import { useCallback } from 'react';

const MyComponent = () => {
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  return <button onClick={handleClick}>Click</button>;
};
```

---

## 📦 Export Snippets for Reuse

### Hero Card Component
```jsx
const HeroCard = ({ icon, title, description }) => (
  <motion.div
    className="feature-card"
    whileHover={{ y: -10 }}
  >
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);
```

### Stat Display
```jsx
const StatDisplay = ({ value, label, color }) => (
  <motion.div
    className="stat-card"
    whileHover={{ scale: 1.08 }}
  >
    <h3 style={{ color }}>{value}</h3>
    <p>{label}</p>
  </motion.div>
);
```

---

**Happy Coding! 🚀**
