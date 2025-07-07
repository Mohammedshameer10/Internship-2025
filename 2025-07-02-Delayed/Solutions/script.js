const notesContainer = document.getElementById("notesContainer");
const createBtn = document.getElementById("createNoteBtn");
const saveBtn = document.getElementById("saveNoteBtn");
const modal = new bootstrap.Modal(document.getElementById("noteModal"));
const modalTitle = document.getElementById("modalTitle");
const titleInput = document.getElementById("noteTitle");
const contentInput = document.getElementById("noteContent");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let editIndex = null;

const colors = ['#f28b82', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8'];

function getTime() {
  const d = new Date();
  return `${d.toLocaleDateString()} ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}

function saveAndRender() {
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

function renderNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((n, i) => {
    notesContainer.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card shadow" style="background:${n.color}">
          <div class="card-body">
            <h5 class="card-title">${n.title}</h5>
            <p class="card-text">${n.content}</p>
            <p class="text-muted small">${n.timestamp}</p>
            <button class="btn btn-sm btn-dark me-2 edit" data-i="${i}">✏️</button>
            <button class="btn btn-sm btn-danger delete" data-i="${i}">🗑️</button>
          </div>
        </div>
      </div>`;
  });
}

createBtn.onclick = () => {
  modalTitle.textContent = "New Note";
  titleInput.value = "";
  contentInput.value = "";
  editIndex = null;
  modal.show();
};

saveBtn.onclick = () => {
  const title = titleInput.value.trim() || "Untitled";
  const content = contentInput.value.trim();
  if (!content) return;

  const note = { title, content, timestamp: getTime(), color: colors[Math.floor(Math.random() * colors.length)] };

  if (editIndex !== null) notes[editIndex] = { ...notes[editIndex], ...note };
  else notes.push(note);

  saveAndRender();
  modal.hide();
};

notesContainer.onclick = (e) => {
  const i = e.target.dataset.i;
  if (e.target.classList.contains("delete")) {
    notes.splice(i, 1);
    saveAndRender();
  } else if (e.target.classList.contains("edit")) {
    editIndex = i;
    modalTitle.textContent = "Edit Note";
    titleInput.value = notes[i].title;
    contentInput.value = notes[i].content;
    modal.show();
  }
};

renderNotes();
