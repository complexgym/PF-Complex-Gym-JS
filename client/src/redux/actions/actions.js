import {GET_ALL_POSTS, GET_POST_BY_ID, SEARCH_POSTS, UPDATE_SEARCH, GET_CLIENT_DETAIL, POST_CLIENT} from "./action-types.js"
import axios from "axios"

export function getAllPosts(){
   return async function(dispatch){
    try{
        const response = await axios.get("/publications/all")
        return dispatch({
            type: GET_ALL_POSTS,
            payload: response.data
        })
    }
    catch(err){
        console.log(error);
    }
   }
}

export function searchPosts(title){
    return async function(dispatch){
        try{
            const response = await axios.get(`/publications?title=${title}`)
            return dispatch({
                type: SEARCH_POSTS,
                payload: response.data
            })
        }
        catch(err){
            console.log(error);
        }
    }
}

export function updateSearch(title){
    return {
        type: UPDATE_SEARCH,
        payload: title
    }
}

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
