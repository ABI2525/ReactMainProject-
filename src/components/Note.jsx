import React from "react";
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
function Notes(props)
{ 
     function handleClick()
    {
       props.delete(props.id);
    }
    return (
     <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p> 
        <p>{props.time}</p>
        <Fab onClick={handleClick}><DeleteIcon/></Fab>
     </div>

    )
}

export default Notes;