import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Note extends Component {
	
	constructor(props) {
		super(props);
		this.noteContent = props.noteContent;
		this.noteId = props.noteId;
	}

	handleRemoveNote(id) {
		const response = window.confirm("¿Deseas eliminar esta nota?")
		if(response){
			this.props.removeNote(id);
		}
		return;
	}

	render(props) {
		return (
			<div className="Note">
				<span
					className="btn-close"
					onClick={() => this.handleRemoveNote(this.noteId)}
				>
				&times;	
				</span>
				<p>{this.noteContent}</p>
			</div>
		)
	}

}

Note.propTypes = {
	noteContent: PropTypes.string	
};

export default Note;
