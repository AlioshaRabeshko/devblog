import React from 'react';

function Comments(props) {
	return (
		<div>
			<div
				className={`comment ${
					props.comment.author.role === 'Supervisor' ||
					props.comment.author.role === 'Author'
						? 'box-supervisor'
						: ''
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
			</div>
		</div>
	);
}

export default Comments;
