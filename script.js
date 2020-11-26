// function classToggle() {
//     const navs = document.querySelectorAll('.Navbar__Items')
    
//     navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
//   }
  
//   document.querySelector('.Navbar__Link-toggle')
//     .addEventListener('click', classToggle);


let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});