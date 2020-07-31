import { GET_GIT } from './types';
import axios from 'axios';

export const getGit = () => (dispatch) => {
	axios.get(`/api/github/`).then((res) =>
		dispatch({
			type: GET_GIT,
			payload: res.data,
		})
	);
};
