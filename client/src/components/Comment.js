import React from 'react';
import PrivateComponent from './PrivateComponent';
import { useEditor } from '../context/editor';
import { deleteComment } from '../actions/comments';
import { useDispatch } from 'react-redux';

function Comments(props) {
	const {
		status,
		setStatus,
		setContent,
		setId,
		setEdit,
		setIndex,
	} = useEditor();
	const dispatch = useDispatch();
	return (
		<div>
			<div
				className={`comment ${
					props.comment.author.role === 'Supervisor' ||
					props.comment.author.role === 'Author'
						? 'box-supervisor'
						: null
				}`}>
				<div className="author-info">
					<p className="author">{props.comment.author.name}</p>
					<p className="status">{props.comment.author.status}</p>
					<p className="role">{props.comment.author.role}</p>
					<p className="commented">
						Commented: {props.comment.createdAt.split('T')[0]}
					</p>
				</div>
				<div
					className="comment-content"
					dangerouslySetInnerHTML={{ __html: props.comment.content }}
				/>
				<PrivateComponent perm={50}>
					<div className="comment-edit">
						<button
							className="logout"
							onClick={(e) => {
								if (!status) {
									setIndex(props.index);
									setEdit(true);
									setStatus(true);
									setContent(props.comment.content);
									setId(props.comment.id);
								}
							}}>
							Edit
						</button>
						<button
							className="logout"
							onClick={(e) =>
								dispatch(deleteComment(props.comment.id, props.index))
							}>
							Delete
						</button>
					</div>
				</PrivateComponent>
			</div>
		</div>
	);
}

export default Comments;
