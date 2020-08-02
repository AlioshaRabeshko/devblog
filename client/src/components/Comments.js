import React, { useEffect, useState } from 'react';
import { EditorContext } from '../context/editor';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NewComment from './NewComment';
import { getComments } from '../actions/comments';

function Comments(props) {
	const [content, setContent] = useState('');
	const [commentId, setId] = useState('');
	const [status, setStatus] = useState(false);
	const [edit, setEdit] = useState(false);
	const [index, setIndex] = useState(-1);
	const { comments } = useSelector((state) => state.comments);
	const { post } = useSelector((state) => state.posts);
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		if (post.author) dispatch(getComments(id, post.author));
	}, [dispatch, id, post]);
	return (
		<div className="comments">
			<EditorContext.Provider
				value={{
					content,
					setContent,
					status,
					setStatus,
					edit,
					setEdit,
					commentId,
					setId,
					index,
					setIndex,
				}}>
				<NewComment postAuthor={props.postAuthor} />
				{comments.map((el, index) => (
					<Comment key={index} comment={el} index={index} />
				))}
			</EditorContext.Provider>
		</div>
	);
}

export default Comments;
