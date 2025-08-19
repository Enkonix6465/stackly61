# Stackly AI Tools Website

## Overview
A complete, responsive website for Stackly - an AI tools and solutions company. The website features professional design, smooth animations, and comprehensive functionality including user authentication, admin dashboard, and responsive layout.

## 🌟 Features

### Core Features
- **Sticky Header** with smooth scroll animation
- **Responsive Design** for all devices (desktop, tablet, mobile)
- **Professional Color Scheme** (Blue primary, White, Black)
- **Smooth Animations** on scroll and hover
- **50px Equal Padding** on all sections
- **Justified Text** throughout the website
- **Image-Content Balance** with proper space allocation

### Navigation Structure
- **Home Dropdown**: Home 1 (index.html), Home 2 (home2.html)
- **About Page**: Company information and team details
- **Services Dropdown**: 
  - All Services (services.html)
  - 6 Individual Services (service1-6.html)
- **Blog Dropdown**: 
  - All Posts (blog.html)
  - 3 Individual Posts (blog1-3.html)
- **Contact Page**: Contact form and information
- **Login System**: Admin authentication

### Authentication System
- **Admin Credentials**:
  - Username: `admin@enkonix.in`
  - Password: `admin123`
- **Admin Dashboard**: Protected area with system overview
- **Forgot Password**: Password reset functionality
- **Logout System**: Secure session management

### Additional Pages
- **404 Error Page**: Custom error handling
- **Forgot Password**: Email-based password reset
- **Admin Dashboard**: Complete admin interface with 6 sections + contact banner

## 📁 File Structure

```
stackly-ai-website/
├── index.html                 # Main home page (Home 1)
├── home2.html                # Alternate home page
├── about.html                # About company page
├── contact.html              # Contact page with form
├── login.html                # Login page
├── admin-dashboard.html      # Admin dashboard (protected)
├── forgot-password.html      # Password reset page
├── 404.html                  # Error page
├── services.html             # Main services page
├── service1.html             # AI Development
├── service2.html             # Machine Learning
├── service3.html             # Data Analytics
├── service4.html             # Process Automation
├── service5.html             # AI Consulting
├── service6.html             # AI Integration
├── blog.html                 # Main blog page
├── blog1.html                # AI Trends 2024
├── blog2.html                # Future of ML
├── blog3.html                # AI in Business
└── assets/
    ├── css/
    │   └── style.css         # Main stylesheet
    ├── js/
    │   └── script.js         # Main JavaScript
    └── images/
        └── README.md         # Image requirements
```

## 🎨 Design Specifications

### Color Scheme
- **Primary Color**: #2563eb (Blue)
- **Secondary Color**: #1e40af (Dark Blue)
- **Text Color**: #1f2937 (Dark Gray)
- **Background**: #f8fafc (Light Gray)
- **White**: #ffffff
- **Black**: #000000

### Typography
- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Line Height**: 1.6
- **Text Alignment**: Justified throughout

### Layout
- **Section Padding**: 50px on all sides
- **Container Max Width**: 1200px
- **Grid System**: CSS Grid and Flexbox
- **Responsive Breakpoints**: 768px (tablet), 480px (mobile)

### Animations
- **Fade Up**: Elements fade in from bottom
- **Slide Left/Right**: Images slide in from sides
- **Counter Animation**: Numbers count up on scroll
- **Smooth Transitions**: 0.3s ease on all interactions

## 🔧 Setup Instructions

1. **Download/Clone** the project files
2. **Open `index.html`** in a web browser
3. **Test Navigation** through all pages
4. **Login Test**:
   - Go to login.html
   - Use credentials: admin@enkonix.in / admin123
   - Access admin dashboard
5. **Contact Form**: Fill and submit (demo functionality)
6. **Responsive Testing**: Resize browser or use device tools

## 📱 Pages Overview

### Main Pages (Each with 6 sections + Contact Banner)

#### 1. Home Page (index.html)
- Hero section with AI solutions introduction
- Features showcase (3 cards)
- Services overview with image
- Statistics with animated counters
- Client testimonials
- Call-to-action section
- Contact banner

#### 2. About Page (about.html)
- Company story and mission
- Core values (3 cards)
- Journey timeline
- Team statistics
- Technology leadership quotes
- Global impact
- Contact banner

#### 3. Contact Page (contact.html)
- Contact hero section
- Multiple contact methods (3 cards)
- Contact form with validation
- Business hours
- FAQ section
- Team information
- Contact banner

#### 4. Admin Dashboard (admin-dashboard.html)
- System overview with metrics
- Recent activities
- Performance analytics
- User management
- AI model status
- Reports & analytics
- Support contact banner

### Authentication Pages

#### Login Page (login.html)
- Clean login form
- Demo credentials display
- Forgot password link
- Responsive design

#### Forgot Password (forgot-password.html)
- Email input form
- Password reset simulation
- Back to login link

#### 404 Error Page (404.html)
- Creative 404 design
- Navigation suggestions
- Home and contact links

## 🛡️ Security Features

- **Client-side Authentication**: localStorage-based session
- **Route Protection**: Admin dashboard access control
- **Form Validation**: Contact and login forms
- **Error Handling**: 404 page and form errors
- **Password Reset**: Email validation simulation

## 📊 Technical Features

### CSS Features
- **CSS Custom Properties** (variables)
- **Flexbox and Grid** layouts
- **Media Queries** for responsiveness
- **Smooth animations** with keyframes
- **Professional shadows** and gradients
- **Hover effects** throughout

### JavaScript Features
- **Sticky Header** animation
- **Mobile Menu** toggle
- **Form Validation** and handling
- **Scroll Animations** (Intersection Observer)
- **Counter Animations** for statistics
- **Authentication System**
- **Local Storage** management

### Images
- **Unsplash Integration**: Professional stock photos
- **Responsive Images**: Proper sizing and optimization
- **Alt Text**: Accessibility compliance
- **Loading**: Optimized for web performance

## 🌐 Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Android Chrome
- **Features Used**: ES6+, CSS Grid, Flexbox, Intersection Observer
- **Fallbacks**: Graceful degradation for older browsers

## 📋 Testing Checklist

### Functionality Testing
- [ ] All navigation links work
- [ ] Login system functions (admin@enkonix.in/admin123)
- [ ] Admin dashboard access control
- [ ] Contact form submission
- [ ] Forgot password flow
- [ ] Mobile menu toggle
- [ ] Smooth scrolling
- [ ] Counter animations
- [ ] Responsive layout

### Content Testing
- [ ] All text is justified
- [ ] Images load properly
- [ ] Section padding is consistent (50px)
- [ ] Professional colors throughout
- [ ] Smooth animations on scroll
- [ ] Contact banner on every page

### Device Testing
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768px width)
- [ ] Mobile (375px width)

## 🚀 Deployment

1. **Static Hosting**: Upload all files to web server
2. **GitHub Pages**: Push to repository and enable Pages
3. **Netlify/Vercel**: Drag and drop folder
4. **Domain Setup**: Point domain to hosting service
5. **SSL Certificate**: Enable HTTPS

## 🔄 Future Enhancements

- Backend integration for authentication
- Database for blog posts and content
- Contact form email functionality
- SEO optimization and meta tags
- Performance optimization
- Advanced animations
- More interactive features

## 📞 Support

For any issues or questions about the website:
- Review the code structure
- Check browser console for errors
- Verify file paths and links
- Test in different browsers
- Ensure JavaScript is enabled

---

**Stackly AI Website** - A complete, professional AI tools company website with full functionality, responsive design, and smooth animations.

**Created**: 2024
**Theme**: AI Tools & Solutions
**Style**: Professional, Modern, Responsive
