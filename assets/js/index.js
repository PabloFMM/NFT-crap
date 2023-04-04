
const appHeaderContainer = document.getElementById("app-header-btns");
const contentContainer = document.getElementById("content");

// navbar 
var nav = document.querySelector('nav');
var navToggler = document.getElementById("navbartoggler");
var navCollap = document.getElementById("navbarCollapse");

//change navbar background color from trasparent to white
window.onload = function() {
  navToggler.onclick = changeBackground;
}


function changeBackground() {
  if ( navCollap.classList.contains('show') ){
    navCollap.classList.remove('bg-white-opacity-9');
  } else{
    navCollap.classList.add('bg-white-opacity-9');
  }
}

window.addEventListener('scroll', function () {
if (window.pageYOffset > 100) {
    nav.classList.add('bg-white', 'shadow');
} else {
    nav.classList.remove('bg-white', 'shadow');
}
});


// Preloader
window.addEventListener("load", function() {
  setTimeout(function() {
      document.querySelector('body').classList.add('loaded');
  }, 500);
});

// load terms anc conditions template
$(document).ready(function() {
  $('#termsModal').on('show.bs.modal', function() {
      $(this).find('.modal-body').load('../templates/terms.html');
  });

  $('#termsModalEN').on('show.bs.modal', function() {
    $(this).find('.modal-body').load('templates/terms.html');
});
});