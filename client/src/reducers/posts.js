import {
	GET_POSTS,
	GET_POST,
	GET_STATIC,
	ADD_POST,
	DELETE_POST,
	GET_CATEGORIES,
	EDIT_STATEMENT,
	GET_UNVERIFIED,
	ADD_STATIC,
	EDIT_STATIC,
	LOADING,
} from '../actions/types';

const initialState = {
	posts: {
		count: 0,
		rows: [],
	},
	post: {
		id: 0,
		title: '',
		category: '',
		image: '',
		description: '',
		content: '',
		author: '',
		seen: 0,
		verified: false,
		createdAt: '',
	},
	categories: [],
	unverified: [],
	loading: false,
	staticPost: {
		title: '',
		image: '',
		content: '',
	},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false,
			};
		case GET_POST:
			return {
				...state,
				post: action.payload,
				loading: false,
			};
		case GET_STATIC:
			return {
				...state,
				staticPost: action.payload,
				loading: false,
			};
		case EDIT_STATEMENT:
			return {
				...state,
				post: action.payload,
			};
		case EDIT_STATIC:
			return {
				...state,
				staticPost: action.payload,
			};
		case GET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};
		case GET_UNVERIFIED:
			return {
				...state,
				unverified: action.payload,
			};
		case ADD_POST:
			return {
				...state,
				post: action.payload,
			};
		case ADD_STATIC:
			return {
				...state,
				staticPost: action.payload,
			};
		case DELETE_POST:
			return {
				...state,
				response: action.payload,
			};
		case LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}
