// =========================================
// TECHSOLUTIONS - MAIN JAVASCRIPT
// =========================================

// ====== DOM Content Loaded ======
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initContactForm();
  initSmoothScroll();
  initScrollAnimations();
  initNavbarScroll();
  logPageView();
});

// ====== Mobile Menu Toggle ======
function initMobileMenu() {
  // Create mobile menu button if it doesn't exist
  const nav = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  
  if (nav && navLinks && window.innerWidth <= 768) {
    // Create hamburger button
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <line x1="3" y1="12" x2="21" y2="12" stroke-width="2"/>
        <line x1="3" y1="6" x2="21" y2="6" stroke-width="2"/>
        <line x1="3" y1="18" x2="21" y2="18" stroke-width="2"/>
      </svg>
    `;
    
    const navContent = document.querySelector('.nav-content');
    if (navContent && !document.querySelector('.mobile-menu-btn')) {
      navContent.insertBefore(menuBtn, navLinks);
      
      // Toggle menu on click
      menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('mobile-active');
        this.classList.toggle('active');
        
        // Change icon
        if (this.classList.contains('active')) {
          this.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18" stroke-width="2"/>
              <line x1="6" y1="6" x2="18" y2="18" stroke-width="2"/>
            </svg>
          `;
        } else {
          this.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="3" y1="12" x2="21" y2="12" stroke-width="2"/>
              <line x1="3" y1="6" x2="21" y2="6" stroke-width="2"/>
              <line x1="3" y1="18" x2="21" y2="18" stroke-width="2"/>
            </svg>
          `;
        }
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!nav.contains(e.target)) {
          navLinks.classList.remove('mobile-active');
          menuBtn.classList.remove('active');
        }
      });
    }
  }
}

// ====== Contact Form Handler ======
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Get form data
      const formData = new FormData(this);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        user_type: formData.get('user_type'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
      };
      
      // Validate
      if (!data.name || !data.email || !data.user_type || !data.message) {
        showNotification('Please fill in all required fields', 'error');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        return;
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        return;
      }
      
      // Simulate sending (replace with actual API call in production)
      setTimeout(() => {
        // Log to console (in production, send to backend/email service)
        console.log('Form submitted:', data);
        
        // Save to localStorage for demo
        try {
          const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
          submissions.push(data);
          localStorage.setItem('submissions', JSON.stringify(submissions));
        } catch (e) {
          console.error('Error saving to localStorage:', e);
        }
        
        // Show success notification
        showNotification('Thank you! We received your message. We\'ll be in touch shortly.', 'success');
        
        // Reset form
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Optional: Redirect after delay
        // setTimeout(() => {
        //   window.location.href = 'index.html';
        // }, 2000);
      }, 1500);
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(this);
      });
    });
  }
}

// ====== Field Validation ======
function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name;
  
  if (field.hasAttribute('required') && !value) {
    field.classList.add('error');
    return false;
  } else if (fieldName === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      field.classList.add('error');
      return false;
    }
  }
  
  field.classList.remove('error');
  return true;
}

// ====== Notification System ======
function showNotification(message, type = 'success') {
  // Remove existing notifications
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }
  
  // Create notification
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${type === 'success' ? '✓' : '⚠'}</span>
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Show notification
  setTimeout(() => notification.classList.add('show'), 10);
  
  // Close button
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  });
  
  // Auto close
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// ====== Smooth Scroll for Anchor Links ======
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
          navLinks.classList.remove('mobile-active');
        }
      }
    });
  });
}

// ====== Scroll Animations ======
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);
  
  // Observe cards and sections
  const animatedElements = document.querySelectorAll('.service-card, .project-card, .portfolio-card, .value-card');
  animatedElements.forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });
}

// ====== Navbar Scroll Effect ======
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll (optional)
    // if (currentScroll > lastScroll && currentScroll > 100) {
    //   navbar.classList.add('hidden');
    // } else {
    //   navbar.classList.remove('hidden');
    // }
    
    lastScroll = currentScroll;
  });
}

// ====== Lazy Loading Images ======
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// ====== Page View Analytics ======
function logPageView() {
  const pageData = {
    page: window.location.pathname,
    title: document.title,
    timestamp: new Date().toISOString(),
    referrer: document.referrer
  };
  
  console.log('Page view:', pageData);
  
  // In production, send to analytics service
  // Example: Google Analytics, Plausible, etc.
  // gtag('event', 'page_view', pageData);
}

// ====== Utility Functions ======

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Get viewport dimensions
function getViewport() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight
  };
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ====== Console Branding ======
console.log('%cTechSolutions', 'font-size: 24px; font-weight: bold; color: #4A9B7F;');
console.log('%cWebsite loaded successfully ✓', 'font-size: 14px; color: #666;');
console.log('%cInterested in working with us? Visit: contact.html', 'font-size: 12px; color: #999;');

// ====== Export for potential module usage ======
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    showNotification,
    debounce,
    getViewport,
    isInViewport
  };
}



/* ===================================
   PROJECTS-DOMAIN-DATA SCIENCE JS
   =================================== */
function openModal(projectId) {
    document.getElementById('modal-' + projectId).classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(projectId) {
    document.getElementById('modal-' + projectId).classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  document.querySelectorAll('.project-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.project-modal.active').forEach(modal => {
        modal.classList.remove('active');
      });
      document.body.style.overflow = 'auto';
    }
  });



/* ===================================
    PROJECTS-DOMAIN-WEB DEVELOPMENT JS
   =================================== */
  function openModal(projectId) {
    document.getElementById('modal-' + projectId).classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(projectId) {
    document.getElementById('modal-' + projectId).classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // Close modal when clicking outside
  document.querySelectorAll('.project-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.project-modal.active').forEach(modal => {
        modal.classList.remove('active');
      });
      document.body.style.overflow = 'auto';
    }
  });



/* ===================================
    PROJECTS-DOMAIN-IoT JS
   =================================== */
function openModal(projectId) {
    document.getElementById('modal-' + projectId).classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(projectId) {
    document.getElementById('modal-' + projectId).classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  document.querySelectorAll('.project-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.project-modal.active').forEach(modal => {
        modal.classList.remove('active');
      });
      document.body.style.overflow = 'auto';
    }
  });