// Smooth scroll for navigation links
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Optional: highlight current section in nav while scrolling (future enhancement)
// Optional: hamburger menu logic for mobile (will be added in mobile menu update)
