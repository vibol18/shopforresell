// ==============================
// 🌟 HERO SLIDER FUNCTION
// ==============================

// Select elements
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

// Show slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

// Next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Auto Slide every 5s
let autoSlide = setInterval(nextSlide, 5000);

// Manual Control
nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});
prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// Reset interval when user clicks
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5000);
}

// ==============================
// 📱 RESPONSIVE NAV MENU
// ==============================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ==============================
// 🛒 ADD TO CART FUNCTION
// ==============================
const cartButtons = document.querySelectorAll(".cart-btn");
const cartBadge = document.querySelector(".fa-shopping-cart .badge");

let cartCount = 0;

// Load previous cart count from localStorage
if (localStorage.getItem("cartCount")) {
  cartCount = parseInt(localStorage.getItem("cartCount"));
  cartBadge.textContent = cartCount;
}

// Add to cart when button clicked
cartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartBadge.textContent = cartCount;
    localStorage.setItem("cartCount", cartCount);
    btn.textContent = "Added ✓";
    btn.style.backgroundColor = "green";
    setTimeout(() => {
      btn.textContent = "Add to Cart";
      btn.style.backgroundColor = "red";
    }, 1500);
  });
});
