import {
	GET_POSTS,
	GET_POST,
	ADD_POST,
	DELETE_POST,
	GET_CATEGORIES,
	GET_RATE,
	EDIT_STATEMENT,
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
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
			};
		case GET_POST:
			return {
				...state,
				post: action.payload,
			};
		case GET_RATE:
			return {
				...state,
				rate: action.payload,
			};
		case EDIT_STATEMENT:
			return {
				...state,
				post: action.payload,
			};
		case GET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};
		case ADD_POST:
			return {
				...state,
				post: action.payload,
			};
		case DELETE_POST:
			return {
				...state,
				response: action.payload,
			};
		default:
			return state;
	}
}
