// header top icon rotate
document.querySelector(".rotate-icon").addEventListener("click", function () {
  this.classList.toggle("rotated");
});

// menu-icon toggle
document.querySelector(".menu-icon").addEventListener("click", function () {
  this.classList.toggle("active");
});

//mobile menu show-hide
const menuIcon = document.getElementById("menuIcon");
const mobileMenuWrapper = document.getElementById("mobile-menu-wrapper");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("menu-show");
  mobileMenuWrapper.classList.toggle("menu-show");
});

// prep letter
document.addEventListener("DOMContentLoaded", function () {
  const prepElement = document.querySelector(".prep");
  const text = prepElement.textContent;

  const lastChar = text.slice(-1);

  prepElement.innerHTML = `${text.slice(
    0,
    -1
  )}<span class="last-char">${lastChar}</span>`;
});

//slick slider for itesm slider area

$(document).ready(function () {
  $(".inner-slider-wrapper").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    centerPadding: 20,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  $(".last-slider-wrapper").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    centerPadding: 20,
    loop: true,
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoPlay: true,
          autoplaySpeed: 1000,
          loop: true,
        },
      },
    ],
  });
});

//accrodion area
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    // সবগুলো আইটেম বন্ধ করা হবে
    accordionItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // ক্লিক করা আইটেমে active টগল করা হবে
    item.classList.toggle("active");
  });
});

//product page menu progress bar
const navContainer = document.querySelector(".nav-container");
const navItems = document.querySelectorAll(".nav-tab");
const progressBar = document.querySelector(".progress-bar-btn");

navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    navItems.forEach((item) => item.classList.remove("active"));

    item.classList.add("active");

    const width = ((index + 1) / navItems.length) * 100 + "%";
    progressBar.style.width = width;
  });
});

//counter click to 1+
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const counterDisplay = document.getElementById("counter");

let count = 1; // Initial value of the counter

// Increment function
incrementButton.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

// Decrement function
decrementButton.addEventListener("click", () => {
  if (count > 1) {
    // Prevent counter from going below 1
    count--;
    counterDisplay.textContent = count;
  }
});

///////relatade posts slider
