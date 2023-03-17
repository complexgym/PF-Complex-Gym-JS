import {GET_ALL_POSTS, SEARCH_POSTS, UPDATE_SEARCH} from "../actions/action-types.js"

const initialState = {
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
		default: return {
			...state
		}
	}
};
export default rootReducer;
