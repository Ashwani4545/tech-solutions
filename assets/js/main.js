// =========================================
// INFINITY TECH NEXUS - MAIN JS ENGINE
// =========================================

// ====== EMAILJS CONFIG ======
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_05zf0yn',
  TEMPLATE_ID: 'template_x7z6a38',
  PUBLIC_KEY: 'pCtvNKYyuU5EBCHS_'
};

// ====== INIT ======
document.addEventListener('DOMContentLoaded', function() {
  initThemeToggle();
  initEmailJS();
  initMobileMenu();
  initContactForm();
  initSmoothScroll();
  initScrollAnimations();
  initNavbarScroll();
  initScrollProgress();
  initAnimatedCounters();
  initParticleHero();
  initChatbot();
  initPortfolioFilter();
  logPageView();
});

// ====== THEME TOGGLE ======
function initThemeToggle() {
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      btn.textContent = next === 'dark' ? '☀️' : '🌙';
    });
    const t = document.documentElement.getAttribute('data-theme');
    btn.textContent = t === 'dark' ? '☀️' : '🌙';
  });
}

// ====== SCROLL PROGRESS ======
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = h > 0 ? (window.scrollY / h * 100) + '%' : '0%';
  });
}

// ====== ANIMATED COUNTERS ======
function initAnimatedCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(el);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(el);
  });
}

function animateCounter(el) {
  const target = el.getAttribute('data-count');
  const isNumber = !isNaN(parseInt(target));
  if (!isNumber) { el.textContent = target; return; }
  const end = parseInt(target);
  const duration = 2000;
  const start = performance.now();
  const suffix = el.getAttribute('data-suffix') || '';
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * end) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ====== PARTICLE HERO ======
function initParticleHero() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h, animId;

  function resize() {
    const hero = canvas.parentElement;
    w = canvas.width = hero.offsetWidth;
    h = canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', debounce(resize, 200));

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1, o: Math.random() * 0.4 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const color = isDark ? '16,185,129' : '16,185,129';
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},${p.o})`;
      ctx.fill();
    });
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${color},${0.1 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(draw);
  }
  draw();
}

// ====== CHATBOT ======
function initChatbot() {
  const toggle = document.querySelector('.chatbot-toggle');
  const widget = document.querySelector('.chatbot-widget');
  if (!toggle || !widget) return;

  const faq = {
    'services': 'We offer Web Development, App Development, Data Science, IoT Solutions, DevOps, Branding, and more!',
    'pricing': 'Our pricing is project-based. Contact us for a free quote tailored to your needs.',
    'contact': 'You can reach us via our Contact page or email us directly. We respond within 48 hours!',
    'projects': 'Check out our Projects page to see our work in Web Dev, Data Science, and IoT.',
    'hire': 'We\'d love to work with you! Head to our Contact page to get started.',
    'student': 'We offer mentorship, project assistance, portfolio building, and freelancing opportunities for students.',
    'hello': 'Hi there! 👋 How can I help you today?',
    'hi': 'Hello! 👋 Feel free to ask about our services, projects, or pricing.',
  };

  toggle.addEventListener('click', () => widget.classList.toggle('active'));
  const closeBtn = widget.querySelector('.chatbot-close');
  if (closeBtn) closeBtn.addEventListener('click', () => widget.classList.remove('active'));

  const input = widget.querySelector('.chatbot-input input');
  const sendBtn = widget.querySelector('.chatbot-input button');
  const msgs = widget.querySelector('.chatbot-messages');

  function addMsg(text, type) {
    const d = document.createElement('div');
    d.className = 'chat-msg ' + type;
    d.textContent = sanitize(text);
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function respond(text) {
    const lower = text.toLowerCase();
    for (const [key, val] of Object.entries(faq)) {
      if (lower.includes(key)) { setTimeout(() => addMsg(val, 'bot'), 500); return; }
    }
    setTimeout(() => addMsg('Thanks for your message! For detailed inquiries, please visit our Contact page or email us.', 'bot'), 500);
  }

  function send() {
    const val = input.value.trim();
    if (!val) return;
    addMsg(val, 'user');
    input.value = '';
    respond(val);
  }

  if (sendBtn) sendBtn.addEventListener('click', send);
  if (input) input.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
}

// ====== PORTFOLIO FILTER ======
function initPortfolioFilter() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.portfolio-card[data-category]');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-filter');
      cards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = '';
          card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ====== SANITIZE (XSS Prevention) ======
function sanitize(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// ====== EMAILJS ======
function initEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }
}

// ====== MOBILE MENU ======
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const nav = document.querySelector('.navbar');
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('mobile-active');
    this.classList.toggle('active');
    const isOpen = this.classList.contains('active');
    this.innerHTML = isOpen
      ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18" stroke-width="2"/><line x1="6" y1="6" x2="18" y2="18" stroke-width="2"/></svg>'
      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="3" y1="12" x2="21" y2="12" stroke-width="2"/><line x1="3" y1="6" x2="21" y2="6" stroke-width="2"/><line x1="3" y1="18" x2="21" y2="18" stroke-width="2"/></svg>';
  });

  document.addEventListener('click', function(e) {
    if (nav && !nav.contains(e.target)) {
      navLinks.classList.remove('mobile-active');
      if (menuBtn) menuBtn.classList.remove('active');
    }
  });
}

// ====== CONTACT FORM ======
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    const origText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const fd = new FormData(this);
    if (fd.get('company')) {
      showNotification('Spam detected.', 'error');
      btn.textContent = origText; btn.disabled = false; return;
    }

    const data = {
      name: sanitize(fd.get('name') || ''),
      email: sanitize(fd.get('email') || ''),
      phone: sanitize(fd.get('phone') || 'Not provided'),
      user_type: sanitize(fd.get('user_type') || ''),
      message: sanitize(fd.get('message') || ''),
      timestamp: new Date().toISOString()
    };

    if (!data.name || !data.email || !data.user_type || !data.message) {
      showNotification('Please fill in all required fields', 'error');
      btn.textContent = origText; btn.disabled = false; return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fd.get('email'))) {
      showNotification('Please enter a valid email address', 'error');
      btn.textContent = origText; btn.disabled = false; return;
    }

    if (typeof emailjs !== 'undefined') {
      emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
        from_name: data.name, from_email: data.email, phone: data.phone,
        user_type: data.user_type, message: data.message, timestamp: new Date().toLocaleString()
      }).then(() => {
        showNotification('Thank you! We\'ll be in touch shortly.', 'success');
        if (typeof gtag === 'function') gtag('event', 'contact_form_submitted', { event_category: 'engagement' });
        form.reset(); btn.textContent = origText; btn.disabled = false;
      }).catch(() => {
        showNotification('Failed to send. Please try again.', 'error');
        btn.textContent = origText; btn.disabled = false;
      });
    } else {
      showNotification('Email service unavailable. Please contact us directly.', 'error');
      btn.textContent = origText; btn.disabled = false;
    }
  });

  form.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('blur', function() { validateField(this); });
  });
}

function validateField(field) {
  const val = field.value.trim();
  if (field.hasAttribute('required') && !val) { field.classList.add('error'); return false; }
  if (field.name === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { field.classList.add('error'); return false; }
  field.classList.remove('error'); return true;
}

// ====== NOTIFICATION ======
function showNotification(message, type = 'success') {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  const n = document.createElement('div');
  n.className = `notification notification-${type}`;
  n.innerHTML = `<div class="notification-content"><span class="notification-icon">${type === 'success' ? '✓' : '⚠'}</span><span class="notification-message">${sanitize(message)}</span><button class="notification-close">&times;</button></div>`;
  document.body.appendChild(n);
  setTimeout(() => n.classList.add('show'), 10);
  n.querySelector('.notification-close').addEventListener('click', () => { n.classList.remove('show'); setTimeout(() => n.remove(), 300); });
  setTimeout(() => { n.classList.remove('show'); setTimeout(() => n.remove(), 300); }, 5000);
}

// ====== SMOOTH SCROLL ======
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navH = document.querySelector('.navbar')?.offsetHeight || 0;
        window.scrollTo({ top: target.offsetTop - navH - 20, behavior: 'smooth' });
        document.querySelector('.nav-links')?.classList.remove('mobile-active');
      }
    });
  });
}

// ====== SCROLL ANIMATIONS ======
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('animated'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

  document.querySelectorAll('.service-card, .project-card, .portfolio-card, .value-card, .domain-project-card, .testimonial-card, .sw-service-card').forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });
}

// ====== NAVBAR SCROLL ======
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.pageYOffset > 10);
  });
}

// ====== MODAL (unified) ======
function openModal(projectId) {
  const modal = document.getElementById('modal-' + projectId);
  if (modal) { modal.classList.add('active'); document.body.style.overflow = 'hidden'; }
}
function closeModal(projectId) {
  const modal = document.getElementById('modal-' + projectId);
  if (modal) { modal.classList.remove('active'); document.body.style.overflow = 'auto'; }
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('project-modal')) {
    e.target.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.project-modal.active').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = 'auto';
  }
});

// ====== UTILITIES ======
function debounce(func, wait) {
  let timeout;
  return function(...args) { clearTimeout(timeout); timeout = setTimeout(() => func(...args), wait); };
}

function trackGetStarted() {
  if (typeof gtag === 'function') gtag('event', 'get_started_click', { event_category: 'engagement', event_label: 'Hero Section' });
}

function logPageView() {
  console.log('%c∞ Infinity Tech Nexus', 'font-size:20px;font-weight:bold;color:#10B981;');
  console.log('%cWebsite loaded ✓', 'font-size:12px;color:#64748B;');
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { showNotification, debounce, sanitize };
}