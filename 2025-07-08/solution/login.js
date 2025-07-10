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
    formMessage.className = "text-success fw-bold text-center mt-2";

    // Show toast
    const toastEl = document.getElementById("loginSuccessToast");
    const toast = new bootstrap.Toast(toastEl);
    toast.show();

    setTimeout(() => {
      if (user.role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else {
        window.location.href = "user-dashboard.html";
      }
    }, 2000);
  } else {
    formMessage.className = "text-danger fw-bold text-center mt-2";
    formMessage.textContent = "Invalid credentials. Please register first.";
  }
});

// Toggle password visibility
document.querySelectorAll('.toggle-password').forEach(toggle => {
  toggle.addEventListener('click', function () {
    const input = document.getElementById(this.getAttribute('data-target'));
    const icon = this.querySelector('i');
    input.type = input.type === 'password' ? 'text' : 'password';
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
  });
});
