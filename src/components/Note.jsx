import React from "react";

function Note(props) {
  function handleClick() {
    //inside here is hwere we are going to trrigger a function that gets passed over from the props that will delete this note from the array
    props.onDelete(props.id); //tapping into the props from the Note compnent declared at App.jsx. //piicking up the id that is being given by the Note component back in App.jsx via map noteItem from the notes array
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
