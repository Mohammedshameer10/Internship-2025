const formMessage = document.getElementById("formMessage");
const users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const allUsers = [
    { username: "Admin", email: "admin@example.com", password: "Admin@123", role: "admin" },
    ...users
  ];

  const user = allUsers.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    formMessage.className = "text-white fw-bold text-center mt-2";

    if (user.role === "admin") {
      formMessage.textContent = "Admin login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "admin-dashboard.html";
      }, 1000);
    } else {
      formMessage.textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "user-dashboard.html";
      }, 1000);
    }
  } else {
    formMessage.className = "text-danger fw-bold text-center mt-2";
    formMessage.textContent = "Invalid credentials. Please register first.";
  }
});

// Toggle password visibility
const passwordInput = document.getElementById("password");
const togglePassword = document.querySelector(".toggle-password");

togglePassword.addEventListener("click", function () {
  const icon = this.querySelector("i");
  const isHidden = passwordInput.type === "password";

  passwordInput.type = isHidden ? "text" : "password";
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
});
