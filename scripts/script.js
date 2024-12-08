document.addEventListener("DOMContentLoaded", () => {
    const loginPage = document.getElementById("login-page");
    const homePage = document.getElementById("home-page");
    const loginForm = document.getElementById("login-form");
    const logoutButton = document.getElementById("logout-button");
  
    // Handle login
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      loginPage.classList.add("hidden");
      homePage.classList.remove("hidden");
    });
  
    // Handle logout
    logoutButton.addEventListener("click", () => {
      homePage.classList.add("hidden");
      loginPage.classList.remove("hidden");
    });
  });
  