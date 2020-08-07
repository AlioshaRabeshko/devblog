import { UPLOAD_IMAGE, GET_IMAGES, ERROR } from './types';
import axios from 'axios';

export const uploadImages = (files, authorId) => (dispatch) => {
	let data = new FormData();
	console.log([...files]);
	[...files].forEach((el, id) => data.append('files', files[id]));
	axios
		.post(`/api/images/upload/${authorId}`, data)
		.then((res) =>
			dispatch({
				type: UPLOAD_IMAGE,
				payload: res.data,
			})
		)
		.catch((err) => {
			dispatch({
				type: ERROR,
				payload: err.response.data.err,
			});
		});
};

export const uploadFromLink = (link, authorId) => (dispatch) => {
	axios
		.put(`/api/images/link/${authorId}`, { link })
		.then((res) =>
			dispatch({
				type: UPLOAD_IMAGE,
				payload: res.data,
			})
		)
		.catch((err) => {
			dispatch({
				type: ERROR,
				payload: err.response.data.err,
			});
		});
};

export const getImages = (authorId) => (dispatch) => {
	axios.get(`/api/images/author/${authorId}`).then((res) =>
		dispatch({
			type: GET_IMAGES,
			payload: res.data,
		})
	);
};
