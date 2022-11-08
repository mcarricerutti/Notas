import './Note.css';
import React, {useState} from "react";
import {FaTrashAlt} from "react-icons/fa";


const Note = (props) => {
    const {text, id, date, handleOnDelete, handleFileNote, isFiled} = props;

    const [newText, setNewText] = useState("");

    const handleChangeText = (e) => {
        if(e.target.value.length >= 0){
            setNewText(newText);
        }
    }

    return(
        <>
        <div key={id} className="contNota">

            <textarea cols="10" rows="8"
            onChange={handleChangeText}
            defaultValue={text}></textarea>

            <div className='footerNota'>
                <span>{date}</span>
                <FaTrashAlt className='eliminarNota' onClick={()=> handleOnDelete(id)}/>
                {isFiled(id)
                ?
                <button className="btnArchivar" onClick={()=>{handleFileNote(id)}}>Desarchivar</button>
                :
                <button className="btnArchivar" onClick={()=>{handleFileNote(id)}}>Archivar</button>
                }
            </div>

        </div> 
        </>
    )
}

export default Note;