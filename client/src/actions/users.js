import { LOG_IN, SIGN_UP, CHECK_AUTH } from './types';

import axios from 'axios';

export const logIn = (userData) => (dispatch) => {
	axios.post('/api/auth/login', userData).then((res) =>
		dispatch({
			type: LOG_IN,
			payload: res.data,
		})
	);
};

export const signUp = (userData) => (dispatch) => {
	axios.get('/api/auth/signup', userData).then((res) =>
		dispatch({
			type: SIGN_UP,
			payload: res.data,
		})
	);
};

export const check = (token) => (dispatch) => {
	axios.post('/api/auth/check', token).then((res) =>
		dispatch({
			type: CHECK_AUTH,
			payload: res.data,
		})
	);
};
