// Get user data
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
let users = JSON.parse(localStorage.getItem("users")) || [];
const tableBody = document.getElementById("employeeTableBody");
const searchInput = document.getElementById("searchInput");
const generateBtn = document.getElementById("generateIdBtn");
const logoutBtn = document.getElementById("logoutBtn");

// Redirect if not logged in
if (!loggedInUser) {
  alert("You must login first.");
  window.location.href = "login.html";
}

// Set welcome message
document.getElementById("welcomeMessage").textContent = `👋 Welcome, ${loggedInUser.username}!`;

// Logout handler
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  alert("You have been logged out.");
  window.location.href = "login.html";
});

// Sidebar toggle
document.getElementById("sidebarToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("collapsed");
});

// Table rendering and filtering
let employees = users;
let currentPage = 1;
const rowsPerPage = 10;

function renderTable(data) {
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedData = data.slice(start, end);

  tableBody.innerHTML = "";

  paginatedData.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.id || "-"}</td>
    `;
    tableBody.appendChild(row);
  });

  // Fill empty rows for layout consistency
  for (let i = paginatedData.length; i < rowsPerPage; i++) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `<td colspan="3" style="height: 48px;"></td>`;
    tableBody.appendChild(emptyRow);
  }

  renderPagination(data.length);
}

function renderPagination(totalRows) {
  const pageCount = Math.ceil(totalRows / rowsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= pageCount; i++) {
    const li = document.createElement("li");
    li.classList.add("page-item");
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    if (i === currentPage) li.classList.add("active");

    li.addEventListener("click", function () {
      currentPage = i;
      renderTable(filterEmployees(searchInput.value));
    });

    pagination.appendChild(li);
  }
}

function filterEmployees(query) {
  return employees.filter(user =>
    user.username.toLowerCase().includes(query.toLowerCase()) ||
    user.email.toLowerCase().includes(query.toLowerCase()) ||
    (user.id && user.id.toLowerCase().includes(query.toLowerCase()))
  );
}

searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderTable(filterEmployees(searchInput.value));
});

// Generate ID logic
generateBtn.addEventListener("click", () => {
  users = JSON.parse(localStorage.getItem("users")) || [];
  const allIds = users.map(u => u.id).filter(Boolean);
  const currentUserIndex = users.findIndex(u => u.email === loggedInUser.email);

  if (currentUserIndex === -1) return alert("User not found!");

  const currentUser = users[currentUserIndex];
  if (currentUser.id) return alert(`You already created your Employee ID: ${currentUser.id}`);

  const choice = confirm("Click OK to auto-generate your ID, Cancel to enter manually.");
  let newId;

  if (choice) {
    let i = 1;
    do {
      newId = "EMP" + String(i).padStart(3, "0");
      i++;
    } while (allIds.includes(newId));
  } else {
    newId = prompt("Enter your desired Employee ID (format: EMP followed by 3+ digits):");
    if (!/^EMP\d{3,}$/.test(newId)) return alert("Invalid format.");
    if (allIds.includes(newId)) return alert("This ID already exists.");
  }

  users[currentUserIndex].id = newId;
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedInUser", JSON.stringify(users[currentUserIndex]));
  alert(`Employee ID "${newId}" created successfully!`);
  renderTable(filterEmployees(searchInput.value));
});

// Initial render
renderTable(employees);
