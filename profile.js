document.addEventListener('DOMContentLoaded', function () {

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userData = localStorage.getItem("userData");

    if (isLoggedIn !== "true" || !userData) {
        window.location.href = "login.html";
        return;
    }

    const user = JSON.parse(userData);

    document.getElementById("welcomeMessage").textContent = "Welcome, " + user.username;
    document.getElementById("profileUsername").textContent = user.username;
    document.getElementById("profileEmail").textContent = user.email;
    document.getElementById("profileRole").textContent = user.role;
    document.getElementById("lastLogin").textContent = user.lastLogin;

    document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.clear();
        window.location.href = "login.html";
    });

});