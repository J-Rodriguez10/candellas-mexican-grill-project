const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".links"); // Select all elements with class .links

navToggle.addEventListener("click", function () {
  links.forEach((link) => {
    link.classList.toggle("show-links"); // Toggle the class on each element
  });
});

// initialize swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,


  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
