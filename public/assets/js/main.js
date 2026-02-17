/* ============================================================
   PROJECT ATLAS — main.js
   ============================================================ */

'use strict';

/* ── Navbar scroll + logo swap ── */
const navbar = document.getElementById('navbar');
const onScroll = () => {
  const scrolled = window.scrollY > 20;
  navbar.classList.toggle('scrolled', scrolled);

  // Swap logo between light (transparent/dark-hero state) and dark (scrolled/light-bg state)
  const logo = document.getElementById('nav-logo-img');
  if (logo) {
    logo.src = scrolled ? logo.dataset.darkSrc : logo.dataset.lightSrc;
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Active nav link ── */
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ── Mobile nav ── */
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    const open  = navLinks.classList.contains('open');
    spans[0].style.transform = open ? 'translateY(6.5px) rotate(45deg)' : '';
    spans[1].style.opacity   = open ? '0' : '';
    spans[2].style.transform = open ? 'translateY(-6.5px) rotate(-45deg)' : '';
  });
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.progress-fill').forEach(bar => {
        bar.style.width = bar.dataset.width || '0%';
      });
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.10, rootMargin: '0px 0px -36px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger')
  .forEach(el => revealObserver.observe(el));

/* ── Typewriter ── */
function typewriter(el, phrases, speed = 70, pause = 2000) {
  let pIdx = 0, cIdx = 0, deleting = false;
  function tick() {
    const phrase = phrases[pIdx];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++cIdx);
      if (cIdx === phrase.length) { deleting = true; setTimeout(tick, pause); return; }
    } else {
      el.textContent = phrase.slice(0, --cIdx);
      if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; }
    }
    setTimeout(tick, deleting ? speed / 2 : speed);
  }
  tick();
}
const typeTarget = document.getElementById('typewriter-target');
const typeData   = document.getElementById('typewriter-data');
if (typeTarget && typeData) {
  typewriter(typeTarget, JSON.parse(typeData.dataset.phrases));
}

/* ── Animated counters ── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const start  = performance.now();
  const dur    = 1600;
  (function update(now) {
    const t = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(e * target).toLocaleString();
    if (t < 1) requestAnimationFrame(update);
  })(start);
}
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCounter(e.target); counterObs.unobserve(e.target); }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));

/* ── Contact / interest form (frontend only) ── */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = 'Message Sent ✓';
    btn.disabled = true;
    btn.style.opacity = '0.6';
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.disabled = false;
      btn.style.opacity = '';
      contactForm.reset();
    }, 4000);
  });
}
