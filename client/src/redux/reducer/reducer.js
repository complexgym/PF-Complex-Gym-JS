import {GET_ALL_POSTS, SEARCH_POSTS, UPDATE_SEARCH, GET_CLIENT_DETAIL, POST_CLIENT} from "../actions/action-types.js"

const initialState = {
  client: [],
	initial_posts: [],
	matched_posts: [],
	post_details: {},
	search_value: ""
}

const rootReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_POSTS: return {
			...state, 
			initial_posts: payload,
			matched_posts: payload
		}
		case SEARCH_POSTS: return {
			...state, 
			matched_posts: payload
		}
		case UPDATE_SEARCH: return {
			...state,
			search_value: payload
		}
    case GET_CLIENT_DETAIL:
			return {
				...state,
				client: payload,
			};
		case POST_CLIENT:
			return {
				...state,
			};
		default: return {
			...state
		}
	}
};
export default rootReducer;
