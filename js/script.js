/* =============================================
   NAVBAR — scroll + active link highlight
============================================= */
const navbar  = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // scrolled class
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  // active link
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

/* =============================================
   MOBILE NAV TOGGLE
============================================= */
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

// close menu when a link is clicked
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-label', 'Abrir menú');
  });
});

/* =============================================
   INTERSECTION OBSERVER — fade-in sections
============================================= */
const fadeEls = document.querySelectorAll(
  '.hero-content, .about-grid, .skill-card, .project-card, .contact-form'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger siblings
        const siblings = Array.from(entry.target.parentElement.children);
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 80}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach(el => observer.observe(el));

/* =============================================
   SKILL BARS — animate on scroll
============================================= */
const skillFills = document.querySelectorAll('.skill-fill');

const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = `${width}%`;
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

skillFills.forEach(fill => barObserver.observe(fill));

/* =============================================
   CONTACT FORM — basic validation & submit
============================================= */
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function validateField(input) {
  const group  = input.closest('.form-group');
  const errEl  = group.querySelector('.field-error');
  let   message = '';

  if (!input.value.trim()) {
    message = 'Este campo es obligatorio.';
  } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    message = 'Ingresa un correo válido.';
  }

  input.classList.toggle('invalid', !!message);
  errEl.textContent = message;
  return !message;
}

form.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('blur', () => validateField(input));
  input.addEventListener('input', () => {
    if (input.classList.contains('invalid')) validateField(input);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fields  = Array.from(form.querySelectorAll('input, textarea'));
  const valid   = fields.map(validateField).every(Boolean);

  if (!valid) return;

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Enviando…';

  // Simulate async send (replace with real endpoint)
  setTimeout(() => {
    form.reset();
    form.querySelectorAll('.field-error').forEach(el => (el.textContent = ''));
    formSuccess.textContent = '¡Mensaje enviado! Me pondré en contacto pronto.';
    btn.disabled = false;
    btn.textContent = 'Enviar mensaje';

    setTimeout(() => (formSuccess.textContent = ''), 5000);
  }, 1200);
});

/* =============================================
   FOOTER YEAR
============================================= */
document.getElementById('footerYear').textContent = new Date().getFullYear();
