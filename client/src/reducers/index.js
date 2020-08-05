import { combineReducers } from 'redux';
import postsReducer from './posts';
import imagesReducer from './images';
import usersReducer from './users';
import ratingReducer from './rating';
import commentsReducer from './comments';

export default combineReducers({
	posts: postsReducer,
	images: imagesReducer,
	user: usersReducer,
	rate: ratingReducer,
	comments: commentsReducer,
});
