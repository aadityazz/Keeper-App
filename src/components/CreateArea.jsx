import React from "react";

function CreateArea(props) {
  function handleChange(event) {
    const { name, value } = event.target;
    props.setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(props.note);
    props.setNote({
      title: "",
      category: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={props.note.title}
          placeholder="Title"
        />
        <input
          name="category"
          onChange={handleChange}
          value={props.note.category}
          placeholder="Category"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={props.note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}><h2>+</h2></button>
      </form>
    </div>
  );
}

export default CreateArea;
