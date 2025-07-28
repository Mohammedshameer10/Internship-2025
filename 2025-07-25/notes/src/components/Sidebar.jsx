import React from "react";

const Sidebar = ({
  notes,
  selectedNoteIndex,
  handleSelectNote,
  handleNewNote,
}) => {
  return (
    <div className="w-72 bg-gray-900 text-white p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">My Notes</h2>
        <button
          onClick={handleNewNote}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          New
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2">
        {notes.map((note, index) => (
          <div
            key={index}
            onClick={() => handleSelectNote(index)}
            className={`p-3 rounded cursor-pointer ${
              selectedNoteIndex === index
                ? "bg-blue-700"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <div className="font-medium text-sm truncate">
              {note.text.split("\n")[0] || "Untitled Note"}
            </div>
            {note.category && (
              <div className="text-xs text-gray-300 mt-1 italic">
                {note.category}
              </div>
            )}
            <div className="text-xs text-gray-400 mt-1">
              {note.date || ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
