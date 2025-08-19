import React, { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainEditor from "./components/MainEditor";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./components/firebase";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const notesRef = collection(db, "notes");

  useEffect(() => {
    const fetchNotes = async () => {
      const snapshot = await getDocs(notesRef);
      const fetchedNotes = snapshot.docs.map((doc) =>
  Object.assign({ id: doc.id }, doc.data())
);
      setNotes(fetchedNotes);
    };
    fetchNotes();
  }, []);

  const handleSelectNote = (index) => {
    setSelectedNoteIndex(index);
    setCurrentNote(notes[index].text);
    setIsEditing(true);
    setShowSidebar(false);
  };

  const handleNewNote = () => {
    setCurrentNote("");
    setSelectedNoteIndex(null);
    setIsEditing(true);
    setShowSidebar(false);
  };

  const handleSaveNote = async (noteText) => {
    if (noteText.trim() === "") return;

    const newNote = {
      text: noteText,
      date: new Date().toLocaleString(),
    };

    if (selectedNoteIndex === null) {
      const docRef = await addDoc(notesRef, newNote);
      setNotes([{ id: docRef.id, ...newNote }, ...notes]);
    } else {
      const noteToUpdate = notes[selectedNoteIndex];
      const noteDoc = doc(db, "notes", noteToUpdate.id);
      await updateDoc(noteDoc, newNote);

      const updatedNotes = [...notes];
      updatedNotes[selectedNoteIndex] = {
        id: noteToUpdate.id,
        text: newNote.text,
      };
      setNotes(updatedNotes);
    }

    setCurrentNote("");
    setSelectedNoteIndex(null);
    setIsEditing(false);
  };

  const handleDeleteNote = async (index) => {
    const noteToDelete = notes[index];
    await deleteDoc(doc(db, "notes", noteToDelete.id));

  const updatedNotes = notes.filter((note, i) => {
    return i !== index;
  });
  setNotes(updatedNotes);


    if (selectedNoteIndex === index) {
      setCurrentNote("");
      setSelectedNoteIndex(null);
      setIsEditing(false);
    } else if (selectedNoteIndex > index) {
      setSelectedNoteIndex(selectedNoteIndex - 1);
    }
  };

  const handleToggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar onHamburgerClick={handleToggleSidebar} />
      <div className="flex flex-1 flex-col sm:flex-row overflow-hidden">
        <Sidebar
          notes={notes}
          selectedNoteIndex={selectedNoteIndex}
          handleSelectNote={handleSelectNote}
          handleNewNote={handleNewNote}
          handleDeleteNote={handleDeleteNote}
          showSidebar={showSidebar}
          onHideSidebar={() => setShowSidebar(false)}
        />
        <MainEditor
          isEditing={isEditing}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
          selectedNoteIndex={selectedNoteIndex}
          handleSaveNote={handleSaveNote}
        />
      </div>
    </div>
  );
}

export default App;