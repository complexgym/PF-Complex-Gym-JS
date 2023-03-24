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
	POST_BLOG,
	GET_ALL_TESTIMONIALS,
	GET_ALL_ACTIVITIES,
	GET_ALL_PLANS,
	UPDATE_CLIENT,
	DELETE_BLOG,
	GET_ALL_ADMIN,
} from './action-types.js';
import axios from 'axios';

//*TODO posts

export function getAllPosts() {
	return async function (dispatch) {
		try {
      const response = await axios.get("/publications/all");
			const blogPosts = response.data.filter(el=>!el.isInstagram)
			const igPosts = response.data.filter(el=>el.isInstagram)

			return dispatch({
				type: GET_ALL_POSTS,
				payload: {igPosts, blogPosts},
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
					payload: response.data.filter(el=>!el.isInstagram),
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
					payload: response.data.filter(el=>!el.isInstagram),
				});
			}

			return dispatch({
				type: SEARCH_POSTS,
				payload: response.data.filteredPublication.filter(el=>!el.isInstagram),
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
	return async function (dispatch) {
		try {
			const response = await axios.post('/publications', data);
			return dispatch({
				type: POST_BLOG,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteBlog = (id) => {
	return async function (dispatch) {
		try {
			const response = await axios.delete(`/publications/${id}`);
			return dispatch({
				type: DELETE_BLOG,
				payload: id
			});
		} catch (error) {
			console.log(error);
		}
	};
};

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
					payload: response.data.filter(el=>!el.isInstagram),
				});
			} else {
				return dispatch({
					type: FILTER_POSTS,
					payload: response?.data?.filteredPublication.filter(el=>!el.isInstagram),
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

export const putClient = (client, matchId) => async () => {
	try {
		const response = await axios.put(`/clients/${matchId}`, client);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const getAllTestimonials = () => {
	return async function (dispatch) {
		try {
			const response = await axios.get('/testimonials');
			return dispatch({
				type: GET_ALL_TESTIMONIALS,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const getAllActivities = () => {
	return async function (dispatch) {
		try {
			const response = await axios.get('/activities');
			return dispatch({
				type: GET_ALL_ACTIVITIES,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const getAllPlans = () => {
	return async function (dispatch) {
		try {
			//*response
			const response = await axios.get('/plans');
			let newData = {};

			//*segmenting by 2 week, libre, etc
			response.data.responseAll.forEach((el) => {
				if (el.name.includes('2')) {
					if (!newData['2 por semana']) newData['2 por semana'] = [el];
					else newData['2 por semana'] = [...newData['2 por semana'], el];
				} else if (el.name.includes('Libre')) {
					if (!newData['Libre']) newData['Libre'] = [el];
					else newData['Libre'] = [...newData['Libre'], el];
				} else {
					if (!newData['Otros']) newData['Otros'] = [el];
					else newData['Otros'] = [...newData['Otros'], el];
				}
			});

			newData['Todos'] = response.data.responseAll;

			//*response
			return dispatch({
				type: GET_ALL_PLANS,
				payload: newData,
			});
		} catch (error) {
			console.log(error);
		}
	};
};


export const getAllAdmin = ()=> {
	return async function (dispatch) {
		try {
      const response = await axios.get("/admin");
			return dispatch({
				type: GET_ALL_ADMIN,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export const postAdmin = (data)=> {
	return async function () {
		try {
      const response = await axios.post("/admin", data);
			return response
		} catch (error) {
			console.log(error);
		}
	};
}