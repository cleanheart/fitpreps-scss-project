// header top icon rotate
document.querySelector(".rotate-icon").addEventListener("click", function () {
  this.classList.toggle("rotated");
});

// menu-icon toggle
document.querySelector(".menu-icon").addEventListener("click", function () {
  this.classList.toggle("active");
});

// prep letter
document.addEventListener("DOMContentLoaded", function () {
  // `prep` ক্লাস যুক্ত `h1` এলিমেন্ট সিলেক্ট করুন
  const prepElement = document.querySelector(".prep");
  const text = prepElement.textContent;

  // শেষ অক্ষরটি আলাদা করুন
  const lastChar = text.slice(-1);

  // মূল টেক্সট থেকে শেষ অক্ষরটি বাদ দিয়ে HTML আপডেট করুন
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
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1350, // Screen width upto 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 992, // Screen width upto 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  });
});
