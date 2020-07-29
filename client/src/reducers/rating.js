import { GET_RATE, PUT_LIKE, PUT_DISLIKE } from '../actions/types';

const initialState = {
	rate: {
		likes: 0,
		dislikes: 0,
		liked: 0,
	},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_RATE:
			return {
				...state,
				rate: action.payload,
			};
		case PUT_LIKE:
			return {
				rate: {
					likes:
						state.rate.liked === 1
							? state.rate.likes - 1
							: state.rate.likes + 1,
					dislikes:
						state.rate.liked === -1
							? state.rate.dislikes - 1
							: state.rate.dislikes,
					liked: action.payload.liked,
				},
			};
		case PUT_DISLIKE:
			return {
				rate: {
					likes:
						state.rate.liked === 1 ? state.rate.likes - 1 : state.rate.likes,
					dislikes:
						state.rate.liked === -1
							? state.rate.dislikes - 1
							: state.rate.dislikes + 1,
					liked: action.payload.liked,
				},
			};
		default:
			return state;
	}
}
