import React, { useState } from "react";
import Header from "./header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Notes from "./Note"
function App()
{
   const[notes,setNotes] = useState([]);
   function addNote(newNote)
  {
     setNotes(prevNotes =>{
      return[...prevNotes,newNote];
     });
  }

  function deleted(id)
  {
     setNotes(prevNotes =>{
     return     prevNotes.filter((noteItem,index)=>{
           return index!==id;
      })
     })
  }
    return(
      <div >
       <Header/>
       <CreateArea onAdd={addNote}/>
        {notes.map((noteItem,index) => {
          return <Notes 
           key ={index} id ={index} title ={noteItem.title} content ={noteItem.content}  delete ={deleted}
        />
        })}
       <Footer/>
      </div>
    )
}

export default App;