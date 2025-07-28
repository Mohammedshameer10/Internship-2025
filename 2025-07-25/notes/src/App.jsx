import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainEditor from "./components/MainEditor";

 function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [noteCategory, setNoteCategory] = useState("");


  const handleDoneOrSave = () => {
    if (currentNote.trim() === "") return;

    if (selectedNoteIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[selectedNoteIndex] = {
        text: currentNote,
        date: new Date().toLocaleString(),
        category: noteCategory,
      };
      setNotes(updatedNotes);
    } else {
      const newNote = {
        text: currentNote,
        date: new Date().toLocaleString(),
      };
      setNotes([newNote, ...notes]);
    }

    setCurrentNote("");
    setSelectedNoteIndex(null);
    setIsEditing(false);
  };

 const handleDelete = () => {
  if (selectedNoteIndex !== null) {
    
    const updatedNotes = notes.filter((note, index) => {
      return index !== selectedNoteIndex; 
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
     setNoteCategory(notes[index].category || "");
  };

 const handleNewNote = () => {
  const newNote = {
    text: "",
    date: new Date().toLocaleString(),
    category: "", // NEW FIELD
  };
  const updatedNotes = [...notes, newNote];
  setNotes(updatedNotes);
  setSelectedNoteIndex(updatedNotes.length - 1);
  setCurrentNote("");
  setNoteCategory(""); // new state for category
};


  return (
   <div className="h-screen flex flex-col bg-gray-100">
  <Navbar />
  <div className="flex flex-1 flex-col sm:flex-row">
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
export default App