import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    //setting initial state for christ sake
    title: "",
    content: ""
  });
  function handleChange(e) {
    //so below is like event.target.name, event.traget.value
    const { name, value } = e.target; //destructuring obejct. this crates 2 constants
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value //turns this name string into constant value
      };
    }); //calling on my note. receiving previosuNOte. prevVnote first used here
  }
  function submitNote(e) {
    props.onAdd(note); // this data being passed to func addNote
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault(); //preventing from just flashing on screen
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />

        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}
export default CreateArea;
