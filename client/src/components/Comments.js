import React, { useEffect } from 'react';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NewComment from './NewComment';
import { getComments } from '../actions/comments';

function Comments(props) {
	const { comments } = useSelector((state) => state.comments);
	const { post } = useSelector((state) => state.posts);
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getComments(id, post.author));
	}, [dispatch, id, post]);
	return (
		<div className="comments">
			<NewComment postAuthor={props.postAuthor} />
			{comments.map((el, commentId) => (
				<Comment key={commentId} comment={el} />
			))}
		</div>
	);
}

export default Comments;
