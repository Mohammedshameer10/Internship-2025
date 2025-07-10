const formMessage = document.getElementById("formMessage");
const users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Check if admin
  if (email === "admin@example.com" && password === "Admin@123") {
    const adminUser = {
      username: "Admin",
      email: email,
      role: "admin"
    };

    localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
    formMessage.className = "text-white  fw-bold text-center mt-2";
    formMessage.textContent = "Admin login successful! Redirecting...";

    setTimeout(() => {
      window.location.href = "admin-dashboard.html";
    }, 1000);
    return;
  }

  // Regular user login check
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    formMessage.className = "text-white fw-bold text-center mt-2";
    formMessage.textContent = "Login successful! Redirecting...";

    setTimeout(() => {
      window.location.href = "user-dashboard.html";
    }, 1000);
  } else {
    formMessage.className = "text-danger fw-bold text-center mt-2";
    formMessage.textContent = "Invalid credentials. Please register first.";
  }
});


const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eyeIcon");
const togglePassword = document.querySelector(".toggle-password");

togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
})