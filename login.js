document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');

        errorMessage.style.display = 'none';

        if (!username || !password) {
            showError("Please fill in all fields");
            return;
        }

        if (username === "intern" && password === "welcome123") {

            const userData = {
                username: username,
                email: "intern@company.com",
                role: "Web Development Intern",
                lastLogin: new Date().toLocaleString()
            };

            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userData", JSON.stringify(userData));

            window.location.href = "profile.html";

        } else {
            showError("Invalid credentials");
        }
    });

    function showError(message) {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
    }

});