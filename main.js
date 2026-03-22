/* ============================================================
   main.js — jankylazy.dev
   All site JavaScript lives here. No inline scripts in HTML.
   ============================================================ */


/* ------------------------------------------------------------
   SPLASH SCREEN
   Hides #splash on click or Enter/Space keypress.
   GSAP transition will replace the display:none once animations
   are added — this is the functional placeholder.
   ------------------------------------------------------------ */
const splash = document.getElementById('splash');

if (splash) {
  const dismissSplash = () => {
    splash.style.display = 'none';
  };

  splash.addEventListener('click', dismissSplash);

  // Keyboard support — role="button" requires Enter and Space to work
  splash.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      dismissSplash();
    }
  });
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
   SECTIONS TO BE ADDED IN ANIMATIONS PHASE (GSAP):
     - Splash logo scale-down + reposition to header
     - ScrollTrigger section entrance animations
     - Active nav link highlight on scroll
     - Contact form validation and submission
   ------------------------------------------------------------ */
