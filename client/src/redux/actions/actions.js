import axios from 'axios';
import { GET_CLIENT_DETAIL, POST_CLIENT } from './action-types';

export const getClientDetail = (id) => async (dispatch) => {
	try {
		let json = await axios(`/clients/${id}`);

		return dispatch({
			type: GET_CLIENT_DETAIL,
			payload: json.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const postClient = (client) => async () => {
	try {
		const data = await axios.post('/clients', client);
		return data;
	} catch (error) {
		console.log(error);
	}
};
