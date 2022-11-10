import React, {useState} from "react";
import NewNote from "../NewNote/NewNote";
import Note from "../Note/Note";
import "./NoteListContainer.css";


const NoteListContainer = (props) => {
    const [noteArch, setNoteArch] = useState(false);

    const archivedNotes = () => {
        setNoteArch(!noteArch);
    }

    const {notes, filesNotes, handleAddNote, handleOnDelete, handleFileNote, isFiled} = props

    return(
        <>
        {
            noteArch ?
            <>
            <div className='archivoNotas' >
                <button className='btnNote' onClick={archivedNotes}>Activas</button>
            </div>
            <div className='titleArch'>
                <p>Archivadas</p>
            </div>
            <div className='contListNotas'>
                {filesNotes.map((note) =>
                    <Note key={note.id} id={note.id} text={note.text} date={note.date} handleOnDelete={handleOnDelete} handleFileNote={handleFileNote} isFiled={isFiled} />
                )}
            </div>
            </>
                :
            <>
            <div className='archivoNotas' >
                <button className='btnNote' onClick={archivedNotes}>Archivadas</button>
            </div>
            <div className='titleArch'>
                <p>Activas</p>
            </div>
            <div className='contListNotas'>
                <NewNote handleAddNote={handleAddNote} />
                {notes.map((note) =>
                <Note key={note.id} id={note.id} text={note.text} date={note.date} handleOnDelete={handleOnDelete} handleFileNote={handleFileNote} isFiled={isFiled} />
                )}
            </div>
            </>
        }
        </>
    )
}

export default NoteListContainer;