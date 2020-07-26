import { combineReducers } from 'redux';
import postsReducer from './posts';
import imagesReducer from './images';
import usersReducer from './users';

export default combineReducers({
	posts: postsReducer,
	images: imagesReducer,
	user: usersReducer,
});
