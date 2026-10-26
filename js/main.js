// Product data
const products = [
  { name: 'Cashmere Fabric (per yard)', price: '₦8,000', icon: '🧵', tag: 'Fabric' },
  { name: '7stars Fabric (per yard)', price: '₦6,500', icon: '🧵', tag: 'Fabric' },
  { name: 'Lana Fabric (per yard)', price: '₦7,000', icon: '🧵', tag: 'Fabric' },
  { name: 'Calany Fabric (per yard)', price: '₦9,000', icon: '🧵', tag: 'Fabric' },
  { name: 'Osha Mila Fabric (per yard)', price: '₦7,500', icon: '🧵', tag: 'Fabric' },
  { name: 'Swiss Fabric (per yard)', price: '₦10,000', icon: '🧵', tag: 'Fabric' },
  { name: 'Voile Fabric (per yard)', price: '₦5,500', icon: '🧵', tag: 'Fabric' },
  { name: 'Trad Cap — Classic', price: '₦15,000', icon: '🧢', tag: 'Trad Caps' },
  { name: 'Trad Cap — Embroidered', price: '₦22,000', icon: '🧢', tag: 'Trad Caps' },
  { name: 'Onyx Cufflinks', price: '₦25,000', icon: '💎', tag: 'Cufflinks' },
  { name: 'Gold Knot Cufflinks', price: '₦40,000', icon: '✨', tag: 'Cufflinks' },
  { name: 'Tailored Agbada (client request)', price: '₦120,000', icon: '👔', tag: 'Tailoring' },
];

// Render shop
const shopGrid = document.getElementById('shopGrid');
if (shopGrid) {
  shopGrid.innerHTML = products.map(p => `
    <div class="product-card reveal">
      <div class="product-img">${p.icon}</div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <div class="price">${p.price}</div>
        <button data-name="${p.name}">Add to Cart</button>
      </div>
    </div>
  `).join('');

  shopGrid.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
      const name = e.target.dataset.name;
      e.target.textContent = 'Added ✓';
      e.target.style.background = '#2e7d32';
      e.target.style.color = '#fff';
      e.target.style.borderColor = '#2e7d32';
      setTimeout(() => {
        e.target.textContent = 'Add to Cart';
        e.target.style.background = '';
        e.target.style.color = '';
        e.target.style.borderColor = '';
      }, 1500);
      console.log('Added to cart:', name);
    }
  });
}

// Mobile nav
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  siteNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Header scroll effect
const siteHeader = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) siteHeader.classList.add('scrolled');
  else siteHeader.classList.remove('scrolled');
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Also reveal service cards, steps, etc.
document.querySelectorAll('.service-card, .process-step, .testimonial').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});

// Contact form validation
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();

    if (!name || !email || !service || !message) {
      status.textContent = 'Please fill in all fields.';
      status.className = 'form-status error';
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      status.textContent = 'Please enter a valid email address.';
      status.className = 'form-status error';
      return;
    }
    status.textContent = 'Sending...';
    status.className = 'form-status';
    setTimeout(() => {
      status.textContent = 'Thank you! We\'ll get back to you shortly.';
      status.className = 'form-status success';
      form.reset();
    }, 1000);
  });
}

// Smooth active nav highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.site-nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

