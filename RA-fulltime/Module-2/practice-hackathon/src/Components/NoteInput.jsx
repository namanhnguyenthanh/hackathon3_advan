import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NoteInput() {
  const handleInput = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
    setNote("");
  };
  return (
    <div>
      <div className="title">
        <Form.Label htmlFor="text">Title</Form.Label>
        <Form.Control
          type="text"
          id="inputnote"
          aria-describedby="passwordHelpBlock"
          onChange={handleInput}
          value={listNotes}
        />
        <Button
          as="input"
          type="submit"
          value="Submit"
          className="btn btn-submit"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default NoteInput;
