import React, { Component } from 'react';

import Note from '../Notes/Notes';
import NoteForm from '../AgregarNotas/AgregarNotas';


import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app'
import database from "firebase/compat/database";
import 'firebase/database';


const firebaseConfig = {
	apiKey: "AIzaSyALjmzvThDZChckDX_kZSyVzyIbLHN0FxY",
	authDomain: "misnotes-ff15c.firebaseapp.com",
	projectId: "misnotes-ff15c",
	storageBucket: "misnotes-ff15c.appspot.com",
	messagingSenderId: "1082890589074",
	appId: "1:1082890589074:web:9ff823dbe3af10e936a74b"
};


firebase.initializeApp(firebaseConfig);


class NotasContainer extends Component {

	constructor() {
		super();
		this.state = {
			notes: [
			]
		}
		this.addNote = this.addNote.bind(this);
		this.removeNote = this.removeNote.bind(this);

		this.app= firebase.initializeApp(firebaseConfig);
		this.db = this.app.database().ref().child('notes');
	}

	componentDidMount() {
		const { notes } = this.state;
		this.db.on('child_added', snap => {
			notes.push({
				noteId: snap.key,
				noteContent: snap.val().noteContent
			});

			this.setState({notes});
		});

		this.db.on('child_removed', snap => {
			for(let i = 0; i < notes.length; i++) {
				if(notes[i].noteId === snap.key) {
					notes.splice(i , 1);
				}
			}
			console.log(notes);
			this.setState({notes});
		});

	}

	addNote(note) {
		this.db.push().set({noteContent: note});
	}	

	removeNote(noteId) {
		this.db.child(noteId).remove();
	}

	render() {
		return (
			<div className="notesContainer">
			
				<div className="notesHeader">
					<h1>React and Firebase Notes App</h1>
				</div>

				<div className="notesBody">
					{
						this.state.notes.map(note => {
							return (
								<Note 
									noteContent={note.noteContent} 
									noteId={note.noteId}
									key={note.noteId}
									removeNote={this.removeNote}
								/>)
						})
					}
					
				</div>
				
				<div className="notesFooter">
					<NoteForm addNote={this.addNote}/>
				</div>
			</div>
		);
	}
}

export default NotasContainer;
