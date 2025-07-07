const USERS_KEY = 'users';
const LOGGED_IN_KEY = 'loggedIn';
const MAX_ID = 100;
let USERS_PER_PAGE = 5;
let currentPage = 1;

let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
let loggedIn = JSON.parse(localStorage.getItem(LOGGED_IN_KEY));
const tableBody = document.getElementById('employeeTableBody');

if (!loggedIn) window.location.href = 'login.html';
document.getElementById('loggedInName').textContent = loggedIn.name;

if (loggedIn.role === 'admin') {
  document.getElementById('addEmployeeIcon').classList.remove('d-none');
}

function renderTable(filtered = null) {
  const data = filtered || users.filter(u => u.role === 'user');
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + USERS_PER_PAGE);

  tableBody.innerHTML = '';
  paginatedData.forEach(u => {
    const canEdit = loggedIn.role === 'admin' || (loggedIn.id === u.id && !u.edited);
    const editIcon = `
      <i class="bi bi-pencil-square text-primary"
         style="font-size: 1.2rem; ${canEdit ? '' : 'opacity: 0.3; pointer-events: none;'}"
         ${canEdit ? `onclick="openEdit('${u.id}')"` : ''}></i>
    `;
    tableBody.innerHTML += `
      <tr>
        <td>${u.id}</td>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${editIcon}</td>
      </tr>
    `;
  });

  renderPagination(data.length);
}

function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / USERS_PER_PAGE);
  const container = document.getElementById('paginationContainer');
  container.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = `btn btn-sm ${i === currentPage ? 'btn-primary' : 'btn-outline-primary'} mx-1`;
    btn.textContent = i;
    btn.onclick = () => {
      currentPage = i;
      renderTable();
    };
    container.appendChild(btn);
  }
}

document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem(LOGGED_IN_KEY);
  window.location.href = 'login.html';
});

document.getElementById('addForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('newUsername').value.trim();
  const email = document.getElementById('newEmail').value.trim();

  if (!name || !email) return alert('Please fill in all fields.');
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) return alert('Email already exists.');

  const nextId = generateId();
  if (!nextId) return alert('ID limit reached.');

  users.push({ id: nextId, name, email, role: 'user', edited: false });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  currentPage = 1;
  renderTable();
  document.getElementById('addForm').reset();
  bootstrap.Modal.getInstance(document.getElementById('addModal')).hide();
});

function generateId() {
  for (let i = 1; i <= MAX_ID; i++) {
    const id = 'EMP' + String(i).padStart(3, '0');
    if (!users.find(u => u.id === id)) return id;
  }
  return null;
}

window.openEdit = function (id) {
  const user = users.find(u => u.id === id);
  if (!user) return;
  document.getElementById('editId').value = user.id;
  document.getElementById('originalId').value = user.id;
  new bootstrap.Modal(document.getElementById('editModal')).show();
};

document.getElementById('editForm').addEventListener('submit', e => {
  e.preventDefault();
  const newId = document.getElementById('editId').value.trim().toUpperCase();
  const originalId = document.getElementById('originalId').value;

  if (!/^EMP\d{3}$/.test(newId)) return alert('Invalid ID format (e.g., EMP005)');
  if (users.some(u => u.id === newId && u.id !== originalId)) return alert('ID already exists.');

  const index = users.findIndex(u => u.id === originalId);
  if (index === -1) return;

  users[index].id = newId;

  if (loggedIn.id === originalId) {
    users[index].edited = true;
    loggedIn = users[index];
    localStorage.setItem(LOGGED_IN_KEY, JSON.stringify(loggedIn));
  }

  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  renderTable();
  bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
});

document.getElementById('searchInput').addEventListener('input', function () {
  currentPage = 1;
  const keyword = this.value.trim().toLowerCase();
  
  const filtered = users.filter(u =>
    u.role === 'user' &&
    (
      u.id.toLowerCase().includes(keyword) ||
      u.name.toLowerCase().includes(keyword)
    )
  );

  renderTable(filtered);
});


renderTable();
