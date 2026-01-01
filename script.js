/* ============================================
   ROYALSENZ Electric Scooter - JavaScript
   Smooth Scrolling, Animations, Interactions
   ============================================ */

// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===== Smooth Scrolling for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#' || href === '#!') {
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Scroll Animation (Fade-in) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ===== Testimonials Slider =====
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelectorAll('.dot');
let currentTestimonial = 0;

function showTestimonial(index) {
    // Hide all testimonials
    testimonialCards.forEach(card => {
        card.classList.remove('active');
    });
    
    // Remove active class from all dots
    testimonialDots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show selected testimonial
    if (testimonialCards[index]) {
        testimonialCards[index].classList.add('active');
    }
    
    // Activate corresponding dot
    if (testimonialDots[index]) {
        testimonialDots[index].classList.add('active');
    }
    
    currentTestimonial = index;
}

// Auto-play testimonials
function autoPlayTestimonials() {
    if (testimonialCards.length > 0) {
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            showTestimonial(currentTestimonial);
        }, 5000); // Change every 5 seconds
    }
}

// Initialize testimonials slider
if (testimonialDots.length > 0) {
    // Add click event to dots
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Start auto-play
    autoPlayTestimonials();
}

// ===== EMI Calculator =====
const emiForm = document.getElementById('emiForm');
const emiResult = document.getElementById('emiResult');

if (emiForm) {
    emiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const loanAmount = parseFloat(document.getElementById('loanAmount').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value);
        const tenure = parseInt(document.getElementById('tenure').value);
        
        if (loanAmount && interestRate && tenure) {
            // Calculate EMI
            const monthlyRate = interestRate / 12 / 100;
            const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
                       (Math.pow(1 + monthlyRate, tenure) - 1);
            
            const totalAmount = emi * tenure;
            const totalInterest = totalAmount - loanAmount;
            
            // Display result
            emiResult.innerHTML = `
                <h4>EMI Calculation Result</h4>
                <p><strong>Monthly EMI:</strong> ₹${emi.toFixed(2)}</p>
                <p><strong>Total Amount:</strong> ₹${totalAmount.toFixed(2)}</p>
                <p><strong>Total Interest:</strong> ₹${totalInterest.toFixed(2)}</p>
            `;
            emiResult.classList.add('show');
            
            // Scroll to result
            emiResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            emiResult.innerHTML = '<p style="color: #ff0000;">Please fill all fields correctly.</p>';
            emiResult.classList.add('show');
        }
    });
}

// ===== Download Brochure Button =====
const downloadBrochure = document.getElementById('downloadBrochure');

if (downloadBrochure) {
    downloadBrochure.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            // Fetch the PDF file
            const response = await fetch('doc/brochure.pdf');
            const blob = await response.blob();
            
            // Create a blob URL and trigger download
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'ROYALSENZ_Brochure.pdf';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            
            // Clean up
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading brochure:', error);
            // Fallback: open in new tab if download fails
            window.open('doc/brochure.pdf', '_blank');
        }
    });
}

// ===== Active Navigation Link Highlighting =====
function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const linkPath = new URL(link.href).pathname;
        const linkHash = new URL(link.href).hash;
        
        // Check if it's the current page
        if (currentPath === linkPath || 
            (currentPath.endsWith('index.html') && linkPath.endsWith('index.html')) ||
            (currentPath.endsWith('about.html') && linkPath.endsWith('about.html')) ||
            (currentPath.endsWith('contact.html') && linkPath.endsWith('contact.html'))) {
            link.classList.add('active');
        }
        
        // Check for hash matches
        if (currentHash && linkHash === currentHash) {
            link.classList.add('active');
        }
    });
}

// Update on page load
updateActiveNavLink();

// Update on hash change
window.addEventListener('hashchange', updateActiveNavLink);

// ===== Lazy Loading Images (if needed) =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Prevent Form Submission on Enter (for better UX) =====
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            // Allow Enter in textareas, but prevent in other inputs
            if (e.target.type !== 'submit') {
                e.preventDefault();
            }
        }
    });
});

// ===== Console Welcome Message =====
console.log('%cROYALSENZ Electric Scooter', 'color: #0C6B32; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to our website!', 'color: #63D471; font-size: 14px;');
console.log('%cFor inquiries, please contact us at info@royalsenz.com', 'color: #666; font-size: 12px;');

