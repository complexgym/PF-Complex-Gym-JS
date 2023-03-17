import { GET_CLIENT_DETAIL, POST_CLIENT } from '../actions/action-types';

const initialState = {
	client: [],
};

const rootReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_CLIENT_DETAIL:
			return {
				...state,
				client: payload,
			};
		case POST_CLIENT:
			return {
				...state,
			};
		default:
			return {
				...state,
			};
	}
};
export default rootReducer;
