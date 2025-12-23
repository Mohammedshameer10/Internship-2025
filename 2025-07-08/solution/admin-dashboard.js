const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
let users = JSON.parse(localStorage.getItem("users")) || [];

if (!loggedInUser || loggedInUser.role !== "admin") {
  alert("Access denied. Admins only.");
  window.location.href = "login.html";
}

document.getElementById("welcomeMessage").textContent = `👋 Welcome, ${loggedInUser.username}!`;

const tableBody = document.getElementById("employeeTableBody");
const searchInput = document.getElementById("searchInput");
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  alert("You have been logged out.");
  window.location.href = "login.html";
});

document.getElementById("sidebarToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("collapsed");
});

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
      <td>${user.role}</td>
      <td>
        <div class="dropdown">
          <button class="btn btn-sm btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-ellipsis-v"></i>
          </button>
          <ul class="dropdown-menu">
            ${user.role === "user"
              ? `<li><a class="dropdown-item promote-btn" href="#" data-email="${user.email}">Promote to Admin</a></li>`
              : user.email !== "admin@example.com"
              ? `<li><a class="dropdown-item depromote-btn" href="#" data-email="${user.email}">Depromote to User</a></li>`
              : ""
            }
            <li><a class="dropdown-item text-danger remove-btn" href="#" data-email="${user.email}">Remove</a></li>
          </ul>
        </div>
      </td>
    `;
    tableBody.appendChild(row);
  });

  for (let i = paginatedData.length; i < rowsPerPage; i++) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `<td colspan="5" style="height: 48px;"></td>`;
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

tableBody.addEventListener("click", (e) => {
  const email = e.target.dataset.email;
  if (!email) return;

  if (e.target.classList.contains("promote-btn")) {
    const userIndex = users.findIndex(u => u.email === email);
    if (users[userIndex].role !== "admin") {
      users[userIndex].role = "admin";
      localStorage.setItem("users", JSON.stringify(users));
      employees = users;
      alert(`${users[userIndex].username} has been promoted to admin.`);
      renderTable(filterEmployees(searchInput.value));
    }
  }

  if (e.target.classList.contains("depromote-btn")) {
    const userIndex = users.findIndex(u => u.email === email);
    if (users[userIndex].role === "admin" && users[userIndex].email !== "admin@example.com") {
      users[userIndex].role = "user";
      localStorage.setItem("users", JSON.stringify(users));
      employees = users;
      alert(`${users[userIndex].username} has been demoted to user.`);
      renderTable(filterEmployees(searchInput.value));
    }
  }

  if (e.target.classList.contains("remove-btn")) {
    if (confirm("Are you sure you want to remove this employee?")) {
      users = users.filter(u => u.email !== email);
      localStorage.setItem("users", JSON.stringify(users));
      employees = users;
      alert("Employee removed.");
      renderTable(filterEmployees(searchInput.value));
    }
  }
});

renderTable(employees);
