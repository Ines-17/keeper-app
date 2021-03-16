import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
	return (
		<div>
			<Header />
			<div className='main'>
				{notes.map((noteItem) => (
					<Note
						key={noteItem.key}
						title={noteItem.title}
						content={noteItem.content}
					/>
				))}
			</div>
			<Footer />
		</div>
	);
}

export default App;
