import { GET_RATE, PUT_LIKE, PUT_DISLIKE } from './types';
import axios from 'axios';

export const putLike = (postId, userId) => (dispatch) => {
	axios.put(`/api/rating/like/${postId}`, { userId }).then((res) =>
		dispatch({
			type: PUT_LIKE,
			payload: res.data,
		})
	);
};

export const putDislike = (postId, userId) => (dispatch) => {
	axios.put(`/api/rating/dislike/${postId}`, { userId }).then((res) =>
		dispatch({
			type: PUT_DISLIKE,
			payload: res.data,
		})
	);
};

export const getRate = (postId, userId) => (dispatch) => {
	axios.get(`/api/rating/${postId}/${userId}`).then((res) =>
		dispatch({
			type: GET_RATE,
			payload: res.data,
		})
	);
};
