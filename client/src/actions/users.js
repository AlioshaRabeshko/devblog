import { LOG_IN, SIGN_UP, CHECK_AUTH, LOG_OUT } from './types';

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

export const logOut = () => (dispatch) => {
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
