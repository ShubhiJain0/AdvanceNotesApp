import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useNoteStore from "./store";
import "./App.css";
import SideBar from "./SideBar";
function App() {
 const {
   notes,
   search,
   editorContent,
   noteColor,
   currentNoteIndex,
   setColor,
   setNotes,
   setCurrentNoteIndex,
   setSearch,
   setEditorContent,
   addOrUpdateNote,
   selectNote,
 } = useNoteStore();
  return (
    <>
      <div className="h-screen flex">
        {/* sidebar */}
        <SideBar />
        {/* main */}
        <div className="w-2/3 p-8">
          <ReactQuill
            placeholder="write your note here :)..."
            theme="snow"
            className="w-96 bg-white mb-[2rem] border border-gray-400
      rounded-2xl overflow-hidden "
      value={editorContent}
      onChange={setEditorContent}
          />

          {/* color selector */}
          <div className="flex ml-[2rem] items-center mt-4 space-x-4 ">
            <input
              type="color"
              name=""
              id=""
              value={noteColor}
              className="p-1 w-10 h-10"
              onChange={(e) => setColor(e.target.value)}
            />
            <p>Choose a color</p>
            <button
              onClick={addOrUpdateNote}
              className={`py-2 px-4 rounded-lg text-white ${
                currentNoteIndex === null
                  ? `bg-blue-500 hover:bg-blue-700`
                  : `bg-yellow-500 hover:bg-yellow-700`
              }`}
            >
              {currentNoteIndex === null ? "Save Note" : "Update Note"}
            </button>
          </div>
        </div>
        {/* save and update button */}
      </div>
    </>
  );
}

export default App;
