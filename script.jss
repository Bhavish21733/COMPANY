
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.padding = '10px 0';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  } else {
    header.style.padding = '20px 0';
    header.style.boxShadow = 'none';
  }
});

// SCROLL TO TOP BUTTON
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = '↑ Top';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '30px';
scrollTopBtn.style.right = '30px';
scrollTopBtn.style.padding = '10px 15px';
scrollTopBtn.style.background = '#f9a825';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.borderRadius = '8px';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.style.display = 'none';
scrollTopBtn.style.zIndex = '9999';
scrollTopBtn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// FADE-IN EFFECT ON SCROLL
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});
