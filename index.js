// navbar ********************

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const submit = document.querySelector('#submit');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
  const elem = document.querySelector('.highlight')
  const homeMenu = document.querySelector('#home-page')
  const aboutMenu = document.querySelector('#about-page')
  const servicesMenu = document.querySelector('#services-page')

  let scrollPos = window.scrollY

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  }
  else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    servicesMenu.classList.remove('highlight')
    return
  }
  else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight')
  }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//close mobile menu *****************************

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active')
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
  }
}


// Animation

AOS.init();

//   nav search *******************************************

// ---- ---- Const ---- ---- //
let inputBox = document.querySelector('.input-box'),
  searchIcon = document.querySelector('.search'),
  closeIcon = document.querySelector('.close-icon');

// ---- ---- Open Input ---- ---- //
searchIcon.addEventListener('click', () => {
  inputBox.classList.add('open');
});
// ---- ---- Close Input ---- ---- //
closeIcon.addEventListener('click', () => {
  inputBox.classList.remove('open');
});




// hide nav bar ********************************************-

// Store the current scroll position
var lastScrollTop = 0;
// Store the timeout ID for hiding the navbar
var timeoutId;
// Get the navbar element
var navbar = document.getElementById("navbar");

// Check if the user has scrolled on page load
window.addEventListener("load", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop === 0) {
    navbar.classList.add("hide");
  }
});

// Listen for scroll events
window.addEventListener("scroll", function () {
  // Clear any existing timeout
  clearTimeout(timeoutId);

  // Get the current scroll position
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Determine if the user has reached the top of the page
  if (scrollTop === 0) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  // Update the last scroll position
  lastScrollTop = scrollTop;

  // Set a timeout to hide the navbar after 0.5 seconds of inactivity
  timeoutId = setTimeout(function () {
    navbar.classList.add("hide");
  }, 500);
});

// Listen for mouseenter event on the navbar
navbar.addEventListener("mouseenter", function () {
  // Clear any existing timeout
  clearTimeout(timeoutId);
});

// Listen for mouseleave event on the navbar
navbar.addEventListener("mouseleave", function () {
  // Set a timeout to hide the navbar after 0.5 seconds
  timeoutId = setTimeout(function () {
    navbar.classList.add("visible");
  }, 500);
});


// Check if the user is on the first page then the navbar is constantly visible
function isFirstPage() {
  var currentPath = window.location.pathname;
  return currentPath === '/' || currentPath === '/index.html';
}

// Listen for scroll events
window.addEventListener("scroll", function() {
  if (isFirstPage()) {
    // Get the current scroll position
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Determine if the user has reached the top of the page
    if (scrollTop === 0) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  }
});


// scroll to top
function scrollToTop() {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}