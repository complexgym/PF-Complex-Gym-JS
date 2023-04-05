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
	DELETE_CLIENT,
	GET_DELETED_CLIENTS,
	RESTORE_CLIENT,
	POST_BLOG,
	GET_ALL_TESTIMONIALS,
	DELETE_TESTIMONIALS,
	GET_ALL_ACTIVITIES,
	GET_ALL_PLANS,
	UPDATE_CLIENT,
	GET_CALENDAR,
	POST_CALENDAR,
	DELETE_BLOG,
	GET_ALL_ADMIN,
	POST_ADMIN,
	REMOVE_ADMIN,
	POST_PAYMENT,
	GET_ALL_PAYMENTS,
	GET_TRAINERS,
	EDIT_PLANS,
	POST_PLANS,
	POST_REVIEW,
	DELETE_PLAN,
	POST_TRAINER,
	POST_ACTIVITIES,
	DELETE_CALENDAR,
	POST_PAYMENT_CASH,
	GET_PAYMENTS_BY_USER,
	REGISTER,
	DELETE_ACTIVITY,
	DELETE_TRAINER,
	PUT_ACTIVITY,
	FILL_ACTIVITY,
	EMPTY_ACTIVITY,
	GET_ACTUAL_PLAN,
	DELETE_PAYMENT_CASH,
	EMPTY_DETAIL
} from "./action-types.js";
import axios from "axios";

//*TODO posts

export function getAllPosts() {
	return async function (dispatch) {
		try {
			const response = await axios.get("/publications/all");
			const blogPosts = response.data.filter((el) => !el.isInstagram);
			const igPosts = response.data.filter((el) => el.isInstagram);

			return dispatch({
				type: GET_ALL_POSTS,
				payload: { igPosts, blogPosts },
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
					payload: response.data.filter((el) => !el.isInstagram),
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
				response = await axios(`/publications/filters?tag=${tag}&title=${title}`);
			}

			//*date and search
			if (date && !tag && search) {
				response = await axios(`/publications/filters?date=${date}&title=${title}`);
			}

			//*date and tag
			if (date && tag && !search) {
				response = await axios(`/publications/filters?tag=${tag}&date=${date}`);
			}

			//*date, tag and search
			if (date && tag && search) {
				response = await axios(
					`/publications/filters?tag=${tag}&date=${date}&title=${title}`
				);
			}

			//*no value
			if (!date && !tag && !search) {
				response = await axios.get(`/publications/all`);
				return dispatch({
					type: FILTER_POSTS,
					payload: response.data.filter((el) => !el.isInstagram),
				});
			}

			return dispatch({
				type: SEARCH_POSTS,
				payload: response.data.filteredPublication.filter((el) => !el.isInstagram),
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
			const response = await axios.post("/publications", data);

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
				payload: id,
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
				response = await axios(
					`/publications/filters?date=${date}&title=${search}`
				);
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
					payload: response.data.filter((el) => !el.isInstagram),
				});
			} else {
				return dispatch({
					type: FILTER_POSTS,
					payload: response?.data?.filteredPublication.filter(
						(el) => !el.isInstagram
					),
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
		let response = await axios("/clients");

		let data = response.data.responseAll;

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
		let response = await axios(`/clients?id=${id}`);

		// console.log(response.data);

		return dispatch({
			type: GET_CLIENT_DETAIL,
			payload: response.data,
		});
	} catch (error) {
		console.log(error);
	}
};


export const emptyDetail = () => async (dispatch) => {
	return dispatch({
	type: EMPTY_DETAIL,
	payload: [],
	})
}


export const postClient = (client) => async (dispatch) => {
	try {
		const data = await axios.post("/clients", client);

		await axios.post("/mail/sendmail?type=REGISTER", {
			to: client.mail,
			title: "Bienvenid@",
			subject: "Bienvenid@ a Complex",
			html: {
				name: client.name,
			},
		});

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

export const deleteClient = (id) => async (dispatch) => {
	try {
		await axios.delete(`/clients/${id}`);
		dispatch({
			type: DELETE_CLIENT,
			payload: id,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getDeletedClients = () => async (dispatch) => {
	try {
		let response = await axios("/clients/softDeleted");

		let data = response.data;

		return dispatch({
			type: GET_DELETED_CLIENTS,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const restoreClient = (id) => async () => {
	try {
		const response = await axios.put(`/clients/restore/${id}`);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const getAllTestimonials = () => {
	return async function (dispatch) {
		try {
			const response = await axios.get("/testimonials");
			return dispatch({
				type: GET_ALL_TESTIMONIALS,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteTestimonials = (id) => {
	return async function (dispatch) {
		try {
			const response = await axios.delete(`/testimonials/${id}`);
			return dispatch({
				type: DELETE_TESTIMONIALS,
				payload: id,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const getAllActivities = () => {
	return async function (dispatch) {
		try {
			const response = await axios.get("/activities");
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
			const response = await axios.get("/plans");
			let newData = {};

			//*segmenting by 2 week, libre, etc
			if (response.data) {
				response?.data?.responseAll.forEach((el) => {
					if (el?.name?.includes("2")) {
						if (!newData["2 por semana"]) newData["2 por semana"] = [el];
						else newData["2 por semana"] = [...newData["2 por semana"], el];
					} else if (el.name.includes("Libre")) {
						if (!newData["Libre"]) newData["Libre"] = [el];
						else newData["Libre"] = [...newData["Libre"], el];
					} else {
						if (!newData["Otros"]) newData["Otros"] = [el];
						else newData["Otros"] = [...newData["Otros"], el];
					}
				});

				newData["Todos"] = response?.data?.responseAll;

				//*response
				return dispatch({
					type: GET_ALL_PLANS,
					payload: {
						separatedByCategory: newData,
						allData: response.data.responseAll,
					},
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

//TODO Calendario
export const getCalendar = () => {
	return async function (dispatch) {
		try {
			const response = await axios.get("/calendar");
			return dispatch({
				type: GET_CALENDAR,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const postCalendar = (calendar) => async (dispatch) => {
	try {
		const response = await axios.post("/calendar", calendar);
		return dispatch({
			type: POST_CALENDAR,
			payload: response.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const deleteCalendar = (id) => async (dispatch) => {
	try {
		const response = await axios.delete(`/calendar/${id}`);

		return dispatch({
			type: DELETE_CALENDAR,
			payload: id,
		});
	} catch (error) {}
};

export const putCalendar = (id, data) => async () => {
	try {
		const response = await axios.put(`/calendar/${id}`, data);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const getAllAdmin = () => {
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
};

export const postAdmin = (data) => {
	return async function (dispatch) {
		try {
			await axios.post("/admin", data);
			return dispatch({
				type: POST_ADMIN,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const removeAdmin = (id) => {
	return async function (dispatch) {
		try {
			const response = await axios.delete(`/admin/${id}`);
			return dispatch({
				type: REMOVE_ADMIN,
				payload: id,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const postPayment = (purchase) => async () => {
	try {
		const response = await axios.post("/payments", purchase);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const getAllPayments = () => async (dispatch) => {
	try {
		const response = await axios.get("/payments");

		let map = response.data.map((d) => {
			const date = new Date(d?.paymentsDate);

			/* payment date*/
			const startDate =
				date.getDate() +
				"/" +
				Number(date.getMonth() + 1) +
				"/" +
				date.getFullYear();

			/* finished plan date */
			let finishedDate =
				date.getDate() +
				"/" +
				Number(date.getMonth() + 2) +
				"/" +
				date.getFullYear();

			const date2 = date;
			date2.setMonth(date.getMonth() + 1); //getting next month

			/* time of payment */
			let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
			let minutes =
				date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
			let time = hours + ":" + minutes;

			const {
				clientId,
				paymentsId,
				paymentsStatus,
				plansPayments,
				paymentsAmount,
			} = d;

			return {
				clientId,
				paymentsId,
				paymentsStatus,
				plansPayments,
				paymentsAmount,
				paymentsDate: startDate,
				hour: time,
				finishedDate,
				paymentsDateStamp: d?.paymentsDate,
				finishedDateStamp: date2,
			};
		});

		return dispatch({
			type: GET_ALL_PAYMENTS,
			payload: map,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getTrainers = () => async (dispatch) => {
	try {
		const response = await axios("/trainer");

		return dispatch({
			type: GET_TRAINERS,
			payload: response.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const editPlans = (id, data) => async (dispatch) => {
	try {
		const response = await axios.put(`/plans/${id}`, data);

		return dispatch({
			type: EDIT_PLANS,
			payload: response.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const postPlans = (data) => async (dispatch) => {
	try {
		const response = await axios.post("/plans", data);

		return dispatch({
			type: POST_PLANS,
			payload: response.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const postReview = (review) => async () => {
	try {
		const data = await axios.post("/testimonials", review);

		return dispatch({
			type: POST_REVIEW,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const postTrainer = (trainer) => async (dispatch) => {
	try {
		const response = await axios.post("/trainer", trainer);

		return dispatch({
			type: POST_TRAINER,
			payload: response.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const deletePlan = (id) => async (dispatch) => {
	try {
		const response = await axios.delete(`/plans/${id}`);

		return dispatch({
			type: DELETE_PLAN,
			payload: id,
		});
	} catch (error) {}
};

export const postActivity = (activity) => async (dispatch) => {
	try {
		const response = await axios.post("/activities", activity);
		return dispatch({
			type: POST_ACTIVITIES,
			payload: response.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const putTestimonials = (id, data) => async () => {
	try {
		const response = await axios.put(`/testimonials/${id}`, data);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const postPaymentCash = (data) => async (dispatch) => {
	try {
		const response = await axios.post("/payments/cash", data);
		return dispatch({
			type: POST_PAYMENT_CASH,
			payload: data,
		});
	} catch (error) {}
};

export const getPaymentsByUser = (id) => async (dispatch) => {
	try {
		return dispatch({
			type: GET_PAYMENTS_BY_USER,
			payload: id,
		});
	} catch (error) {
		console.log(error);
	}
};
export const sendMailReview = (client) => async (dispatch) => {
	try {
		const data = await axios.post("/mail/sendmail?type=REVIEW", {
			to: client.mail,
			title: "Opinión",
			subject: "Danos tu opinión",
			html: {
				name: client.name,
			},
		});

		return data;
	} catch (error) {
		console.log(error);
	}
};

export const deleteActivity = (id) => async (dispatch) => {
	try {
		const response = await axios.delete(`/activities/${id}`);

		return dispatch({
			type: DELETE_ACTIVITY,
			payload: id,
		});
	} catch (error) {}
};

export const putActivity = (acti) => async (dispatch) => {
	try {
		const response = await axios.put(`/activities/${acti.id}`, acti);

		//console.log("console de acti",acti)
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const fillActivity = (acti) => async (dispatch) => {
	try {
		return dispatch({
			type: FILL_ACTIVITY,
			payload: { acti },
		});
	} catch (error) {}
};

export const emptyActivity = () => async (dispatch) => {
	return dispatch({
		type: EMPTY_ACTIVITY,
		payload: [],
	});
};

export const deleteTrainer = (id) => async (dispatch) => {
	try {
		const response = await axios.delete(`/trainer/${id}`);

		return dispatch({
			type: DELETE_TRAINER,
			payload: id,
		});
	} catch (error) {}
};

export const getActualPlan = () => {
	return {
		type: GET_ACTUAL_PLAN,
	};
};

export const deletePaymentCash = (id) => async (dispatch) => {
	try {
		const response = await axios.delete(`/payments/cash/${id}`);
		return dispatch({
			type: DELETE_PAYMENT_CASH,
			payload: id,
		});
	} catch (error) {
		console.log(error);
	}
};
