import {
	LOG_IN,
	SIGN_UP,
	CHECK_AUTH,
	LOG_OUT,
	GET_SUBS,
	SET_STATUS,
	SET_SUB,
	USER_LOADING,
} from '../actions/types';

const initialState = {
	user: {
		token: null,
		user: {
			name: '',
			status: '',
			verified: 0,
			id: 0,
		},
	},
	subs: [],
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case SIGN_UP:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case CHECK_AUTH:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case GET_SUBS:
			return {
				...state,
				subs: action.payload,
				loading: false,
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
				user: initialState.user,
			};
		case USER_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}
