import { UPLOAD_IMAGE, GET_IMAGES } from './types';
import axios from 'axios';

export const uploadImage = (file) => (dispatch) => {
	let data = new FormData();
	data.append('file', file);
	axios.post('/api/images/upload', data).then((res) =>
		dispatch({
			type: UPLOAD_IMAGE,
			payload: res.data,
		})
	);
};

export const getImages = () => (dispatch) => {
	axios.get('/api/images').then((res) =>
		dispatch({
			type: GET_IMAGES,
			payload: res.data,
		})
	);
};
