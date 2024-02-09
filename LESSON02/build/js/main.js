const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMobileMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMobileMenu);
  mobileMenu.addEventListener("click", toggleMobileMenu);
};

document.addEventListener("DOMContentLoaded", initApp);



// function toggleTheme() {
//   const body = document.body;
//   body.classList.toggle('dark');
// }

// const themeToggleButton = document.getElementById('theme-toggle-button');
// themeToggleButton.addEventListener('click', toggleTheme);
