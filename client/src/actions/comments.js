import { GET_COMMENTS, ADD_COMMENT } from '../actions/types';
import axios from 'axios';

export const getComments = (postId, authorId) => (dispatch) =>
	axios.get(`/api/comments/${postId}/${authorId}`).then((res) =>
		dispatch({
			type: GET_COMMENTS,
			payload: res.data,
		})
	);

export const addComment = (postId, authorId, postAuthor, content) => (
	dispatch
) =>
	axios
		.put(`/api/comments/${postId}/${postAuthor}`, { authorId, content })
		.then((res) =>
			dispatch({
				type: ADD_COMMENT,
				payload: res.data,
			})
		);
