import { combineReducers } from 'redux';
import statementsReducer from './statements';
import imagesReducer from './images';
import usersReducer from './users';

export default combineReducers({
	statements: statementsReducer,
	images: imagesReducer,
	user: usersReducer,
});
