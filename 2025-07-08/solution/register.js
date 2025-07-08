 document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(!emailRegex.test(email)) {
    alert("please enter a valid email address");
    return;
    }

  function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  return regex.test(password);
  }

  if(!validatePassword(password)){
    alert("password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];

  const userExists = users.some(user => user.email === email );
  if (userExists) {
    alert("User with this email already exists.please click on login to login.  ");
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

  alert("Registration successful! You can now log in.");
  window.location.href = 'login.html'; 
});

document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  const icon = document.getElementById('eyeIcon');

  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';

  icon.classList.toggle('fa-eye');
  icon.classList.toggle('fa-eye-slash');
});