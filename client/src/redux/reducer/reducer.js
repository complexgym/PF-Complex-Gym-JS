import {GET_ALL_POSTS, SEARCH_POSTS, UPDATE_SEARCH, 
GET_CLIENT_DETAIL, POST_CLIENT, UPDATE_FILTERS, FILTER_POSTS, GET_POST_BY_ID, CLEAR_POST_DETAILS, POST_BLOG} from "../actions/action-types.js"

const initialState = {
  	client: [],
	initial_posts: [],
	matched_posts: [],
	post_details: {},
	search_blog: "",
	filters_blog: {
		tag: "",
		date: ""
	}
}

const rootReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_POSTS: return {
			...state, 
			initial_posts: payload,
			matched_posts: payload
		}
		case GET_POST_BY_ID: return {
			...state, 
			post_details: payload
		}
		case CLEAR_POST_DETAILS: return {
			...state,
			post_details: {}
		}
		case SEARCH_POSTS: return {
			...state, 
			matched_posts: payload
		}
		case UPDATE_SEARCH: return {
			...state,
			search_blog: payload
		}
		case FILTER_POSTS: 
			return {
				...state,
				matched_posts: payload
			}
		case UPDATE_FILTERS: return {
			...state,
			filters_blog: {
				...state.filters_blog,
				tag: payload.tag,
				date: payload.date
			}
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
		case POST_BLOG: {
			return {
				...state
			}
		}
		default: return {
			...state
		}
	}
};
export default rootReducer;
