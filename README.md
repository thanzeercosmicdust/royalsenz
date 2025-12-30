# ROYALSENZ Electric Scooter Website

A modern, high-quality static responsive website for ROYALSENZ Electric Scooter showroom, built with pure HTML, CSS, and vanilla JavaScript.

## 🎨 Design Features

- **Premium, Clean, Futuristic Design** - Nature-inspired eco-forest theme
- **Responsive Layout** - Fully responsive design supporting mobile, tablet, and desktop views
- **Smooth Animations** - Fade-in scroll animations and smooth transitions
- **Modern UI/UX** - Rounded edges, soft shadows, and premium color palette

## 🎨 Color Palette

- **Forest Green**: `#0C6B32`
- **Eco Lime**: `#63D471`
- **White**: `#FFFFFF`
- **Dark Grey**: `#1A1A1A`

## 📁 Project Structure

```
.
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── images/             # Image assets folder
│   └── README.md      # Image requirements guide
└── README.md          # This file
```

## 🚀 Features

### Home Page
- Full-width hero banner with eco-forest background
- Features section (Range, Warranty, EMI, Exchange, Battery Options)
- Offers & EMI Calculator section
- Scooter models showcase (6 model cards)
- Testimonials slider
- Google Maps integration
- Footer with social icons

### About Page
- Brand story section
- Mission and values
- Sustainability commitment
- Showroom gallery (6 images)

### Contact Page
- Contact form (Name, Phone, Message)
- Contact information display
- WhatsApp CTA button
- Test ride booking form
- Google Maps integration
- Social media links

### Navigation
- Responsive sticky navbar
- Mobile hamburger menu
- Smooth scrolling
- Active link highlighting

### Floating Elements
- Floating WhatsApp contact button
- Floating "Book Test-Ride" CTA button

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, flexbox, and grid
- **Vanilla JavaScript** - No frameworks, pure JavaScript
- **Google Fonts** - Poppins and Montserrat fonts

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Setup Instructions

1. **Clone or download** this repository
2. **Add images** to the `images/` folder (see `images/README.md` for requirements)
3. **Update contact information** in HTML files:
   - Phone numbers
   - Email addresses
   - Physical address
   - WhatsApp number
   - Google Maps embed URL
4. **Customize content** as needed:
   - Model names and specifications
   - Testimonials
   - About page content
   - Offers and pricing

## 🔧 Customization Guide

### Updating Contact Information

Search and replace the following placeholders:
- `+91 XXXXX XXXXX` - Replace with actual phone numbers
- `info@royalsenz.com` - Replace with actual email
- `[Your Showroom Address Here]` - Replace with actual address
- `91XXXXXXXXXX` - Replace with actual WhatsApp number (in href attributes)
- Google Maps embed URL - Replace with your showroom location

### Adding Images

1. Place all images in the `images/` folder
2. Ensure images follow the naming convention mentioned in `images/README.md`
3. Optimize images for web (recommended: JPG format, compressed but high quality)

### Modifying Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --forest-green: #0C6B32;
    --eco-lime: #63D471;
    --white: #FFFFFF;
    --dark-grey: #1A1A1A;
}
```

### Adding New Sections

All sections use the `.fade-in` class for scroll animations. Simply add the class to new elements and they will automatically animate on scroll.

## 📋 Form Handling

Currently, forms show success/error messages but don't actually submit data. To enable form submissions:

1. Set up a backend service (PHP, Node.js, etc.)
2. Update form action attributes
3. Modify JavaScript form handlers in `script.js`

## 🗺️ Google Maps Integration

To add your showroom location:

1. Go to [Google Maps](https://www.google.com/maps)
2. Find your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `index.html` and `contact.html`

## 📞 Support

For questions or customization help, please refer to the commented sections in the code files.

## 📄 License

This project is created for ROYALSENZ Electric Scooter. All rights reserved.

## ✨ Key Features Implemented

✅ Responsive design (mobile, tablet, desktop)
✅ Smooth scrolling navigation
✅ Scroll-triggered animations
✅ Mobile hamburger menu
✅ Testimonials auto-slider
✅ EMI calculator
✅ Contact form validation
✅ Test ride booking form
✅ Floating WhatsApp button
✅ Floating test ride CTA
✅ Google Maps integration
✅ SEO-ready meta tags
✅ Social media integration
✅ Premium color scheme
✅ Modern typography (Poppins/Montserrat)
✅ Rounded edges and soft shadows
✅ Nature-inspired eco-forest theme

---

**Built with ❤️ for ROYALSENZ Electric Scooter**

