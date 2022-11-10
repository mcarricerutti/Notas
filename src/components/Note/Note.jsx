import './Note.css';
import React, {useState} from "react";
import {FaTrashAlt} from "react-icons/fa";
import { BsBoxArrowDown } from "react-icons/bs";



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
                <button className="btnNote" onClick={()=> handleOnDelete(id)}><FaTrashAlt/></button>

                {isFiled(id)
                ?
                <button className="btnNote" onClick={()=>{handleFileNote(id)}}> <BsBoxArrowDown/> </button>
                :
                <button className="btnNote" onClick={()=>{handleFileNote(id)}}> <BsBoxArrowDown/> </button>
                }
            </div>

            </div> 
        </>
    )
}

export default Note;