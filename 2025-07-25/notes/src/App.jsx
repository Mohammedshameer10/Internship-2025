import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainEditor from "./components/MainEditor";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleDoneOrSave = () => {
    if (currentNote.trim() === "") return;

    const newNote = {
      text: currentNote,
      date: new Date().toLocaleString(),
    };

    if (selectedNoteIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[selectedNoteIndex] = newNote;
      setNotes(updatedNotes);
    } else {
      setNotes([newNote, ...notes]);
    }

    setCurrentNote("");
    setSelectedNoteIndex(null);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (selectedNoteIndex !== null) {
        const updatedNotes = notes.filter((note, i) => {
          return i !== index;
      });
      setNotes(updatedNotes);
      setCurrentNote("");
      setSelectedNoteIndex(null);
      setIsEditing(false);
    }
  };

  const handleSelectNote = (index) => {
    setSelectedNoteIndex(index);
    setCurrentNote(notes[index].text);
    setIsEditing(true);
  };

  const handleNewNote = () => {
    setCurrentNote("");
    setSelectedNoteIndex(null);
    setIsEditing(true);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex flex-1 flex-col sm:flex-row overflow-hidden">
        <Sidebar
          notes={notes}
          selectedNoteIndex={selectedNoteIndex}
          handleSelectNote={handleSelectNote}
          handleNewNote={handleNewNote}
        />
        <MainEditor
          isEditing={isEditing}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
          selectedNoteIndex={selectedNoteIndex}
          handleDoneOrSave={handleDoneOrSave}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
