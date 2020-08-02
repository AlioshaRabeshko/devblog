import {
	GET_COMMENTS,
	ADD_COMMENT,
	EDIT_COMMENT,
	DELETE_COMMENT,
} from '../actions/types';
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
) => {
	axios
		.put(`/api/comments/${postId}/${postAuthor}`, { authorId, content })
		.then((res) =>
			dispatch({
				type: ADD_COMMENT,
				payload: res.data,
			})
		);
};

export const editComment = (id, content, index) => (dispatch) => {
	axios.put(`/api/comments/edit/${id}`, { content }).then((res) =>
		dispatch({
			type: EDIT_COMMENT,
			index,
			payload: res.data,
		})
	);
};

export const deleteComment = (id, index) => (dispatch) => {
	axios.delete(`/api/comments/${id}`).then((res) =>
		dispatch({
			type: DELETE_COMMENT,
			index,
			payload: res.data,
		})
	);
};
