const ADMIN_NAME = 'admin';
const ADMIN_EMAIL = 'admin@gmail.com';
const USERS_KEY = 'users';
const LOGGED_IN_KEY = 'loggedIn';

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const error = document.getElementById('loginError');

  let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  if (!users.some(u => u.role === 'admin')) {
    users.push({ id: 'EMP000', name: ADMIN_NAME, email: ADMIN_EMAIL, role: 'admin' });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  if (name === ADMIN_NAME && email === ADMIN_EMAIL) {
    const admin = users.find(u => u.role === 'admin');
    localStorage.setItem(LOGGED_IN_KEY, JSON.stringify(admin));
    window.location.href = 'home.html';
    return;
  }

  const user = users.find(u => u.name === name && u.email === email && u.role === 'user');
  if (user) {
    localStorage.setItem(LOGGED_IN_KEY, JSON.stringify(user));
    window.location.href = 'home.html';
  } else {
    error.textContent = 'Invalid credentials.';
    error.classList.remove('d-none');
  }
});
