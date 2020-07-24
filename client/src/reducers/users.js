import { LOG_IN, SIGN_UP, CHECK_AUTH, LOG_OUT } from '../actions/types';

const initialState = {
	user: {
		token: null,
	},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				user: action.payload,
			};
		case SIGN_UP:
			return {
				...state,
				user: action.payload,
			};
		case CHECK_AUTH:
			return {
				...state,
				user: action.payload,
			};
		case LOG_OUT:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
}
