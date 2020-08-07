import { UPLOAD_IMAGE, GET_IMAGES, ERROR } from '../actions/types';

const initialState = {
	images: {
		images: [],
		host: '',
	},
	msg: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
		case UPLOAD_IMAGE:
			console.log(action.payload.images);
			return {
				...state,
				images: {
					images: [...action.payload.images, ...state.images.images],
					host: state.images.host,
				},
			};
		case GET_IMAGES:
			return {
				...state,
				images: action.payload,
			};
		case ERROR:
			return {
				...state,
				msg: action.payload,
			};
		default:
			return state;
	}
}
