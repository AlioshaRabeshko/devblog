import {
	GET_POSTS,
	GET_CATEGORIES,
	GET_POST,
	ADD_POST,
	DELETE_POST,
	EDIT_STATEMENT,
	GET_UNVERIFIED,
	LOADING,
} from './types';
import axios from 'axios';

export const getPosts = (category, authorId, query, page) => (dispatch) => {
	dispatch(setLoading());
	const req = `${
		category
			? '/category/' + category
			: authorId
			? '/author/' + authorId
			: query
			? '/search/' + query
			: ''
	}/${page ? page : 0}/`;
	axios.get(`/api/posts${req}`).then((res) =>
		dispatch({
			type: GET_POSTS,
			payload: res.data,
		})
	);
};

export const getPost = (id) => (dispatch) => {
	dispatch(setLoading());
	axios
		.get(`/api/posts/post/${id}`)
		.then((res) =>
			dispatch({
				type: GET_POST,
				payload: res.data,
			})
		)
		.catch(() =>
			dispatch({
				type: GET_POST,
				payload: null,
			})
		);
};

export const addPost = (data, history) => (dispatch) => {
	axios.post('/api/posts/add', data).then((res) => {
		history.push(`/post/${res.data.id}`);
		dispatch({
			type: ADD_POST,
			payload: res.data,
		});
	});
};

export const editPost = (id, userId, data, cb) => (dispatch) => {
	axios.put(`/api/posts/edit/${id}`, { userId, data }).then((res) => {
		cb();
		dispatch({
			type: EDIT_STATEMENT,
			payload: res.data,
		});
	});
};

export const deletePost = (id, userId, history) => (dispatch) => {
	axios.delete(`/api/posts/${userId}/${id}`).then(() => {
		history.push('/');
		dispatch({ type: DELETE_POST });
	});
};

export const getCategories = () => (dispatch) => {
	axios.get('/api/posts/category').then((res) =>
		dispatch({
			type: GET_CATEGORIES,
			payload: res.data,
		})
	);
};

export const verify = (postId, userId) => (dispatch) => {
	axios.put(`/api/posts/verify/${postId}`, { userId }).then((res) => {
		dispatch({
			type: GET_POST,
			payload: res.data,
		});
	});
};

export const getUnverified = () => (dispatch) => {
	axios.get(`/api/posts/verify`).then((res) => {
		dispatch({
			type: GET_UNVERIFIED,
			payload: res.data,
		});
	});
};

export const setLoading = () => {
	return {
		type: LOADING,
	};
};
