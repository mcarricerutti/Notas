import './App.css';
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import NoteListContainer from "./components/NoteListContainer/NoteListContainer";
import Buscador from "./components/Buscador/Buscador";


function App() {
  const [buscarNota, setBuscarNota] = useState("");
  const [archivarNotas, setArchivarNotas] = useState([]);
  const [notes, setNotes] = useState([]);
  

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


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const deletedNote = notes.filter((note) => note.id !== id);
    const deletedFileNote = archivarNotas.filter((note) => note.id !== id);
    setNotes(deletedNote);
    setArchivarNotas(deletedFileNote);
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
      <Buscador handleBuscador={setBuscarNota} />
      <NoteListContainer
      notes={notes.filter((note) => note.text.includes(buscarNota))}
      handleAddNote={addNote}
      handleOnDelete={deleteNote}
      handleFileNote={fileNotes}
      filesNotes={archivarNotas}
      isFiled={isFiled}
      />
    </div>
    </>
  );
}

export default App;
