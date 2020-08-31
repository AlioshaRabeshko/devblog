import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { EditorContext } from '../context/editor';
import Editor from './Editor';
import { editStatic, getStatic } from '../actions/posts';

function Edit() {
	const { user } = useSelector((state) => state.user.user);
	const { staticPost } = useSelector((state) => state.posts);
	const { page } = useParams();
	const [content, setContent] = useState(null);
	const [title, setTitle] = useState(null);
	const history = useHistory();
	const dispatch = useDispatch();
	useEffect(() => dispatch(getStatic(page)), [dispatch, page]);
	function applyEdit() {
		const obj = {};
		if (content !== staticPost.content) obj.content = content;
		if (title !== staticPost.title) obj.title = title;
		dispatch(editStatic(page, obj, () => history.push(`/static/${page}`)));
	}
	if (user.verified < 999) return <Redirect to={`/static/${page}`} />;
	return (
		<div className="single edit-post">
			<div className="new-post-inputs">
				<input
					type="text"
					placeholder="Post title"
					onChange={(e) => setTitle(e.target.value)}
					defaultValue={staticPost.title}
				/>
			</div>
			<h2>Page's main content</h2>
			<EditorContext.Provider
				value={{ content: staticPost.content, setContent }}>
				<Editor />
			</EditorContext.Provider>
			<button className="sign-button upload-button" onClick={applyEdit}>
				Public
			</button>
		</div>
	);
}

export default Edit;
