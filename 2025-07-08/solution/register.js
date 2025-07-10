document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const formMessage = document.getElementById('formMessage');

  // Reset message and input styles
  formMessage.textContent = "";
  formMessage.classList.remove("text-success", "text-danger");
  document.querySelectorAll('.form-control').forEach(input => input.classList.remove('is-invalid'));

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("email").classList.add("is-invalid");
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.classList.add("text-danger");
    return;
  }

  // Password strength check
  function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return regex.test(password);
  }

  if (!validatePassword(password)) {
    document.getElementById("password").classList.add("is-invalid");
    formMessage.textContent = "Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character.";
    formMessage.classList.add("text-danger");
    return;
  }

  // Password match
  if (password !== confirmPassword) {
    document.getElementById("confirm-password").classList.add("is-invalid");
    formMessage.textContent = "Passwords do not match.";
    formMessage.classList.add("text-danger");
    return;
  }

  // Check if user already exists
  let users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    document.getElementById("email").classList.add("is-invalid");
    formMessage.textContent = "User with this email already exists. Please login.";
    formMessage.classList.add("text-danger");
    return;
  }

  // Add user
  const newUser = {
    username,
    email,
    password,
    role: "user"
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  formMessage.classList.remove("text-danger");
  formMessage.classList.add("text-success");
  formMessage.classList.add("fw-bold", "text-dark");
  formMessage.textContent = "Registration successful! Redirecting to login...";

  setTimeout(() => {
    window.location.href = 'login.html';
  }, 1000);
});

// Password toggle
document.querySelectorAll('.toggle-password').forEach(toggle => {
  toggle.addEventListener('click', function () {
    const targetId = this.getAttribute('data-target');
    const input = document.getElementById(targetId);
    const icon = this.querySelector('i');

    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';

    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
  });
});
