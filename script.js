const menu = document.querySelector(".menu");
const closed = document.querySelector(".close-icon")
menu.addEventListener('click', () => {
  const menubar = document.querySelector(".nav-container");
  menubar.classList.remove('active')
});
closed.addEventListener('click', () => {
  const menubar = document.querySelector(".nav-container");
  menubar.classList.add('active')
});


// scroll effect on menubar
let prevScrollPos = window.scrollY;
const mainmenu = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling Up
    mainmenu.style.top = '0';
  } else {
    // Scrolling Down
    mainmenu.style.top = "-80px";
  }

  prevScrollPos = currentScrollPos;
});

// change navbar color
const homeSection = document.querySelector("#home");

window.addEventListener("scroll", () => {
  const homeSectionHeight = homeSection.offsetHeight;
  const scrollPosition = window.scrollY;
  const navbar = document.querySelector(".container")
  const image = document.querySelector(".MyImage");





  if (scrollPosition > homeSectionHeight) {
    navbar.classList.add('home')
    menu.classList.add('home')
    image.src = "color_logo.svg";
  } else {
    navbar.classList.remove('home');
    menu.classList.remove('home');
    image.src = "Soulmate.svg";
  }
});


// submenu animation

const subMenu = document.querySelector("#sm1")
subMenu.addEventListener('click', () => {
  const sItems = document.querySelector(".sm1")
  sItems.classList.toggle("active")
})
const subMenu2 = document.querySelector("#sm2")
subMenu2.addEventListener('click', () => {
  const sItems = document.querySelector(".sm2")
  sItems.classList.toggle("active")
})
const subMenu3 = document.querySelector("#sm3")
subMenu3.addEventListener('click', () => {
  const sItems = document.querySelector(".sm3")
  sItems.classList.toggle("active")
})
const subMenu4 = document.querySelector("#sm4")
subMenu4.addEventListener('click', () => {
  const sItems = document.querySelector(".sm4")
  sItems.classList.toggle("active")
})
const subMenu5 = document.querySelector("#sm5")
subMenu5.addEventListener('click', () => {
  const sItems = document.querySelector(".sm5")
  sItems.classList.toggle("active")
})
const subMenu6 = document.querySelector("#sm6")
subMenu6.addEventListener('click', () => {
  const sItems = document.querySelector(".sm6")
  sItems.classList.toggle("active")
})




// preloader
const preloader = document.querySelector("#preloader")
window.addEventListener("load",()=>{
  preloader.style.display="none"
})




document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slides");
  const buttons = document.querySelectorAll(".slide-button");

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, slideIndex) => {
      if (slideIndex === index) {
        slide.style.opacity = "1";
      } else {
        slide.style.opacity = "0";
      }
    });

    buttons.forEach((button, buttonIndex) => {
      if (buttonIndex === index) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  function startSlideshow() {
    showSlide(currentIndex);

    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 5000);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function() {
      const index = parseInt(button.getAttribute("data-index"));
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  startSlideshow();
});

