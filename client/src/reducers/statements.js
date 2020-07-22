import {
	GET_STATEMENTS,
	GET_STATEMENT,
	ADD_STATEMENT,
	DELETE_STATEMENT,
	SEARCH_STATEMENTS,
} from '../actions/types';

const initialState = {
	statements: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_STATEMENTS:
			return {
				...state,
				statements: action.payload,
			};
		case SEARCH_STATEMENTS:
			return {
				...state,
				statements: action.payload,
			};
		case GET_STATEMENT:
			return {
				...state,
				statement: action.payload,
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
