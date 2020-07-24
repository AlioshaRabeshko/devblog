import {
	GET_STATEMENTS,
	GET_CATEGORIES,
	GET_STATEMENT,
	ADD_STATEMENT,
	DELETE_STATEMENT,
	PUT_LIKE,
	PUT_DISLIKE,
	GET_RATE,
} from './types';
import axios from 'axios';

export const getStatements = (category, author, query, page) => (dispatch) => {
	const req = `${
		category
			? '/category/' + category
			: author
			? '/author/' + author
			: query
			? '/search/' + query
			: ''
	}/${page ? page : 0}/`;
	axios.get(`/api/statements${req}`).then((res) =>
		dispatch({
			type: GET_STATEMENTS,
			payload: res.data,
		})
	);
};

export const getStatement = (id) => (dispatch) => {
	axios.get(`/api/statements/statement/${id}`).then((res) =>
		dispatch({
			type: GET_STATEMENT,
			payload: res.data,
		})
	);
};

export const addStatement = (data) => (dispatch) => {
	axios.post('/api/statements/add', data).then((res) => {
		dispatch({
			type: ADD_STATEMENT,
			payload: res.data,
		});
	});
};

// export const editItem = (collection, id, data) => (dispatch) => {
// 	axios.post(`/api/statements/${collection}/${id}/edit`, data).then((res) =>
// 		dispatch({
// 			type: ADD_STATEMENT,
// 			payload: res.data,
// 		})
// 	);
// };

export const deleteItem = (id) => (dispatch) => {
	axios.delete(`/api/statements/${id}`).then((res) =>
		dispatch({
			type: DELETE_STATEMENT,
			payload: res.data,
		})
	);
};

export const getCategories = () => (dispatch) => {
	axios.get('/api/statements/category').then((res) =>
		dispatch({
			type: GET_CATEGORIES,
			payload: res.data,
		})
	);
};

export const putLike = (postId, userId) => (dispatch) => {
	axios.put(`/api/statements/like/${postId}`, { userId }).then((res) =>
		dispatch({
			type: PUT_LIKE,
			payload: res.data,
		})
	);
};

export const putDislike = (postId, userId) => (dispatch) => {
	axios.put(`/api/statements/dislike/${postId}`, { userId }).then((res) =>
		dispatch({
			type: PUT_DISLIKE,
			payload: res.data,
		})
	);
};

export const getRate = (postId) => (dispatch) => {
	axios.get(`/api/statements/rate/${postId}`).then((res) =>
		dispatch({
			type: GET_RATE,
			payload: res.data,
		})
	);
};
