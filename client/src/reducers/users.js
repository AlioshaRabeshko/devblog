import {
	LOG_IN,
	SIGN_UP,
	CHECK_AUTH,
	LOG_OUT,
	GET_SUBS,
	SET_STATUS,
	SET_SUB,
} from '../actions/types';

const initialState = {
	user: {
		token: null,
		user: {
			name: '',
			status: '',
		},
	},
	subs: [],
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
		case GET_SUBS:
			return {
				...state,
				subs: action.payload,
			};
		case SET_STATUS:
			return {
				...state,
				user: { token: state.user.token, user: action.payload },
			};
		case SET_SUB:
			return {
				...state,
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
