import React from "react";
import { HiTrash } from "react-icons/hi";

function Sidebar({
  notes,
  selectedNoteIndex,
  handleSelectNote,
  handleNewNote,
  handleDeleteNote,
  showSidebar,
  onHideSidebar,
}) {
  return (
    <div className={`
      fixed top-0 left-0 h-full z-20 bg-white border-r border-gray-300 p-3 flex flex-col transition-transform
      w-64 sm:static sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/12
      ${showSidebar ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
    `}>
      <div className="flex sm:hidden justify-end">
        <button onClick={onHideSidebar} className="mb-2 px-2 py-1 text-gray-700">✕</button>
      </div>
      <button
        onClick={handleNewNote}
        className="bg-blue-500 text-white text-sm px-3 py-1 rounded mb-3 hover:bg-blue-600"
      >
        New +
      </button>

      <div className="space-y-2 overflow-y-auto">
     {notes.map((note, index) => (
  <div key={index} className="flex items-center group">
    <button
      onClick={() => handleSelectNote(index)}
      className={`flex-1 text-left p-2 rounded text-sm hover:bg-gray-200 transition ${
        selectedNoteIndex === index ? "bg-blue-100" : "bg-gray-100"
      }`}
    >
  <p className="font-semibold truncate">
  {(note.text.split("\n")[0] || "Untitled").slice(0, 6) + (note.text.length > 6 ? "…" : "")}
</p>


      <p className="text-xs text-gray-500">{note.date}</p>
    </button>
    <button
      className={`
        ml-1 text-gray-500 hover:text-red-700
        opacity-100 sm:opacity-0 sm:group-hover:opacity-100
        transition
      `}
      onClick={() => handleDeleteNote(index)}
      aria-label="Delete note"
    >
      <HiTrash />
    </button>
  </div>
))}

      </div>
    </div>
  );
}

export default Sidebar;
