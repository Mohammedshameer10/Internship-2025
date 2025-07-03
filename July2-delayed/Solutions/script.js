const notesContainer = document.getElementById("notesContainer");
const createBtn = document.getElementById("createNoteBtn");
const saveBtn = document.getElementById("saveNoteBtn");
const modal = new bootstrap.Modal(document.getElementById("noteModal"));
const modalTitle = document.getElementById("modalTitle");
const titleInput = document.getElementById("noteTitle");
const contentInput = document.getElementById("noteContent");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let currentEditIndex = null;

const colors = ['#f28b82', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8'];

function getTimestamp() {
  const now = new Date();
  return `${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}

function renderNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((note, index) => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    const card = document.createElement("div");
    card.className = "card text-dark mb-4 shadow rounded-4";
    card.innerHTML = `
      <div class="card-body" style="background-color: ${note.color}">
        <h5 class="card-title border-bottom pb-2 mb-3">${note.title}</h5>
        <p class="card-text border-bottom pb-2 mb-3">${note.content}</p>
        <p class="text-muted small mb-3">${note.timestamp}</p>
        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-outline-dark edit" data-index="${index}" title="Edit">
            <i class="bi bi-pencil-fill note-icon"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger delete" data-index="${index}" title="Delete">
            <i class="bi bi-trash-fill note-icon"></i>
          </button>
        </div>
      </div>
    `;

    col.appendChild(card);
    notesContainer.appendChild(col);
  });
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

createBtn.addEventListener("click", () => {
  modalTitle.textContent = "Create New Note";
  titleInput.value = "";
  contentInput.value = "";
  currentEditIndex = null;
  modal.show();
});

saveBtn.addEventListener("click", () => {
  const title = titleInput.value.trim() || "Untitled";
  const content = contentInput.value.trim();
  const timestamp = getTimestamp();

  if (!content) return;

  if (currentEditIndex !== null) {
    notes[currentEditIndex] = { ...notes[currentEditIndex], title, content, timestamp };
  } else {
    notes.push({
      title,
      content,
      timestamp,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  saveNotes();
  renderNotes();
  modal.hide();
});

notesContainer.addEventListener("click", (event) => {

  const clickedButton = event.target.closest("button");

  if (!clickedButton) return;

  // Get the note's index (position in the array)
  const noteIndex = clickedButton.dataset.index;

  if (clickedButton.classList.contains("delete")) {
    notes.splice(noteIndex, 1);        
    saveNotes();                        
    renderNotes();                    
  }

  else if (clickedButton.classList.contains("edit")) {
    currentEditIndex = noteIndex;      
    const note = notes[noteIndex];     
    modalTitle.textContent = "Edit Note";
    titleInput.value = note.title;     
    contentInput.value = note.content; 
    modal.show();                      
  }
});

renderNotes();

