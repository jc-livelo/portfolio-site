/* ============================================================
   main.js — jankylazy.dev
   All site JavaScript lives here. No inline scripts in HTML.
   ============================================================ */


/* ------------------------------------------------------------
   SPLASH SCREEN — GSAP animation
   On click: the logo punches in (scale up toward the eye area),
   the overlay fades out, then main content fades in.
   ------------------------------------------------------------ */
const splash = document.getElementById('splash');
const splashLogo = document.getElementById('splash-logo');
const mainContent = document.querySelector('main');

if (splash) {
  const dismissSplash = () => {
    // Lock out repeat triggers while the animation is running
    splash.removeEventListener('click', dismissSplash);
    splash.removeEventListener('keydown', handleKey);

    const tl = gsap.timeline();

    // 1. Scale the logo up toward the eye area (transform-origin: 50% 38%).
    //    This gives the impression of zooming into the panda's face.
    tl.to(splashLogo, {
      scale: 7,
      transformOrigin: '52% 42%',
      duration: 0.8,
      ease: 'power2.in',
    })

    // 2. Simultaneously fade the whole splash overlay to transparent.
    .to(splash, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.in',
    }, '<') // '<' starts this tween at the same time as the previous one

    // 3. After the 0.8s animation completes, pull the overlay out of layout.
    .call(() => {
      splash.style.display = 'none';
    })

    // 4. Fade main content in over 0.4s now that the splash is gone.
    .to(mainContent, {
      opacity: 1,
      duration: 0.4,
      ease: 'power1.out',
    })

    // 5. Slide the header logo down from -10px and fade it in.
    //    Offset by 0.1s so it trails slightly behind the main content fade.
    .fromTo('.site-header__logo',
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' },
      '-=0.3' // starts 0.1s after step 4 begins (0.4s - 0.3s = 0.1s offset)
    );
  };

  // Keyboard support — role="button" requires Enter and Space to activate
  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      dismissSplash();
    }
  };

  splash.addEventListener('click', dismissSplash);
  splash.addEventListener('keydown', handleKey);
}


/* ------------------------------------------------------------
   FOOTER YEAR
   Keeps the copyright year current automatically.
   ------------------------------------------------------------ */
const footerYear = document.getElementById('footer-year');
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}


/* ------------------------------------------------------------
   THEME TOGGLE
   Reads saved preference from localStorage on load, then
   toggles data-theme on <html> and saves the new value.
   ------------------------------------------------------------ */
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Apply saved preference on page load (default: dark)
const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}


/* ------------------------------------------------------------
   SCROLL-TO-TOP BUTTON
   Mobile only (CSS hides it at 768px+). Shows after the user
   scrolls past 300px; smooth-scrolls back to the top on click.
   Uses the `hidden` attribute to keep it out of tab order when
   invisible, plus an `is-visible` class for the CSS transition.
   ------------------------------------------------------------ */
const scrollTopBtn = document.getElementById('scroll-top');

if (scrollTopBtn) {
  // Show or hide the button based on current scroll position
  const handleScrollTopVisibility = () => {
    if (window.scrollY > 300) {
      // Remove `hidden` first so the element exists in layout,
      // then add `is-visible` on the next frame to trigger the transition
      scrollTopBtn.removeAttribute('hidden');
      requestAnimationFrame(() => scrollTopBtn.classList.add('is-visible'));
    } else {
      scrollTopBtn.classList.remove('is-visible');
      // Re-add `hidden` after the fade-out transition completes (250ms)
      setTimeout(() => {
        if (!scrollTopBtn.classList.contains('is-visible')) {
          scrollTopBtn.setAttribute('hidden', '');
        }
      }, 250);
    }
  };

  window.addEventListener('scroll', handleScrollTopVisibility, { passive: true });

  // Smooth-scroll to top on click
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ------------------------------------------------------------
   SECTIONS TO BE ADDED IN ANIMATIONS PHASE (GSAP):
     - Splash logo scale-down + reposition to header
     - ScrollTrigger section entrance animations
     - Active nav link highlight on scroll
     - Contact form validation and submission
   ------------------------------------------------------------ */
