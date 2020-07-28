import {
	LOG_IN,
	SIGN_UP,
	CHECK_AUTH,
	LOG_OUT,
	GET_SUBS,
	SET_SUB,
	SET_STATUS,
} from './types';

import axios from 'axios';

export const logIn = (data) => (dispatch) => {
	axios.post('/api/users/login', { data }).then((res) => {
		if (res.data.token) {
			localStorage.setItem('token', JSON.stringify(res.data.token));
			localStorage.setItem('user', JSON.stringify(res.data.user));
		}
		dispatch({
			type: LOG_IN,
			payload: res.data,
		});
	});
};

export const logOut = (cb) => (dispatch) => {
	cb();
	dispatch({
		type: LOG_OUT,
		payload: { token: null, user: null },
	});
};

export const signUp = (data) => (dispatch) => {
	axios.post('/api/users/signup', { data }).then((res) =>
		dispatch({
			type: SIGN_UP,
			payload: res.data,
		})
	);
};

export const check = (token) => (dispatch) => {
	localStorage.setItem('token', JSON.stringify(null));
	axios.post('/api/users/check', { token }).then((res) => {
		localStorage.setItem('token', JSON.stringify(token));
		dispatch({
			type: CHECK_AUTH,
			payload: res.data,
		});
	});
};

export const getSubs = () => (dispatch) => {
	const userId = JSON.parse(localStorage.getItem('user')).id;
	axios.get(`/api/users/settings/${userId}`).then((res) =>
		dispatch({
			type: GET_SUBS,
			payload: res.data,
		})
	);
};

export const setStatus = (status) => (dispatch) => {
	const userId = JSON.parse(localStorage.getItem('user')).id;
	axios
		.put(`/api/users/settings/${userId}`, { status })
		.then((res) => dispatch({ type: SET_STATUS, payload: res.data }));
};

export const setSub = (sub) => (dispatch) => {
	const userId = JSON.parse(localStorage.getItem('user')).id;
	axios
		.put(`/api/users/settings/${sub}/${userId}`)
		.then((res) => dispatch({ type: SET_SUB }));
};
