import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function NoteCard({ listNotes, index, handleDelete }) {
  return (
    <div>
      {note.map((note, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>{listNotes}</Card.Text>
            <Button variant="primary" onClick={() => handleDelete(index)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default NoteCard;
