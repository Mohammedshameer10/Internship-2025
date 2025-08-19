import React from "react";

function MainEditor({
  isEditing,
  currentNote,
  setCurrentNote,
  selectedNoteIndex,
  handleSaveNote,
}) {
  return (
    <div className="flex-1 p-4 flex flex-col overflow-auto">
      {isEditing ? (
        <div className="flex justify-center items-center flex-1">
          <textarea
            className="w-full h-full p-4 bg-gray-800 text-white rounded resize-none"
            placeholder="Type your note here..."
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
            onBlur={() => {
              if (currentNote.trim() !== "") {
                handleSaveNote(currentNote);
              }
            }}
            autoFocus
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500 italic">
          Click "New +" or select a note to start writing...
        </div>
      )}
    </div>
  );
}

export default MainEditor;
