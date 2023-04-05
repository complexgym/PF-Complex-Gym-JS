import {
	GET_ALL_POSTS,
	SEARCH_POSTS,
	UPDATE_SEARCH,
	GET_CLIENT_DETAIL,
	POST_CLIENT,
	UPDATE_FILTERS,
	FILTER_POSTS,
	GET_POST_BY_ID,
	CLEAR_POST_DETAILS,
	GET_CLIENTS,
	GET_DELETED_CLIENTS,
	RESTORE_CLIENT,
	POST_BLOG,
	GET_ALL_TESTIMONIALS,
	DELETE_TESTIMONIALS,
	GET_ALL_ACTIVITIES,
	GET_ALL_PLANS,
	UPDATE_CLIENT,
	DELETE_CLIENT,
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
	PUT_CALENDAR,
	REVIEW,
	DELETE_ACTIVITY,
	PUT_ACTIVITY,
	FILL_ACTIVITY,
	EMPTY_ACTIVITY,
	DELETE_TRAINER,
	GET_ACTUAL_PLAN,
	DELETE_PAYMENT_CASH,
	EMPTY_DETAIL
} from "../actions/action-types.js";

const initialState = {
	allClients: [],
	clientDetail: [],
	allDeletedClients: [],
	initial_posts: [],
	matched_posts: [],
	ig_posts: [],
	post_details: {},
	search_blog: "",
	filters_blog: {
		tag: "",
		date: "",
	},
	testimonials: [],
	activities: [],
	allCalendar: [],
	allAdmin: [],
	allPayments: [],
	trainers: [],
	plans: [],
	initial_plans: [],
	payments_user: [],
	edit_activity: {
		id: "",
		name: "",
		description: "",
		image: "",
	},
	edit_button: true,
	actual_plan: [],
};

const rootReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_POSTS:
			return {
				...state,
				initial_posts: payload.blogPosts,
				matched_posts: payload.blogPosts,
				ig_posts: payload.igPosts,
			};
		case GET_POST_BY_ID:
			return {
				...state,
				post_details: payload,
			};
		case CLEAR_POST_DETAILS:
			return {
				...state,
				post_details: {},
			};
		case SEARCH_POSTS:
			return {
				...state,
				matched_posts: payload,
			};
		case UPDATE_SEARCH:
			return {
				...state,
				search_blog: payload,
			};
		case FILTER_POSTS:
			return {
				...state,
				matched_posts: payload,
			};
		case UPDATE_FILTERS:
			return {
				...state,
				filters_blog: {
					...state.filters_blog,
					tag: payload.tag,
					date: payload.date,
				},
			};

		case GET_CLIENTS:
			return {
				...state,
				allClients: payload,
			};
		case GET_CLIENT_DETAIL:
			return {
				...state,
				clientDetail: payload,
			};
		case POST_CLIENT:
			return {
				...state,
			};
		case DELETE_CLIENT:
			return {
				...state,
				allClients: state.allClients.filter((client) => client.id !== payload),
			};
			case EMPTY_DETAIL:
				return{
						...state,
						clientDetail: []
				}
		case GET_DELETED_CLIENTS:
			return {
				...state,
				allDeletedClients: payload,
			};
		case RESTORE_CLIENT:
			return {
				...state,
			};
		case POST_BLOG:
			return {
				...state,
			};
		case DELETE_BLOG:
			return {
				...state,
				initial_posts: state?.initial_posts?.filter((el) => el.id !== payload),
				matched_posts: state?.matched_posts?.filter((el) => el.id !== payload),
				ig_posts: state.ig_posts?.filter((el) => el.id !== payload),
			};
		case GET_ALL_TESTIMONIALS:
			return {
				...state,
				testimonials: payload,
			};
		case DELETE_TESTIMONIALS:
			return {
				...state,
				testimonials: state.testimonials.filter(
					(testimony) => testimony.id !== payload
				),
			};
		case GET_ALL_ACTIVITIES:
			return {
				...state,
				activities: payload,
			};
		case GET_ALL_PLANS:
			return {
				...state,
				plans: payload.separatedByCategory,
				initial_plans: payload.allData,
			};
		case UPDATE_CLIENT:
			return {
				...state,
			};
		case GET_CALENDAR:
			return {
				...state,
				allCalendar: payload,
			};
		case POST_CALENDAR:
			return {
				...state,
				allCalendar: [...state.allCalendar, payload],
			};
		case DELETE_CALENDAR:
			return {
				...state,
				allCalendar: state.allCalendar.filter(
					(calendar) => calendar.id !== payload
				),
			};
		case PUT_CALENDAR:
			return {
				...state,
			};
		case GET_ALL_ADMIN:
			return {
				...state,
				allAdmin: payload,
			};
		case POST_ADMIN:
			return {
				...state,
			};
		case REMOVE_ADMIN:
			return {
				...state,
			};
		case POST_PAYMENT:
			return {
				...state,
				allPayments: [...state.allPayments, payload],
			};
		case GET_ALL_PAYMENTS:
			if (!payload.error) {
				return {
					...state,
					allPayments: payload?.sort((a, b) =>
						a?.clientId?.localeCompare(b?.clientId)
					),
				};
			}
		case POST_PAYMENT_CASH:
			return {
				...state,
				allPayments: [...state.allPayments, payload],
			};
		case DELETE_PAYMENT_CASH:
			return {
				...state,
				allPayments: state.allPayments.filter((el) => el?.paymentsId !== payload),
			};
		case GET_TRAINERS:
			return {
				...state,
				trainers: payload,
			};
		case EDIT_PLANS:
			return {
				...state,
			};
		case POST_PLANS:
			return {
				...state,
				initial_plans: [...state.initial_plans, payload],
			};
		case POST_REVIEW:
			return {
				...state,
				testimonials: [...state.testimonials, payload],
			};
		case POST_TRAINER:
			return {
				...state,
				trainers: [...state.trainers, payload],
			};
		case DELETE_PLAN:
			return {
				...state,
				initial_plans: state.initial_plans.filter((plan) => plan.id !== payload),
			};
		case POST_ACTIVITIES:
			return {
				...state,
				activities: [...state.activities, payload],
			};
		case GET_PAYMENTS_BY_USER:
			return {
				...state,
				payments_user: state?.allPayments
					?.filter((d) => {
						return d?.clientId === payload;
					})
					?.sort(
						(a, b) =>
							new Date(a.paymentsDateStamp).getTime() -
							new Date(b.paymentsDateStamp).getTime()
					),
			};
		case GET_ACTUAL_PLAN:
			//last pay of the current user
			const lastPay = state.payments_user?.[state.payments_user.length - 1];
			//*have a last pay
			if (lastPay) {
				let { paymentsDateStamp, finishedDateStamp } = lastPay;
				let today = new Date();
				let start = new Date(paymentsDateStamp);
				let end = new Date(finishedDateStamp);
				let { plansPayments, finishedDate } = lastPay;

				if (today > start && today < end) {
					return {
						...state,
						actual_plan: { status: "active", plansPayments, finishedDate },
					};
				} else {
					return {
						...state,
						actual_plan: {},
					};
				}

				//*have not a las pay
			} else {
				return {
					...state,
					actual_plan: {},
				};
			}
		case REVIEW:
			return {
				...state,
			};
		case DELETE_ACTIVITY:
			return {
				...state,
				activities: state.activities.filter((activity) => activity.id !== payload),
			};
		case FILL_ACTIVITY:
			return {
				...state,
				edit_button: false,
				edit_activity: {
					id: payload.acti.id,
					name: payload.acti.name,
					description: payload.acti.description,
					image: payload.acti.image,
				},
			};
		case PUT_ACTIVITY:
			return {
				...state,
			};
		case EMPTY_ACTIVITY:
			return {
				...state,
				edit_button: true,
				edit_activity: {
					id: "",
					name: "",
					description: "",
					image: "",
				},
			};
		case DELETE_TRAINER:
			return {
				...state,
				trainers: state.trainers.filter((trainer) => trainer.id !== payload),
			};
		case DELETE_BLOG:
			return {
				...state,
				initial_posts: state.initial_posts.filter((el) => el.id !== payload),
				matched_posts: state.matched_posts.filter((el) => el.id !== payload),
			};
		default:
			return {
				...state,
			};
	}
};
export default rootReducer;
