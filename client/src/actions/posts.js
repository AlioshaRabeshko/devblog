import {
	GET_POSTS,
	GET_CATEGORIES,
	GET_POST,
	ADD_POST,
	DELETE_POST,
	PUT_LIKE,
	PUT_DISLIKE,
	GET_RATE,
	EDIT_STATEMENT,
} from './types';
import axios from 'axios';

export const getPosts = (category, author, query, page) => (dispatch) => {
	const req = `${
		category
			? '/category/' + category
			: author
			? '/author/' + author
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
	axios.get(`/api/posts/post/${id}`).then((res) =>
		dispatch({
			type: GET_POST,
			payload: res.data,
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

export const deletePost = (id, userName) => (dispatch) =>
	axios
		.delete(`/api/posts/${userName}/${id}`)
		.then(() => dispatch({ type: DELETE_POST }));

export const getCategories = () => (dispatch) => {
	axios.get('/api/posts/category').then((res) =>
		dispatch({
			type: GET_CATEGORIES,
			payload: res.data,
		})
	);
};

export const putLike = (postId, userId) => (dispatch) => {
	axios.put(`/api/posts/like/${postId}`, { userId }).then((res) =>
		dispatch({
			type: PUT_LIKE,
			payload: res.data,
		})
	);
};

export const putDislike = (postId, userId) => (dispatch) => {
	axios.put(`/api/posts/dislike/${postId}`, { userId }).then((res) =>
		dispatch({
			type: PUT_DISLIKE,
			payload: res.data,
		})
	);
};

export const getRate = (postId) => (dispatch) => {
	axios.get(`/api/posts/rate/${postId}`).then((res) =>
		dispatch({
			type: GET_RATE,
			payload: res.data,
		})
	);
};

export const verify = (postId, userId) => (dispatch) => {
	axios.put(`/api/posts/verify/${postId}`, { userId }).then((res) => {
		console.log(res.data);
		dispatch({
			type: GET_POST,
			payload: res.data,
		});
	});
};
