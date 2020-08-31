import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { EditorContext } from '../context/editor';
import Editor from './Editor';
import { addStatic } from '../actions/posts';

function NewStatic() {
	const [content, setContent] = useState(null);
	const [title, setTitle] = useState(null);
	const [page, setPage] = useState(null);
	const [warn, setWarn] = useState(null);
	const history = useHistory();
	const dispatch = useDispatch();
	function submitPost() {
		if (!content) return setWarn('No content');
		dispatch(addStatic({ title, content, page }, history));
	}
	return (
		<div>
			<div className="new-post-inputs">
				<input
					type="text"
					placeholder="Post title"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					placeholder="Page URL"
					className="categories"
					type="text"
					onChange={(e) => setPage(e.target.value)}
				/>
			</div>
			<h2>Page's main content</h2>
			<EditorContext.Provider value={{ content, setContent }}>
				<Editor />
			</EditorContext.Provider>
			<p className="sign-error text-center">{warn}</p>
			<button className="sign-button upload-button" onClick={submitPost}>
				Public
			</button>
		</div>
	);
}

export default NewStatic;
