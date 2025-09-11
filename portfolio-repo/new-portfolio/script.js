// Sticky Header & Scroll Active Links
let header = document.querySelector(".header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
}

window.onscroll = () => {
  // Sticky header
  header.classList.toggle("sticky", window.scrollY > 100);

  // Close mobile menu on scroll
  navbar.classList.remove("active");
}

// Skill Progress Circles
document.querySelectorAll('.progress-circle').forEach(circle => {
  let percent = circle.getAttribute('data-percent');
  circle.style.background = `conic-gradient(#ff7f50 ${percent}%, #ccc ${percent}%)`;
});

// Contact Form Popup
const form = document.getElementById('contact-form');
const popup = document.getElementById('popup-message');
const closeBtn = document.getElementById('close-popup');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
