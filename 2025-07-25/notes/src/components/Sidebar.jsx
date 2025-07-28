import React from "react";

function Sidebar({ notes, selectedNoteIndex, handleSelectNote, handleNewNote }) {
  return (
    <div className="w-full sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/12 bg-white border-r border-gray-300 p-3 flex flex-col">
      <button
        onClick={handleNewNote}
        className="bg-blue-500 text-white text-sm px-3 py-1 rounded mb-3 hover:bg-blue-600"
      >
        New +
      </button>

      <div className="space-y-2 overflow-y-auto">
        {notes.map((note, index) => (
          <button
            key={index}
            onClick={() => handleSelectNote(index)}
            className={`w-full text-left p-2 rounded text-sm hover:bg-gray-200 ${
              selectedNoteIndex === index ? "bg-blue-100" : "bg-gray-100"
            }`}
          >
            <p className="font-semibold truncate">
              {note.text.split("\n")[0] || "Untitled"}
            </p>
            <p className="text-xs text-gray-500">{note.date}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
