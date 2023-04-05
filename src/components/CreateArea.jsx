import  React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
function CreateArea(props)
{

    const[note,setNote] = useState({
        title : "",
        content :"",
        time :" "
    })
    const[isExpanded,setExpanaded] = useState(false);
    function handleChange(event)
    {
        const{name ,value} = event.target ;
        setNote(prevNote => {
            return{
                ...prevNote,
                [name] :value
            }
        })
        
   }
   function submitNote(event)
   {
    props.onAdd(note);
    setNote({
        title : "",
        content :""
    })
     event.preventDefault();
   }
   function isExpand()
   {
    setExpanaded(true);
   }
    return(
        <div>
            <form className="create-note" >
                {isExpanded && (<input name ="title" placeholder="Title" value={note.title} onChange={handleChange}/> )}
                <textarea name ="content" placeholder="Take a note..." rows={3} value={note.content} onChange={handleChange} onClick={isExpand}/>
                <Zoom in={isExpand}><Fab onClick={submitNote}><AddIcon/></Fab></Zoom>
            </form>
        </div>
    )
}

export default CreateArea;