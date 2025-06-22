// Sticky Navbar on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle counter animation for project completion
document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector("#project-counter");
  let started = false;

  const countUp = () => {
    let count = 0;
    const target = +counter.getAttribute("data-target");
    const interval = setInterval(() => {
      count++;
      counter.textContent = count + "+";
      if (count >= target) clearInterval(interval);
    }, 50);
  };

  window.addEventListener("scroll", () => {
    const triggerTop = counter.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!started && triggerTop < windowHeight) {
      started = true;
      countUp();
    }
  });
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
