import {
	GET_STATEMENTS,
	SEARCH_STATEMENTS,
	GET_STATEMENT,
	ADD_STATEMENT,
	DELETE_STATEMENT,
} from './types';
import axios from 'axios';

export const getStatements = (category) => (dispatch) => {
	axios.get(`/api/statements/${category ? category : null}`).then((res) =>
		dispatch({
			type: GET_STATEMENTS,
			payload: res.data,
		})
	);
};

export const getStatement = (id) => (dispatch) => {
	axios.get(`/api/statements/${id}`).then((res) =>
		dispatch({
			type: GET_STATEMENT,
			payload: res.data,
		})
	);
};

export const searchStatements = (query) => (dispatch) => {
	axios.get(`/api/statements/search/${query}`).then((res) =>
		dispatch({
			type: SEARCH_STATEMENTS,
			payload: res.data,
		})
	);
};

export const addItem = (data) => (dispatch) => {
	axios.post(`/api/statements/add`, data).then((res) =>
		dispatch({
			type: ADD_STATEMENT,
			payload: res.data,
		})
	);
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
	axios.delete(`/api/statements/${id}`).then(() =>
		dispatch({
			type: DELETE_STATEMENT,
			payload: res.data,
		})
	);
};
