import React, {useState} from "react";
import "./NewNote.css";

const NewNote = (props) => {
    const {handleAddNote} = props;
    const [newNote, setNewNote] = useState("");
    const characterLimit = 200;

    const handleOnChangeText = (e) => {
        if(characterLimit - e.target.value.length >= 0){
            setNewNote(e.target.value)
        }
    }

    const handleOnClick = () => {
        if(newNote.trim().length > 0){
            handleAddNote(newNote);
            setNewNote("");
        }
    }

    return(
        <>
        <div className="contNewNote">
            <textarea cols="10" rows="8"
            placeholder='Nueva nota...'
            onChange={handleOnChangeText}
            value={newNote}></textarea>

            <div >
                <div >
                    <span className="spanNewNota">({characterLimit - newNote.length} Caracteres Restantes)</span>
                    <div>
                    <button className='btnGuardarNewNota' onClick={handleOnClick}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    
}

export default NewNote;