# 🚑 Emergency Predictor - Quick Setup Guide

## ✨ What's New!

Your Emergency Predictor website has been completely transformed into a **modern, professional, and fully animated** platform!

### 🎯 What Was Built

1. **Professional Home Page** - Hero section with animations, features showcase, statistics, and testimonials
2. **Interactive Dashboard** - Charts, data visualization, and real-time statistics
3. **Company About Page** - Team profiles, technology stack, achievements, and timeline
4. **Contact Page** - Full contact form, FAQs, and business information
5. **Enhanced Navigation** - Beautiful navbar with theme toggle and mobile menu
6. **Professional Footer** - Multi-section footer with newsletter signup
7. **Advanced Animations** - 30+ animations using Framer Motion throughout the site
8. **Responsive Design** - Perfect on desktop, tablet, and mobile devices

---

## 🚀 Quick Start

### 1. Install Dependencies (if needed)
```bash
cd frontend
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will open at: `http://localhost:5174`

### 3. Build for Production
```bash
npm run build
```

---

## 📱 Pages Available

| Page | URL | Features |
|------|-----|----------|
| **Home** | `/` | Hero, Features, Stats, Testimonials |
| **Dashboard** | `/dashboard` | Charts, Statistics, Data Tables |
| **About** | `/about` | Mission, Team, Timeline, Technology |
| **Contact** | `/contact` | Contact Form, FAQs, Company Info |

---

## 🎨 Features Showcase

### Home Page
- **Hero Section**: Animated gradient orbs, floating shapes, staggered text
- **Features**: 6 animated cards with hover effects and icon rotations
- **Stats**: 4 animated counters with color-coded borders
- **Testimonials**: 3 client reviews with smooth animations
- **CTA Section**: Call-to-action with hover effects

### Dashboard Page
- **Stats Cards**: 4 key metrics with icons (Alerts, Incidents, Regions, Response Time)
- **Line Chart**: Hourly incident trends with predicted vs actual
- **Pie Chart**: Risk level distribution (High/Medium/Low)
- **Region Stats**: 4 regions with incident counts and trends
- **Data Table**: Real-time data from your JSON file

### About Page
- **Mission Section**: Company goals and values
- **Technology Stack**: 4 key technologies used
- **Achievements**: Performance metrics
- **Timeline**: 4 project phases (Completed, Live status)
- **Team**: 4 team member profiles with roles

### Contact Page
- **Contact Info**: Email, Phone, Location, Office Hours
- **Contact Form**: Name, Email, Subject, Message fields
- **Form Validation**: Real-time validation and success feedback
- **FAQs**: 6 common questions with answers

---

## 🎬 Animation Highlights

### Scroll-Triggered Animations
- Elements fade in and slide up as you scroll
- Staggered animations for card grids
- Scale animations on card hover

### Interactive Effects
- Mouse-tracking gradient orbs on home hero
- Icon 360° rotation on hover
- Card lift effect (-10px) on hover
- Button scale animations (1.05x on hover, 0.95x on click)

### Continuous Animations
- Floating shape animation (8-second loop)
- Pulsing stat cards
- Shimmer effects on cards

---

## 🎨 Theme Customization

### Colors (in Pages.css)
- **Primary Color**: `#FF6B6B` (Red) - Change for brand color
- **Secondary Color**: `#4ECDC4` (Teal) - Accent color
- **Dark Background**: `#0F1419` - Main background

### Dark/Light Mode
- Click the sun/moon icon in navbar to toggle
- Preferences are saved in browser

---

## 📊 Dashboard Data

The dashboard pulls from: `public/data/risk_summary.json`

**Format Example:**
```json
[
  {
    "location": "Region Name",
    "latitude": 28.5355,
    "longitude": 77.3910,
    "risk_level": "high",
    "incidents": 156
  }
]
```

---

## 🔧 Customization Guide

### Change Colors
Edit `src/pages/Pages.css` (lines 1-15):
```css
:root {
  --primary-color: #FF6B6B;      /* Change this */
  --secondary-color: #4ECDC4;    /* Or this */
}
```

### Change Text/Content
Edit specific page files:
- Home: `src/pages/Home.jsx` (lines 1-50)
- Dashboard: `src/pages/Dashboard.jsx` (lines 1-50)
- About: `src/pages/About.jsx` (lines 1-50)
- Contact: `src/pages/Contact.jsx` (lines 1-50)

### Add New Pages
1. Create file: `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
```jsx
import NewPage from "./pages/NewPage";
// In Routes:
<Route path="/newpage" element={<NewPage />} />
```
3. Add link in Navbar: `src/components/Navbar.jsx`

---

## 📈 Performance Tips

1. **Images**: Use optimized formats (WebP, SVG)
2. **Data**: Load large datasets progressively
3. **Scripts**: Code is already split and optimized

---

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use 5174, 5175, etc.

### Module Errors
```bash
npm install
# Then try again
```

### Build Errors
```bash
npm run build
# Check terminal for specific errors
```

---

## 📱 Mobile Responsive

✅ **Tested on:**
- Desktop (1920px, 1366px)
- Tablet (768px)
- Mobile (480px, 375px)

The navbar automatically converts to a hamburger menu on mobile!

---

## 🎓 Technology Stack

- **React 19** - UI Framework
- **Vite 7** - Build Tool
- **Framer Motion** - Animations
- **Recharts** - Charts
- **React Router** - Navigation
- **React Icons** - Icon Library

---

## 📞 Contact & Support

**Developer**: Priyanshu Panwar
**Email**: priyanshupanwar@email.com
**Institution**: Bennett University, Greater Noida

---

## 📋 Checklist for Launch

- ✅ All pages created and styled
- ✅ Animations implemented throughout
- ✅ Responsive design tested
- ✅ Contact form working
- ✅ Dashboard displaying data
- ✅ Theme toggle functional
- ✅ Mobile menu working
- ✅ Performance optimized

---

**Ready to go live!** 🚀

For more details, see `PROJECT_DOCUMENTATION.md`
