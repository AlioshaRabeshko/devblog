import { GET_GIT } from '../actions/types';

const initialState = {
	github: {
		userName: '',
		image: '',
		url: '',
		followers: 0,
		following: 0,
		repos: [],
	},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_GIT:
			return {
				...state,
				github: action.payload,
			};
		default:
			return state;
	}
}
