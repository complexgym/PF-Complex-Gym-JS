
import {
	GET_ALL_POSTS,
	GET_POST_BY_ID,
	SEARCH_POSTS,
	UPDATE_SEARCH,
	GET_CLIENT_DETAIL,
	POST_CLIENT,
	UPDATE_FILTERS,
	FILTER_POSTS,
	CLEAR_POST_DETAILS,
	GET_CLIENTS,
  POST_BLOG
} from './action-types.js';
import axios from 'axios';

//*TODO posts

export function getAllPosts() {
	return async function (dispatch) {
		try {
			const response = await axios.get('/publications/all');
			return dispatch({
				type: GET_ALL_POSTS,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export const getPostById = (id) => {
	return async function (dispatch) {
		try {
			const response = await axios.get(`/publications/${id}`);
			return dispatch({
				type: GET_POST_BY_ID,
				payload: response.data[0],
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export function clearPostDetails() {
	return {
		type: CLEAR_POST_DETAILS,
	};
}

export function searchPosts({ tag, date }, title) {
	return async function (dispatch) {
		try {
			let response = [];

			//*only search
			if (!date && !tag && search) {
				response = await axios.get(`/publications?title=${title}`);
				return dispatch({
					type: SEARCH_POSTS,
					payload: response.data,
				});
			}

			//*tag
			if (!date && tag && !search) {
				response = await axios(`/publications/filters?tag=${tag}`);
			}

			//*date
			if (date && !tag && !search) {
				response = await axios(`/publications/filters?date=${date}`);
			}

			//*tag and search
			if (!date && tag && search) {
				response = await axios(`/publications/filters?tag=${tag}&title=${search}`);
			}

			//*date and search
			if (date && !tag && search) {
				response = await axios(`/publications/filters?date=${date}&title=${search}`);
			}

			//*date and tag
			if (date && tag && !search) {
				response = await axios(`/publications/filters?tag=${tag}&date=${date}`);
			}

			//*date, tag and search
			if (date && tag && search) {
				response = await axios(
					`/publications/filters?tag=${tag}&date=${date}&title=${search}`
				);
			}

			//*no value
			if (!date && !tag && !search) {
				response = await axios.get(`/publications/all`);
				return dispatch({
					type: FILTER_POSTS,
					payload: response.data,
				});
			}

			return dispatch({
				type: SEARCH_POSTS,
				payload: response.data.filteredPublication,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function updateSearch(title) {
	return {
		type: UPDATE_SEARCH,
		payload: title,
	};
}
 
export const postBlog = (data) => {
    return async function(dispatch){
        try {
            const response = await axios.post('/publications', data);
            return dispatch({
                type: POST_BLOG
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function filterPosts({ tag, date }, search) {
	return async function (dispatch) {
		try {
			let response = [];

			//*tag
			if (!date && tag && !search) {
				response = await axios(`/publications/filters?tag=${tag}`);
			}

			//*date
			if (date && !tag && !search) {
				response = await axios(`/publications/filters?date=${date}`);
			}

			//*tag
			if (!date && tag && !search) {
				response = await axios(`/publications/filters?tag=${tag}`);
			}

			//*date and tag
			if (date && tag && !search) {
				response = await axios(`/publications/filters?tag=${tag}&date=${date}`);
			}

			//*tag and search
			if (!date && tag && search) {
				response = await axios(`/publications/filters?tag=${tag}&title=${search}`);
			}
			//*date and search
			if (date && !tag && search) {
				response = await axios(`/publications/filters?date=${date}&title=${search}`);
			}
			//*date, tag and search
			if (date && tag && search) {
				response = await axios(
					`/publications/filters?tag=${tag}&date=${date}&title=${search}`
				);
			}

			if (!date && !tag && !search) {
				response = await axios.get(`/publications/all`);
				return dispatch({
					type: FILTER_POSTS,
					payload: response.data,
				});
			} else {
				return dispatch({
					type: FILTER_POSTS,
					payload: response?.data?.filteredPublication,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
}

export const updateFilters = ({ tag, date }) => {
	return {
		type: UPDATE_FILTERS,
		payload: { tag, date },
	};
};

//TODO clients
export const getAllClients = () => async (dispatch) => {
	try {
		let response = await axios('/clients');

		let data = response.data.responseAll;

		// console.log(data);

		return dispatch({
			type: GET_CLIENTS,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getClientDetail = (id) => async (dispatch) => {
	try {
		let response = await axios(`/clients/${id}`);

		return dispatch({
			type: GET_CLIENT_DETAIL,
			payload: response.data,
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
