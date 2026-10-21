/* ============================================================
   PRINCE KUMAR — PORTFOLIO  |  script.js
   Typewriter · Scroll-spy · Reveal animations · Mobile nav
   Scroll-to-top · Contact form validation · Dynamic year
   ============================================================ */

'use strict';

/* ─── 1. UTILITY ─────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ─── 2. FOOTER YEAR ─────────────────────────────────────── */
(function setFooterYear() {
  const el = $('#footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ─── 3. TYPEWRITER EFFECT ───────────────────────────────── */
(function initTypewriter() {
  const typedEl    = $('#typed-text');
  if (!typedEl) return;

  const roles = [
    'B.Tech CS Student',
    'Aspiring Software Engineer',
    'Web Developer',
    'DSA Enthusiast',
    'Problem Solver',
  ];

  let roleIndex   = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let isPausing   = false;

  const TYPING_SPEED   = 90;   // ms per char while typing
  const DELETING_SPEED = 48;   // ms per char while deleting
  const PAUSE_END      = 2200; // ms to wait at end of word
  const PAUSE_START    = 320;  // ms before starting to type next word

  function tick() {
    const current = roles[roleIndex];

    if (isPausing) return; // controlled by setTimeout below

    if (isDeleting) {
      typedEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting  = false;
        roleIndex   = (roleIndex + 1) % roles.length;
        isPausing   = true;
        setTimeout(() => {
          isPausing = false;
          requestAnimationFrame(loop);
        }, PAUSE_START);
        return;
      }
    } else {
      typedEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        isPausing = true;
        setTimeout(() => {
          isDeleting = true;
          isPausing  = false;
          requestAnimationFrame(loop);
        }, PAUSE_END);
        return;
      }
    }
  }

  let lastTime = 0;

  function loop(timestamp) {
    const speed   = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const elapsed = timestamp - lastTime;

    if (elapsed >= speed) {
      lastTime = timestamp;
      tick();
    }

    if (!isPausing) requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
})();

/* ─── 4. NAVBAR SCROLL STATE ─────────────────────────────── */
(function initNavbarScroll() {
  const navbar = $('#navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();

/* ─── 5. SCROLL SPY (active nav link) ───────────────────── */
(function initScrollSpy() {
  const sections   = $$('section[id], footer[id]');
  const navLinks   = $$('.nav-links a');
  const mobileLinks = $$('.nav-mobile a');

  if (!sections.length || !navLinks.length) return;

  const NAV_HEIGHT = 80;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const allLinks = [...navLinks, ...mobileLinks];

          allLinks.forEach((link) => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${id}`);
          });
        }
      });
    },
    {
      rootMargin: `-${NAV_HEIGHT}px 0px -60% 0px`,
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
})();

/* ─── 6. MOBILE NAV TOGGLE ───────────────────────────────── */
(function initMobileNav() {
  const hamburger  = $('#nav-hamburger');
  const mobileNav  = $('#nav-mobile');
  const mobileLinks = $$('.nav-mobile a');

  if (!hamburger || !mobileNav) return;

  function openMenu() {
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when a link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (
      mobileNav.classList.contains('open') &&
      !mobileNav.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMenu();
      hamburger.focus();
    }
  });
})();

/* ─── 7. SCROLL REVEAL (fade-in-up) ─────────────────────── */
(function initScrollReveal() {
  const elements = $$('.reveal');
  if (!elements.length) return;

  // If IntersectionObserver isn't available, just show everything
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.08,
    }
  );

  elements.forEach((el) => observer.observe(el));
})();

/* ─── 8. SCROLL TO TOP BUTTON ────────────────────────────── */
(function initScrollTop() {
  const btn = $('#scroll-top');
  if (!btn) return;

  const SHOW_AFTER = 400; // px from top

  function onScroll() {
    if (window.scrollY > SHOW_AFTER) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  onScroll(); // run once on load
})();

/* ─── 9. SMOOTH SCROLL FOR ANCHOR LINKS ─────────────────── */
(function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (href === '#' || href === '#!') return; // placeholder links

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
      10
    ) || 70;

    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
})();

/* ─── 9. CONTACT FORM — mailto fallback ─────────────────── */
(function initContactForm() {
  const form       = $('#contact-form');
  const success    = $('#form-success');
  if (!form) return;

  const nameInput    = $('#contact-name');
  const emailInput   = $('#contact-email');
  const messageInput = $('#contact-message');
  const subjectInput = $('#contact-subject');

  const nameError    = $('#name-error');
  const emailError   = $('#email-error');
  const messageError = $('#message-error');

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const RECIPIENT = 'prinsep97@gmail.com';

  function setError(input, errorEl, show) {
    if (show) {
      input.classList.add('error');
      errorEl.classList.add('show');
    } else {
      input.classList.remove('error');
      errorEl.classList.remove('show');
    }
  }

  // Live clear errors on input
  [nameInput, emailInput, messageInput].forEach((input) => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errId = input.id.replace('contact-', '') + '-error';
      const err   = document.getElementById(errId);
      if (err) err.classList.remove('show');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate
    let valid = true;

    if (!nameInput || !nameInput.value.trim()) {
      setError(nameInput, nameError, true);
      valid = false;
    } else {
      setError(nameInput, nameError, false);
    }

    if (!emailInput || !EMAIL_RE.test(emailInput.value.trim())) {
      setError(emailInput, emailError, true);
      valid = false;
    } else {
      setError(emailInput, emailError, false);
    }

    if (!messageInput || !messageInput.value.trim()) {
      setError(messageInput, messageError, true);
      valid = false;
    } else {
      setError(messageInput, messageError, false);
    }

    if (!valid) {
      const firstError = form.querySelector('.form-input.error, .form-textarea.error');
      if (firstError) firstError.focus();
      return;
    }

    // Build mailto: link and open it so the message goes to Prince's email
    const name    = nameInput.value.trim();
    const email   = emailInput.value.trim();
    const subject = subjectInput && subjectInput.value.trim()
      ? subjectInput.value.trim()
      : `Portfolio contact from ${name}`;
    const body    = `From: ${name} <${email}>\n\n${messageInput.value.trim()}`;

    const mailto = `mailto:${RECIPIENT}`
      + `?subject=${encodeURIComponent(subject)}`
      + `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    // Show success state
    showSuccess();
  });

  function showSuccess() {
    form.style.display = 'none';
    if (success) {
      success.classList.add('show');
      success.focus();
    }
  }
})();

/* ─── 11. RESUME PDF AVAILABILITY CHECK ─────────────────── */
(function checkResumePdf() {
  const RESUME_PATH = 'assets/resume.pdf';
  const noteEl      = $('#resume-status-note');

  // Probe whether the file exists via a HEAD request (works on localhost / hosted)
  fetch(RESUME_PATH, { method: 'HEAD' })
    .then((res) => {
      if (res.ok) {
        if (noteEl) noteEl.textContent = '';
      } else {
        showMissingNote();
      }
    })
    .catch(() => {
      // fetch fails when opening file:// directly — treat as indeterminate,
      // show a neutral note only if the note element has no content set already
      if (noteEl && !noteEl.textContent.trim()) {
        noteEl.textContent = 'For the download button to work, place resume.pdf in the assets/ folder.';
      }
    });

  function showMissingNote() {
    if (noteEl) {
      noteEl.textContent = 'Resume PDF not found. Copy your PDF to assets/resume.pdf to enable the download button.';
      noteEl.style.color = 'var(--status-dev)';
    }
  }
})();

/* ─── 12. PROJECT CARD: disable placeholder links ────────── */
(function disablePlaceholderLinks() {
  // Links pointing to '#' that are inside .project-links are purely decorative
  $$('.project-links a[href="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
})();
