import { UPLOAD_IMAGE, GET_IMAGES } from './types';
import axios from 'axios';

export const uploadImages = (files, author) => (dispatch) => {
	let data = new FormData();
	console.log([...files]);
	[...files].forEach((el, id) => data.append('files', files[id]));
	axios.post(`/api/images/upload/${author}`, data).then((res) =>
		dispatch({
			type: UPLOAD_IMAGE,
			payload: res.data,
		})
	);
};

export const uploadFromLink = (link, author) => (dispatch) => {
	axios.put(`/api/images/link/${author}`, { link }).then((res) =>
		dispatch({
			type: UPLOAD_IMAGE,
			payload: res.data,
		})
	);
};

export const getImages = (author) => (dispatch) => {
	axios.get(`/api/images/author/${author}`).then((res) =>
		dispatch({
			type: GET_IMAGES,
			payload: res.data,
		})
	);
};
