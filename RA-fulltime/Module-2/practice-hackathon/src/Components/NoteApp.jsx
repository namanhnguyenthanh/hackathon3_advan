import React, { useState } from "react";
import "./NoteApp.css";
import NoteInput from "./NoteInput";
import NoteCard from "./NoteCard";

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [listnotes, setListnotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  const handleDelete = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div>
      <h1>Note App</h1>
      <div>
        <NoteInput />
        <NoteCard notes={notes} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default NoteApp;
