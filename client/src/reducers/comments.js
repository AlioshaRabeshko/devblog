import {
	GET_COMMENTS,
	ADD_COMMENT,
	EDIT_COMMENT,
	DELETE_COMMENT,
} from '../actions/types';

const initialState = {
	comments: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_COMMENTS:
			return {
				...state,
				comments: action.payload,
			};
		case EDIT_COMMENT:
			state.comments[action.index].content = action.payload.content;
			return {
				...state,
				comments: state.comments,
			};
		case DELETE_COMMENT:
			state.comments.splice(action.index, 1);
			return {
				...state,
				comments: state.comments,
			};
		case ADD_COMMENT:
			return {
				...state,
				comments: [action.payload, ...state.comments],
			};
		default:
			return state;
	}
}
