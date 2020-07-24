import {
	GET_STATEMENTS,
	GET_STATEMENT,
	ADD_STATEMENT,
	DELETE_STATEMENT,
	GET_CATEGORIES,
	GET_RATE,
} from '../actions/types';

const initialState = {
	statements: {
		count: 0,
		rows: [],
	},
	categories: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_STATEMENTS:
			return {
				...state,
				statements: action.payload,
			};
		case GET_STATEMENT:
			return {
				...state,
				statement: action.payload,
			};
		case GET_RATE:
			return {
				...state,
				rate: action.payload,
			};
		case GET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};
		case ADD_STATEMENT:
			return {
				...state,
				statement: action.payload,
			};
		case DELETE_STATEMENT:
			return {
				...state,
				response: action.payload,
			};
		default:
			return state;
	}
}
