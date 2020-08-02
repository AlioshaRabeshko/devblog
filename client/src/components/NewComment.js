import React from 'react';
import Editor from './CommentEditor';
import { useEditor } from '../context/editor';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment, editComment } from '../actions/comments';

function NewComment(props) {
	const {
		status,
		setStatus,
		content,
		setContent,
		edit,
		commentId,
		index,
	} = useEditor();
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
			<Editor />
			{!edit ? (
				content !== '' ? (
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
				)
			) : (
				<button
					className="logout"
					onClick={() => {
						setStatus(false);
						dispatch(editComment(commentId, content, index));
						setContent('');
					}}>
					Save
				</button>
			)}
		</div>
	);
}

export default NewComment;
