import { UPLOAD_IMAGE, GET_IMAGES } from '../actions/types';

const initialState = {
	images: [],
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case UPLOAD_IMAGE:
			return {
				...state,
				images: action.payload,
			};
		case GET_IMAGES:
			return {
				...state,
				images: action.payload,
			};
		default:
			return state;
	}
}
