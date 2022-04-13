import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Note from "./Note";
import CreateArea from "./CreateArea";
import CategoryGroup from "./CategoryGroup";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("All Categories");
  const [note, setNote] = useState({
    title: "",
    category: "",
    content: ""
  })
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    if (categories.indexOf(newNote.category) === -1) setCategories([...categories, newNote.category]);
    console.log(categories);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function editNote(id) {
    let modifiedNotes = notes;

    setNote(modifiedNotes[id]);
    modifiedNotes.splice(id, 1);
    setNotes(modifiedNotes);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} note={note} setNote={setNote} />
      <div className="filter-selection-block">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {categories.map(category => <option value={category}>{category}</option>)}
          <option value={"All Categories"}>All categories</option>
        </select>
      </div>
      {!categories.includes(filter) && categories.map((category, index) => <CategoryGroup name={category} notesArray={notes} deleteNote={deleteNote} editNote={editNote} key={index} />)}
      {categories.includes(filter) && <CategoryGroup name={filter} notesArray={notes} deleteNote={deleteNote} />}
      <Footer />
    </div >
  );
}

export default App;
