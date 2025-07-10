document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const formMessage = document.getElementById('formMessage');

  formMessage.textContent = "";
  formMessage.className = ""; // reset classes

  document.querySelectorAll('.form-control').forEach(input => input.classList.remove('is-invalid'));

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("email").classList.add("is-invalid");
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.classList.add("text-danger");
    return;
  }

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return regex.test(password);
  };

  if (!validatePassword(password)) {
    document.getElementById("password").classList.add("is-invalid");
    formMessage.textContent = "Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character.";
    formMessage.classList.add("text-danger");
    return;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirm-password").classList.add("is-invalid");
    formMessage.textContent = "Passwords do not match.";
    formMessage.classList.add("text-danger");
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.some(user => user.email === email)) {
    document.getElementById("email").classList.add("is-invalid");
    formMessage.textContent = "User with this email already exists. Please login.";
    formMessage.classList.add("text-danger");
    return;
  }

  const newUser = {
    username,
    email,
    password,
    role: "user"
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  formMessage.textContent = "Registration successful! Redirecting to login...";
  formMessage.classList.add("text-success", "fw-bold");

  setTimeout(() => {
    window.location.href = 'user-dashboard.html';
  }, 1000);
});

document.querySelectorAll('.toggle-password').forEach(toggle => {
  toggle.addEventListener('click', function () {
    const input = document.getElementById(this.dataset.target);
    const icon = this.querySelector('i');

    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    } else {
      input.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  });
});
