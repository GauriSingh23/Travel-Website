
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".package__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
document.addEventListener("DOMContentLoaded", () => {
  
  const user = localStorage.getItem("travelUser");


  if (user) {
    document.getElementById("welcome-msg").textContent = `Welcome, ${user}!`;
  } else {
    
    window.location.href = "login.html";
  }

  
  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("travelUser");
      alert("Logged out successfully!");
      window.location.href = "login.html";
    });
  }
});



document.addEventListener("DOMContentLoaded", () => {
  // Existing login and menu code...

  // SEARCH BUTTON FUNCTIONALITY
  const searchBtn = document.querySelector(".btn"); // Targets the Search button
  const countryInput = document.querySelector('input[placeholder="Where are you going?"]');
  const cityInput = document.querySelector('input[placeholder="Enter or choose a city"]');
  const tourTypeInput = document.querySelector('input[placeholder="Tour type"]');

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form from submitting

    const country = countryInput.value.trim().toLowerCase();
    const city = cityInput.value.trim().toLowerCase();
    const tourType = tourTypeInput.value.trim().toLowerCase();

    if (!country && !city && !tourType) {
      alert("Please fill in at least one field to search.");
      return;
    }

    // Scroll to the packages section
    document.getElementById("package").scrollIntoView({ behavior: "smooth" });

    // Filter packages based on input
    const packages = document.querySelectorAll(".package__card");

    packages.forEach((card) => {
      const text = card.innerText.toLowerCase();

      if (
        (country && !text.includes(country)) &&
        (city && !text.includes(city)) &&
        (tourType && !text.includes(tourType))
      ) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    });
  });
});


