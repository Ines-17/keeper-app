import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
	function handleClick(p) {
		props.onDelete(props.id);
	}

	return (
		<div className='note'>
			<h2>{props.title}</h2>
			<p>{props.content}</p>
			<button onClick={handleClick}>
				<DeleteIcon />
			</button>
		</div>
	);
}

export default Note;
