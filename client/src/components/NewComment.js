import React, { useState } from 'react';
import Editor from './CommentEditor';
import { EditorContext } from '../context/editor';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from '../actions/comments';

function NewComment(props) {
	const [content, setContent] = useState('');
	const [status, setStatus] = useState(false);
	const { id } = useParams();
	const { user } = useSelector((state) => state.user.user);
	const dispatch = useDispatch();
	if (user.name === '') return '';
	if (!status) {
		return (
			<button className="logout" onClick={() => setStatus(true)}>
				Comment
			</button>
		);
	}
	return (
		<div className="new-comment">
			<EditorContext.Provider value={{ content, setContent }}>
				<Editor />
			</EditorContext.Provider>
			{content !== '' ? (
				<button
					className="logout"
					onClick={() => {
						setStatus(false);
						dispatch(addComment(id, user.id, props.postAuthor, content));
						setContent('');
					}}>
					Comment
				</button>
			) : (
				''
			)}
		</div>
	);
}

export default NewComment;
