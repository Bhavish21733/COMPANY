// JS for future enhancements (smooth scroll or mobile menu)

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Example mobile nav toggle setup (you can activate later)
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector("nav");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }
});
