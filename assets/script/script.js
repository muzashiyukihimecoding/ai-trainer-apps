// Toggle Hamburger Menu Activation

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
   navbarNav.classList.toggle("active");
};

// Toggle Side Bar Deactivation
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
   }
});
