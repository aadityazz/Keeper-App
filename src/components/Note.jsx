import React from "react";


function Note(props) {
  function deleteNote() {
    props.onDelete(props.id);
  }
  function editNote() {
    props.editNote(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}>-</button>
      <button onClick={editNote}>Edit</button>
    </div>
  );
}

export default Note;
