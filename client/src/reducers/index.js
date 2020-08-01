import { combineReducers } from 'redux';
import postsReducer from './posts';
import imagesReducer from './images';
import usersReducer from './users';
import ratingReducer from './rating';
import githubReducer from './github';
import commentsReducer from './comments';

export default combineReducers({
	posts: postsReducer,
	images: imagesReducer,
	user: usersReducer,
	rate: ratingReducer,
	github: githubReducer,
	comments: commentsReducer,
});
