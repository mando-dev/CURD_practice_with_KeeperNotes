import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    //this value is beig passed over from func submitNote
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]; //this is an aray we have created. This aray is the new arrau set as notes in our state const
    });
  }
  function deleteNote(id) {
    //id of note that needs to be deleted
    setNotes((prevNotes) => {
      //gainign access to all the 'prevNoes' array. Note item first declared insdie CreateArea comp
      return prevNotes.filter((noteItem, index) => {
        //noteItem is going to be value that we will be looping through int he array.
        return index !== id; //on the first return , we are returning to set it as the new notes array
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} /> {/*    //noteItem first declared here */}
      {notes.map((noteItem, index) => {
        //rendering a Note component for each item in array "notes". map method is taking in an arrow method. I think noteItem first declared here
        return (
          <Note //our note gets created here
            key={index} //attribnute, index declaered initially inside map method
            id={index} //attribute, index declaered initially inside map method
            title={noteItem.title} //prop
            content={noteItem.content} //prop
            onDelete={deleteNote} //the delete methid above is going to get passed aver to each of the note as a property */}
          />
        );
      })}
      {/* /surround everything with curlies so it can be recognized as js */}
      <Footer />
    </div>
  );
}
export default App;
