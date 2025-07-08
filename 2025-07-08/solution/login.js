// Predefined admin credentials
const adminEmail = "admin@example.com";
const adminPassword = "Admin@123";

// Toggle password visibility
document.querySelector('.toggle-password').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  const icon = this.querySelector('i'); // Get the <i> inside the span

  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';

  icon.classList.toggle('fa-eye');
  icon.classList.toggle('fa-eye-slash');
});

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Check if admin
  if (email === adminEmail && password === adminPassword) {
    alert("Admin login successful!");

    const adminUser = {
      username: "Admin",
      email: adminEmail,
      role: "admin"
    };

    localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
    window.location.href = "admin-dashboard.html";
    return;
  }

  // Check normal user from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert("Login successful!");

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "user-dashboard.html";
  } else {
    alert("Invalid credentials. Please register first.");
  }
});
