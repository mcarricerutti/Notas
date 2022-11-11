import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNote from "../NewNote/NewNote";
import NoteListContainer from "../NoteListContainer/NoteListContainer";
import Buscador from "../Buscador/Buscador";


const Cover = () => {

const [buscarNota, setBuscarNota] = useState("");
  const [archivarNotas, setArchivarNotas] = useState([]);
  const [notes, setNotes] = useState([]);
  const [cont, setCont] = useState(0);

  useEffect(() => {
    const guardarNotas = JSON.parse(
      localStorage.getItem("notes-app-data")
    );
    if(guardarNotas){
      setNotes(guardarNotas)
    };
  }, []);


  useEffect(() => {
    localStorage.setItem(
      "notes-app-data",
      JSON.stringify(notes)
    );
  }, [notes]);


  useEffect(() => {
    const guardarArchNotas = JSON.parse(
      localStorage.getItem("filesNotes-app-data")
    );
    if(guardarArchNotas){
      setArchivarNotas(guardarArchNotas)
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "filesNotes-app-data",
      JSON.stringify(archivarNotas)
    );
  }, [archivarNotas]);

  useEffect(() => {
    const guardarCantNotas = JSON.parse(
      localStorage.getItem("cantNotas")
    );
    if(guardarCantNotas){
      setCont(guardarCantNotas)
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "cantNotas",
      JSON.stringify(cont)
    );
  }, [cont]);


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
    setCont(cont +1);
  };

  const deleteNote = (id) => {
    const deletedNote = notes.filter((note) => note.id !== id);
    const deletedFileNote = archivarNotas.filter((note) => note.id !== id);
    setNotes(deletedNote);
    setArchivarNotas(deletedFileNote);
    setCont(cont -1);
  };

  const isFiled = (id) => {
    return archivarNotas.some((note) => note.id === id)
  };

  const fileNotes = (id) => {
    if(isFiled (id)) {
      const archivarNota = archivarNotas.find((note) => note.id === id);
      const changeArchivarNota = archivarNotas.filter((note) => note.id !== id);
      const newNotes = [...notes, archivarNota];
      setNotes(newNotes);
      setArchivarNotas(changeArchivarNota);
    }else{
      const fileNota = notes.find((note) => note.id === id);
      const changeArchivarNota = notes.filter((note) => note.id !== id);
      const newArchivoNotas = [...archivarNotas, fileNota];
      setArchivarNotas(newArchivoNotas);
      setNotes(changeArchivarNota);
    }
  };

  return (
    <>
    <div className="contenedorApp">
      <div className='container'>
      <div className='contTitleYCont'>
        <h1 className="titleApp">Mis Notas</h1>
        <p className='contador'> ({cont})</p>
      </div>
      <Buscador handleBuscador={setBuscarNota} />
      {
        cont === 0 ?
        <>
        <NewNote
        handleAddNote={addNote}
        />
        <p className='alertSinNot'>Sin Notas</p>
        </>

        :
        <NoteListContainer
        notes={notes.filter((note) => note.text.includes(buscarNota))}
        handleAddNote={addNote}
        handleOnDelete={deleteNote}
        handleFileNote={fileNotes}
        filesNotes={archivarNotas}
        isFiled={isFiled}
        />
      }
      </div>
    </div>
    </>
  );
}

export default Cover;