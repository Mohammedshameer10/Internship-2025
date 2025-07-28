import React from "react";

function MainEditor({
  isEditing,
  currentNote,
  setCurrentNote,
  selectedNoteIndex,
  handleDoneOrSave,
  handleDelete,
}) {
  return (
    <div className="flex-1 p-4 flex flex-col overflow-auto">
      {isEditing ? (
        <>
          <div className="flex justify-end space-x-2 mb-2">
            <button
              onClick={handleDoneOrSave}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              {selectedNoteIndex !== null ? "Save" : "Done"}
            </button>
            <button
              onClick={handleDelete}
              disabled={selectedNoteIndex === null}
              className={`px-3 py-1 rounded text-white ${
                selectedNoteIndex !== null
                  ? "bg-red-400 hover:bg-red-500"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Delete
            </button>
          </div>

          <div className="flex justify-center items-center flex-1">
            <textarea
className="w-full sm:w-[300px] md:w-[400px] lg:w-[600px] xl:w-[800px] 
           h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] 
           p-4 bg-gray-800 text-white rounded resize-none"

              placeholder="Type your note here..."
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
            />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500 italic">
          Click "New +" or select a note to start writing...
        </div>
      )}
    </div>
  );
}

export default MainEditor;
